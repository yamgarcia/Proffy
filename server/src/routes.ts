import express from "express";
import db from "./database/connection";
import convertHourToMinutes from "./utils/convertHourToMinutes";

const routes = express.Router();

interface ScheduleItem {
  class_id?: number;
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (req, res) => {
  const { name, avatar, whatsapp, bio, cost, subject, schedule } = req.body;

  //* using trx to replace the use of db fails the whole operation if one transaction fails
  const trx = await db.transaction();

  try {
    const insertedUsersIds = await trx("users").insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesId = await trx("classes").insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesId[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      };
    });

    await trx("class_schedule").insert(classSchedule);

    //* Commits the whole operation to the database if no errors are found
    await trx.commit();

    return res.status(201).send();
  } catch (err) {
    //* Undo every change in the database since "trx" was declared
    await trx.rollback();

    console.error(err.message);
    return res.status(400).json({
      error: "Unexpected error while creation a new class",
    });
  }
});

export default routes;

/**
 *
 * @param time
 */

export default function convertHourToMinutes(time: string) {
  // 08:00
  // the map returns hours on the [0] and minutes on the [1]
  const [hour, minutes] = time.split(":").map(Number);

  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}

import images from './images.json';

function chooseSet(date) {
  const hour = (date || new Date()).getHours();

  if (hour < 9) {
    return images.morning;
  }
  if (hour < 10) {
    return images.starting;
  }
  if (hour < 12) {
    return images.day;
  }
  if (hour < 14) {
    return images.lunch;
  }
  if (hour < 17) {
    return images.day;
  }
  return images.evening;
}

export default function (date) {
  const set = chooseSet(date);
  const index = Math.floor(Math.random() * set.length);

  return set[index];
}

export function getBusinessDate(): Date {
  const data = new Date();
  if (data.getDay() === 0) {
    data.setDate(data.getDate() + 1);
  } else if (data.getDay() === 6) {
    data.setDate(data.getDate() + 2);
  }
  return data;
}

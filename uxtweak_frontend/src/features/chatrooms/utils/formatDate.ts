export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);

  const pad = (num: number) => num.toString().padStart(2, '0');

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear().toString().slice(-2);

  return `${hours}:${minutes} (${day}.${month}.${year})`;
}

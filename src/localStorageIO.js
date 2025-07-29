export function saveData(storageKey, data) {
  const dataJson = JSON.stringify(data);
  localStorage.setItem(storageKey, dataJson);
  console.info(`Saved ${data} to key of ${storageKey}`);
}

export function getData(storageKey) {
  const data = localStorage.getItem(storageKey);
  const parsedData = JSON.parse(data);
  return parsedData;
}

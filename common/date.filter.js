export default (value, type) => {
  const dt = new Date(value);
  if (type === 'date') {
    return dt.toLocaleDateString();
  } else if (type === 'time') {
    return dt.toLocaleTimeString();
  } else {
    return dt.toLocaleString();
  }
};

function sorting(key, param, data) {
  param = param.toLowerCase();
  if (param.length === 0) return data;
  return data.sort((a, b) => {
    if (a[param] < b[param]) {
      return key === 0 ? -1 : 1;
    } else if (a[param] > b[param]) {
      return key === 0 ? 1 : -1;
    } else {
      return 0;
    }
  });
}

export default sorting;

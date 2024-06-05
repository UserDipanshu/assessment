function paginate(pageSize, pageNum, data) {
  const page = pageNum;
  let paginatedData = data.filter((e, index) => {
    return page * pageSize <= index && index < page * pageSize + pageSize
      ? e
      : null;
  });

  return paginatedData;
}

export default paginate;

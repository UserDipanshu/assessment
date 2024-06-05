function filteringData(selectedGenre, data) {
  if (selectedGenre.length === 0) return data;
  let filteredMovies = data.filter((m) => m.genre == selectedGenre);
  return filteredMovies;
}

export default filteringData;

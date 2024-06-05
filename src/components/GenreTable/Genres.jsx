import genres from "../../utils/genreDb.js"

function GenresTable({ onGenreChange }) {
  return (
    <table className="table">
      <thead>
        <tr onClick={() => onGenreChange("")}>
          <th scope="col">All Movies</th>
        </tr>
      </thead>
      <tbody>
        {genres.map((genre) => (
          <tr key={genre.id} onClick={() => onGenreChange(genre.name)}>
            <th>{genre.name}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GenresTable;

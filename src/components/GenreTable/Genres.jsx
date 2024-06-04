import genres from "../../utils/genreDb.js"

function GenresTable() {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">All Movies</th>
        </tr>
      </thead>
      <tbody>
        {genres.map((genre) => (
          <tr key={genre.id}>
            <th>{genre.name}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GenresTable;

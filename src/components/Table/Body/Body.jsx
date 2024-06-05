

function Body({data}) {
  return (
    <tbody>
      {data.map((movie) => (
        <tr key={movie.id}>
          <th scope="row">{movie.id}</th>
          <td>{movie.name}</td>
          <td>{movie.genre}</td>
          <td>{movie.rating}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Body;

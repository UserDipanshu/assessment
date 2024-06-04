const tableHeader = [
  { value: "#" },
  { value: "Name" },
  { value: "Genre" },
  { value: "Rating" },
];

function Header() {
  return (
    <thead>
      <tr>
        {tableHeader.map((item) => (
          <th scope="col">{item.value}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Header;

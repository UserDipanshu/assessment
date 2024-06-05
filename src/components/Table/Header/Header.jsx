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
        {tableHeader.map((item, index) => (
          <th scope="col" key={`${index} ${item.value}`}>{item.value}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Header;

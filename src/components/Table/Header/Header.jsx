const tableHeader = [
  { value: "Id" },
  { value: "Name" },
  { value: "Genre" },
  { value: "Rating" },
];

function Header({ onSort }) {
  return (
    <thead>
      <tr>
        {tableHeader.map((item, index) => (
          <th scope="col" key={`${index} ${item.value}`} onClick={() => onSort(item.value)} >{item.value}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Header;

import Body from "./Body/Body.jsx";
import Header from "./Header/Header.jsx";

function Table({data, onSort}) {

  return (
    <>
      <table className="table">
        <Header onSort={onSort}/>
        <Body data = {data} />
      </table>
    </>
  );
}

export default Table;

import Body from "./Body/Body.jsx";
import Header from "./Header/Header.jsx";

function Table({data}) {

  return (
    <>
      <table className="table">
        <Header />
        <Body data = {data} />
      </table>
    </>
  );
}

export default Table;

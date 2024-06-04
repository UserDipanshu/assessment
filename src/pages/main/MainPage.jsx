import GenresTable from "../../components/GenreTable/Genres";
import Table from "../../components/Table/Table";
import "./main.css";

function MainPage() {
  return (
    <div className="mainCont">
      <div className="rowOne">
        <div className="genreCol">
          <GenresTable />
        </div>
        <div className="movieCol">
          <Table />
        </div>
      </div>
      <div className="rowTwo"></div>
    </div>
  );
}

export default MainPage;

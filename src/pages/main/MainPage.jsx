import { useEffect, useState } from "react";
import GenresTable from "../../components/GenreTable/Genres";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import variables from "../../utils/vars/variables";
import data from "../../utils/movieDb";
import paginate from "../../utils/helperFunctions/paginate";
import "./main.css";

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [curPage, setCurPage] = useState(0);

  const totalPages = Math.ceil(data.length / variables.pageSize);

  useEffect(() => {
    const paginatedData = paginate(variables.pageSize, curPage, data);
    setMovies(paginatedData);
  }, [curPage]);

  function handlePageChange(curPage) {
    setCurPage(curPage);
  }

  return (
    <div className="mainCont">
      <div className="rowOne">
        <div className="genreCol">
          <GenresTable />
        </div>
        <div className="movieCol">
          <Table data={movies} />
        </div>
      </div>
      <div className="rowTwo">
        <Pagination
          totalPages={totalPages}
          curPage={curPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default MainPage;

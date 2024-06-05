import { useEffect, useState } from "react";
import GenresTable from "../../components/GenreTable/Genres";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import variables from "../../utils/vars/variables";
import data from "../../utils/movieDb";
import paginate from "../../utils/helperFunctions/paginate";
import filteringData from "../../utils/helperFunctions/filtering";
import "./main.css";

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const [processedMovies, setProecessedMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const totalPages = Math.ceil(processedMovies.length / variables.pageSize);

  useEffect(() => {
    const filteredData = filteringData(selectedGenre, data);
    setProecessedMovies(filteredData);

    const paginatedData = paginate(variables.pageSize, curPage, filteredData);
    setMovies(paginatedData);
  }, [curPage, selectedGenre]);

  function handleGenreChange(genre) {
    setCurPage(0);
    setSelectedGenre(genre);
  }

  function handlePageChange(curPage) {
    setCurPage(curPage);
  }

  return (
    <div className="mainCont">
      <div className="rowOne">
        <div className="genreCol">
          <GenresTable onGenreChange={handleGenreChange} />
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

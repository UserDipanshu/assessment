import { useEffect, useState } from "react";
import GenresTable from "../../components/GenreTable/Genres";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import variables from "../../utils/vars/variables";
import data from "../../utils/movieDb";
import paginate from "../../utils/helperFunctions/paginate";
import filteringData from "../../utils/helperFunctions/filtering";
import "./main.css";
import Search from "../../components/SearchBar/SearchBox";
import searching from "../../utils/helperFunctions/searching";

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const [processedMovies, setProecessedMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const totalPages = Math.ceil(processedMovies.length / variables.pageSize);

  useEffect(() => {
    const filteredData = searchQuery.length === 0 ? filteringData(selectedGenre, data) : searching(searchQuery, data);
    setProecessedMovies(filteredData);

    const paginatedData = paginate(variables.pageSize, curPage, filteredData);
    setMovies(paginatedData);
  }, [curPage, selectedGenre, searchQuery]);

  function handleGenreChange(genre) {
    setSearchQuery("");
    setCurPage(0);
    setSelectedGenre(genre);
  }

  function handlePageChange(curPage) {
    setCurPage(curPage);
  }

  function handleSearch(query) {
    setSelectedGenre("")
    setSearchQuery(query)
  }

  return (
    <div className="mainCont">
      <div className="rowOne">
        <div className="genreCol">
          <GenresTable onGenreChange={handleGenreChange} />
        </div>
        <div className="movieCol">
          <Search value={searchQuery} onSearch={handleSearch} />
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

import "./search.css"

function Search({ value, onSearch }) {
    return (
        <div className="searchCont">
            <input type="text" name="search" id="search" placeholder="Search" value={value} onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}

export default Search
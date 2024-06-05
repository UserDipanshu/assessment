function searching(searchQuery, data) {
    let searchedData = data.filter(m => m.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
    return searchedData;
}

export default searching
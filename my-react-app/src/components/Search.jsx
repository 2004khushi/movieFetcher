const Search = ({searchTerm, setSearchTerm}) => {
    console.log({searchTerm});

    return (
        <div className = "search">
            <div>
                <img src="search.svg" alt="search" />

                <input
                type="text"
                placeholder="Search thru 1000s of movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>

            </div>
        </div>
    )
}

export default Search

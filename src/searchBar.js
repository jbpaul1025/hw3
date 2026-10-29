import './searchBar.css';

function SearchBar({ sortBy, setSortBy, search, setSearch }) {
    return (
        <div className="controls">
            {/* Search bar */}
            <input
                type="text"
                id="search-input"
                placeholder="Search for a movie..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}   // e is the event object, e.target.value is the new value of the input field
            ></input>

            {/* Sorting Filters */}
            <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="">Sort By</option>
                <option value="release-asc">Release Date (Asc)</option>
                <option value="release-desc">Release Date (Desc)</option>
                <option value="rating-asc">Rating (Asc)</option>
                <option value="rating-desc">Rating (Desc)</option>
            </select>
        </div>
    );
}

export default SearchBar;
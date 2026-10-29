import SearchBar from './searchBar';
import './header.css';

function Header({ sortBy, setSortBy, search, setSearch }) {
    return (
        <header>
            <div class="title-container">
                <h1>Movie Explorer</h1>
            </div>
            <SearchBar
                sortBy={sortBy}
                setSortBy={setSortBy}
                search={search}
                setSearch={setSearch}
            />
        </header>
    );
}

export default Header;
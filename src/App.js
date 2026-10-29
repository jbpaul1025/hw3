import { useState } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

function App() {
    // Create state variables for the current sort order, search query
    const [sortBy, setSortBy] = useState('');
    const [search, setSearch] = useState('');

    // Create state variables for the current page and total pages
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    return (
        <div>
            <Header
                sortBy={sortBy}         // prop = {variable}
                setSortBy={setSortBy}   // prop is received by header
                search={search}         // variable is passed from app to header
                setSearch={setSearch}
            />

            <Content
                sortBy={sortBy}
                search={search}
                page={page}
                setTotalPages={setTotalPages}
            />

            <Footer
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default App;
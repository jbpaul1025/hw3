import { useState, useEffect } from 'react';
import MovieCard from './movieCard';
import './content.css';

// Loads the current movie page and displays its cards.
function Content({ sortBy, search, page, setTotalPages }) {
    const [movies, setMovies] = useState([]);

    // Fetch new results when the search query or current page changes.
    useEffect(() => {
        const controller = new AbortController();

        async function fetchMovies() {

            const apiKey = '578a39f001349866457778d44dd18156';

            // Use discovery results by default
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;

            // Search results for non-empty queries.
            if (search.trim() !== '') {
                url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(search.trim())}&page=${page}`;
            }

            try {
                const response = await fetch(url, {
                    signal: controller.signal
                });

                if (!response.ok) {
                    console.error('Failed to fetch movies');
                    return;
                }

                const data = await response.json();     // Serves the purpose of JSONIFY

                setMovies(data.results);
                // The API supports at most 500 pages for this browsing flow.
                setTotalPages(Math.min(data.total_pages, 500));
            }
            catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Failed to fetch movies', error);
                }
            }
        }

        fetchMovies();

        // Cancel an obsolete request when inputs change or the component unmounts.
        return () => controller.abort();
    }, [search, page, setTotalPages]);

    // Sort a copy so the API result array remains unchanged.
    const sortedMovies = [...movies];

    // Apply the selected release-date or rating order before rendering.
    if (sortBy === 'release-asc') {
        sortedMovies.sort((a, b) =>
            a.release_date.localeCompare(b.release_date)    //LocaleCompare() compares two strings since release_date is a string, not a number
        );
    }
    else if (sortBy === 'release-desc') {
        sortedMovies.sort((a, b) =>
            b.release_date.localeCompare(a.release_date)
        );
    }
    else if (sortBy === 'rating-asc') {
        sortedMovies.sort((a, b) =>
            a.vote_average - b.vote_average                 //vote_average is a number, so we can subtract them to sort in ascending order
        );
    }
    else if (sortBy === 'rating-desc') {
        sortedMovies.sort((a, b) =>
            b.vote_average - a.vote_average
        );
    }

    return (
        // Render one card per result, using the movie ID as its stable key.
        <main className="movie-container">
            {sortedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </main>
    );
}

export default Content;
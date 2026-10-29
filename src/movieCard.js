import './movieCard.css';

function MovieCard({ movie }) {
  // Build an image URL only when the movie has an available poster.
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: null;

  return (
    <div className="movie-card">
      {/* Show a placeholder when no poster image is provided. */}
      {poster ? (
        <img src={poster} alt={movie.title} />
      ) : (
        <div>No Poster Available</div>
      )}

      {/* Display available movie metadata, with a fallback for missing dates. */}
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date || 'Unknown'}</p>
      <p>Rating: {movie.vote_average.toFixed(1)}/10</p>
    </div>
  );
}

export default MovieCard;
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';

export default function MovieDetails({ movies, watchlist, toggleWatchlist }) {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const movie = movies.find(movie => movie.id === parseInt(id));
    const isWatchlisted = watchlist.includes(parseInt(id));

    const handleError = (e) => {
        e.target.src = 'images/default.jpg';
    };

    const getRatingClass = (rating) => {
        if (rating >= 8) return 'rating-good';
        if (rating >= 5 && rating < 8) return "rating-ok";
        return "rating-bad";
    };

    if (!movie) {
        return (
            <div className="movie-details">
                <h2>Movie not found</h2>
                <button onClick={() => navigate('/')} className="back-button">
                    Back to Movies
                </button>
            </div>
        );
    }

    return (
        <div className="movie-details">
            <div className="movie-hero-section">
                {/* Blurred background image */}
                <div 
                    className="movie-hero-background"
                    style={{
                        backgroundImage: `url(/images/${movie.image})`,
                    }}
                ></div>
                
                <div className="movie-hero-content">
                    {/* Normal sized poster */}
                    <div className="movie-poster">
                        <img 
                            src={`/images/${movie.image}`} 
                            alt={movie.title} 
                            onError={handleError} 
                        />
                    </div>
                    
                    <div className="movie-details-info">
                    <h1 className="movie-details-title">{movie.title}</h1>
                    
                    <div className="movie-details-meta">
                        <span className="movie-details-genre">{movie.genre}</span>
                        <span className={`movie-details-rating ${getRatingClass(movie.rating)}`}>
                            ⭐ {movie.rating}/10
                        </span>
                    </div>
                    
                    {movie.description && (
                        <div className="movie-details-description">
                            <h3>Description</h3>
                            <p>{movie.description}</p>
                        </div>
                    )}
                    
                    {movie.year && (
                        <div className="movie-details-year">
                            <strong>Release Year:</strong> {movie.year}
                        </div>
                    )}
                    
                    {movie.director && (
                        <div className="movie-details-director">
                            <strong>Director:</strong> {movie.director}
                        </div>
                    )}
                    
                    {movie.cast && (
                        <div className="movie-details-cast">
                            <strong>Cast:</strong> {movie.cast.join(', ')}
                        </div>
                    )}
                    
                    <div className="movie-details-actions">
                        <button 
                            onClick={() => toggleWatchlist(movie.id)} 
                            className={`watchlist-toggle-btn ${isWatchlisted ? 'in-watchlist' : 'not-in-watchlist'}`}
                        >
                            {isWatchlisted ? '✓ Remove from Watchlist' : '+ Add to Watchlist'}
                        </button>
                        
                        <button onClick={() => navigate('/')} className="back-button">
                            ← Back to Movies
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
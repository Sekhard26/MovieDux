import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function MovieCard({movie, isWatchlisted, toggleWatchlist}) {
    const navigate = useNavigate();

    const handleError = (e) => {
        e.target.src = 'images/default.jpg';
    };

    const getRatingClass = (rating) => {
        if (rating >= 8) return 'rating-good';
        if (rating >= 5 && rating < 8) return "rating-ok";
        return "rating-bad";
    };

    const handleCardClick = (e) => {
        // Prevent navigation when clicking on the watchlist toggle
        if (e.target.closest('.switch')) {
            return;
        }
        navigate(`/movie/${movie.id}`);
    };

    return(
        <div key={movie.id} className='movie-card movie-card-clickable' onClick={handleCardClick}>
            <img 
                src={`images/${movie.image}`} 
                alt={movie.title} 
                onError={handleError} 
            />
            <div className='movie-card-info'>
                <h3 className='movie-card-title'>{movie.title}</h3>
                <div>
                    <span className='movie-card-genre'>{movie.genre}</span>
                    <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
                        {movie.rating}
                    </span>
                </div>
                <label className='switch'>
                    <input 
                        type="checkbox" 
                        checked={isWatchlisted} 
                        onChange={() => toggleWatchlist(movie.id)} 
                    />

                    <span className='slider'>
                        <span className='slider-label'>
                            {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
                        </span>
                    </span>
                </label>      
            </div>
        </div>
    );
}
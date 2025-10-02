import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MovieGrid';
import Watchlist from './components/Watchlist';
import MovieDetails from './components/MovieDetails';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

function AppContent() {
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const location = useLocation();

    useEffect(() => {
  fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data.map(m => ({...m, rating: parseFloat(m.rating)}))));
}, []);


    const toggleWatchlist = (movieId) => {
      setWatchlist(prev => 
        prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
       )
    }

    // Check if we're on the movie details page
    const isMovieDetailsPage = location.pathname.startsWith('/movie/');

    return (
        <div className='container'>
            {!isMovieDetailsPage && <Header />}
            {!isMovieDetailsPage && (
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/watchlist">Watchlist</Link>
                        </li>
                        
                        <li>
                            <Link to="/contact">Feedback</Link>
                        </li>
                    </ul>
                </nav>
            )}

            <Routes>
                <Route path="/" element={
                    <>
                        <MoviesGrid watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />
                        <Contact />
                    </>
                } />
                <Route path="/watchlist" element={
                    <Watchlist watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />
                } />
                <Route path="/categories" element={
                    <div style={{padding: '2rem', textAlign: 'center', color: '#fff'}}>
                        <h2>Categories</h2>
                        <p>Browse movies by genre - Coming Soon!</p>
                    </div>
                } />
                <Route path="/about" element={
                    <div style={{padding: '2rem', textAlign: 'center', color: '#fff'}}>
                        <h2>About Moviedux</h2>
                        <p>Your ultimate movie companion - Coming Soon!</p>
                    </div>
                } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/movie/:id" element={<MovieDetails movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
            </Routes>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Router>
                <AppContent />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
 
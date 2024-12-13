import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

function Display() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await axios.get('https://movies-8314d-default-rtdb.firebaseio.com/movies.json');
                const fetchedMovies = response.data;
                console.log(fetchedMovies)
                 setMovies(Object.values(fetchedMovies)); 
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        fetchMovies();
    }, []); 

    async function handleDelete(id) {
        await axios.delete(`https://movies-8314d-default-rtdb.firebaseio.com/movies/${id}.json`)
    console.log(id)
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    }
    return (
        <>
        <div className="outerDiv">
            {movies.map((movie,index) => (
                <div className='innerDiv' key={index}>
                    <h2>Title:<strong>{movie.title}</strong></h2>
                    <p>Description:<span>{movie.description}</span></p>
                    <p>Year:<span>{movie.year}</span></p>
                    <p>{movie.watched}</p>
                    <button onClick={() => handleDelete(movie.id)}>Delete</button>
                </div>
            ))}
            </div>
        </>
    );
}

export default Display;

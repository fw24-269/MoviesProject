import React, { useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
function AddMovies() {
    
    const[addMovie,setAddMovie] = useState({
        title:'',
        description:'',
        year:'',
    })
    function handleChange(e) {
        const {name,value} = e.target;
        setAddMovie({...addMovie,[name]:value,id:uuidv4()})
    }
    async function handleAdd() {
        await axios.post('https://movies-8314d-default-rtdb.firebaseio.com/movies.json',addMovie)
        setAddMovie({
            title:'',
        description:'',
        year:''
        });
    }

    



    return (
        <>
        <div className="add">
        <h3>Add Movies</h3>
        <input type="text" name="title" value={addMovie.title} placeholder="title" onChange={handleChange}/>
        <input type="text" name="description" value={addMovie.description} placeholder="description" onChange={handleChange} />
        <input type="text" name="year" value={addMovie.year} placeholder="year"  onChange={handleChange}/>
        <button onClick={handleAdd}>Add Movie</button>
        </div>
        </>

    )
}
export default AddMovies;
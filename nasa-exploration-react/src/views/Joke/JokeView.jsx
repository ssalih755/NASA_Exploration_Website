import JokeService from "../.././services/JokeService"
import { useState, useEffect } from "react";
import "./JokeView.css"

export default function JokeView() {

    const [joke, setJoke] = useState("");

    function getJoke() {
        JokeService.getRandmJoke() //async communication
            .then(response => {     
                // console.log(response);
                setJoke(response.data);
            })
    }    

    useEffect(() => {
        getJoke();
    }, []); //[] call this on initial load only

    return (
        <div className="container joke-container">
            <h1> Joke of the Day! </h1>
            <p className="joke-text">{joke}</p>
            <button onClick={getJoke}> Get Another Joke </button>
        </div>
    )

}
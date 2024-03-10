// create your App component here
import React, { useEffect, useState } from "react";

function App() {

    const [dogPic, setDogPic] = useState("")

    useEffect(() => {

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setDogPic(data.message))

    }, [])

    
    if (!dogPic) {
       return <p>Loading...</p>
    }



    return (
        <div>
            <img src={dogPic} alt="A Random Dog" />
        </div> 
    )
}

export default App
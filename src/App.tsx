import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getAllPlants} from "./controllers/plantsController";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPlants());
    }, [])

    return (
        <div className="App">

        </div>
    );
}

export default App;

import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getAllPlants} from "./controllers/plantsController";
import MapContext from "./components/mapContext/mapContext";
import Map from "./components/map";
import "./App.css";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPlants());
    }, [])

    return (
        <div className="App">
            <MapContext>
                <Map />
            </MapContext>
        </div>
    );
}

export default App;

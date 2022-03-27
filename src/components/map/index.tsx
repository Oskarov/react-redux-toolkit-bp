import React, {useRef, useState} from 'react';
import {Map as YandexMap, YMapsApi,} from 'react-yandex-maps';
import {useSelector} from "react-redux";
import {IStore} from "../../store/store";
import PlanetItem from "../plantItem";
import {useGetAllCitiesQuery} from "../../services/citiesService";
import CityItem from "../cityItem";

interface MapProps {

}

const Map: React.FC<MapProps> = () => {
    const ref = useRef(null);
    const [yMapsApi, setYMapsApi] = useState<YMapsApi>();
    const [yMapsRef, setYMapsRef] = useState<React.Ref<any>>();
    const [zoom, setZoom] = useState(9)
    const [centerCoordinates, setCenterCoordinates] = useState([55.75, 37.57])
    const mapState = React.useMemo(() => ({center: centerCoordinates, zoom}), [
        zoom, centerCoordinates
    ]);
    const { data, error, isLoading } = useGetAllCitiesQuery('');
    const {ids} = useSelector((state: IStore) => ({ids: state.plants.ids}));


    return <div className="map-wrapper" ref={ref}>
        <YandexMap state={mapState} width="100%" height="100%" instanceRef={(ref) => setYMapsRef(ref)}
                   onLoad={(maps) => {
                       setYMapsApi(maps)
                   }}>
            {yMapsApi && yMapsRef &&
            <>
                {ids.map(id => <PlanetItem id={id} key={id}/>)}
            </>
            }
            {!!data && !isLoading &&
            <>
                {data.map(data => <CityItem key={data.id} {...data}/>)}
            </>
            }
        </YandexMap>
    </div>;
}

export default Map;

import React from 'react';
import {Placemark} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../store/store";
import {selectPlant} from "../../controllers/plantsController";

interface PlantItemProps {
    id: string
}

const PlantItem: React.FC<PlantItemProps> = ({id}) => {
    const {plant} = useSelector((state: IStore) => ({plant: state.plants.entities[id]}));
    const dispatch = useDispatch();

    const handleClickOnPlant = (id: string) => {
        dispatch(selectPlant(id));
    }

    return <>{plant && <Placemark key={id}
                                  geometry={[parseFloat(plant.latitude), parseFloat(plant.longitude)]}
                                  options={{
                                      zIndex: plant.selected ? '10' : '9',
                                      hideIconOnBalloonOpen: false,
                                      balloonCloseButton: false,
                                      openBalloonOnClick: false,
                                      preset: 'islands#blueVegetationIcon',
                                      iconColor: plant.selected ? 'red' : 'blue',
                                      iconShape: {
                                          type: 'Circle',
                                          coordinates: [0, 0],
                                          radius: 12
                                      }
                                  }}
                                  properties={{
                                      plantId: plant.id,
                                      plant: plant,
                                  }}
                                  onClick={() => handleClickOnPlant(plant.id)}
    />}</>
}

export default PlantItem;

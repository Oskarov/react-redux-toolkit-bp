import React from 'react';
import {Placemark} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../store/store";
import {selectPlant} from "../../controllers/plantsController";
import {ICitiesImport} from "../../interfaces/ICities";

interface CityItemProps extends ICitiesImport{
}

const CityItem: React.FC<CityItemProps> = ({id, name, latitude, longitude, createdAt}) => {

    return <Placemark key={id}
                                  geometry={[parseFloat(latitude), parseFloat(longitude)]}
                                  options={{
                                      hideIconOnBalloonOpen: false,
                                      balloonCloseButton: false,
                                      openBalloonOnClick: false,
                                      preset: 'islands#blueLeisureCircleIcon',
                                      iconColor: 'green',

                                      iconShape: {
                                          type: 'Circle',
                                          coordinates: [0, 0],
                                          radius: 12
                                      }
                                  }}
                                  properties={{
                                      plantId: id,
                                  }}
    />
}

export default CityItem;

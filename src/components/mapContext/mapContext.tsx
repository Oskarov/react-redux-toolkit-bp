import React     from 'react';
import { YMaps } from 'react-yandex-maps';

interface DragAndDropContextProps {

}

const MapContext: React.FC<DragAndDropContextProps> = ({ children }) => {
    return <YMaps query={{
        load: 'package.full'
    }}>
        {children}
    </YMaps>

}

export default MapContext;

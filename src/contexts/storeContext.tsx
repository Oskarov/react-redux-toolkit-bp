import React from 'react';
import {Provider} from "react-redux";
import {store} from "../store/store";

interface ReduxContextProps {

}

const StoreContext: React.FC<ReduxContextProps> = ({children}) => {
    return <Provider store={store}>
        {children}
    </Provider>;
}

export default StoreContext;

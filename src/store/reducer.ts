import {plantsReducer} from "./reducers/plantsReducer";
import {citiesApi} from "../services/citiesService";

const reducer = {
    plants: plantsReducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
};
export default reducer;
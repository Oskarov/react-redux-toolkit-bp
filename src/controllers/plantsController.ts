import {Dispatch} from "redux";
import plantsService from "../services/plantsService";
import {setPlantsAction} from "../store/reducers/plantsReducer";

export const getAllPlants = () => {
    return async function (dispatch: Dispatch<any>) {
        const plants = plantsService.getAllPlants();
        if (plants) {
            dispatch(setPlantsAction(plants));
        }
    }
};
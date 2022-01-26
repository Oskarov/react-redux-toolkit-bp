import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlant, IPlantImport, IPlantsState} from "../../interfaces/IPlants";
import transferProperties from "../../controllers/utils/transferProperties";

const plantsAdapter = createEntityAdapter<IPlant>({
    selectId: (plant) => plant.id,
    sortComparer: (a, b) => a.nameId.localeCompare(b.nameId),
});

const initialState: IPlantsState = {
    ids: [],
    entities: {}
}

const plantsSlice = createSlice({
    name: 'plants',
    initialState: initialState,
    reducers: {
        setPlantsAction: (state, {payload}: PayloadAction<IPlantImport[]>) => {
            const transferItems = transferProperties(state.entities, payload, ['selected']);
            plantsAdapter.setAll(state, transferItems as IPlant[]);
        },
    },
});

export const plantsReducer = plantsSlice.reducer;
export const {
    setPlantsAction
} = plantsSlice.actions;
import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlant, IPlantImport, IPlantsState} from "../../interfaces/IPlants";
import transferProperties from "../../controllers/utils/transferProperties";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

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
        setSelectedAction: (state, {payload}: PayloadAction<string>) => {
            const el = state.entities[payload];
            if (el) {
                el.selected = !el.selected
            }
        },
    },
});

export const plantsReducer = plantsSlice.reducer;
export const {
    setPlantsAction,
    setSelectedAction
} = plantsSlice.actions;
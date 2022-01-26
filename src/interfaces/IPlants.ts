export interface IPlant {
    id: string,
    nameId: string,
    dateUpdated: string,
    authorName: string,
    latitude: string,
    longitude: string,
    selected: boolean,
}

export interface IPlantImport extends Omit<IPlant, "selected"> {

}

export interface IPlantsState {
    ids: string[],
    entities: { [key: string]: IPlant }
}
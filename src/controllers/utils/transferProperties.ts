interface ITransferItem {
    id: string;
    selected?: boolean;
}

const defaultProps: ITransferItem = {
    id: '0',
    selected: false
}

const transferProperties = <T extends ITransferItem>(originArray: { [key: string]: any }, newArray: T[], transferKeys: (keyof ITransferItem)[]) => {
    const data = newArray.map((item) => {
        const newProps: any = {};
        transferKeys.forEach(key => {
            if (originArray[item.id] && originArray[item.id][key]) {
                newProps[key] = originArray[item.id][key];
            } else {
                newProps[key] = defaultProps[key];
            }
        })
        return {
            ...item,
            ...newProps
        }
    });
    return data;
}

export default transferProperties;
import {makeAutoObservable} from "mobx";
import storeUser from "./storeUser";

class StoreTimeTable {
    activeTab = "today";

    constructor() {
        makeAutoObservable(this);
    }

    changeTab(e, name) {
        if (typeof name !== 'undefined')
            return this.activeTab = name;
        this.activeTab = e.currentTarget.getAttribute('tabName')
    };

};

const storeTimeTable = new StoreTimeTable();

export default storeTimeTable;
export { StoreTimeTable };
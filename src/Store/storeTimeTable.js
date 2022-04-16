import {makeAutoObservable} from "mobx";
import storeUser from "./storeUser";

class StoreTimeTable {
    todayTT = []
    currentTT = []
    nextTT = []

    activeTab = "today";

    constructor() {
        makeAutoObservable(this);
    }

    async getTimeTableToday() {
        const timeTable = await storeUser.myUser.method('timetable.getTimeTableToday', null, {}, 'GET', 'v1');
        this.todayTT = timeTable.data;
    }

    async getTimeTableWeek() {
        const timeTable = await storeUser.myUser.method('timetable.getTimeTableWeek', null, {}, 'GET', 'v1');
        this.currentTT = timeTable.data;
        console.log("СМОТРИ СЮДА",timeTable.data);
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
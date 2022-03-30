import {makeAutoObservable} from "mobx";

class StoreTabs {
    activeTab = "news";

    constructor() {
        makeAutoObservable(this);
    }

    changeTab(name) {
        this.activeTab = name;
    };
};

const storeTabs = new StoreTabs();

export default storeTabs;
export { StoreTabs };
import {makeAutoObservable} from "mobx";

class StoreView {
    activeView = {
        app: "auth",
        auth: "login",
        main: "main",
        news: "system",
    };

    constructor() {
        makeAutoObservable(this);
    }

    changeView(view, name) {
        this.activeView[view] = name;
    };
};

const storeView = new StoreView();

export default storeView;
export { StoreView };
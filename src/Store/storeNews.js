import {makeAutoObservable} from "mobx";
import storeUser from "../Store/storeUser";

class StoreNews {
    sysNews = [];
    iitNews = [];

    constructor() {
        makeAutoObservable(this);
    }

    async autoGetSysNews() {
        const news = await storeUser.myUser.method('news.getListArticle', null, {}, 'GET', 'v1');
        this.sysNews = news.data;
    }

};

const storeNews = new StoreNews();

export default storeNews;
export { StoreNews };
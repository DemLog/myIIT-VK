import {makeAutoObservable} from "mobx";
import storeUser from "../Store/storeUser";

class StoreNews {
    sysNews = [];
    sysCategories = [];
    sysState = false;

    sysCategory = 0;
    sysTab = 0;
    
    iitNews = [];

    constructor() {
        makeAutoObservable(this);
    }

    async autoGetSysNews() {
        const news = await storeUser.myUser.method('news.getListArticle', null, {}, 'GET', 'v1');
        this.sysNews = news.data;
        this.sysState = true;
    }
    async autoGetSysCategories() {
        const categories = await storeUser.myUser.method('news.getListCategory', null, {}, 'GET', 'v1');
        this.sysCategories = categories.data;
    }

    handleChangeCategory(e, value) {
        this.sysCategory = value;
    }

    handleChangeTab = (e, value) => {
        this.sysTab = value;
    };


};

const storeNews = new StoreNews();

export default storeNews;
export { StoreNews };
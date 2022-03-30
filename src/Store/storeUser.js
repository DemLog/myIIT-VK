import {makeAutoObservable} from "mobx";

class StoreUser {
    vkUser = null;
    myUser = null;

    constructor() {
        makeAutoObservable(this);
    }

    addVKUser(userData) {
      this.vkUser = userData;
    };

    addMyUser(userData) {
        this.myUser = userData;
        console.log(this.myUser)
    };
};

const storeUser = new StoreUser();

export default storeUser;
export { StoreUser };
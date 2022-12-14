import $ from 'jquery';

class ConfigClass {

    key = 'TBBUserTokenKeyValue';
    ttl = '180'; // 3 hours
     
    constructor() {
        
    }

    isUserLoggedIn()
    {
        return this.#confirmUserToken(this.getUserToken());
    }

    saveUserToken() {
        localStorage.TBBUserTokenKeyValue = 'tZiKxFKDcn';

        this.#set(this.key, 'tZiKxFKDcn', this.ttl)
    }

    getUserToken() {
        let UserToken = this.#get(this.key);
        // console.log(UserToken);
        return UserToken;
    }


    #confirmUserToken(token) {
        // TODO: add back-end here when it's done
        if(token) { return true; }
        return false;
    }

    #set(key, value, ttl) {
        let now = new Date();
        ttl = ttl * 60000;
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
            expiry: new Date(now.getTime() + ttl),
        }
        localStorage.setItem(key, JSON.stringify(item))
    }

    #get(key) {
        const itemStr = localStorage.getItem(key)
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()

        // compare the expiry time of the item with the current time
        if (now.getTime() > new Date(item.expiry).getTime()) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key)
            return null
        }
        return item.value
    }
}

const CONFIG = new ConfigClass();
export default CONFIG;
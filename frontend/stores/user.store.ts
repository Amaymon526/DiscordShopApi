import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {

    const user: string = "";

    function isAuthenticated(): boolean {
        return user != "";
    }

    return { user, isAuthenticated }
})
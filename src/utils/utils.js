import {CB} from "./cb_building.js";
import {CBS} from "./cbs_building.js";
import {CBE} from "./cbe_building.js";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const setPageTitle = (pageTitle) => {
    document.title = `FSUU Room Locatior - ${pageTitle}`;
}

export const fetchProfile = () => {
    const data = localStorage.getItem("profile");
    return data ? JSON.parse(data) : {};
}

export const fetchProfiles = () => {
    const data = localStorage.getItem("profiles");
    return data ? JSON.parse(data) : [];
}

export const scrollToTop = () => {
    window.scroll({top: 0});
}

export const checkAdmin = (email, password) => {
    return email === "admin@gmail.com" && password === "fsuu";
}

export const loggedIn = (data) => Object.keys(data).length > 0;

export const currentDate = () => {
    const date = new Date();
    return `Today is ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export const notNull = (data) => {
    return !(!data || data === [] || data === {} || data === '' || data === undefined || (Array.isArray(data) && data.length === 0));

}

const buildingDatas = {
    CB: CB,
    CBS: CBS,
    CBE: CBE
}

export const getBuildingData = (buildingId) => {
    return buildingDatas[buildingId];
}
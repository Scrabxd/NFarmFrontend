import axios from "axios";

export const restaurantApi = axios.create({
    url: 'http://nfarm-back.herokuapp.com/api/restaurant?apiToken=O1H7D701v4ZiWydw1OHPD/6Lq8gHeNBRqzdDGg1shjc=',
    method: 'POST',
    headers: { 'x-token': localStorage.getItem( 'token' ) }
})
import axios from "axios"

const URL = 'http://localhost:3000/api/oficios/';

export const oficioAxios = {
    getAll: async () => {
        const { data } = await axios.get(URL);
        return data; 
    } 
}
import axios from "axios";

const URL = 'http://localhost:3000/api/profesionales';

export const profesionalAxios = {
    getAll: async() => {
        const { data } = await axios.get(`${ URL }/`);
        return data;
    },
    getOne: async(id) => {
        const { data } = await axios.get(`${ URL }/${ id }`);
        return data;
         },
    save: async(profesional) => {
        const { data } = await axios.post(`${ URL }/`, profesional);
        return data;
    },
    update: async(profesional) => {
        const { id } = profesional;
        const { data } = await axios.put(`${ URL }/${ id }`, profesional);
        return data;
    },
    delete: async(id) => {
        const { data } = await axios.delete(`${ URL }/${ id }`);
        return data;
    },
    login: async(user) => {
        const { data } = await axios.post(`${URL}/login`, user);
        return data;
    }
}
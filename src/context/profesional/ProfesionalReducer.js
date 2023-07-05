import { TYPES } from "../types";
export const profesionalReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.GET_PROFESIONALES:
            state.isLoading = false;
            return {
                ...state,
                profesionals: payload
                };
        case TYPES.GET_PROFESIONAL:
            return {
                ...state,
                profesional: payload
                };
        case TYPES.ADD_PROFESIONAL:
            return {
                ...state,
                profesionales: [...state.profesionals, payload]
                };
        case TYPES.DELETE_PROFESIONAL:
            return {
                ...state,
                profesionales: state.profesionales.filter(profesional => profesional.id !== payload)
                };
        case TYPES.UPDATE_PROFESIONAL:
            return {
                ...state,
                profesionales: state.profesionales.map(profesional => profesional.id === payload.id ? payload : profesional)
                };
        default:
            return state;

    }
}
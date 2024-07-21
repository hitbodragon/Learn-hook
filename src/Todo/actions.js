// actions
// payload dữ liệu mang theo đi
import { SET_JOB, ADD_JOB, DELETE_JOB } from './contants';
export const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};
export const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};
export const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

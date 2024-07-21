import { SET_JOB, ADD_JOB, DELETE_JOB } from './contants';

//1 Init State, 2 state tạo 1 cái object
export const initState = {
    job: '',
    jobs: [],
};

// 3 reducers (hàm)
// (init , action), nhận đầu vào là giá trị khởi tạo và nhân action làm hành động, giá trị hiện tại và hành động là gì
const reducer = (state, action) => {
    // console.log('action', action);
    // console.log('prev state', state); // trước khi update
    //let newState;
    //action trong switch// giá trị bảo lưu dựa vào init state
    switch (action.type) {
        case SET_JOB:
            return {
                ...state, // state là init cũ của job vào trong jobs
                job: action.payload, // payload là dữ liệu
            };

        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload], // bảo  lưu và thêm giá trị mới vào mảng
            };

        case DELETE_JOB:
            const newJobs = [...state.jobs]; // giaỉ tất cả phần tử vào mảng mới
            newJobs.splice(action.payload, 1); // splice xoá 1 phần tử trong mảng
            return {
                ...state,
                jobs: newJobs,
            };

        default:
            throw new Error(`Invalid action ${action}`); // action ko hợp lệ
    }
    // console.log('new state', newState);
    // return newState;
};
export default reducer;

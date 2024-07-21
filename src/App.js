import { useState, useCallback, useMemo, useRef, useReducer } from 'react';
import Content from './Content';

// useReducer làm được cái gì thì useState làm được cái đó
// state dung các thao tác đơn giản như kiểu dữ liệu nguyên thuỷ , component ít logicc
//thao tác các logic các object lồng nnhau
// nhìu stae phương thức phức tạp

//  phân tích
// use state
// 1. sẽ có giá trị khởi tạo
// 2. có các hành động Action

// use Reducer
//1. giá trị khởi tạo
//2. hành động là gì
//3. reducer
//4 dispatch

// bài làm
//1 Init State, 2 state tạo 1 cái object
const initState = {
    job: '',
    jobs: [],
};
//Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

// payload dữ liệu mang theo đi
const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};
const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};
const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

// 3 reducers (hàm)
// (init , action), nhận đầu vào là giá trị khởi tạo và nhân action làm hành động, giá trị hiện tại và hành động là gì
const reducer = (state, action) => {
    console.log('action', action);
    console.log('prev state', state); // trước khi update
    let newState;
    //action trong switch// giá trị bảo lưu dựa vào init state
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state, // state là init cũ của job vào trong jobs
                job: action.payload, // payload là dữ liệu
            };
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload], // bảo  lưu và thêm giá trị mới vào mảng
            };
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs]; // giaỉ tất cả phần tử vào mảng mới
            newJobs.splice(action.payload, 1); // splice xoá 1 phần tử trong mảng
            newState = {
                ...state,
                jobs: newJobs,
            };
            break;
        default:
            throw new Error(`Invalid action ${action}`); // action ko hợp lệ
    }
    console.log('new state', newState);
    return newState;
};
function App() {
    // useReduce có thể nhận lên đến 3 đối số (reudcer, initState)
    // chạy , lần đầu chạy gọi reducer để đó , nhận giá trị khởi tạo và return lại 1 giá trị array
    // trong trường hợp này count nhận initState làm giá trị khởi tạo , giá trị thứ 2 là 1 hmaf gọi là dispatch
    // dispatch dùng để kích hoạt 1 cái action xem nó có hoạt động hay ko
    const [state, dispatch] = useReducer(reducer, initState);
    const inputRef = useRef();
    const { job, jobs } = state;
    //usememo(callback,des)
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob('')); // sau khi add xong thì reset lại input
        inputRef.current.focus();
    };
    return (
        <div style={{ padding: '10px 20px' }}>
            <h1>Todo</h1>
            <input
                ref={inputRef}
                type="text"
                value={job} // toway binding, input phụ thuộc vào dữ liệu r, nên muốn thay đổi cần có sự kiện
                placeholder=" Enter Todo"
                onChange={(e) => {
                    dispatch(setJob(e.target.value)); // lay ca du lieu va co hanh dong truyen vao luon
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            {/* do xoá mảng nên dùng index, ko có index sài id */}
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

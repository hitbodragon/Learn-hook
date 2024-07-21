import { useState, useCallback, useMemo, useRef, useReducer } from 'react';
import logger from './logger';
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
import reducer, { initState } from './reducers';
import { setJob, addJob, deleteJob } from './actions';
function App() {
    // useReduce có thể nhận lên đến 3 đối số (reudcer, initState)
    // chạy , lần đầu chạy gọi reducer để đó , nhận giá trị khởi tạo và return lại 1 giá trị array
    // trong trường hợp này count nhận initState làm giá trị khởi tạo , giá trị thứ 2 là 1 hmaf gọi là dispatch
    // dispatch dùng để kích hoạt 1 cái action xem nó có hoạt động hay ko
    const [state, dispatch] = useReducer(logger(reducer), initState);
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

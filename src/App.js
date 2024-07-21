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
//1 Init State
const initState = 0;
//Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// 3 reducers (hàm)
// (init , action), nhận đầu vào là giá trị khởi tạo và nhân action làm hành động, giá trị hiện tại và hành động là gì
const reducer = (state, action) => {
    console.log('running');
    // action trong switch// giá trị bảo lưu dựa vào init state
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error(`Invalid action ${action}`); // action ko hợp lệ
    }
};
function App() {
    // useReduce có thể nhận lên đến 3 đối số (reudcer, initState)
    // chạy , lần đầu chạy gọi reducer để đó , nhận giá trị khởi tạo và return lại 1 giá trị array
    // trong trường hợp này count nhận initState làm giá trị khởi tạo , giá trị thứ 2 là 1 hmaf gọi là dispatch
    // dispatch dùng để kích hoạt 1 cái action xem nó có hoạt động hay ko
    const [count, dispatch] = useReducer(reducer, initState);

    //usememo(callback,des)
    return (
        <div style={{ padding: '10px 20px' }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    );
}

export default App;

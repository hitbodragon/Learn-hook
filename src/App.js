//useState muốn dữ liệu thay đổi thì giao diện tự động  được cập nhật(rende lại theo dữ liệu )

import { useCallback, useState } from 'react';
//vd vơi innit state callback
const orders = [1000, 10, 20];
function App() {
    // đầu vào là gì đầu ra là gì và cách vận hành nó ra sao
    // useState nhận giá trị khi khởi tạo đầu vào
    // giá trị khởi tạo dùng được chỉ 1 lần duy nhất
    // state đầu tiên lấy giá trị khởi tạo  nó dưa cho state
    // phần tử setState là 1 cái hàm xét lại giá trị

    // khi bấm vào nó sẽ chạy hàm handler sau đó đoạn code bên trong được thực thi từ đó giá trị mà hàm trước đó để giá trị mặt định được render ra ngoài

    // example ứng dụng đếm số tăng dần
    // component được render lại sau khi dùng setState
    // initial State chỉ dùng cho lần đầu

    // Lưu ý :
    // -Component được  render sau khi 'setState'
    // - Initial state chỉ dùng cho lần đầu
    // -Set State với useCallback
    // -Initial state  với call back
    // -setState là thay thế state bằng giá trị mới

    //-Initial state  với call tocall back
    // const total = orders.reduce((total, cur) => total + cur);
    // console.log(total);
    // const [count, setCount] = useState(() => {
    //     const total = orders.reduce((total, cur) => total + cur);
    //     console.log(total); // no se khong tinh laij nhu o tren tang hieu nag cuar web
    //     return total;
    // });
    // const handleCount = () => {
    //     // setCount(count + 1);
    //     // // 1 setState đơn giản
    //     // setCount(count + 1);
    //     // gọi nhìu lần nó cũng chỉ render lại 1 lần duy nhất thôi
    //     // //2 sử dụng call back để gọi ra nhìu lần
    //     // preState trong trường hợp này là count, coi như SetCount là 1 hàm và nhận count là giá trị khởi tạo
    //     setCount((preState) => preState + 1);
    //     // setCount((preState) => preState + 1);
    //     // setCount((preState) => preState + 1);
    // };
    // console.log('render-re');
    // // nhưng render vẫn 1 lần
    // return (
    //     <div className="App" stye={{ padding: '20' }}>
    //         <h1>{count}</h1>
    //         <button onClick={handleCount}> Increase </button>
    //         {/* cach 2 laf ()=> setCount(count+1) */}
    //     </div>
    // );
    // destucturing đi với rest
    // vi du voi object
    //spread lấy [ mảng trùn tên], key trùng tên  lấy tên sau

    const [info, setInfo] = useState({
        name: 'John',
        age: 30,
        address: '123 Street',
    });
    // the gioi tinnh vao
    const handleCount = () => {
        // setInfo({
        //     ...info,
        //     females: 'nam',
        // });
        setInfo((pre) => ({
            ...pre,
            females: 'name',
        }));
    };
    return (
        <div style={{ padding: '20' }}>
            <h1> {JSON.stringify(info)} </h1>
            <button onClick={handleCount}>Change Info</button>
        </div>
    );
}

export default App;

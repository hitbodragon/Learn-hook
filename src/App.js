import { useRef, useState, useEffect } from 'react';
import Content from './Content';

// useRef tự lưu giá trị nó vào bên trong thư viện , nó trả về 1 objet nên lấy giá trị của nó thông qua current
// useRef hỗ trợ lấy elements ra bầng cách ref={...} // tương tự như get lấy dom
// vì sao dùng useRef, lưu giá trị nó bên useRef nên  hiệu năng cao , xoá dễ dàng tràn bộ nhớ

// let curr; undefine nhưng khi lưu giá trị nó sẽ thay đổi và lưu bên ngoài nênn có thể xoá dễ dàng hơn là luuw ở bộ nhớ, giá trị luu trong bộ nhớ thay đổi nên sau khi stop ko dừng dc
function App() {
    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();
    // let cur ; giá trị undefined nên khi lưu giá trị trong hàm thì nó cứ reset lại
    // mỗi hàm khi render sẽ trả về 1 tham chiếu trong bộ nhớ  nên nó sẽ gây ra làm chậm quá trình
    //mỗi lần re render lại thì giá trị của tham chiếu cứ thay đổi nên là không xoá dc giá trị

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect(); // lấy toạ dộ của rect đang đứng

        console.log(rect);
    });

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        console.log('Start -> ', timerId.current);
    };

    const handleStop = () => {
        clearInterval(timerId.current);

        console.log('Stop -> ', timerId.current);
    };

    console.log(count, prevCount.current); // giá trị hiện tại và giá trị thực tế
    // khi chạy thì re re reder count trước khi use call back được gọi , sau đó dọn dẹp cũ thực hiện lệnh gán useEffect truóc thực hiện nên rereder lại giá trị cũ

    return (
        <div style={{ padding: 20 }}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default App;

import { useState, useCallback } from 'react';
import Content from './Content';

function App() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div style={{ padding: '10px 32px', color: '#f05123' }}>
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    );
}

export default App;
// useCallback tránh viện rerender của các component ko cần thiết
// sau khi  thực hiện lệnh button các hàm sẽ thực hiện lệnh thì các hàm sẽ tả về 1 giá trị tham chiếu và lưu vào giá trị lưu trữ,
// các biến này có giá trị lưu trữ lưu vào trong bộ nhớ cho nên dù gọi 1 hàm giống nhau nhưng tham chiếu khác nhau dẫn dến memo k phan biệt được
// dẫn dến trường hợp re render các component ko cần thiết dẫn đến hiệu năng trang web kém
// trong trường hợp đó usecallback ra đời và giúp mỗi lần funtion thực hiện thì usecallback sẽ lưu giá trị tham chiếu đó vào bên trong nó
// mỗi khi gọi hàm giá trị tham chiếu trong usecallback ko thay đổi vì đã lưu ở trước đó,, qua hàm children nó sẽ được memo so sánh bằng toán tử ====
// và giá trị là như nhau nên các component sẽ ko render ko cần thiết nữa

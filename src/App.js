import { useRef } from 'react';
import Content from './Content';

function App() {
    const videoRef = useRef();
    const handlePlay = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
    };
    return (
        <div style={{ padding: 20 }}>
            <Content ref={videoRef} />
            <button onClick={handlePlay}>Play </button>
            <button onClick={handlePause}>Pause </button>
        </div>
    );
}
export default App;
// bài toán đặt ra lfa thẻ con có video, mà thẻ cha lại truy câp được thẻ con public
// theo hàng đợi thì nó dễ gây lỗi ở đâu cũng có thể truy xuất được phần tử mang props mặt dịnh của con mà cha lấy được
// nên muốn lấy dạng private thì ta dùng useImperativeHandle để đảm bảo an toàn dữ liệu

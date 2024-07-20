// Times setInterval , SetTimeout,ClearInterval, clearTimeout

//call api

/**

 * 4.Cleanip
 * -Remove Listener / Unsubscribe
 * Clear time
 **/
/// lý thuyết chung của 3 cái học bên dưới
//  1. Callbacks luôn được gọi khi component mounted(cài vào)
// 2. Clearn fuction luôn luôn được gọi trước khi component unmounted(gỡ ra)
// 3 clearnup được gọi trước khi compoment được goi trừ lần mounted

// times setInterval, SetTimeoutInterval,
// 1 hoat dong trong react component
// 2 là set nó như thế nào
// 3.cách giải quyết
//xây đựng 1 ứng dụng dếm ngược theo giây
// setTimeout chạy 1 lần duy nhất theo số s đẫ được lập trình
// còn setInterval sét nhìu lần chạy  theo số s đã được lên lịch trình
import { useEffect, useState } from 'react';

function Content() {
    const [countDown, setCountDown] = useState(190);
    // cách dùng sai
    // setInterval(() => {
    //     setCountDown(countDown - 1);
    // }, 1000);
    // lặp vô hạn
    // mỗi 1s chạy nhiều lần set lại cùng 1 lúc
    // do chạy 1 lần nên chọn cách số 2
    // setTimes out chạy có 1 lần nên khi số thay đôi thì ta truyền des cho nó chạy tiiếp
    useEffect(() => {
        const clearSet = setInterval(() => {
            //setCountDown(countDown - 1); // chạy được 1 lần dừng lại nhưn nó vẫn cahyj setinterval ngầm bên trong
            setCountDown((prevCount) => prevCount - 1); // nhưng callback cho phép nó chạy render ra két quả
            console.log('setInterval');
        }, 1000);

        return () => clearInterval(clearSet);
    }, []); // do ngoặc ko có giá trị nên chạy đúng 1 lần render giao diện
    return (
        <div>
            <h1> {countDown} </h1>
        </div>
    );
}
export default Content;

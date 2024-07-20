// useEffect
// kiến thức cần có
// Event : Add/ remove event listener
// Observer pattern : SubScribe /unsubscribe// mở rộng của add và remove listener
// Closure
// Times setInterval , SetTimeout,ClearInterval, clearTimeout
//useState
//Mouse/unmouse
//===
//call api

/**
 * 1. Update DOM
 * -F8 blog tittle
 * 2. Call API
 * 3 Listen DOM events
 * -Scroll
 * -Resize
 * 4.Cleanip
 * -Remove Listener / Unsubscribe
 * Clear time
 **/
/// lý thuyết chung của 3 cái học bên dưới
//  1. Callbacks luôn được gọi khi component mounted(cài vào)
// 2. Clearn fuction luôn luôn được gọi trước khi component unmounted(gỡ ra)
import { useEffect, useState } from 'react';

// clean up resize basic
//hiện ra kích thước cửa sổ trình duyệt và update lại nó
function Content() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
            <h1> {width} </h1>
        </div>
    );
}
export default Content;

// chia nhỏ ra học
//1 là useEffect( callbacks,)
//- Gọi callbacks mỗi khi component re-render
//- gọi callback sau khi thêm element vào dom
//2 là useEffect(callbacks,[])
// chỉ gọi callbacks 1 lần sau khi component mounted, logic chạy 1 lần
//3 là useEffect(callbacks,[deps]
// callbacks sẽ được gọi lại mỗi khi deps thay đổi

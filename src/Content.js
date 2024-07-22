import { useImperativeHandle, forwardRef, useRef } from 'react';
import Video1 from './Video/Download.mp4';

function Content(props, ref) {
    const videoRef = useRef(); // này là cục bộ bên trong hàm này
    // TRUYỀN PROPS KO CÓ TỪ CAH SANG CON QUA ĐỐI SỐ THỨ 2
    // useImperativeHandle(gt thứ 2(rè), callbacks) thực hiện hành động
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play(); // đảy ra ngoài sử dụng
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    return (
        <div>
            {/* videoref dang là 1 cái object nên là trả về 1 ái objcet dể nhận được giá trị */}
            <video ref={videoRef} src={Video1} controls width={280} />
            {/* control có giá trị mặt đinh tu tao ra play pause nên là dễ dàng dùng hơn, nhưng tuỳ kích thước video */}
        </div>
    );
}

export default forwardRef(Content);
// component ko co ref mặt định nên muốn dùng ref truyển cho children thì ta dùng covert tương tự như meme
// forwards là 1 higherv components nó ôm components là lấy props ko có truyền cho tk con , thông qua đối số thứ 2 , REF
// Nhưng nó phải dùng forwardRef để truyền ref cho children
// nếu ko dùng forwardRef thì ref của children s�� là undefined
// forwardRef giúp cho việc truyền ref cho children và giữ nguyên như props của parent
// nhưng nếu parent ko cần truyền ref cho children thì forwardRef ko cần dùng

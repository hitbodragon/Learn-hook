import { useEffect, useState } from 'react';
// bai toan import images lên trang web sau đó dọn dẹp lại luôn
function Content() {
    // cần ảnh hiện thay đổi re-render lại nên cần dùng state
    const [avatar, setAvatar] = useState();
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        //console.log(URL.createObjectURL(file));
        // preview tu dat ten
        file.preview = URL.createObjectURL(file); // url xem tạm

        setAvatar(file); // set vẫn còn lưu trong bộ nhớ
    };
    useEffect(() => {
        // dùng luôn cleanup dể xoá bỏ cái ảnh thừa

        return () => {
            // kiem tra avatar co ton tai khong moi xoa, chứ mặt dịnh nó là undefined
            avatar && URL.revokeObjectURL(avatar.preview); // nhận cái ủl xem tạm đó  để xoá url xem tạm khỏi bộ nhớ
        };
    }, [avatar]); // mỗi lần chọn ảnh nó sẽ chọt vào cái này

    return (
        <div>
            <input
                type="file"
                // multiple // cho phép chọn nhiều ảnh còn ko có cho phép chọn 1 ảnh duy nhất mà thôi
                onChange={handlePreviewAvatar} // onchange là sự thay đổi nên 2 hình 1 lúc nó sẽ ko hiện nha
            />
            {avatar && <img src={avatar.preview} alt="" width="80%" />}
            {/* hiển thị ảnh đã chọn */}
        </div>
    );
}
export default Content;

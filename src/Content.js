import { memo } from 'react';

function Content({ count }) {
    console.log('re-render');

    return <h2>SỐ LƯỢNG CLICK CỦA BẠN LÀ : {count}</h2>; // props cha thay đổi nên con cũng thay đổi
}

export default memo(Content);
// memo giúp cho việc re render không cần thiết : nếu như các props của cha thay đổi thì hàm con sẽ thay đổi theo
//tránh việc các props cha ko thay đổi mà con cứ  rerender hiệu năng nó sẽ giảm
// sụwr dụng toán tử  === so sánh , nếu cha thay đổi nhưng thay đổi giống nhau ko qua props dến con thì con ko bị rerender lại
// nếu bên cha thay đổi ít nhất 1 pops thì nó sẽ rerender lại

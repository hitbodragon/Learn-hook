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
import { useEffect, useState } from 'react';

function Content() {
    // đối số thứ 1 là cái hàm cần truyền vào còn deps là sự phụ thuộc về mặt dữ liệu
    //useEffect(callbacks,[deps])
    const [tittle, setTittle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Xử lý tạo ra giao diện người dùng
        // document.title = tittle;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, []);

    return (
        <div>
            <input value={tittle} onChange={(e) => setTittle(e.target.value)} />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
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

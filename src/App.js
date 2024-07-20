import { useState } from 'react';

// Lưu ý
//-1. Array
//-2. Reference

//ví dụ
//1.RamdomGift
//2.Two-way Bingding
//3.Todolist

// 1 ramdom gifts
//const gifts = ['CPU', 'RAM 32 RGB', 'RGB Keyboard'];

//2 two-way biding vi du ve radio checkbox
const courses = [
    {
        id: 1,
        name: 'HTML',
    },
    {
        id: 2,
        name: 'CSS',
    },
    {
        id: 3,
        name: 'JS',
    },
];

function App() {
    // 1 ramdomgift
    // const [gift, setGifts] = useState('');

    // const randomGifts = () => {
    //     const indexRandom = Math.floor(Math.random() * gifts.length);
    //     setGifts(gifts[indexRandom]);
    // };
    // return (
    //     <div style={{ padding: '20' }}>
    //         {/* {có gitf lấy gìt ko có lấy chưa có phâng thưởng} */}
    //         <h1> {gift || 'Chưa có phần thưởng '} </h1>
    //         <button onClick={randomGifts}> Lấy thưởng</button>
    //     </div>
    // );

    // 2. two way binding

    // ràng buộc 1 chiều là giá trị thay đổi trong quá trình render
    // ràng buộc 2 chiều là giá trị có thể thay đổi ngay khi gõ code  trong components
    // 2 bên ràng buộc với nhau  , mất đi 1 chiều chiều kia sử dụng là two way binding
    //2. vi dụ về text don gian
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const handleSubmit = () => {
    //     console.log({
    //         name,
    //         email,
    //     });
    // };
    // vi dụ ve radio với check box
    // const [checked, setChecked] = useState(2);

    // const handleSubmit = () => {
    //     console.log({ id: checked });
    // };
    const [checked, setChecked] = useState([]);

    const handleChecked = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleSubmit = () => {
        console.log({ id: checked });
    };
    // // return (
    // //     <div style={{ padding: '20px' }}>
    //         {/*  vi du don gian ve text */}
    //         {/* <input
    //             type="text"
    //             onChange={(e) => setName(e.target.value)}
    //             value={name}
    //         />
    //         <input
    //             type="text"
    //             onChange={(e) => setEmail(e.target.value)}
    //             value={email}
    //         /> */}
    //         {/* vi dụ về radio */}
    //         {/* {courses.map((course, index) => (
    //             <div key={index}>
    //                 <input
    //                     type="radio"
    //                     // kiem tra dieu kieenj luc dau check == undefined luc sau nos laf 1 nen 2 cai bang nhau nen check in ra , check = ban dau mac dinh la true dung nó sẽ in ra
    //                     checked={checked === course.id}
    //                     onChange={() => setChecked(course.id)}
    //                 />
    //                 {course.name}
    //             </div>
    //         ))} */}
    return (
        <div>
            {courses.map((course, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        // kiem tra dieu kieenj luc dau check == undefined luc sau nos laf 1 nen 2 cai bang nhau nen check in ra , check = ban dau mac dinh la true dung nó sẽ in ra
                        // includes trả về true nếu nó có giá trị chứa bên trong , vd giá trị id trong bài
                        checked={checked.includes(course.id)}
                        onChange={() => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default App;

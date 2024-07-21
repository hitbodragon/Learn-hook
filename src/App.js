import { useState, useCallback, useMemo, useRef } from 'react';
import Content from './Content';

function App() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([
            ...products,
            {
                name,
                price: +price,
            },
        ]);
        setName('');
        setPrice('');
        nameRef.current.focus();
        // này sử dụng toway bindings
    };
    // console.log(products);
    // convert price về dạng số  Number(price), +price, prase(price)
    // tin tong dùng reduce
    // mỗi lần onchange sẽ dẫn dến gọi lại hàm và ren der lại giao diện đồng thời hàm reduce thực hiện tính toán lại ko
    // cần thiết nên ta dùng use memo để thực hiện xoá những logic ko cần thiết, memo xoá nhưng component ko cần thiết
    // const total = products.reduce((result, prod) => result + prod.price, 0);
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log(' tinh toan lai ');
            return result + prod.price;
        }, 0);
        return result;
    }, [products]);
    //usememo(callback,des)
    return (
        <div style={{ padding: '20px 32px' }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}> Add </button>
            <br />
            Total :{total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

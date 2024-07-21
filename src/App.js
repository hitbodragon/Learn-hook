import './App.css';
import Content from './Content';
import { useContext } from 'react';
import { ThemeContext } from './Theme';

// có thể sử dụng vô số Context khác nhau

//context
//CompA => compB =>CompC
// theme : Dark /Light
// 1. Create context
//2. provider(cung cấp dữ liệu)
//3. Consumer nhận dữ liệu

function App() {
    const context = useContext(ThemeContext); // nó s�� lấy giá trị từ provider ở trên
    return (
        //cái này sẽ giúp cho component con nhận được giá trị ở trên
        // value ở đây có gì thì usecontext của thằng con sẽ nhận được giá trị đó tương ứng bên con

        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}> Toggle </button>
            <Content />
        </div>
    );
}
export default App;

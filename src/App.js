import { useState } from 'react';
import Content from './Content';

// mounted và unmounted
// mounted là nó đặt vào còn unmounted là gỡ ra
// taoj nut button mounted va unmounted

function App() {
    const [show, setShow] = useState(false);
    return (
        <div style={{ padding: 32 }}>
            <button onClick={() => setShow(!show)}>Change</button>
            {show && <Content />}
        </div>
    );
}

export default App;

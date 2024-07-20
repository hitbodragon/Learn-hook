import { useState } from 'react';

//3.Todolist

function App() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('jobs'));
        return storage ?? [];
    }); // toán tử ?? nếu giá trị ở trước là null/ hoặc undefine nó sẽ lấy giá trị sau, giống như || mà || lấy giá trị là number boolean , string nên ko lấy giá trị đó dc

    const handeleSubmit = () => {
        // setJobs([...jobs, job]);
        setJobs((prev) => {
            const newJobs = [...prev, job];
            // save to local storage
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs);
            return newJobs;
        });
        setJob('');
        // luu vào local Storage , lưu chuỗi chứ ko lưu mnagr
    };
    return (
        <div style={{ padding: 32 }}>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handeleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

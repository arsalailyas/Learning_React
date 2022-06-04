import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className='container py-5'>

      <h1 className='display-3 text-center py-5'>You Clicked <span className='text-danger fw-bold'> {count} </span> Times</h1>

      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
      
    </div>
  );
}

export default App;
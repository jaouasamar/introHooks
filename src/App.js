
import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';

function App() {
  const [isShow, setIsShow] = useState(false)
  const handleShow=()=>
  {
    setIsShow(!isShow);
  }
  return (
    <div className="App">
      <button onClick={handleShow}>{isShow?"Hide":"Show"}</button>
      {isShow?<Counter/>:null}
    </div>
  );
}

export default App;

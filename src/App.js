import { useState } from 'react';
import './App.css';
import List from './List';
import Detail from './Detail';

function App() {

const [displayList, setDisplay] = useState(true);
const [displayDetails, setDetails] = useState(false);
const [currentId, setId] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Banned Books</h1>
      </header>
      {displayList === true && <List setId={setId} setDisplay={setDisplay} setDetails={setDetails}/>}
      {displayDetails === true && currentId !== null && <Detail setId={setId} setDisplay={setDisplay} setDetails={setDetails} id={currentId}/>}
    </div>
  );
}


export default App;
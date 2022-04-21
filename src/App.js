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
      <p className='opening'>The American Library Association Office for Intellectual Freedom tracked 729 challenges to school, university and library materials and services in 2021. Of the 1597 books that were targeted, here are the most challenged, along with the reasons cited for censoring the books:</p>
      {displayList === true && <List setId={setId} setDisplay={setDisplay} setDetails={setDetails}/>}
      {displayDetails === true && currentId !== null && <Detail setId={setId} setDisplay={setDisplay} setDetails={setDetails} id={currentId}/>}
    </div>
  );
}


export default App;

import './App.css'
import Countary from './countary';
import Users from './users';
import Friends from './friends';
// 1: part
function App() {
  function handleClick(){
    alert('button clicked:');
  }
  // 2: part
    const handleClick2 = () => {
      alert('button 2 click')
    };
   
  return (
    <>
      
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      < Users></Users>
        <img src="" alt="" />
      <Countary></Countary>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>

       {/* 3: part */}

      <button onClick={()=>{
      alert('third click')
    }} >Third</button>

    {/* <button onClick={addToFive}>Four</button> */}
      
    </>
  )
}

export default App


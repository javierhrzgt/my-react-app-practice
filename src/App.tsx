import MapExample from './components/MapExample/MapExample';
import ShoppingList from './components/ShoppingList/ShoppingList';
import MyButton from './components/MyButton/MyButton';
import './App.css'
import { useState } from "react";


function App() {
  const [count, setCount] = useState<number>(0);
  
  const handledClick = () => {
    setCount(count +1);
  }
  return (
    <>
    <MapExample />
    <div className='ShoppingList'>
      <ShoppingList />
    </div>
    <div>
      <h1>Counter that update together</h1>
      <MyButton count={count} onClick={handledClick}/>
      <MyButton count={count} onClick={handledClick}/>
    </div>
    </>
  )
}

export default App

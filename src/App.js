import "./styles.css";
import React,{useState,useEffect} from "react"

export default function App() {

  const [count,setcount] = useState(0);
  const [showFlag, setShowFlag] = useState(false);

  const Countgood = () => {
    if(count === 0){
      setcount(count + 1);
    }
    else if(count === 1){
      setcount(count - 1);
    }
  };

 
 useEffect(() => {
  if (count === 1) {
      showFlag || setShowFlag(true);
    } else {
      showFlag && setShowFlag(false);
  }
}, [count]);



  return (
    <div className="App">
      <button onClick={Countgood}>good!</button>
      <p>{showFlag && "Thanks!"}</p>
      <p>count:{count}</p>
    </div>
  );
}

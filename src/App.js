import React, {useState} from "react";

function App() {

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  function increase() {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
    setTimeout(() => {
      setVisible1(true);
    }, 4000);
    setTimeout(() => {
      setVisible2(true);
    }, 6000);
    setTimeout(() => {
      setVisible3(true);
    }, 8000);
    setTimeout(() => {
      setVisible4(true);
    }, 10000);
  }
  function reset (){
    setTimeout(() => {
      setVisible4(false);
    }, 2000);
    setTimeout(() => {
      setVisible3(false);
    }, 4000);
    setTimeout(() => {
      setVisible2(false);
    }, 6000);
    setTimeout(() => {
      setVisible1(false);
    }, 8000);
    setTimeout(() => {
      setVisible(false);
    }, 10000);

  } 
  return (
    <div>
      <div className="app">
        <div className="scale">
          <div className="sc"><p>80-</p></div>
          <div className="sc"><p>60-</p></div>
          <div className="sc"><p>40-</p></div>
          <div className="sc"><p>20-</p></div>
          <div className="sc" ><p style={{marginBottom:"0"}}> 0-</p></div>
        </div>
        <div className="bathtub">
            { visible ?  <div className="water"></div> : null}
            { visible1 ? <div className="water"></div> : null}
            { visible2 ? <div className="water"></div> : null}
            { visible3 ? <div className="water"></div> : null}
            { visible4 ? <div className="water"></div> : null} 
        </div>
      </div>
      <div className="btn">
        <button onClick={() => increase()}>increaseWaterLevel</button>
        <button onClick={() => reset()}>decreaseWaterLevel</button>
      </div>
    </div>
  );
}

export default App;

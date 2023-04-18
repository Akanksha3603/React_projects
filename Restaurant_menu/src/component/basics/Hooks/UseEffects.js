import React, { useState, useEffect} from "react";
import "./style.css";

const UseEffects = () => {
  const [myNum, setMyNum] = useState(15);
  useEffect(() => {
      document.title = `Chats(${myNum})`
  });

  return (
    <>
      <div className="con">
        <p>{myNum}</p>
        <div className="container1">
          <div className="button" onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffects;

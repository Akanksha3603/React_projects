import React, { useState, useEffect } from "react";
import "./style.css";

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const addItem = () => {
    
    if (!inputData) {
      alert("please fill");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );

      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewData]);
      setInputData("");
    }
  };

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItem);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  return (
    < >
      <div className="main-div">
        <div className="child-div">
          <figure>
            <i className="fa fa-list-ol logo"></i>
          </figure>
          <figcaption>
            <pre> Add Your List Here</pre>
          </figcaption>
          <br />
        </div>

        <div className="addItem">
          <input
            type="text"
            placeholder="✍ Add Item"
            className="form"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          {toggleButton ? (
            <i className="fa fa-edit " onClick={addItem}></i>
          ) : (
            <i className="fa fa-plus " onClick={addItem}></i>
          )}
        </div>

        <div className="showItem">
          {items.map((curElem) => {
            return (
              <div className="eachItem" key={curElem.id}>
                <h3>{curElem.name}</h3>
                <div className="icons">
                  <i
                    className="fa fa-edit symbol"
                    onClick={() => editItem(curElem.id)}
                  ></i>
                  <i
                    className="fa fa-trash symbol"
                    onClick={() => deleteItem(curElem.id)}
                 ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="showItem">
          <button className="btn" onClick={removeAll}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;

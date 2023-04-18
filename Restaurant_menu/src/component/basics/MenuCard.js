import React from "react";

const MenuCard = ({ menuData }) => {
  //console.log(menuData);
  return (
    <>
    <div className="main-container">
      {menuData.map((curElem) => {

        const{id, image,  name, category, price, discription } = curElem;


        return (
          <div >
            <div className="card-container" key={id} >
              
                <div className="card-body">
                  <div className="card-circle"> {id} </div>
                  <br />
                  <span>{category}</span>
                  <br />
                  <span className="card-title"> {name}</span>
                  <br />
                  <span>
                    afascib bbhdvcbqe hbcsjc9fuwefhajv nmzcavcubscjsj sbcys
                    csgsascbc x fhs bsaasfnj asjfafainj jbsubcja v afascib
                    bbhdvcbqe hbcsjc9fuwefhajv nmzcavcubscjsj sbcys bsgshascbc x
                    fhs
                  </span>
                  <br />
                  <img src={image} alt="images" className="cardImage" />
                </div>
              
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default MenuCard;

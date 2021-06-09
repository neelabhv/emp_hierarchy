import React, { Fragment, useState } from "react";
import './Child.css';
import data from './data.json';

function displayInfo(props){
  // let keys=Object.keys(props);
  // console.log("displayInfo method called");
  // console.log(keys);

  return(
    <Fragment>
      {
      Object.entries(props).map((item)=><li>
        {item[0]} : {item[1]}
      </li>) }
    </Fragment>
  )
}

function Cards(props){
  console.log("inside CArds function");
  console.log(props);
  return(
    <div className="div-cards">
      { 
        props.data.map((item)=>
          <Fragment>
            <div className="card">
              {displayInfo(item.Info)}
              
              {item.Child !== undefined && <Cards data={item.Child}/>}
            </div>
          </Fragment>
        )
      }
    </div>
  )
}

function Childs() {
  return (<div className="tree">
    hierarchical UI 
    <Cards data={data}/>
  </div>);
}

export default Childs;

import React from "react";

const MyComponent = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div> my react app </div> 
      <div> {props.text} </div> {" "}


      
    </React.Fragment>
  );
};
export default MyComponent;
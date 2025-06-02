import React from "react";

//Functional Component
// function Greet(){
//     return <h1>Hello Suhani!</h1>
// } //not a good practice

//props
const Greet = (props) => {
    const {name} = props
    return (
        <div>
            <h1>Hello {name}</h1>
            {props.children}
        </div>
    )   
}
export default Greet;
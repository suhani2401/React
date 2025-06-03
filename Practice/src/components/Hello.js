import React, { createElement } from "react";

const Hello = () => {
    //With JSX
    // return(
    //     <div id='hello'>
    //         <h1>Hello Suhani</h1>
    //     </div>
    // );

    //Without JSX
    return React.createElement('div', {id: 'hello'}, createElement('h1', null, 'Hello Suhani'));
}

export default Hello;
import Didact from '../src';
// import React from 'react';
// import ReactDOM from 'react-dom';


/** @jsx Didact.createElement */
// const container = document.getElementById("root")

// const updateValue = e => {
//     rerender(e.target.value);
// }

// const rerender = value => {
//     const element = (
//         <div>
//             <input onInput={updateValue} value={value} />
//             <h2>Hello {value}</h2>
//         </div>
//     );

//     Didact.render(element, container);
// }

// rerender("World");


// /** @jsx Didact.createElement */
// function App(props) {
//     return <h1>Hi {props.name}</h1>
//   }
//   const element = <App name="2222" />
//   const container = document.getElementById("root")
//   Didact.render(element, container)

/** @jsx Didact.createElement */
function Counter() {
    const [state, setState] = Didact.useState(1)
    return (
      <h1 onClick={() => setState(c => c + 1)}>
        Count: {state}
      </h1>
    )
  }
  const element = <Counter />
  const container = document.getElementById("root")
  Didact.render(element, container)
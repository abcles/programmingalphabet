/* You don't need these imports
**  import React from 'react';
**  import ReactDOM from 'react-dom';
*/
// React and ReactDOM are already imported in you HTML
// Also import / require are NodeJS thing that doesn't exist in a browser
'use strict';
const { useState, useEffect } = React;
const jsonData = [
  {
    "name": "Pizza Small",
    "price": 10
  },
  {
    "name": "Pizza Medium",
    "price": 15
  },
  {
    "name": "Pizza Large",
    "price": 20
  }
];

const UseEffectComponent = ({ initialData = [] }) => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData(initialData);
    setCount(count+1);
  },[]);

  const result = (
  <div>
      <table style={{borderStyle: "solid"}}>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
        {data.map((element,i) => {
          return (
            <tr key={i}>
              <td>{element?.name}</td>
              <td>{element?.price}</td>
            </tr>
        )})}
        </tbody>
      </table>
      <h3>The component has been rendered for {count} times.</h3>
  </div>
  );
  console.log(result)
  return result;
}

ReactDOM.render(
  <React.StrictMode>
    <UseEffectComponent initialData = {jsonData} />
  </React.StrictMode>,
   document.getElementById('root'));
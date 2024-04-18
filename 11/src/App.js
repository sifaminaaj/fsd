import React from 'react';
import TableView from './TableView';
import './index.css';
const App = () => {
  const data = [
    {ID:1,Name:'Sifa',Age:20},
    {ID:1,Name:'Sana',Age:20},
    {ID:1,Name:'Sam',Age:20},
    {ID:1,Name:'Sia',Age:20},
    {ID:1,Name:'Reema',Age:20},
  ];
  return (
    <div>
      <h1 style={{textAlign:'center',borderBottom:'2px solid blue',paddingTop:'20px',marginBottom:'100px'}}>
        Array of Objects - Table View
      </h1>
      <TableView data={data}/>
    </div>
  );
};
export default App;
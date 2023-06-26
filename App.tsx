import React, { useState } from 'react';

function App() {
  const fruits = [
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon',
  ];
  const [filterList, setFilterList] = useState(fruits);
  const handleSearch  = (event) =>{
   if(event.target.value == ""){
    setFilterList(fruits);
    return;
   }
   const filteredValues = fruits.filter(item =>
     item.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1)
     setFilterList(filteredValues)
   
   
  }
  return (
    <div className="App">
      <div>
        <label>Search Item: </label>
        <input type="text" name="search" placeholder="Search Here..." onChange = {handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
    </div>
  );
}

export default App;

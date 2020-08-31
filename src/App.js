import React, { useState } from 'react';
import { Accordion } from './components/Accordion';
import { Search } from './components/Search';
import { Dropdown } from './Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

const items = [
  {
    title: "What is reactjs?",
    content: "Reactjs is a JS front-end library."
  },
  {
    title: "Why Reactjs is famous?",
    content: "Powerfull and Easy to use"
  },
  {
    title: "Why Reactjs is ligh weight?",
    content: "Because it is Library rather than Framework."
  }
]

const options = [
  {
    label: "The color Red",
    value: 'red'
  },
  {
    label: "The shade of blue",
    value: 'blue'
  },
  {
    label: "The Sea Green",
    value: "green"
  }
]
function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setDropdown] = useState(true);

  return (
    <div>
      <div className="ui container">
        <Header />
        <br />
        <Route path="/">
          <Accordion items={items} />
        </Route>

        <Route path="/search">
        <Search />
        </Route>
        
        {/* <button className="ui button"
          onClick={() => setDropdown(!showDropdown)}
        >Toggle</button> */}
        {/* {showDropdown ? */}
          <Route path="/dropdown">

          <Dropdown
            onSelectedChange={setSelected}
            selected={selected}
            options={options} /> 
            {/* : null */}
          </Route>
        {/* } */}
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
}

export default App;

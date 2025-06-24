import Input from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import SearchBar from "./components/general/SearchBar";
import Button from "./components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import './App.css'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");


  const options = [
    { value: "option1", label: "Default" },
    { value: "option2", label: "Latest" },
    { value: "option3", label: "Oldest" }
  ];

  const handleButtonClick = () => {
    alert("¡Botón clickeado!");
  };
  
  return (
    <>
      <div className='App'>
        <h1>Prueba de Componentes</h1>

        <section className="component-section">
          <h2>Componente Input</h2>
        <Input
          label="Username"
          type="text"
          className="input-section"
          value={name}
          setValue={setName}
          icon={<FontAwesomeIcon icon={faUser} />}
          inputAttributes={{required:true}}
          />
        <p>Valor actual: {name}</p>
        </section>
        <section className="component-section">
          <h2>Componente SelectInput</h2>
          <SelectInput
            label="Sort:"
            options={options}
            className="select-section"
            value={selectValue}
            setValue={setSelectValue}
           />
        </section>
        <section className="component-section">
          <h2>Componente Button</h2>
          <Button
            label="Click Me"
            className="btn-primary"
            onClick={handleButtonClick}
            icon={<FontAwesomeIcon icon={faHeart} />}
           />
        </section>
        <section className="component-section">
          <h2>Componente SearchBar</h2>
          <SearchBar
          title={searchValue}
          setTitle={setSearchValue}
           />
          <p>Búsqueda actual: {searchValue}</p>
        </section>
      </div>
      
    </>
  );
}

export default App

import Input from "./components/general/Input";
import SelectInput from "./components/general/SelectInput";
import SearchBar from "./components/general/SearchBar";
import Button from "./components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import './App.css'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");


  const options = [
    { value: "option1", label: "Opción 1" },
    { value: "option2", label: "Opción 2" },
    { value: "option3", label: "Opción 3" }
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
          label="Nombre"
          type="text"
          className="input-container"
          value={name}
          setValue={setName}
          icon={<FontAwesomeIcon icon={faUser} />}
          inputAttributes={{placeholder: "Ingresa tu nombre", required:true}}
          />
        <p>Valor actual: {name}</p>
        </section>
        <section className="component-section">
          <h2>Componente Button</h2>
          <Button
            label="Click Me"
            className="btn primary"
            onClick={handleButtonClick}
            icon={<FontAwesomeIcon icon={faHeart} />}
           />
        </section>
        <section className="component-section">
          <h2>Componente SearchBar</h2>
          <SearchBar
          title={searchValue}
          setTitle={setSearchValue}
          className="search-container"
           />
          <p>Búsqueda actual: {searchValue}</p>
        </section>
        <section className="component-section">
          <h2>Componente SelectInput</h2>
          <SelectInput
            label="Selecciona una opción"
            options={options}
            className="select-container"
            value={selectValue}
            setValue={setSelectValue}
           />
        </section>
      </div>
      
    </>
  );
}

export default App

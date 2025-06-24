import PropTypes from "prop-types";



export default function SearchBar({title, setTitle}) {

    const handleInput = (event) => {
        setTitle(event.target.value);
    }

    return (
        <input 
        placeholder={title} 
        type="text" 
        onChange={handleInput}
        value={title} />
    )
}


SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
}
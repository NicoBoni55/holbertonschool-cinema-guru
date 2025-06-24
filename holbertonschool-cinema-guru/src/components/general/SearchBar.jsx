import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";



export default function SearchBar({title, setTitle}) {

    const handleInput = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div>
        <input 
        className="search-bar"
        placeholder={title}
        type="text" 
        onChange={handleInput}
        value={title}
        >
        </input>
        </div>
    )
}


SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
}
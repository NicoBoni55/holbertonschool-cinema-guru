import '../general/general.css';
import PropTypes from "prop-types";

export default function Input({
    label,
    type,
    className,
    value,
    setValue,
    icon,
    inputAttributes
}) {
    const handleInput = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className='input-container'>
            <span className='input-icon'>{icon} </span>
            <label className='input-label'>{label}</label>
            <div>
            <input
                className={className} 
                type={type}  
                value={value}
                onChange={handleInput}
                {...inputAttributes}
            />
            </div>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    icon: PropTypes.element,
    inputAttributes: PropTypes.object
}
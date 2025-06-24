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
        <>
            <label>{label}</label>
            <div>
            {icon && <span>{icon}</span>}
            <input
                className={className} 
                type={type}  
                value={value}
                onChange={handleInput}
                {...inputAttributes}
            />
            </div>
        </>
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
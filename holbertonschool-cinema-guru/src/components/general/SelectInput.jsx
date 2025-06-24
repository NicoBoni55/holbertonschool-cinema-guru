import PropTypes from "prop-types";


export default function SelectInput({
label,
options,
className,
value,
setValue
}) {
    const handleSelect = (event) => {
        setValue(event.target.value)
    }

    return (
        <>
            <label>{label}</label>
            <select value={value} onChange={handleSelect} className={className}>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </>
    )
}


SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired
}
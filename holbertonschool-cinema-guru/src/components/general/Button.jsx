import PropTypes from "prop-types";

export default function Button({
    label,
    className,
    onClick,
    icon,
}) {
    return (
        <button className={className} onClick={onClick}>
            <span className="button-icon">{icon} </span>
            <label className="button-label">{label}</label>
        </button>
    )
}


Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element
}
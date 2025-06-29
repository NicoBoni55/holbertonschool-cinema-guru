import "../auth/auth.css";
import PropTypes from "prop-types";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faPlug, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Register({
  username,
  password,
  setUsername,
  setPassword,
}) {
  return (
    <>
      <h3>Create a new account</h3>
      <Input
        label="Username"
        type="text"
        className="input-section"
        divClassName="input-div"
        labelClassName="input-label"
        iconClassName="input-icon"
        value={username}
        setValue={setUsername}
        icon={<FontAwesomeIcon icon={faUser} />}
        inputAttributes={{ required: true }}
      />
      <Input
        label="Password"
        type="password"
        className="input-section"
        divClassName="input-div"
        labelClassName="input-label"
        iconClassName="input-icon"
        value={password}
        setValue={setPassword}
        icon={<FontAwesomeIcon icon={faKey} />}
      />
      <Button label="Sign Up" className="button-sign" icon={<FontAwesomeIcon icon={faPlus} />} />
    </>
  );
}

Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

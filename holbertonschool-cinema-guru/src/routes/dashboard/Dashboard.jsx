import '../dashboard/dashboard.css'
import Header from '../../components/navigation/Header';
import PropTypes from 'prop-types';


export default function Dashboard({userUsername, setIsLoggedIn}) {
    return (
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        </div>
    )
}


Dashboard.propTypes = {
    userUsername: PropTypes.string.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
}
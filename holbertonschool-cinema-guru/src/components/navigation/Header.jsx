import '../navigation/navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


export default function Header({userUsername, setIsLoggedIn}) {

    const logout = () => {
        localStorage.removeItem("accessToken")
        setIsLoggedIn(false)
    }

    return (
        <div className='nav-container'>
            <nav className='navigation'>
                <p className='logo-nav'>Cinema Guru</p>
                <div className='nav-right'>
                <img src="https://picsum.photos/100/100" alt="avatar" className='nav-avatar' />
                <p className='nav-p'>Welcome, User</p>
                <span className='nav-span' onClick={logout}>{<FontAwesomeIcon icon={faRightFromBracket} className='nav-icon'/>} logout</span>
                </div>
            </nav>
        </div>
    )
}
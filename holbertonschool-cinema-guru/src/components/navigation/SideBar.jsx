import { useEffect, useState } from 'react';
import '../navigation/navigation.css';
import {Navigate, useNavigate} from 'react-router-dom';

export default function SideBar() {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);

    function setPage(pageName) {
        setSelected(pageName)

        if (pageName === "Home") {
            useNavigate('/home')
        }
        else if (pageName === "Favorites") {
            useNavigate('/favorites')
        }
        if (pageName === "Watch Later") {
            useNavigate('/watchlater')
        }
    }

    useEffect(() => {
        fetch('/api/activity', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP: error! status:", response.status);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Data recieved: ', data);
            setActivities(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        })
    });
}
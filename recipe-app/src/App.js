import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b412270a90msh02d4af2ff7e026ap14beadjsn7059be1b84e3',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
}
const API_URL = 'https://edamam-recipe-search.p.rapidapi.com/search'

const App = () => {

    const searchRecipes = async (protein) => {
        const response = await fetch(`${API_URL}?q=${protein}`, options);

        const data = await response.json();

        console.log(data);

    }

    useEffect(() => {
        searchRecipes('chicken');
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;
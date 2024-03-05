import { useState, useEffect } from 'react';


for (let i = 1; i <= 151; i++) {
    fetch(URL + i) /* El resultado de esta operacion sera https://pokeapi.co/api/v2/pokemon/1 <-poniendo al final el numero pokemon hasta llegar a 151*/
        .then((response) => response.json())
        .then(data => useGetPokemon(data))
}

export const useGetPokemon = (URL) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [URL]);

    return { data, loading, error };
};


// export default function useFetch(url) {

// export const getPokemon = async(URL) => {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch(URL)
//             .then((response) => response.json())
//             .then((data) => setData(data))
//     },[URL]);

//     return { data }
// }



// let URL = 'https://pokeapi.co/api/v2/pokemon/';

// export const getPokemon = async() => {
//     const response = await fetch(URL);
//     const transformData = await response.json();

//     return transformData;
// }
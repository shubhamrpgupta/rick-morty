import { useEffect, useState } from "react";


function useFetchedData(page, search, status, gender, species) {

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        async function fetching() {
            await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
                .then((res) => res.json())
                .then(res => setFetchedData(res))
        }
        fetching();
    }, [page, search, status, gender, species])

    return fetchedData;
}


export default useFetchedData;
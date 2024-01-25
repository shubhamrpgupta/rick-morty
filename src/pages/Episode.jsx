import { useEffect, useState } from "react";
import Card from "../component/Card/Card";
import Group from "../component/Filter/category/Group";


const Episodes = () => {

    let [results, setResults] = useState([]);
    let [fetchedData, setFetchedData] = useState([]);
    let { air_date, episode, name } = fetchedData;
    let [id, setId] = useState(1);


    useEffect(() => {
        async function fetching() {
            let data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`).then((res) => res.json())
            setFetchedData(data);

            let info = await Promise.all(data.characters.map(singleCharacterUrl => {
                return fetch(singleCharacterUrl).then(res => res.json());
            }))
            setResults(info)
        }
        fetching();
    }, [id]);

    return (
        <div className="container">

            <div className="row mb-3">
                <h1 className="text-center mb-3">
                    Episode name :{" "}
                    <span
                        className="text-primary"
                    >
                        {name === "" ? "Unknown" : name}
                    </span>
                </h1>
                <h5 className="text-center">
                    Episode Date: {air_date === "" ? "Unknown" : air_date}
                </h5>
            </div>

            <div className="row">
                <div
                    className="col-lg-3 col-12 mb-4"
                >
                    <h4 className="text-center mb-4">
                        Pick Episode
                    </h4>
                    <Group
                        name="Episode"
                        changeID={setId}
                        total={51}
                    />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Card
                            page="/episodes/"
                            results={results}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Episodes;
import React from 'react'
import { useState } from "react";
import useFetchedData from "../Api/api";
import Card from "../component/Card/Card"
import Search from "../component/Search/Search";
import Pagination from "../component/Pagination/Pagination";
import Filter from "../component/Filter/Filter";



const Home = () => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");

    const data = useFetchedData(page, search, status, gender, species);

    const { results, info } = data;

    return (
        <div>
            <h1 className="text-center mb-3">
                Characters
            </h1>

            <Search
                setSearch={setSearch}
                setPage={setPage}
            />

            <div className="container">
                <div className="row">
                    <Filter
                        page={page}
                        setPage={setPage}
                        status={status}
                        setStatus={setStatus}
                        setGender={setGender}
                        setSpecies={setSpecies}
                    />

                    <div className="col-lg-8 col-12">
                        <div className="row">
                            <Card results={results} />
                        </div>
                    </div>
                </div>
            </div>

            <Pagination
                info={info}
                page={page}
                setPage={setPage}
            />

        </div >
    )
}

export default Home
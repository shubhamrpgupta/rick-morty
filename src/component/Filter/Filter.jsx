import React from 'react'
import Status from "./category/Status";
import Species from "./category/Species";
import Gender from "./category/Gender";

const Filter = ({ page, setPage, setStatus, setGender, setSpecies }) => {

    let refresh = () => {
        setPage(1);
        setStatus("");
        setGender("");
        setSpecies("");
        window.location.reload(false);
    }

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div
                className="text-center fw-bold fs-4 mb-2"
            >
                Filters
            </div>
            <div
                style={{ cursor: "pointer" }}
                onClick={refresh}
                className="text-primary text-decoration-underline text-center mb-3"
            >
                Clear Filters
            </div>
            <div
                className="accordion"
                id="accordionExample"
            >
                <Status
                    setPage={setPage}
                    setStatus={setStatus}
                />
                <Species
                    setPage={setPage}
                    setSpecies={setSpecies}
                />
                <Gender
                    setPage={setPage}
                    setGender={setGender}
                />
            </div>
        </div>
    )
}

export default Filter
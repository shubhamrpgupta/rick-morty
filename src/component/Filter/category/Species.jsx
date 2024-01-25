import React from "react";
import FilterBTN from "../FilterBtn";

const Species = ({ setSpecies, setPage }) => {

    let speciesTypes = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];

    return (
        <div className="accordion-item ">
            <h2
                className="accordion-header"
                id="headingTwo"
            >
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                >
                    Species
                </button>
            </h2>

            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div
                    className="accordion-body d-flex flex-wrap gap-3"
                >
                    {
                        speciesTypes.map((item, index) => {
                            return (
                                <FilterBTN
                                    key={index}
                                    input={item}
                                    task={setSpecies}
                                    setPage={setPage}
                                    index={index}
                                    name="species"
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Species;
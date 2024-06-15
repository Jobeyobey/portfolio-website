import React from "react";
import languageData from "../languageData";

export default function FilterButton(props) {
    return (
        <>
            <button
                id={props.id}
                className={`language-button filter-button ${props.className}`}
                onClick={() => props.toggleFilter(props.id)}
            >
                <p>{props.name}</p>
            </button>
        </>
    );
}

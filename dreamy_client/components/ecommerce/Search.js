import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        console.log("click");
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm,
            },
        });
        setSearchTerm("");
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return (
        <>
            <form>
                <select className="select-active">
                    <option>All Categories</option>
                    <option>Blackforest cake</option>
                    <option>Redvelvat cake</option>
                    <option>Chocalte Cake</option>
                    <option>Birthday Cake</option>
                    <option>Wedding Cake</option>
                    <option>Teacher's Day Cake</option>
                    <option>Festival Cake</option>
                    <option>Valentineday cake</option>
                    <option>Party Cake</option>
                    <option>Father's Day Cakes </option>
                    <option>Mother's Day Cake</option>
                    <option>Anniversary Cake</option>
                </select>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search"
                />
            </form>
        </>
    );
};

export default Search;

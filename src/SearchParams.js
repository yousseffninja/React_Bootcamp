import { useState } from "react";

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    return (
        <div className="search-params" >
            <form onSubmit={}>
                <label htmlFor="Location">
                    Location
                    <input id="location" value={location} placeholder="Location"
                    onChange={(e) => setLocation((e.target.value))}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams
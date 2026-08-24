import { useState } from "react";
import "../styles/SearchSection.css";

function SearchSection() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log({
      keyword,
      category,
      location,
    });
  };

  return (
    <section className="search-section">
      <div className="search-box">
        <div className="search-field">
          <label>Search Keyword</label>

          <input
            type="text"
            placeholder="e.g. Phone, wallet, keys"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className="search-field">
          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="wallet">Wallet</option>
            <option value="keys">Keys</option>
            <option value="pets">Pets</option>
            <option value="documents">Documents</option>
          </select>
        </div>

        <div className="search-field">
          <label>Location</label>

          <input
            type="text"
            placeholder="City or zip code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="filter-btn" onClick={handleSearch}>
          ⚙ More Filters
        </button>
      </div>
    </section>
  );
}

export default SearchSection;

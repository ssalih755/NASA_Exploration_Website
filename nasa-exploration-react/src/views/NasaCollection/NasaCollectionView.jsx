import NasaCollectionService from "../../services/NasaCollectionService";
import { useState } from "react";
import NasaItem from "../../components/NasaCollection/NasaItem";
import "./NasaCollectionView.css";

export default function NasaView() {
  const [collectionItems, setCollectionItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 // const [searchPerformed, setSearchPerformed] = useState(false);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function performSearch() {
    NasaCollectionService.getCollectionItems(searchTerm).then((response) => {
     console.log(response);
      setCollectionItems(response.data.collection.items);
    });
  }

  return (
    <div className="container nasa-collection-container">
      <h1> NASA Image & Video Collection </h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleSearchTerm}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              performSearch();
            }
          }}
        />
        <button onClick={performSearch}>Search</button>
      </div>
      <div className="nasa-results">
        {collectionItems.length > 0 &&
          collectionItems.map((item, index) => (
            <NasaItem key={index} item={item} />
          ))}
      </div>
    </div>
  );
}

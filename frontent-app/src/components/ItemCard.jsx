import { Link } from "react-router-dom";
import "../styles/ItemCard.css";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <div className="item-image-wrapper">
        <img src={item.image} alt={item.name} className="item-image" />

        <span
          className={`item-status ${
            item.status === "FOUND" ? "found" : "lost"
          }`}
        >
          {item.status}
        </span>
      </div>

      <div className="item-content">
        <h3>{item.name}</h3>

        <p className="item-location">◉ {item.location}</p>

        <div className="item-footer">
          <span>◷ {item.time}</span>

          <Link to={`/items/${item.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

import { Link } from "react-router-dom";
import herosetion from "../assets/herosetion.png";
import SearchSection from "../components/SearchSection";
import ItemCard from "../components/ItemCard";

import "../styles/Home.css";

const items = [
  {
    id: 1,
    name: "Black Leather Wallet",
    location: "Central Park, New York",
    time: "2 hours ago",
    status: "LOST",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Keys with Blue Tag",
    location: "Sunnyvale Line, 6th St",
    time: "5 hours ago",
    status: "FOUND",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Golden Retriever Puppy",
    location: "Maple Street Neighborhood",
    time: "Yesterday",
    status: "LOST",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Silver Reading Glasses",
    location: "City Library, 3rd Floor",
    time: "1 day ago",
    status: "FOUND",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80",
  },
];

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-small">
              ◎ Over 5,000 items successfully reunited
            </span>

            <h1>
              Reunite with what
              <br />
              matters most.
            </h1>

            <p>
              Join our community-driven platform to safely report, search, and
              return lost belongings. Bringing peace of mind, one item at a
              time.
            </p>

            <div className="hero-buttons">
              <Link to="/lost-items" className="primary-btn">
                🔎 I Lost Something
              </Link>

              <Link to="/found-items" className="secondary-btn">
                ⊙ I Found Something
              </Link>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hero-image-container">
            <img
              src={herosetion}
              alt="Happy Found-IT user"
              className="hero-image"
            />

            <div className="found-message">
              <span className="success-icon">✓</span>

              <div>
                <strong>Keys returned!</strong>
                <small>Just now in Central Park</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <SearchSection />

      {/* RECENT ITEMS */}
      <section className="recent-section">
        <div className="section-header">
          <div>
            <h2>Recently Reported</h2>
            <p>Help reunite these items with their owners.</p>
          </div>

          <Link to="/tracking">View all →</Link>
        </div>

        <div className="items-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

import "../styles/Home.css";

function Tracking() {
  return (
    <div className="tracking-page">
      <div className="tracking-card">
        <h1>Track Your Item</h1>

        <p>
          Enter your tracking ID to check the status of your lost or found item.
        </p>

        <div className="tracking-search">
          <input type="text" placeholder="Enter tracking ID" />

          <button>Track Item</button>
        </div>

        <div className="tracking-status">
          <div className="status active">
            <span>1</span>
            <strong>Reported</strong>
          </div>

          <div className="status">
            <span>2</span>
            <strong>Matched</strong>
          </div>

          <div className="status">
            <span>3</span>
            <strong>Claimed</strong>
          </div>

          <div className="status">
            <span>4</span>
            <strong>Returned</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracking;

import { useState } from "react";

function FoundItems() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Found Item:", form);

    alert("Found item reported successfully!");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Report Found Item</h1>

        <p>Help someone find their lost belongings.</p>

        <form onSubmit={handleSubmit}>
          <label>Item Name</label>

          <input
            name="name"
            placeholder="Example: Set of keys"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Category</label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option>Electronics</option>
            <option>Wallet</option>
            <option>Keys</option>
            <option>Documents</option>
            <option>Pets</option>
            <option>Other</option>
          </select>

          <label>Location Found</label>

          <input
            name="location"
            placeholder="Where did you find it?"
            value={form.location}
            onChange={handleChange}
            required
          />

          <label>Date Found</label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <label>Description</label>

          <textarea
            name="description"
            placeholder="Describe the item..."
            value={form.description}
            onChange={handleChange}
          />

          <button type="submit">Report Found Item</button>
        </form>
      </div>
    </div>
  );
}

export default FoundItems;

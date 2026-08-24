import { useState } from "react";

function LostItems() {
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

    console.log("Lost Item:", form);

    alert("Lost item reported successfully!");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Report Lost Item</h1>

        <p>Tell us about the item you lost.</p>

        <form onSubmit={handleSubmit}>
          <label>Item Name</label>

          <input
            name="name"
            placeholder="Example: Black wallet"
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

          <label>Location Lost</label>

          <input
            name="location"
            placeholder="Where did you lose it?"
            value={form.location}
            onChange={handleChange}
            required
          />

          <label>Date Lost</label>

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

          <button type="submit">Report Lost Item</button>
        </form>
      </div>
    </div>
  );
}

export default LostItems;

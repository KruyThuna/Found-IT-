import { useState } from "react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      alert("Admin login successful");
    } else {
      alert("Invalid admin username or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">◎ Found-IT</div>

        <h1>Admin Login</h1>

        <p>Sign in to manage the Found-IT platform.</p>

        <form onSubmit={handleSubmit}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Admin username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Admin Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

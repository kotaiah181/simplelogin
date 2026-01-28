import "./Welcome.css";

function Welcome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <p>Username: {user?.username}</p>
      <p>Your Email: {user?.email}</p>

      <button 
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Welcome;

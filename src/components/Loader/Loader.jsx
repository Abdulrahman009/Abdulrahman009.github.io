import "./Loader.css";

function Loader() {
  return (
    <div className="loader">

      <div className="loader-content">

        <div className="loader-logo">
          AB
        </div>

        <h2>Abdulrahman Bello</h2>

        <p>Loading Portfolio...</p>

        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>

      </div>

    </div>
  );
}

export default Loader;
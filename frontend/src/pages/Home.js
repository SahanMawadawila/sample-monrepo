import React, { useEffect, useState } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page">
      <h1>Home</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : data ? (
        <p>{data.message}</p>
      ) : (
        <p>Could not connect to backend.</p>
      )}
    </div>
  );
}

export default Home;

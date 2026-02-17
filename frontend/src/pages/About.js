import React, { useEffect, useState } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function About() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/about`)
      .then((res) => res.json())
      .then((json) => {
        setInfo(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page">
      <h1>About</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : info ? (
        <div>
          <p>
            <strong>App:</strong> {info.appName}
          </p>
          <p>
            <strong>Version:</strong> {info.version}
          </p>
          <p>
            <strong>Description:</strong> {info.description}
          </p>
        </div>
      ) : (
        <p>Could not load about info.</p>
      )}
    </div>
  );
}

export default About;

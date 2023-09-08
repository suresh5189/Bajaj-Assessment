import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiRequest() {
  const [response, setResponse] = useState(null);

  // Function to make the API request
  const fetchData = async () => {
    try {
      const result = await axios.get('/bfhl'); // GET request to /bfhl
      setResponse(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Response</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default ApiRequest;

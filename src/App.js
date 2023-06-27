import React, { useEffect, useState } from 'react';

function App() {
  const [postData, setPostData] = useState({ name: 'John Doe', age: 30 });
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => setResponseData(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>POST data:</h1>
      <pre>{JSON.stringify(postData, null, 2)}</pre>
      {responseData.length > 0 && (
        <div>
          <h1>Response data:</h1>
          <ul>
            {responseData.map(item => (
              <li key={item.id}>{item.name} - {item.age} years old</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

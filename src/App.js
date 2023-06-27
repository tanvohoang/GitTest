import React, { useEffect, useState } from 'react';

function App() {
  const [postData, setPostData] = useState({ name: 'John Doe', age: 30 });
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  
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

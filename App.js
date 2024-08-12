import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [Id, setId] = useState('');

  const fetchData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
      .then(response => {
        setData(response.data);
        
        
      })
      
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите ID"
        value={Id}
        onChange={e => setId(e.target.value)}
      />
      <button onClick={fetchData}>get</button>
      {data && (
        <div>
          
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;

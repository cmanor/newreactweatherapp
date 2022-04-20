import React from 'react';
const api ={
key: '856cf893bf4748da5e5e119d50885a54',
base: 'https://api.openweathermap.org/data/2.5/'
}

// rest of api key - 'weather?lat={lat}&lon={lon}&appid={API key}&lang={lang}'

function App() {
  



  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input type='text'
            className='search-bar'
            placeholder= 'search'
          /> 
          </div>
      </main>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => setDarkMode(!darkMode);

  const [data, setData] = useState();
  const fetchData = ()=> {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setData(data))
  }
  useEffect(() => fetchData(), []);

  const link = [...Array(data?.length)].map((_) => _);
  for(var i=0; i<data?.length; i++) {
    link[i] = data[i].cca3;
  }
  
  return (
    <div className={darkMode ? "App darkMode" : "App"}>
    {data && 
      <BrowserRouter>
        <Header 
          darkMode={darkMode}
          handleDarkMode={handleDarkMode}
        />
        <div id="Container">
          <Routes>
            <Route path='/' element={<Home data={data} />} />
            {data.map((item) => {
              return (
                <Route 
                  key={item.cca3} 
                  path={`/detail/${item.cca3}`} 
                  element={<Detail dataItem={item}/>} 
                />
              )
            })}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    }
    </div>
  )
}

export default App

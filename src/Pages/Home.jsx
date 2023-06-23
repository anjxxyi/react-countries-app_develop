import React from 'react'
import { Link } from 'react-router-dom'
import Detail from './Detail'

const Home = ({data}) => {
  return (
    <div className="Home">
      <section className="searchSection">
        <input type="text" placeholder="Enter Keyword" />
        <button onClick={() => alert('Search Success!')}>Search</button>
      </section>
      <section className="listSection">
        {data ? data.map((item) => {
          return (
            <Link className='listItem' 
              key={item.cca3}
              to={`/detail/${item.cca3}`} 
              element={<Detail />}
            >
              <div className="thumb" style={{background: `url(${item.flags.svg}) center center / cover no-repeat`}}></div>
              <div className="info">
                <h2 className="name">
                  {item.name.common}
                  <span>{item.translations.kor.common}</span> 
                </h2>
                <ul className="summary">
                  <li className="population">
                    <b>Population :</b> {item.population}
                  </li>
                  <li className="region">
                    <b>Region :</b> {item.region}
                  </li>
                  <li className="capital">
                    <b>Capital :</b> {item.capital}
                  </li>
                </ul>
              </div>
            </Link>
          )
        }) : null}
      </section>
    </div>
  )
}

export default Home
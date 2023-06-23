import React from 'react'
import NavBar from '../Components/NavBar'

const Detail = ({dataItem}) => {
  return (
    <>
      <NavBar />
      <div className="Detail">
        <div className="thumb">
          <img src={dataItem.flags.svg} alt={`${dataItem.name.common} flag`} />
        </div>
        <div className="info">
          <h2 className="name">
            {dataItem.name.common}
            <span>{dataItem.translations.kor.common}</span> 
          </h2>
          <ul className="summary">
            <li className="population">
              <b>Population :</b> {dataItem.population}
            </li>
            <li className="region">
              <b>Region :</b> {dataItem.region}
            </li>
            <li className="capital">
              <b>Capital :</b> {dataItem.capital}
            </li>
            <li className="subregion">
              <b>Sub Region :</b> {dataItem.subregion}
            </li>
            <li className="">
              <b>Top Level Domain :</b> {dataItem.cca2}
            </li>
            <li className="">
              <b>Languages :</b> {Object.values(dataItem.languages)}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Detail
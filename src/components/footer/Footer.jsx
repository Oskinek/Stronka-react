import React from 'react'
import './footer_styles.scss'

const Footer = () => {
  const companies = ['./netflix.png','./bmw.png','./ff.png','./naruto.png']
  const allCompanies = companies.map((company,index) => (
    <img src={company} key={index} alt="company-logo"></img>
  ))
  return (
    <div className="footer">
      {allCompanies}
    </div>
  )
}

export default Footer
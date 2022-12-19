import React from 'react'
import AlertDialog from './companyDetailModal'
import './styles/Company.css'

const Company = ({company}) => {
  return (
    <div className='search__company'>
        <p>{company.title}</p>
        <AlertDialog key={company.id} company={company}/>
    </div>
  )
}

export default Company
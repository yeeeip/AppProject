import React, { useState } from 'react'
import Company from '../Components/Company'
import { useFindTitleQuery } from '../hooks/Query/findTitle'
// import { useGroupsQuery } from '../hooks/Query/GetCompany'
import './Styles/Search.css'


const Search = () => {
  const [title, setTitle] = useState('')
  const [alco, setAlco] = useState(true)
  const [cig, setCig] = useState(true)
  const [maxHuman, setMaxHuman] = useState(10)

  const { data: titleData } = useFindTitleQuery(title)
  console.log(titleData)

  function handleChange(event) {
    setTitle(event.target.value)
  }


  return (
    <div className='search'>
        <div className="search__sidebar">
          <h5>Алкоголь</h5>
          <div className="form-check">
            <input className='form-check-input' type="radio" name="alcohol" id='alcohol1' checked={alco} onChange={event => setAlco(true)}/>
            <label className="form-check-label" htmlFor="alcohol1">
              Приветсвуется
            </label>
          </div>
          <div className="form-check">
            <input className='form-check-input' type="radio" name="alcohol" id="alcohol2" checked={!alco} onChange={event => setAlco(false)}/>
            <label className="form-check-label" htmlFor="alcohol2">
              Не приветсвуется
            </label>
          </div>
          <h5 className='mt-3'>Курение</h5>
          <div className="form-check">
            <input className='form-check-input' type="radio" name="cig" id='cig1' checked={cig} onChange={event => setCig(true)}/>
            <label className="form-check-label" htmlFor="cig1">
              Приветсвуется
            </label>
          </div>
          <div className="form-check">
            <input className='form-check-input' type="radio" name="cig" id="cig2" checked={!cig} onChange={event => setCig(false)}/>
            <label className="form-check-label" htmlFor="cig2">
              Не приветсвуется
            </label>
          </div>
          <h5 className='mt-3'>Макс. кол-во людей</h5>
          <div className="search__maxHuman">
            <input min='10' max='100' type="range" class="form-control-range" id="maxHuman" value={maxHuman} onChange={event => {setMaxHuman(event.target.value); console.log(maxHuman)}}/>
            <span id='maxHumanCounter'>{maxHuman}</span>
          </div>
        </div>
        <div className="search__main">
            <div className="input-group mb-3">
                <input value={title} onChange={event => setTitle(event.target.value)} type="text" className="form-control" placeholder="Введите название команды"/>
                <div className="input-group-append">
                    <button onClick={handleChange} className="btn" type="button">Найти</button>
                </div>
            </div>
            <div className="search__main-companies">
                {
                  titleData && titleData?.filter(company => company.cigarettesAllowed === cig && company.alcoholAllowed === alco && company.participantsMax >= maxHuman).map(company => 
                    <Company company={company} key={company.id}/>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default Search
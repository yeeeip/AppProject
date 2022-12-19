import React, { useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from '../lib/shema'
import './Styles/Create.css'
import FormTextField from '../Components/form/TextField'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import api from '../lib/axios'
// import { useHistory } from "react-router-dom";

const Create = () => {
  // let history = useHistory();

  const [valueChecked, setValueChecked] = useState({
    cigarettesAllowed: true,
    alcoholAllowed: true
  })

  const defaultValues = {
    city: "",
    description: "",
    location: "",
    participantsMax: 0,
    photo: null,
    title: "",
  };
  const { control, handleSubmit, /*getValues,*/ watch } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  watch();
  // const values = getValues();

  async function createCargo(values) {
    if (!values.title || !values.city || !values.participantsMax || !values.description) return toast.error('Заполните все необходимые поля')
    try {
      const dataToServer = { ...values, ...valueChecked };
      const { data } = await api.post("/api/v1/groups/", dataToServer);
      console.log(data?.response)
      if (data) {
        toast.success('Компания успешно создана!')
        // history.push('/')
      } else toast.error('Что-то пошло не так')
      return data;
    } catch (error) {
      // toast.error(errorToShow);
    }
  }

  return (
    <div className='create'>
      <div className="create__wrapper">
        <h3>Создание группы</h3>
        <form onSubmit={handleSubmit(createCargo)}>
        <h5><span className="span-star">*</span>Название вашей компании:</h5>
          <FormTextField
            size="small"
            control={control}
            name="title"
            type="text"
          />
          <h5><span className="span-star">*</span>Город:</h5>
          <FormTextField type="text" name='city' control={control}/>
          <h5>Адрес:</h5>
          <FormTextField type="text" name='location' control={control}/>
          <div className="search__cigAndAlco">
            <div className="search__alco-alowed">
              <h5>Алкоголь</h5>
              <div className="form-check">
                <input className='form-check-input' type="radio" name="alcoholAllowed" id='alcohol1' checked={valueChecked.alcoholAllowed} onChange={event => setValueChecked({ ...valueChecked, alcoholAllowed: true })}/>
                <label className="form-check-label" htmlFor="alcohol1">
                Приветсвуется
                </label>
              </div>
              <div className="form-check">
                <input className='form-check-input' type="radio" name="alcoholAllowed" id="alcohol2" checked={!valueChecked.alcoholAllowed} onChange={event => setValueChecked({ ...valueChecked, alcoholAllowed: false })}/>
                <label className="form-check-label" htmlFor="alcohol2">
                  Не приветсвуется
                </label>
              </div>
            </div>
            <div className="search__cig-alowed">
                <h5>Курение</h5>
              <div className="form-check">
                <input className='form-check-input' type="radio" name="cigarettesAllowed" id='cig1' checked={valueChecked.cigarettesAllowed} onChange={event => setValueChecked({ ...valueChecked, cigarettesAllowed: true })}/>
                <label className="form-check-label" htmlFor="cig1">
                  Приветсвуется
                </label>
              </div>
              <div className="form-check">
                  <input className='form-check-input' type="radio" name="cigarettesAllowed" id="cig2" checked={!valueChecked.cigarettesAllowed} onChange={event => setValueChecked({ ...valueChecked, cigarettesAllowed: false })}/>
                  <label className="form-check-label" htmlFor="cig2">
                    Не приветсвуется
                  </label>
              </div>
            </div>
          </div>
          <h5><span className="span-star">*</span>Максимальное количество людей</h5>
          <FormTextField type="number" name="participantsMax" control={control}/>
          <h5><span className="span-star">*</span>Описани:</h5>
          <FormTextField name="description" control={control}/>
          <button style={{ marginTop: '1em' }} class="btn" type="submit">Создать</button>
        </form>
      </div>
    </div>
  )
}

export default Create
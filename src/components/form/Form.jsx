import React from 'react'
import './form_styles.scss'

const Form = () => {
  return (
    <form action="https://formsubmit.co/oski.natorski@gmail.com" method="POST">
      <fieldset>
        <legend>Skontaktuj się z nami</legend>
        <div className="form-description">E-mail:</div> <input type="email" name="email" id="email" placeholder="E-mail" required></input>
        <div className="form-description">Imie:</div> <input type="text" name="imie" id="imie" placeholder="Imie" required></input>
        <div className="form-description">Telefon:</div> <input type="text" name="telefon" id="telefon" placeholder="Telefon" size="9" required></input>
        <div className="form-description">Treść zapytania:</div>
        <textarea name="zapytanie" id="zapytanie" placeholder="Jak możemy ci pomóc?" cols="30" rows="10" required></textarea>
        <div className='form-description' id="submit-button"><input type='submit' value='Wyślij'></input></div>
      </fieldset>
    </form>
  )
}

export default Form
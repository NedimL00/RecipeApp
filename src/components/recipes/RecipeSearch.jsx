import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import RecipeContext from '../../context/recipe/RecipeContext';
import { FaSearch } from 'react-icons/fa'

function RecipeSearch() {

  const [inputText, setInputText] = useState('');
  const {setText} = useContext(RecipeContext);
  const {setAlert} = useContext(AlertContext);


  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputText === ''){
      setAlert('Please enter some value', 'error')
    }else {
      setText(inputText);
      // setInputText('');
    }
  }




  return (
    <header className='header'>
      <div className='container'>
        <form onSubmit={handleSubmit} className='recipe-form'>
          <input type='text' value={inputText} onChange={handleChange} className='recipe-input'/>
          <button type='Submit' className='btn btn-search btn-recipe'><FaSearch className='search-icon'/></button>
        </form>
      </div>
    </header>
  )
}

export default RecipeSearch
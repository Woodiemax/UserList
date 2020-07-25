import React,{useState}  from 'react'

const SearchPanel=({value})=> {

    const [term,SetTerm]=useState('')

    return (
        <input type="text" value={term} className='form-control' placeholder='Начните поиск' />
    )
}

export default SearchPanel

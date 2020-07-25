import React from 'react'

const SearchPanel=({value})=> {

    

    return (
        <input type="text" value={value} className='form-control' placeholder='Начните поиск' />
    )
}

export default SearchPanel

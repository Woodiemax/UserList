import React,{useState}  from 'react'

const SearchPanel=({value})=> {

    const [term,SetTerm]=useState('')

    const onSearch = (e)=>{
            const term = e.target.value
            S
    }

    return (
        <input type="text" value={term} className='form-control' placeholder='Начните поиск' onChange={onSeacrh} />
    )
}

export default SearchPanel
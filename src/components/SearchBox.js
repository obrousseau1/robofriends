import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 bg-light-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}> 
            </input>
        </div>
    )
}

export default SearchBox;
// TODO: check the syntax for searchChange (why not searchChange() again?)
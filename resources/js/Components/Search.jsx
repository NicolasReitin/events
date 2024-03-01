import React from 'react'

export default function Search( {setSearchBar} ) {

    const handleChange = (e) => {
        setSearchBar(e.target.value)
    }

  return (
    <>
        <form action="">
            <div className='relative flex gap-5 mt-5 ml-5'>
                <input 
                onChange={handleChange} // Ajout du gestionnaire onChange
                className='rounded relative'
                type="search" 
                placeholder='search'
                />
                <button type='submit' className='absolute top-2 left-52'>
                    <img style={{width: '30px'}} src="icons/loupe.png" alt="loupe" />
                </button>
            </div>
        </form>
    </>
    )
}

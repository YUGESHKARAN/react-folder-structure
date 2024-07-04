import React from 'react'
import NewButton from '../ButtonComponent/NewButton'



export default function ReactFormInput() {
  return (
    <div>

        <form className='w-1/2 bg-gray-100 h-20 m-auto flex items-center' action="" >
        
            <input type="text" placeholder='Your text' className='w-20 m-auto bg-transparent'/>
        </form>
        <NewButton/>

    </div>
  )
}
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function ImageModal({children}) {
  const router = useRouter()  
  return (
    <>
    			<div className='modal-backdrop' onClick={router.back}/>
			<dialog className='modal' open>
        <div className='fullscreen-image'>
        {children}
        </div>
        </dialog>
    </>
  )
}

export default ImageModal

import React from 'react'
import ReactDom from 'react-dom'

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div  id='overlay' />
      <div  id='modal'>
      {children}
        <button onClick={onClose} id='usercomment'>Close</button>
        
      </div>
    </>,
    document.getElementById('portal')
  )
}

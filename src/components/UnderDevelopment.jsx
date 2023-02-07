import React from 'react'

const UnderDevelopment = () => {
  return (
    <div style={{
        textAlign: 'center',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        zIndex: '20',
        backgroundColor: 'black', 
        opacity: '.8',
        color: 'red'

    }}>Under Development</div>
  )
}

export default UnderDevelopment
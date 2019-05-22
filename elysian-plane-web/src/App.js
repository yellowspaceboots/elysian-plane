import React from 'react'
import './App.css'
import bg from './bg.jpg'
import Typography from '@material-ui/core/Typography'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          position: 'fixed',
          zIndex: -1,
          top: 0,
          left: 0,
          backgroundColor: 'black',
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      <Typography variant='h1' gutterBottom style={{ color: 'white', marginTop: 75, fontWeight: 900 }}>
        THE ELYSIAN PLANE
      </Typography>
      <Typography variant='h5' gutterBottom style={{ color: 'white' }}>
        Time for gaming to get with this century
      </Typography>
    </div>
  )
}

export default App

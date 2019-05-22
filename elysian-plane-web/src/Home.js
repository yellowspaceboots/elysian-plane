import React from 'react'
import Typography from '@material-ui/core/Typography'

const Home = () => {
  return (
    <div id='Home' style={{ minHeight: '100vh', paddingTop: 100 }}>
      <Typography variant='h1' align='center' gutterBottom style={{ fontWeight: 100, backgroundColor: 'white' }}>
        THE ELYSIAN PLANE
      </Typography>
      <Typography variant='h5' align='center' gutterBottom style={{ color: 'white' }}>
        Time for gaming to get with this century
      </Typography>
    </div>
  )
}

export default Home

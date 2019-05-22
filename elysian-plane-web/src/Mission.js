import React from 'react'
import Typography from '@material-ui/core/Typography'

const Mission = () => {
  return (
    <div id='Mission' style={{ minHeight: '100vh', paddingTop: 100 }}>
      <Typography variant='h1' align='center' gutterBottom style={{ color: 'white', fontWeight: 100 }}>
        Our Mission
      </Typography>
      <Typography variant='h5' align='center' gutterBottom style={{ color: 'white' }}>
        If we choose to accept it...
      </Typography>
    </div>
  )
}

export default Mission

import React from 'react'
import Typography from '@material-ui/core/Typography'

const Mission = () => {
  return (
    <div id='Mission' style={{ minHeight: '100vh', paddingTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <Typography variant='h1' gutterBottom style={{ color: 'white', fontWeight: 100 }}>
        Our Mission
      </Typography>
      <Typography variant='h5' style={{ color: 'white', marginBottom: 50 }}>
        If we choose to accept it...
      </Typography>
      <div style={{ width: '50%' }}>
        <Typography style={{ color: 'white', marginBottom: 20 }}>
        With advancements in technology moving at lightning speeds we at The Elysian Plane feel that it's about time to start thinking about how gaming will look in the future.
        We believe that the complete merger of PC, console and mobile gaming is inevitable.
        </Typography>
        <Typography style={{ color: 'white', marginBottom: 20 }}>
        Our mission is to create a platform that is capable of running video games universally across all of these technologies. Imagine being able to puchase a video game once and play it on the console of your choice.
        Or create a save point on PC and then load that save point on your mobile device. We have started seeing more and more 'cross-platform' games being developed but what we are proposing goes beyond that.
        We are talking about games that are universal by design.
        </Typography>
      </div>
    </div>
  )
}

export default Mission

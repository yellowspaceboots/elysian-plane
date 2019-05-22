import React from 'react'
import bg from './bg.jpg'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from './tep.svg'
import Home from './Home'
import Mission from './Mission'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Link from '@material-ui/core/Link'

const App = () => {
  return (
    <Router>
      <CssBaseline />
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
      <AppBar position='fixed' style={{ backgroundColor: 'black' }}>
        <Toolbar style={{ height: 100 }}>
          <div style={{ display: 'flex', height: '80%', flexGrow: 1 }}>
            <img src={logo} style={{ height: '100%', width: 'auto' }} alt='Logo' />
          </div>
          <Link
            smooth
            component={HashLink}
            color='inherit'
            style={{ padding: 15 }}
            variant='button'
            to={`#Mission`}
          >
            Our Mission
          </Link>
          <Link
            smooth
            component={HashLink}
            color='inherit'
            style={{ padding: 15 }}
            variant='button'
            to={`#Home`}
          >
            Login
          </Link>
        </Toolbar>
      </AppBar>
      <Home />
      <Mission />
    </Router>
  )
}

export default App

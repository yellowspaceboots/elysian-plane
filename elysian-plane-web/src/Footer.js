import React from 'react'
import Typography from '@material-ui/core/Typography'
import Logo from './Logo'
import { HashLink } from 'react-router-hash-link'
import Link from '@material-ui/core/Link'

const Footer = () => {
  return (
    <React.Fragment>
      <div id='Footer' style={{ minHeight: '25vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a' }}>
        <div style={{ width: '70%', display: 'flex' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Logo size={150} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography style={{ color: 'white', marginBottom: 12 }}>
                Company
            </Typography>
            <Link
              smooth
              component={HashLink}
              style={{ color: 'white', marginTop: 10 }}
              variant='body2'
              to={`#Home`}
            >
            About Us
            </Link>
            <Link
              smooth
              component={HashLink}
              style={{ color: 'white', marginTop: 10 }}
              variant='body2'
              to={`#Home`}
            >
            Team
            </Link>
            <Link
              smooth
              component={HashLink}
              style={{ color: 'white', marginTop: 10 }}
              variant='body2'
              to={`#Home`}
            >
            Culture
            </Link>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography gutterBottom style={{ color: 'white', marginBottom: 12 }}>
                Community
            </Typography>
            <Link
              smooth
              component={HashLink}
              style={{ color: 'white', marginTop: 10 }}
              variant='body2'
              to={`#Home`}
            >
            Blog
            </Link>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography gutterBottom style={{ color: 'white', marginBottom: 12 }}>
                Help
            </Typography>
            <Link
              smooth
              component={HashLink}
              style={{ color: 'white', marginTop: 10 }}
              variant='body2'
              to={`#Home`}
            >
            Contact Us
            </Link>
            <Link
              smooth
              component={HashLink}
              style={{ color: 'white', marginTop: 10 }}
              variant='body2'
              to={`#Home`}
            >
            Terms of Service
            </Link>
            <Link
              smooth
              component={HashLink}
              style={{ color: 'white', marginTop: 10 }}
              variant='body2'
              to={`#Home`}
            >
            Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div style={{ minHeight: '10vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
        <Typography align='center' variant='caption' style={{ color: '#595959' }}>
        Copyright 2019 The Elysian Plane All Right Reserved
        </Typography>
      </div>
    </React.Fragment>

  )
}

export default Footer

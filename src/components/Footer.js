import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const Footer = () => {
    return (
        <div className="footer">
            <Box mt={8}>
                <Typography variant="body2" color="textSecondary" align="center">
                    <Link color="inherit" href="https://unq.edu.ar/">
                    Universidad Nacional de Quilmes
                    </Link>{' '}
                </Typography>
            </Box>
        </div>
    );
  }

export default Footer;
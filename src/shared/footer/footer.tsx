import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="White">
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/profile.php?id=61552500863066">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Foter() {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 3,
                backgroundColor: '#2b5aa2'
            }}
            className='footer-layout'
        >
            <Container maxWidth="sm">
                <Typography variant="body1">
                    Copyright all rights reserved 2023.
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}
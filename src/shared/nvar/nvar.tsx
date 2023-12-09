import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import starbook from '../../assets/Black and White Camera Icon Photography Logo (1).png';
import logoStarbook from '../../assets/Black and White Camera Icon Photography Logo (200 x 50 px).png'
import { ShoppingCart } from '@mui/icons-material';
import Button from '@mui/material/Button/Button';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, + 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: '0 auto ',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '50%',
  },
}));



const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 2, 2, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '12ch',
      },
    },
  },
}));



export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"
        className='nvar-layout'>

        <Toolbar className='toolbar-container'>
          <div>
            <div className='logosNavBar'>
              <div className='div-img-starbook'>
                <img src={starbook} className='img-starbook '></img>
              </div>
              <img src={logoStarbook} className='img-letrasStarbook'></img>
            </div>
          </div>

          <Search
            className='SearchBarr'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'Buscar' }}

            />
          </Search>

          <IconButton
            size='large'
            color='inherit'
            edge='start'
          >
            <ShoppingCart></ShoppingCart>
          </IconButton>

        </Toolbar>

        <div className='shortcuts'>
          <ul className='ul-class'>
            <li className='li-class'><a href='/' className='li-class a-hover'>Cotiza</a></li>
            <li className='li-class' ><a href='/' className='li-class a-hover'>Ofertas</a></li>
            <li className='li-class'><a href='/' className='li-class a-hover'>Riego</a></li>
            <li className='li-class'><a href='/' className='li-class a-hover'>Semillas</a></li>
            <li className='li-class'><a href='/' className='li-class a-hover'>Maquinaria</a></li>
            <li className='li-class'><a href='/' className='li-class a-hover'>Proteccion</a></li>
          </ul>
        </div>

      </AppBar>

    </Box>

  );
}
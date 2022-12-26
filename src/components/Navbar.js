import { Box, Button, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import GoogleLogo from '../icons/google_logo.svg';
import UserPicture from '../icons/user_picture.jpg';
const Navbar = () => {
 
  return (
    <Stack 
            direction="row"
            sx={{
                alignItems:'center',
                justifyContent:'space-between',
                borderBottom:'1px solid #ececec',
            }}
        >
            <Box className="navbar-left" 
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}
            >
                <Button sx={{
                    p:'6px 15px',
                    borderRadius:'20px',
                }}>
                    <MenuIcon/>
                </Button>
                <Box 
                    className="logo-container"
                    sx={{
                        mt:'10px',
                    }}
                >
                    <img className="logo" src={GoogleLogo} alt="Google Logo"/>
                </Box>
            </Box>
            <Box 
                className="navbar-right" 
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}
            >
                <Button sx={{
                        p:'6px 15px',
                        borderRadius:'20px',
                    }}
                >
                    <AppsIcon/>
                </Button>
                <Box className="user-picture-container">
                    <Button sx={{borderRadius:'20px',}}><img className="user-picture" src={UserPicture} alt="User Profile"/></Button>
                </Box>
            </Box>
        </Stack>
  );
}

export default Navbar;
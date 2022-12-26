import { Box, Button, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/PeopleAlt';

const OtherContent = () => {
    return (
      <Box sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          margin:'0 auto',
          mt:'50px',
      }}>
          <Box className='button-group' sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',}}>
            <Button sx={{color:'#6a6767',ml:'50px',p:'20px',border:'1px solid #ececec',borderRadius:'50px'}}>
              <HistoryIcon sx={{fontSize:'40px',}}/>
            </Button>
            <Typography className='button-text' sx={{mt:'10px',ml:'40px'}}>Geçmiş</Typography>
          </Box>
          <Box className='button-group' sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',}}>
            <Button sx={{color:'#6a6767',ml:'50px',p:'20px',border:'1px solid #ececec',borderRadius:'50px'}}>
              <StarIcon sx={{fontSize:'40px',}}/>
            </Button>
            <Typography className='button-text' sx={{mt:'10px',ml:'40px'}}>Kaydedilenler</Typography>
          </Box>
          <Box className='button-group' sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',}}>
            <Button sx={{color:'#6a6767',ml:'50px',p:'20px',border:'1px solid #ececec',borderRadius:'50px'}}>
              <PeopleIcon sx={{fontSize:'40px',}}/>
            </Button>
            <Typography className='button-text' sx={{mt:'10px',ml:'40px'}}>Katkıda Bulunun</Typography>
          </Box>
      </Box>
    );
}

export default OtherContent;
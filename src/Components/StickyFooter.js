import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

function Copyright() {
  return (
    <Box sx={{flexGrow: 1,display:{xs:'flex'}}}>
    <Typography variant="body2" color="text.secondary">
      <Link color="inherit" href="https://pooenima.edu.in/">
        Poornima University
      </Link>{' '}
      {' © '}
      {new Date().getFullYear()}
      {'. Designed by '}
      <Link color="inherit" href="https://avination.in/">Avination</Link>
      {'. All Rights Reserved'}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {'.'}
      <Link color="inherit" href="#">
        Terms of Service
      </Link>
      {' '}
      {'.'}
      <Link color="inherit" href="#">
       Privacy Policy
      </Link>
    </Typography>
    </Box>
  );
}

export default function StickyFooter() {
  return (
     <Box component="footer">
       <Container maxWidth="lg">
         <Grid container spacing={5}>
           <Grid item xs={12} sm={4}>
             <Box borderBottom={1}>Help</Box>
             <Box>
               <Link href='/' color="inherit">
                 Contact
               </Link>
             </Box>
             <Box>
               <Link href="/" color="inherit">
                 Support
               </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Privacy
              </Link>
            </Box>
           </Grid>
           
         </Grid>
       </Container>

      
     
     <Box sx={{p:2,mt:4,borderTop:1,borderColor: 'primary.main'}}>
     <Copyright />
     </Box>
   </Box>
  );
}

/** @format */
"use client"
import Header from './header.js';
import Footer from './footer.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const mdTheme = createTheme();

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Header />
          <Box
            component='main'
            sx={{
              backgroundColor: theme =>
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
              <main className='content-container'>{children}</main>
              <Footer sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

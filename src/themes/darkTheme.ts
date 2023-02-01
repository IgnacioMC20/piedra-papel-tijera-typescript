import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#7600bc'
    },
    info:{
      main: '#fff'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'dark',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.05)',
          color: 'white',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          ":hover": {
            backgroundColor: '#7600bc',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },
    
    
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});
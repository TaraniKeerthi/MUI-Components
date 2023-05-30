import React from 'react'
import { Typography,Grid,Box,Stack,BottomNavigation,BottomNavigationAction,Breadcrumbs,Link,List,ListItem,ListItemButton,ListItemIcon,ListItemText,SwipeableDrawer,Divider,Button,Menu,MenuItem, Pagination,TablePagination,Stepper,Step,StepLabel,StepContent,Paper,Tabs,Tab} from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOn from '@mui/icons-material/LocationOn'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'

export default function NavigationComp() {
 //Bottom Navigation
  const [value,setValue]=React.useState(0);
  const click= (newValue) => (
    setValue(newValue)
  );
  
  //Drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  //Pagination
  const [page,setPage]= React.useState(2);
  const [rowsPerPage,setRowsPerPage]= React.useState(10);

  const handleChangePage=(event,newpage) => {
    setPage(newpage);
  };

  const handleChangeRowsPerPage=(event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Speed Dial
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  //Stepper
  const steps = [
    {
      label: 'Select campaign settings',
      description: `Lorem Ipsum lorem ipsum dolor sit amet, consectetur`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Lorem Ipsum lorem ipsum dolor sit amet, consectetur`,
    },
  ]

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //
  const [val, setVal] = React.useState(2);

  const handleChange = (event, newValue) => {
    setVal(newValue);
  };


  return (
    <>
        <Grid container sx={{m:2}}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{p:2}}>
                <Typography align='center' sx={{fontWeight:700}}>BOTTOM NAVIGATION</Typography>
                <Box border={2} borderColor={'skyblue'}>
                    <BottomNavigation showLabels value={value} onChange={click}>
                       <BottomNavigationAction label="recent" icon={<RestoreIcon/>}/>
                       <BottomNavigationAction label="favourite" icon={<FavoriteIcon/>}/>
                       <BottomNavigationAction label="location" icon={<LocationOn/>}/>
                    </BottomNavigation>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{p:2}}>
               <Typography align='center' sx={{fontWeight:700}}>BREADCRUMBS</Typography>
                <Box>
                   <Breadcrumbs>
                       <Link underline="hover" color="indigo" href="#">MUI</Link>
                       <Link underline="hover" color="indigo" href="#">Core</Link>
                       <Link underline="hover" color="indigo" href="#">Breadcrumbs</Link>
                   </Breadcrumbs>
                   <Breadcrumbs>
                       <Link underline="hover" color="indigo" href="#">MUI</Link>
                       <Link underline="hover" color="indigo" href="#">Core</Link>
                       <Link underline="hover" color="indigo" href="#">Breadcrumbs</Link>
                   </Breadcrumbs>
                   <Breadcrumbs>
                       <Link underline="hover" color="indigo" href="#">MUI</Link>
                       <Link underline="hover" color="indigo" href="#">Core</Link>
                       <Link underline="hover" color="indigo" href="#">Breadcrumbs</Link>
                   </Breadcrumbs>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{p:2}}>
               <Typography align='center' sx={{fontWeight:700}}>DRAWER</Typography>
                <Box align={'center'}>
                    {['left', 'top'].map((anchor) => (
                        <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{p:2}}>
                <Typography align='center' sx={{fontWeight:700}}>MENU</Typography>
                <Box display={'flex'} justifyContent={'center'}>
                    <Button
                        id="basic-button"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        Dashboard
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{m:2}}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{p:2}}>
            <Typography align='center' sx={{fontWeight:700}}>PAGINATION</Typography>
            <Stack spacing={2}>
                <Pagination count={6} color="secondary"/>
                <Pagination count={4} color="primary" variant="outlined" size="medium" showFirstButton showLastButton/>
                <TablePagination component='div' count={100} page={page} rowsPerPage={rowsPerPage} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage}  color="primary"/>
            </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2} sx={{p:2}}>
              <Typography align='center' sx={{fontWeight:700}}>SPEED DIAL</Typography>
              <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  sx={{ position: 'absolute', bottom: '70%', right: 60 }}
                  icon={<SpeedDialIcon />}>
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{p:2}}>
              <Typography align='center' sx={{fontWeight:700}}>STEPPER</Typography>
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you are finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{p:2}}>
              <Typography align='center' sx={{fontWeight:700}}>TABS</Typography>
              <Box align="center">
                <Tabs centered value={val} onChange={handleChange} aria-label="tabs example">
                  <Tab label="Active" />
                  <Tab label="Active" />
                </Tabs>
              </Box>  
            </Grid>
        </Grid>
    </>   
  )
}

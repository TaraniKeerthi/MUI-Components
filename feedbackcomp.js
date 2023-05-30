import React from 'react'
import { Alert, Typography,Grid,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Box,CircularProgress,Stack, LinearProgress, Snackbar,Skeleton } from '@mui/material'

function FeedbackComp(){

    const [open, setOpen] = React.useState(false);
    const [click,setClick] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClick = () =>{
    setClick(true);
    };

    const handleClickClose = () => {
       setClick(false);
    }   

    const action=(
        <Button color="warning" size="small" onClick={handleClickClose}>
           UNDO
        </Button>
    );
     
    return(
        <Grid container sx={{m:2}}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}sx={{p:2}}>
                <Typography align={'center'} sx={{fontWeight:700}}>ALERT</Typography>
                <Alert severity="error" variant='outlined'>
                This is an error alert - <strong>check it out!</strong>
                </Alert>
                <Alert severity='warning' variant="filled">    
                    This is a warning alert - <strong>check it out!</strong>
                </Alert>
                <Alert severity='info'variant='outlined'>
                   This is an info alert - <strong>check it out!</strong>
                </Alert>
                <Alert severity="success" variant="filled">
                    This is a success alert - <strong>check it out!</strong>
                </Alert>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{p:2}}>
                <Typography align={'center'} sx={{fontWeight:700}}>DIALOG</Typography>
                    <Box align={'center'}  marginBottom={"20px"}>
                        <Button variant="outlined" onClick={handleOpen}>
                            COOKIES
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">
                            {"Use Website Cookies?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  Allow us to use cookies for providing more information related to your interests
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Disagree</Button>
                                <Button onClick={handleClose} >Agree</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                <Typography align={'center'} sx={{fontWeight:700}}>PROGRESS</Typography>
                <Stack spacing={2} direction="column" alignItems={'center'} marginBottom={"20px"}>
                    <Box display={'flex'} flexDirection={'row'} >
                        <CircularProgress color='secondary'/>
                        <CircularProgress color='success'/>
                        <CircularProgress color='warning'/>
                    </Box>
                    <LinearProgress sx={{width:'50%'}} color="info"/>
                </Stack>
                <Typography align={'center'} sx={{fontWeight:700}}>SNACKBAR</Typography>
                <Box align={'center'}>
                <Button  onClick={handleClick}variant='contained'>Open SnackBar</Button>
                <Snackbar open={click} onClose={handleClickClose} autoHideDuration={6000} message="This is a Snackbar" action={action} fontWeight={900}/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{p:2}}>
                <Typography align={'center'} sx={{fontWeight:700}}>SKELETON</Typography>
                <Stack alignItems={"center"}>
                <Skeleton variant="text" width={210}/>
                <Skeleton variant="circular" width={40} height={40}/>
                <Skeleton variant="rectangular" width={210} height={60}/>
                <Skeleton variant="rounded" width={210} height={60}/>
                </Stack>
            </Grid>
        </Grid>  

    )
}

export default FeedbackComp;
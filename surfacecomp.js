import { Accordion,AccordionSummary,AccordionDetails,Typography,Grid,AppBar,Box,Toolbar,IconButton,Button,Card,CardMedia, CardContent, CardActions} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MenuIcon from "@mui/icons-material/Menu"
function SurfaceComp(){
    return(
    <Grid container sx={{m:2}}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{p:2}}>
                <Typography align={'center'} sx={{fontWeight:700}}>ACCORDION </Typography>
                <Accordion>
                    <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                        <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{p:2}}>
            <Typography align={'center'} sx={{fontWeight:700}}>APP BAR</Typography>
            <Box>
            <AppBar position="static" color="info">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{p:2}}>
            <Typography align={'center'} sx={{fontWeight:700}}>CARD</Typography>
            <Card sx={{maxWidth:345}}>
                <CardMedia sx={{height:140}} image="https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop" title="Mountain"/>
                <CardContent>
                    <Typography component="div">MOUNTAIN</Typography>
                    <Typography variant="body2" color="secondary">A snow covered mountain with trees foreground</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">SHARE</Button>
                    <Button variant="contained">LEARN MORE</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>  
    );
}

export default SurfaceComp;
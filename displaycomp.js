import { Avatar,Stack,Box, Typography, IconButton, Badge,Chip, ListItem, ListItemAvatar, ListItemText,Divider,Grid} from "@mui/material"
import FolderIcon from '@mui/icons-material/Folder'
import MailIcon from '@mui/icons-material/Mail'
import ImageIcon from '@mui/icons-material/Image'
import WorkIcon from '@mui/icons-material/Work'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PageviewIcon from '@mui/icons-material/Pageview'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { green, pink,blue } from '@mui/material/colors'

function DisplayComp(){
    return(
       <Grid container sx={{m:2}}> 
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Typography align='center' sx={{fontWeight:700}}>AVATAR</Typography>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Stack spacing={2} direction='row' marginBottom={1}>
                        <Avatar alt="ben" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
                        <Avatar alt="bob" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                        <Avatar alt="bill" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
                    </Stack>
                    <Stack spacing={2} direction='row' marginBottom={1}>
                        <Avatar variant="square">NA</Avatar> 
                        <Avatar variant="square">MT</Avatar> 
                        <Avatar variant="square">AB</Avatar>
                    </Stack>
                    <Stack spacing={2} direction='row' marginBottom={1}>
                        <Avatar alt="folder" sx={{bgcolor:blue[700]}}><FolderIcon/></Avatar>
                        <Avatar alt="pageview" sx={{bgcolor:green[700]}}><PageviewIcon/></Avatar>
                        <Avatar alt="assignment" sx={{bgcolor:pink[700]}}><AssignmentIcon/></Avatar>
                    </Stack>
                </Box>    
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Typography align='center' sx={{fontWeight:700}}>BADGE</Typography>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <IconButton>
                        <Badge badgeContent={4} color="error">
                            <MailIcon sx={{color:"gray"}} />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={4} color="warning">
                            <ShoppingCartIcon sx={{color:"gray"}} />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={1000} max={999} color="success" >
                            <MailIcon sx={{color:"gray"}}/>
                        </Badge>
                    </IconButton> 
                    <IconButton>
                        <Badge badgeContent={0} color="secondary" showZero>
                          <MailIcon sx={{color:"gray"}}/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent='' color="secondary" >
                          <MailIcon sx={{color:"gray"}}/>
                        </Badge>
                    </IconButton>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} >
               <Typography align={"center"} sx={{fontWeight:700}}>CHIP</Typography>
               <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Chip sx={{mb:1}} variant="outlined" label='outlined'/>
                <Chip sx={{mb:1}} variant="outlined" label='clickable'/>
                <Chip sx={{mb:1}} avatar={<Avatar alt="bob" src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>} label='Avatar'/>
               </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} >
               <Typography align={'center'} sx={{fontWeight:700}}>DIVIDER</Typography>
               <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Photos" secondary='Jan 9, 2014'/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Work" secondary='Jan 7, 2014'/>
                    </ListItem>
                </Box> 
            </Grid>
       </Grid> 
    )
}

export default DisplayComp
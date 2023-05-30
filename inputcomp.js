import {Autocomplete,TextField,Grid, Typography,Box,Stack,Button,ButtonGroup,IconButton, FormGroup, FormControlLabel,Checkbox,Fab, FormLabel, RadioGroup, Radio, Rating, Select,MenuItem, InputLabel, FormControl, Slider} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import NavigateIcon from '@mui/icons-material/Navigation'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'

function InputComp() {
    const topfilms=[
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  }]
  
  return (
    <>
          <Grid container sx={{m:2}} > 
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                      <Typography sx={{fontWeight:700}} align="center">AUTOCOMPLETE</Typography> 
                      <Stack spacing={1}>
                          <Autocomplete
                          options={topfilms}
                          renderInput={(params) => <TextField {...params} label="Select Movie" />}
                          />
                          <Autocomplete
                          multiple={true}
                          options={topfilms}
                          renderInput={(params) => <TextField {...params} label="Multiple Options" />}
                          />
                          <Autocomplete
                          multiple={false}
                          options={topfilms}
                          renderInput={(params) => <TextField {...params} label="Single Option" />}
                          />
                      </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                  <Stack spacing={1}>
                  <Typography sx={{fontWeight:700}} align="center">BUTTONS</Typography>
                      <Button fullWidth variant="contained">SEND</Button>
                      <Button fullWidth variant="contained" disabled >BACK</Button>
                      <Button fullWidth variant="outlined" startIcon={<DeleteIcon />}>DELETE</Button>
                      <Stack direction="row" alignSelf="center" spacing={2}>
                        <Button variant="contained" component="label">Upload
                          <input hidden accept="image/*" type="file" multiple />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                          <input hidden accept="image/*" type="file" />
                          <PhotoCamera />
                        </IconButton>
                      </Stack>  
                  </Stack>
              </Grid> 
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                  <Stack>
                      <Typography sx={{fontWeight:700,pb:1}} align="center">BUTTON GROUP</Typography>
                      <Box align={"center"}>
                        <ButtonGroup variant="outlined" orientation='vertical'>
                          <Button>ONE</Button>
                          <Button>TWO</Button>
                          <Button>THREE</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="contained" orientation='vertical'sx={{width:80}}>
                          <Button>ONE</Button>
                          <Button>TWO</Button>
                          <Button>THREE</Button>
                        </ButtonGroup>
                      </Box>
                  </Stack>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                  <Typography align={'center'} sx={{fontWeight:700}}>CHECKBOX</Typography>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <FormGroup>
                    <FormControlLabel fullWidth control={<Checkbox defaultChecked/>} label="Label" />
                    <FormControlLabel fullWidth control={<Checkbox/>} label="required" required/>
                    <FormControlLabel fullWidth control={<Checkbox/>} label="I agree" required />
                    <FormControlLabel fullWidth control={<Checkbox/>} label="disabled" disabled/>      
                  </FormGroup>
                  </Box>
              </Grid>
          </Grid>   
          <Grid container sx={{m:2}} >  
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                  <Typography align={'center'} sx={{fontWeight:700}}>ICON</Typography>  
                  <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite />}/>} label="Favourites"/>
                    <FormControlLabel control={<Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon />}/>} label="Save"/>
                    <FormControlLabel control={<Checkbox icon={<ThumbUpAltOutlinedIcon/>} checkedIcon={<ThumbUpAltIcon/>}/>} label="Like" />
                    <FormControlLabel control={<Checkbox icon={<EmojiObjectsOutlinedIcon/>} checkedIcon={<EmojiObjectsIcon />}/>} label="Insightful"/>
                  </FormGroup>
                 </Box> 
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                  <Typography align={'center'} sx={{fontWeight:700}}>FLOATING ACTION BUTTON</Typography>
                  <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Fab sx={{alignSelf:'center',mt:2}}><AddIcon/></Fab>
                    <Fab sx={{alignSelf:'center',mt:2}}><EditIcon/></Fab>
                    <Fab variant="extended"sx={{mt:2}}><NavigateIcon sx={{m:1}}/>Navigate</Fab>
                  </Box>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                <Typography align={'center'} sx={{fontWeight:700}}>RADIO GROUP</Typography>
                    <FormGroup>
                      <Box m={'auto'}>
                        <FormLabel sx={{fontWeight:700}}>Gender</FormLabel>
                      </Box>
                      <Box  m={'auto'}>
                        <RadioGroup>
                          <FormControlLabel value="male" label="male" control={<Radio/>}/>
                          <FormControlLabel value="female" label="female" control={<Radio/>}/>
                          <FormControlLabel value="others" label="others" control={<Radio/>}/>
                          <FormControlLabel disabled value="disabled" label="disabled" control={<Radio/>}/>
                        </RadioGroup>
                      </Box> 
                    </FormGroup>
                    
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3} sx={{p:2}}>
                <Typography align={'center'} sx={{fontWeight:700}} >RATING</Typography>
                <Box align={'center'}>
                  <Typography>Read Only</Typography>
                  <Rating readOnly defaultValue={3} name='read-only'/>
                  <Typography>Disabled</Typography>
                  <Rating disabled name='read-only'/>
                  <Typography>No Rating</Typography>
                  <Rating  name='read-only'/>
                  <Typography>Rating Precision</Typography>
                  <Rating defaultValue={1.5} precision={0.5} name='read-only'/>
                </Box>
              </Grid>
          </Grid> 
          <Grid container sx={{m:2}}> 
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{p:2}} >
                <Box sx={{display:'flex',flexDirection:'column'}} >
                  <Typography align={'center'} sx={{fontWeight:700}}>SELECT</Typography>
                  <FormControl variant="filled"> 
                      <InputLabel label='age' >Age</InputLabel>
                      <Select>
                        <MenuItem value={1}>Ten</MenuItem>
                        <MenuItem value={2}>Thirty Two</MenuItem>
                        <MenuItem value={3}>Three Hundred twenty-two</MenuItem>
                      </Select>
                  </FormControl>
                  <Typography align={'center'} sx={{fontWeight:700}}>SLIDER</Typography>
                  <Stack spacing={2} direction='row'>
                    <VolumeDown/>
                    <Slider></Slider>
                    <VolumeUp/>
                  </Stack>
                  <Stack spacing={2} direction='row'>  
                    <VolumeDown/>
                    <Slider defaultValue={30} step={10} marks min={0} max={100} valueLabelDisplay='on'></Slider>
                    <VolumeUp/>
                  </Stack>
                </Box>
              </Grid>  
              <Grid item  xs={12} sm={12} md={6} lg={6} xl={5} sx={{p:2}}>
                <Typography align={"center"} sx={{fontWeight:700}}>TEXT FIELD</Typography>
                <Box display={'flex'} flexDirection={'column'}>
                  <TextField label="Enter" sx={{mb:5}}/>
                  <TextField label="Enter" helperText="Incorrect Entry" error />
                </Box>
              </Grid>
          </Grid>  
     </>  
             
  );
}

export default InputComp;
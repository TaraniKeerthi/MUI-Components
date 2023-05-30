import  {Container,Stack,Typography} from "@mui/material"
import InputComp from "./components/inputcomp.js"
import DisplayComp from "./components/displaycomp.js"
import FeedbackComp from "./components/feedbackcomp.js"
import SurfaceComp from "./components/surfacecomp.js"
import LayoutComp from "./components/layoutcomp.js"
import NavigationComp from "./components/navigationcomp.js"

function App() {
  return (
    <Container>
      <Stack sx={{display:"flex",flexDirection:'row',justifyContent:'center'}}>
        <Typography sx={{mt:5,color:"indigo",fontSize:20,fontWeight:900}}>MUI INPUT COMPONENTS</Typography>
      </Stack>
      <InputComp/>
      <Stack sx={{display:"flex",flexDirection:'row',justifyContent:'center'}}>
        <Typography sx={{mt:10,color:"indigo",fontSize:20,fontWeight:900}}>MUI DISPLAY COMPONENTS</Typography>
      </Stack>
      <DisplayComp/>
      <Stack sx={{display:"flex",flexDirection:'row',justifyContent:'center'}}>
        <Typography sx={{mt:10,color:"indigo",fontSize:20,fontWeight:900}}>MUI FEEDBACK COMPONENTS</Typography>
      </Stack>
      <FeedbackComp/>
      <Stack sx={{display:"flex",flexDirection:'row',justifyContent:'center'}}>
        <Typography sx={{mt:10,color:"indigo",fontSize:20,fontWeight:900}}>MUI SURFACE COMPONENTS</Typography>
      </Stack>
      <SurfaceComp/>
      <Stack sx={{display:"flex",flexDirection:'row',justifyContent:'center'}}>
        <Typography sx={{mt:10,color:"indigo",fontSize:20,fontWeight:900}}>MUI LAYOUT COMPONENTS</Typography>
      </Stack>
      <Typography align={'center'} sx={{color:"blueviolet",fontSize:20,fontWeight:600}}>[IMAGE LIST]</Typography>
      <LayoutComp/>
      <Stack sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <Typography sx={{mt:10,color:'indigo',fontSize:20,fontWeight:900}}>MUI NAVIGATION COMPONENTS</Typography>
      </Stack>
      <NavigationComp/>
    </Container> 
  );
}

export default App;

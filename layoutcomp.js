import React from 'react'
import {Grid, ImageList,ImageListItem,ImageListItemBar,Typography} from '@mui/material'

export default function LayoutComp() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];
  return (
    <Grid container sx={{m:0}}>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{p:2}}>
        <Typography align={'center'} sx={{fontWeight:700}}> STANDARD IMAGE LIST</Typography>
        <ImageList sx={{width:'100%',height:450}} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading='eager'/>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{p:2}}>
        <Typography align={'center'} sx={{fontWeight:700}}>MASONRY IMAGE LIST</Typography>
        <ImageList variant={'masonry'} sx={{width:'100%',height:450}} cols={3} gap={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title}loading='eager'/>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        <Typography align={'center'} sx={{fontWeight:700}}> IMAGE LIST WITH TITLE BAR</Typography>
        <ImageList sx={{width:'100%',height:450}}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <img src={item.img} alt={item.title}loading='eager'/>    
              <ImageListItemBar title={item.title} subtitle={item.author} position='bottom'/>
            </ImageListItem>
            
          ))}
        </ImageList>
      </Grid>
    </Grid>
  )
}

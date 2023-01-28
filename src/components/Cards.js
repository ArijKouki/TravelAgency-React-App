import React from 'react'
import CardItem from './CardItem'
import {Box,Typography,Button,Stack} from '@mui/material'
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img8 from '../images/img-8.jpg'


function Cards() {
  return (
    <Box
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    gap="50px"
    alignItems="center"
    justifyContent="center"
    height="100%"
    // maxHeight="100vh"
    // maxWidth="100vw"
    padding="20px"
    backgroundColor="white"
    // margin="2%"
    >
        <CardItem
        image={img9}
        imageAlt="Adventure"
        title="Explore the hidden waterfall deep inside the Amazon Jungle"
        path='/services'
        />

        <CardItem
        image={img2}
        title='Travel through the Islands of Bali in a Private Cruise'
        imageAlt='Luxury'
        path='/services'
        />

        <CardItem
        image={img3}
        imageAlt='Mystery'
        title='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
        path='/services'
        />

        <CardItem
        image={img4}
        imageAlt='Adventure'
        title='Experience Football on Top of the Himilayan Mountains'
        path='/products'
        />

        <CardItem
        image={img8}
        imageAlt='Adrenaline'
        title='Ride through the Sahara Desert on a guided camel tour'
        path='/signup'
        />
    </Box>
  )
}

export default Cards
import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Image from "./Slides";
import CardSimple from './CardSimple';

const BannerTop = (props) => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={3} >
                <Grid item xs={12} sm={4}>
                    <CardSimple src={'img/slide2.jpg'} height={140}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardSimple src={'img/slide3.jpg'} height={140} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardSimple src={'img/slide4.jpg'}  height={140} />
                </Grid>
            </Grid>
        </Container>
    )
}
export default BannerTop;
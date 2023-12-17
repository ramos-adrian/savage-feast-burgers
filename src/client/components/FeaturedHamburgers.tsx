import React, {useEffect, useState} from 'react';
import HamburguersService from '../services/Hamburgers.ts';
import {Hamburger} from "../types.ts";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../reducers/Cart.ts';
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {enqueueSnackbar, SnackbarProvider} from "notistack";

interface Props {
}

const FeaturedHamburgers: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [featuredHamburgers, setFeaturedHamburgers] = useState<Hamburger[]>([]);

    useEffect(() => {
        HamburguersService.getFeatured().then((response) => {
            setFeaturedHamburgers(response);
        }).catch((error) => {
            console.log('Failed to fetch featrued hamburgers: ', error);
        });
    }, []);

    const handleAddToCart = (hamburger: Hamburger) => {
        dispatch(addToCart({id: hamburger.id, quantity: 1}));
        enqueueSnackbar(`${hamburger.name} added to your cart!`,
            {
                variant: 'success',
                autoHideDuration: 4000,
                action: () => <Button variant="text" onClick={() => navigate('/cart')}>View order</Button>
            });
    };

    return (
        <Box pt={"1em"}>
            <SnackbarProvider />
            <Container>
                <Typography variant="h2" gutterBottom component="h2">
                    Our Star Burgers
                </Typography>
            </Container>
            {featuredHamburgers.map((burger, index) => {
                const backgroundColor = index % 2 === 0 ? '#424242' : '#212121';
                const order = index % 2 === 0 ? '0' : '1';
                return (
                    <Box
                        key={burger.id}
                        sx={{
                            backgroundColor,
                            backgroundSize: 'cover',
                            width: '100vw',
                            height: '80vh',
                        }}
                    >
                        <Container>
                            <Grid container justifyContent={"space-evenly"} alignItems={"center"} height={"70vh"}>

                                <Grid item xs={12}>
                                    <Typography align={"center"}
                                                variant="h3"
                                                component={"h3"}
                                                sx={{display: {md: "none"}}}>
                                        {burger.name}
                                    </Typography>
                                    <Typography
                                        align={"center"}
                                        variant="h2"
                                        component={"h3"}
                                        sx={{display: {xs: "none", md: "block", xl: "none"}}}>
                                        {burger.name}
                                    </Typography>
                                    <Typography
                                        align={"center"}
                                        variant="h1"
                                        component={"h3"}
                                        sx={{display: {xs: "none", md: "none", xl: "block"}}}>
                                        {burger.name}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} md={4} order={{xs: 0, md: order}}>
                                    <Typography align={"center"} sx={{display: {xs: "none", md: "block"}}}>
                                        <img alt={burger.name} src={burger.imageUrl} width={"100%"}/>
                                    </Typography>
                                    <Typography align={"center"} sx={{display: {xs: "block", md: "none"}}}>
                                        <img alt={burger.name} src={burger.imageUrl} width={"50%"}/>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} md={8}>

                                    <Typography align={"center"} variant={"h4"} padding={3}>
                                        {burger.description}
                                    </Typography>

                                    <Typography align={"center"} variant={"h5"}>
                                        Only ${burger.price.toFixed(2)}
                                    </Typography>

                                    <Typography align={"center"} margin={3}>
                                        <Button
                                            variant={"contained"}
                                            size={"large"}
                                            onClick={() => handleAddToCart(burger)}
                                        >
                                            Add to cart
                                        </Button>
                                    </Typography>

                                </Grid>

                            </Grid>
                        </Container>
                    </Box>
                );
            })}
            <Container>
                <Typography align={"center"} variant={"h4"} mt={4}>Looking for something else? 👀</Typography>
                <Typography align={"center"} variant={"h5"}>Check our menu for our delicious options.</Typography>
            </Container>
            <Stack
                sx={{pt: 4}}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Button component={Link} to={"/menu"} size="large" startIcon={<RestaurantMenuIcon/>} color="primary"
                        variant="contained" sx={{padding: 3}}>Check our menu</Button>
            </Stack>
        </Box>
    );
};

export default FeaturedHamburgers;
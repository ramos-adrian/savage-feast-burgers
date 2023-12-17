import {Link} from "react-router-dom";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import heroCover from '../assets/hero_cover.jpg';
import logo2 from '../assets/logo2.png';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroCover})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                pb: 6,
                position: 'relative',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h1"
                    align="center"
                    textTransform="uppercase"
                    fontWeight="500"
                >
                    Savage Feast
                </Typography>
                <Typography align="center">
                    <img alt="Savage Beast logo" src={logo2} width={"200em"}/>
                </Typography>
                <Typography variant="h4" align="center" color="text.secondary" paragraph>
                    Handcrafted hamburgers to enjoy your inner beast!
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph display={{xs: "none", md: "block"}}>
                    Each bite is a journey of flavors, a feast for your senses made of Carefully selected ingredients to
                    create the perfect burger.
                </Typography>
                <Stack
                    sx={{pt: 4}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button component={Link} to={"/menu"} size="large" startIcon={<RestaurantMenuIcon/>} color="primary"
                            variant="outlined" sx={{padding: 3}}>Check our menu</Button>
                </Stack>
            </Container>
        </Box>
    )
        ;
    // return (<div>
    //     <div id="Hero">
    //         <h1>Savage Feast</h1>
    //         <h2>Enjoy your inner beast!</h2>
    //         <Link to="/menu">View menu</Link><br />
    //     </div>
    // </div>);
};

export default Hero;
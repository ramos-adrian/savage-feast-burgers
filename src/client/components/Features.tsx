import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AppleIcon from '@mui/icons-material/Apple';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
const Features: React.FC = () => {
    return (
        <Container>
            <Typography variant={"h3"} align={"center"} pt={"1em"}>Why to choose us</Typography>
            <Grid container spacing={8} pt={"2em"}>
                <Grid item xs={12} md={4}>
                    <Typography align={"center"}>
                        <LunchDiningIcon fontSize={"large"}/>
                    </Typography>
                    <Typography align={"center"} variant={"h5"}>Handcrafted Burgers</Typography>
                    <Typography align={"justify"} paragraph>Our burgers are handcrafted by our skilled chefs. Each burger
                        is carefully made to ensure the perfect balance of flavors.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography align={"center"}>
                        <AppleIcon fontSize={"large"}/>
                    </Typography>
                    <Typography align={"center"} variant={"h5"}>Fresh Ingredients</Typography>
                    <Typography align={"justify"} paragraph>We use only the freshest ingredients in our burgers. From
                        crisp lettuce to ripe tomatoes, each
                        ingredient is carefully selected to ensure the best taste.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography align={"center"}>
                        <ElectricBoltIcon fontSize={"large"}/>
                    </Typography>
                    <Typography align={"center"} variant={"h5"}>Quick Order Service</Typography>
                    <Typography align={"justify"} paragraph>Don't have time to wait? No problem. Our quick order
                        service ensures that you get your food quickly. Spend less time waiting and more time enjoying
                        with your friends.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Features;
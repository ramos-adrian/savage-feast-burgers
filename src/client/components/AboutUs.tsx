import {Box, Container, Typography} from "@mui/material";
import img1 from "../assets/about_us_1.jpg";
import img2 from "../assets/about_us_2.jpg";
import img3 from "../assets/about_us_3.jpg";

const AboutUs = () => {
    return (
        <Container>
            <Box sx={{marginLeft: {xs: 0, sm: 15}, marginRight: {xs: 0, sm: 15}}}>
                <Typography variant={"h2"} component={"h1"} align={"center"}>About Us</Typography>
                <Typography variant={"h3"} component={"h2"} align={"center"}> The Wild Culinary Journey Begins
                    Here!</Typography>
                <Typography variant={"h5"} component={"div"} mb={1} align={"center"}>
                    Welcome to Savage Feast, where passion for burgers meets the untamed spirit of culinary adventure.
                    Our
                    story is not just about burgers; it's about unlocking the primal joy of savoring every bite,
                    exploring
                    flavors as bold as the wilderness.
                </Typography>

                <Typography variant={"h4"} component={"div"} align={"center"} mt={2}>
                    Our Culinary Quest
                </Typography>
                <Typography paragraph component={"div"} align={"center"}>
                    In the heart of Savage Feast, our chefs are pioneers, crafting burgers that transcend the ordinary.
                    Each
                    creation is a wild symphony of flavors, a gastronomic journey that awakens your taste buds and lets
                    you
                    embrace your inner beast's appetite.
                </Typography>

                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img3})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        pb: 6,
                        position: 'relative',
                        width: '100%',
                        height: '20rem',
                        alignItems: 'center',
                    }}
                />

                <Typography variant={"h4"} component={"div"} align={"center"} mt={2}>
                    Why Savage Feast? Because...
                </Typography>
                <Typography paragraph component={"div"} paddingBottom={5}>
                    <strong>🍔 We Create Legends:</strong> Our burgers aren't just meals; they're legendary tales told
                    through flavors that
                    leave an imprint on your culinary soul.<br/>

                    <strong>🌿 Nature-Inspired Ingenuity:</strong> We draw inspiration from the raw beauty of nature,
                    infusing our creations
                    with the essence of untamed landscapes.<br/>

                    <strong>🔥 Bold. Adventurous. Unforgettable:</strong> Prepare your palate for an expedition into
                    uncharted gastronomic
                    territories, where every bite is an adventure.
                </Typography>

                <Typography variant={"h4"} component={"div"} align={"center"}>
                    Our Team: Culinary Mavericks and Burger Artisans
                </Typography>
                <Typography paragraph component={"div"} paddingBottom={5}>
                    Meet the brilliant minds behind Savage Feast — a team of culinary mavericks and burger artisans who
                    believe
                    in pushing the boundaries of taste. We're not just chefs; we're storytellers, crafting narratives
                    with
                    every
                    ingredient, technique, and presentation.<br/>
                </Typography>

                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img2})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        pb: 6,
                        position: 'relative',
                        width: '100%',
                        height: '20rem',
                        alignItems: 'center',
                    }}
                />

                <Typography variant={"h4"} component={"div"} align={"center"}>
                    Join the Feast
                </Typography>
                <Typography paragraph component={"div"} paddingBottom={5}>
                    Savage Feast isn't just a place to eat; it's a community of flavor enthusiasts, daring taste
                    explorers,
                    and
                    those who appreciate the extraordinary in the everyday. Whether you're a seasoned foodie or a
                    curious
                    wanderer of taste, there's a place for you at our table.
                </Typography>

                <Typography variant={"h4"} component={"div"} align={"center"}>
                    Embark on the Savage Feast Experience
                </Typography>
                <Typography paragraph component={"div"} paddingBottom={5}>
                    Come, embark on a culinary adventure with us. Join the feast, share stories, and let the flavors
                    ignite
                    your
                    senses. Savage Feast — where every meal is a celebration of the wild, and every bite tells a tale of
                    untamed
                    taste.
                </Typography>

                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        pb: 6,
                        position: 'relative',
                        width: '100%',
                        height: '20rem',
                        alignItems: 'center',
                    }}
                />

                <Typography marginTop={3} variant={"h3"} component={"div"} align={"center"}>
                    Indulge. Roar. Savor.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;
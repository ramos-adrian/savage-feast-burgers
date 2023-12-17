import React from 'react';
import {Avatar, Box, Container, Divider, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

interface Testimonial {
    name: string;
    comment: string;
    profilePicture: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'John Doe',
        comment: 'The burgers here are the best I have ever tasted. Highly recommended!',
        profilePicture: 'https://i.imgur.com/IvAJjqN.png'
    },
    {
        name: 'Jane Smith',
        comment: 'I love the variety of burgers available. The ingredients are always fresh and the service is excellent.',
        profilePicture: 'https://i.imgur.com/hpsbgiJ.jpg'
    },
    {
        name: 'Jane Johnson',
        comment: 'My friends and I come here often. The burgers are fantastic and the atmosphere is great for hanging out.',
        profilePicture: 'https://i.imgur.com/tMZxHxf.png'
    },
];

const Testimonials: React.FC = () => {
    return (
        <Container>
            <Typography pb={2} pt={8} variant={"h3"}>What our clients have to say</Typography>
            <Divider/>
            {testimonials.map((testimonial, index) => {
                    return (
                        <Box key={testimonial.name}>
                            <Box key={index} display={"flex"} padding={2}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={testimonial.profilePicture}
                                    sx={{width: 56, height: 56}}
                                />
                                <Box paddingLeft={3} display={"block"}>
                                    <Typography display="flex" variant={"h5"}>{testimonial.name} (5 <StarIcon sx={{color: "gold", paddingLeft: "3px", paddingBottom: "4px"}} fontSize={"large"}/>)</Typography>
                                    <Typography variant={"h6"}>"{testimonial.comment}"</Typography>
                                </Box>
                            </Box>
                            <Divider/>
                        </Box>
                    );
                }
            )}
        </Container>
    )
        ;
};

export default Testimonials;
import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

interface Props {
}

const Footer: React.FC<Props> = () => {
    return (
        <Box
            component={"footer"}
            sx={{
                backgroundColor: '#212121',
            }}
        >
            <Container>
                <Grid container pt={3} mt={5} justifyContent={"space-around"}>

                    <Grid item xs={12} md={6}>
                        <Typography paddingBottom={2} variant={"h5"}>Follow Us</Typography>
                        <Typography
                            paragraph
                            display={"flex"}
                            gap={1}
                            component={"a"}
                            href={"#"}
                            sx={{
                                textDecoration: "none",
                                color: "inherit"
                            }}>
                            <FontAwesomeIcon icon={faFacebook}/>
                            Facebook
                        </Typography>
                        <Typography
                            paragraph
                            display={"flex"}
                            gap={1}
                            component={"a"}
                            href={"#"}
                            sx={{
                                textDecoration: "none",
                                color: "inherit"
                            }}>
                            <FontAwesomeIcon icon={faInstagram}/>
                            Instagram
                        </Typography>
                        <Typography
                            paragraph
                            display={"flex"}
                            gap={1}
                            component={"a"}
                            href={"#"}
                            sx={{
                                textDecoration: "none",
                                color: "inherit"
                            }}>
                            <FontAwesomeIcon icon={faTwitter}/>
                            Twitter
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography paddingBottom={2} variant={"h5"}>Contact Us</Typography>
                        <Typography paragraph>Email: info@savageburger.com</Typography>
                        <Typography paragraph>Phone: (123) 456-7890</Typography>
                    </Grid>
                </Grid>
                <Typography mt={3} pb={2} paragraph align={"center"}>
                    © 2023 Savage Feast. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
import {useSelector} from 'react-redux';
import {RootState, CartItem as CartItemType, Hamburger} from '../types';
import {Link} from 'react-router-dom';
import {CartItem} from './CartItem';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {
    Backdrop,
    Box,
    Button, CircularProgress,
    Container,
    Divider,
    Grid,
    Typography
} from "@mui/material";
import {useState} from "react";
import CheckoutDialog from "./checkout/CheckoutDialog.tsx";

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const hamburgers: Hamburger[] = useSelector((state: RootState) => state.hamburgers).hamburgers;
    const [openCheckout, setOpenCheckout] = useState(false);
    const [openBackdrop, setOpenBackdrop] = useState(false);

    const handleOpenCheckout = () => {
        setOpenCheckout(true);
    };

    const handleClose = () => {
        setOpenCheckout(false);
    };

    const handleOpenBackdrop = () => {
        setOpenBackdrop(true);
    };

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    if (!cartItems || cartItems.length === 0) {
        return <Container>
            <Typography variant={"h3"} component={"h1"} pt={1}>Your Order</Typography>
            <Typography align={"center"} variant={"h3"} component={"div"}>
                You have not ordered yet!
            </Typography>
            <Typography align={"center"} variant={"h1"} component={"div"}>
                <SentimentVeryDissatisfiedIcon fontSize={"inherit"}/>
            </Typography>
            <Typography align={"center"} variant={"h4"} component={"div"}>
                Check our <Button component={Link} size="large" variant={"contained"} to="/menu">menu</Button> and order
                your favorite food!
            </Typography>
        </Container>;
    }
    ;

    return (
        <Box>
            <Container>
                <Typography variant={"h3"} component={"h1"} pt={1}>Your Order</Typography>

                <Grid container justifyContent={"space-evenly"} gap={4} pt={4} pb={4}>
                    {cartItems.map((item: CartItemType) => <CartItem key={item.id} item={item}/>)}
                </Grid>

                <Divider/>

                <Typography variant={"h6"} component={"div"}>
                    <p>Total food price: ${cartItems.reduce(
                        (accumulator, item) => {
                            const hamburger = hamburgers.find((hamburger) => hamburger.id === item.id);
                            return accumulator + (hamburger ? hamburger.price * item.quantity : 0);
                        }
                        , 0).toFixed(2)}
                    </p>
                </Typography>
                <Button sx={{marginBottom: 3}} variant={"contained"} onClick={handleOpenCheckout}>Checkout</Button>

                <Divider/>

                <Typography align={"center"} mb={2} variant={"h4"} mt={4}>Looking for something else? 👀</Typography>
                <Typography align={"center"} variant={"h5"} component={"div"}>Check our <Button component={Link}
                                                                                                variant={"outlined"}
                                                                                                to="/menu">menu</Button> and
                    order
                    more food!</Typography>
            </Container>

            <CheckoutDialog
                open={openCheckout}
                onClose={handleClose}
                openBackdrop={handleOpenBackdrop}
                closeBackdrop={handleCloseBackdrop}
            />

            <Backdrop
                sx={{color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={openBackdrop}
            >
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Typography align={"center"} variant={"h3"}>Loading</Typography>
                    <CircularProgress color="inherit"/>
                </Box>
            </Backdrop>
        </Box>
    );
};

export default Cart;
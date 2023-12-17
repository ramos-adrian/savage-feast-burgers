import {Hamburger, RootState} from "../types.ts";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../reducers/Cart.ts";
import {Button, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import {useNavigate} from "react-router-dom";

interface Props {
}

const Menu: React.FC<Props> = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const hamburgers = useSelector((state: RootState) => state.hamburgers).hamburgers;


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
        <Container>
            <SnackbarProvider />
            <Grid container justifyContent={"space-evenly"} gap={4} pt={4}>
                {hamburgers.map((hamburger) => (
                    <Grid item key={hamburger.id}>
                        <Card
                            variant={"outlined"}
                            sx={{maxWidth: "20rem", minWidth: "20rem", minHeight: "30rem"}}>
                            <CardMedia
                                sx={{height: 200}}
                                image={hamburger.imageUrl}
                                title={hamburger.name}
                            />
                            <CardContent>
                                <Typography variant={"h4"} component={"div"} align={"center"}>
                                    {hamburger.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {hamburger.description}
                                </Typography>
                                <Typography align={"center"} padding={".7em"}>Price: ${hamburger.price}</Typography>
                                <Typography align={"center"} padding={".7em"}>
                                    <Button variant="contained" onClick={() => handleAddToCart(hamburger)}>Add to
                                        cart</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Menu;
import {useDispatch, useSelector} from 'react-redux';
import {Hamburger, RootState, CartItem as CartItemType} from '../types';
import {removeFromCart, updateQuantity} from '../reducers/Cart';
import {Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const CartItem = ({item}: { item: CartItemType; }) => {
    const dispatch = useDispatch();
    const hamburgers: Hamburger[] = useSelector((state: RootState) => state.hamburgers).hamburgers;

    const hamburger = hamburgers.find((hamburger) => hamburger.id === item.id);

    const handleIncrementItemQuantity = () => {
        if (item.quantity >= 99) return;
        dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}));
    };

    const handleDecreaseItemQuantity = () => {
        if (item.quantity <= 1) return;
        dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}));
    };

    if (!hamburger) {
        return null;
    }

    return (
        <Grid item>
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
                    <Box alignItems={"center"}>
                        <Typography align={"center"} mt={1}>
                            Quantity: {item.quantity}

                            <IconButton sx={{marginLeft: 1}} color={"success"}
                                        onClick={handleIncrementItemQuantity}>
                                <AddIcon/>
                            </IconButton>

                            <IconButton color={"error"} onClick={handleDecreaseItemQuantity}>
                                <RemoveIcon/>
                            </IconButton>

                        </Typography>
                    </Box>
                    <Typography align={"center"} padding={".7em"}>Price:
                        ${(hamburger.price * item.quantity).toFixed(2)}</Typography>
                    <Typography align={"center"} padding={".7em"}>
                        <Button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            size={"small"}
                            variant="text"
                            startIcon={<DeleteForeverIcon/>}
                            color="error"
                        >
                            Remove
                        </Button>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

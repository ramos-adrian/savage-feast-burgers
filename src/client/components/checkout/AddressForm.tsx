import { Box, Button, DialogActions, DialogContent, TextField } from "@mui/material";
import React from "react";
import { Order, NewOrder, RootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import OrdersService from "../../services/Orders";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../reducers/Cart";

interface AddressFromProps {
    onClose: () => void,
    openBackdrop: () => void,
    closeBackdrop: () => void,
}

const AddressForm = ({ onClose, openBackdrop, closeBackdrop }: AddressFromProps) => {

    const dispatch = useDispatch();

    const [fullName, setFullName] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [departmentNumber, setDepartmentNumber] = React.useState<string>("");
    const [phoneNumber, setPhoneNumber] = React.useState<string>("");

    const navigate = useNavigate();

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onClose();
        openBackdrop();

        const newOrder: NewOrder = {
            deliveryDetails: {
                name: fullName,
                address: address,
                deptNumber: departmentNumber,
                phone: phoneNumber
            },
            items: cartItems
        };

        OrdersService.newOrder(newOrder).then((order: Order) => {
            const orderId = order.id;
            navigate("/order/" + orderId);
            onClose();
            setFullName("");
            setAddress("");
            setDepartmentNumber("");
            setPhoneNumber("");
            dispatch(clearCart());
            closeBackdrop();
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <DialogContent sx={{ marginTop: -3, paddingTop: 0 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="What's your name?"
                        fullWidth
                        variant="standard"
                        required
                        onChange={(event) => setFullName(event.target.value)}
                        value={fullName}
                    />
                    <Box sx={{ display: "flex" }}>
                        <TextField
                            margin="dense"
                            id="address"
                            label="Your address"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(event) => setAddress(event.target.value)}
                            value={address}
                        />
                        <TextField
                            margin="dense"
                            id="dpmentNumber"
                            label="Department # (Optional)"
                            fullWidth
                            variant="standard"
                            sx={{ ml: 5 }}
                            required={false}
                            onChange={(event) => setDepartmentNumber(event.target.value)}
                            value={departmentNumber}
                        />
                    </Box>
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Phone Number"
                        fullWidth
                        variant="standard"
                        required
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        value={phoneNumber}
                    />
                </Box>
            </DialogContent>

            <DialogActions>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="error"
                        sx={{ mr: 1 }}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                    >
                        confirm
                    </Button>
                </Box>
            </DialogActions>
        </Box>
    );
};

export default AddressForm;
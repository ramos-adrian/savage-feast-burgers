import {
    Dialog,
    DialogTitle
} from "@mui/material";
import AddressForm from "./AddressForm.tsx";

interface CheckoutDialogProps {
    open: boolean,
    onClose: () => void,
    openBackdrop: () => void,
    closeBackdrop: () => void
}

const CheckoutDialog = ({ open, onClose, openBackdrop, closeBackdrop }: CheckoutDialogProps) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Checkout</DialogTitle>
            <AddressForm onClose={onClose} openBackdrop={openBackdrop} closeBackdrop={closeBackdrop}/>
        </Dialog>
    );
};

export default CheckoutDialog;
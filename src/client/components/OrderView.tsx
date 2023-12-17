import {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import OrdersService from '../services/Orders';
import {Order, OrderStatus, RootState} from '../types';
import {useSelector} from "react-redux";
import {
    Alert,
    Backdrop,
    Box,
    CircularProgress,
    Container,
    Paper, Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Wallet} from "@mercadopago/sdk-react";

const PaymentForm = ({orderPreferenceId}: {orderPreferenceId: string}) => {

    return (
        <Box>
            <Wallet initialization={{ preferenceId: orderPreferenceId}} />
        </Box>
    );
};

const OrderStatusInfo = ({orderStatus}: { orderStatus: OrderStatus }) => {
    let alertSeverity: 'success' | 'info' | 'warning' | 'error' = "warning";
    let alertMessage: string = "Unknown";
    switch (orderStatus) {
        case 'pending':
            alertSeverity = "warning";
            alertMessage = "Your order is pending for confirmation. Please select a payment method below to continue.";
            break;
        case 'confirmed':
            alertSeverity = "info";
            alertMessage = "Your order has been confirmed and is being prepared.";
            break;
        case 'delivered':
            alertSeverity = "success";
            alertMessage = "Your order has been delivered. Thank you for your purchase!";
            break;
        default: {
            const _exhaustiveCheck: never = orderStatus;
            console.log(`Unhandled order status: ${String(_exhaustiveCheck)}`);
            break;
        }
    }

    return (
        <Box display={"flex"} flexDirection={"column"} mt={2}>
            <Typography variant={"h6"}>Order Status: </Typography>
            <Alert severity={alertSeverity}>{alertMessage}</Alert>
        </Box>
    );
};

const OrderView = () => {
    const {id} = useParams<{ id: string }>();
    const [order, setOrder] = useState<Order | null>(null);
    const navigate = useNavigate();
    const hamburgers = useSelector((state: RootState) => state.hamburgers).hamburgers;

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const payment = queryParams.get('payment');
    const paymentSignature = queryParams.get('paymentSignature');

    console.log(`Payment status: ${payment}`);
    console.log(`Payment signature: ${paymentSignature}`);

    useEffect(() => {
        if (id === undefined) {
            navigate('/');
            return;
        }

        OrdersService.getOrder(id)
            .then((order) => {
                setOrder(order);
            })
            .catch((error) => {
                console.error('Failed to fetch order:', error);
            });
    }, [navigate, id]);

    if (!order) {
        return <Backdrop
            sx={{color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
        >
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                <Typography align={"center"} variant={"h3"}>Loading</Typography>
                <CircularProgress color="inherit"/>
            </Box>
        </Backdrop>;
    }

    if (order && order.status === 'pending' && payment === 'success' && paymentSignature) {
        OrdersService.confirmOrder(order.id, paymentSignature)
            .then((order) => {
                setOrder(order);
            })
            .catch((error) => {
                console.error('Failed to confirm order:', error);
            });
    }

    return (
        <Box>
            <Container>
                <Typography pt={2} mb={2} component={"h1"} variant={"h4"}>Order
                    #{order.refNumber} ({order.date.toDateString()})</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell align="left">Unit price</TableCell>
                                <TableCell align="left">Amount</TableCell>
                                <TableCell align="left">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.items.map((orderItem) => {
                                const itemInfo = hamburgers.find(hamburger => hamburger.id === orderItem.id);
                                if (!itemInfo) {
                                    return null;
                                }
                                return (
                                    <TableRow
                                        key={orderItem.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {itemInfo.name}
                                        </TableCell>
                                        <TableCell align="left">${itemInfo.price}</TableCell>
                                        <TableCell align="left">{orderItem.quantity}</TableCell>
                                        <TableCell
                                            align="left">${(itemInfo.price * orderItem.quantity).toFixed(2)}</TableCell>
                                    </TableRow>
                                );
                            })}
                            <TableRow
                                key={'order-total'}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    TOTAL
                                </TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell
                                    align="left">${(order.total).toFixed(2)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <OrderStatusInfo orderStatus={order.status}/>
                {order.status === 'pending' ? <PaymentForm orderPreferenceId={order.mpPreferenceId} /> : null}
            </Container>
        </Box>
    );
};

export default OrderView;
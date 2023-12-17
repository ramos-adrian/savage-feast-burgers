import {Link} from "react-router-dom";
import {useState} from "react";

import Logo from '../assets/logo.svg';

import {
    AppBar,
    Box,
    Button,
    Divider, Drawer,
    IconButton,
    List,
    ListItemButton, ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        {name: "Home", path: "/", icon: <HomeIcon/>},
        {name: "Menu", path: "/menu", icon: <RestaurantMenuIcon/>},
        {name: "My Order", path: "/cart", icon: <ShoppingCartIcon/>},
        {name: "About us", path: "/about", icon: <GroupsIcon/>},
    ];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window.document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant={"h6"} component={"h2"} sx={{my: 2}}>
                Savage Feast!
            </Typography>
            <img alt="Savage Beast logo" src={Logo} height={"10%"}/>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItemButton key={item.name} component={Link} to={item.path}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{display: "flex"}}>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color={"inherit"}
                            aria-label="menu"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: "none"}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            component={Link}
                            sx={{
                                flexGrow: 1,
                                display: {xs: 'none', sm: 'block'},
                                textDecoration: "none",
                                color: "inherit",
                                fontWeight: 700
                            }}
                            to={"/"}
                        >
                            SAVAGE FEAST
                        </Typography>
                        <Typography
                            variant="h6"
                            component={Link}
                            sx={{
                                flexGrow: 1,
                                display: {xs: 'block', sm: 'none'},
                                textDecoration: "none",
                                color: "inherit",
                                fontWeight: 700,
                            }}
                            to={"/"}
                            align={"center"}
                        >
                            SAVAGE FEAST
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            {navItems.map((item) => (
                                <Button component={Link} to={item.path} key={item.name} sx={{color: '#fff'}}>
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </div>

    );
};

export default Navbar;
import {
  AppBar,
  Box,
  Container,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from 'react'

const links = ["about", "skills", "projects"];
export const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
        <AppBar position="static" id="navbar">
            <Container maxWidth="xl">
            <Toolbar disableGutters >
                <Typography
                sx={{ flexGrow: 1 }}
                variant="h6"
                color="inherit"
                noWrap
                >
                David Schneiter
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                {links.map((link) => (
                <Box
                    marginRight={10}
                    sx={{
                    display: { xs: "none", sm: "none", md: "flex" }, }}
                    key={link}
                >
                    <Button key={link} href={`#${link}`}>
                    <Typography variant="h6" color="inherit" noWrap>
                        {link}
                    </Typography>
                    </Button>
                </Box>
                ))}
                <Box sx={{ display: { sm: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                    display: { xs: "block", md: "none" },
                    }}
                >
                    {links.map((link) => (
                    <MenuItem sx={{backgroundColor: "#191c32"}} key={link} onClick={handleCloseNavMenu}>
                        <Button key={link} href={`#${link}`}>
                        <Typography variant="h6" color="inherit" noWrap>
                            {link}
                        </Typography>
                        </Button>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
            </Toolbar>
            </Container>
            </AppBar>
  )
}

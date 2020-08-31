import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import WorkIcon from "@material-ui/icons/Work";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleIcon from "@material-ui/icons/People";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();

  if ((location.pathname === "/")) {
    return <></>;
  } else {
    return (
      <div className="header">
        <NavLink to="/">
          <img src="/logo.png" id="logo-small" alt="jackson prowell logo" />
        </NavLink>
        <nav className="float-right" id="large-nav">
          <NavLink
            to="/resume"
            className="nav-link border-right"
            activeClassName="active-link"
          >
            resume
          </NavLink>
          <NavLink
            to="/music"
            className="nav-link border-right"
            activeClassName="active-link"
          >
            music
          </NavLink>
          <NavLink
            to="/journal"
            className="nav-link border-right"
            activeClassName="active-link"
          >
            journal
          </NavLink>
          <NavLink
            to="/connect"
            className="nav-link"
            activeClassName="active-link"
          >
            connect
          </NavLink>
        </nav>
        <nav className="float-right" id="small-nav">
          <IconButton
            aria-label="see navigation menu"
            aria-controls="phone-menu"
            aria-haspopup="true"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            id="phone-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <NavLink onClick={handleClose} to="/resume" className="nav-link">
              <MenuItem>
                <WorkIcon className="menu-icon sky-blue" /> resume
              </MenuItem>
            </NavLink>
            <NavLink onClick={handleClose} to="/music" className="nav-link">
              <MenuItem>
                <MusicNoteIcon className="menu-icon sky-blue" /> music
              </MenuItem>
            </NavLink>
            <NavLink onClick={handleClose} to="/journal" className="nav-link">
              <MenuItem>
                <DescriptionIcon className="menu-icon sky-blue" /> journal
              </MenuItem>
            </NavLink>
            <NavLink onClick={handleClose} to="/connect" className="nav-link">
              <MenuItem>
                <PeopleIcon className="menu-icon red" /> connect
              </MenuItem>
            </NavLink>
          </Menu>
        </nav>
      </div>
    );
  }
};

export default Header;

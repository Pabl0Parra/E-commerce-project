import styled from "styled-components";
import PropTypes from "prop-types";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";

const Toolbar = ({ className, drawerHandler }) => (
  <header className={className}>
    <nav className="toolbar_nav">
      <div className="toggle_button">
        <DrawerToggleButton click={drawerHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">En Ascuas Forja</a>
      </div>
      <div className="spacer" />
      <div className="toolbar">
        <ul>
          <li>
            <NavLink to="/">About us</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Toolbar.propTypes = {
  className: PropTypes.string,
};

const StyledToolbar = styled(Toolbar)`
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  height: 70px;
  background: black;
  opacity:0.8;
  
  
  .toolbar_nav{
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
  }

  .toolbar_logo{
    margin-left: 1rem;

    a{
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    }
   }
   
  .spacer{
    flex: 1;
  }

  .toolbar ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .toolbar li{
    padding: 0 0.5rem;
  }

  .toolbar a{
    color: white;
    text-decoration: none;

    &:hover, &:active {
    color: #fa923f;
    }
  }

  @media (max-width: 768px)  {
    .toolbar {
      display: none;
    }
  }   

  @media (min-width: 769px) {
    .toggle_button {
      display: none;
    }
    .toolbar_logo{
    margin-left: 0;
  }
`;

StyledToolbar.displayName = "Toolbar";

export default StyledToolbar;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import GlobalStyle from "../../theme/GlobalStyle";

const Header = ({ className }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const drawerOpenHandler = () => setDrawerOpen(!drawerOpen);

  const backdropClickHandler = () => setDrawerOpen(false);

  return (
    <div className={className}>
      <GlobalStyle />
      <Toolbar drawerHandler={drawerOpenHandler} />
      <SideDrawer show={drawerOpen} />
      {drawerOpen && <Backdrop click={backdropClickHandler} />}
      <main className="content"></main>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

const StyledHeader = styled(Header)`
  .content {
    margin-top: 64px;
  }
`;
StyledHeader.displayName = "Header";

export default StyledHeader;

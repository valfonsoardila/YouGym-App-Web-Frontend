import React from "react";
import Header from "../header/Header";
import MainDash from "../container/mainDash/MainDash";
import RightSide from "../container/rigtSide/RightSide";
import Sidebar from "../sidebar/Sidebar";
import { Container, AppGlass } from "./LayoutStyles.jsx";

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <AppGlass>
          <Sidebar />
          <MainDash />
          <RightSide />
        </AppGlass>
      </Container>
    );
  }
}
export default Layout;
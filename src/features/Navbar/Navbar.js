import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import SignedOutMenu from "./Menu/signedOutMenu";
import SignedMenu from "./Menu/signedMenu";

class Navbar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img className="logo" src="assets/people.png" alt="logo" />
            Meet-abit
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>

          <SignedMenu />
          <SignedOutMenu />
        </Container>
      </Menu>
    );
  }
}
export default Navbar;
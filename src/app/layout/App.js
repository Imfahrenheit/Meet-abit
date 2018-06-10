import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import Homepage from "../../features/homePage";
import UserDetails from "../../features/event/userDashbord/users/userDetailedView";
import EventDetailpage from "../../features/event/eventDetail/eventDetailPage";
import PeopleDashboard from "../../features/event/userDashbord/users/peopleDashboard";
import SettingDashboard from "../../features/event/userDashbord/settings/settingDashboard";
import Navbar from "../../features/Navbar/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Navbar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/event:id" component={EventDetailpage} />
                <Route path="/profile:id" component={UserDetails} />
                <Route path="/setting" component={SettingDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;

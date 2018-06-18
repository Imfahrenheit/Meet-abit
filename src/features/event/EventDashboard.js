import React, { Component, Fragment } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../event/EventList/EventList";
import EventForm from "../event/EventForm/EventForm";
import {createEvent, deleteEvent, updateEvent} from './eventActionCreators'
import {connect } from 'react-redux'


const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};
const mapStateToProps = (state)=>({
events:state.events

})
class EventDashbord extends Component {
  state = {
    
    isOpen: false,
    selectedEvent: null
  };
  formOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  getEvents = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent)
    this.setState({
    
      isOpen: false
    });
  };
  handleUpdate = updatedEvent => {
    this.props.updateEvent(updatedEvent)
   
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleEditEvent = updatedEvent => () => {
    this.setState({
      selectedEvent: updatedEvent,
      isOpen: true
    });
  };
  handleDelete=(eventId)=>()=>{
   this.props.deleteEvent(eventId)
  }

  render() {
    const {selectedEvent } = this.state;
    const {events} = this.props;

    return (
      <Fragment>
        <Grid>
          <Grid.Column width={10}>
            <EventList deleteItem={this.handleDelete} eventEdit={this.handleEditEvent} events={events} />
          </Grid.Column>

          <Grid.Column width={6}>
            <Button
              onClick={this.formOpen}
              positive
              content={this.state.isOpen ? "Hide Form" : "Add Event"}
            />
            {this.state.isOpen && (
              <EventForm
                updateEvent={this.handleUpdate}
                selectedEvent={selectedEvent}
                getEvents={this.getEvents}
              />
            )}
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps, actions)(EventDashbord);

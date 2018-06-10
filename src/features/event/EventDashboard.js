import React, { Component, Fragment } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../event/EventList/EventList";
import EventForm from "../event/EventForm/EventForm";

const AllEvents = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashbord extends Component {
  state = {
    events: AllEvents,
    isOpen: false,
    selectedEvent: null
  };
  formOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  getEvents = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const events = [...this.state.events, newEvent];
    this.setState({
      events,
      isOpen: false
    });
  };
  handleUpdate = updatedEvent => {
    let events = [...this.state.events];

    events = events.map(event => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      } else {
        return event;
      }
    });
    this.setState({
      events,
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
  handleDelete=(event)=>()=>{
const events = this.state.events.filter((e)=>e.id!==event.id)
this.setState({events})
  }

  render() {
    const { events, selectedEvent } = this.state;

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
export default EventDashbord;

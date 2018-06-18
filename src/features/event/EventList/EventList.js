import React, { Component, Fragment } from "react";
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {

    const { events, eventEdit, deleteItem } = this.props;
   
    return <Fragment>
        <h1> Event List </h1>
        {events.map((event)=>{
        return <EventListItem key={event.id} event={event} eventEdit={eventEdit}  deleteItem={ deleteItem}/>;

        })}
       
        
      </Fragment>;
    
  }
}
export default EventList;

import React, { Component } from 'react';
import { Segment, Form, Button} from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

 class EventForm extends Component {

        state= {
            event: emptyEvent
                        
        }

componentDidMount(){
  if(this.props.selectedEvent){
this.setState({
  event:this.props.selectedEvent
})}
else{
  this.setState({ event: emptyEvent });
}
  }
componentWillReceiveProps(nextProps){

this.setState({
  event: nextProps.selectedEvent ||emptyEvent
});


}

handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.event.id){
      this.props.updateEvent({...this.state.event });
    }else {
    this.props.getEvents({ ...this.state.event });

    }
    
}
onChangeHandler=(e)=>{
 let newEvent={...this.state.event}
    newEvent[e.target.name]=e.target.value
    this.setState({event:newEvent})
}

  render() {
      const {event}=this.state;
    return <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input onChange={this.onChangeHandler} name="title" value={event.title} placeholder="title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input onChange={this.onChangeHandler} name="date" value={event.date} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input onChange={this.onChangeHandler} name="city" value={event.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input onChange={this.onChangeHandler} name="venue" value={event.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input onChange={this.onChangeHandler} name="hostedBy" value={event.hostedBy} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button">Cancel</Button>
        </Form>
      </Segment>;
  }
}
export default EventForm
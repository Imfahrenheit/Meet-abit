import React, { Component } from 'react';
import { Segment,Item, Icon, Button, List } from 'semantic-ui-react';
import EventAttendee from './EventAttendee'

 class EventListItem extends Component {
  render() {

    const { event, eventEdit, deleteItem } = this.props;

    return <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees && event.attendees.map(attendee => {
                return <EventAttendee key={attendee.id} attendee={attendee} />;
              })}
          </List>
        </Segment>
        <Segment clearing>
          <span> {event.description} </span>

          <Button onClick={eventEdit(event)} as="a" color="teal" floated="right" content="View" />
          <Button onClick={deleteItem(event)} as="a" color="red" floated="right" content="Delete" />
        </Segment>
      </Segment.Group>;
  }
}

export default EventListItem; 
import React, { Component } from 'react'
import { List,Image} from 'semantic-ui-react'

 class EventAttendee extends Component {
  render() {
      const {attendee} = this.props
    return (
      <List.Item>
      

         <Image  as="s" size="mini" circular src={attendee.photoURL}/>

      
       
      </List.Item>
    )
  }
}
export default EventAttendee
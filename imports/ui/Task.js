import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');
 
// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.firstName} {this.props.task.lastName} {this.props.task.Rsvp} {this.props.task.DietReq} {this.props.task.Allergy} {this.props.task.Contact} </li>
    );
  }
}
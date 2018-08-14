import React, {Component} from 'react';  

/* Import Components */

import { Form, Field } from 'react-final-form';
import Input from '@material-ui/core/Input';   
import Button from '@material-ui/core/Button'




class AccountsUI extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: ''

      },

    
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render(props) {
    return (
    
      <form 
      className="container"  
     
      >

        <Input   
        name="email"
      
        type="text"
        ref="textInput"
        placeholder="email address"
        /> 
         <br />  
        <Input
        name="password"
        type="text"
        ref="textInput"
        placeholder="password"
        />
        <br />  
        <Button variant="contained" className={props}>
        Submit
        </Button>
      </form>
    );
  }
}

export default AccountsUI;

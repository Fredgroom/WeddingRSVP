import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export default class Login extends Component {
    render(props) {
        return (
            <div>

                <h1> Login </h1>
                <form className="loginUser" >
                    <input
                        name="emailAddress"
                        type="text"
                        ref="textInput"
                        placeholder="email address"

                    />  
                    <br />   
                     <input
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
                <ul>
                    {this.renderRSVP()}
                </ul>
            </div>
                )
            }
        }

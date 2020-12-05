import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarker, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Parser from 'html-react-parser';

import './index.css';


const Body = () => {
    return (
        <div id="body">
            <Header/>
            <Card
                className='section'
                img='./Capture01.png'
                title='About Me'
                description="I'm a developer! My major fields is backend with Python Django. beside i coded Reactjs, Angular...<br/> 
                            I have more than 2 year coding in Python, building system with AWS. <br/>
                            I handled many complicated problems like configure banking system, email system.<br/>"
            />
            <Card 
                className='section bg-grey'
                img='./Capture3.png' 
                title='My Values'
                description="I built backend system for these website: <br/>
                <ul>    
                 <li> <a href='https://park-direct.jp'>Parking System</a> This is a parking system for Japanese customer.<br/> </li>
                 <li> <a href='https://akadon.edu.vn'>Study Online System</a> This is a teaching-studying for Vietnamese customer.<br/> </li>
                 <li> And this website is created for me with reactjs and flask!<br/> </li>
                </ul>"
            />
            <Card 
                className='section'
                img='./Capture2.png' 
                title='My mission' 
                description='I will handle your website stuffs. I will create the best website with your cost <br/> Always here for supporting you!'
            />
            <EmailForm />
        </div>
    )
}


const Header = () => {
    return (
        <div className='header'>
            <span className='header-title'>
                Developer Profile
            </span>
            <br/>
            <span className='header-text'>
                Hello, You are looking at my profile. If you want to know more about me, please continue reading below 🤗🤗🤗...
            </span>
        </div>
    )
}


const Card = (props) => {
    return (
        <div className={props.className} >
            
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt='' className="img-holder"/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    <div>{Parser(props.description)}</div>
                </span>
            </div>
        </div>
    )
}


class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            text: ''
        };
      }

      handleChange = (changeObject) => {
        this.setState(changeObject);
      }

      handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
    
        fetch('https://your-node-server-here.com/api/endpoint', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }
    render() {
        return(
            <div className='contact-container bg-grey'>
                <span className="div-title">Contact me</span>
                <div className='contact-form'>
                    
                    <div id='sect1'>
                        <span>If you are interested in. Contact me and I will get back to you within 24 hours.</span>
                        <span className="icon-inline">
                            <FontAwesomeIcon className="icon-container" icon={faMarker} />
                            Thanh Do Van
                        </span>
                        <span className="icon-inline">
                            <FontAwesomeIcon className="icon-container" icon={faMobile} />
                            +84 394 564 208
                        </span>
                        <span className="icon-inline">
                            <FontAwesomeIcon className="icon-container" icon={faEnvelope} />
                            thanhdovan210184@gmail.com
                        </span>
                    </div>

                    <div id='sect2'>
                        <span>
                            Contact
                        </span>
                        <input 
                            type="text" 
                            placeholder="Your Email Address" 
                            className="input-field form-control" 
                            value={this.state.name} 
                            name="email" 
                            onChange={(e)=>this.handleChange({email: e.target.value})}
                            required
                        />
                        <textarea 
                            name="commment" 
                            id="comment" 
                            cols="30" rows="10" 
                            placeholder="comment"
                            value={this.state.text} 
                            name="text" 
                            onChange={
                                (e)=>this.handleChange(
                                    {text: e.target.value}
                                )
                            }
                        ></textarea>
                        <button 
                            type="submit" 
                            className="contact-btn" 
                            onClick={(e)=>this.handleSubmit(e)}>Send
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));

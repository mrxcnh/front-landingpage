import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Body = () => {
    return (
        <div id="body">
            <Header/>
            <Card
                className='section'
                img='./Capture1.png'
                title='About the Company'
                description={'We are the software company. \nWe have many experienced developers. \nWe handled many complicated problems.'}
            />
            <Card 
                className='section bg-grey'
                img='./Capture3.PNG' 
                title='Our Values'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Our Mission' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
            <ContactContainer/>
        </div>
    )
}


const Header = () => {
    return (
        <div className='header'>
            <span className='header-title'>
                ECorp
            </span>
            <br/>
            <span className='header-text'>
                We specialise in something ...
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
                    <div>{props.description}</div>
                </span>
            </div>
        </div>
    )
}


const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we will get back to you within 24 hours.</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        Thanh Do Van
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                        +84 394 564 208
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                        thanhdovan210184@gmail.com
                    </span>
                </div>
                    
                <div id='sect2'>
                    <span>
                        Contact
                    </span>

                    <input type="text" placeholder="Email Address" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                    <button className="contact-btn">Send</button>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Body/>, document.getElementById('root'));

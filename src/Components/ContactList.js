import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

class ContactList extends Component {
    render() {
        return (
            <div className="contactText">
                <ul className="contactList">
                    <li> <a href="https://github.com/12q1" target="_blank" rel="noopener noreferrer"><GitHubIcon id="icon-github" /> Github</a></li>
                    <li> <a href="https://www.linkedin.com/in/thomasham/" target="_blank" rel="noopener noreferrer"><LinkedInIcon id="icon-linkedin" /> LinkedIn</a></li>
                    <li> <a href="https://drive.google.com/file/d/1OZe-rrePjaPcKYssuNGsY7hQLYqIRMoz/view?usp=sharing" target="_blank" rel="noopener noreferrer"><InsertDriveFileIcon id="icon-resume" /> Resume</a></li>
                    <li> <PhoneIcon id="icon-phone" /> Phone: +31(0) 6-536-23-444</li>
                    <li> <EmailIcon id="icon-email" /> Email: thomasham89@gmail.com</li>
                </ul>
            </div>
        )
    }
}

export default ContactList;
import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

class ContactList extends Component {
    render() {
        return (
            <div className="contactText">
                <ul className="contactList">
                    <li> <a href="https://github.com/12q1"><GitHubIcon id="icon-github" /> Github</a></li>
                    <li> <a href="https://www.linkedin.com/in/thomasham/"><LinkedInIcon id="icon-linkedin" /> LinkedIn</a></li>
                    <li> <PhoneIcon id="icon-phone" /> Phone: +31(0)6-53623444</li>
                    <li> <EmailIcon id="icon-email" /> Email: thomasham89@gmail.com</li>
                </ul>
            </div>
        )
    }
}

export default ContactList;
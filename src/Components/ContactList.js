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
                    <li> <GitHubIcon/> Github</li>
                    <li> <LinkedInIcon/> LinkedIn</li>
                    <li> <PhoneIcon/> Phone: +31(0)6-53623444</li>
                    <li> <EmailIcon/> Email: thomasham89@gmail.com</li>
                </ul>
            </div>
        )
    }
}

export default ContactList;
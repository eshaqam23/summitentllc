import React from 'react';

function Contact () {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <div>
                <form>
                    <input className="name" type="text" placeholder="Name" />
                    <input className="email" type="email" placeholder="Email" />
                    <input className="phone" type="number" placeholder="Phone" />
                    <input className="message" type="text" placeholder="Message" />
                    <input className="submit" type="submit" value="Submit" />
                </form>
                <div className="contactInfo">
                    <p><i class="material-icons">mail</i> eshaqm@gmail.com</p>
                </div>
            </div>

        </div>
    );
}

export default Contact;
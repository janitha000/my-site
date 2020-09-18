import React from 'react'
import './Contact.css'
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact = () => {

    const openInNewTab = (url) => {
        console.log(url)
        if (url && url !== '') {
            var win = window.open(url, '_blank');
            win.focus();
        }

    }

    const ContactItem = ({ name, value, Icon, url }) => {
        return (
            <div className="contact__item" onClick={() => openInNewTab(url)}>
                <div className="contact_icon">
                    {Icon}
                </div>
                <h3>{name}</h3>
                <h4>{value}</h4>
            </div>
        )
    }

    return (
        <div className="contact">
            <header className="banner"
                style={{
                    objectFit: "contain",
                    backgroundSize: "cover",
                    backgroundImage: `url('https://www.a-star.edu.sg/images/librariesprovider27/default-album/model-factory/contact-us/contact-us9d7a5f6cc5a34db3b8445ff641dcca46.jpg?sfvrsn=f0454352_0})`,
                    height: '300px'
                }}>
            </header>
            <div className="contact__items">
                <div className="contact__title">
                    <h2>GET IN TOUCH</h2>
                </div>
                <dvi className="contact__boxes">
                    <div className="contact__left">
                        <ContactItem name="Email" value="janitha000@gmail.com" Icon={<EmailIcon style={{ fontSize: 90 }} />} />
                        <ContactItem name="Mobile" value="+65 90694934" Icon={<CallIcon style={{ fontSize: 90 }} />} />
                        <ContactItem name="LinkedIn" Icon={<LinkedInIcon style={{ fontSize: 90 }} />} url="https://www.linkedin.com/in/janithatennakoon/" />
                        <ContactItem name="Facebook" Icon={<FacebookIcon style={{ fontSize: 90 }} />} url="https://www.facebook.com/janitha000/" />
                        <ContactItem name="Instagram" Icon={<InstagramIcon style={{ fontSize: 90 }} />} url="https://www.instagram.com/janitha_t/?hl=en" />
                    </div>
                    <div className="contact__right">

                    </div>
                </dvi>
            </div>

        </div>
    )
}

export default Contact;
import React, {useState} from 'react'
import image from '../images/avatar.png'
import Star from './Star'
const ContactCard = () => {
    const [contact, setContact] = useState({
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 (709) 234-4442',
        email: 'mbiapplegryn@gmail.com',
        isFavorite: true
    })

    function changeState(){
        setContact(prevContact =>({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
  return (
    <div className='contact'>
        <article>
            <img className='img-contact' src={image} alt='' />
            <Star
                isFilled = {contact.isFavorite}
                handleClick = {changeState}
            />
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </article>
    </div>
  )
}

export default ContactCard
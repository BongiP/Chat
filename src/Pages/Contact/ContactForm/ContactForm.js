import React from 'react'
import './ContactForm.css'

import bgImage from '../../../assets/stickystrips.jpg'

const ContactForm = () => {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    get in <span>touch</span>
                </h1>

                <p>If you have any questions, comments, or feedback, we would love to hear from you.</p>

                <img src={bgImage} alt="get in touch" />

                <p>You can reach us by phone, email, or social media. Our friendly and professional staff will be happy to assist you with any inquiries or concerns you may have. 
                   You can also fill out the form in this page and we will get back to you as soon as possible.</p>

                <p>Thank you for choosing us as your trusted partner. We look forward to hearing from you soon.</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type="text" name='name' />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type="text" name='subject' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type="text" name='message' />
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
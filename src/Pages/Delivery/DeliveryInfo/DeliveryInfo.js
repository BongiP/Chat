import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

import './DeliveryInfo.css'

const DeliveryInfo = () => {
  return (
    <div className='section delivery-info'>
        <div className='container'>
            <div className='grid-container'>
                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                            order your <span>meal</span>
                        </h3>
                    </div>

                    <p>You can order your favorite fast food from The Food Hut online or by phone. 
                        We accept cash, credit cards, and mobile money as payment methods. 
                        You can choose to pick up your order from our restaurant or have it delivered to your address. 
                        We deliver within a 10 km radius from our location and charge a flat fee of E20 for delivery. 
                        Our delivery hours are from 11 am to 6 pm, seven days a week</p>
                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                           additional <span>information</span>
                        </h3>
                    </div>

                    <p>Please note that some of our dishes may contain allergens such as gluten, dairy, nuts, eggs, soy, etc. 
                       If you have any dietary restrictions or preferences, please let us know when you place your order. 
                       We will try our best to accommodate your needs. Also, please be aware that our food is prepared in a kitchen that handles meat. 
                       We cannot guarantee that our food is completely free of cross-contamination. 
                       Thank you for your understanding and cooperation.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryInfo
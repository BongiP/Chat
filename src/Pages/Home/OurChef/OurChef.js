import React from 'react'
import './OurChef.css'

const OurChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        our <span>chef</span>
                    </h1>

                    <p className='text-white'>
                    Award winning meals, delivered by an amazing team
                    </p>
                </div>
            </div>
        </div>

        {/* chef info  */}

        <div className='container'>
            <div className='grid-container py-md'>
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Banele <span>Dlamini</span>
                    </h3>

                    <h4>grill chef</h4>

                    <p>Our grill chef makes juicy and tender grilled dishes. He uses local meat, poultry, and sausages. 
                      He can satisfy your appetite and taste buds.
</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Nqobile <span>Dlamini</span>
                    </h3>

                    <h4>Pizza chef</h4>

                    <p>Our pizza chef makes delicious and crispy pizzas. She makes her own dough, sauces, and toppings. 
                      She can customize your pizza as you like.</p>
                </div>



                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Nomcebo <span>Dlamini</span>
                    </h3>

                    <h4>Fry chef</h4>

                    <p>Our fry chef makes crispy and tasty snacks. He uses quality oil, batter, and seasonings. 
                      He can make you crave for more.</p>
                </div>

            </div>




        </div>
    </div>
  )
}

export default OurChef
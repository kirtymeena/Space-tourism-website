import React from 'react'
import ExploreBtn from '../components/ExploreBtn'

const Home = () => {
  return (
    <div className='bg__home container' >
      <div className='flex__container content'>
          <div className='flex__item1'>
          <p className='text-accent ff-sans-normal letter-spacing-3 text-top uppercase'>So, you want to travel to</p>
          <h1 className='text-white ff-serif letter-spacing-1 text-mid uppercase'>Space</h1>
          <p className='text-accent ff-sans-normal letter-spacing-3 text-bottom'>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>

          </div>
          <div className='flex__item2'>
              <ExploreBtn/>
          </div>
      </div>
    </div>
  )
}

export default Home
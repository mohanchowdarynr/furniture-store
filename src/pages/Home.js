import React from 'react'
import { Contact, FeaturedProducts, Hero, Services } from '../components'

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contact />
        </div>
    )
}

export default Home

import React from 'react'
import Navbar from './assets/Components/Navbar'
import PetCareSlider from './assets/Components/PetCareSlider'
import WelcomeSection from './assets/Components/WelcomSection'
import ServicesSection from './assets/Components/ServicesSection'
import AppointmentForm from './assets/AppointmentForm'
import Services from './assets/Services'
import TeamSection from './assets/Components/TeamSection'
import PetCareStats from './PetCareStats'
import DonationSection from './assets/Components/DonationSection'
import FeaturedVideo from './assets/Components/FeaturedVideo'
import Testimonial from './assets/Components/Testimonial'
import EventsSection from './assets/Components/EventsSection'
import Footer from './assets/Components/Footer'


const App = () => {
  return (
    <>
    <Navbar />
    <PetCareSlider />
    <WelcomeSection />
    <ServicesSection />
    <Services />
    <AppointmentForm />
    <TeamSection />
    <PetCareStats />
    <DonationSection />
    <FeaturedVideo />
    <Testimonial />
    <EventsSection />
    <Footer />
    </>
  )
}

export default App
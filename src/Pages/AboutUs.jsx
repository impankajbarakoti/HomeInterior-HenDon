import React from 'react'
import AB1 from './AB1'
import ShowCase from '../components/ShowCase'
import StatsSection from '../components/StatsComponent'
import SmartLivingComponent from '../components/SmartLivingComponent'
import ScheduleVisit from '../components/ScheduleVisit'
import MeetTheTeam from './MeetTheTeam'
import LogoSlider from '../components/LogoSlider'

const AboutUs = () => {
  return (
    <div>
          <AB1 />
          <ShowCase />
          <StatsSection />
          <SmartLivingComponent />
          <ScheduleVisit />
          <MeetTheTeam />
          <LogoSlider/>
    </div>
  )
}

export default AboutUs

import React from 'react'
import WebContainer from '../WebContainer/Index'
import Title from '../Title/Index'
import Circle from './Circle'
import './Circle.css'
import Ambulance from '../../images/Vectors/Ambulance';
import BloodBank from '../../images/Vectors/BloodBank';
import MRI from '../../images/Vectors/MRI'
import HomeCare from '../../images/Vectors/HomeCare';
import TestTube from '../../images/Vectors/TestTube';
import HomeSample from '../../images/Vectors/HomeSample'
import HealthCheckup from '../../images/Vectors/HealthCheckup'

const Index = () => {
    const items = [
        { icon: <Ambulance />, text: '24x7 <br/> Ambulance' },
        { icon: <BloodBank />, text: '24x7<br/> Blood Bank' },
        { icon: <TestTube />, text: 'Lab Testing <br/>& Diagnosis' },
        { icon: <HomeSample />, text: 'Home Sample <br/>Collection' },
        { icon: <MRI />, text: 'Radiology <br/>& Molecular Imaging' },
        { icon: <HomeCare />, text: 'Homecare and<br/> Nursing' },
        { icon: <Ambulance />, text: 'Dietician and<br/> Clinical Nutrition' },
        { icon: <HealthCheckup />, text: 'Health<br/> check-ups' },
      ];
  return (
    <WebContainer _parentClass={'Services'}>
            <Title secondHeading={'SERVICES'}/>
            <Circle items={items}/>
    </WebContainer>
  )
}

export default Index
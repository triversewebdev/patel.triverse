import React from 'react'
import DoctorsData from './components/Doctors/Index'
import Banner01 from './images/doctoer01.webp';
import Banner02 from './images/doctoer02.webp';
import Banner03 from './images/doctoer03.webp';
import Banner04 from './images/doctoer04.webp';

const Doctors = () => {
    const DocterData = [
        {
          imagePath: Banner01,
          imageAlt: 'Dr. Amber Aggrwal',
          title: 'Dr. Amber Aggrwal',
          content: '<p>MBBS, DNB (Obstetrics & Gynaecology)</p> <p>MCh. Reproductive Medicine (IVF), UK</p>'
        },
        {
          imagePath: Banner02,
          imageAlt: 'Dr. Nitish Kohli',
          title: 'Dr. Nitish Kohli',
          content: '<p>MBBS, MS (Orthopedics) Consultant Orthopedics & Joint Replacement Surgeon</p>'
        },
        {
            imagePath: Banner03,
            imageAlt: 'Dr. Shikha Chawla',
            title: 'Dr. Shikha Chawla',
            content: '<p>M.B.B.S. D.N.B (Radiation Oncology). HoD, Dept. of Radiation Oncology Patel Hospital, Jalandhar</p>'
          },
          {
            imagePath: Banner04,
            imageAlt: 'Dr. Nishant Saini',
            title: 'Dr. Nishant Saini',  
            content: '<p>MBBS, MD (GMCH, Chandigarh) Transfusion Medicine Specialist</p>'      
          },
          {
            imagePath: Banner01,
            imageAlt: 'Dr. Amber Aggrwal',
            title: 'Dr. Amber Aggrwal',
            content: '<p>MBBS, DNB (Obstetrics & Gynaecology)</p> <p>MCh. Reproductive Medicine (IVF), UK</p>'
          },
          {
            imagePath: Banner02,
            imageAlt: 'Dr. Nitish Kohli',
            title: 'Dr. Nitish Kohli',
            content: '<p>MBBS, MS (Orthopedics) Consultant Orthopedics & Joint Replacement Surgeon</p>'
          },
          {
              imagePath: Banner03,
              imageAlt: 'Dr. Shikha Chawla',
              title: 'Dr. Shikha Chawla',
              content: '<p>M.B.B.S. D.N.B (Radiation Oncology). HoD, Dept. of Radiation Oncology Patel Hospital, Jalandhar</p>'
            },
            {
              imagePath: Banner04,
              imageAlt: 'Dr. Nishant Saini',
              title: 'Dr. Nishant Saini',  
              content: '<p>MBBS, MD (GMCH, Chandigarh) Transfusion Medicine Specialist</p>'      
            },
               
      ];
  return (
    <>
        <DoctorsData Data={DocterData} />
    </>
  )
}

export default Doctors
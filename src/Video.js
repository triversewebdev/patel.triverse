import React from 'react';
import Container from './components/Container/Index';
import Webcontainer from './components/WebContainer/Index';
import Title from './components/Title/Index';
import BreadCrumb from './components/BreadCrumb/Index';
import MediaNavabar from './components/Header/MediaNavabar';
import Gallery from './components/Gallery/Index';

const Video = () => {
  const galleryData = [
    { videoUrl: 'https://www.youtube.com/embed/dbAh054hOuA', titleData: 'मूत्राशय का कैंसर : चेतावनी के संकेत, जाँच और उपचार | डॉ स्वपन सूद | पटेल अस्पताल, जालंधर', news_paperName: 'मूत्राशय का कैंसर : चेतावनी के संकेत, जाँच और उपचार | डॉ स्वपन सूद | पटेल अस्पताल, जालंधर', datemonth: 'Sep 2023' },
    { videoUrl: 'https://www.youtube.com/embed/dbAh054hOuA', titleData: 'किडनी खराब क्यों होती है? | डॉ मनोज चौधरी | पटेल हस्पताल, जालंधर', news_paperName: 'किडनी खराब क्यों होती है? | डॉ मनोज चौधरी | पटेल हस्पताल, जालंधर', datemonth: 'Mar 2022' },
    { videoUrl: 'https://www.youtube.com/embed/dbAh054hOuA', titleData: 'Enlarged Prostate (BPH): Symptoms, Causes, Diagnosis, Treatment', news_paperName: 'Enlarged Prostate (BPH): Symptoms, Causes, Diagnosis, Treatment', datemonth: 'Jul 2020' },
    { videoUrl: 'https://www.youtube.com/embed/dbAh054hOuA', titleData: 'घुटने के जोड़ बदलने की सर्जरी 𝐊𝐧𝐞𝐞 𝐑𝐞𝐩𝐥𝐚𝐜𝐞𝐦𝐞𝐧𝐭 𝐒𝐮𝐫𝐠𝐞𝐫𝐲 - 𝐏𝐚𝐭𝐢𝐞𝐧𝐭 𝐓𝐞𝐬𝐭𝐢𝐦𝐨𝐧𝐢𝐚𝐥 || Patel Hospital', news_paperName: 'घुटने के जोड़ बदलने की सर्जरी 𝐊𝐧𝐞𝐞 𝐑𝐞𝐩𝐥𝐚𝐜𝐞𝐦𝐞𝐧𝐭 𝐒𝐮𝐫𝐠𝐞𝐫𝐲 - 𝐏𝐚𝐭𝐢𝐞𝐧𝐭 𝐓𝐞𝐬𝐭𝐢𝐦𝐨𝐧𝐢𝐚𝐥 || Patel Hospital', datemonth: 'Aug 2020' },
    { videoUrl: 'https://www.youtube.com/embed/dbAh054hOuA', titleData: 'Patient Testimonial : Ms. Rajwant Kaur || Head & Neck Surgery || Patel Hospital Jalandhar', news_paperName: 'Patient Testimonial : Ms. Rajwant Kaur || Head & Neck Surgery || Patel Hospital Jalandhar', datemonth: 'Aug 2020' },
    { videoUrl: 'https://www.youtube.com/embed/dbAh054hOuA', titleData: 'Patient Testimonial || Happy Patient || ਮਰੀਜ਼ ਦੇ ਵਿਚਾਰ || Patel Hospital || #Punjab #India', news_paperName: 'Patient Testimonial || Happy Patient || ਮਰੀਜ਼ ਦੇ ਵਿਚਾਰ || Patel Hospital || #Punjab #India', datemonth: 'Jul 2020' }
  ];

  const uniqueMonths = [...new Set(galleryData.map(item => {
    const date = new Date(item.datemonth);
    return date.toLocaleString('default', { month: 'short' }).toUpperCase();
  }))];

  const uniqueYears = [...new Set(galleryData.map(item => {
    const date = new Date(item.datemonth);
    return date.getFullYear().toString();
  }))];

  return (
    <>
      <Container>
        <BreadCrumb pageName={'Video'} />
      </Container>
      <Webcontainer _parentClass={'p-100'}>
        <Title secondHeading={'PATIENT INFORMATION VIDEO'} firstHeading={`Video's`} />
        <div className='row'>
          <MediaNavabar />
          <Gallery gallery_data={galleryData} uniqueMonths={uniqueMonths} uniqueYears={uniqueYears} photoGallery={false} />
        </div>
      </Webcontainer>
    </>
  );
};

export default Video;

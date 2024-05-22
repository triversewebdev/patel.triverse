import React, { useState, useEffect, useRef } from 'react';
import '../ScrollTabs/ScrollTabs.css';
import WebContainer from '../WebContainer/Index';

const ScrollTabs = ({ handleScrollTo, tabs }) => {
  const [activeTab, setActiveTab] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust threshold based on when you want the section to be considered "visible"
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = tabs.findIndex((tab) => tab.ref.current === entry.target);
          setActiveTab(index);
        }
      });
    }, options);

    const sections = tabs.map((tab) => tab.ref);
    sections.forEach((ref) => {
      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [tabs]);

  const handleClick = (ref, index) => {
    handleScrollTo(ref.current, 200);
    setActiveTab(index);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);

  const [scrollClass, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <WebContainer _parentClass={'fixmenu'}>
      <div className={`col-12 float-start ${scrollClass ? 'scrollClass sticky' : 'scrollClass'}`}>
        <ul className="d-flex border-top border-bottom pt-4 pb-4 justify-content-between">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? 'active' : ''}
              onClick={() => handleClick(tab.ref, index)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
    </WebContainer>
  );
};

export default ScrollTabs;

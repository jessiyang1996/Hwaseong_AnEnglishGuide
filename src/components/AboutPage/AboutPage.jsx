import React from 'react';

import './AboutPage.css';

function AboutPage() {
  return (
    <div className="container">
      <div className="contentDiv">
        <div className="contentContainer">
          <div className="smallerContainer">
            <h3 className="aboutHeader">Location</h3>

            <p>
              <b>Hwaseong</b> is a city located on the west coast of
              <b> Gyeonggi-do</b>, South Korea. It has the largest land area in
              the Gyeonggi-do province (the land surrounding Seoul) and most of
              the land is used for farming. Some major crops in this area
              include rice and Songsan Grapes. Due to it's close proximity to
              Seoul and the more affordable land prices, many factories and
              large manufacturing companies are located here. Some notable
              companies located in Hwaseong include{' '}
              <b>Samsung, Hyundai, Kia Motors, and 3M</b>. Samsung plays a large
              role in the Hwaseong economy as many people are employed by
              Samsung. The new town, <b>Dongtan</b>, was built for the families
              who moved to Hwaseong to work in the new Samsung Nano City.
            </p>

            <h3>History and the Creation of Hwaseong City</h3>
            <p>
              The Korea that we know today is relatively new. It was one of the
              poorest nations in the world after the Korean Wars ended in 1953.
              In less than 100 years, South Korea was able to build itself into
              a major economical powerhouse. After the war, the Korean people
              worked extremely hard to pull their nation out of poverty. As
              such, there were many changes happening in Korea. Cities, for
              example, were constantly being renamed and city borders were
              constantly changed. As such, not many people know about Hwaseong.
              In 2001, Hwaseong was officially turned into a city. Before it
              because a city, it was known as a part of Suwon{' '}
              <span className="blue">[1]</span>. That is why many Korean people
              are confused today when you mention Hwaseong to someone. For older
              people, they may still consider Hwaseong as part of Suwon. For
              younger people, they may only know of the famous UNESCO site
              called Hwaseong Fortress in Suwon. Either ways, Suwon and Hwaseong
              City has a complex, intertwined, and long relationship.
            </p>
          </div>
        </div>
      </div>
      {/* resources: */}
      <div className="resourcesDiv">
        <div className="smallerContainer">
          <h3 className="divTitle">Resources:</h3>
          <a href="https://encykorea.aks.ac.kr/Article/E0064683">
            [1] https://encykorea.aks.ac.kr/Article/E0064683
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

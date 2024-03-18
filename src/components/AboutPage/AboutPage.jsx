import React from 'react';

import './AboutPage.css';

function AboutPage() {
  return (
    <div className="container">
      <div className="contentDiv">
        {/* About header image */}
        <div className="aboutHeaderImageDiv">
          <img
            src="/images/cafeInSeoshin.jpg"
            className="AboutHeaderImage"
          ></img>
        </div>
        {/* End of about header image */}
        <div className="contentContainer">
          <div className="smallerContainer">
            <div className="contentSideBySide">
              <div className="imgContent">
                <img
                  className="hwaseongGyeonggiMap"
                  alt="hwaseong highlighted on gyeonggi-do map"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gyeonggi-Hwaseong.svg/800px-Gyeonggi-Hwaseong.svg.png"
                ></img>
                <figcaption className="figcaption">
                  Hwaseong is highlighted in red on the map of South Korea.
                  <span className="blue">[2]</span>
                </figcaption>
              </div>
              <div>
                <h3 className="aboutHeader">Location</h3>
                <p>
                  <b>Hwaseong</b> is a city located on the west coast of
                  <b> Gyeonggi-do</b>, South Korea. It has one of the largest
                  land area in the Gyeonggi-do province (the land surrounding
                  Seoul) and most of the land is used for farming. Some major
                  crops in this area include rice and Songsan Grapes. Due to
                  it's close proximity to Seoul and the more affordable land
                  prices, many factories and large manufacturing companies are
                  located here. Some notable companies located in Hwaseong
                  include <b>Samsung, Hyundai, Kia Motors, and 3M</b>. Samsung
                  plays a large role in the Hwaseong economy as many people are
                  employed by Samsung. The new town, <b>Dongtan</b>, was built
                  for the families who moved to Hwaseong to work in the new
                  Samsung Nano City.
                  <p>
                    As Hwaseong is next to the Yellow Sea, seafood also plays a
                    big part of Hwaseong's economy. There are many seafood
                    markets located here and many people come to Hwaseong to
                    visit the beaches, go fishing, eat fresh seafood, or play in
                    the mudflats. Unlike the east coast, the west coast of Korea
                    does not have sandy beaches. Usually, the waves pull back
                    and leave mineral-rich mudflats where families like to dig
                    and play in.
                  </p>
                </p>
                <h3>History and the Creation of Hwaseong City</h3>
                <p>
                  The South Korea that we know today is relatively new. It was
                  one of the poorest nations in the world after the Korean War
                  ended in 1953. In less than 100 years, South Korea was able to
                  build itself into a major economical powerhouse. After the
                  war, the Korean people worked extremely hard to pull their
                  nation out of poverty. As such, there were many changes
                  happening in Korea. Cities, for example, were constantly being
                  renamed and city borders were constantly changed. Because of
                  this, not many people know about Hwaseong City. In 2001,
                  Hwaseong was officially turned into a city. Before it was a
                  city, it was part of Suwon County
                  <span className="blue">[1]</span>. That is why many Korean
                  people are confused today when Hwaseong is mentioned. For
                  older people, they may still consider Hwaseong as part of
                  Suwon. For younger people, they may only know of the famous
                  UNESCO site called Hwaseong Fortress in Suwon.
                </p>
              </div>
            </div>
            <p>
              Either ways, Suwon and Hwaseong City has a complex, intertwined,
              and long relationship.
            </p>

            {/* Photo gallery */}
            <div className="aboutPhotoGallery">
              <img src="" className="aboutPhotoGalleryItem"></img>
              <img src="" className="aboutPhotoGalleryItem"></img>
              <img src="" className="aboutPhotoGalleryItem"></img>
            </div>
            <h3>Main Attractions</h3>
            <div></div>
          </div>
        </div>
      </div>
      {/* resources: */}
      <div className="resourcesDiv">
        <div className="smallerContainer">
          <h3 className="divTitle">Resources:</h3>
          <div>
            <a href="https://encykorea.aks.ac.kr/Article/E0064683">
              [1] https://encykorea.aks.ac.kr/Article/E0064683
            </a>
          </div>
          <div>
            <a href="https://koreaonthego.wordpress.com/2014/04/04/suwon-city-%EC%88%98%EC%9B%90%EC%8B%9C/">
              [2]
              https://koreaonthego.wordpress.com/2014/04/04/suwon-city-%EC%88%98%EC%9B%90%EC%8B%9C/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

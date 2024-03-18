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
          <h1 className="aboutTitleStyling"> About</h1>
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
                  Hwaseong is highlighted in red on the map of South Korea
                  <span className="blue">[2]</span>.
                </figcaption>
              </div>
              <div>
                <h3 className="aboutHeader">Introduction</h3>
                <p>
                  <b>Hwaseong</b> is a city located on the west coast of
                  <b> Gyeonggi-do</b>, South Korea. The name "Hwaseong" roughly
                  translates to "Mars" or "Brilliant Castle"
                  <span className="blue">[1]</span>. Most of the land is used
                  for farming. Some major crops in this area include rice and
                  Songsan Grapes. Due to it's close proximity to Seoul and the
                  more affordable land prices, many factories and large
                  manufacturing companies are located here. Some notable
                  companies include <b> Samsung, Hyundai, Kia Motors, and 3M</b>
                  . Samsung plays a large role in Hwaseong's economy as many
                  people are employed by Samsung. The new town, <b>Dongtan</b>,
                  was built for the families who moved to Hwaseong to work in
                  the new Samsung Nano City - Hwaseong campus. Another important
                  industry in Hwaseong is the fishing industry. As it is next to
                  the Yellow Sea, seafood plays a big part in Hwaseong's
                  identity and economy.
                  <p></p>
                </p>
                <h3>History and the Creation of Hwaseong City</h3>
                <p>
                  South Korea was one of the poorest nations in the world after
                  the Korean War ended in 1953. In less than 100 years, South
                  Korea was able to rebuild itself into a major economic
                  powerhouse. Due to the extremely fast modernization and
                  industrialization of South Korea, there were many changes
                  happening. Cities, for example, were constantly being renamed
                  and city borders redrawn. Because of this, many people are
                  confused about Hwaseong. Hwaseong was originally part of Suwon
                  County. Then, when Suwon broke off to become a city, Hwaseong
                  was renamed to Hwaseong County. And in 2001, Hwaseong was
                  turned into a city
                  <span className="blue">[3]</span>. That is why many Korean
                  people are confused about Hwaseong. It also doesn't help that
                  Hwaseong City was named after the
                </p>
              </div>
            </div>
            <p>
              UNESCO site, Hwaseong Fortress, which is located in Suwon City.
              For older people, they may still consider Hwaseong as part of
              Suwon. For younger people, they may only know of the famous UNESCO
              site. Either ways, Hwaseong and Suwon has a complex, intertwined,
              and long relationship.
            </p>
            <h3>Hwaseong Today</h3>
            <div>
              <p>
                Hwaseong is a quickly growing city. Many people move to Hwaseong
                due to the opportunities from the companies and factories that
                are located here. In 2021, The Korea Herald reported that
                Hwaseong's population grew by 69.3%
                <span className="blue">[4]</span>. And at the end of 2023,
                Hwaseong mayor Jong Myeong-geum, declared in an interview with
                Korea Post that that Hwaseong is on it's way to become a
                1-million man city
                <span className="blue">[3]</span>. As Hwaseong is quickly
                growing and developing, many more people will be interested in
                or moving to Hwaseong. When I moved to Hwaseong in 2020, there
                was barely any information about Hwaseong City. This guide was
                created to help those who moved to Hwaseong or is interested in
                exploring or getting to know the city more. It was created from
                the perspective of someone who lived and worked in Hwaseong for
                3 years.
              </p>
            </div>
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
            <a href="https://www.koreapost.com/news/articleView.html?idxno=40765">
              [1] https://www.koreapost.com/news/articleView.html?idxno=40765
            </a>
          </div>
          <div>
            <a href="https://koreaonthego.wordpress.com/2014/04/04/suwon-city-%EC%88%98%EC%9B%90%EC%8B%9C/">
              [2]
              https://koreaonthego.wordpress.com/2014/04/04/suwon-city-%EC%88%98%EC%9B%90%EC%8B%9C/
            </a>
          </div>
          <div>
            <a href="https://encykorea.aks.ac.kr/Article/E0064683">
              [3] https://encykorea.aks.ac.kr/Article/E0064683
            </a>
          </div>
          <div>
            <a href="https://www.koreaherald.com/view.php?ud=20210810000363">
              [4] https://www.koreaherald.com/view.php?ud=20210810000363
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

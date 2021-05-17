import React from 'react';
import { faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsArticle = ({image, date, title, subTitle}) => {
  const dataArticle = [
    {
      href: "https://www.actemium.fr/smart-industry/symbio-accelere-son-industrialisation-actemium-fidec-thermic-et-citinea-les-accompagne-dans-cette-aventure/",
    }
  ]
  return (
    <article className="news-article">
      <a href={dataArticle[0].href} title={title} className="news-article-link">
        <div className="news-article-inner">
          <div className="news-article-image" style={{backgroundImage: `url(${image})`}}></div>
          <div className="news-article-content">
            <div className="wb-overview-post-meta">
              <div className="wb-overview-post-date"><FontAwesomeIcon icon={faClock} /><span> {date}</span></div>
            </div>
            <div className="wb-overview-post-title">
              {title}
            </div>

                                <div className="wb-overview-post-description">
                                {subTitle}</div>
            <div className="wb-overview-post-footer">
              <div className="wb-overview-post-footer-left">
                <div className="wb-overview-post-readmore">
                  En savoir plus											</div>
              </div>
              <div className="wb-overview-post-footer-right">
                <button className="news-article-arrow"><FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>     
  );
}

export default NewsArticle;
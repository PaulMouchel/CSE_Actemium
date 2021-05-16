import React from 'react';
import { faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsArticle = () => {
  return (


            <article className="wb-overview-post-item wb-masonry-item">
              <a href="https://www.actemium.fr/smart-industry/symbio-accelere-son-industrialisation-actemium-fidec-thermic-et-citinea-les-accompagne-dans-cette-aventure/" title="SYMBIO accélère son industrialisation. Actemium, FIDEC Thermic et CITINEA les accompagne dans cette aventure" className="wb-overview-post-link">
                <div className="wb-overview-post-item-inner ">
                  <div className="wb-overview-post-image wb-overview-post-image-responsive test"></div>
                  <div className="wb-overview-post-content">
                    <div className="wb-overview-post-meta">
                      <div className="wb-overview-post-date"><FontAwesomeIcon icon={faClock} /><span> 29.04.2021</span></div>
                    </div>
                    <div className="wb-overview-post-title">
                      Envie de montagne ?
                    </div>

                                        <div className="wb-overview-post-description">
                      Plus que quelques jours pour louer nos appartements à Meribel (encore 2 disponibles)</div>
                    <div className="wb-overview-post-footer">
                      <div className="wb-overview-post-footer-left">
                        <div className="wb-overview-post-readmore">
                          En savoir plus											</div>
                      </div>
                      <div className="wb-overview-post-footer-right">
                        <button className="wb-overview-post-button"><FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </article>     
  );
}

export default NewsArticle;
    ;

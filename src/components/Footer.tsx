// @flow 
import * as React from 'react';
import styled from 'styled-components'

type Props = {
    
};

const Foot = styled.div`
    background-color: #1a1a1a;
    width: 100vw;
    padding: 50px;
`



export const Footer = (props: Props) => {

    return (
        <footer className="footer-section" id="contact">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-5 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text p-2">
                                <h4>Besöksadress</h4>
                                <span>Gärdesgatan 3, 665 32, Kil</span>
                                
                            </div>
                        </div>
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text p-2">
                                <h4>Telefon</h4>
                                <a href="tel:+070-566 75 45"><span>070-566 75 45</span></a>
                                <span></span>
                            </div>
                        </div>
                         <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text p-2">
                                <h4>Mail</h4>
                                <a href="mailto:david@kilsbyggservice.se"><span>david@kilsbyggservice.se</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-4 mb-30">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.617944637746!2d13.300771416940485!3d59.50367468247349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46434a38e8efda33%3A0x3cba2baa4c871d90!2sG%C3%A4rdesgatan%203%2C%20665%2032%20Kil!5e0!3m2!1sen!2sse!4v1653573227003!5m2!1sen!2sse" width="600" height="200" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};
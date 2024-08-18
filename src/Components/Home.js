import React from 'react';
import Contact from './Contact';

function Home () {
    return (
        <main>
            <div className="heading">
                <div className="posterImg"><img src="../../anotherImg.jpg" alt="Consulting services" /></div>
                <div className="posterText">
                    <h1>Empowering Your Business With Innovative Solutions</h1>
                    <p>It's at the heart of what we do.</p>
                </div>
            </div>
            <div className="flexBox">
                <div className="ourApproach">
                    <h2>Our Approach</h2>
                    <div className="eachApproach">
                        <h3>Strategic Planning</h3>
                        <p>We help you define your goals and create a clear, actionable plan to achieve them.</p>
                    </div>
                    <div className="eachApproach">
                        <h3>Expert Analysis</h3>
                        <p>Our data-driven insights enable you to make informed decisions and stay ahead of the competition.</p>
                    </div>
                    <div className="eachApproach">
                        <h3>Tailored Solutions</h3>
                        <p>We understand that every business is unique, so we customize our services to meet your specific needs.</p>
                    </div>
                    <div className="eachApproach">
                        <h3>Ongoing Support</h3>
                        <p>From initial consultation to implementation and beyond, we’re with you every step of the way.</p>
                    </div>
                </div>
            </div>
            <div className="whyChooseUs">
                <h2>Why Choose Us?</h2>
                <div className="eachReason">
                    <h3>Experienced Team</h3>
                    <p>Our consultants bring years of industry experience and a proven track record of success.</p>
                </div>
                <div className="eachReason">
                    <h3>Client-Centric Focus</h3>
                    <p>We prioritize your success and work collaboratively to deliver value at every stage.</p>
                </div>
                <div className="eachReason">
                    <h3>Innovative Solutions</h3>
                    <p>We leverage the latest technologies and methodologies to provide cutting-edge solutions.</p>
                </div>
            </div>
            <Contact />
        </main>
    );
}

export default Home;
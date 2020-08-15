import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';

import picNatBea from '../assets/images/natbea.jpg'
import picHealytics from '../assets/images/healytics.jpg'
import picSbd from '../assets/images/sbd.png'
import picDotru from '../assets/images/dotru.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Nat Baylon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>
                                My name is Nat Baylon. I am a full stack developer with five years of experience working in agile teams. 
                                I have lived and worked in Maryland for most of my life, but I am currently living in Granada, a beautiful city in the south of Spain, where my wife is from.
                            </p>
                            <p>
                                I started getting interested in web development and coding in middle school, when I had the opportunity to do some programming in an informatics class, and since then, I was hooked. 
                                During my university years, I attended several hackathons with my friends, and we even placed 2<sup>nd</sup> in HackUMBC 2016! 
                                A year later, I graduated with Honors in Computer Science at the University of Maryland, Baltimore County in 2017. 
                                For the past two years, I have been working remotely with <a href="https://www.healytics.com/" rel="noopener noreferrer">Healytics</a>, a Baltimore-based health information management company, 
                                where I continue to sharpen my skills while doing what I enjoy the most.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit">
                                <figure>
                                    <img src={picNatBea} alt="" />
                                    <figcaption>My wife and me in Huelma, Jaén</figcaption>
                                </figure>
                            </span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="devicon devicon-react-original-wordmark colored"/></li>
                                <li><span className="devicon devicon-nginx-plain colored"/></li>
                                <li><span className="devicon devicon-nodejs-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-express-original-wordmark"/></li>
                                <li><span className="devicon devicon-java-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-python-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-postgresql-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-mongodb-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-git-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-linux-plain colored"/></li>
                                {/* <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-database"></span></li>
                                <li><span className="icon style3 major fa-cloud"></span></li>
                                <li><span className="icon style4 major fa-code-fork"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-server"></span></li> */}
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>My Stack</h2>
                            </header>
                            <p>
                                Here's a walkthrough of the technologies I most commonly use when developing applications:
                            </p>
                            <p>
                                In the front-end, I have lately been developing single page applications (SPAs) with React. 
                                I like using Bootstrap or Semantic UI for styling / componentry, and Axios.js as a RESTful HTTP client. 
                                To manage the state of componentry, I started out using Redux, 
                                but later switched to using the built-in Context API to reduce boiler-plate code and to improve maintainability.
                            </p>
                            <p>
                                I am of the mindset that the front-end should be decoupled from the back-end to allow the two to be developed, built, and deployed separately. 
                                I currently use Nginx to achieve this since it can serve front-end builds and reverse-proxy HTTP requests to RESTful back-ends. Compared with Apache,
                                Nginx makes a much better use of threads, is event driven, asynchronous, and non-blocking, making it able to handle a larger throughput.
                            </p>
                            <p>
                                On the server side, I like to use Node + Express because of its speedy request handling and npm's wide variety of available libraries. 
                                When the back-end needs to be scaled up to multiple processes, I use PM2.
                                While Javascript isn't particularly good at computationally heavy tasks (reading and processing large files or math for example),
                                it handles other use cases very well, such as handling requests that require database querying. And when heavy lifting is needed,
                                I offload this work to Java or C++, allowing both fast request handling and fast data processing. 
                            </p>
                            <p>
                                When working with relational data, I typically choose Postgres because it offers many features and can execute complicated queries and large datasets well. 
                                I use a good ORM in applications to query the database, such as Sequelize, to make the code more manageable and readable.
                                When working with non-relational data or when rapidly prototyping an application, MongoDB is my go-to because it is very developer friendly.
                            </p>
                            <p>
                                In my local development environment, I use Ubuntu or a similar Linux distribution, VS Code as my text editor, and git + Github / Bitbucket for source control. 
                                When working with teams, I have used Jira and Confluence to manage tasking and documentation respectively.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Professional Experience</h2>
                            </header>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={picHealytics} alt="" /></span>
                            <h3>Full Stack Developer</h3>
                            <p>
                                Healytics, Inc. Cockeysville, MD <br/> 
                                June 2017 - Present
                            </p>
                            <ul className="experience-description">
                                <li>
                                    Created and maintained a suite of health research applications that integrate directly
                                    with hospital Electronic Health Records (EHRs).
                                </li> 
                                <li>
                                    Developed a genomic processing pipeline in order to help medical institutions identify
                                    genetic variants, detect diseases, and avoid adverse drug-gene interactions.
                                </li>
                                <li>
                                    Secured health records, ensuring that patients control access to their records.
                                </li>
                                <li>
                                    Technologies used: React.js, Semantic UI, Node Express, Java, PostgreSQL, Accumulo.
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={picDotru} alt="" /></span>
                            <h3>Full Stack Developer & Scraper</h3>
                            <p>
                                Dotru, Inc. Columbia, MD<br/>
                                May 2016 - May 2017
                            </p>
                            <ul className="experience-description">
                                <li>
                                    Built a restful application to manage web scraping and used this application to
                                    configure and schedule hundreds of scraping jobs.
                                </li>
                                <li>
                                    Technolgies used: Angular.js, Twitter Bootstrap, Node Express, MongoDB, PhantomJS, and RabbitMQ.
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={picSbd} alt="" /></span>
                            <h3>Software Engineer</h3>
                            <p>
                                SBD II, LLC. Vienna, VA<br/>
                                May 2015 - March 2016
                            </p>
                            <ul className="experience-description">
                                <li>
                                    Developed a variety of Sharepoint workflows to expedite employee training module
                                    completion.
                                </li>
                                <li>
                                    Technologies used: Sharepoint, Visual Basic.
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Want to get in touch?</h2>
                        </header>
                        <p>
                            Email me at nwbaylon@gmail.com<br/> 
                            Call / WhatsApp me at +34 644 143 143<br/>
                            You can find a PDF of my resume <a href="/NathanielBaylonResume.pdf" target="_blank">here</a>.
                        </p>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;

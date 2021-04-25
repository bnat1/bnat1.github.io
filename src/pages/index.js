import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';

import picNatBea from '../assets/images/natbea.jpg'
import picHealytics from '../assets/images/healytics.jpg'
import picSbd from '../assets/images/sbd.png'
import picDotru from '../assets/images/dotru.png'
import rabbitmqIcon from '../assets/images/rabbitmq.svg'
import jiraIcon from '../assets/images/jira.png'
import bashIcon from '../assets/images/bash.png'
import jenkinsIcon from '../assets/images/jenkins.png'
import semanticIcon from '../assets/images/semantic.png'

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
                                My name is Nat Baylon. I am a full stack software engineer with six years of experience working in agile development teams. 
                                I have lived and worked in Maryland for most of my life, but I am currently based in Granada, a beautiful city in the south of Spain, where my wife is from.
                            </p>
                            <p>
                                I started getting interested in web development as a teenager, when I had the opportunity to take programming classes in middle school and high school, and since then, programming has been prominent in my life
                                During my university years, I attended several hackathons with my friends, and we placed 2<sup>nd</sup> in HackUMBC 2016 with a project involving controling sound and fractal patterns with a motion sensor.
                                In 2017, I graduated with honors in Computer Science at the University of Maryland, Baltimore County. 
                                For the past few years, I have been traveling the world while working remotely as a Full Stack Software Engineer with <a href="https://www.healytics.com/" rel="noopener noreferrer">Healytics</a>, 
                                a Baltimore-based health information management and genome processing company, where I continue to sharpen my skills while doing what I enjoy the most.
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
                                <li><span className="devicon devicon-html5-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-css3-plain-wordmark colored"/></li>
                                <li><span><img src={semanticIcon} alt="" className="icon-svg" /></span></li>
                                <li><span className="devicon devicon-nginx-plain colored"/></li>
                                <li><span className="devicon devicon-nodejs-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-express-original-wordmark "/></li>
                                <li><span className="devicon devicon-java-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-cplusplus-line-wordmark colored"/></li>
                                <li><span className="devicon devicon-go-line "/></li>
                                <li><span className="devicon devicon-python-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-postgresql-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-mongodb-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-git-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-github-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-bitbucket-plain-wordmark colored"/></li>
                                <li><span className="devicon devicon-confluence-plain-wordmark colored"/></li>
                                <li><span><img src={jiraIcon} alt="" className="icon-svg-wide" /></span></li>
                                <li><span className="devicon devicon-linux-plain colored" /></li>
                                <li><span><img src={bashIcon} alt="" className="icon-svg-wide" /></span></li>
                                <li><span className="devicon devicon-amazonwebservices-plain-wordmark colored"/></li>
                                <li><span><img src={rabbitmqIcon} alt="" className="icon-svg" /></span></li>

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
                            <header>
                                <h3>Front-end</h3>
                            </header>
                            <p>
                                I have lately been developing single page applications (SPAs) using React. 
                                I like using Bootstrap or Semantic UI for styling / componentry, and Axios.js as a RESTful HTTP client. 
                                To manage the state of componentry, I started out using Redux, 
                                but later switched to using the built-in React Context API to reduce boiler-plate code and to improve maintainability.
                            </p>
                            <header>
                                <h3>Front-end Server & API Gateway</h3>
                            </header>
                            <p>
                                I am of the mindset that the front-end should be decoupled from the back-end to allow the two to be developed, built, and deployed separately. 
                                I currently use Nginx to achieve this since it can serve front-end builds and reverse-proxy HTTP requests to RESTful back-ends. Compared with Apache,
                                Nginx makes a much better use of threads, is event driven, asynchronous, and non-blocking, making it able to handle a larger throughput.
                            </p>
                            <header>
                                <h3>Back-end</h3>
                            </header>
                            <p>
                                On the server side, I like to handle requests using Node Express. 
                                When request handling needs to be scaled up, I use PM2 to allow the application to run on multiple processes, and additionally, I have used Amazon Elastic Beanstalk to scale horizontally.
                                Due to its single threaded asynchronous nature, Node.js is particularly good at handling the most common types of requests,
                                such as requests involving querying databases or making additional RESTful calls. 
                                But if the back-end needs to handle more computationally heavy tasks (processing large files, machine learning, or math for example), I create a separate application in a suitable language
                                that handles this processing, and use a messaging queue like RabbitMQ to allow the request handler to offload the work to a cluster of servers more suited to do the heavy lifting. This type of design pattern
                                allows for great scalability. If the userbase expands, the messaging queue will fill up, meaning it will take more time for the worker servers to get to the tasks. And when this happens, it's 
                                simple to add more servers to the work cluster.
                            </p>
                            <header>
                                <h3>Database</h3>
                            </header>
                            <p>
                                When working with relational data, I typically choose Postgres as the database because it offers many features and can handle complicated queries and large datasets well. 
                                I use a good ORM in applications to query the database, such as Sequelize, to make the code more manageable and readable.
                                When working with non-relational data or when rapidly prototyping an application, MongoDB with the Mongoose ODM as a is my go-to because it is very developer friendly.
                            </p>
                            <header>
                                <h3>Local Development Environment</h3>
                            </header>
                            <p>
                                In my local development environment, I use Ubuntu or a similar Linux distribution, git and Github / Bitbucket for source control, VS Code as my text editor.
                                And when working with teams, I have used Jira and Confluence to manage tasking and documentation respectively.
                            </p>
                            <header>
                                <h3>Building & Deploying</h3>
                            </header>
                            <p>
                                Github and Bitbucket both have plugins available for triggering build servers on the event merging of pull requests, which
                                I like to configure so that merging into the develop / main branch triggers Jenkins to build the project. 
                                I use webpack for minifying JavaScript projects, and Maven for building Java projects, and I use Docker to containerize the deployment of parts of the project. 
                            </p>
                            <ul className="major-icons">
                                <li><span className="devicon devicon-docker-plain-wordmark colored" /></li>
                                <li><span><img src={jenkinsIcon} alt="" className="icon-svg-wide" /></span></li>
                                {/* <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-database"></span></li>
                                <li><span className="icon style3 major fa-cloud"></span></li>
                                <li><span className="icon style4 major fa-code-fork"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-server"></span></li> */}
                            </ul>
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
                            <h3>Full Stack Engineer</h3>
                            <p>
                                Healytics, Inc. Cockeysville, MD <br/> 
                                June 2017 - Present
                            </p>
                            <ul className="experience-description">
                                <li>
                                    Created and maintained a suite of HIPPA compliant health data storage, messaging,
                                    and research applications that integrate directly with Electronic Health Records
                                    (EHRs).
                                </li> 
                                <li>
                                    Researched, designed, and developed a genomics processing pipeline that helps medical
                                    institutions identify genetic variants, detect diseases, and avoid adverse drug-gene
                                    interactions.
                                </li>
                                <li>
                                    Transformed and maintained a messaging platform based on Rocket.Chat, created bots
                                    to help departments within health institutions respond to messages.
                                </li>
                                <li>
                                    Responded to help desk tickets and feature requests from medical institutions.
                                </li>
                                <li>
                                    Developed tooling to manage internal control processes and deployments
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={picDotru} alt="" /></span>
                            <h3>Full Stack Engineer & Scraper</h3>
                            <p>
                                Dotru, Inc. Columbia, MD<br/>
                                May 2016 - May 2017
                            </p>
                            <ul className="experience-description">
                                <li>
                                    Maintained a headless web scraper that visits websites, performs clicks, and extracts data using CSS selectors.
                                </li>
                                <li>
                                    Built a RESTful application that assists in configuring the steps that the web scraper takes and the locations of the
                                    data of interest to be extracted.
                                </li>
                                <li>
                                    Used a RabbitMQ work queue to encapsu  late and execute scraping tasks.
                                </li>
                                <li>
                                    Configured the scraping of hundreds of web pages.
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
                            You can find a PDF of my resume <a href="/NathanielBaylonResume.pdf" target="_blank">here</a>
                        </p>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;

import React, { Component } from 'react'

export default class WorkExperience extends Component {
    render() {
        return (
            <div id="work-experience">
                <section class="left">
                    <h2>Work Experience</h2>

                    <h3>Roblox - Backend Software Engineer for Social Communications Team  - July 2021 - Present</h3>
                    <p>
                        <ul>
                            <li>
                            Migrated parts of monolothic web backend code to a microservice
                            </li>
                            <li>
                            Wrote MSSQl code to clean up tables in Roblox's databases
                            </li>
                            <li>
                            Descriptions will be updated as I continue working at this compan
                            </li>
                        </ul>
                     </p>

                    <h3>Roblox - SWE Intern for the Social Team  - Summer 2020</h3>
                    <p>
                        <ul>
                            <li>
                            Worked with Asp.Net and Docker to create a scalable microservice that validates strings against several rules that interacts with Roblox’s main web monolithic backend with parallelizable component tests.
                            </li>
                            <li>
                            Interfaced Roblox’s web backend with an SQL database that keeps track of account changes for moderation purposes critical to Roblox’s expansion into other markets.
                            </li>
                            <li>
                            Used Amazon SQS and Elasticsearch to modify a pipeline that enables scalable and quick searching of users that have changed properties of their account
                            </li>
                            <li>
                            Added fields to endpoints that returned JSON responses that controls what features are visible to users.
                            </li>
                        </ul>
                    
                    </p>
                     <h3>Kite.com - Remote Coding Curator - December 2019 - Feburary 2020</h3>
                    <p>
                        <ul>
                            <li>
                            Write and document Python coding samples
                            </li>
                        </ul>
                     </p>
                    <h3>Roblox - SWE Intern for the Telemtery Team  - Summer 2020</h3>
                    <p>
                        <ul>
                            <li>
                            Created a data abstraction layer for the web platform in C# using Prometheus’s client library to increase the productivity for over fifty developers.
                            </li>
                            <li>
                            Created experimental multithreaded and asynchronous prototypes for instrumentation.
                            </li>
                            <li>
                            Closed tickets related to optimizing and creating web controllers within the ASP.NET MVC framework and fixing unit tests within a 25 GB codebase.
                            </li>
                        </ul>
                     </p>
                    <h3>Georgia Tech College of Computing - Student/Technical Assistant - October 2018 - December 2018</h3>
                    <p>
                        <ul>
                            <li>
                            Setup Windows machines for employees of Georgia Tech College of Computing
                            </li>
                            <li>
                            Sorted and archived around 80 helpdesk tickets for future data analysis
                            </li>
                        </ul>
                     </p>

            </section>

            </div>
        )
    }

}
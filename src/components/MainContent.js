// MainContent.js

import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="professional-summary" className="section">
        <h2 className="section__title">Professional Summary</h2>
        <p className="section__text">
          Post-Graduate in Advanced Project Management – Information Technology and a B.Tech (Computer Science Engineering) graduate with 7+ years of professional experience in the IT and Retail Industry (B2C and B2B).
        </p>
        <ul className="section__list">
          <li>Delivered multiple projects in OMS and WMS space for BestBuy and iTrade Networks with different order types in both B2C and B2B fulfillments.</li>
          <li>Strong knowledge of Project Management principles and methodologies, including PMBOK guidelines, the Project Management lifecycle, and Lean Six Sigma.</li>
          <li>Technical expertise demonstrated by a well-documented experience in Software QA. An Automation Test Lead with a track record of increasing automation coverage from 10% to 70% in the previous company served.</li>
          <li>Acquired knowledge of ITIL, monitoring and controlling projects, risk and procurement management, and DevOps through academic coursework.</li>
          <li>Ability to utilize research, data analysis, and modeling skills to solve complex business problems and support the project team in meeting client needs and conditions.</li>
          <li>Strong computer skills, including hands-on experience with Microsoft Office Suite, JIRA, Microsoft Project, API, Selenium, and Docker. Holds an AWS (Amazon Web Services) Associate Certification.</li>
          <li>Excellent financial and budgeting knowledge and the capacity to schedule resources and plan target tasks. Strong communication skills with the ability to build trust and obtain project team and stakeholder alignment.</li>
        </ul>
      </section>
      <section id="skills" className="section">
        <h2 className="section__title">Skills</h2>
        <ul className="section__list">
          <li>QA | Selenium Automation | IBM Sterling Commerce | OMS | WMS | TestNG | JIRA | SQL | Java | NodeJS | DevOps | AWS | Docker | MS Office | CI/CD | Kafka | Splunk | PostgreSQL | Maven | GitHub | CMD | PowerBI</li>
          <li>Agile | Project Management | Business Analysis | ITIL | Lean Six Sigma</li>
        </ul>
      </section>
      <section id="career" className="section">
        <h2 className="section__title">Career Progression</h2>
        <ul className="section__list">
          <li>
            <h3>May 2023 – Present</h3>
            <p>Medx Insight – Toronto, CA</p>
            <p>Software Engineer Intern</p>
            <ul>
              <li>Designing and building a Voice Assistant for a Healthcare client that will aid doctors and patients.</li>
              <li>Developing Backend Services in NodeJS with the integration of PostgreSQL, which will authenticate and store data.</li>
            </ul>
          </li>
          <li>
            <h3>Jul 2021 – Apr 2022</h3>
            <p>Dew Solutions Pvt. Ltd. – Bengaluru, India</p>
            <p>QA Lead</p>
            <ul>
              <li>Led the QA team and monitored test activities such as test results, coverage, resources, defects and their status, and performance baselines.</li>
              <li>Developed and implemented test automation framework, strategies and processes that ensure the highest level of test coverage - achieved over 95% code coverage.</li>
              <li>The team was running the automation suite on multiple browsers independently; implemented Selenium Grid and Docker to aid cross-browser testing, reducing effort and time by 50%.</li>
            </ul>
          </li>
          <li>
            <h3>Dec 2019 – Jul 2021</h3>
            <p>Accenture Solutions Private Limited</p>
            <p>Test Engineering Team Lead</p>
            <ul>
              <li>Created test plans with a strategic selection of test methodologies, such as data validation, regression testing, integration testing, and performance/load testing.</li>
              <li>Contributed to sprint planning and testing tasks and process inputs.</li>
              <li>Owned project plan, which includes schedules, milestones, resources, communications, and risk considerations.</li>
              <li>Coordinated the work schedules of 3 Test Analysts, providing mentorship and direction.</li>
              <li>Performed defect tracking and management, leading to the resolution of over 200 product issues in collaboration with the development team and business.</li>
              <li>Utilized system and product-level specifications, design documentation, and use cases to define test requirements, test strategies, specifications, procedures, and scripts.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="previous-positions" className="section">
        <h2 className="section__title">Previous Positions</h2>
        <ul className="section__list">
          <li>Dec 2017 – Nov 2019: Accenture Solutions Private Limited, India - Software Engineering Sr. Analyst</li>
          <li>Dec 2015 – Nov 2017: Accenture Solutions Private Limited, India - Software Engineering Analyst</li>
          <li>Nov 2014 – Nov 2015: Accenture Solutions Private Limited, India - Associate Software Engineer</li>
        </ul>
      </section>
      <section id="accomplishments" className="section">
        <h2 className="section__title">Accomplishments</h2>
        <ul className="section__list">
          <li>Innovation Champion, VR for Delivery Services, implemented by BestBuy</li>
          <li>Accenture’s ACE award winner</li>
          <li>LGBT Ally in Accenture helped the LGBTQ community to stream along with the organization’s inclusiveness</li>
        </ul>
      </section>
      <section id="education" className="section">
        <h2 className="section__title">Education & Credentials</h2>
        <ul className="section__list">
          <li>2022 – 2023: Advanced Project Management - Information Technology, Lambton College, Toronto</li>
          <li>2010 – 2014: Bachelor of Technology (Computer Science and Engineering), Punjab Technical University, India</li>
        </ul>
      </section>
    </main>
  );
}

export default MainContent;

import React from 'react';

function Resume() {
  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <h3>Tools & Skills</h3>
        <ul>
          <li><strong>Frontend:</strong> ReactJS, NextJS, Tailwind, JavaScript/TypeScript, Figma, Canva, Bootstrap</li>
          <li><strong>Backend:</strong> Python, PostgreSQL, SQLAlchemy, Firebase, ElasticSearch</li>
          <li><strong>DevOps:</strong> CI/CD, Netlify</li>
        </ul>

        <h3>Experience</h3>
        <ul>
          <li>
            <strong>LIPS</strong> – Full-stack Engineer<br />
            <em>Jan 2025 - present</em><br />
            <ul>
              <li>Improved code quality and implemented best practices.</li>
              <li>Led product revamp and collaborated with multicultural teams.</li>
              <li>Added unit tests, TDD, and handled daily client requirements.</li>
              <li>Worked on SEO and analytics with team analysts.</li>
              <li>Product: <strong>LIPS website</strong> – UK’s largest multispecialty private group of NHS consultants.</li>
            </ul>
          </li>
          <li>
            <strong>Arete</strong> – Full-stack Engineer<br />
            <em>Dec 2021 - Dec 2024</em><br />
            <ul>
              <li>Enhanced performance by 120% and optimized databases (PostgreSQL, ElasticSearch).</li>
              <li>Led and mentored colleagues and interns.</li>
              <li>Built unit tests, documentation, and APIs.</li>
              <li>Improved SWE agile processes and code review practices.</li>
              <li>Developed complex video/server features.</li>
              <li>Product: <strong>Talentino</strong> – AI recruiting and applicant tracking system (ATS).</li>
            </ul>
          </li>
        </ul>

        <h3>Education</h3>
        <ul>
          <li>
            Faculty of Engineering, Cairo University<br />
            Computer Department – Bachelor’s Degree 2021
          </li>
        </ul>

        <h3>Languages</h3>
        <ul>
          <li>English: Proficient (conversational, reading, and writing)</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
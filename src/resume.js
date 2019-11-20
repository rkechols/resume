import React from 'react'

const email = 'rkechols21@gmail.com'
const fullName = 'Ryan Echols'
const gitHubUsername = 'rkechols'
const linkedInURL = 'ryan-echols-750'
const majorAndMinors = 'BA in Linguistics, minors in Computer Science and Mathematics'
const gpa = '3.65'

// JSX is supported in most places in this template in place of strings
const resume = {
  header: {
    name: fullName,
    links: [
      {
        href: `mailto:${email}`,
        icon: 'far fa-envelope',
        text: email,
      },
      {
        href: `https://github.com/${gitHubUsername}`,
        icon: 'fab fa-github',
        text: `github.com/${gitHubUsername}`,
      },
      {
        href: `https://linkedin.com/in/${linkedInURL}`,
        icon: 'fab fa-linkedin',
        text: `linkedin.com/in/${linkedInURL}`,
      },
    ],
  },
  summary: [
    'Seeking {job type} position as a {position type} starting {month} {year}',
    `Graduating December 2021 with a ${majorAndMinors}`,
    '6 years of programming experience',
    '{current position} at {current company}',
    'Skills: C++, Java, Python, Git, Advanced Mathematics',
	'Foreign Languages: Serbian, Bosnian, Croatian, Slovene, Spanish'
  ],
  sections: [
    {
      title: 'Education',
      subsections: [
        {
          title: <a href="{university homepage}" target="_blank" rel="noopener noreferrer">{'Brigham Young University'}</a>,
          subtitle: 'Senior - Expected Graduation Date: December 2021',
          details: [
            majorAndMinors,
            `Current GPA: ${gpa}`,
            'Completed Coursework: {class names of most notable classes}',
            'Activities: {club or other involvement}'
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
        {
          title: <a href="factory.hr" target="_blank" rel="noopener noreferrer">{'Plava tvornica ("Blue Factory") - Osijek, Croatia'}</a>,
          subtitle: 'Android Development Intern - May 2019 to July 2019',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
		{
          title: <a href="{company homepage}" target="_blank" rel="noopener noreferrer">{'company name'}</a>,
          subtitle: '{position} - {start date} to {end date}',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: <a href="{organization homepage}" target="_blank" rel="noopener noreferrer">{'organization name'}</a>,
          subtitle: '{position} - {start date} to {end date}',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
          ]
        },
      ]
    }
  ]
}

export default resume
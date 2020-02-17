import React from 'react'

const email = 'rkechols21@gmail.com'
const fullName = 'Ryan Echols'
const gitHubUsername = 'rkechols'
const linkedInURL = 'ryan-echols-750'
const bitbucketUsername = 'echols14'
const majorAndMinors = 'BA in Linguistics, minors in Computer Science and Mathematics'
const gpa = '3.66'
const currentYear = 2020
const startedProgrammingYear = 2013

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
        href: `https://bitbucket.org/${bitbucketUsername}/profile/repositories`,
        icon: 'fab fa-bitbucket',
        text: `bitbucket.org/${bitbucketUsername}/profile/repositories`,
      },
      {
        href: `https://linkedin.com/in/${linkedInURL}`,
        icon: 'fab fa-linkedin',
        text: `linkedin.com/in/${linkedInURL}`,
      },
    ],
  },
  summary: [
    'Seeking summer internship in machine learning or computational linguistics starting May 2020',
    `Graduating December 2021 with a ${majorAndMinors}`,
    `${currentYear - startedProgrammingYear} years of programming experience`,
    'Computer Programmer at BYU Office of Digital Humanities',
  ],
  sections: [
	{
      title: 'Skills',
      subsections: [
        {
          details: [
			'Computer Science: Java, C++, Python, Kotlin, Android, Git, command-line',
            'Advanced Foreign Languages: Serbian, Bosnian, Croatian, Slovene',
			'Novice Foreign Languages: Spanish, German, Russian',
			'Advanced Mathematics: Linear Algebra, Mutlivariable Calculus, Ordinary Differential Equations'
          ]
        }
      ]
    },
    {
      title: 'Education',
      subsections: [
        {
          title: 'Brigham Young University',
          subtitle: 'Senior - Expected Graduation Date: December 2021',
          details: [
            majorAndMinors,
            `Current GPA: ${gpa}`,
            'Completed Coursework: Structure in Language, Sounds in Language, Intro to Computational Theory, \
			Principles of Statistics, Advanced Programming Concepts, Algorithm Design and Optimization, Discrete Structure, Linear Algebra, Calculus',
            'Extracurricular : Association for Computing Machinery, BYU Student Association, Celtic Folk Ensemble, Country Dance Club'
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
		{
          title: 'NLP Computer Programmer',
          subtitle: 'BYU Office of Digital Humanities - March 2019 to present',
          details: [
            'Implement models to analyze and categorize Russian text',
            'Maintain functioning multi-branch Git repository with multiple developers',
          ]
        },
		{
          title: 'Teaching Assistant',
          subtitle: 'BYU Department of Computer Science - September 2015 to present',
          details: [
            'Instruct 300+ students each semester in principles of coding and computation',
            'Guide students to good coding practices and develop debugging skills',
          ]
        },
        {
          title: 'Android Development Intern',
		  subtitle: <a href="https://factory.hr/" target="_blank" rel="noopener noreferrer">{'Plava tvornica ("Blue Factory") - Osijek, Croatia - May 2019 to July 2019'}</a>,
          details: [
            'Created 5 functioning mobile applications for Android while self-directed',
            'Adapted mobile applications to be displayed in 3+ languages each',
          ]
        },
		{
          title: 'Research Assistant',
          subtitle: 'BYU Department of Mathematics - February 2015 to April 2016',
          details: [
            'Converted mathematical algorithms from theory to Python code',
            'Extracted and processed data for analysis and visualization to be presented weekly',
          ]
        },
      ]
    },
	{
      title: 'Projects',
      subsections: [
        {
          title: 'Neural Network Java Library',
          details: [
            'Created a generic Java library for simple Neural Networks, all from the ground up',
			'Incorporated stochastic gradient descent and multi-threading for efficiency',
			'Tested the library on the MNIST dataset, achieving 94.5% accuracy before deliberate adjustment'
          ]
        },
		{
          title: 'Language Imitator',
          details: [
            'Designed and implemented a language imitator based on character transitions, using Markov Chains',
          ]
        }
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: 'Full-time Volunteer',
          subtitle: 'The Church of Jesus Christ of Latter-day Saints in Serbia, Slovenia, Bosnia & Herzegovina - August 2016 to August 2018',
          details: [
            'Served as an administrative clerk over church records in 5 countries',
			'Supervised 3 of the church’s official Facebook pages',
			'Written and spoken translation and interpretation in Serbian, Bosnian, Croatian, and Slovene'
          ]
        },
      ]
    }
  ]
}

export default resume
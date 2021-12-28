import React from 'react'

const email = 'rkechols21@gmail.com'
const fullName = 'Ryan Echols'
const gitHubUsername = 'rkechols'
const linkedInURL = 'ryan-echols-750'
const bitbucketUsername = 'echols14'
const majorAndMinors = 'BA in Linguistics, minors in Computer Science and Mathematics'
const gpa = '3.73'
const currentYear = 2022
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
    `Graduated December 2021 with a ${majorAndMinors}`,
    `${currentYear - startedProgrammingYear} years of programming experience`,
	'Data Scientist specializing in Natural Language Processing (NLP) and Deep Learning',
  ],
  sections: [
	{
      title: 'Skills',
      subsections: [
        {
          details: [
			'Computer Science: Python, Java, C++, Git, Command-line, PyTorch, SQL, Docker, AWS, Kotlin, Android, Firebase',
            'Advanced Foreign Languages: Serbian, Bosnian, Croatian, Slovene',
			'Novice Foreign Languages: Spanish, German, Russian',
			'Advanced Mathematics: Linear Algebra, Multivariable Calculus, Ordinary Differential Equations, Statistics'
          ]
        }
      ]
    },
    {
      title: 'Education',
      subsections: [
        {
          title: 'Brigham Young University',
          subtitle: 'Graduated December 2021',
          details: [
            majorAndMinors,
            `GPA: ${gpa}`,
            'Completed Coursework: Deep Learning, NLP, NLP for low-resource languages, Intro to Computational Theory, Advanced Programming Concepts, Algorithm Design and Optimization, Data Structures, Morphology, Syntax, Semantics, Phonetics and Phonology, Historical Linguistics, Principles of Statistics, Ordinary Differential Equations, Linear Algebra, Calculus',
            'Extracurricular: BYU Competitive Programming team, Association for Computing Machinery, BYU Student Association, Celtic Folk Ensemble, Country Dance Club'
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
	    {
          title: 'Data Scientist',
          subtitle: 'Aktify - September 2021 to present',
          details: [
			'Research and test accuracy of models for entity recognition (NER/DER)',
			'Ensure selected solutions are feasible considering model size, quantity of training data needed, etc.'
          ]
        },
		{
          title: 'Data Science Intern',
          subtitle: 'Codazen - May 2021 to August 2021',
          details: [
			'Researched, summarized, and reported on data-based solutions to unsolved problems',
            'Designed, implemented, and trained custom deep learning models using PyTorch',
			'Deployed APIs and web apps using Dash, Flask, Docker, and AWS',
          ]
        },
		{
          title: 'Research Assistant - Computer Vision',
          subtitle: 'BYU Department of Computer Science - May 2020 to April 2021',
          details: [
			'Constructed, trained, and utilized deep neural networks using PyTorch for various tasks in Computer Vision',
            'Investigated and developed algorithms for Computational Jigsaw Puzzle Solving using Python',
          ]
        },
		{
          title: 'Teaching Assistant - Advanced Deep Learning, Discrete Structure, Data Structures, Intro to Computer Programming',
          subtitle: 'BYU Department of Computer Science - September 2015 to April 2021',
          details: [
            'Taught principles of coding and computation to students of various skill levels',
            'Guided students to develop good coding practices and debugging skills'
          ]
        },
		{
          title: 'Head Teaching Assistant - Discrete Structure',
          subtitle: 'BYU Department of Computer Science - May 2020 to December 2020',
          details: [
			'Trained 10 to 15 other teaching assistants how to effectively help students whether in-person or through digital communication',
			'Developed procedures to ensure privacy and consistency in interactions between students and teaching assistants',
			'Created an automated interface for students to submit coding projects, allowing 100+ teaching assistant work hours each pay period of rote tasks to be reallocated to helping students',
			'Coordinated grading for 300+ students\' exams and homework assignments'
          ]
        },
		{
          title: 'Computer Programmer - Natural Language Processing (NLP)',
          subtitle: 'BYU Office of Digital Humanities - March 2019 to August 2020',
          details: [
            'Implemented models to analyze and categorize Russian text using Java',
			'Developed systems for large-scale linguistic analyses of historical documents using Python',
          ]
        },
        {
          title: 'Android Development Intern',
		  subtitle: <a href="https://factory.hr/" target="_blank" rel="noopener noreferrer">{'Plava tvornica ("Blue Factory") - Osijek, Croatia - May 2019 to July 2019'}</a>,
          details: [
            'Created 5 functioning mobile applications for Android while self-directed, using both Java and Kotlin',
            'Adapted mobile applications to be displayed in 3+ languages each',
          ]
        },
		{
          title: 'Research Assistant - Mathematics',
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
		  title: <a href="https://github.com/rkechols/post-OCR-corrector" target="_blank" rel="noopener noreferrer">{'Serbian Text Corrector'}</a>,
		  details: [
			'Trained a character-level transformer architecture to correct mistakes in Serbian text',
			'Generated custom training data from an existing Serbian corpus'
		  ]
		},
		{
          title: <a href="https://github.com/rkechols/sequence-nn" target="_blank" rel="noopener noreferrer">{'\'Sequence\' Agent'}</a>,
          details: [
            'Used deep reinforcement learning (DRL) to train an agent to play the game \'Sequence\'',
			'Created custom deep neural network (DNN) topologies and one-hot encoding schemes for better performance',
			'Implemented proximal policy optimization (PPO) and multi-headed self-attention in PyTorch'
          ]
        },
        {
          title: <a href="https://bitbucket.org/echols14/neural-network/src/master/" target="_blank" rel="noopener noreferrer">{'\'From-scratch\' Neural Network Java Library'}</a>,
          details: [
            'Created a generic Java library for simple feed-forward Neural Networks, from the ground up',
			'Researched mathematics behind back-propagation and re-implemented from scratch',
			'Tested the library on the MNIST dataset, achieving 94.5% accuracy before deliberate adjustment'
          ]
        },
		{
          title: <a href="https://bitbucket.org/echols14/language-imitator/src/master/" target="_blank" rel="noopener noreferrer">{'Language Imitator'}</a>,
          details: [
            'Designed and implemented a generative language model (\'language imitator\') based on character-level n-grams',
			'Collected plain-text unstructured training corpora of various languages',
          ]
        }
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: 'Tutor - Mathematics and Computer Science',
		  subtitle: 'Freelance - August 2018 to present',
          details: [
            'Give 1-3 hours per week helping fellow students that need more focused, personalized instruction',
			'Teach a range of topics including statistics, calculus, Android development, data structures, algorithms'
          ]
        },
		{
          title: 'Peer Mentor for New Students',
		  subtitle: 'BYU Foundations Conference and New Student Orientation - September 2015, 2019, 2020, 2021',
          details: [
            'Supervised 10-15 new students during a three-day conference',
			'Answered questions and inspired students to be excited about their university experience',
			'Guided campus tours, organized group communication, and led group activities for 30-40 new students'
          ]
        },
		{
          title: 'Full-time Volunteer',
          subtitle: 'The Church of Jesus Christ of Latter-day Saints in Serbia, Slovenia, Bosnia & Herzegovina - August 2016 to August 2018',
          details: [
            'Served as an administrative clerk over church records in 5 countries',
			'Supervised 3 of the church’s official Facebook pages',
			'Written and spoken translation and interpretation in Serbian, Bosnian, Croatian, and Slovene'
          ]
        }
      ]
    }
  ]
}

export default resume
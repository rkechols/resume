import React from 'react'

const email = 'ryan@shadylakemedia.com'
const fullName = 'Ryan Echols'
const gitHubUsername = 'rkechols'
const linkedInURL = 'ryan-echols-750'
const bitbucketUsername = 'echols14'
const majorAndMinors = 'BA in Linguistics, minors in Computer Science and Mathematics'
const gpa = '3.73'
const currentYear = 2023
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
    'Machine Learning Engineer specializing in Natural Language Processing (NLP) and Deep Learning',
	`Graduated December 2021 with a ${majorAndMinors}`,
    `${currentYear - startedProgrammingYear} years of programming experience`,
  ],
  sections: [
	{
      title: 'Skills',
      subsections: [
        {
          details: [
			'Computer Programming: Python, Git, Docker, PyTorch, SQL, functional programming, AWS, GCP, Terraform, Java, C++',
            'Advanced Mathematics: Linear Algebra, Multivariable Calculus, Ordinary Differential Equations, Statistics',
			'Advanced Foreign Languages: Serbian, Bosnian, Croatian, Slovene',
			'Novice Foreign Languages: Spanish, German, Russian',
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
		{
          title: 'Software Developer - Python',
          subtitle: 'Solo - September 2022 to present',
          details: [
			'Introduce and implement MLOps processes, reducing manual processes and improving auditability',
			'Lead the development of new ML models for image processing, from inception to live deployment',
			'Refactor burdensome "monolith" service into agile event-driven microservice architecture',
			'Establish use of a company private Python package index, reducing code duplication across 10+ repositories',
          ]
        },
	    {
          title: 'Data Scientist',
          subtitle: 'Aktify - September 2021 to September 2022',
          details: [
			'Established pipelines for training and deploying various machine learning models in an automated and auditable manner',
			'Designed and provisioned AWS infrastructure for managing and serving 300+ models with high availability',
			'Implemented text embedding store and vector search index, including ingress pipeline and search UI',
			//'Developed custom UI for label collection and verification',
			//'Planned and led restructuring of code repositories to reduce code duplication and better enable CI/CD',
			//'Managed organization of data science team\'s task-tickets in ClickUp (project management software)',
          ]
        },
		{
          title: 'Data Science Intern',
          subtitle: 'Codazen - May 2021 to August 2021',
          details: [
			'Researched, summarized, and reported on data-based solutions to unsolved problems',
            'Designed and implemented custom deep learning models using PyTorch, including complex training algorithms for semi-supervised learning, similar to GANs and SimCLR',
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
		/*
		{
          title: 'Teaching Assistant - Advanced Deep Learning, Discrete Structure, etc.',
          subtitle: 'BYU Department of Computer Science - September 2015 to April 2021',
          details: [
            'Guided students to develop good coding practices and debugging skills'
          ]
        },
		*/
		{
          title: 'Teaching Assistant & Head Teaching Assistant - Advanced Deep Learning, Discrete Structure, etc.',
          subtitle: 'BYU Department of Computer Science - September 2015 to April 2021',
          details: [
			'Created an automated web interface for students to submit coding projects, allowing 100+ teaching assistant work hours each pay period of rote tasks to be reallocated to helping students',
			'Trained 10 to 15 other teaching assistants how to effectively help students, and ensure privacy and consistency in interactions between students and teaching assistants',
            'Taught principles of coding, computation, and debugging to students of various skill levels',
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
        /*
		{
          title: 'Android Development Intern',
		  subtitle: <a href="https://factory.hr/" target="_blank" rel="noopener noreferrer">{'Plava tvornica ("Blue Factory") - Osijek, Croatia - May 2019 to July 2019'}</a>,
          details: [
            'Created 5 functioning mobile applications for Android while self-directed, using both Java and Kotlin',
            'Adapted mobile applications to be displayed in 3+ languages each',
          ]
        },
		*/
		{
          title: 'Research Assistant - Mathematics',
          subtitle: 'BYU Department of Mathematics - February 2015 to April 2016',
          details: [
            'Converted mathematical tree decomposition algorithms from theory to Python code',
            'Extracted and processed data for analysis and visualization to be presented weekly',
          ]
        },
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
            'Completed Coursework: Advanced Deep Learning, NLP, NLP for low-resource languages, Intro to Computational Theory, Algorithm Design and Optimization, Data Structures, Historical Linguistics, Phonetics and Phonology, Morphology, Syntax, Semantics, Principles of Statistics, Ordinary Differential Equations, Linear Algebra, Calculus',
            'Extracurricular: BYU Competitive Programming team, Association for Computing Machinery, BYU Student Association',
          ]
        }
      ]
    },
	{
      title: 'Projects',
      subsections: [
		{
		  title: <a href="https://github.com/rkechols/post-OCR-corrector" target="_blank" rel="noopener noreferrer">{'Serbian Text Corrector'}</a>,
		  details: [
			'Trained a character-level transformer architecture to correct mistakes in Serbian text',
			'Generated custom training data from an existing Serbian corpus',
		  ]
		},
		{
          title: <a href="https://github.com/rkechols/sequence-nn" target="_blank" rel="noopener noreferrer">{'\'Sequence\' Agent'}</a>,
          details: [
            'Used deep reinforcement learning (DRL) to train an agent to play the game \'Sequence\'',
			'Created custom deep neural network (DNN) topologies and one-hot encoding schemes for better performance',
			'Implemented proximal policy optimization (PPO) and multi-headed self-attention in PyTorch',
          ]
        },
        {
          title: <a href="https://bitbucket.org/echols14/neural-network/src/master/" target="_blank" rel="noopener noreferrer">{'\'From-scratch\' Neural Network Java Library'}</a>,
          details: [
            'Created a generic Java library for simple feed-forward Neural Networks, from the ground up',
			'Researched mathematics behind back-propagation and re-implemented from scratch',
			'Tested the library on the MNIST dataset, achieving 94.5% accuracy before deliberate adjustment',
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
		  subtitle: 'Freelance - August 2018 to December 2021',
          details: [
            'Gave 1-3 hours per week helping fellow students that need more focused, personalized instruction',
			'Taught a range of topics including statistics, calculus, Android development, data structures, algorithms',
          ]
        },
		{
          title: 'Peer Mentor for New Students',
		  subtitle: 'BYU Foundations Conference and New Student Orientation - September 2015, 2019, 2020, 2021',
          details: [
            'Supervised 10-15 new students during a three-day conference',
			'Answered questions and inspired students to be excited about their university experience',
			'Guided campus tours, organized group communication, and led group activities for 30-40 new students',
          ]
        },
		{
          title: 'Full-time Volunteer',
          subtitle: 'The Church of Jesus Christ of Latter-day Saints in Serbia, Slovenia, Bosnia & Herzegovina - August 2016 to August 2018',
          details: [
            'Served as an administrative clerk over church records in 5 countries',
			'Supervised 3 of the church’s official Facebook pages',
			'Written and spoken translation and interpretation in Serbian, Bosnian, Croatian, and Slovene',
          ]
        }
      ]
    }
  ]
}

export default resume

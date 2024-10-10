import React, { useState, useRef } from 'react';
import { Tab, Tabs, Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const projectsData = {
    Fullstack: [
      {
        title: 'Uber Clone',
        points: [
          'Real-time location tracking and mapping',
          'User authentication with email verification',
          'Ride request and matching system',
          'Rating and feedback system',
          'Admin dashboard for monitoring rides'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      },
      {
        title: 'Airbnb Clone',
        points: [
          'Property listings with advanced search filters',
          'User profiles with booking history',
          'Review system for hosts and guests',
          'Messaging system for user communication',
          'Payment gateway integration'
        ],
        technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
      },
      {
        title: 'Spotify Clone',
        points: [
          'Music streaming with playlist creation',
          'User authentication and profile management',
          'Recommendations based on user preferences',
          'Search functionality for songs and artists',
          'Real-time updates for playlists'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Web Audio API'],
      },
      {
        title: 'Todoist Clone',
        points: [
          'Task management with due dates and reminders',
          'Collaboration features for team tasks',
          'Labels and filters for organizing tasks',
          'User authentication with secure login',
          'Responsive design for mobile and desktop'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      },
      {
        title: 'Instagram Clone',
        points: [
          'User profiles with photo uploads and likes',
          'Follow/unfollow system',
          'Stories feature for temporary content',
          'Commenting and direct messaging functionality',
          'Explore page for discovering new content'
        ],
        technologies: ['React', 'Express', 'MongoDB', 'Cloudinary'],
      },
    ],
    Python: [
      {
        title: 'Flask Blog',
        points: [
          'User registration and authentication',
          'CRUD operations for blog posts',
          'Commenting system for posts',
          'Tagging and categorization of posts',
          'Admin panel for managing users and posts'
        ],
        technologies: ['Flask', 'SQLAlchemy', 'SQLite'],
      },
      {
        title: 'Django E-commerce Site',
        points: [
          'Product catalog with filtering options',
          'User accounts with order history',
          'Shopping cart functionality',
          'Payment processing integration',
          'Admin dashboard for managing products and orders'
        ],
        technologies: ['Django', 'PostgreSQL', 'Stripe'],
      },
      {
        title: 'Social Media Dashboard',
        points: [
          'User authentication with OAuth',
          'Aggregated feeds from multiple platforms',
          'Post scheduling and analytics',
          'User interactions (likes, shares, comments)',
          'Admin interface for managing user accounts'
        ],
        technologies: ['Flask', 'PostgreSQL', 'Celery'],
      },
      {
        title: 'Data Analysis App',
        points: [
          'Upload and process CSV files for analysis',
          'Interactive data visualization (charts and graphs)',
          'Export analysis results in various formats',
          'User authentication for data privacy',
          'Dashboard for viewing analytics'
        ],
        technologies: ['Flask', 'Pandas', 'Plotly'],
      },
      {
        title: 'Chat Application',
        points: [
          'Real-time messaging using WebSockets',
          'User authentication and chat history',
          'Private and group chat functionalities',
          'File sharing capabilities',
          'User status indicators (online/offline)'
        ],
        technologies: ['Flask', 'Socket.IO', 'MongoDB'],
      },
    ],
    Java: [
      {
        title: 'Spring Boot API for E-commerce',
        points: [
          'RESTful API for product management',
          'User authentication and authorization',
          'Order processing and inventory management',
          'Search functionality for products',
          'Integration with third-party payment gateways'
        ],
        technologies: ['Spring Boot', 'Hibernate', 'MySQL'],
      },
      {
        title: 'JavaFX Desktop Application',
        points: [
          'Interactive GUI for a personal finance tracker',
          'Data visualization for expense tracking',
          'User authentication and session management',
          'Import/export functionalities for reports',
          'User-friendly interface with charts'
        ],
        technologies: ['JavaFX', 'MySQL'],
      },
      {
        title: 'Library Management System',
        points: [
          'Book catalog with search functionality',
          'User authentication for library members',
          'Borrowing and returning books',
          'Admin panel for managing users and books',
          'Reports for borrowing statistics'
        ],
        technologies: ['Spring Boot', 'Thymeleaf', 'PostgreSQL'],
      },
      {
        title: 'Online Quiz Application',
        points: [
          'User registration and quiz participation',
          'Timed quizzes with scoring system',
          'Admin panel for creating and managing quizzes',
          'Leaderboard for top performers',
          'Analytics for quiz results'
        ],
        technologies: ['Spring Boot', 'Hibernate', 'MySQL'],
      },
      {
        title: 'Expense Tracker',
        points: [
          'User authentication and secure data storage',
          'Income and expense tracking',
          'Visual reports for financial overview',
          'Monthly budgeting tools',
          'Export data to CSV'
        ],
        technologies: ['Spring Boot', 'Thymeleaf', 'H2 Database'],
      },
    ],
    MERN: [
      {
        title: 'MERN E-commerce Platform',
        points: [
          'Product listings with filters',
          'User authentication and profiles',
          'Shopping cart and checkout process',
          'Payment gateway integration',
          'Admin dashboard for managing products'
        ],
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      },
      {
        title: 'Social Media App',
        points: [
          'User profiles and friend requests',
          'Post creation and commenting',
          'Real-time notifications',
          'Chat functionality',
          'Content discovery through hashtags'
        ],
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      },
      {
        title: 'Real-time Collaboration Tool',
        points: [
          'User authentication and profile management',
          'Document editing with real-time updates',
          'Commenting and version control',
          'File sharing capabilities',
          'Team collaboration features'
        ],
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      },
      {
        title: 'Event Management System',
        points: [
          'User registration and event creation',
          'RSVP functionality for events',
          'Calendar view for upcoming events',
          'Notifications for event updates',
          'Admin panel for managing events'
        ],
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      },
      {
        title: 'Fitness Tracker App',
        points: [
          'User profiles with workout tracking',
          'Nutrition logging features',
          'Integration with fitness APIs',
          'Community features for sharing progress',
          'Goals and achievements tracking'
        ],
        technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      },
    ],
  };
  

const Projects = () => {
  const [key, setKey] = useState('Fullstack');
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="container-fluid p-3 p-md-5 bg-light mt-5 projects">
       <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
            <h1 className='fs-4'>Industry-Relevant Projects</h1>
            <div className="v-line"></div>
            <div className="icon mb-3"><i class="bi bi-building-check text-light"></i></div>
            <h1 className="fs-3 fw-bold text-main">Projects</h1>
        </div>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        {Object.keys(projectsData).map((category) => (
          <Tab eventKey={category} title={category} key={category}>
            <Carousel ref={carouselRef} className='secondary-bg'>
              {projectsData[category].map((project, index) => (
                <Carousel.Item key={index}>
                  <Card className="project-card">
                    <Card.Body>
                      <Card.Title className='fw-bold'>{project.title}</Card.Title>
                      <Card.Text>
                        <ul>
                          {project.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <strong>Technologies Used:</strong><br />
                     <div className="d-flex flex-wrap gap-2 mt-3">
                     {
                        project.technologies.map((item, index)=>(
                            <button className="tech-btn">{item}</button>
                        ))
                       }
                     </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="text-center d-block d-md-none">
              <Button variant="secondary" onClick={handlePrev} className="me-2">
                &lt; Previous
              </Button>
              <Button variant="secondary" onClick={handleNext}>
                Next &gt;
              </Button>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Projects;

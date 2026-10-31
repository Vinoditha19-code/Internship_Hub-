🎯 Internship_Hub

A full-stack career development and recruitment platform designed to connect students with employment opportunities and help employers discover potential candidates. Students can create professional profiles, explore suitable jobs, and connect with others, while employers can publish vacancies and manage applications. 
Administrators oversee platform activities and maintain a secure environment.

The system combines job recruitment, intelligent skill-based job recommendations, CV evaluation, and professional networking in a modern and visually appealing interface called Aurora Glow.

📑 Table of Contents

1. Features
2. Technology Stack
3. Project Structure
4. Getting Started
5. Database Configuration 
6. Environment Configuration
7. Administrator Account
8. Sample Data
9. User Roles and Permissions
10. API Endpoints Overview
11. Application Screenshots
12. Author and License


🚀 Features
Core Functionalities
  🔐 User Authentication: Supports user registration and login with JWT authentication, bcrypt password encryption, and role-based permissions for students, employers, and administrators.
  💼 Job Management: Employers can publish vacancies, while administrators review and approve job listings. Students can explore, search, bookmark, and apply for available positions.
  🧠 Intelligent Job Recommendations: Evaluates students' skills and experience against job requirements to recommend relevant opportunities.
  📄 CV Analysis: Allows students to upload their resumes for automated information extraction, skill evaluation, and analysis history.

Professional Networking Features
  👤 Professional Profiles: Users can create detailed profiles containing personal summaries, professional headlines, locations, and availability for employment.
  🗂️ Education and Experience: Add and manage multiple academic qualifications and work experience records.
  🤝 Connection Management: Send and accept connection requests, discover suggested users, and expand professional networks.
  📰 Social Activity Feed: Share posts, interact with other users through likes, and participate in discussions using comments.
  👍 Skill Endorsements: Allow connected users to recognize and endorse skills displayed on professional profiles.

Dashboards and Analytics
  🏠 Personalized Home Feed: Displays relevant activities and visual insights, including job-matching and recruitment statistics.
  🏢 Employer Dashboard: Provides an overview of published jobs, applicant information, and recruitment progress.
  🛡️ Administrator Dashboard: Enables administrators to monitor platform statistics, manage users, and control job approval activities.

User Experience and Security
  🎨 Modern Interface: Features a consistent Aurora Glow design with gradient backgrounds, glassmorphism effects, and Clash Display and Satoshi typography.
  🔔 Instant Notifications: Displays toast messages to inform users about important actions and updates.
  🔒 Enhanced Security: Implements Helmet security headers, request rate limiting, input validation, and CORS restrictions.
  🧭 Smooth Navigation: Uses client-side routing to provide convenient navigation between application pages.

🛠️ Technology Stack

|----------------------|--------------------------------------------------------------------------------------------------|
| Layer                |                                 Technologies                                                     |
|----------------------|--------------------------------------------------------------------------------------------------|
|  Frontend            |       React 18, Vite, React Router, Tailwind CSS, Lucide React, Recharts, React Hot Toast, Axios |
|  Backend             |       Node.js, Express.js, JWT, bcrypt, Multer, Helmet, express-rate-limit                       |
|  Database            |       Supabase (PostgreSQL) using @supabase/supabase-js                                          |
|  Development Tools   |        Git, GitHub, Nodemon                                                                      |
|----------------------|--------------------------------------------------------------------------------------------------|

internshipProject-main/
│
├── frontend_final_fixed_from_upload/
│   └── src/
│       ├── api/             # API configuration and Axios helpers
│       ├── components/      # Reusable UI components
│       ├── context/         # Authentication and application state
│       ├── pages/           # Application pages and dashboards
│       └── styles.css       # Global styles and theme
│
├── backend_final_real/
│   ├── config/              # Database configuration
│   ├── controllers/         # Application business logic
│   ├── middleware/          # Authentication and authorization
│   ├── routes/              # REST API route definitions
│   ├── utils/               # Validation and helper functions
│   ├── supabase_schema.sql  # Main database schema
│   ├── social_schema.sql    # Social networking database schema
│   ├── seedAdmin.js         # Administrator account creation
│   └── seedDemo.js          # Sample data generation
│
└── README.md

⚡ Getting Started

Prerequisites
  Make sure the following tools and services are available:
  Node.js version 18 or later
  npm (Node Package Manager)
  A Supabase account and project
  Git

Installation and Execution
  Step 1: Clone the repository
    git clone https://github.com/Thaksigan23/career-guidance-system.git
    cd career-guidance-system
    
  Step 2: Configure the backend
    cd backend_final_real
    npm install

   Create a .env file and configure the required environment variables.
   Start the backend server:
      npm run dev
   The backend API will be available at http://localhost:5000.

  Step 3: Start the frontend
  Open another terminal:
    cd frontend_final_fixed_from_upload
    npm install
    npm run dev

The frontend application will run at http://localhost:5173.
Complete the database configuration and administrator setup before logging in.

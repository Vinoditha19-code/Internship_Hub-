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


| Layer                |                                 Technologies                                                     |

|  Frontend            |       React 18, Vite, React Router, Tailwind CSS, Lucide React, Recharts, React Hot Toast, Axios |
|  Backend             |       Node.js, Express.js, JWT, bcrypt, Multer, Helmet, express-rate-limit                       |
|  Database            |       Supabase (PostgreSQL) using @supabase/supabase-js                                          |
|  Development Tools   |        Git, GitHub, Nodemon                                                                      |


<img width="657" height="531" alt="Screenshot 2026-10-31 132552" src="https://github.com/user-attachments/assets/3b640ac6-bc0d-458c-b7c3-159b4755cd34" />



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

🗄️ Database Configuration (Supabase)
      Register for an account at Supabase.
      Create a new Supabase project.
      Navigate to the SQL Editor.
      Execute the following SQL files in the specified order:
      backend_final_real/supabase_schema.sql – Creates the main application tables, including users, jobs, and applications.
      backend_final_real/social_schema.sql – Creates additional tables for connections, posts, likes, comments, endorsements, education, and experience records.
      Navigate to Project Settings → API.
      Copy the project URL and service role key for backend configuration.
      Security Note: The Supabase service role key provides privileged database access. Store it securely in the backend environment file. Never expose it through frontend code or upload it to GitHub.

🔑 Environment Configuration

Create a .env file inside the backend_final_real directory.
Example configuration:

  # Supabase Database
  SUPABASE_URL=https://your-project-ref.supabase.co
  SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
  
  # Authentication
  JWT_SECRET=your-secure-random-secret
  
  # Backend Server
  PORT=5000
  CORS_ORIGINS=http://localhost:5173,http://localhost:5174
  
  # Email Configuration (Optional)
  EMAIL_USER=your@gmail.com
  EMAIL_PASS=your-app-password

If the backend API uses a different address, configure VITE_API_BASE_URL in the frontend environment file. The default API address is http://localhost:5000/api.

👑 Administrator Account

Administrator registration is handled separately from normal user registration. The public registration process is limited to student and employer accounts.

Default Administrator Credentials
Field                                        Details
Email                                        admin@careerguide.com
Password                                     Admin@123

 Creating the Administrator Account

  Run the following commands from the backend directory:
    npm run seed:admin
  
  To configure custom administrator credentials:
  Windows PowerShell:
    $env:ADMIN_EMAIL="you@example.com"; $env:ADMIN_PASSWORD="YourStrongPass"; npm run seed:admin
  
  Linux / macOS:
    ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=YourStrongPass npm run seed:admin
  
  For security, replace the default password after the first login. Running the administrator seed command again resets the account password to the configured default or custom value.

  🌱 Sample Data

The application includes a demo-data generation script that populates the database with example users, job vacancies, applications, professional profiles, and networking activities.

Run:
  npm run seed:demo


👥 User Roles and Permissions
  The platform provides three different account types, each with specific functionalities.

|------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|    User Role     |                                                          Available Functionalities                                                       |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|    Student       | Create professional profiles, search and save jobs, submit applications, receive job recommendations, analyse CVs, publish posts,        |
|                  | and connect with other users.                                                                                                            |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|    Employer      | Create and manage job advertisements, review applicants, communicate with candidates, maintain company profiles,                         |
|                  |   and participate in professional networking.                                                                                            |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|   Administrator  | Approve or reject job advertisements, manage platform users, block or remove accounts, and monitor overall system statistics.            |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------|

After authentication, students and employers are directed to the home feed, whereas administrators are taken to the administration dashboard.



  

# 🎯 Internship_Hub – Career Development and Recruitment Platform

Internship_Hub is a full-stack career development and recruitment platform designed to connect students with employment opportunities and help employers discover potential candidates.

Students can create professional profiles, explore suitable jobs, apply for vacancies, and connect with other professionals. Employers can publish job opportunities and manage applications, while administrators oversee platform activities and maintain a secure environment.

The system combines job recruitment, intelligent skill-based job recommendations, CV evaluation, and professional networking in a modern and visually appealing interface called **Aurora Glow**.

---

## 📑 Table of Contents

1. Features
2. Technology Stack
3. Getting Started
4. Database Configuration
5. Environment Configuration
6. Administrator Account
7. Sample Data
8. User Roles and Permissions
9. API Endpoints Overview
10. Application Screenshots
11. Author and License

---

## 🚀 Features

### 1. Core Functionalities

- **User Authentication**
  - User registration and login.
  - JWT-based authentication.
  - Bcrypt password encryption.
  - Role-based permissions for students, employers, and administrators.

- **Job Management**
  - Employers can publish job vacancies.
  - Administrators can review and approve job listings.
  - Students can explore and search for available positions.
  - Bookmark interesting job opportunities.
  - Submit job applications.

- **Intelligent Job Recommendations**
  - Evaluate student skills and experience against job requirements.
  - Recommend relevant job opportunities based on skill matching.

- **CV Analysis**
  - Upload resumes for automated analysis.
  - Extract relevant information from CVs.
  - Evaluate skills and qualifications.
  - Maintain CV analysis history.

### 2. Professional Networking Features

- **Professional Profiles**
  - Create detailed professional profiles.
  - Add personal summaries and professional headlines.
  - Include locations and employment availability.

- **Education and Experience**
  - Add and manage multiple academic qualifications.
  - Maintain work experience records.

- **Connection Management**
  - Send and accept connection requests.
  - Discover suggested users.
  - Expand professional networks.

- **Social Activity Feed**
  - Create and share posts.
  - Interact with posts through likes.
  - Participate in discussions using comments.

- **Skill Endorsements**
  - Allow connected users to recognize and endorse skills displayed on professional profiles.

### 3. Dashboards and Analytics

- **Personalized Home Feed**
  - Display relevant activities and updates.
  - Provide visual insights into job matching and recruitment statistics.

- **Employer Dashboard**
  - View published job vacancies.
  - Monitor applicant information.
  - Track recruitment progress.

- **Administrator Dashboard**
  - Monitor overall platform statistics.
  - Manage registered users.
  - Review and control job approval activities.

### 4. User Experience and Security

- **Modern Interface**
  - Aurora Glow design.
  - Gradient backgrounds.
  - Glassmorphism effects.
  - Clash Display and Satoshi typography.

- **Instant Notifications**
  - Toast notifications for important actions and updates.

- **Enhanced Security**
  - Helmet security headers.
  - Request rate limiting.
  - Input validation.
  - CORS restrictions.

- **Smooth Navigation**
  - Client-side routing.
  - Convenient navigation between application pages.

---

## 🛠️ Technology Stack

### Frontend
- React 18
- Vite
- React Router
- Tailwind CSS
- Lucide React
- Recharts
- React Hot Toast
- Axios

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Multer
- Helmet
- Express Rate Limit

### Database
- Supabase
- PostgreSQL
- Supabase JavaScript Client (`@supabase/supabase-js`)

### Development Tools
- Git
- GitHub

---

## ⚡ Getting Started

### 1. Prerequisites

Make sure the following tools and services are installed or available:

- Node.js 18 or later
- npm (Node Package Manager)
- Supabase account and project
- Git

### 2. Installation and Execution

**Step 1: Clone the Repository**

```bash
git clone https://github.com/Thaksigan23/career-guidance-system.git
cd career-guidance-system
```

**Step 2: Configure the Backend**

Navigate to the backend directory:

```bash
cd backend_final_real
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file and configure the required environment variables.

Start the backend server:

```bash
npm run dev
```

Backend API URL:

`http://localhost:5000`

**Step 3: Start the Frontend**

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend_final_fixed_from_upload
```

Install the required dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Frontend URL:

`http://localhost:5173`

**Important:** Complete the database configuration and administrator account setup before logging in.

---

## 🗄️ Database Configuration (Supabase)

Follow these steps to configure the database:

1. Register for an account at [Supabase](https://supabase.com/).
2. Create a new Supabase project.
3. Navigate to the **SQL Editor**.
4. Execute the following SQL files in the specified order:

   **Database Schema Files**

   - `backend_final_real/supabase_schema.sql`
     - Creates the main application tables, including users, jobs, and applications.

   - `backend_final_real/social_schema.sql`
     - Creates additional tables for connections, posts, likes, comments, endorsements, education, and experience records.

5. Navigate to **Project Settings → API**.
6. Copy the project URL and service role key.
7. Add these values to the backend environment configuration.

**Security Note:**

The Supabase service role key provides privileged database access.

- Store it securely in the backend environment file.
- Never expose it through frontend code.
- Never upload it to GitHub.

---

## 🔑 Environment Configuration

Create a `.env` file inside the `backend_final_real` directory.

### Example Configuration

```env
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
```

**Frontend API Configuration**

If the backend API uses a different address, configure `VITE_API_BASE_URL` in the frontend environment file.

Default API address:

`http://localhost:5000/api`

---

## 👑 Administrator Account

Administrator registration is handled separately from normal user registration.

The public registration process is limited to:

- Student accounts.
- Employer accounts.

### Default Administrator Credentials

| Field | Details |
|---|---|
| Email | `admin@careerguide.com` |
| Password | `Admin@123` |

### Creating the Administrator Account

Run the following command from the backend directory:

```bash
npm run seed:admin
```

### Configure Custom Administrator Credentials

**Windows PowerShell:**

```powershell
$env:ADMIN_EMAIL="you@example.com"; $env:ADMIN_PASSWORD="YourStrongPass"; npm run seed:admin
```

**Linux / macOS:**

```bash
ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=YourStrongPass npm run seed:admin
```

**Security Notes:**

- Replace the default password after the first login.
- Running the administrator seed command again resets the account password to the configured default or custom value.
- Never commit real administrator credentials to GitHub.

---

## 🌱 Sample Data

The application includes a demo-data generation script that populates the database with example records.

The sample data includes:

- Demo user accounts.
- Job vacancies.
- Job applications.
- Professional profiles.
- Professional networking activities.

To generate the sample data, run:

```bash
npm run seed:demo
```

---

## 👥 User Roles and Permissions

The platform provides three different account types, each with specific functionalities.

### 1. Student
- Create and manage professional profiles.
- Search and bookmark job opportunities.
- Submit job applications.
- Receive intelligent job recommendations.
- Upload and analyse CVs.
- Publish posts and interact with other users.
- Send and manage connection requests.

### 2. Employer
- Create and manage job advertisements.
- Review job applicants.
- Communicate with candidates.
- Maintain company profiles.
- Participate in professional networking.

### 3. Administrator
- Approve or reject job advertisements.
- Manage platform users.
- Block or remove accounts.
- Monitor overall system statistics.
- Maintain platform security and administration.

### Role-Based Redirection

After successful authentication:

- Students are redirected to the home feed.
- Employers are redirected to the home feed.
- Administrators are redirected to the administration dashboard.

---

## 🔌 API Endpoints Overview

The backend provides API services to support authentication, recruitment, professional networking, and platform management.

---

## 🖥️ Application Screenshots

<!-- Replace the image URL below with your actual GitHub screenshot URL -->

![Internship Hub Application](https://github.com/user-attachments/assets/3b640ac6-bc0d-458c-b7c3-159b4755cd34)

---

## 👨‍💻 Author and License

**Project:** Internship_Hub – Career Development and Recruitment Platform

**Repository:** [Career Guidance System](https://github.com/Thaksigan23/career-guidance-system)

**License:** Refer to the repository for license information.

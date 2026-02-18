# EduConnect - Modern Educational Platform (Frontend Only)

A modern, responsive educational platform built with React.js, featuring role-based dashboards for Students, Teachers, and Admins.

## 🚀 Features

### Authentication (Frontend Simulation)
- Login & Registration with role selection
- Context API for state management
- Protected routes based on user roles
- Persistent authentication using localStorage

### Student Features
- Browse and enroll in courses
- View enrolled courses
- Access course details and assignments
- Track learning progress

### Teacher Features
- Create new courses
- Manage created courses
- View student enrollments
- Add assignments to courses

### Admin Features
- Manage all users
- View all courses
- Monitor platform statistics
- Delete users (UI only)

### UI/UX Features
- 🌙 Dark mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎨 Modern gradient designs
- 🔔 Toast notifications
- ⚡ Loading spinners
- 🎯 Card-based layouts

## 🛠 Tech Stack

- **React.js** - UI library
- **React Router DOM** - Routing
- **Context API** - State management
- **Tailwind CSS** - Styling
- **React Icons** - Icons
- **Vite** - Build tool

## 📦 Installation

1. **Clone or navigate to the project directory:**
```bash
cd educonnect
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and visit:**
```
http://localhost:5173
```

## 🔐 Demo Accounts

Use these credentials to test different roles:

**Student Account:**
- Email: `student@edu.com`
- Password: `123456`

**Teacher Account:**
- Email: `teacher@edu.com`
- Password: `123456`

**Admin Account:**
- Email: `admin@edu.com`
- Password: `123456`

## 📂 Project Structure

```
educonnect/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── CourseCard.jsx
│   │   ├── Loading.jsx
│   │   ├── Navbar.jsx
│   │   └── Toast.jsx
│   ├── context/            # Context providers
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/               # Mock data
│   │   ├── courses.js
│   │   ├── assignments.js
│   │   └── users.js
│   ├── layouts/            # Layout components
│   │   ├── MainLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── StudentCourses.jsx
│   │   ├── TeacherDashboard.jsx
│   │   ├── TeacherCourses.jsx
│   │   ├── CreateCourse.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminUsers.jsx
│   │   ├── AdminCourses.jsx
│   │   └── CourseDetails.jsx
│   ├── utils/              # Utility components
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Key Components

### Reusable Components
- **Button** - Customizable button with variants (primary, secondary, outline, danger, ghost)
- **Card** - Container component with hover effects
- **CourseCard** - Display course information with enroll functionality
- **Loading** - Animated loading spinner
- **Toast** - Notification component with auto-dismiss
- **Navbar** - Responsive navigation with dark mode toggle

### Context Providers
- **AuthContext** - Manages authentication state and user data
- **ThemeContext** - Handles dark mode toggle

### Layouts
- **MainLayout** - Layout for public pages
- **DashboardLayout** - Layout with sidebar for dashboard pages

## 🎯 Routes

### Public Routes
- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/course/:id` - Course details page

### Student Routes (Protected)
- `/student/dashboard` - Student dashboard
- `/student/courses` - Enrolled courses

### Teacher Routes (Protected)
- `/teacher/dashboard` - Teacher dashboard
- `/teacher/courses` - Created courses
- `/teacher/create-course` - Create new course

### Admin Routes (Protected)
- `/admin/dashboard` - Admin dashboard
- `/admin/users` - User management
- `/admin/courses` - All courses

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#6366f1',    // Indigo
  secondary: '#8b5cf6',  // Purple
}
```

### Mock Data
Edit files in `src/data/` to modify:
- `courses.js` - Course information
- `assignments.js` - Assignment data
- `users.js` - User accounts

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## ✨ Features Highlights

1. **Dark Mode** - Toggle between light and dark themes
2. **Role-Based Access** - Different dashboards for different user roles
3. **Protected Routes** - Secure routes based on authentication and roles
4. **Toast Notifications** - User feedback for actions
5. **Smooth Animations** - Fade-in effects and transitions
6. **Modern UI** - Gradient backgrounds and card-based layouts
7. **Responsive Sidebar** - Collapsible sidebar for mobile devices

## 🚀 Build for Production

```bash
npm run build
```

The build files will be in the `dist/` directory.

## 📝 Notes

- This is a **frontend-only** application using mock data
- No backend or database is required
- Authentication is simulated using Context API and localStorage
- All data is stored in JSON files within the project

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for educational purposes.

---

Built with ❤️ using React.js and Tailwind CSS

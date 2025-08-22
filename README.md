# Elective Management System - Backend Part ( Frontend Seperate Repo )

A comprehensive **Elective Management System** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Bootstrap** for the frontend UI. The system allows students to select professional and open electives, while Heads of Departments (HODs) manage approvals and the Dean/Principal can monitor all elective activities.

---

## Features

- **Student Portal:** 
  - Opt for professional and open electives
  - View elective status and updates

- **HOD Portal:**
  - Review elective requests from students of their department
  - Approve or reject elective selections

- **Dean/Principal Portal:**
  - View records of all professional and open elective activities across departments
  - Monitor overall elective selection trends and statuses (view-only)

---

## Tech Stack

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT or session-based (as implemented)
- **Styling & UI:** Bootstrap for responsive and clean UI

---

## Installation and Setup

### Prerequisites

- Node.js (>= 16.x)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup



The frontend will be available at `http://localhost:3000` by default.

---

## Usage

1. **Students** register/login and select professional or open electives from the available list.
2. **HODs** receive elective requests and can approve or reject students’ elective choices in their department.
3. **Dean/Principal** can log in to view all elective selection activities but cannot make modifications.
4. Notifications or status updates are displayed to users based on approval or rejection.

---

## Key Modules

- **Student Module:** Handles elective browsing and selection
- **Approval Module:** Manages HOD's ability to approve or reject
- **Admin View Module:** Enables Dean/Principal to view all records
- **Authentication Module:** Secures access based on roles (Student, HOD, Dean/Principal)

---

## Contributing

Feel free to fork the repository and submit pull requests or raise issues for improvements and bug fixes.

---

## License

MIT License

---

Built to streamline elective management and ensure smooth academic administration with clear role-based access.


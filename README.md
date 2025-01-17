# AURA Task Manager

![The Markdown logo](/public/Vector.png)

![The Markdown logo](/public/Task%20Manager.png)

## Project Overview

The Task Manager & To-do List application is designed to help users better manage their task project wiring. This application is especially for developers and designers, and other productive people. With the help of the application, they can create task groups like office projects, personal projects, studies, etc., and can handle the tasks very easily.

---

## Features and Functions

1. **User Authentication**

   - Secure login and registration using OAuth, JWT, or custom authentication mechanisms.
   - Password recovery and account management.

2. **Task Management**

   - Create, update, delete, and mark tasks as complete.
   - Assign due dates and priorities to tasks.
   - Categorize tasks with tags or folders.

3. **Collaboration**

   - Share tasks or lists with other users.
   - Assign tasks to specific team members.
   - Real-time updates for shared lists.

4. **Notifications and Reminders**

   - Email or push notifications for upcoming deadlines.
   - Customizable reminders.

5. **Search and Filters**

   - Search bar for finding specific tasks.
   - Filters for priority, category, or completion status.

6. **Dashboard**

   - Overview of tasks by status (e.g., Pending, In Progress, Completed).
   - Summary of upcoming tasks and deadlines.

7. **Progress Tracking**

   - Task completion statistics.
   - Visual progress indicators like graphs or charts.

8. **Offline Mode**

   - Allow users to manage tasks without internet connectivity.
   - Sync data when back online.

9. **Integration**

   - API support for third-party integrations (e.g., calendars, email, or Slack).
   - Export tasks to CSV or other formats.

10. **Responsive Design**

    - Compatible with desktop, mobile, and tablet devices.

## Backend Functionalities

1. **Docker Containerization**

   - Isolate services for authentication, task management, and notifications.
   - CI/CD Pipelines Automate testing, building, and deployment of the application.

2. **NGINX Load Balancing**

   - Distribute traffic efficiently across multiple servers.

3. **Kubernetes Deployment**

   - Deploy the application on Kubernetes (e.g., Minikube) for scalability and reliability.

---

## Deployment

### Local Deployment

1. **Clone the git repository.**

   ```bash
   git clone https://github.com/Sashin517/ToDoApp.git
   ```

2. **Set the file directory.**

   ```bash
   cd Your-File-Directory
   ```

3. **Install the Node Module in file directory.**

   ```bash
   npm install
   ```

4. **Run the Application following Code:**

   ```bash
   npm start
   ```

5. **Congradulation, You will deploy the application in `localhost:5173`.**

### Docker Deployment

1. **Select the file Directory, Then Open the Terminal Run the Following Command:**

   ```bash
   cd Your-file-location
   cd TODOAPP
   ```

2. **Create the Build the Front-End Dockerfile in Terminal:**

   ```bash
   docker build -t todo-front-app .
   ```

3. **Run the Builded Front-End Dockerfile in Terminal:**

   ```bash
   docker run -todo-frond
   ```

### Kubernates Deployment

1. **Select the file Directory, Then Open the Terminal Run the Following Command:**

   ```bash
   cd Your-file-location
   cd TODOAPP
   ```

2. **Start the kubernates service in local computer:**

   ```bash
   minikube start
   ```

3. **After, Deploy the `deployment.yaml` file using this command:**

   ```bash
   kubectl apply -f deployment.yaml
   ```

4. **Enter the this `localhost:5173` your browser linkbar**

   _Click this link_ [https://localhost:5173](https://localhost:5173)

5. **Boom, Your Application Deploying in Kubernates in Successfully.**

---

## Tasks

- Create the UI Design :heavy_check_mark:
- Docker File Configuration :heavy_check_mark:
- Kubernates Deployment file Configuration :heavy_check_mark:
- Application Development :x:
- CI/CD Pipeline Tests, and Deployment :heavy_check_mark:
- Deploy Aura Task Manager in Azure Cloud Service :x:

## Collabarators

- Sashin Deemantha
- Adithya Rusith
- Chamika
- Chamathvi
- Dewni
- Tharuka
- Pramodi
- Methara
- Adsaya
- Lahiru Dilshan
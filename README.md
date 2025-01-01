# 🗓️ Calendar with Drag-and-Drop Event Management

## 📖 Overview

The **Calendar with Drag-and-Drop Event Management** application allows users to easily manage their events by dragging them from an event list to a specific date on the calendar. The app features:

- **Drag-and-drop event management** 🔄
- **Highlighting events on the calendar** ✨
- **User-friendly interface** 💻
- **Event editing functionality** ✏️

The application is built using **React** for the frontend and **TailwindCSS** for styling. It also uses **React DnD** (Drag and Drop) to implement the drag-and-drop functionality, providing a seamless way for users to interact with and organize their events.

---
## 📱 Demo

- **Demo Video**: [Watch the demo video here](https://drive.google.com/file/d/1GiNYQHbhapRv5zt1SY5A6XHQygILdGB0/view)
- **Vercel Deployment**: [Visit the live application here](https://schedulo-dynamic-event-calendar.vercel.app/)
---

## 🌟 Key Features

### 1. **📅 Calendar Grid**
   - The calendar grid is rendered dynamically using **React**, displaying each day of the selected month 🗓️.
   - Each day is clickable, and events can be dragged and dropped onto specific dates to schedule them 🖱️.

### 2. **🔄 Drag-and-Drop Event Management**
   - Users can **drag events** from the event list and drop them onto a specific date on the calendar 🔧.
   - This feature is powered by **React DnD** which enables seamless dragging and updating of events.

### 3. **✨ Event Highlighting**
   - Once an event is dropped on a date, it gets **highlighted** on that date, showing the user that the event has been scheduled there 🟩.
   - This gives the user a clear visual of the events on specific days.

### 4. **📝 Event Details**
   - Clicking on an event in the calendar allows users to **view and edit** event details 📝.
   - Users can change event details like the title, date, and description.

### 5. **🧑‍💻 User Interface**
   - The application is built using **React** for a responsive and interactive experience 💻.
   - **TailwindCSS** is used for styling, providing a sleek, modern design for the calendar and event management interface 🌈.

---

## 💻 Tech Stack

- **Frontend**:
  - **React**: For building the user interface and managing the state of the calendar and events. [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  - **React-DnD**: For implementing the drag-and-drop functionality. [![React DnD](https://img.shields.io/badge/React--DnD-14.0.0-orange.svg)](https://react-dnd.github.io/react-dnd/)
  - **TailwindCSS**: For modern and responsive styling of the UI.
  - **useState and useEffect**: For managing state and handling side effects in the application.

---

## ⚙️ Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine.
- **TailwindCSS** for styling (already integrated).

### Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```
### Install Dependencies

```bash
npm install <dependencies>
```
### Run the Project
```bash
npm run dev
```
---
## 🛠️ Features in Progress

- **Event Persistence**: The event data can be persisted by adding a backend for storing and retrieving events (MongoDB, Firebase, etc.) if required in the future.
- **User Authentication**: A secure login system can be added to manage personal calendars and events.

---

## 🎨 UI/UX Design

The application is designed to be **minimalist** and **user-friendly**, with a modern look and feel, thanks to the use of **TailwindCSS**. The calendar grid and drag-and-drop functionality make it easy for users to manage events directly from the interface.

---

## ✨ Future Enhancements

- **Event Notifications**: Implement a notification system for upcoming events.
- **Export Events**: Allow users to export their events in different formats (e.g., CSV, iCal).

---




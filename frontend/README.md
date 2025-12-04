# LuminexID Frontend

**Enterprise Event Ticketing & Secure Access Control System**

This is the modern frontend interface for LuminexID, built with **Next.js 16** and **React 19**, designed for high performance and scalability using a Feature-Based Architecture.

## 🚀 Key Features

* **Portal-Based Navigation**: Dynamic homepage that adapts to user login state.
* **Secure QR Scanner**: Integrated `html5-qrcode` for real-time ticket validation.
* **Feature-Based Architecture**: Modular code structure (`src/features/`) for better maintainability.
* **Atomic Design System**: Reusable UI components (`Button`, `Card`, `Badge`) powered by **Tailwind CSS v4**.
* **Mock Data Fallback**: Smart fallback system to display dummy data when the backend is offline.

## 🛠️ Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Core**: React 19
* **Styling**: Tailwind CSS v4
* **HTTP Client**: Axios
* **QR Processing**: Html5-Qrcode

## 📂 Project Structure

```text
src/
├── app/                 # App Router (Pages are thin wrappers)
├── components/
│   ├── ui/              # Atomic Components (Button, Input, etc.)
│   └── layout/          # Global Layouts (Navbar)
├── features/            # Business Logic Modules
│   ├── auth/            # Login logic
│   ├── events/          # Event listing logic
│   ├── scanner/         # QR Scanning logic
│   └── tickets/         # Ticket management logic
└── lib/                 # Utilities & API configuration
```

## ⚡ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open Portal

Visit http://localhost:3000 to access the LuminexID Portal.

## 🔑 Default Credentials (Mock Mode)

If the backend is not connected, you can use any credentials to explore the UI:

* Email: `agent@luminex.id`
* Password: `admin123`
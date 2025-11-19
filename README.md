# LuminexID

**Enterprise-Grade Event Access & Identity Verification System**

LuminexID is a secure and scalable ticketing and access verification system powered by cryptographically signed QR codes. The platform adopts a Decoupled Services Architecture, featuring a .NET 8 Backend and a Next.js 15 Frontend to ensure high performance and clean separation of concerns.

---

## 🚀 Features

* **Secure QR-based ticket validation** (cryptographic signing)
* **Scalable event ticketing workflow**
* **Clean Architecture** with well-separated domains
* **JWT-based authentication**
* **Modern UI** with Next.js + Tailwind + Shadcn/UI
* **Fully containerized infrastructure** (Docker)

---

## 🛠️ Technology Stack

### **Backend (High-Performance Layer)**
* **Framework:** ASP.NET Core 8 Web API (C#)
* **Architecture:** Clean Architecture (Controllers → Services → Repositories → Data)
* **Database:** PostgreSQL 16 (Dockerized)
* **ORM:** Entity Framework Core
* **Authentication:** JWT (JSON Web Token)
* **Documentation:** Swagger UI

### **Frontend (Experience Layer)**
* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Shadcn/UI
* **HTTP Client:** Axios

### **Infrastructure**
* **Containerization:** Docker & Docker Compose

---

## 📋 Prerequisites (Windows)

Ensure the following tools are installed:

1.  **Docker Desktop** (WSL 2 backend enabled)
2.  **.NET 8 SDK**
3.  **Node.js (LTS)**
4.  **Git**
5.  **Visual Studio 2022** or **VS Code**

---

## ⚡ Quick Start (Windows)

Follow these steps in order to run the project for the first time.

### 1. Clone the Repository
```powershell
git clone https://github.com/noireveil/LuminexID.git
cd LuminexID
````

### 2\. Start Infrastructure (PostgreSQL)

Make sure Docker Desktop is running.

```powershell
docker-compose up -d
```

*Verify access via pgAdmin:*

  * **URL:** `http://localhost:5050`
  * **Email:** `admin@luminex.id`
  * **Password:** `admin`

### 3\. Backend Setup (API)

```powershell
cd backend\LuminexID.API

# Restore packages
dotnet restore

# Install EF Core CLI (if not installed)
dotnet tool install --global dotnet-ef

# Apply database migrations
dotnet ef database update

# Run the API server
dotnet run
```

*Swagger API:* `http://localhost:<backend-port>/swagger` (e.g., 5000 or 5279)

### 4\. Frontend Setup (UI)

```powershell
cd frontend

# Install dependencies
npm install

# Verify environment variables
type .env.local

# Start the development server
npm run dev
```

*Open the UI:* `http://localhost:3000`

-----

## 🧩 Project Architecture

### 📂 Backend Folder Structure

```text
backend/LuminexID.API
│
├── Controllers/            # API endpoints
├── DTOs/                   # Request/Response models
├── Models/                 # Database entities
├── Services/
│   ├── Interfaces/         # Service contracts
│   └── Implementations/    # Business logic layer
└── ...
```

-----

## 📝 Developer Task List

Mark tasks as completed by changing `[ ]` to `[x]`.

### 👉 Backend Tasks (Logic Implementation)

*Located inside `Services/Implementations/`*

**1. AuthService.cs**

  - [ ] **Implement `LoginAsync`**
      - [ ] Validate user credentials against Database.
      - [ ] Verify hashed password.
      - [ ] Generate & return JWT token.
  - [ ] **Implement `RegisterAsync`**
      - [ ] Check for unique email.
      - [ ] Hash password using `PasswordHasher`.
      - [ ] Save new user to Database.

**2. TicketService.cs**

  - [ ] **Implement `ValidateTicketAsync`**
      - [ ] Decrypt `QrPayload` using `CryptographyService`.
      - [ ] Verify ticket status (Active / Used).
      - [ ] Update status to `USED` in Database.
      - [ ] Return validation result (Valid/Invalid).

**3. TransactionService.cs**

  - [ ] **Implement `PurchaseTicketAsync`**
      - [ ] Check and decrease event quota.
      - [ ] Create transaction record.
      - [ ] Generate unique QR-based ticket.

-----

### 👉 Frontend Tasks (UI Implementation)

**1. Login Page**

  - [ ] Build UI form (`src/app/login/page.tsx`).
  - [ ] Integrate API `POST /auth/login`.
  - [ ] Handle Token storage (localStorage/Cookies).

**2. Ticket Scanner**

  - [ ] Integrate Camera/QR Library (`src/app/scanner/page.tsx`).
  - [ ] Handle Backend Response (Show Success/Error Modal).

**3. User Dashboard**

  - [ ] Fetch User Tickets (`GET /tickets/my-tickets`).
  - [ ] Display Ticket List & Details.

-----

## 🆘 Troubleshooting

**Backend: "connection refused"**

1.  Ensure the PostgreSQL container is running: `docker ps`
2.  Verify connection string in `appsettings.Development.json` (Port 5432).

**Frontend: "Network Error"**

1.  Check `frontend/.env.local`.
2.  Ensure `NEXT_PUBLIC_API_URL` matches the backend port currently in use (e.g., `http://localhost:5279/api/v1`).

**Swagger not loading**

1.  Confirm backend is running (`dotnet run`).
2.  Check the port displayed in the backend terminal.
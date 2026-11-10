# Job Protal App

A full-stack job portal that connects job seekers with recruiters. Candidates can discover and apply for jobs, while recruiters can manage companies, job listings, and applicants.

## Live links

- **Frontend:** [https://job-protal-app.vercel.app](https://job-protal-app.vercel.app)
- **Backend health check:** [https://job-protal-app-backend.vercel.app/home](https://job-protal-app-backend.vercel.app/home)
- **Source code:** [https://github.com/Rakib2275/Job-Protal-App](https://github.com/Rakib2275/Job-Protal-App)

## Core features

- Sign up, log in, and manage a candidate profile.
- Browse and search job listings, with job details and filters.
- Apply for jobs and review applications from the candidate profile.
- Upload profile images and resumes.
- Recruiter tools for creating companies, posting jobs, and reviewing applicants.
- Update application statuses.
- Responsive interface with animated elements.

## Technology stack

- **Frontend:** React 19, Vite 7, React Router, Redux Toolkit, Tailwind CSS 4
- **Backend:** Node.js, Express 5
- **Database:** MongoDB with Mongoose
- **File uploads:** Cloudinary and Multer
- **Authentication:** JSON Web Tokens and bcryptjs

## Dependencies

### Client

**Runtime:** `@radix-ui/react-avatar`, `@radix-ui/react-dialog`, `@radix-ui/react-label`, `@radix-ui/react-popover`, `@radix-ui/react-radio-group`, `@radix-ui/react-select`, `@radix-ui/react-slot`, `@reduxjs/toolkit`, `@tailwindcss/vite`, `axios`, `class-variance-authority`, `clsx`, `embla-carousel-react`, `framer-motion`, `lucide-react`, `next-themes`, `react`, `react-dom`, `react-icons`, `react-redux`, `react-router-dom`, `redux-persist`, `sonner`, `tailwind-merge`.

**Development:** `@eslint/js`, `@tailwindcss/postcss`, `@types/react`, `@types/react-dom`, `@vitejs/plugin-react`, `autoprefixer`, `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`, `postcss`, `tailwindcss`, `tw-animate-css`, `vite`.

### Server

**Runtime:** `bcryptjs`, `cloudinary`, `cookie-parser`, `cors`, `datauri`, `dotenv`, `express`, `jsonwebtoken`, `mongoose`, `multer`, `nodemon`.

**Development:** `cookie-parse`.

## Run locally

### Prerequisites

- Node.js and npm
- A MongoDB database
- Cloudinary credentials for profile and resume uploads

### 1. Get the project and install server dependencies

```bash
git clone https://github.com/Rakib2275/Job-Protal-App.git
cd Job-Protal-App/server
npm install
```

### 2. Configure and start the server

Create a `server/.env` file with your own values:

```env
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
PORT=4000
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

Keep `.env` private and never commit real credentials. Start the server:

```bash
npm run dev
```

The backend runs at `http://localhost:4000`; its health check is `http://localhost:4000/home`.

### 3. Install and start the client

In a second terminal, from the project directory:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

### 4. Connect the local client to the local server

The client currently uses the deployed backend URLs in `client/src/utils/constant.js`, and the server's CORS configuration currently allows the deployed frontend origin. To run the complete stack locally, point the client API URLs to `http://localhost:4000/api/v1/user`, `/job`, `/application`, and `/company` respectively, and allow the local Vite origin in the server's CORS configuration.

## Useful resources

- [React documentation](https://react.dev/learn)
- [Vite documentation](https://vite.dev/guide/)
- [Express documentation](https://expressjs.com/)
- [MongoDB documentation](https://www.mongodb.com/docs/)
- [Cloudinary documentation](https://cloudinary.com/documentation)

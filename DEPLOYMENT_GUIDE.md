# Deployment Guide - Requsyol

This guide explains how to deploy the frontend and backend separately to production.

## Architecture

```
┌─────────────────────┐
│   Frontend (React)  │
│   Vercel Project 1  │
└──────────┬──────────┘
           │
    (API calls to)
           │
┌──────────▼──────────┐
│   Backend (Node.js) │
│   Vercel Project 2  │
│  (api/send-email)   │
└─────────────────────┘
```

## Part 1: Deploy Backend to Vercel

### Step 1: Create Backend GitHub Repository

```bash
cd backend
git init
git add .
git commit -m "Initial backend setup"
git remote add origin https://github.com/YOUR_USERNAME/requsyol-backend.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your `requsyol-backend` repository
4. Framework: **Other**
5. Build Command: `npm run build` (or leave empty)
6. Output Directory: (leave empty)
7. Click "Deploy"

### Step 3: Configure Environment Variables

After deployment, go to **Project Settings → Environment Variables** and add:

- `GMAIL_USER` = your-gmail@gmail.com
- `GMAIL_PASSWORD` = your-app-specific-password
- `EMAIL_RECEIVER` = recipient@example.com

Your backend URL will be something like: `https://requsyol-backend.vercel.app`

## Part 2: Deploy Frontend to Vercel

### Step 1: Update Frontend Configuration

In your main project `.env`:

```
VITE_API_URL=https://requsyol-backend.vercel.app
GMAIL_USER=marketing@requsyol.co.uk
GMAIL_PASSWORD=tcmubtddxreynvmp
EMAIL_RECEIVER=marketing@requsyol.co.uk
```

### Step 2: Create Vercel Configuration

Make sure your `vercel.json` in the root has:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your main `requsyol` repository
4. Framework: **Vite**
5. Root Directory: `.` (root)
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click "Deploy"

### Step 4: Configure Environment Variables

After deployment, go to **Project Settings → Environment Variables** and add:

- `VITE_API_URL` = https://requsyol-backend.vercel.app

## Part 3: Local Development

### Development Server (using proxy)

The frontend proxies API calls to your local backend in development:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
node --env-file=.env api/send-email.js
```

Or use the dev-server.js:
```bash
node dev-server.js
```

### Environment Setup

Make sure your `.env` file has:
```
VITE_API_URL=http://localhost:3001
GMAIL_USER=marketing@requsyol.co.uk
GMAIL_PASSWORD=tcmubtddxreynvmp
EMAIL_RECEIVER=marketing@requsyol.co.uk
```

## Troubleshooting

### CORS Errors

If you get CORS errors in production:
- The backend includes CORS headers in the `send-email.js` function
- Check that `VITE_API_URL` points to your backend Vercel URL

### Emails Not Sending

1. Verify Gmail app-specific password (not regular password)
2. Check Vercel logs: Dashboard → Project → Functions → Logs
3. Ensure environment variables are set in Vercel

### Testing API Endpoint

```bash
curl -X POST https://your-backend-url/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "message": "Test message",
    "type": "contact"
  }'
```

## File Structure Summary

**Frontend Project Root:**
```
requsyol/
├── src/
├── public/
├── .env
├── package.json
├── vite.config.ts
└── vercel.json
```

**Backend Project (separate):**
```
backend/
├── api/
│   └── send-email.js
├── .env
├── package.json
└── vercel.json
```

# Al Alam Environmental Solutions Website

A cutting-edge environmental consultancy website featuring advanced liquid animations, glass morphism effects, and Discord webhook integration for project inquiries.

## 🚀 Features

- **Advanced Animations**: Liquid morphing effects, glass morphism, and smooth transitions
- **Professional Design**: Top-tier consulting company presentation
- **Contact Form Integration**: Direct Discord webhook notifications for project inquiries
- **Responsive Design**: Optimized for all devices
- **High-Quality Visuals**: Professional environmental engineering imagery

## 🛠 Setup Instructions

### Local Development

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

### Deployment on Vercel

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect this as a React project

2. **Configure Discord Webhook**
   - Go to your Discord server settings
   - Navigate to Integrations → Webhooks
   - Create a new webhook for the channel where you want to receive notifications
   - Copy the webhook URL

3. **Set Environment Variable in Vercel**
   - In your Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add a new environment variable:
     - **Name**: `DISCORD_WEBHOOK_URL`
     - **Value**: Your Discord webhook URL (e.g., `https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN`)
   - Save the environment variable

4. **Deploy**
   - Vercel will automatically deploy your site
   - The contact form will now send formatted messages to your Discord server

## 📋 Discord Webhook Setup Guide

### Step 1: Create Discord Webhook
1. Open your Discord server
2. Right-click on the channel where you want to receive notifications
3. Select "Edit Channel"
4. Go to "Integrations" tab
5. Click "Create Webhook"
6. Give it a name (e.g., "Al Alam Project Inquiries")
7. Copy the webhook URL

### Step 2: Add to Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Select "Environment Variables" from the sidebar
4. Click "Add New"
5. Set:
   - **Name**: `DISCORD_WEBHOOK_URL`
   - **Value**: Your copied webhook URL
   - **Environment**: Production (and Preview if you want)
6. Click "Save"

### Step 3: Redeploy
- Go to "Deployments" tab in Vercel
- Click "Redeploy" on your latest deployment
- Or push a new commit to trigger automatic deployment

## 📨 Discord Message Format

When someone submits the contact form, you'll receive a beautifully formatted Discord message containing:

- **Contact Information**: Name, email, phone, company
- **Project Details**: Type, budget range, timeline
- **Project Description**: Full message from the client
- **Timestamp**: When the inquiry was submitted
- **Professional Formatting**: Rich embeds with icons and colors

## 🎨 Customization

### Modifying the Contact Form
- Edit `src/components/ContactForm.jsx` to add/remove fields
- Update the Discord message format in `api/contact.js`

### Styling Changes
- Main styles are in `src/App.css`
- Component-specific styles are in individual component files
- Color scheme can be modified using CSS custom properties

### Adding More Animations
- Animations are built with Framer Motion
- Liquid effects use custom CSS animations
- Glass morphism effects use backdrop-filter CSS

## 🔧 Technical Stack

- **Frontend**: React 18, Framer Motion, Tailwind CSS
- **Backend**: Vercel Serverless Functions
- **Deployment**: Vercel
- **Notifications**: Discord Webhooks
- **Icons**: Lucide React

## 🌱 Environmental Focus

This website represents Al Alam Environmental Solutions as a leading environmental consultancy specializing in:
- Environmental Data Analysis & Modeling
- GIS & Remote Sensing Solutions
- Sustainability & Environmental Impact Assessment
- System Optimization & Engineering



# Ibrahem Al Hussien — Flutter Developer Portfolio

A modern, responsive portfolio website showcasing 6 production Flutter applications published on Google Play & Apple App Store.

## Live Demo

**https://brbr43.github.io/CV_proto/**

## Features

- Dark theme with Flutter-inspired design
- Animated hero section with stats counter
- Skills, experience timeline, and education sections
- 6 project cards with screenshot galleries
- Direct links to Google Play & App Store
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Image gallery modal with keyboard navigation

## Project Structure

```
CV_proto/
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # Interactions & project data
├── assets/
│   └── projects/       # App screenshots
│       ├── ayn-alfahad/
│       ├── kidzi/
│       ├── your-coach/
│       ├── alayntech/
│       └── fitness-kitchen/
└── README.md
```

## Deploy to GitHub Pages

### Step 1 — Create Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `CV_proto` (or any name you prefer)
3. Set visibility to **Public**
4. Click **Create repository**

### Step 2 — Upload Files

```bash
cd "CV_proto"
git init
git add .
git commit -m "Add Flutter developer portfolio"
git branch -M main
git remote add origin https://github.com/brbr43/CV_proto.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` → Folder: `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes — your site will be live!

## Customize

Update these in `index.html` before deploying:

| Item | Location |
|------|----------|
| Email | `#emailLink` href |
| GitHub | `#githubLink` href |
| LinkedIn | `#linkedinLink` href |

## Local Preview

Open `index.html` in your browser, or run a local server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (no frameworks)

---

Built with passion by **Ibrahem Al Hussien** | Flutter Developer

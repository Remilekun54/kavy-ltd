# Step-by-Step Guide: Hosting on Render (Free Tier)

This guide provides instructions on how to host this React/Vite project on Render for free.

## Prerequisites
1. A **GitHub** or **GitLab** account with your code pushed to a repository.
2. A **Render** account (Sign up at [render.com](https://render.com)).

## Step 1: Push your code to GitHub/GitLab
Ensure all your local changes (including the `render.yaml` and `.node-version` files I created) are pushed to your remote repository.

```bash
git add .
git commit -m "Add Render deployment configuration"
git push origin main
```

## Step 2: Connect Repository to Render
1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click the **"New +"** button and select **"Blueprint"**.
3. Connect your GitHub/GitLab account if you haven't already.
4. Select the repository for this project.

## Step 3: Configure and Deploy
1. Give your Blueprint a name (e.g., `kavy-ltd-site`).
2. Render will automatically detect the `render.yaml` file.
3. Click **"Apply"**.

## Step 4: Wait for Build
Render will now:
1. Detect it's a static site.
2. Install dependencies (`npm install`).
3. Build the project (`npm run build`).
4. Serve the `dist` folder.

## Step 5: Verification
Once the status is **"Live"**, you will see a URL (e.g., `kavy-ltd.onrender.com`). Click it to verify your site is working!

---

### Why use Blueprint?
By using `render.yaml`, Render automatically knows:
- It's a **Static Site**.
- The build command is `npm run build`.
- The folder to serve is `dist`.
- It handles single-page app (SPA) routing so your links don't break on refresh.

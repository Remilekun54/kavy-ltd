# Step-by-Step Guide: Hosting on Render (Free Tier) - Static Site

This guide provides the exact steps to host this React/Vite project as a **Static Site** on Render's free tier. 

## Step 1: Push your code to GitHub or GitLab
Render automatically deploys whenever you push new changes. Ensure your code is in a repository.

```bash
git add .
git commit -m "Prepare for Render static deployment"
git push origin main
```

## Step 2: Create a New Static Site on Render
1. Go to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Static Site**.
3. Connect your GitHub/GitLab account and select your repository.

## Step 3: Configure Build Settings
In the configuration screen, use the following settings:

| Field | Value |
| :--- | :--- |
| **Name** | `kavy-ltd` (or anything you like) |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

## Step 4: Add Redirect Rule (Crucial for React Apps)
Since this is a Single Page Application (SPA), you must tell Render to handle routing so that refreshing the page doesn't show a 404 error.

1. In the Render Dashboard for your site, go to the **Redirects/Rewrites** tab.
2. Click **Add Rule**.
3. Use these values:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
4. Save the rule.

## Step 5: Verify Deployment
Once the build is complete, Render will provide a URL (e.g., `kavy-ltd.onrender.com`). Visit it and verify everything works!

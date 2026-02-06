# Step-by-Step Guide: Hosting on Render (Free Tier) - Static Site

This guide provides the exact steps to host this React/Vite project as a **Static Site** on Render's free tier and connect your custom domain.

## Step 1: Push your code to GitHub or GitLab
Render automatically deploys whenever you push new changes. Ensure your latest local changes (including the fix for the blank page) are pushed.

```bash
git add .
git commit -m "Fix blank page and prepare for custom domain"
git push origin main
```

## Step 2: Create a New Static Site on Render
1. Go to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Static Site**.
3. Connect your GitHub/GitLab repository.

## Step 3: Configure Build Settings
| Field | Value |
| :--- | :--- |
| **Name** | `kavy-ltd` |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

## Step 4: Add Redirect Rule (Crucial for React Apps)
1. In the Render Dashboard, go to the **Redirects/Rewrites** tab.
2. Click **Add Rule**.
3. **Source**: `/*`
4. **Destination**: `/index.html`
5. **Action**: `Rewrite`
6. Save the rule.

---

## Step 5: Connect Your Custom Domain (`kavylimited.com.ng`)
To connect your custom domain, follow these steps:

### 1. Add Domain in Render
1. In your Static Site settings on Render, scroll to **Custom Domains**.
2. Click **+ Add Custom Domain**.
3. Enter your domain (e.g., `kavylimited.com.ng` or `www.kavylimited.com.ng`).
4. Render will show you the DNS records you need to add.

### 2. Update DNS Records (at your Domain Registrar)
Log in to your domain provider (e.g., GoDaddy, Namecheap, or where you bought the domain) and add these records:

| Type | Host | Value |
| :--- | :--- | :--- |
| **A** | `@` | `216.24.57.1` (Verify this IP in Render Dashboard) |
| **CNAME** | `www` | `kavy-ltd.onrender.com` |

> [!NOTE]
> DNS propagation can take from 5 minutes to 24 hours. Render will automatically issue an **SSL Certificate** (HTTPS) once the domain is verified.

---

## Troubleshooting: Why was the page empty?
The most common reason for a blank page in Vite production builds is a `ReferenceError: process is not defined`. 
- **The Fix:** I have updated `services/geminiService.ts` to remove the use of `process.env`. 
- **What to do:** Push the latest changes to your repo and Render will automatically redeploy the fix.

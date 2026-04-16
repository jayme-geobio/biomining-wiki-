# Deploying Biomining Wiki to Vercel

Follow these steps to deploy your biomining wiki site to Vercel and get a live URL.

## Prerequisites

- A GitHub account
- A Vercel account (free tier is fine - sign up at [vercel.com](https://vercel.com))
- Git installed on your computer

## Step 1: Initialize Git Repository

Open Terminal and navigate to your project directory:

```bash
cd "/Users/arianacaiati/Documents/Digestables for AI/biomining-site"
```

Initialize a git repository:

```bash
git init
git add .
git commit -m "Initial commit: Biomining Wiki"
```

## Step 2: Push to GitHub

1. Go to [github.com](https://github.com) and create a new repository
   - Name it `biomining-wiki` (or whatever you prefer)
   - Don't initialize with README, .gitignore, or license (we already have these)

2. Link your local repository to GitHub (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/biomining-wiki.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository (`biomining-wiki`)
4. Vercel will auto-detect Next.js - keep all default settings
5. Click "Deploy"

That's it! Vercel will:
- Install dependencies
- Build your site
- Deploy it to a live URL

You'll get a URL like: `https://biomining-wiki-username.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to your project and deploy:
```bash
cd "/Users/arianacaiati/Documents/Digestables for AI/biomining-site"
vercel
```

3. Follow the prompts:
   - Link to existing project? → No
   - What's your project name? → biomining-wiki
   - Which directory? → ./ (current directory)
   - Auto-detected settings? → Yes

4. Deploy to production:
```bash
vercel --prod
```

## Step 4: Get Your Live URL

After deployment completes, you'll receive a URL like:
```
https://biomining-wiki.vercel.app
```

Or with your username:
```
https://biomining-wiki-yourusername.vercel.app
```

## Step 5: (Optional) Custom Domain

If you have a custom domain:

1. Go to your project in Vercel dashboard
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically rebuild and redeploy your site!

## Making Updates After Publication

Once the site is live, you may want to make changes and share them with a reviewer **before** they go live to the public. Vercel's GitHub integration handles this automatically — every non-`main` branch gets its own shareable preview URL, while the live site at your production domain stays on `main` and is untouched.

### The Workflow

1. **Create a feature branch** locally for your round of changes:

   ```bash
   git checkout -b reviewer-changes-round-3
   ```

2. **Bump the version** (manual — this is the only manual step). Open `app/data/versions.js` and add a new entry at the **top** of the `versions` array. For example:

   ```js
   {
     version: '1.1',
     publishedDate: '2026-05-20',
     summary: 'Round 2 of reviewer revisions.',
     changes: [
       'Expanded the Complex Materials Playbook with three new case studies.',
       'Added photos of refractory gold ore.',
       'Revised the Example Flowsheets section.',
     ],
     authors: ['Ariana Caiati', 'Colbey Derwin'],
     contributors: [
       'Jayme Feyhl-Buska',
       'Erin Marshall',
       // Any person named as the Source of a new photo added this round
       // must be listed here too (unless they're already in `authors`).
     ],
   },
   ```

   **Why manual:** creating a branch alone does **not** bump the version — small commits shouldn't each become a new version. You only add an entry when starting a meaningful review round. Each version entry has its own authors + contributors so each revision credits the right people.

   **What IS automatic:** the `Updated [date]` stamp in the footer. It refreshes on every push without you touching anything, so ongoing commits on the branch keep the date fresh while the version number stays pinned to what you set.

3. **Make your content edits, commit, and push the branch:**

   ```bash
   git add .
   git commit -m "Round 2 reviewer updates + v1.1 entry"
   git push -u origin reviewer-changes-round-3
   ```

4. **Open a Pull Request** on GitHub (or just leave the branch pushed). Vercel will automatically:
   - Build the branch
   - Post a comment on the PR with a unique preview URL, e.g.
     `https://biomining-wiki-git-reviewer-changes-round-3-jayme-geobio.vercel.app`
   - Re-deploy that preview every time you push new commits to the branch

5. **Share the preview URL with your reviewer.** They can see every change in real time. The production site remains unchanged.

6. **When the reviewer approves**, merge the PR into `main` (via GitHub "Merge pull request" button, or `git checkout main && git merge reviewer-changes-round-3 && git push`). Vercel promotes the merged code to production automatically — the footer chip on the live site will now read `v1.1 · Updated [date]`.

7. **Clean up** (optional):

   ```bash
   git branch -d reviewer-changes-round-3
   git push origin --delete reviewer-changes-round-3
   ```

### Verify Your Vercel Settings

In the Vercel dashboard (`vercel.com` → biomining-wiki project → **Settings → Git**), confirm:

- **Production Branch** is set to `main` only
- **Preview Deployments** are enabled for "All branches" (this is the default)

### Optional: Restrict Who Can View Previews

By default, preview URLs are public — anyone with the link can view them. To require a login before a reviewer can view work-in-progress:

- Go to **Settings → Deployment Protection**
- Enable **Vercel Authentication** for Preview deployments

This ensures only people you invite to the Vercel team can see previews.

### Quick Reference

| Action | What happens |
|---|---|
| `git push` to `main` | Production site updates immediately (date stamp refreshes, version unchanged) |
| `git push` to any other branch | A shareable preview URL is created/updated (date stamp refreshes, version unchanged) |
| Add a new entry to `app/data/versions.js` and push | Version number bumps on that branch's deployment |
| Merge PR into `main` | Preview is promoted to production — new version goes live |

## Build Settings (Vercel Auto-Detects These)

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install`

## Troubleshooting

### Build Fails

If the build fails, check:
1. All dependencies are in package.json (they are!)
2. No syntax errors in your code
3. Check build logs in Vercel dashboard

### Pages Don't Load

Make sure all pages have:
- `'use client';` directive at the top
- Proper Next.js Link components (not regular `<a>` tags)

These are already set up correctly in your project!

### Styles Don't Load

Verify:
- `globals.css` is imported in `app/layout.js` ✓
- Tailwind config points to correct directories ✓

## Success!

Once deployed, you can share your live URL with biologists and mining professionals to help them learn about biomining!

Your site will be accessible at your Vercel URL, with:
- ✅ Fast global CDN
- ✅ Automatic HTTPS
- ✅ Auto-rebuilds on git push
- ✅ Free hosting (on Vercel's hobby plan)

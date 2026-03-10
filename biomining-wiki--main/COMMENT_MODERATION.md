# Comment Moderation Guide

This guide explains how to set up and use the comment moderation system for the Biomining Wiki.

## Setup (One-Time)

### 1. Set Your Admin Token

You need to create a secret token that only you know:

1. Go to [Vercel Dashboard](https://vercel.com) → Select your project
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `ADMIN_TOKEN`
   - **Value:** Choose a secure password (e.g., `biomining-admin-2024-xyz`)
4. Click **Save**
5. Go to **Deployments** → Click the 3 dots on the latest deployment → **Redeploy**

**Important:** Keep this token secret! Anyone with the token can moderate comments.

---

## Accessing the Admin Panel

1. Navigate to: `https://biomining-wiki.vercel.app/admin/comments`
2. Enter your `ADMIN_TOKEN` when prompted
3. Click **Authenticate**

Your token is saved in your browser, so you won't need to enter it again on the same device.

---

## Moderating Comments

### Viewing Comments

The admin panel shows comments organized by:
- **Pending** - New comments waiting for approval (default view)
- **Approved** - Comments visible to users
- **All** - Both pending and approved

Each comment displays:
- The page it was submitted on
- The text the user highlighted
- Their comment
- Timestamp
- Partial IP address (for spam tracking)

### Approving Comments

Click the **green checkmark** button to approve a comment.

Approved comments will:
- Become visible to all users on the page
- Highlight the commented text in green
- Appear in the Comments sidebar

### Rejecting Comments

Click the **red X** button to reject a comment.

Rejected comments are permanently deleted and cannot be recovered.

### When to Reject

Consider rejecting comments that are:
- Spam or promotional content
- Offensive or inappropriate language
- Completely off-topic
- Duplicate submissions
- Test comments

### When to Approve

Approve comments that:
- Provide helpful corrections or clarifications
- Ask relevant questions
- Add valuable context or information
- Are constructive feedback

---

## Comment Workflow

```
User selects text → Submits comment → Comment saved (unapproved)
                                              ↓
                              Admin reviews in /admin/comments
                                              ↓
                         ┌────────────────────┴────────────────────┐
                         ↓                                         ↓
                    Approve                                    Reject
                         ↓                                         ↓
              Comment visible to all                    Comment deleted
              Text highlighted green
```

---

## Rate Limiting

To prevent spam, users are limited to **3 comments per hour** per IP address. This is automatic and requires no action from moderators.

---

## Storage Notes

**Current Setup:** Comments are stored in memory and will be cleared when the server restarts or redeploys.

**For Permanent Storage:** Configure Upstash Redis (see `.env.local.example` for setup instructions).

---

## Troubleshooting

### "Authentication failed"
- Check that `ADMIN_TOKEN` is set correctly in Vercel
- Make sure you redeployed after adding the environment variable
- Verify you're entering the exact token (case-sensitive)

### "No comments to display"
- Users may not have submitted any comments yet
- Check if you're on the right filter tab (Pending/Approved/All)
- Comments are page-specific

### Comments disappearing after redeploy
- This is normal with in-memory storage
- Set up Upstash Redis for persistent storage

---

## Quick Reference

| Action | How |
|--------|-----|
| Access admin | Go to `/admin/comments` |
| Approve comment | Click green checkmark |
| Reject comment | Click red X |
| Filter comments | Click Pending/Approved/All tabs |
| Logout | Click red "Logout" button |

---

## Security Best Practices

1. **Use a strong token** - At least 20 characters with mixed case and numbers
2. **Don't share your token** - Each admin should have their own (requires code changes)
3. **Review regularly** - Check for pending comments at least weekly
4. **Monitor for spam** - If you see patterns, consider adjusting rate limits

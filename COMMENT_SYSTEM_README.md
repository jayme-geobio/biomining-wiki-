# Comment System Implementation

## Overview
This implements a text-specific commenting and contribution system where users can select text on any page and submit feedback. All submissions are for **admin review only** — comments are never displayed publicly on the site.

## Features

### User Features
- **Text Selection**: Select any text (minimum 5 characters) to comment on it
- **Comment Submission**: Add comments with context (selected text + section)
- **Contribution Interest**: Optional checkbox to express interest in contributing, with name, email, and description fields
- **Standalone Contribute Modal**: Available via navigation/footer for general contribution interest
- **Rate Limiting**: 3 comments per hour per IP address

### Admin Features
- **Moderation Dashboard**: View all comments grouped by page
- **Filter Tabs**: Pending, Approved, Rejected, and All
- **Approve/Reject/Delete**: Moderate comments with one click
- **Contributor Details**: View name, email, and proposed contribution when provided
- **Privacy**: IP addresses are hashed and partially masked in admin view
- **Permanent Delete**: Remove comments entirely to free memory, with confirmation dialog

## File Structure

```
app/
├── api/
│   ├── comments/
│   │   └── route.js          # Public API for submitting comments (POST only)
│   ├── admin/
│   │   └── comments/
│   │       └── route.js      # Admin API for moderation (GET/PATCH)
│   └── lib/
│       └── storage.js        # Shared in-memory storage (replace with DB)
├── components/
│   ├── CommentSystem.jsx     # Main comment UI component
│   ├── CommentableContent.jsx # Wrapper to enable commenting on pages
│   └── ContributeModal.js    # Standalone contribution modal
├── admin/
│   └── comments/
│       └── page.js           # Admin moderation interface
└── globals.css               # Comment-specific styles
```

## Usage

### Enable Commenting on a Page

Wrap your page content with `CommentableContent`:

```jsx
import CommentableContent from '../components/CommentableContent';

export default function MyPage() {
  return (
    <CommentableContent pageName="my-page">
      <div>
        {/* Your page content here */}
        <h1>My Page</h1>
        <p>Users can select this text to comment on it.</p>
      </div>
    </CommentableContent>
  );
}
```

### Access Admin Panel

1. Set environment variable: `ADMIN_TOKEN=your-secret-token`
2. Navigate to `/admin/comments`
3. Enter your admin token
4. Approve, reject, or delete comments

## Environment Variables

```env
# Required for admin access
ADMIN_TOKEN=your-secret-token-here

# Optional configuration
MAX_COMMENTS_PER_HOUR=3      # Rate limit (default: 3)
COMMENT_MAX_LENGTH=500        # Max comment length (default: 500)
```

## Admin Actions

| Action | Effect |
|--------|--------|
| **Approve** | Marks comment as approved (internal status only, not publicly visible) |
| **Reject** | Marks comment as rejected (kept for records, hidden from pending view) |
| **Delete** | Permanently removes comment from storage |

## Production Deployment

⚠️ **Important**: This implementation uses in-memory storage which will be lost on server restart.

For production, replace `app/api/lib/storage.js` with a proper database:
- **Upstash**: Serverless Redis (recommended for Vercel)
- **Redis**: Fast key-value storage
- **PostgreSQL**: Relational database with full querying
- **MongoDB**: Document database for flexible schema

The storage layer is abstracted — only `storage.js` needs to change. The API routes and admin page will work as-is.

### Database Schema

```javascript
Comment {
  id: number
  selectedText: string (max 500 chars)
  comment: string (max 500 chars)
  pageName: string
  context: {
    sectionTitle: string
    selectedText: string
  }
  contributor: {          // Optional, present when user checks "Interested in Contributing"
    name: string
    email: string
    description: string
  }
  timestamp: ISO string
  approved: boolean
  rejected: boolean
  ip: string (hashed)
}
```

## Security Considerations

1. **Admin Authentication**: Currently uses simple bearer token. For production, implement proper auth (JWT, sessions, etc.)
2. **IP Hashing**: Store hashed IPs instead of plain text
3. **XSS Prevention**: All user input is sanitized and limited to 500 characters
4. **Rate Limiting**: Prevents spam (3 comments/hour per IP)
5. **No Public Access**: Comments are never served publicly — admin review only

## Browser Compatibility

- Requires modern browsers with `window.getSelection()` API
- Tested on Chrome, Firefox, Safari, Edge
- Mobile support included (responsive design)

## Troubleshooting

### Can't authenticate as admin
- Ensure `ADMIN_TOKEN` is set in environment variables
- For local development, create `.env.local` file

### Rate limit issues
- Wait 1 hour or adjust `MAX_COMMENTS_PER_HOUR`
- Rate limits are per IP address per page

### Contributor data not showing in admin
- Ensure `sanitizeComment()` in `route.js` preserves the `contributor` field
- Check admin page renders the contributor section

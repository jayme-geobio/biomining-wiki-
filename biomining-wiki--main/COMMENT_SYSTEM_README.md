# Comment System Implementation

## Overview
This implements a text-specific commenting system where users can select text on any page and add comments. Comments require admin approval before being visible to other users.

## Features

### User Features
- **Text Selection**: Select any text (minimum 10 characters) to comment on it
- **Comment Submission**: Add comments with context (selected text + section)
- **View Comments**: See all approved comments in a sidebar
- **Highlighted Text**: Approved comments are highlighted in green
- **Rate Limiting**: 3 comments per hour per IP address

### Admin Features
- **Moderation Dashboard**: View all comments (pending and approved)
- **Approve/Reject**: Moderate comments with one click
- **Privacy**: IP addresses are partially masked in admin view

## File Structure

```
app/
├── api/
│   ├── comments/
│   │   └── route.js          # Public API for reading/submitting comments
│   ├── admin/
│   │   └── comments/
│   │       └── route.js      # Admin API for moderation
│   └── lib/
│       └── storage.js        # Shared in-memory storage (replace with DB)
├── components/
│   ├── CommentSystem.jsx     # Main comment UI component
│   └── CommentableContent.jsx # Wrapper to enable commenting on pages
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
4. Approve or reject comments

## Environment Variables

```env
# Required for admin access
ADMIN_TOKEN=your-secret-token-here

# Optional configuration
MAX_COMMENTS_PER_HOUR=3      # Rate limit (default: 3)
COMMENT_MAX_LENGTH=500        # Max comment length (default: 500)
```

## Production Deployment

⚠️ **Important**: This implementation uses in-memory storage which will be lost on server restart.

For production, replace `app/api/lib/storage.js` with a proper database:
- **Redis**: Fast key-value storage
- **PostgreSQL**: Relational database with full querying
- **MongoDB**: Document database for flexible schema
- **Upstash**: Serverless Redis (good for Vercel)

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
  timestamp: ISO string
  approved: boolean
  ip: string (hashed in production)
}
```

## Security Considerations

1. **Admin Authentication**: Currently uses simple bearer token. For production, implement proper auth (JWT, sessions, etc.)
2. **IP Hashing**: Store hashed IPs instead of plain text
3. **XSS Prevention**: All user input is sanitized and limited to 500 characters
4. **Rate Limiting**: Prevents spam (3 comments/hour per IP)
5. **CORS**: API routes allow all origins - restrict in production

## Performance Notes

- Text highlighting runs on page load for each approved comment
- For pages with many comments (>50), consider lazy loading or pagination
- The comment sidebar is rendered on demand (when button is clicked)
- Event listeners are properly cleaned up on component unmount

## Browser Compatibility

- Requires modern browsers with `window.getSelection()` API
- Tested on Chrome, Firefox, Safari, Edge
- Mobile support included (responsive design)

## Troubleshooting

### Comments not appearing
- Check that comments are approved in admin panel
- Verify the page name matches between submission and display

### Can't authenticate as admin
- Ensure `ADMIN_TOKEN` is set in environment variables
- For local development, create `.env.local` file

### Rate limit issues
- Wait 1 hour or adjust `MAX_COMMENTS_PER_HOUR`
- Rate limits are per IP address per page

## Future Enhancements

- [ ] Reply threads
- [ ] User authentication (named comments)
- [ ] Email notifications for new comments
- [ ] Export comments as CSV
- [ ] Search and filter in admin panel
- [ ] Bulk approve/reject
- [ ] Comment analytics dashboard

# Biomining Wiki

A comprehensive educational website about biomining - the use of biological mechanisms to aid metal recovery, mineral processing, and management of mining-related wastes. This site bridges the knowledge gap between biologists and mining professionals working on critical mineral recovery.

**Built by Ariana Caiati for [Homeworld Collective](https://homeworldcollective.com)**

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will run on `http://localhost:3000`

## Site Structure

```
app/
├── page.js                    # Home page with dual learning paths
├── layout.js                  # Root layout with Navigation & Footer
├── Navigation.js              # Site navigation component
├── Footer.js                  # Site footer component
├── globals.css                # Global styles including comment system
├── what-is-biomining/         # Introduction to biomining
├── for-biologists/            # Mining 101 for biologists
├── for-miners/                # Biology 101 for mining professionals
├── glossary/                  # Searchable glossary of terms
├── complex-materials/         # Guide to materials where biology helps
├── flowsheets/                # Real-world integration examples
├── research/                  # Research frontiers and open problems
├── admin/
│   └── comments/              # Comment moderation panel
├── api/
│   ├── comments/              # Public comment API
│   ├── admin/comments/        # Admin comment API
│   └── lib/storage.js         # Comment storage layer
└── components/
    ├── CommentSystem.jsx      # Text-selection commenting UI
    └── CommentableContent.jsx # Wrapper for commentable pages
```

## Features

### Dual Learning Paths
- **For Biologists:** Learn how biology fits into mining operations, the mining value chain, key constraints, and design checklists
- **For Mining Professionals:** Understand microbial energy, metal mobilization mechanisms, biomining modalities, and evaluation checklists

### Interactive Content
- Expandable sections to reduce overwhelm
- Searchable and filterable glossary
- Visual flowsheet diagrams
- Color-coded categories (mining = amber, biology = emerald)

### Text-Selection Comment System
Users can select text on content pages and submit comments for moderation. This enables community feedback and collaborative knowledge building.

## Comment System

### How It Works

1. **User selects text** (minimum 10 characters) on a commentable page
2. **Comment icon appears** next to the selection
3. **User submits comment** with their feedback/suggestion
4. **Comment awaits moderation** - not visible until approved
5. **Admin approves/rejects** via the moderation panel
6. **Approved comments** appear with highlighted text on the page

### User Features
- Select any text (10+ characters) to add a comment
- View existing approved comments in the sidebar
- Comments are associated with specific text passages
- Rate limited to 3 comments per hour per IP

### For Developers

The comment system consists of:

| Component | Purpose |
|-----------|---------|
| `CommentSystem.jsx` | Main UI for text selection and comment submission |
| `CommentableContent.jsx` | Wrapper component to enable commenting on any page |
| `/api/comments` | Public API for fetching/submitting comments |
| `/api/admin/comments` | Protected API for moderation actions |
| `storage.js` | In-memory storage (replace with Redis for persistence) |

To enable comments on a page, wrap content with `CommentableContent`:

```jsx
import CommentableContent from '../components/CommentableContent';

export default function MyPage() {
  return (
    <CommentableContent pageName="my-page">
      <div>Your content here...</div>
    </CommentableContent>
  );
}
```

## Comment Moderation

### Setup

1. Set the `ADMIN_TOKEN` environment variable:
   - **Local:** Add to `.env.local`
   - **Vercel:** Add in Project Settings > Environment Variables

2. Redeploy after adding the environment variable

### Accessing the Admin Panel

1. Navigate to `/admin/comments`
2. Enter your admin token
3. Token is saved in browser localStorage

### Moderation Actions

| Action | Result |
|--------|--------|
| **Approve** (green checkmark) | Comment becomes visible to all users |
| **Reject** (red X) | Comment is permanently deleted |

### Moderation Guidelines

**Approve comments that:**
- Provide helpful corrections or clarifications
- Ask relevant questions
- Add valuable context or information
- Offer constructive feedback

**Reject comments that:**
- Contain spam or promotional content
- Use offensive or inappropriate language
- Are completely off-topic
- Are duplicate submissions

For detailed moderation instructions, see [COMMENT_MODERATION.md](COMMENT_MODERATION.md).

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ADMIN_TOKEN` | Secret token for admin authentication | Required |
| `MAX_COMMENTS_PER_HOUR` | Rate limit per IP | `3` |
| `COMMENT_MAX_LENGTH` | Maximum comment length | `500` |

See `.env.local.example` for a template.

## Storage

**Current:** In-memory storage (comments lost on server restart)

**For Production:** Configure Upstash Redis for persistent storage. See `.env.local.example` for setup instructions.

## Content Pages

### Home Page
- Dual learning paths for biologists and mining professionals
- Links to essential resources
- Overview of what biomining covers

### What Is Biomining
- Definitions and core mechanisms
- Where biotech outcompetes conventional chemistry
- Key terminology

### For Biologists
- Why biologists need to understand mining
- The journey from rock to metal
- Mining value chain stages
- Key operational constraints
- Design checklist

### For Mining Professionals
- Microbial energy and carbon sources
- Mechanisms of metal mobilization
- Biomining modalities
- Evaluation checklist

### Glossary
- Searchable terms from both fields
- Filterable by category
- Cross-referenced definitions

### Complex Materials
- Acid Mine Drainage (AMD)
- Tailings
- E-waste
- Secondary resources

### Flowsheets
- Copper heap leach operations
- Refractory gold biooxidation
- Tailings reprocessing
- AMD treatment

### Research
- Technical frontiers
- Ecosystem and infrastructure needs
- Collaboration opportunities

## Design Principles

1. **Dual Audience:** Content serves both biologists and mining professionals
2. **Technically Accurate:** Based on peer-reviewed literature and industry practice
3. **Practically Oriented:** Focus on real-world applications and constraints
4. **Visual & Interactive:** Expandable sections, flowsheets, searchable content
5. **Community-Driven:** Comment system enables collaborative improvement

## Contributing

Contributions welcome for:
- New case studies
- Updated references
- Additional flowsheet examples
- Glossary term additions
- Bug fixes and improvements

## License

Homeworld Collective - see maintainers for usage terms.

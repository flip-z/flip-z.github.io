# Jon's Personal Site

A Jekyll-powered personal site with a clean, professional design.

## Quick Start

### Local Development
```bash
bundle install
bundle exec jekyll serve
```
Visit `http://localhost:4000` to preview changes.

## Adding Content

### Blog Posts
Create new files in `_posts/` with the format: `YYYY-MM-DD-post-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15
tags: [cybersecurity, triathlon]
---

Your content here...
```

### Opinions
Add new opinion pieces to `_opinions/`:

```markdown
---
layout: post
title: "Opinion Title"
---

Your opinion content...
```

### Reviews
Add new reviews to `_reviews/`:

```markdown
---
layout: post
title: "Review Title"
---

Your review content...
```

## Site Structure

- `index.md` - Home page content
- `blog.md` - All posts listing
- `_layouts/` - Page templates
- `_includes/` - Reusable components
- `_sass/` - Stylesheets
- `_config.yml` - Site configuration

## Deployment

The site auto-deploys to GitHub Pages when you push to the main branch.

## Content Guidelines

- Use Markdown for all content
- Include proper front matter (YAML) at the top of each file
- Images go in the root directory
- Keep it simple and focused
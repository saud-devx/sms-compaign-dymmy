# Strapi CMS Integration Guide

Your app is now configured to work with Strapi CMS! Here's how to set it up:

## 1. Install and Setup Strapi

### Option A: Local Development
```bash
# Create a new Strapi project
npx create-strapi-app@latest my-cms --quickstart

# Navigate to your Strapi project
cd my-cms

# Start Strapi
npm run develop
```

### Option B: Use Strapi Cloud
1. Go to [Strapi Cloud](https://cloud.strapi.io/)
2. Create a new project
3. Follow the setup wizard

## 2. Configure Content Types

Create these content types in your Strapi admin panel:

### Posts Content Type
- **Collection Type Name**: posts
- **Fields**:
  - `title` (Text) - Required
  - `slug` (UID) - Required, target field: title
  - `content` (Rich Text) - Required
  - `excerpt` (Text)
  - `featured_image` (Media - Single)
  - `meta_description` (Text)
  - `meta_keywords` (Text)
  - `published` (Boolean) - Default: false
  - `category` (Text)
  - `readTime` (Text)
  - `author` (Relation - One to Many with Users)

### Pages Content Type
- **Collection Type Name**: pages
- **Fields**:
  - `title` (Text) - Required
  - `slug` (UID) - Required, target field: title
  - `content` (Rich Text) - Required
  - `featured_image` (Media - Single)
  - `meta_description` (Text)
  - `meta_keywords` (Text)
  - `published` (Boolean) - Default: false
  - `author` (Relation - One to Many with Users)

## 3. Configure API Permissions

1. Go to Settings → Users & Permissions plugin → Roles
2. Edit the **Public** role
3. Enable the following permissions:
   - **Posts**: find, findOne
   - **Pages**: find, findOne
   - **Upload**: find, findOne (for media files)

## 4. Update App Configuration

Update the Strapi URL in `src/config/strapi.ts`:

```typescript
export const STRAPI_CONFIG = {
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-strapi-instance.herokuapp.com/api'  // Your production URL
    : 'http://localhost:1337/api',  // Local development
  // ... rest of config
};
```

## 5. Configure Content Source

In `src/api/hybrid.ts`, update the content source:

```typescript
export const CONTENT_SOURCE = {
  posts: 'strapi',    // Use Strapi for posts
  pages: 'strapi',    // Use Strapi for pages
};
```

## 6. Create Sample Content

1. Log into your Strapi admin panel
2. Create some blog posts in the Posts collection
3. Create some pages in the Pages collection
4. Make sure to set `published: true` for content you want to display

## 7. Deploy Strapi (Production)

### Heroku Deployment
```bash
# In your Strapi project directory
git init
git add .
git commit -m "Initial commit"

# Create Heroku app
heroku create your-strapi-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set DATABASE_URL=your-postgres-url
heroku config:set ADMIN_JWT_SECRET=your-jwt-secret
heroku config:set JWT_SECRET=your-jwt-secret

# Deploy
git push heroku main
```

### Other Deployment Options
- **Railway**: Connect your GitHub repo and deploy
- **DigitalOcean**: Use App Platform
- **AWS**: Use Elastic Beanstalk or EC2
- **Strapi Cloud**: Managed hosting by Strapi

## 8. Features Available

Your app now supports:

✅ **Dynamic Content Management**: Edit content without touching code
✅ **Media Management**: Upload and manage images through Strapi
✅ **SEO Optimization**: Built-in meta fields for SEO
✅ **Draft/Publish Workflow**: Publish content when ready
✅ **Author Management**: Associate content with authors
✅ **API-First**: Content available via REST and GraphQL
✅ **Hybrid Fallback**: Falls back to Supabase if Strapi is unavailable

## 9. Next Steps

- Set up authentication for admin access
- Configure Rich Text editor plugins
- Add more content types as needed
- Set up webhooks for cache invalidation
- Configure email for user management

## 10. Troubleshooting

**Strapi not connecting?**
- Check CORS settings in Strapi
- Verify API permissions are set correctly
- Ensure Strapi server is running on correct port

**Content not showing?**
- Make sure content is published (`published: true`)
- Check API permissions for public access
- Verify content structure matches expected format

Your Strapi CMS integration is ready! 🎉
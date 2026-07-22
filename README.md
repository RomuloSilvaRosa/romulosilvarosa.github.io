This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Hosted Assets

Static files in `public/` are served at the site root after deploy.

### Email signature certifications footer

- Public URL: https://romulosilvarosa.github.io/certifications_footer.png
- File: `public/certifications_footer.png` (900px wide PNG, transparent background)
- Used as the image in the Office 365 email signature footer, referenced by absolute URL.
- Editable source (draw.io / diagrams.net): https://app.diagrams.net/#G1nBE095YYALne18RCt2RbxibAUtGMeKo9#%7B%22pageId%22%3A%22SQWpTvyQYhPC6-1gjHuW%22%7D
- To update: edit the draw.io source, export a PNG, replace `public/certifications_footer.png` (keep the same filename so existing emails do not break), commit, and push. The Pages workflow redeploys automatically.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Clément Peleman - Portfolio

Personal portfolio website showcasing my work as an Embedded Systems Engineer and Product Designer. Built with modern web technologies and optimized for performance.

**Live at:** [clementpeleman.be](https://clementpeleman.be)

## Tech Stack

- **Framework:** Next.js 14 with React 18
- **Language:** TypeScript
- **Styling:** TailwindCSS with Tailwind Typography
- **UI Components:** shadcn/ui, Radix UI, Magic UI
- **Animations:** Framer Motion
- **Content:** MDX for blog posts with syntax highlighting
- **Code Highlighting:** Shiki with rehype-pretty-code

## Features

- Responsive design optimized for all devices
- Dark/Light mode toggle
- Blog with MDX support and syntax highlighting
- Project showcase with image galleries and modal previews
- Work experience and education timeline
- Skills and technologies overview
- Competitions and side projects section
- Optimized for performance and SEO

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/clementpeleman/portfolio
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

All personal information, projects, work experience, and skills can be edited in the [config file](./src/data/resume.tsx).

Blog posts are stored as MDX files in the `content/` directory.

## Project Structure

```
portfolio-main/
├── public/           # Static assets (images, logos, etc.)
├── src/
│   ├── app/         # Next.js app router pages
│   ├── components/  # React components
│   │   ├── ui/      # Base UI components (shadcn/ui)
│   │   └── magicui/ # Magic UI components
│   ├── data/        # Configuration and content
│   └── lib/         # Utility functions
├── content/         # Blog posts (MDX)
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclementpeleman%2Fportfolio)

## License

Based on the [portfolio](https://github.com/dillionverma/portfolio) by Dillion Verma.

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).

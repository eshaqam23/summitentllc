# Summit Enterprises, LLC

Marketing site for **Summit Enterprises, LLC** — a consulting practice focused on strategic planning, analysis, and tailored business solutions.

Built with React (Create React App).

## Features

- Single-page layout with hero, approach, and “why us” sections
- Responsive header with mobile navigation
- Contact via email in the footer (and header “Contact” link)
- Static assets served from `public/`

## Project structure

```
src/
  components/     # Reusable UI (Header, Footer, Hero, Approach, WhyChooseUs)
  pages/          # Page-level composition (Home)
  data/           # Shared copy and company constants
  styles/         # Global CSS and design tokens
  App.js          # App shell
  index.js        # React entry point
public/           # Images, favicon, and index.html
```

## Getting started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Develop

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000). The app reloads as you edit.

### Test

```bash
npm test
```

### Production build

```bash
npm run build
```

Output is written to `build/` and is ready to deploy to any static host.

## Contact

Reach out at [eshaqm@gmail.com](mailto:eshaqm@gmail.com).

# AuraHelm - The Future of Helmet Hygiene

[cloudflarebutton]

A stunning, single-page marketing website to showcase the innovative AuraHelm helmet cleaning machine. This project is built to be a visually breathtaking, responsive digital storefront, educating potential customers about the product's features, technology, and benefits. Inspired by modern tech websites, it features a minimalist dark-themed design, a sophisticated color palette with vibrant accents, smooth animations, and interactive elements to create an engaging user experience.

## ✨ Key Features

*   **Visually Stunning Design:** A modern, minimalist dark theme with vibrant cyan accents and glow effects.
*   **Engaging User Experience:** Smooth, scroll-triggered animations powered by Framer Motion.
*   **Fully Responsive:** A flawless layout that adapts perfectly to all device sizes, from mobile to large desktops.
*   **Interactive Elements:** Polished micro-interactions, hover states, and a functional contact form with validation.
*   **High-Performance:** Built with Vite for a lightning-fast development experience and optimized for production.
*   **Component-Based Architecture:** Clean and maintainable code using React and Shadcn/UI components.

## 🚀 Technology Stack

*   **Framework:** [React](https://react.dev/) (with [Vite](https://vitejs.dev/))
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## 🏁 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/en/) (v18 or later recommended)
*   [Bun](https://bun.sh/)

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/aurahelm-showcase.git
    cd aurahelm-showcase
    ```

2.  Install the project dependencies using Bun:
    ```bash
    bun install
    ```

## 🛠️ Usage & Development

To start the local development server, run the following command:

```bash
bun run dev
```

This will start the Vite development server, typically on `http://localhost:3000`. The server supports Hot Module Replacement (HMR) for a seamless development experience.

### Project Structure

*   `src/pages/`: Contains the main page components. `HomePage.tsx` is the primary entry point.
*   `src/components/`: Contains reusable React components, including custom components and UI elements from Shadcn.
*   `src/assets/`: For static assets like images, fonts, etc.
*   `src/lib/`: Contains utility functions.
*   `tailwind.config.js`: Configuration file for Tailwind CSS.
*   `index.html`: The main HTML file for the Vite application.

## ☁️ Deployment

This project is optimized for deployment on Cloudflare Pages.

### One-Click Deploy

You can deploy this project to your own Cloudflare account with a single click.

[cloudflarebutton]

### Manual Deployment with Wrangler

1.  **Build the project:**
    First, create a production-ready build of the application.
    ```bash
    bun run build
    ```
    This command bundles the application into the `dist` directory.

2.  **Deploy to Cloudflare:**
    Use the pre-configured `deploy` script which utilizes the Wrangler CLI to publish your site.
    ```bash
    bun run deploy
    ```
    This command will deploy the contents of the `dist` folder to Cloudflare Pages. You will need to be logged into your Cloudflare account via the Wrangler CLI. If it's your first time, you may be prompted to authenticate.
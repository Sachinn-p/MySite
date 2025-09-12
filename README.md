# MySite - Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite.

## Features

- 🎨 Modern, responsive design
- 📧 Contact form with Formspree integration
- 🚀 Fast loading with Vite
- ⚡ Hot Module Replacement (HMR)
- 📱 Mobile-friendly interface

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment variables file:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:
   - `VITE_FORMSPREE_FORM_ID`: Your Formspree form ID (get it from [formspree.io](https://formspree.io/))

5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

This project uses the following environment variables:

- `VITE_FORMSPREE_FORM_ID`: Required for the contact form to work. Get your form ID by creating a form at [Formspree](https://formspree.io/).

**Note**: All environment variables for Vite must be prefixed with `VITE_` to be accessible in the client-side code.

## Contact Form

The contact form is powered by Formspree, which provides a simple way to handle form submissions without a backend. The form includes:

- Real-time validation
- Loading states
- Success/error feedback
- Spam protection (via Formspree)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Formspree** - Form handling service
- **FontAwesome** - Icons
- **Bootstrap** - CSS framework
- **AOS** - Animations on scroll

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

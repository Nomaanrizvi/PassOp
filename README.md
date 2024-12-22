# PaasOp - a personal password manger

This is a front-end project that leverages React, Tailwind CSS and your local storage for storing and accessing your passwords.

## Features

- **React**: Component-based UI framework for building dynamic interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **local storage**: Ensures consistent password storage and access.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nomaanrizvi/PassOp.git

   cd PassOp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see your application in action.

### Build for Production

Generate a production build:
```bash
npm run build
```

The output will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```plaintext
├── public            # Static assets
│   ├── icons         # Icon files (e.g., png, svg)
├── src
│   ├── assets        # Additional assets
│   ├── Components    # Reusable React components
│   │   ├── Footer.jsx
│   │   ├── Manager.jsx
│   │   ├── Navbar.jsx
│   ├── App.jsx       # Root component
│   ├── App.css       # Global styles
│   ├── index.jsx     # Entry point
│   ├── index.css     # Tailwind and other global styles
├── .eslintrc.cjs     # ESLint configuration
├── postcss.config.cjs # PostCSS configuration
├── tailwind.config.cjs # Tailwind CSS configuration
├── vite.config.js    # Vite configuration
└── package.json      # Project metadata and scripts
```


## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## License

This project is licensed under the [MIT License](./LICENSE).

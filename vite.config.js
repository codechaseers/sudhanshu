// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        // Set your SEO metadata here
        data: {
          title: 'Sudhanshu Shekhar Ojha - Web Developer Portfolio', // Page title
          description: 'Explore the portfolio of Sudhanshu Shekhar Ojha, showcasing projects, skills, and contact information for a professional web developer.', // Meta description
          keywords: 'Sudhanshu Shekhar Ojha, Sudhanshu Ojha, web developer, portfolio, projects, skills, contact, frontend developer,Sudhanshu Protfolio,sudhansu,Sudhansu,Sudhansu Sekhar Ojha , bhadrak,Bhubaneswar,Sudhanshu Bhadrak,Sudhansu Bhubneswar ', // Keywords
          ogUrl: 'https://sudhanshu-lyart.vercel.app/' // Your website URL
        },
      },
    }),
  ],
});

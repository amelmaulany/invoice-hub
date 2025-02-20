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

## Description

This project is a highly flexible Invoice Management System built with Next.js 14 (App Router), TypeScript (strict mode), and React Hook Form with Zod for form validation. The UI follows Atomic Design Principles to promote reusability and maintainability, while Tailwind CSS ensures a fully customizable and efficient styling approach.

### Key Features
✅ Atomic Design Architecture – Components are structured to minimize redundant code and maximize reusability.
✅ Dynamic Data-View System – customizable field and developers can use on any modules.
✅ Persistent Invoice Data – Uses IndexedDB (Dexie.js) to store and manage invoice data across page refreshes.
✅ Validation with Zod & React Hook Form – Ensures strong data integrity and smooth form handling.
✅ Snackbar Notification System – A globally managed snackbar (with context and hooks) for displaying success, error, and info messages.
✅ Tailwind CSS for Styling – Chosen over MUI for complete styling control without unnecessary dependencies.

### Tech Stack
Next.js 14 (App Router)
TypeScript (Strict Mode)
React Hook Form + Zod (Form Handling & Validation)
Dexie.js (IndexedDB) (Local Persistent Data)
Tailwind CSS (Custom Styling)
This system is designed for scalability, ensuring smooth data management and an intuitive user experience. 🚀

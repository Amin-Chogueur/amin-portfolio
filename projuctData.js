export const myProjects = [
  {
    id: 2,
    tech: "next",
    title: "BookShop Admin Dashboard",
    description: `A powerful admin dashboard for managing a  book-selling business. Built with Next.js 15 and TypeScript, this platform allows administrators to handle books, categories, orders, and stock with real-time synchronization to a customer-facing app.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    features: [
      "Full book management — create, edit, delete books, and upload images with Cloudinary integration.",
      " Category management with cascading updates and safe deletion.",
      " Order management — track, update status, and receive orders from a connected customer app with email notifications.",
      " Purchase management — restock books, log purchase prices and quantities.",
      " Dashboard statistics with Chart.js visualizations (orders by status, stock level, books by category).",
      " Admin authentication via JWT with route protection and password reset via email (Resend).",
      " Server-side filtering, pagination, and full CRUD via Next.js API routes.",
      " Connected System – Integrated with a separate customer app for real-time order and stock synchronization.",
    ],
    image: "/ghiz-book-manager.png", // replace with your actual preview image path
    imagesDetails: ["/ghiz-book-manager1.png", "/ghiz-book-manager2.png"], // update with real image paths
    direction: "left",
    button: "Details",
    linkToVercel: {
      link: "https://ghiz-read-manager.vercel.app/",
      lable: "ghiz-read-manager.vercel.app",
    },
    demoInfo: {
      admin: {
        email: "chogueuramine@gmail.com",
        password: "123123",
      },
      userNote:
        "This is the admin dashboard. You can log in as an admin to test the book, category, and order management features. It is connected in real time with the customer app where users place orders.",
      warning:
        "⚠️ This is a demo environment. All changes and orders are for testing purposes only.",
    },
    linkToCode: "https://github.com/Amin-Chogueur/ghiz-read-manager",
  },
  {
    id: 0,
    tech: "next",
    title: "Evident Academy Platform for Dental Education",
    description: `A real-world project, secure, multilingual, role-based e-commerce platform for a dental academy offering online courses and club memberships.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    features: [
      "Multilingual Support – Seamless content switching between English and French using next-intl.",
      "Role-Based Access (JWT) – Students can register and purchase courses; Admin can manage content, users, and orders.",
      "Shopping Cart & PayPal Integration – Smooth checkout flow with cart and secure payment processing.",
      "External Course Access – Post-purchase, students receive access links (e.g., YouTube, Zoom) for learning—no in-app video hosting.",
      "Rich Course Management – Admins use a Tiptap rich text editor to add formatted course details.",
      "Cloudinary Integration – Efficient course image handling and storage.",
      "Admin Dashboard – Full CRUD for courses, user/order management with filtering and conference scheduling.",
      "Modern UX/UI – Built with Tailwind CSS, React Hook Form, and React Toastify for a responsive, user-friendly experience.",
      "State Management – Redux is used to handle global application state such as cart, user authentication, and admin actions.",
    ],
    image: "/evident.png",
    imagesDetails: ["/evident2.png", "/evident1.png"],
    direction: "right",
    button: "Details",
    linkToWeb: {
      link: "https://evident-academy.com/",
      lable: "evident-academy.com",
    },
    linkToVercel: {
      link: "https://evident-academy.vercel.app/",
      lable: "evident-academy.vercel.app",
    },
    demoInfo: {
      admin: {
        email: "chogueuramine@gmail.com",
        password: "123123",
      },
      userNote:
        "You can create a test account using any email address and explore features like browsing, adding courses to cart, and checking out.",
      warning: "⚠️ This is a demo instance. No real payment is processed.",
    },
  },
  {
    id: 1,
    tech: "next",
    title: "website for Made4cloud company",
    description: `A real-world project developed for Made4Cloud Ltd, a company specializing in Salesforce and CRM solutions.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    features: [
      "Developed a fully responsive, multi-language website using Next.js for Made4Cloud Ltd.",
      "Implemented SEO optimization to enhance the website’s visibility and performance in search engines.",
      "Used Next-Intl to support seamless language switching between English and French.",
      "Styled the application using CSS Modules for clean, maintainable, and scalable design.",
      "Ensured a user-friendly experience across all devices with mobile-first responsive design.",
      "Demonstrated front-end expertise with React and Next.js in a real-world business project.",
      "Delivered a high-quality, accessible solution aligned with the client’s business goals.",
    ],
    linkToWeb: {
      link: "https://made4cloud.com/",
      lable: "made4cloud.com",
    },
    linkToVercel: {
      link: "https://made4cloud-ltd.vercel.app/",
      lable: "made4cloud-ltd.vercel.app",
    },
    image: "/made4cloud.png",
    imagesDetails: ["/made4cloud2.png", "/made4cloud1.png"],
    direction: "left",
    button: "Details",

    linkToCode: "https://github.com/Amin-Chogueur/made4cloud",
  },

  {
    id: 3,
    tech: "react",
    title: "Bookstore Client App",
    description: `A modern, responsive bookstore platform built with React and TypeScript. It allows users to browse and search books, manage favorites and cart, and place orders via a seamless cash-on-delivery checkout. All data is fetched from a connected admin dashboard API.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", // React
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", // TypeScript
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", // Redux Toolkit
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", // Tailwind CSS
    ],
    features: [
      " Browse and search books with server-side category filtering, title search, and pagination.",
      " Save books to a Favorites page for quick access later.",
      " Full cart functionality: add/remove books, manage quantities, and submit orders.",
      " Order confirmation page with full details retrieved from the admin API.",
      "Book detail pages with dynamic routing.",
      " Contact form to send messages to admin via Resend email API.",
      " Informational About page.",
      " Form validation using React Hook Form and Zod.",
      " Smooth animations powered by Framer Motion.",
      " Fully responsive layout optimized for all devices.",
    ],
    image: "/ghiz-bookShop.png", // Replace with your actual screenshot
    imagesDetails: ["/ghiz-bookShop1.png", "/ghiz-bookShop2.png"], // Replace with actual images
    direction: "left",
    button: "Details",
    linkToVercel: {
      link: "https://ghiz-book-store.vercel.app/",
      lable: "ghiz-book-store.vercel.app",
    },
    linkToCode: " https://github.com/Amin-Chogueur/ghiz-book-store",
  },

  {
    id: 4,
    tech: "mern",
    title: "Contact Management System",
    description:
      "A full-stack MERN application that helps users create accounts, store, filter, and search their contacts easily, ensuring they never lose important information.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    features: [
      "First full-stack MERN application, built to understand the fundamentals of complete web app development.",
      "Implemented authentication and authorization using JWT for secure user registration and login.",
      "Users can add, update, delete, and search for contacts with ease.",
      "Includes filtering options to help users organize contacts efficiently.",
      "Gained hands-on experience with full CRUD operations and RESTful API development.",
      "Applied state management to maintain consistent application behavior across components.",
      "Provided real-world experience in developing, and deploying a full-stack application.",
    ],

    image: "/contact-ms2.png",
    imagesDetails: ["/contact-ms.png", "/contact-ms1.png"],
    direction: "left",
    button: "Details",
    linkToVercel: {
      link: "https://contact-msa.vercel.app/",
      lable: "contact-msa.vercel.app",
    },

    linkToCode: "https://github.com/Amin-Chogueur/contact-ms",
  },
  {
    id: 5,
    tech: "react",
    title: "Food Recipe App",
    description:
      "A React-based application that integrates TheMealDB API to allow users to search for recipes, filter them by categories, and save their favorite meals in a favorites cart.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    features: [
      "Showcases the ability to work with external APIs and build interactive user interfaces.",
      "Users can search for recipes by name and browse meals by category using real-time data from the MealDB API.",
      "Includes functionality to save favorite dishes to a personalized cart.",
      "Built with a focus on an intuitive and responsive user experience across all devices.",
      "Demonstrates strong skills in handling API requests and dynamic data rendering in React.",
      "Highlights effective state management for user interactions and favorites.",
    ],
    image: "/food2.png",
    imagesDetails: ["/food1.png", "/food3.png"],
    direction: "right",
    button: "Details",
    linkToVercel: {
      link: "https://food-recipe-app-byamin.vercel.app/",
      lable: "food-recipe-app-byamin.vercel.app",
    },
    linkToCode: "https://github.com/Amin-Chogueur/food-recipe-app",
  },
];

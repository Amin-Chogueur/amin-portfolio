export const myProjects = [
  {
    id: 0,
    tech: "next",
    title: "Evident Academy Platform for Dental Education",
    description: `A real-world project, secure, multilingual, role-based e-commerce platform for a dental academy offering online courses and club memberships.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", // Next.js
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", // TypeScript
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", // MongoDB
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg", // Mongoose
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
    linkToWeb: ["https://evident-academy.vercel.app/"],
    note: "Due to the nature of this project involving sensitive data, full-stack implementation, and secure admin access, the source code is not publicly available. However, I am happy to discuss specific features, workflows, and technologies used in detail during interviews or on request.",
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
    image: "/made4cloud.png",
    imagesDetails: ["/made4cloud2.png", "/made4cloud1.png"],
    direction: "left",
    button: "Details",
    linkToWeb: ["https://made4cloud-ltd.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/made4cloud",
  },
  // {
  //   id: 2,
  //   tech: "next",
  //   title: "Made4cloud Admin Panel",
  //   description:
  //     "A full-stack  Next.js-based admin panel for Made4Cloud, allowing the owner to manage blog posts, categories, and user comments. Built with MongoDB, Tailwind CSS, and Tiptap for rich text editing, it integrates seamlessly with the website.",
  //   technologies: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //   ],
  //   details:
  //     "This admin panel for Made4Cloud was developed using Next.js, MongoDB, Tailwind CSS, and the Tiptap library for a rich text editor. It enables the owner to efficiently manage blog content, including creating, updating, and deleting blog posts, as well as organizing posts into categories. These categories allow users to filter blogs on the public-facing website. Additionally, users can comment on blog posts, and the owner can manage these comments directly through the admin panel. This project enhances the owner’s ability to manage and engage with their content and audience.",
  //   image: "/made4cloud-admin.png",
  //   direction: "right",
  //   button: "Details",
  //   linkToWeb: [
  //     "https://made4cloud-admin.vercel.app/",
  //     "https://made4cloud-blog.vercel.app/",
  //   ],
  //   linkToCode: null,
  // },

  // {
  //   id: 3,
  //   tech: "next",
  //   title: "Ghiz read App",
  //   description:
  //     "A full-stack app built for a client’s book library, allowing users to browse, search by title, filter by category, and place orders. Enhances customer engagement and supports seamless online sales.",
  //   technologies: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //   ],
  //   details:
  //     "This full-stack Book Library App was developed for a client who runs a library specializing in book sales. The application enables users to browse an extensive collection of books, search by title, and filter by category to find exactly what they’re looking for. Users can easily place orders through the app, offering a streamlined and enjoyable shopping experience. Fully responsive and styled with Tailwind CSS, the app features a modern and consistent design across all devices. The book data is retrieved from an API I built as part of the project’s second phase, which includes an admin panel exclusively for the client to manage the library’s inventory. This solution is designed to facilitate the client’s business operations and enhance customer engagement, making it an essential tool for their online presence.",
  //   image: "/ghiz1.png",
  //   video: "/Ghiz-Read.mp4",
  //   direction: "left",
  //   button: "Details",
  //   linkToWeb: ["https://ghiz-read.vercel.app/"],
  //   linkToCode: "https://github.com/Amin-Chogueur/ghiz-read",
  // },
  // {
  //   id: 4,
  //   tech: "next",
  //   title: "Ghiz Read Admin Panel",
  //   description:
  //     "A secure, client-exclusive web app for managing book Library web app. Enables effortless updates, organization, and image hosting to keep the catalog up-to-date, with robust authentication ensuring restricted access.",
  //   technologies: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //   ],
  //   details:
  //     "The Ghiz Read Admin Panel is a fully responsive web app built exclusively for the owner of Ghiz Read to manage their website. It allows the owner to create, read, update, and delete books and categories, ensuring the catalog remains accurate and up-to-date. Built with Next.js, the admin panel uses MongoDB as the database for efficient data storage and management. Tailwind CSS was used for styling, ensuring a modern and consistent design across all devices. Additionally, Cloudinary is integrated to host and manage book cover images. The admin panel provides the data displayed on the customer-facing web app, seamlessly connecting inventory management with the user experience, making it an essential tool for the client’s business operations.",
  //   image: "/admin.png",
  //   video: "/Ghiz-Admin.mp4",
  //   direction: "right",
  //   button: "Details",
  //   linkToWeb: ["https://ghiz-read-admin.vercel.app/"],
  //   linkToCode: null,
  // },
  {
    id: 5,
    tech: "next",
    title: "Daily Tasks platform",
    description:
      "A task management platform built with Next.js, MongoDB, Tailwind CSS, NextAuth, and Redux. Users can create, update, delete, prioritize, and filter tasks, with secure authentication and a fully responsive design.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    features: [
      "Users can create, update, delete, and prioritize tasks as high or low priority.",
      "Built with Next.js, MongoDB, and NextAuth for secure authentication and data handling.",
      "Redux is used for efficient state management, enabling real-time task updates across the app.",
      "Tasks can be filtered by status: To Do, In Progress, or Completed, for better task organization.",
      "The platform is fully responsive, offering a seamless experience on all devices.",
      "Designed to provide an efficient and accessible task management experience from anywhere.",
      "Demonstrates the ability to build dynamic, user-focused applications using modern technologies.",
    ],
    image: "/daily.png",
    imagesDetails: ["/daily1.png", "/daily2.png"],
    direction: "right",
    button: "Details",
    linkToWeb: ["https://daily-tasks-saas.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/daily_tasks",
  },

  {
    id: 7,
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
    linkToWeb: ["https://contact-msa.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/contact-ms",
  },
  {
    id: 8,
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
    linkToWeb: ["https://food-recipe-app-byamin.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/food-recipe-app",
  },
];

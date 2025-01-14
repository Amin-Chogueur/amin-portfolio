export const myProjects = [
  {
    id: 1,
    title: "website for Made4cloud company",
    description: `A real-world project developed for Made4Cloud Ltd, a company specializing in Salesforce and CRM solutions.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    details: `I was approached by Made4Cloud Ltd to develop a fully responsive, multi-language website using Next.js, optimized for SEO. The website showcases their Salesforce services and supports both English and French, leveraging Next-Intl for seamless language transitions. I utilized CSS Modules for styling, ensuring a clean, maintainable, and user-friendly design across all devices. This project highlights my expertise in front-end development with React and Next.js while demonstrating my ability to deliver accessible and high-quality solutions that align with business goals.`,
    image: "/made4cloud.png",
    direction: "left",
    button: "Details",
    linkToWeb: ["https://made4cloud-ltd.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/made4cloud",
  },
  {
    id: 2,
    title: "Made4cloud Admin Panel",
    description:
      "A full-stack  Next.js-based admin panel for Made4Cloud, allowing the owner to manage blog posts, categories, and user comments. Built with MongoDB, Tailwind CSS, and Tiptap for rich text editing, it integrates seamlessly with the website.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    details:
      "This admin panel for Made4Cloud was developed using Next.js, MongoDB, Tailwind CSS, and the Tiptap library for a rich text editor. It enables the owner to efficiently manage blog content, including creating, updating, and deleting blog posts, as well as organizing posts into categories. These categories allow users to filter blogs on the public-facing website. Additionally, users can comment on blog posts, and the owner can manage these comments directly through the admin panel. This project was built as a new feature after the multi-language website was completed, enhancing the owner’s ability to manage and engage with their content and audience.",
    image: "/made4cloud-admin.png",
    direction: "right",
    button: "Details",
    linkToWeb: [
      "https://made4cloud-admin.vercel.app/",
      "https://made4cloud-blog.vercel.app/",
    ],
    linkToCode: null,
  },

  {
    id: 3,
    title: "Ghiz read App",
    description:
      "A full-stack app built for a client’s book library, allowing users to browse, search by title, filter by category, and place orders. Enhances customer engagement and supports seamless online sales.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    details:
      "This full-stack Book Library App was developed for a client who runs a library specializing in book sales. The application enables users to browse an extensive collection of books, search by title, and filter by category to find exactly what they’re looking for. Users can easily place orders through the app, offering a streamlined and enjoyable shopping experience. Fully responsive and styled with Tailwind CSS, the app features a modern and consistent design across all devices. The book data is retrieved from an API I built as part of the project’s second phase, which includes an admin panel exclusively for the client to manage the library’s inventory. This solution is designed to facilitate the client’s business operations and enhance customer engagement, making it an essential tool for their online presence.",
    image: "/ghiz1.png",
    video: "/Ghiz-Read.mp4",
    direction: "left",
    button: "Details",
    linkToWeb: ["https://ghiz-read.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/ghiz-read",
  },
  {
    id: 4,
    title: "Ghiz Read Admin Panel",
    description:
      "A secure, client-exclusive web app for managing book Library web app. Enables effortless updates, organization, and image hosting to keep the catalog up-to-date, with robust authentication ensuring restricted access.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    details:
      "The Ghiz Read Admin Panel is a fully responsive web app built exclusively for the owner of Ghiz Read to manage their website. It allows the owner to create, read, update, and delete books and categories, ensuring the catalog remains accurate and up-to-date. Built with Next.js, the admin panel uses MongoDB as the database for efficient data storage and management. Tailwind CSS was used for styling, ensuring a modern and consistent design across all devices. Additionally, Cloudinary is integrated to host and manage book cover images. The admin panel provides the data displayed on the customer-facing web app, seamlessly connecting inventory management with the user experience, making it an essential tool for the client’s business operations.",
    image: "/admin.png",
    video: "/Ghiz-Admin.mp4",
    direction: "right",
    button: "Details",
    linkToWeb: ["https://ghiz-read-admin.vercel.app/"],
    linkToCode: null,
  },
  {
    id: 5,
    title: "Daily Tasks platform",
    description:
      "A task management platform built with Next.js, MongoDB, Tailwind CSS, NextAuth, and Redux. Users can create, update, delete, prioritize, and filter tasks, with secure authentication and a fully responsive design.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    details:
      "This platform allows users to create, manage, and track their daily tasks with full functionality to add, update, delete, and mark tasks as high or low priority. Built with Next.js, MongoDB, Tailwind CSS, and NextAuth for authentication, it ensures secure user access and data storage. Redux is used for efficient state management, enabling smooth task updates and real-time changes across the app. Users can filter tasks by status—To Do, In Progress, or Completed—providing a streamlined task management experience. Fully responsive, the platform offers a seamless user experience across all devices, making task management efficient and accessible from anywhere. This project demonstrates my ability to build dynamic, user-focused applications with modern technologies.",
    image: "/daily.png",
    imagesDetails: ["/daily1.png", "/daily2.png"],
    direction: "left",
    button: "Details",
    linkToWeb: ["https://daily-tasks-saas.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/daily_tasks",
  },
  {
    id: 6,
    title: "SouffleSnake Website",
    description:
      "A website page project for SouffleSnake, a company specializing in producing chips and snacks. ",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    details:
      "A website for SouffleSnake, a company specializing in producing chips and snacks. I worked on enhancing their website to improve performance, speed, and design, making it more visually appealing and SEO-friendly compared to their previous site.",
    image: "/crox.png",
    imagesDetails: ["/crox1.png", "/crox2.png"],
    direction: "right",
    button: "Details",
    linkToWeb: ["https://soufflesnacks.vercel.app/"],
    linkToCode: "https://github.com/Amin-Chogueur/soufflesnacks",
  },
];

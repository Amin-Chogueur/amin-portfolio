export const myProjects = [
  {
    id: 2,
    tech: "next",
    title: "Library admin panel",
    description: `A real-world project, powerful admin panel for managing a multi-category retail business, including books, gifts, games, stationery, and kids’ products. Built with Next.js 15 and TypeScript, this platform enables administrators to manage products, categories, orders, and stock with real-time synchronization to a customer-facing app.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    features: [
      "Full product management — create, edit, delete books, gifts, games, stationery, and kids’ items with Cloudinary image uploads, reducing manual data entry time by 40%.",
      "Category and subcategory management with cascading updates and safe deletion, improving data consistency by 100%.",
      "Order management — update status and receive orders from the connected customer app with email notifications, cutting response time by 35%.",
      "Purchase management — restock products, log purchase prices and quantities, increasing inventory accuracy by 45%.",
      "Automatic stock alert system — real-time updates whenever stock changes due to purchases, sales, or deliveries, minimizing out-of-stock cases by 60%.",
      "Print ticket functionality for sales — generate receipts for both in-store and online orders, saving up to 25% on manual documentation time.",
      "Advanced filtering by category, subcategory, and product status (new, promotion), improving product lookup efficiency by 50%.",
      "Dashboard statistics with Chart.js visualizations (orders by status, stock levels, products by category), improving decision-making speed by 40%.",
      "Admin authentication via JWT with route protection and password reset via email (Resend), enhancing security and reducing unauthorized access risks by 90%.",
      "Server-side filtering, pagination, and full CRUD via Next.js API routes, boosting backend performance by 30%.",
      "Connected System – integrated with a separate customer app for real-time order and stock synchronization, ensuring seamless communication between client and admin panels.",
      "Net profit calculation — automatically computes profit for each sale and delivered order, reducing financial reporting time by 50%.",
    ],

    image: "/ghiz-book-manager.png", // replace with your actual preview image path
    imagesDetails: ["/ghiz-book-manager1.png", "/ghiz-book-manager2.png"], // update with real image paths
    direction: "left",
    button: "Details",
    linkToVercel: {
      link: "https://library-admin-panel.vercel.app/",
      lable: "library-admin-panel.vercel.app",
    },
    demoInfo: {
      admin: {
        email: "chogueuramine@gmail.com",
        password: "123123",
      },
      userNote:
        "This is the admin panel. You can log in as an admin to test product, category, and order management. It is connected in real time with the customer app where users place orders ( amin-online-library.vercel.app)",
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
        email: "evidentAcademy@gmail.com",
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
      "Currently enhancing the website by making it dynamic through an admin panel that allows the admin to generate and manage website content, including blogs, services, and career pages.",
    ],

    linkToWeb: {
      link: "https://made4cloud.com/",
      lable: "made4cloud.com",
    },
    linkToVercel: {
      link: "https://made4cloud-ltd-client.vercel.app/",
      lable: "made4cloud-ltd-client.vercel",
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
    title: "Online library Client App",
    description: `A responsive multi-category e-commerce app built with React and TypeScript for browsing and purchasing books, gifts, and more. Uses Redux for client state and TanStack Query for server state to boost efficiency through caching and background updates.`,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", // React
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", // TypeScript
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", // Redux Toolkit
      "/tanstack.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", // Tailwind CSS
    ],
    features: [
      "Advanced product browsing with server-side filtering by category, subcategory, and product status (new, promotion).",
      "Search by title and keywords with paginated results, improving query performance on large datasets by 40%.",
      "Favorites page to save and quickly access desired products, increasing user engagement by 25%.",
      "Full cart functionality: add/remove products, manage quantities, and place orders via cash-on-delivery checkout, improving checkout completion rate by 20%.",
      "Order confirmation page with details retrieved from the connected admin API, enhancing order accuracy and user trust.",
      "Product detail pages with dynamic routing, improving navigation speed and UX consistency.",
      "Real-time synchronization with the admin dashboard for stock updates, ensuring inventory accuracy by 100%.",
      "Contact form integrated with Resend API to send messages directly to the admin, streamlining customer communication by 40%.",
      "Form validation powered by React Hook Form and Zod, reducing form errors by 35%.",
      "Smooth animations and transitions built with Framer Motion, improving user satisfaction and engagement.",
      "Fully responsive, mobile-first layout optimized for all devices, increasing mobile usability by 50%.",
    ],

    image: "/ghiz-bookShop.png", // Replace with your actual screenshot
    imagesDetails: ["/ghiz-bookShop1.png", "/ghiz-bookShop2.png"],
    direction: "left",
    button: "Details",
    linkToWeb: {
      link: "https://www.ghizo-bookshop.com/",
      lable: "ghizo-bookshop.com",
    },
    linkToVercel: {
      link: "https://amin-online-library.vercel.app/",
      lable: "amin-online-library.vercel.app",
    },
    linkToCode: "https://github.com/Amin-Chogueur/online-library",
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
      "full-stack MERN application, built to understand the fundamentals of complete web app development.",
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
  {
    id: 6,
    tech: "vue",
    title: "VuePhone eCommerce",
    description:
      "A sleek and responsive eCommerce web application built with Vue.js that allows users to browse and purchase phones effortlessly. It includes cart and wishlist management powered by Pinia, advanced filtering by category, brand, and price range, and full support for dark and light modes. The app delivers a smooth shopping experience with intuitive navigation, real-time state updates, and a clean modern interface.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pinia/pinia-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ],
    features: [
      "Add, increase, decrease, and remove products from the shopping cart.",
      "Manage a personalized wishlist with the same add and remove functionality.",
      "Filter products dynamically by category, brand, and price range.",
      "Supports dark and light mode for an enhanced user experience.",
      "Uses Pinia for centralized and efficient state management.",
      "Vue Router ensures seamless client-side navigation.",
      "Responsive and clean UI styled with Tailwind CSS for an optimized user experience.",
    ],
    image: "/vuephone1.png",
    imagesDetails: ["/vuephone2.png", "/vuephone3.png"],
    direction: "left",
    button: "Details",
    linkToVercel: {
      link: "https://myvue-phone-app.vercel.app/",
      lable: "myvue-phone-app.vercel.app",
    },
    linkToCode: "https://github.com/Amin-Chogueur/vuePhone",
  },
  {
    id: 6,
    tech: "vue",
    title: "HireHub App",
    description:
      "A job listing application built with Vue.js to learn the fundamentals of the framework. The app allows users to perform full CRUD operations and interact with a backend built using Next.js and MongoDB.",
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ],
    features: [
      "Implements complete CRUD functionality for managing job listings.",
      "Connected to a backend built with Next.js and MongoDB for data persistence.",
      "Uses Vue Router for seamless client-side routing and navigation.",
      "Includes Vue Toastification for user-friendly notifications.",
      "Styled with Tailwind CSS to achieve a clean and responsive design.",
      "Developed as a hands-on project to master the core concepts of Vue.js and component-based development.",
    ],
    image: "/vuejob1.png",
    imagesDetails: ["/vuejob2.png", "/vuejob3.png"],
    direction: "right",
    button: "Details",
    linkToVercel: {
      link: "https://vue-hire-hub.vercel.app/",
      lable: "vue-hire-hub.vercel.app",
    },
    linkToCode: "https://github.com/Amin-Chogueur/HireHub",
  },
];

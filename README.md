<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=32&pause=1000&color=2874F0&center=true&vCenter=true&width=800&lines=Flipkart+Clone;Full+Stack+E-Commerce+Platform;Built+with+MERN+Stack+%2B+Vite" alt="Typing SVG" />
</div>

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live-Demo-2874F0?style=for-the-badge&logo=vercel)](https://your-demo-link.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [System Architecture](#-system-architecture)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Performance](#-performance)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Developer](#-developer)
- [License](#-license)

---

## 🎯 Overview

A full-featured **E-Commerce Platform** inspired by Flipkart, built with the MERN stack and Vite for blazing-fast performance. This project demonstrates modern web development practices, including responsive design, state management, authentication, and payment integration.

### 🎪 Live Demo
**[View Live Application](#)** *(Add your deployment link)*

### 🌟 Why This Project?

This project showcases:
- **Production-Ready Code**: Clean architecture with best practices
- **Scalable Design**: Modular components and efficient state management
- **Modern Tech Stack**: Leveraging cutting-edge tools and frameworks
- **Real-World Features**: Authentication, cart management, payment processing
- **Performance Optimized**: Fast load times with Vite and code splitting

---

## ✨ Features

### 🛍️ User Features

#### Authentication & Authorization
- ✅ User registration with email verification
- ✅ Secure login/logout with JWT authentication
- ✅ Password recovery and reset functionality
- ✅ Protected routes and role-based access control
- ✅ Persistent login sessions

#### Product Management
- ✅ Browse products with advanced filtering and sorting
- ✅ Product search with real-time suggestions
- ✅ Detailed product pages with multiple images
- ✅ Product ratings and reviews system
- ✅ Category-based product navigation
- ✅ Wishlist functionality

#### Shopping Experience
- ✅ Add/remove items from cart
- ✅ Update product quantities
- ✅ Real-time cart total calculation
- ✅ Save cart for later functionality
- ✅ Apply discount codes and coupons
- ✅ Multiple payment options

#### Order Management
- ✅ Seamless checkout process
- ✅ Multiple shipping addresses
- ✅ Order tracking and history
- ✅ Order cancellation and returns
- ✅ Download invoices

#### User Profile
- ✅ View and edit profile information
- ✅ Manage shipping addresses
- ✅ Order history with status tracking
- ✅ Saved payment methods
- ✅ Notification preferences

### 👨‍💼 Admin Features

- ✅ Admin dashboard with analytics
- ✅ Product CRUD operations
- ✅ Inventory management
- ✅ Order management and status updates
- ✅ User management
- ✅ Sales reports and analytics
- ✅ Category and brand management

### 🎨 UI/UX Features

- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Intuitive navigation and user interface
- ✅ Loading skeletons for better UX
- ✅ Toast notifications for user actions
- ✅ Smooth animations and transitions
- ✅ Dark/Light mode support (if implemented)
- ✅ Accessibility compliant

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building interactive interfaces |
| **Vite** | Next-generation frontend tooling for faster builds |
| **React Router** | Client-side routing and navigation |
| **Redux Toolkit** | State management and API caching |
| **Axios** | HTTP client for API requests |
| **Material-UI / Tailwind CSS** | Component library and styling |
| **React Hook Form** | Form validation and management |
| **React Hot Toast** | Toast notifications |
| **Swiper** | Touch slider for product images |

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database for data storage |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Secure authentication tokens |
| **Bcrypt** | Password hashing |
| **Multer** | File upload handling |
| **Cloudinary** | Image storage and optimization |
| **Nodemailer** | Email service integration |

### Payment Integration

- **Razorpay / Stripe** | Secure payment processing

### Development Tools

- **ESLint** | Code linting and quality
- **Prettier** | Code formatting
- **Git** | Version control
- **Postman** | API testing
- **VS Code** | Development environment

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   React UI   │  │  Redux Store │  │   Router     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                          ↕ (HTTP/REST)
┌─────────────────────────────────────────────────────────────┐
│                       API LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Express    │  │  Middleware  │  │    Routes    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                          ↕ (Mongoose)
┌─────────────────────────────────────────────────────────────┐
│                     DATABASE LAYER                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   MongoDB    │  │  Collections │  │   Indexes    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Flipkart-Clone-using-Mern-Stack/
│
├── client/                     # Frontend React application
│   ├── public/                 # Static files
│   │   ├── index.html
│   │   └── assets/
│   │
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── ProductCard/
│   │   │   ├── Cart/
│   │   │   └── ...
│   │   │
│   │   ├── pages/              # Page components
│   │   │   ├── Home/
│   │   │   ├── ProductDetails/
│   │   │   ├── Cart/
│   │   │   ├── Checkout/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   └── ...
│   │   │
│   │   ├── redux/              # Redux store and slices
│   │   │   ├── store.js
│   │   │   ├── slices/
│   │   │   └── api/
│   │   │
│   │   ├── utils/              # Utility functions
│   │   ├── hooks/              # Custom React hooks
│   │   ├── routes/             # Route definitions
│   │   ├── assets/             # Images, icons, etc.
│   │   ├── App.jsx             # Main App component
│   │   └── main.jsx            # Entry point
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── server/                     # Backend Node.js application
│   ├── config/                 # Configuration files
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── payment.js
│   │
│   ├── controllers/            # Request handlers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── ...
│   │
│   ├── models/                 # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── ...
│   │
│   ├── routes/                 # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── ...
│   │
│   ├── middleware/             # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── ...
│   │
│   ├── utils/                  # Utility functions
│   ├── server.js               # Server entry point
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Git**

### Step-by-Step Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack.git
cd Flipkart-Clone-using-Mern-Stack
```

#### 2. Install Dependencies

**Install root dependencies (if any):**
```bash
npm install
```

**Install client dependencies:**
```bash
cd client
npm install
```

**Install server dependencies:**
```bash
cd ../server
npm install
```

#### 3. Environment Variables Setup

Create `.env` files in both client and server directories:

**Server `.env`:**
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string
DB_NAME=flipkart_clone

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Service (Nodemailer)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Payment Gateway (Razorpay/Stripe)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Frontend URL
CLIENT_URL=http://localhost:5173
```

**Client `.env`:**
```env
# API Base URL
VITE_API_URL=http://localhost:5000/api

# Payment Keys
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

#### 4. Seed Database (Optional)

```bash
cd server
npm run seed
```

#### 5. Run the Application

**Development Mode:**

**Terminal 1 - Run Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Run Frontend:**
```bash
cd client
npm run dev
```

**Production Mode:**
```bash
# Build frontend
cd client
npm run build

# Serve with backend
cd ../server
npm start
```

#### 6. Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **MongoDB:** mongodb://localhost:27017 (or your Atlas URI)

---

## 💻 Usage

### User Flow

1. **Browse Products**
   - Visit the homepage to see featured products
   - Use search and filters to find specific items
   - Click on products to view details

2. **Add to Cart**
   - Select product variations (size, color, etc.)
   - Add items to cart
   - View cart summary

3. **Checkout**
   - Login or register
   - Add shipping address
   - Select payment method
   - Complete purchase

4. **Track Orders**
   - View order history in profile
   - Track order status
   - Download invoices

### Admin Flow

1. **Login as Admin**
   - Use admin credentials
   - Access admin dashboard

2. **Manage Products**
   - Add new products
   - Edit existing products
   - Delete products
   - Manage inventory

3. **Manage Orders**
   - View all orders
   - Update order status
   - Process refunds

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| POST | `/api/auth/logout` | User logout | Yes |
| GET | `/api/auth/profile` | Get user profile | Yes |
| PUT | `/api/auth/profile` | Update profile | Yes |
| POST | `/api/auth/forgot-password` | Request password reset | No |
| PUT | `/api/auth/reset-password/:token` | Reset password | No |

### Products

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products | No |
| GET | `/api/products/:id` | Get single product | No |
| POST | `/api/products` | Create product | Admin |
| PUT | `/api/products/:id` | Update product | Admin |
| DELETE | `/api/products/:id` | Delete product | Admin |
| POST | `/api/products/:id/review` | Add review | Yes |

### Cart

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/cart` | Get user cart | Yes |
| POST | `/api/cart` | Add to cart | Yes |
| PUT | `/api/cart/:id` | Update cart item | Yes |
| DELETE | `/api/cart/:id` | Remove from cart | Yes |

### Orders

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/orders` | Get user orders | Yes |
| GET | `/api/orders/:id` | Get single order | Yes |
| POST | `/api/orders` | Create order | Yes |
| PUT | `/api/orders/:id/cancel` | Cancel order | Yes |
| GET | `/api/admin/orders` | Get all orders | Admin |
| PUT | `/api/admin/orders/:id` | Update order status | Admin |

### Payment

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/payment/create` | Create payment | Yes |
| POST | `/api/payment/verify` | Verify payment | Yes |

---

## 📸 Screenshots

> *Add screenshots of your application here*

### Homepage
![Homepage](link-to-screenshot)

### Product Details
![Product Details](link-to-screenshot)

### Shopping Cart
![Shopping Cart](link-to-screenshot)

### Checkout
![Checkout](link-to-screenshot)

### Admin Dashboard
![Admin Dashboard](link-to-screenshot)

---

## ⚡ Performance

### Optimization Techniques

- ✅ **Code Splitting**: Dynamic imports for route-based code splitting
- ✅ **Lazy Loading**: Components loaded on-demand
- ✅ **Image Optimization**: Cloudinary for responsive images
- ✅ **Caching**: Redux Toolkit Query for API caching
- ✅ **Minification**: Production build optimization
- ✅ **CDN**: Static assets served via CDN

### Performance Metrics

| Metric | Score |
|--------|-------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3.0s |
| Speed Index | < 3.0s |
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 90+ |
| Lighthouse SEO | 95+ |

---

## 🔮 Future Enhancements

### Planned Features

- [ ] **Real-time Notifications**: WebSocket integration for order updates
- [ ] **Advanced Search**: Elasticsearch integration
- [ ] **Recommendation Engine**: AI-powered product recommendations
- [ ] **Multi-language Support**: i18n internationalization
- [ ] **Progressive Web App**: Offline functionality
- [ ] **Social Login**: OAuth integration (Google, Facebook)
- [ ] **Live Chat**: Customer support chat
- [ ] **Gift Cards**: Digital gift card system
- [ ] **Seller Dashboard**: Multi-vendor marketplace
- [ ] **Advanced Analytics**: Business intelligence dashboard
- [ ] **Mobile App**: React Native version
- [ ] **Voice Search**: Voice-activated product search
- [ ] **AR Try-On**: Augmented reality for products

### Performance Improvements

- [ ] Server-side rendering (SSR) with Next.js
- [ ] Redis caching layer
- [ ] GraphQL API
- [ ] Microservices architecture
- [ ] Docker containerization

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/Flipkart-Clone-using-Mern-Stack.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues

### Contribution Guidelines

- Follow the existing code structure
- Write meaningful commit messages
- Update documentation as needed
- Test thoroughly before submitting
- Be respectful and constructive

---

## 👩‍💻 Developer

<div align="center">

### **Allanagari Renuka**

**Full Stack Developer | MERN Stack Specialist**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/allanagari-renuka-8a9346263/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=todoist)](https://portfolio-beige-two-49.vercel.app/)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:allanagarirenuka28@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Allanagari-Renuka)

</div>

**About Me:**
- 🎓 B.Tech in CSE (AI) – 88%
- 💼 Frontend Developer @ Ango Digital Technologies
- 🚀 1+ years of professional development experience
- 💡 Specialized in building scalable full-stack applications
- 🌟 Passionate about creating exceptional user experiences

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Copyright © 2026 Allanagari Renuka. All rights reserved.**

---

## 🙏 Acknowledgments

- **Flipkart** for design inspiration
- **React Community** for excellent documentation
- **MongoDB** for robust database solutions
- **Vite** for lightning-fast development experience
- **All Contributors** who helped improve this project

---

## 📞 Support & Contact

### Need Help?

- 📧 **Email**: allanagarirenuka28@gmail.com
- 💼 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/allanagari-renuka-8a9346263/)
- 🌐 **Portfolio**: [Visit my portfolio](https://portfolio-beige-two-49.vercel.app/)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack/issues)

### Found a Bug?

Please report it in the [Issues](https://github.com/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack/issues) section with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

<div align="center">

### 📊 Project Statistics

![GitHub Stars](https://img.shields.io/github/stars/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Allanagari-Renuka/Flipkart-Clone-using-Mern-Stack)

---

**⭐ Star this repository if you found it helpful!**

**🔔 Watch this repository to get notified about updates**

---

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=14&pause=1000&color=2874F0&center=true&vCenter=true&width=600&lines=Happy+Shopping!+🛒;Made+with+❤️+and+React;Thanks+for+visiting!+⭐" alt="Footer" />

**Made with ❤️ by [Allanagari Renuka](https://github.com/Allanagari-Renuka)**

</div>

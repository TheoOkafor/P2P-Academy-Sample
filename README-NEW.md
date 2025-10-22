# P2P Academy - Blockchain Education Landing Page

A modern, responsive landing page for P2P Academy - a blockchain education platform serving both individual learners and enterprise clients.

## 🚀 Features

### For Individuals
- **Course Catalog**: Browse and purchase blockchain courses with pricing tiers
- **User Authentication**: Sign in functionality for returning students
- **Progress Tracking**: Continue learning where you left off
- **Video Testimonials**: Real student success stories

### For Enterprises
- **Custom Training Solutions**: Tailored blockchain education programs
- **Sales Contact Form**: Direct connection with sales team via modal
- **Enterprise Pricing**: Scalable solutions for teams of all sizes
- **Case Studies**: Real enterprise success stories

### Design & UX
- **Modern Design**: Clean, vibrant interface with trust-building elements
- **Mobile-First**: Fully responsive design for all devices
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Optimized images and efficient loading

## 🎨 Design System

### Colors
- **Primary Orange**: `#e87722` - Main CTA buttons and accent elements
- **Secondary Blue**: `#6281bb` - Enterprise sections and secondary CTAs
- **Neutral Grays**: Full spectrum for text, backgrounds, and borders

### Typography
- **Font**: Inter (Google Fonts) - Modern, readable sans-serif
- **Hierarchy**: Consistent heading scales with proper line heights
- **Accessibility**: WCAG compliant contrast ratios

### Components
- **Buttons**: Primary, secondary, and outline variations with hover effects
- **Cards**: Elevated containers with hover animations
- **Modals**: Video player and contact forms with backdrop blur
- **Forms**: Accessible inputs with validation states

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful SVG icons
- **JavaScript (ES6+)** - Modern JavaScript features

## 📱 Sections

1. **Hero Section**
   - Eye-catching header with value proposition
   - Dual CTAs (Join Today / Sign In)
   - Embedded video modal with play button
   - Animated floating elements and stats

2. **Courses Section**
   - Featured course cards with pricing
   - Student ratings and enrollment numbers
   - Course features and difficulty levels
   - Enrollment CTAs

3. **Enterprise Section**
   - B2B value proposition
   - Feature grid with icons
   - Contact sales modal form
   - Client logos and testimonials

4. **About Section**
   - Company timeline and milestones
   - Achievement statistics
   - Mission statement

5. **Testimonials Section**
   - Carousel with video testimonials
   - Student success stories
   - Video modal integration
   - Grid of additional testimonials

6. **Footer**
   - Comprehensive site navigation
   - Newsletter signup
   - Social media links
   - Contact information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open in browser**
   Navigate to `http://localhost:3001` (or the port shown in terminal)

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm test` - Run test suite

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navigation.jsx   # Main navigation bar
│   ├── Hero.jsx         # Hero section with video
│   ├── CoursesSection.jsx # Course catalog
│   ├── EnterpriseSection.jsx # B2B section
│   ├── AboutSection.jsx # Company info
│   ├── TestimonialsSection.jsx # Student testimonials
│   ├── Footer.jsx       # Site footer
│   ├── VideoModal.jsx   # Video player modal
│   └── EnterpriseContactModal.jsx # Sales contact form
├── data/                # Static data
│   ├── courses.js       # Course information
│   └── testimonials.js  # Student testimonials
├── App.jsx             # Main app component
├── index.css           # Global styles and Tailwind
└── index.jsx           # React entry point
```

## 🎯 Key Features Implemented

### User Experience
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Video modal with backdrop
- ✅ Interactive testimonial carousel
- ✅ Hover animations and transitions
- ✅ Loading states and micro-interactions

### Business Requirements
- ✅ Individual course purchase flows
- ✅ Enterprise contact form
- ✅ Sign-in functionality (placeholder)
- ✅ Video testimonials with placeholders
- ✅ Trust-building elements (stats, logos)

### Technical Excellence
- ✅ Responsive design (mobile-first)
- ✅ Accessibility best practices
- ✅ SEO-friendly structure
- ✅ Performance optimized
- ✅ Modern React patterns

## 🔧 Customization

### Adding New Courses
Edit `src/data/courses.js` to add new course entries:

```javascript
{
  id: 4,
  title: "New Course Title",
  description: "Course description...",
  price: 399,
  originalPrice: 499,
  // ... other properties
}
```

### Adding Testimonials
Edit `src/data/testimonials.js` to add new testimonials:

```javascript
{
  id: 5,
  name: "Student Name",
  role: "Job Title",
  company: "Company Name",
  content: "Testimonial content...",
  hasVideo: true, // or false
  // ... other properties
}
```

### Styling Changes
- Colors: Update `tailwind.config.js` theme configuration
- Fonts: Change Google Fonts import in `src/index.css`
- Components: Modify component classes or create new ones

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main

### Environment Variables
Create `.env` file for any API keys or configuration:
```
VITE_API_URL=your-api-url
VITE_STRIPE_KEY=your-stripe-key
```

## 🔮 Future Enhancements

### Authentication Integration
- Implement real sign-in with Auth0 or Firebase
- User dashboard for course progress
- Password reset functionality

### Payment Integration
- Stripe or PayPal checkout
- Subscription management
- Course access control

### Content Management
- Headless CMS integration (Contentful, Strapi)
- Dynamic course content
- Blog section

### Analytics
- Google Analytics integration
- Conversion tracking
- A/B testing setup

## 📞 Support

For questions or support, please contact:
- Email: hello@p2pacademy.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies.
const rawCourses = [
    { id: 1, title: "English (IELTS Readiness) Course", description: "Elevate your English with our IELTS English course online. Join our IELTS classes online for effective online training IELTS and sound like a native speaker!", category: "Business", price: "Free", rating: 4.8, image: "/images/courses/course-ielts.jpg" },
    { id: 2, title: "Artificial Intelligence Course Online", description: "Explore AI concepts like data handling, preprocessing, model selection, and evaluation. Buy an AI course online and enhance your skills with our comprehensive AI upskilling online courses in AI technology.", category: "AI & Data", price: "Free", rating: 4.9, image: "/images/courses/course-ai.jpg" },
    { id: 3, title: "React JS Course", description: "Master React JS with our online React courses! Gain practical skills, earn your React JS certification, and excel as a web developer. Join our React JS training online today!", category: "Development", price: "Free", rating: 4.7, image: "/images/courses/course-react.jpg" },
    { id: 4, title: "Interior Design Course", description: "Enroll in our online interior design course to earn your interior design course certificate. Explore free interior design courses with certificates and become the best interior decorator online.", category: "Design", price: "Free", rating: 4.6, image: "/images/courses/course-interior.jpg" },
    { id: 5, title: "Midjourney Mastery", description: "The Midjourney Mastery course empowers you to transform ideas into stunning visuals using Midjourney's innovative tools.", category: "Design", price: "Free", rating: 4.8, image: "/images/courses/course-midjourney.jpg" },
    { id: 6, title: "Diversity & Inclusion at Work Certificate Course", description: "Creating inclusive, welcoming workplaces that embrace diversity and have smart ideas and strategies on how best to appreciate that diversity, are better able and equipped to deal with the future.", category: "Business", price: "Free", rating: 4.5, image: "/images/courses/course-diversity.jpg" },
    { id: 7, title: "Online Coaching for Leaders Course", description: "This course is specifically designed for managers/leaders who believe in creating success through others.", category: "Business", price: "Free", rating: 4.7, image: "/images/courses/course-coaching.jpg" },
    { id: 8, title: "AI-Driven Content Mastery for Marketers", description: "Unlock AI Tools for Powerful Content Strategies | Elevate your content game with AI-driven ideation, SEO, visuals, and video creation for a competitive edge.", category: "AI & Data", price: "Free", rating: 4.8, image: "/images/courses/course-content.jpg" },
    { id: 9, title: "Online Real Estate Investment Courses", description: "Join our real estate investing course for beginners! Explore online real estate investment courses covering property investment fundamentals and strategies. Start your journey in courses for property investment today!", category: "Business", price: "Free", rating: 4.6, image: "/images/courses/real-estate.jpg" },
    { id: 10, title: "AI Enhanced Growth Marketing", description: "Master AI-Driven Marketing Strategies with Practical Lessons | Unlock the Full Potential of AI Tools to Optimize Campaigns, Enhance Customer Insights, and Transform Your Business Marketing for Scalable Growth.", category: "AI & Data", price: "Free", rating: 4.7, image: "/images/courses/growth-market.jpg" },
    { id: 11, title: "Financial Planning Certification Course", description: "Master your finances in 16 weeks with our online financial planning courses. Enroll in our certificate program in financial planning and enhance your skills with our financial advisor course online!", category: "Business", price: "Free", rating: 4.8, image: "/images/courses/financial.jpg" },
    { id: 12, title: "Online Stock Trading Course", description: "Master stock market investing with our online trading course. Enroll in stock trading courses, online day trading courses, and get certified with stock market courses online. Start your free trial today!", category: "Business", price: "Free", rating: 4.5, image: "/images/courses/stock.jpg" },
    { id: 13, title: "ChatGPT Prompt Engineering Course", description: "Master prompt engineering with our beginners prompt engineering course. Unlock ChatGPT's potential through advanced techniques for effective ChatGPT upskilling. Elevate your skills today!", category: "AI & Data", price: "Free", rating: 4.9, image: "/images/courses/chatgpt-prompt-engineering.jpg" },
    { id: 14, title: "Cryptocurrency Course", description: "Master blockchain, Bitcoin, and Ethereum in our comprehensive cryptocurrency trading course. Enroll in our cryptocurrency courses and training to elevate your skills and profit today!", category: "Business", price: "Free", rating: 4.6, image: "/images/courses/crypto.jpg" },
    { id: 15, title: "Online Critical Thinking & Decision Making", description: "Boost your skills with our critical thinking training course, designed to help you assess and identify core problems. Earn your critical thinking certification through effective critical thinking courses.", category: "Business", price: "Free", rating: 4.7, image: "/images/courses/critical-thinking.jpg" },
    { id: 16, title: "How to Use ChatGPT", description: "Unlock ChatGPT's potential with our comprehensive ChatGPT course! Join our ChatGPT workshops and gain skills from basics to advanced features. Enroll now for the ChatGPT course with a certificate!", category: "AI & Data", price: "Free", rating: 4.8, image: "/images/courses/chatgpt.jpg" },
    { id: 17, title: "ChatGPT for Professionals", description: "Unleash the Full Power of ChatGPT: Advanced Prompt Techniques for Business, Creativity, and Beyond | A Step-by-Step Guide to Becoming a Prompt Engineering Pro.", category: "AI & Data", price: "Free", rating: 4.7, image: "/images/courses/chatgpt-prompt-engineering.jpg" },
    { id: 18, title: "Customer Care and Complaint Handling", description: "Enhance your skills with customer complaint handling training and complaint management training.", category: "Business", price: "Free", rating: 4.5, image: "/images/courses/customer-care.jpg" },
    { id: 19, title: "Online Probability and Statistics Course", description: "Master probability rules and data summarization in this online statistics course. Earn your certificate in statistics online and boost your skills in probability and statistics!", category: "AI & Data", price: "Free", rating: 4.6, image: "/images/courses/probability.jpg" },
    { id: 20, title: "Time Management Course", description: "Master your schedule with our time management online course. Earn your time management certification and enhance productivity through effective time management training online.", category: "Business", price: "Free", rating: 4.7, image: "/images/courses/time-management.jpg" },
    { id: 21, title: "Sales Training Course", description: "Master your sales skills with our sales diploma online, sales certification courses, and expert training through comprehensive online courses for sales professionals. Enhance your career today!", category: "Business", price: "Free", rating: 4.6, image: "/images/courses/sales-training.jpg" },
    { id: 22, title: "Team Management and Motivation Certificate", description: "This course is for those who need to develop and improve team collaboration, teamwork and improve company morale.", category: "Business", price: "Free", rating: 4.7, image: "/images/courses/team-management.jpg" },
    { id: 23, title: "Online Accounting & Bookkeeping Course", description: "Master basic bookkeeping and accounting in our free online bookkeeping course, perfect for personal finance and small businesses.", category: "Business", price: "Free", rating: 4.5, image: "/images/courses/book-keeping.png" },
    { id: 24, title: "Agile Project Management Course", description: "Join our agile project management course to master software development through iterative methods. Get certified with our Agile PM course online, perfect for project managers pursuing Agile certification.", category: "Development", price: "Free", rating: 4.8, image: "/images/courses/agile-project-management.jpg" },
    { id: 25, title: "Technical Drawing Course", description: "Enhance your skills with technical drawing courses online in AutoCAD and SketchUp. Join a dedicated technical drawing class for top-notch training today!", category: "Design", price: "Free", rating: 4.5, image: "/images/courses/technical-drawing.jpg" },
    { id: 26, title: "Leadership and Management Courses", description: "Transform your leadership style with our online certification in leadership and management. Enroll for comprehensive training and earn your certification in leadership and management today!", category: "Business", price: "Free", rating: 4.8, image: "/images/courses/leadership-and-management.jpg" },
    { id: 27, title: "Social Media Marketing Training Course", description: "Master social media with our online social media marketing courses! Learn to create, launch, and analyze strategies through social media marketing training courses online.", category: "Business", price: "Free", rating: 4.7, image: "/images/courses/social-media.jpg" },
    { id: 28, title: "Video Production Course", description: "Master filmmaking with our video making courses. Enroll in our video editing and production course for comprehensive training video production and earn your videographer training certification today!", category: "Design", price: "Free", rating: 4.6, image: "/images/courses/video-production.jpg" },
    { id: 29, title: "Budget Graphic Design", description: "Explore the cheapest graphic design degree online. Learn graphic design affordably and master image editing, animation, and 3D rendering through certified online graphic design courses with certificates.", category: "Design", price: "Free", rating: 4.5, image: "/images/courses/budget.jpg" },
    { id: 30, title: "Graphic Design", description: "Ready to master graphic design? Enroll in our online graphic design courses with certificates and expand your creative skills in image editing, animation, custom layouts, and 3D rendering. Take your design expertise to the next level!", category: "Design", price: "₹1,250", rating: 4.7, image: "/images/courses/budget.jpg" },
    { id: 31, title: "Blogging, Content Marketing", description: "Master content marketing with our free blogging course with a certificate. Enroll in one of the top blogging courses to boost your skills in targeted blog writing for business success!", category: "Business", price: "₹1,250", rating: 4.6, image: "/images/courses/blog.jpg" },
    { id: 32, title: "SEO Certification Course", description: "Master SEO skills with our online SEO training course and enhance your digital marketing strategy. Earn your SEO certification today!", category: "Business", price: "₹1,250", rating: 4.8, image: "/images/courses/seo.png" },
    { id: 33, title: "Introduction to Digital Marketing", description: "Kickstart your digital marketing journey with this online digital marketing course. Master core concepts and earn your digital marketing certification and certificate online.", category: "Business", price: "₹1,250", rating: 4.7, image: "/images/courses/digital-marketing.png" },
    { id: 34, title: "Cyber Security", description: "Master front-end web development with our coding classes, upskill your coding through online courses, and earn certificates while exploring innovative 21st-century technologies.", category: "Development", price: "₹1,250", rating: 4.8, image: "/images/courses/computer-science.jpg" },
    { id: 35, title: "Master Coding and Emerging Technologies", description: "Master front-end web development with our coding classes, upskill your coding through online courses, and earn certificates while exploring innovative 21st-century technologies.", category: "Development", price: "₹1,250", rating: 4.9, image: "/images/courses/computer-science.jpg" },
    { id: 36, title: "Python Programming", description: "Master Python programming from basics to advanced topics in this online course. Cover syntax, data types, control structures, and OOP. Get your Python online certification today!", category: "Development", price: "₹1,250", rating: 4.8, image: "/images/courses/computer-science.jpg" },
    { id: 37, title: "Web Development", description: "Enroll in our web development certification course to build websites and applications. Master front-end and back-end skills with our web developer online program and earn a web development certificate online!", category: "Development", price: "₹1,250", rating: 4.7, image: "/images/courses/computer-science.jpg" },
    { id: 38, title: "(Credits-03) React JS", description: "Master React JS with our online React courses! Gain practical skills, earn your React JS certification, and excel as a web developer. Join our React JS training online today!", category: "Development", price: "₹1,250", rating: 4.8, image: "/images/courses/reactjs.png" },
    { id: 39, title: "Project Management", description: "Gain insight to project management principles and master the global skills needed to successfully run a project, lead and manage teams.", category: "Business", price: "₹1,250", rating: 4.7, image: "/images/courses/project-management.jpg" },
    { id: 40, title: "MS Excel Training Course Online", description: "Learn how to use Excel functions and create dynamic formulas to generate datasets and data visualisations in this online certification and excel training course.", category: "Business", price: "₹1,250", rating: 4.6, image: "/images/courses/ms-excel.jpg" },
    { id: 41, title: "Cloud Architecture", description: "Cloud computing allows for on-demand access to shared pools of resources, such as computing power and data storage, over the internet.", category: "Development", price: "₹1,250", rating: 4.8, image: "/images/courses/computer-science.jpg" },
    { id: 42, title: "Adobe Lightroom", description: "Master Adobe Lightroom with our online Lightroom course. Gain skills in composition, exposure, and editing. Enroll now for free Lightroom training and tutorials for comprehensive Lightroom training!", category: "Design", price: "₹1,250", rating: 4.6, image: "/images/courses/video-production.jpg" },
    { id: 43, title: "Master Photoshop", description: "Master Photoshop fundamentals and advanced skills in the best online Photoshop course. Enroll in our online Photoshop classes, including a free Photoshop course with a certificate for beginners!", category: "Design", price: "₹1,250", rating: 4.7, image: "/images/courses/video-production.jpg" },
    { id: 44, title: "Photography", description: "Join our professional photography classes to master skills from beginner to advanced. Enroll in free online photography courses with certificates and learn photography online today!", category: "Design", price: "₹1,250", rating: 4.7, image: "/images/courses/video-production.jpg" },
    { id: 45, title: "Data Analytics Certification Course", description: "Boost your decision-making and statistics skills with our data analyst online courses. Enroll now in a data analyst course free online with a certificate and earn your data analyst certification online!", category: "AI & Data", price: "₹1,250", rating: 4.8, image: "/images/courses/data-analytics.jpg" },
    { id: 46, title: "UX Design Certificate", description: "Master UX design in this online UX course, blending theory and practice.", category: "Design", price: "₹1,250", rating: 4.7, image: "/images/courses/ux.png" },
    { id: 47, title: "Game Design & Development", description: "Explore the difference between a game designer and developer. Enroll in game design online courses, game development courses, or earn a game development certificate online. Start your journey today!", category: "Development", price: "₹1,250", rating: 4.6, image: "/images/courses/computer-science.jpg" },
    { id: 48, title: "Computer Science Course", description: "Master programming fundamentals and control computers with this online training course for a computer science certificate online. Enroll in online computer technology courses and earn your computer certification courses online.", category: "Development", price: "₹1,250", rating: 4.8, image: "/images/courses/computer-science.jpg" },
    { id: 49, title: "How to Start a Business Course", description: "Master launching your own business with insights from top entrepreneurs in our online business training courses. Enroll today to kickstart your journey!", category: "Business", price: "₹1,250", rating: 4.7, image: "/images/courses/mba.jpg" },
    { id: 50, title: "HR Employee Management", description: "Enhance your skills with our HR Employee Management course. Master hiring, onboarding, and engagement to streamline HR management effectively through specialized HR upskilling courses and employee management courses.", category: "Business", price: "₹1,250", rating: 4.6, image: "/images/courses/hr.jpg" },
    { id: 51, title: "E-commerce Mastery", description: "Join our free eCommerce course online, perfect for aspiring entrepreneurs and established business owners. Get valuable insights with our e commerce certification course online and free ecommerce training!", category: "Business", price: "₹1,250", rating: 4.7, image: "/images/courses/digital-marketing.png" },
    { id: 52, title: "Mini MBA", description: "This mini MBA program offers an integrated view of the business world through a mini MBA online free course, perfect for those interested in a business mini-MBA or a mini MBA in business.", category: "Business", price: "₹1,250", rating: 4.9, image: "/images/courses/mba.jpg" }
];

function renderCourses(courses) {
  const grid = document.querySelector('.courses-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  courses.forEach((course, index) => {
    // Determine random/placeholder values for fields not provided in raw data
    const duration = ["6h 30m", "8h 00m", "12h 45m", "4h 20m"][index % 4]; 
    const level = ["Beginner", "Intermediate", "All Levels", "Advanced"][index % 4];
    
    // instructor defaults
    const instructors = ["Sarah", "Michael", "Emma", "David", "Jessica"];
    const instructorName = instructors[index % instructors.length];
    const instructorAvatar = `https://i.pravatar.cc/40?u=${course.id + 100}`; 
    const ratingCount = `(${(Math.random() * 5 + 1).toFixed(1)}k)`;

    // fallback images to display something nice if the local image is missing
    const fallbackImages = [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    ];
    const fallbackImage = fallbackImages[index % fallbackImages.length];

    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div class="course-image">
        <img src="${course.image}" alt="${course.title}" onerror="this.src='${fallbackImage}'" />
        <div class="course-duration">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="white" stroke-width="2"/>
            <path d="M8 4V8L11 11" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          ${duration}
        </div>
        <button class="wishlist-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 17.5L8.825 16.45C4.4 12.4583 1.5 9.85833 1.5 6.75C1.5 4.15 3.525 2.125 6.125 2.125C7.6 2.125 9.0125 2.7875 10 3.8625C10.9875 2.7875 12.4 2.125 13.875 2.125C16.475 2.125 18.5 4.15 18.5 6.75C18.5 9.85833 15.6 12.4583 11.175 16.45L10 17.5Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
      </div>
      <div class="course-content">
        <h3 class="course-title" title="${course.title}">${course.title}</h3>
        <div class="course-meta">
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 5.33333L8 2L14 5.33333V10.6667C14 11.0203 13.8595 11.3594 13.6095 11.6095C13.3594 11.8595 13.0203 12 12.6667 12H3.33333C2.97971 12 2.64057 11.8595 2.39052 11.6095C2.14048 11.3594 2 11.0203 2 10.6667V5.33333Z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            ${course.category}
          </div>
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 2V4M4 2V4M2 6H14M3 3H13C13.5523 3 14 3.44772 14 4V14C14 14.5523 13.5523 15 13 15H3C2.44772 15 2 14.5523 2 14V4C2 3.44772 2.44772 3 3 3Z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            ${level}
          </div>
        </div>
        <div class="course-footer">
          <div class="course-rating">
            <span class="star">★</span>
            <span class="rating-text">${course.rating}</span>
            <span class="rating-count">${ratingCount}</span>
          </div>
          <div class="course-instructor">
            <img src="${instructorAvatar}" alt="${instructorName}" class="instructor-avatar" />
            <span class="instructor-name">${instructorName}</span>
          </div>
        </div>
        <div class="course-action">
          <span class="course-price">${course.price}</span>
          <a href="#" class="enroll-btn">
            Enroll Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Update results count
  const resultsCount = document.querySelector('.results-count');
  if (resultsCount) {
    resultsCount.textContent = `Showing ${courses.length} of ${rawCourses.length} Results`;
  }
}

// Global state for pagination
let currentPage = 1;
const ITEMS_PER_PAGE = 9;

function renderPagination() {
  const totalPages = Math.ceil(rawCourses.length / ITEMS_PER_PAGE);
  const paginationContainer = document.querySelector('.pagination');
  if (!paginationContainer) return;
  
  paginationContainer.innerHTML = '';

  // Prev Button
  const prevBtn = document.createElement('button');
  prevBtn.className = 'page-btn page-prev';
  prevBtn.disabled = currentPage === 1;
  prevBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      updateView();
    }
  };
  paginationContainer.appendChild(prevBtn);

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      const pageBtn = document.createElement('button');
      pageBtn.className = `page-btn page-number ${i === currentPage ? 'active' : ''}`;
      pageBtn.textContent = i;
      pageBtn.onclick = () => {
        currentPage = i;
        updateView();
      };
      paginationContainer.appendChild(pageBtn);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const dots = document.createElement('span');
      dots.className = 'page-dots';
      dots.textContent = '...';
      paginationContainer.appendChild(dots);
    }
  }

  // Next Button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'page-btn page-next';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateView();
    }
  };
  paginationContainer.appendChild(nextBtn);
}

function updateView(isInitial = false) {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const coursesToRender = rawCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  renderCourses(coursesToRender);
  renderPagination();
  // Smooth scroll up to top of courses section, except on initial load
  if (!isInitial) {
    const hero = document.querySelector('.courses-hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  updateView(true);
});

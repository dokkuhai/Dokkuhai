// Multilingual Support
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-university': 'University',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-certificates': 'Certificates',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hi, I\'m <span class="highlight">Vũ Đức Hải</span>',
        'hero-im': 'I\'m a',
        'hero-description': 'Passionate fresher fullstack developer with a strong foundation in modern web technologies. Ready to contribute to innovative projects and grow in the tech industry.',
        'btn-view-work': 'View My Work',
        'btn-get-in-touch': 'Get In Touch',
        'about-title': 'About Me',
        'about-subtitle': 'Hello! I\'m a Fresher Fullstack Developer',
        'about-text1': 'I\'m passionate about creating innovative web applications and solving complex problems through code. As a recent graduate, I bring fresh perspectives and enthusiasm to every project I work on.',
        'about-text2': 'My journey in programming started during my university years, where I discovered my love for both frontend and backend development. I enjoy the entire process of building applications from conception to deployment.',
        'university-title': 'University',
        'skills-title': 'Skills & Technologies',
        'projects-title': 'Projects',
        'certificates-title': 'Certificates',
        'typing-phrases': ['Fullstack Developer', 'Problem Solver', 'Code Enthusiast', 'Tech Innovator', 'Creative Thinker']
    },
    vi: {
        'nav-home': 'Trang chủ',
        'nav-about': 'Về tôi',
        'nav-university': 'Trường đại học',
        'nav-skills': 'Kỹ năng',
        'nav-projects': 'Dự án',
        'nav-certificates': 'Chứng chỉ',
        'nav-contact': 'Liên hệ',
        'hero-greeting': 'Xin chào, tôi là <span class="highlight">Vũ Đức Hải</span>',
        'hero-im': 'Tôi là',
        'hero-description': 'Lập trình viên fullstack mới với nền tảng vững chắc về công nghệ web hiện đại. Sẵn sàng đóng góp vào các dự án sáng tạo và phát triển trong ngành công nghệ.',
        'btn-view-work': 'Xem công việc của tôi',
        'btn-get-in-touch': 'Liên hệ',
        'about-title': 'Về tôi',
        'about-subtitle': 'Xin chào! Tôi là lập trình viên Fullstack mới',
        'about-text1': 'Tôi đam mê tạo ra các ứng dụng web sáng tạo và giải quyết các vấn đề phức tạp thông qua code. Là một sinh viên vừa tốt nghiệp, tôi mang đến góc nhìn mới mẻ và sự nhiệt huyết cho mọi dự án mà tôi tham gia.',
        'about-text2': 'Hành trình lập trình của tôi bắt đầu trong những năm đại học, nơi tôi khám phá tình yêu của mình với cả frontend và backend development. Tôi thích toàn bộ quá trình xây dựng ứng dụng từ ý tưởng đến triển khai.',
        'university-title': 'Trường đại học',
        'skills-title': 'Kỹ năng & Công nghệ',
        'projects-title': 'Dự án',
        'certificates-title': 'Chứng chỉ',
        'typing-phrases': ['Lập trình viên Fullstack', 'Người giải quyết vấn đề', 'Người đam mê code', 'Nhà đổi mới công nghệ', 'Người tư duy sáng tạo']
    },
    ja: {
        'nav-home': 'ホーム',
        'nav-about': '私について',
        'nav-university': '大学',
        'nav-skills': 'スキル',
        'nav-projects': 'プロジェクト',
        'nav-certificates': '証明書',
        'nav-contact': 'お問い合わせ',
        'hero-greeting': 'こんにちは、私は<span class="highlight">Vũ Đức Hải</span>です',
        'hero-im': '私は',
        'hero-description': 'モダンなウェブ技術に強い基盤を持つ情熱的な新人フルスタック開発者です。革新的なプロジェクトに貢献し、技術業界で成長する準備ができています。',
        'btn-view-work': '私の作品を見る',
        'btn-get-in-touch': 'お問い合わせ',
        'about-title': '私について',
        'about-subtitle': 'こんにちは！私は新人フルスタック開発者です',
        'about-text1': '私は革新的なウェブアプリケーションの作成とコードを通じた複雑な問題の解決に情熱を持っています。最近の卒業生として、私が取り組むすべてのプロジェクトに新鮮な視点と熱意をもたらします。',
        'about-text2': '私のプログラミングの旅は大学時代に始まり、そこでフロントエンドとバックエンドの両方の開発への愛を発見しました。構想から展開まで、アプリケーションを構築する全過程を楽しんでいます。',
        'university-title': '大学',
        'skills-title': 'スキル＆テクノロジー',
        'projects-title': 'プロジェクト',
        'certificates-title': '証明書',
        'typing-phrases': ['フルスタック開発者', '問題解決者', 'コード愛好家', '技術革新者', '創造的思考者']
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update typing phrases
    phrases = translations[lang]['typing-phrases'] || phrases;
    
    // Update language indicator
    const languageIndicator = document.getElementById('current-language');
    if (languageIndicator) {
        languageIndicator.textContent = lang.toUpperCase();
    }
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
}

// Initialize language functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Language Toggle Functionality
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');

    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher')) {
                languageDropdown.classList.remove('show');
            }
        });

        // Language option selection
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                translatePage(lang);
                languageDropdown.classList.remove('show');
            });
        });
    }

    // Initialize with saved language
    translatePage(currentLanguage);
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

// Update theme toggle icon and profile photo
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    const profilePhoto = document.getElementById('profile-photo');
    
    if (body.getAttribute('data-theme') === 'dark') {
        icon.className = 'fas fa-sun';
        if (profilePhoto) {
            profilePhoto.src = 'assets/profile-photo-dark.jpg';
        }
    } else {
        icon.className = 'fas fa-moon';
        if (profilePhoto) {
            profilePhoto.src = 'assets/profile-photo-light.jpg';
        }
    }
}

// Initialize theme icon
updateThemeIcon();

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Typing Animation
const typingText = document.getElementById('typing-text');
let phrases = translations[currentLanguage]['typing-phrases'] || [
    'Fullstack Developer',
    'Problem Solver',
    'Code Enthusiast',
    'Tech Innovator',
    'Creative Thinker'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, 500);
            return;
        }
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
            return;
        }
    }
    
    setTimeout(typeWriter, isDeleting ? 100 : 150);
}

// Start typing animation
typeWriter();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .certificate-card, .about-content, .university-card');
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
});

function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Add styles
    messageElement.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: var(--border-radius);
        font-weight: 500;
        text-align: center;
        animation: fadeInUp 0.5s ease-out;
        background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
    `;
    
    // Add to form
    contactForm.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Form Validation
const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', clearError);
});

function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    // Remove existing error
    clearError(e);
    
    // Validate based on input type
    let isValid = true;
    let errorMessage = '';
    
    if (input.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (input.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }
    
    if (!isValid) {
        showInputError(input, errorMessage);
    }
}

function clearError(e) {
    const input = e.target;
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    input.style.borderColor = '';
}

function showInputError(input, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    `;
    
    input.style.borderColor = '#dc3545';
    input.parentNode.appendChild(errorElement);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.loading');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
});

// Skill Items Hover Effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.project-image');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Certificate Cards Animation
document.querySelectorAll('.certificate-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Social Links Hover Effect
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('.container');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    revealObserver.observe(element);
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance Optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    updateActiveLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Initialize all animations and effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    const loader = document.createElement('div');
    loader.className = 'loading';
    loader.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loader);
    
    // Initialize intersection observer for animations
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Initialize all hover effects
    initializeHoverEffects();
});

function initializeHoverEffects() {
    // Button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
}

// Error handling for missing elements
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
    }
    return element;
}

// Enhanced form validation
function validateForm() {
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateInput({ target: input })) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Add accessibility improvements
function enhanceAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 100;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('.hero');
    if (mainContent) {
        mainContent.setAttribute('id', 'main-content');
    }
}

// Initialize accessibility improvements
enhanceAccessibility();

// Add print styles support
const printStyles = `
    @media print {
        .navbar, .back-to-top, .social-links { display: none !important; }
        .hero { min-height: auto; }
        .section { page-break-inside: avoid; }
        .project-card, .certificate-card { break-inside: avoid; }
        body { font-size: 12pt; line-height: 1.4; }
        h1, h2, h3 { color: #000 !important; }
        .btn { border: 1px solid #000; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = printStyles;
document.head.appendChild(styleSheet);

console.log('Portfolio website initialized successfully!');

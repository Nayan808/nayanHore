// Typing effect for hero section
const typingText = document.getElementById('typing-text');
const texts = [
    ' python analyze_data.py --dataset large.json --output insights.html',
    ' sql --query "SELECT * FROM sales WHERE year = 2024"',
    ' power_bi --optimize --storage -25%',
    ' data_analyst Nayan_Hore --expert --1M+_records'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, 50);
    } else if (isDeleting && charIndex > 0) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, 30);
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, 100);
    }
}

// Initialize typing effect
setTimeout(typeText, 1000);

// Animate stats on scroll
function animateStatValue(stat) {
    const target = parseInt(stat.getAttribute('data-target'));
    const current = parseInt(stat.textContent);
    const increment = target / 50;
    
    if (current < target) {
        stat.textContent = Math.min(Math.ceil(current + increment), target);
        if (stat.textContent.endsWith('%')) {
            stat.textContent = stat.textContent.replace('%', '') + '%';
        } else if (stat.textContent.endsWith('k')) {
            stat.textContent = stat.textContent.replace('k', '') + 'k';
        } else if (stat.textContent.endsWith('M')) {
            stat.textContent = stat.textContent.replace('M', '') + 'M';
        }
        setTimeout(() => animateStatValue(stat), 20);
    } else {
        stat.textContent = target + (stat.getAttribute('data-target').includes('%') ? '%' : '');
        if (stat.getAttribute('data-target').includes('k')) {
            stat.textContent = target + 'k';
        } else if (stat.getAttribute('data-target').includes('M')) {
            stat.textContent = (target / 1000).toFixed(1) + 'M';
        }
    }
}

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-value')) {
                const stat = entry.target;
                if (!stat.hasAttribute('data-animated')) {
                    stat.setAttribute('data-animated', 'true');
                    animateStatValue(stat);
                }
            } else if (entry.target.classList.contains('skill-progress')) {
                const progress = entry.target;
                if (!progress.hasAttribute('data-animated')) {
                    progress.setAttribute('data-animated', 'true');
                    const width = progress.getAttribute('data-width');
                    progress.style.width = width + '%';
                }
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-value').forEach(stat => {
    observer.observe(stat);
});

document.querySelectorAll('.skill-progress').forEach(progress => {
    observer.observe(progress);
});

// Hero Chart - Line chart with data visualization
function drawHeroChart() {
    const canvas = document.getElementById('heroChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 300;
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Generate data
    const dataPoints = [];
    for (let i = 0; i <= 20; i++) {
        dataPoints.push({
            x: i,
            y: Math.sin(i / 3) * 50 + Math.random() * 30
        });
    }
    
    // Draw grid
    ctx.strokeStyle = '#2a3441';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
        const y = padding + (i * (height - 2 * padding) / 5);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    for (let i = 0; i <= 20; i++) {
        const x = padding + (i * (width - 2 * padding) / 20);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }
    
    // Scale and draw line
    const scaleX = (width - 2 * padding) / 20;
    const scaleY = (height - 2 * padding) / 100;
    
    ctx.strokeStyle = '#00d9ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    dataPoints.forEach((point, index) => {
        const x = padding + point.x * scaleX;
        const y = height - padding - point.y * scaleY;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = '#00d9ff';
    dataPoints.forEach((point) => {
        const x = padding + point.x * scaleX;
        const y = height - padding - point.y * scaleY;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Draw labels
    ctx.fillStyle = '#9ba4b0';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Time Series Analysis', width / 2, height - 10);
    
    ctx.textAlign = 'left';
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Data Value', 0, 0);
    ctx.restore();
}

// Contact Chart - Pie chart
function drawContactChart() {
    const canvas = document.getElementById('contactChart');
    const ctx = canvas.getContext('2d');
    
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 300;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    const data = [
        { label: 'Analysis', value: 35, color: '#00d9ff' },
        { label: 'Visualization', value: 30, color: '#7b61ff' },
        { label: 'Modeling', value: 25, color: '#ff006e' },
        { label: 'Reporting', value: 10, color: '#ffbd2e' }
    ];
    
    let currentAngle = -Math.PI / 2;
    
    data.forEach((item, index) => {
        const sliceAngle = (item.value / 100) * 2 * Math.PI;
        
        // Draw pie slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = item.color;
        ctx.fill();
        
        // Draw border
        ctx.strokeStyle = '#0a0e1a';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw label
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius + 30);
        const labelY = centerY + Math.sin(labelAngle) * (radius + 30);
        
        ctx.fillStyle = '#e0e0e0';
        ctx.font = '12px Inter';
        ctx.fillText(item.label, labelX, labelY);
        
        ctx.fillStyle = item.color;
        ctx.fillText(item.value + '%', labelX, labelY + 15);
        
        currentAngle += sliceAngle;
    });
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = '#141b2d';
    ctx.fill();
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Draw charts when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        drawHeroChart();
        drawContactChart();
    }, 100);
});

// Redraw charts on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        drawHeroChart();
        drawContactChart();
    }, 250);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Add glow effect on hover for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Add active state to navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

console.log('%cNayan Hore - Data Analyst Portfolio Loaded', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cAll systems operational. Branch Topper with 8.99 CGPA!', 'color: #9ba4b0; font-size: 12px;');


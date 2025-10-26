# Data Analyst Portfolio Website

A modern, dark-themed portfolio website designed specifically for data analysts with a focus on data visualization aesthetics and analytical design elements.

## Features

- **Dark Theme**: Sleek dark color scheme optimized for data visualization
- **Interactive Charts**: Canvas-based line and pie charts
- **Smooth Animations**: Animated statistics and progress bars
- **Terminal-style Hero**: Animated terminal interface showcasing data analysis commands
- **Responsive Design**: Fully responsive across all devices
- **Section-based Layout**:
  - Hero section with terminal animation
  - About section with animated statistics
  - Skills section with progress bars
  - Projects showcase with metrics
  - Contact section with interactive chart

## Color Palette

- **Background**: Dark navy (`#0a0e1a`, `#141b2d`, `#1a2132`)
- **Accent Colors**: Cyan (`#00d9ff`), Purple (`#7b61ff`), Pink (`#ff006e`)
- **Text**: Light gray tones (`#e0e0e0`, `#9ba4b0`)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (Canvas API, Intersection Observer)
- Google Fonts (Inter, JetBrains Mono)

## Getting Started

1. Open `index.html` in a web browser
2. No build process or dependencies required

## Customization

### Update Content
- Edit `index.html` to change text, projects, and contact information
- Modify skills in the skills section
- Add/remove project cards as needed

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --bg-primary: #0a0e1a;
    --accent-primary: #00d9ff;
    /* ... more variables */
}
```

### Modify Charts
- Hero chart: Edit `drawHeroChart()` function in `script.js`
- Contact chart: Edit `drawContactChart()` function in `script.js`
- Add your own data visualizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Open source - feel free to use for your own portfolio!

---

**Made with data-driven insights**


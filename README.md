# DevPortfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern, responsive developer portfolio website to showcase your skills, projects, and professional experience.

![DevPortfolio Preview](assets/images/preview.png)

## 📋 Features

- **Responsive Design**: Looks great on all devices - desktop, tablet, and mobile
- **Project Showcase**: Highlight your best work with detailed project cards
- **Skills Section**: Visual representation of your technical skills and proficiency levels
- **Experience Timeline**: Chronological display of your educational and professional journey
- **Contact Form**: Allow potential clients and employers to reach out easily
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience
- **SEO Optimized**: Built with search engine visibility in mind

## 🚀 Technologies Used

- HTML5, CSS3, JavaScript
- [Bootstrap](https://getbootstrap.com/) for responsive layout
- [Font Awesome](https://fontawesome.com/) for icons
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [FormSubmit](https://formsubmit.co/) for contact form handling

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Neuvax/devportfolio.git
   cd devportfolio
   ```

2. **Open with a live server**
   - If you have VS Code, you can use the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - Alternatively, you can use any local development server of your choice

## 🔧 Configuration

1. Edit `index.html` to update:
   - Personal information
   - Skills
   - Projects
   - Experience
   - Education

2. Customize styles in `css/styles.css`

3. Replace images in the `assets/images/` directory with your own

4. Update `assets/resume.pdf` with your latest resume

## 🎨 Customization

### Adding a New Project

```html
<div class="project-card">
  <img src="assets/images/projects/project-name.jpg" alt="Project Name">
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Project description goes here. Explain what the project does and the technologies used.</p>
    <div class="project-links">
      <a href="https://github.com/yourusername/project-repo" target="_blank">
        <i class="fab fa-github"></i> Repository
      </a>
      <a href="https://project-demo-link.com" target="_blank">
        <i class="fas fa-external-link-alt"></i> Live Demo
      </a>
    </div>
  </div>
</div>
```

### Adding a New Skill

```html
<div class="skill-item">
  <i class="fab fa-skill-icon"></i>
  <h4>Skill Name</h4>
  <div class="skill-progress">
    <div class="progress-bar" style="width: 85%"></div>
  </div>
</div>
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Neuvax/devportfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

If you have any questions or feedback, please reach out:

- GitHub: [@Neuvax](https://github.com/Neuvax)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com
- Website: [your-website.com](https://your-website.com)

---

⭐️ From [Neuvax](https://github.com/Neuvax)

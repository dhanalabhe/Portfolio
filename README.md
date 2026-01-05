
# Personal Portfolio Website

A personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Motion** for animations. This website showcases my skills, projects, and experience. It supports **dark/light mode**, responsive design, and smooth animations for an engaging user experience.

---

## 🚀 Features

- Fully responsive design for mobile, tablet, and desktop
- Dark/Light mode toggle
- About Me section with info cards and tools
- Skills section showcasing technical skills with icons
- Work/Projects section with animated project cards
- Contact form integrated with [Web3Forms](https://web3forms.com/)
- Smooth fade-in and slide animations for sections

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15, React
- **Styling:** Tailwind CSS
- **Animations:** Motion (motion/react)
- **Forms:** Web3Forms for handling contact submissions
- **Images:** Next.js Image component for optimized images

---

## 📂 Project Structure

- `app/components` - All reusable components (Navbar, About, Skills, Work, Contact)
- `app/page.js` - Main page importing all sections
- `assets` - Images, icons, and project data
- `styles` - Tailwind configuration

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

This project can be easily deployed on **Vercel**:

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your GitHub repository.
3. Set up your project and deploy.
4. Your portfolio will be live at the generated URL.

---

## 📩 Contact Form

* The contact form uses [Web3Forms](https://web3forms.com/) API.
* You need to replace the `access_key` in `Contact.jsx` with your own Web3Forms API key.

---

## 📦 Scripts

* `npm run dev` - Run development server
* `npm run build` - Build for production
* `npm run start` - Start production server

---

## 🎨 Customization

* Add your own projects in `assets/workData.js`.
* Add your skills in `assets/serviceData.js`.
* Add your personal info in `assets/infoList.js`.

---

## 📄 License

This project is open source under the MIT License.

---

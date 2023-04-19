const inquirer = require ('inquirer')
const fs = require ('fs')

const generateHTML = ({}) => 
`<!DOCTYPE html>
<html>

<head>
  <title>Dom's Portfolio</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
    integrity="sha384-H1Y76v+NvDxQcVdXUsHhbb7nyu/BzjUw+c+HmZpFOCnVvTgTcfI7zDq+3UvxJ6U1"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
</head>

<body>

  <header>
    <h1>Dom Spadafora</h1>
  </header>

  <nav>
    <a href="#about-me">About Me</a>
    <a href="https://www.linkedin.com/in/dom-spadafora-81b76480/">Work Experience</a>
    <a href="#contact-me">Contact Me</a>
  </nav>


  <main>

    <section id="about-me">
      <h2>About Me</h2>
      <p>
        Currently I am a Web Developer holding a Bachelor of Arts in Sports Management and a minor Public Relations. I
        recently earned a certificate in Full Stack Development from the University of Central Florida, where I
        developed skills in JavaScript, CSS, React.js, responsive web design, and more. As an innovative problem-solver,
        I enjoy building web applications that will benefit someones everyday life. Please click on my Work Experience
        link above to learn more about me, or visit some of my recent projects to the right!

        <img src="assets/images/IMG_4634 (1).jpg" alt="Doms-Image" class="center">
    </section>



    <div id="work-experience" class="products">
      <section class="card">
        <header>Travel Assistant</header>
        <a href="https://domspadafora.github.io/Alt-F404-Travel-Assistant/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/images/Flight Assistant.PNG" alt="Project-1"></a>
        <footer>
          <p>This web application allows people to view available AirBnb locations using the information from a plane
            ticket.</p>
        </footer>
      </section>
      <section class="card">
        <header>Nanny's Diary</header>
        <a href="https://lit-depths-94534.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img
            src="./assets/images/Nannys Diary.PNG" alt="Project-2"></a>
        <footer>
          <p>Nanny's Diary connects caretakers with parents on a single platform. They are able to interact
            leaving updates for each other. </p>
        </footer>
      </section>
      <section class="card">
        <header>Project 3</header>
        <img src="./assets/images/ComingSoon" alt="Project 3" />
      </section>
      <section class="card">
        <header>Project 4</header>
        <img src="./assets/images/ComingSoon" alt="project-4" />
      </section>

    </div>
  </main>


  <footer>
    <header id="contact-me">
      <li>Email: Domspadafora@gmail.com</li>
      <li>Phone: 260-414-6869</li>
      <li>Github: <a href="https://github.com/DomSpadafora">Click Me</a></li>
    </header>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
    integrity="sha384-H1Y76v+NvDxQcVdXUsHhbb7nyu/BzjUw+c+HmZpFOCnVvTgTcfI7zDq+3UvxJ6U1"
    crossorigin="anonymous"></script>
</body>

</html>`;
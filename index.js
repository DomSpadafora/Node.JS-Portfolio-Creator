const inquirer = require('inquirer')
const fs = require('fs')

const generateHTML = ({ name, linkedIn, bio, headshot, project1Title, project1Deploy }) =>
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
    <h1>${name}</h1>
  </header>

  <nav>
    <a href="#about-me">About Me</a>
    <a href="${linkedIn}">Work Experience</a>
    <a href="#contact-me">Contact Me</a>
  </nav>


  <main>

    <section id="about-me">
      <h2>About Me</h2>
      <p>${bio}</p>

        <img src="${headshot}" alt="Doms-Image" class="center">
    </section>



    <div id="work-experience" class="products">
      <section class="card">
        <header>${project1Title}</header>
        <a href="${project1Deploy}" target="_blank" rel="noopener noreferrer">
          <img src="${project1IMG}" alt="Project-1"></a>
        <footer>
          <p>${project1Description}</p>
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

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'What is your LinkedIn URL?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Write a bio for your AboutMe section.',
        },
        {
            type: 'input',
            name: 'headshot',
            message: 'What is the src for your headshot image? ie: "assets/images/biopic.png"',
        },
        {
            type: 'input',
            name: 'project1Title',
            message: 'What is the title of your first project?',
        },
        {
            type: 'input',
            name: 'project1Deploy',
            message: 'What is the deployed url for Project 1?',
        },
        {
            type: 'input',
            name: 'project1IMG',
            message: 'What is the src for Project 1 image? ie: "assets/images/project1.png" ',
        },
        {
            type: 'input',
            name: 'project1Description',
            message: 'Write a description about Project 1',
        },

    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
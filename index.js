const inquirer = require('inquirer')
const fs = require('fs')

const generateHTML = ({ name, linkedIn, bio, headshot, project1Title, project1Deploy, project1IMG, project1Description, github }) =>
  `<!DOCTYPE html>
    <html>
    
    <head>
      <title>Dom's Portfolio</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-H1Y76v+NvDxQcVdXUsHhbb7nyu/BzjUw+c+HmZpFOCnVvTgTcfI7zDq+3UvxJ6U1" crossorigin="anonymous">
        </script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
    </head>
    
    <body>
    
      <h1>${name}</h1>
    
      <main>
    
        <div id="about-me">
          <h2>About Me</h2>
          <p>${bio}</p>
    
            <img src="${headshot}"  class="headshot">
        </div>
    
    
    
        <div id="work-experience" class="products">
          <section class="card">
            <h2>${project1Title}</h2>
            <a href="${project1Deploy}" target="_blank" rel="noopener noreferrer">
              <img src="${project1IMG}" alt="Project-1"></a>
            <p>${project1Description}</p>
          </section>
          
          <section class="card">
            <h2>Nanny's Diary</h2>
            <a href="https://lit-depths-94534.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img
                src="./assets/images/Nannys Diary.PNG" alt="Project-2"></a>
    
            <p>Nanny's Diary connects caretakers with parents on a single platform. They are able to interact
              leaving updates for each other. </p>
    
          </section>
          <section class="card">
            <h2>Project 3</h2>
            <img src="./assets/images/ComingSoon" alt="Project 3" />
          </section>
          <section class="card">
            <h2>Project 4</h2>
            <img src="./assets/images/ComingSoon" alt="project-4" />
          </section>
    
        </div>
      </main>
    
    
      <footer>
        <a href="${linkedIn}"><img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon" /></a>
        <a href="${github}"><img src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github" className="icon" /></a>
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
      name: 'github',
      message: 'What is your Github URL?',
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
const inquirer = require('inquirer')
const fs = require('fs')

const generateHTML = ({ name, linkedIn, bio, headshot, project1Title, project1Deploy, project1IMG, project1Description, github,
  project2Title, project2Deploy, project2IMG, project2Description, project3Title, project3Deploy, project3IMG, project3Description,
  project4Title, project4Deploy, project4IMG, project4Description, }) =>

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
            <h2>${project2Title}</h2>
            <a href="${project2Deploy}" target="_blank" rel="noopener noreferrer">
              <img src="${project2IMG}" alt="Project-1"></a>
            <p>${project2Description}</p>
          </section>

          <section class="card">
            <h2>${project3Title}</h2>
            <a href="${project3Deploy}" target="_blank" rel="noopener noreferrer">
              <img src="${project3IMG}" alt="Project-1"></a>
            <p>${project3Description}</p>
          </section>

          <section class="card">
            <h2>${project4Title}</h2>
            <a href="${project4Deploy}" target="_blank" rel="noopener noreferrer">
              <img src="${project4IMG}" alt="Project-1"></a>
            <p>${project4Description}</p>
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
    {
      type: 'input',
      name: 'project2Title',
      message: 'What is the title of your Project 2?',
    },
    {
      type: 'input',
      name: 'project2Deploy',
      message: 'What is the deployed url for Project 2?',
    },
    {
      type: 'input',
      name: 'project2IMG',
      message: 'What is the src for Project 2 image? ie: "assets/images/project1.png" : ',
    },
    {
      type: 'input',
      name: 'project2Description',
      message: 'Write a description about Project 2',
    },
    {
      type: 'input',
      name: 'project3Title',
      message: 'What is the title of your Project 3?',
    },
    {
      type: 'input',
      name: 'project3Deploy',
      message: 'What is the deployed url for Project 3?',
    },
    {
      type: 'input',
      name: 'project3IMG',
      message: 'What is the src for Project 3 image? ie: "assets/images/project1.png" : ',
    },
    {
      type: 'input',
      name: 'project3Description',
      message: 'Write a description about Project 3',
    },
    {
      type: 'input',
      name: 'project4Title',
      message: 'What is the title of your Project 4?',
    },
    {
      type: 'input',
      name: 'project4Deploy',
      message: 'What is the deployed url for Project 4?',
    },
    {
      type: 'input',
      name: 'project4IMG',
      message: 'What is the src for Project 4 image? ie: "assets/images/project1.png" : ',
    },
    {
      type: 'input',
      name: 'project4Description',
      message: 'Write a description about Project 4',
    },


  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
// Employees Array of Objects
const employees = [
  {
    name: "Ben",
    title: "Software developer",
    institute: "Harvard University",
    email: "ben@gmail.com",
    image: "./ben.jpg",
    socialMedia: [
      {
        dribble: {
          url: "https://www.dribble.com/Ben",
          cssClasses: "fa fa-dribbble",
        },
        twitter: {
          url: "https://www.twitter.com/Ben",
          cssClasses: "fa fa-twitter",
        },
        linkedIn: {
          url: "https://www.Linkedin.com/Ben",
          cssClasses: "fa fa-linkedin",
        },
        facebook: {
          url: "https://www.facebook.com/Ben",
          cssClasses: "fa fa-facebook",
        },
      },
    ],
  },

  {
    name: "Sarah",
    title: "Web developer",
    institute: "Pakistan University",
    email: "sarah@gmail.com",
    image: "./sarah.jpg",
    socialMedia: [
      {
        dribble: {
          url: "https://www.dribble.com/Sarah",
          cssClasses: "fa fa-dribbble",
        },
        twitter: {
          url: "https://www.twitter.com/Sarah",
          cssClasses: "fa fa-twitter",
        },
        linkedIn: {
          url: "https://www.Linkedin.com/Sarah",
          cssClasses: "fa fa-linkedin",
        },
        facebook: {
          url: "https://www.facebook.com/Sarah",
          cssClasses: "fa fa-facebook",
        },
      },
    ],
  },

  {
    name: "John",
    title: "Android developer",
    institute: "Cambridge University",
    email: "john@gmail.com",
    image: "./john.jpg",
    socialMedia: [
      {
        dribble: {
          url: "https://www.dribble.com/John",
          cssClasses: "fa fa-dribbble",
        },
        twitter: {
          url: "https://www.twitter.com/John",
          cssClasses: "fa fa-twitter",
        },
        linkedIn: {
          url: "https://www.Linkedin.com/John",
          cssClasses: "fa fa-linkedin",
        },
        facebook: {
          url: "https://www.facebook.com/John",
          cssClasses: "fa fa-facebook",
        },
      },
    ],
  },

  {
    name: "Seema",
    title: "Software developer",
    institute: "Karachi University",
    email: "seema@gmail.com",
    image: "./seema.jpeg",
    socialMedia: [
      {
        dribble: {
          url: "https://www.dribble.com/Seema",
          cssClasses: "fa fa-dribbble",
        },
        twitter: {
          url: "https://www.twitter.com/Seema",
          cssClasses: "fa fa-twitter",
        },
        linkedIn: {
          url: "https://www.Linkedin.com/Seema",
          cssClasses: "fa fa-linkedin",
        },
        facebook: {
          url: "https://www.facebook.com/Seema",
          cssClasses: "fa fa-facebook",
        },
      },
    ],
  },

  {
    name: "Hanah",
    title: "Java developer",
    institute: "Oxford University",
    email: "seema@gmail.com",
    image: "./hanah.jpeg",
    socialMedia: [
      {
        dribble: {
          url: "https://www.dribble.com/Hanah",
          cssClasses: "fa fa-dribbble",
        },
        twitter: {
          url: "https://www.twitter.com/Hanah",
          cssClasses: "fa fa-twitter",
        },
        linkedIn: {
          url: "https://www.Linkedin.com/Hanah",
          cssClasses: "fa fa-linkedin",
        },
        facebook: {
          url: "https://www.facebook.com/Hanah",
          cssClasses: "fa fa-facebook",
        },
      },
    ],
  }
];

// Create all employees card dynamically
document.body.innerHTML = employees.map(function (employee) {
  return `<div class="card">
              <img src= ${employee.image} alt=${employee.name} style="width: 100%;" />
              <h1>${employee.name}</h1>
              <p class="title">${employee.title}</p>
              <p>${employee.institute}</p>
              ${socialMedia()}
              <p><a href="mailto:${employee.email}"><i class="fa fa-email"></i><button>Contact</button></a></p>
          </div>`;

  // call social media urls and icons of all employees
  function socialMedia() {
    let icons_urls = [];
    for (key in employee.socialMedia[0]) {
      icons_urls.push(`<a href="${employee.socialMedia[0][key].url}">
      <i class="${employee.socialMedia[0][key].cssClasses}"></i></a>`);
    }
    return icons_urls.join('&nbsp;');
  }

}).join('');
// All the text on the site lives here. Search for TODO to find what to fill in.

export const site = {
  name: "Zawad",
  role: "Full-Stack Software Developer",
  location: "Dhaka, Bangladesh",
  intro:
    "Computer Science graduate from BRAC University. I build web applications end to end, from the database to the interface.",
  availability: "Open to full-stack developer roles", // set to "" to hide
  url: "https://zawad-portfolio-alpha.vercel.app", // TODO: your live URL once deployed (used for share previews)
};

export const links = {
  email: "zawad.ridwan2002@gmail.com", // contact form messages go here
  github: "https://github.com/Zawad-ridwan",
  linkedin: "https://www.linkedin.com/in/zawad-ridwan-10b68928b/",
  resume: "/resume.pdf", // put your CV at public/resume.pdf; the Resume button hides itself until the file exists
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "Hello there! I'm Zawad. I studied Computer Science and Engineering in BRAC University, and somewhere between algorithms classes and late-night lab submissions I found out that what I enjoy most is building things people can actually open and use.",
    "Away from the keyboard you'll find me on a long drive, on a football pitch or badminton court, or at home with my cat.",
  ],
  likes: ["Long drives", "Football", "Badminton", "Cat person"],
};

// Same groups and skills as the CV. "short" is the small mark shown on each badge.
export const skills = [
  {
    group: "Languages",
    items: [
      { name: "JavaScript", short: "JS" },
      { name: "TypeScript", short: "TS" },
      { name: "PHP", short: "PHP" },
      { name: "HTML5", short: "H5" },
      { name: "CSS3", short: "C3" },
      { name: "Python", short: "Py" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", short: "Re" },
      { name: "React Router", short: "RR" },
      { name: "React Query", short: "RQ" },
      { name: "Tailwind CSS", short: "Tw" },
      { name: "Motion", short: "Mn" },
      { name: "Responsive Design", short: "RD" },
      { name: "Design Systems", short: "DS" },
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      { name: "Node.js", short: "No" },
      { name: "Express.js", short: "Ex" },
      { name: "Laravel", short: "Lv" },
      { name: "REST API Design", short: "API" },
      { name: "JWT Authentication", short: "JWT" },
      { name: "Role-Based Access Control", short: "RB" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MongoDB", short: "Mo" },
      { name: "Mongoose", short: "Mg" },
      { name: "Eloquent ORM", short: "EO" },
      { name: "Schema Design", short: "SD" },
    ],
  },
  {
    group: "Browser & AI",
    items: [
      { name: "Browser Extensions (WebExtensions API)", short: "Ext" },
      { name: "DOM Scripting", short: "DOM" },
      { name: "AI API Integration", short: "AI" },
    ],
  },
  {
    group: "Tools & Testing",
    items: [
      { name: "Git", short: "Git" },
      { name: "GitHub", short: "GH" },
      { name: "GitHub Actions (CI)", short: "CI" },
      { name: "ESLint", short: "ES" },
      { name: "Prettier", short: "Pr" },
      { name: "PHPUnit", short: "PU" },
      { name: "Vercel", short: "Vc" },
    ],
  },
];

export const journey = [
  {
    tab: "University",
    title: "B.Sc. in Computer Science & Engineering",
    org: "BRAC University",
    period: "Oct 2021 – Sept 2026", // same as the CV
    points: [
      "Built a foundation in data structures, algorithms, databases and software engineering.",
      "Wrote coursework and lab projects in Python and JavaScript.",
    ],
  },
  {
    tab: "Today",
    title: "Full-Stack Developer",
    org: "Dhaka",
    period: "Now",
    points: [
      "Building web apps with React, TypeScript, Node.js, Express, MongoDB and Laravel.",
      "Currently building Travel Tracker, a travel site with custom-designed UI components.",
      "Open to full-stack developer roles.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string; // GitHub URL. Leave "" to hide the icon.
  live?: string; // live site URL. Leave "" to hide the icon.
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "Jachai",
    description:
      "A multi-modal web filtering browser extension. It reads what a page is showing, runs it past AI models, and rewrites the page on the fly with DOM scripting.",
    tags: ["Browser extension", "AI integrations", "DOM scripting", "JavaScript"],
    repo: "https://github.com/Zawad-ridwan/Jachai-",
    live: "",
  },
  {
    title: "Grocery Track BD",
    description:
      "A web platform for Bangladesh's grocery supply chain that connects shopkeepers, product companies and delivery workers in one system.",
    tags: ["Web application", "Multi-role platform", "Supply chain"],
    repo: "https://github.com/Funcoder-MADARA/GroceryTrackBD",
    live: "",
  },
  {
    title: "Event Management System",
    description:
      "A full-stack event management web application built with Laravel (PHP) on the MVC pattern, with a relational database modelled through migrations, a Tailwind CSS interface and an automated PHPUnit test suite.",
    tags: ["PHP", "Laravel", "Eloquent ORM", "Tailwind CSS", "PHPUnit"],
    repo: "https://github.com/Zawad-ridwan/Event_Management_System",
    live: "",
  },
  {
    title: "Travel Tracker",
    description:
      "A travel tracking website built on frontend UI components I'm designing myself. Still in the making.",
    tags: ["Custom UI components", "Frontend"],
    repo: "https://github.com/Zawad-ridwan/Travel-Tracker",
    live: "",
    // inProgress: true,
  },
];

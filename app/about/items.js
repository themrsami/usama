import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Personal = () => (
  <div className="p-4 flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 text-black dark:text-white">
    <h2 className="text-lg font-semibold">Personal</h2>
    <p>Hi, I am Usama Nazir, a versatile professional specializing in front-end development and mobile app development.</p>
  </div>
);

const Education = () => (
  <div className="p-4 flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 text-black dark:text-white">
    <h2 className="text-lg font-semibold">Education</h2>
    <p>Bachelor of Science in Physics (Hons. 4-Years) from COMSATS University, Lahore (Feb-2019 – March-2023)</p>
  </div>
);

const Skills = () => (
  <div className="p-4 flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 text-black dark:text-white">
    <h2 className="text-lg font-semibold">Skills</h2>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>React, Angular, Vue.js</li>
      <li>Responsive Web Design</li>
      <li>Version Control (Git)</li>
      <li>UI/UX Design</li>
    </ul>
  </div>
);

const Experience = () => (
  <div className="p-4 flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 text-black dark:text-white">
    <h2 className="text-lg font-semibold">Experience</h2>
    <ul>
      <li>A personal website to showcase my skills and projects, built with React and Tailwind CSS.</li>
      <li>Developed a fully functional e-commerce site using Angular and Firebase.</li>
      <li>Created a dynamic blog platform with user authentication and content management using Vue.js and Node.js.</li>
    </ul>
  </div>
);

const Hobbies = () => (
  <div className="p-4 flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 text-black dark:text-white">
    <h2 className="text-lg font-semibold">Hobbies</h2>
    <p>I enjoy coding, exploring new technologies, and solving complex problems. In my free time, I love reading and playing video games.</p>
  </div>
);

export const items = [
  {
    title: "Personal Information",
    description: "Learn more about who I am and my background.",
    header: <Personal />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Educational Background",
    description: "My academic journey and qualifications.",
    header: <Education />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Professional Skills",
    description: "An overview of my technical and soft skills.",
    header: <Skills />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Work Experience",
    description: "Highlights of my professional experience.",
    header: <Experience />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hobbies and Interests",
    description: "What I enjoy doing in my spare time.",
    header: <Hobbies />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

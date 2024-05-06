import Project from "../Project";
const projectData = [
  {
    title: "ChillTrack: The Cool Inventory Manager",
    description:
      "This application was created for HVAC professionals to keep inventory of their personal work vans. Through the information in Inventory, the user may also create an invoice on the go!",
    image: "/chilltrack.png",
    link: "https://chilltrack-4a728d00a787.herokuapp.com/",
  },
  {
    title: "JATE",
    description: "This app takes and stores notes without a server",
    image: "/JATE2.png",
    link: "https://aqueous-tor-40485-7201b5bf5bf3.herokuapp.com/",
  },
  {
    title: "Note Taker",
    description: "This note taking app allows users to create and delete personal notes",
    image: "/galaxy.jgp",
    link: "https://frozen-cliffs-63898-85cbe2592bad.herokuapp.com/"
  }
];
export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      {projectData.map(({ title, description, image, link }) => (
        <Project
          title={title}
          description={description}
          image={image}
          link={link}
        />
      ))}
    </div>
  );
}

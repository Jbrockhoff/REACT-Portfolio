import Project from "../Project"
const projectData = [
  { title: "Project One", description: "Description 1", image: "/galaxy.jpg", link: "www.google.com"},
  { title: "Project Two", description: "Description 2", image: "/galaxy.jpg", link: "www.google.com"}
]
export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
        { projectData.map(({title, description, image, link}) => <Project title = {title} description = {description} image = {image} link = {link} />) }
    </div>
  );
}

export default function Project({ title, description, image, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img className="project-image" src={image} />
      <a href={link}>{title}</a>
    </div>
  );
}

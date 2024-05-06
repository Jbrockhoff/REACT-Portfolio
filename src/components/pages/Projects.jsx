import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
    title: "J.A.T.E.",
    description: "This app takes and stores notes without a server",
    image: "/JATE2.png",
    link: "https://aqueous-tor-40485-7201b5bf5bf3.herokuapp.com/",
  },
  {
    title: "Note Taker",
    description:
      "This note taking app allows users to create and delete personal notes",
    image: "/notetaker3.png",
    link: "https://frozen-cliffs-63898-85cbe2592bad.herokuapp.com/",
  },
  {
    title: "Social Networker",
    description:
      "This application will provide a client with a API using a NoSql database so that the intended social networking website can handle large amounts of unstructured data. It will track users, generate a friends list, and accept thoughts using Insomnia",
    image: "/social.png",
    link: "https://drive.google.com/file/d/1Wcz5JD9ot0dyiZ7sfClg-vuHZ9V5d0TY/view?usp=sharing",
  },
  {
    title: "E-Commerce Back End",
    description:
      "This back end application allows a user (internet retail manager) to get, create, update, and delete inventory (by category, product, and tag) using the Insomnia program. This will generate current and updated lists of a store's items available for purchase, the amount in stock, price, and attributes such as color and provide the retail company the ability to compete with other e-commerce companies.",
    image: "/ecommerce1.png",
    link: "https://drive.google.com/file/d/1tCUt_9TffjTeNI67n_BQiV0nPMKvXjPM/view",
  },
];
export default function Projects() {
  return (
    <div className="grid text-center">
      <div class="g-col-6 g-col-md-4">
      {projectData.map(({ title, description, image, link }) => (
        <div className="g-col-6">
          <Card style={{ width: '18rem' }} className="card-custom">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="light" href={link}>{title}</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
}

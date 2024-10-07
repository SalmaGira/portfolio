/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useState } from "react";

export default function ProjectDetails() {
  const [projectId, setProjectId] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Project 1",
      description: "This is project 1",
      image: "https://picsum.photos/512",
    },
    {
      id: 1,
      title: "Project 2",
      description: "This is project 2",
      image: "https://picsum.photos/513",
    },
    {
      id: 2,
      title: "Project 3",
      description: "This is project 3",
      image: "https://picsum.photos/514",
    },
  ];

  return (
    <div>
      <div className="my-5">
        <h1>{projects[projectId].title}</h1>
        <p>{projects[projectId].description}</p>
        <img
          src={projects[projectId].image}
          alt={projects[projectId].title}
          style={{ maxWidth: "100%" }}
        />
      </div>

      <div className="my-5">
        <h1>{projects[projectId + 1].title}</h1>
        <p>{projects[projectId + 1].description}</p>
        <img
          src={projects[projectId + 1].image}
          alt={projects[projectId + 1].title}
          style={{ maxWidth: "100%" }}
        />
      </div>

      <div className="my-5">
        <h1>{projects[projectId + 2].title}</h1>
        <p>{projects[projectId + 2].description}</p>
        <img
          src={projects[projectId + 2].image}
          alt={projects[projectId + 2].title}
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}

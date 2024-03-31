import { useLocation } from "react-router-dom";

function About() {
  const state = useLocation().state;
  console.log("state", state);
  const content = {
    title: "About this project",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit odio facere eum quis, illo perferendis nihil ea quaerat minima neque!",
  };
  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </>
  );
}

export default About;

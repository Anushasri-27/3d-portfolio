import Card from "react-bootstrap/Card";
import gsap from "gsap";

function ProjectCard({ CardTitle, CardSubtitle, about, live, git }) {


 // const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
 //   gsap.to(e.target, {  backgroundColor: "pink" });
 // };
//
 // const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
 //   gsap.to(e.target, {  backgroundColor: "purple"});
 // };
  return (
    <Card
      className="cards"
     // onMouseEnter={onEnter}
     // onMouseLeave={onLeave}
     
      style={{ width: "18rem", margin: 20, height:350 , boxShadow: "1px 1px 9px  rgba(181, 109, 200, 0.464)" }}
    >
      <Card.Body>
        <Card.Link style={{ fontSize: 30 , fontWeight: "bolder"}}>{CardTitle}</Card.Link>
        <Card.Subtitle className="mb-2   mt-1 text-muted">
          {CardSubtitle}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify"  }} >{about}</Card.Text>
        <Card.Link style={{ fontSize: 40 }}  href={live}>Live</Card.Link>
        <Card.Link style={{ fontSize: 40 }} href={git}>GitHub</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

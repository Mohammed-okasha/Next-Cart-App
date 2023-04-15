import Container from "./Container";
import classes from "./Section.module.scss";

const Section = (props) => {
  return (
    <section className={classes.section}>
      <Container>
        <h2 className={classes.title}>{props.title}</h2>
        {props.children}
      </Container>
    </section>
  );
};

export default Section;

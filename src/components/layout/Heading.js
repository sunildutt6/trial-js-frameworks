import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return <h1>{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string,
};

export default Heading;

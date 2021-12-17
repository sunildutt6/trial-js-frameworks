import PropTypes from "prop-types";
import styled from "styled-components";

const Style = styled.div`
  color: darkred;
  margin: 0.5rem;
`;
const ValidationError = ({ children }) => {
  return <Style>{children}</Style>;
};

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidationError;

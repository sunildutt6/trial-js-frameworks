import PropTypes from "prop-types";
import styled from "styled-components";

const Style = styled.div`
  color: var(--red);
`;
const ValidationError = ({ children }) => {
  return (
    <Style>
      <p>{children}</p>
    </Style>
  );
};

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidationError;

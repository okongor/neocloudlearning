import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Cursor = styled.div`
  position: absolute;
  width: 8px;
  height: 25px;
  background-color: black;
  animation: ${blink} 1s infinite;
`;

const cursorComponent = () => {
  return (
    <div>
      
      <Cursor />
    </div>
  );
};

export default cursorComponent;

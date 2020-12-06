import React from 'react';
import styled from 'styled-components/macro';
import { generateSparkle } from './generateSparkle';
import { SparkleInstance } from './SparkleInstance';

export function Sparkles({ children }) {
  const sparkle = generateSparkle();
  return (
    <Wrapper>
      <SparkleInstance
        color={sparkle.color}
        size={sparkle.size}
        style={sparkle.style}
      />
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

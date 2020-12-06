import React from 'react';
import { Title } from 'app/containers/HomePage/components/Title';
import { PageWrapper } from 'app/components/PageWrapper';
import Sparkles from './Components/All';

export function Sample() {
  return (
    <PageWrapper>
      <Sparkles>
        <Title>React Boilerplate meets CRA</Title>
      </Sparkles>
    </PageWrapper>
  );
}

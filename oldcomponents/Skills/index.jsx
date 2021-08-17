import React from 'react';
import { Container } from 'Common';
import dev from '../../../../static/illustrations/dev.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Illustration of a developer and version control" />
      </Thumbnail>
      <Details>
        <h2>Software Engineering</h2>
        <p>
          Full-stack software engineering and cloud architecture.
          <br />
          Python (Django). React. Docker. Serveless.
        </p>
        <h2>Product Management</h2>
        <p>From conception to driving a development team.</p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

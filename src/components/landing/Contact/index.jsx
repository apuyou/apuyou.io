import React from 'react';
import { Container } from 'Common';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img
        src="/contact.svg"
        alt="I’m John and I’m a Backend & Devops engineer!"
      />
    </Thumbnail>
  </Wrapper>
);

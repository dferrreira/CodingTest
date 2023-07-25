import styled from 'styled-components';

import { rem } from 'polished';

import Button from '../../Components/Button';

export const ContactFormTitle = styled.h2`
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 44px;
  margin: 0;
`;

export const ContactFormWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 55px 45px;

  @media only screen and (max-width: 767px) {
    max-width: 300px;
    padding: 42px 35px 45px;
  }
`;

export const ContactFormSubmit = styled(Button)`
  width: 85%;
  margin: 0 auto;

  &:hover {
    background-color: #f83f69;
  }

  /** */
  @media only screen and (max-width: 767px) {
    height: ${rem(48)};
  }
`;

export const ContactFormSuccess = styled.p`
  font-family: Poppins-Regular;
  font-size: ${rem(13)};
  font-weight: 700;
  color: #00aa47;
  opacity: 0;
  transition: opacity 0.25ms;
  pointer-events: none;

  &.is--visible {
    opacity: 1;
  }
`;


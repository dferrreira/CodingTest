import styled, { css } from 'styled-components';

import { rem } from 'polished';

export const FormInputBaseWrapper = styled.div`
    width: 100%;
    position: relative;
    border-bottom: 2px solid #d9d9d9;
    padding-bottom: 13px;
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    align-items: baseline;

    &:focus {
      border-color: #333;
    }
`;

export const formInputStyle = css`
  display: block;
  width: 100%;
  background: 0 0;
  font-family: Poppins-Medium;
  font-size: 18px;
  color: #333;
  height: 40px;
  line-height: 1.2;
  padding: 0 5px;
  border: 0;
  outline: none;

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

   &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #707070;
    opacity: 0.35;
  }

  &::-moz-placeholder { /* Firefox 19+ */
    color: #707070;
    opacity: 0.35;
  }

  &:-ms-input-placeholder { /* IE 10+ */
    color: #707070;
    opacity: 0.35;
  }

  &:-moz-placeholder { /* Firefox 18- */
    color: #707070;
    opacity: 0.35;
  }
`;

export const InputFocus = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: all .4s;
    background: #7f7f7f;
  }
`;

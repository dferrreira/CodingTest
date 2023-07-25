import styled, { css } from 'styled-components';

import { rem } from 'polished';

const btnReset = css`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  font: inherit;
  line-height: normal;
  -moz-user-select: text;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const btnCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const btnShape = css`
  ${btnCentered}
  border-radius: ${rem(3)};
  font-size: ${rem(18)};
  font-weight: 600;
  position: relative;
  padding-left: ${rem(32)};
  padding-right: ${rem(32)};
  height: ${rem(45)};
`;

const fullWidth = css`
  width: 100%;
`;

const handleColorType = (color) => {
  switch (color) {
    case 'purple':
      return css`
        background: ${({ theme }) => theme.colors.primary};
      `;
    case 'violet':
      return css`
        background: ${({ theme }) => theme.colors.secondary};
      `;
    case 'pink':
      return css`
        background: ${({ theme }) => theme.colors.tertiary};
      `;
    case 'blue':
      return css`
        background: ${({ theme }) => theme.tertiaryGradient};
      `;
    case 'purpleGradient':
      return css`
        background: linear-gradient(90deg, #993399 0, #69076b 100%);
      `;
    case 'gray':
      return css`
        background: #f1f1f1;
      `;
    case 'white':
      return css`
        background: #fff;
        color: #343434 !important;
      `;
    case 'yellow':
      return css`
        background: #fee641;
        color: #343434 !important;
      `;
    default:
      return css`
        background: linear-gradient(
          270deg,
          #f83f69 0,
          #993399 100%
        );
      `;
  }
};

const btnPrimary = css`
  ${({ color }) => handleColorType(color)}
  width: ${rem(220)};
  height: ${rem(42)};
  color: #fff;
  border-radius: ${rem(25)};
  font-size: ${rem(16)};
  font-weight: bold;
  transition: 300ms ease;

  &:hover {
    opacity: 0.85;
    color: #fff;
  }

  &.pink:hover {
    background: #f83f69;
    color: #fff;
  }

  &.yellow:hover {
    background: #f5c928;
    color: #000;
  }
`;

export const ButtonWrapper = styled.button`
  ${(props) => (props.reset ? btnReset : btnShape)}
  ${(props) => props.center && btnCentered}
  ${(props) => props.primary && btnPrimary}
  ${(props) => props.fullWidth && fullWidth}
`;

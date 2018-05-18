import React from 'react';
import styled from 'styled-components';
import { space, theme } from 'styled-system'

const borders = ({ color, theme }) => {
  const borderColor = color ? theme.colors[color] : theme.colors.borderGray
  const focusColor = color ? borderColor : theme.colors.gray
  return {
    'border-color': borderColor,
    'box-shadow': `0 0 0 1px ${borderColor}`,
    ':focus': {
      outline: 0,
      'border-color': focusColor,
      'box-shadow': `0 0 0 2px ${focusColor}`
    }
  }
}

const Textarea = styled('textarea')`
    appearance: none;
    display: block;
    width: 100%;
    font-family: inherit;
    color: inherit;
    font-size: ${theme('fontSizes.1')}px;
    background-color: transparent;
    border-radius: ${theme('radius')};
    border-width: 0px;
    border-style: solid;
    border-color: ${theme('colors.borderGray')};

    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 12px;
    padding-right: 12px;

    margin: 0;

    ::placeholder {
      color: ${theme('colors.gray')};
    }

    ::-ms-clear {
      display: none;
    }

    ${borders} ${space};
`

export default Textarea

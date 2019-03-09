/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

// This returns an animation
const clip = keyframes`
  0% {transform: rotate(0deg)} 
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`;

class LoadingSpinner extends React.Component {
  style = () => {
    const {
      size, sizeUnit, color
    } = this.props;

    const style = css`{
            background: transparent !important;
            width: ${`${size}${sizeUnit}`};
            height: ${`${size}${sizeUnit}`};
            border-radius: 100%;
            border: 2px solid;
            border-color: ${color};
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-top-color: transparent;
            display: inline-block;
            animation: ${clip} 0.75s 0s infinite linear;
            animation-fill-mode: both;
            &:before {
              content: ' ';
              border: 2px solid #ffffff44;
              background: transparent !important;
              width: ${`${size + 4}${sizeUnit}`};
              height: ${`${size + 4}${sizeUnit}`};
              border-radius: 100%;
              display: inline-block;
              position: relative;
              top: -2px;
              left: -2px;
            }
        }`;

    return this.props.css ? css`${style};${this.props.css}` : style;
  };

  render() {
    const { loading } = this.props;
    return loading ? <div css={this.style()} /> : null;
  }
}

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  css: PropTypes.shape({
    name: PropTypes.string,
    styles: PropTypes.string
  })
};

LoadingSpinner.defaultProps = {
  loading: true,
  color: '#ffffff',
  size: 35,
  sizeUnit: 'px',
  css: {}
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'sizeUnit', 'css'])(LoadingSpinner);
Component.defaultProps = LoadingSpinner.defaultProps;
export default Component;

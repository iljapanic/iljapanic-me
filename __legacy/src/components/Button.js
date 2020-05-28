import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import css from '../css/components/Button.module.css';

export default class Button extends React.Component {
  render() {
    const type = this.props.type;
    const color = this.props.color;
    const size = this.props.size;
    const url = this.props.url;
    const disabled = this.props.disabled;
    const value = this.props.value;
    const style = this.props.style;

    const getClassNames = () => {
      return classNames(
        css.btn,
        { [css.btnSmall]: size === 'small' },
        { [css.btnDisabled]: disabled },
        { [css.red]: color === 'red' },
        { [css.btnRound]: style === 'round' }
      );
    };

    if (type === 'link') {
      return (
        <Link to={url} className={getClassNames()}>
          {this.props.children}
        </Link>
      );
    } else if (type === 'externalLink') {
      return (
        <a className={getClassNames()} href={url} target="_blank">
          {this.props.children}
        </a>
      );
    } else if (type === 'disabledButton') {
      return (
        <button className={getClassNames()} disabled>
          {this.props.children}
        </button>
      );
    } else if (type === 'button') {
      return <button className={getClassNames()}>{this.props.children}</button>;
    } else if (type === 'submit') {
      return <input type="submit" value={value} className={getClassNames()} />;
    }
  }
}

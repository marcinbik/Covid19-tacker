import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Styles from './Title.module.scss'
export default function Title(props) {
  return (
    <Typography className={Styles.title} component="h1" variant="h8"  gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
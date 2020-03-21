// src/components/base/FullScreenLayout.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
});

class FullScreenLayout extends React.Component {
    render() {
        const { classes, theme } = this.props;

        return <div className={classes.root}>{this.props.children}</div>;
    }
}

FullScreenLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullScreenLayout);

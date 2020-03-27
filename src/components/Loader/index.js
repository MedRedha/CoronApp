import React from 'react';

let link = require('./../Loader/index.html');

class Loader extends React.Component {
    render() {
        return <iframe src={link} />;
    }
}
export default Loader;

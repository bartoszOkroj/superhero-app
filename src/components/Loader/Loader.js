import React from 'react';
import ReactLoading from 'react-loading';
import './Loader.css';

class Loader extends React.Component {
    render() {
        return (
            <ReactLoading type={'spinningBubbles'} color={'black'} height={'20%'} width={'20%'} />
        )
    }
}

export default Loader;
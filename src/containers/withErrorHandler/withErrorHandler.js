import React from 'react';

import Aux from './../../util/Aux';
import Modal from './../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent) => {
    return (props) => (
        <Aux>
            <Modal show={false}>Something didn't wrong !</Modal>
            <WrapperComponent {...props}/>
        </Aux>  
    )
}

export default withErrorHandler;
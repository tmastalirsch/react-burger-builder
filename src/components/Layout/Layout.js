import React from 'react';
import Aux from './../../util/Aux';

const Layout = (props) => {

    return (
        <Aux>
            <div>Toolbar</div>
            <main>{props.children}</main>
            <footer>Footer</footer>
        </Aux>
    );
};  

export default Layout;
import React from 'react';
import Aux from './../../util/Aux';

import classes from './Layout.module.css';

const Layout = (props) => {

    return (
        <Aux>
            <div>Toolbar</div>
            <main className={classes.Content}>{props.children}</main>
            <footer>Footer</footer>
        </Aux>
    );
};  

export default Layout;
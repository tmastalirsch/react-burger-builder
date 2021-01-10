import React from 'react';

// import Aux from './../../util/Aux';
import * as Http from './../../util/Http';


import GoogleMapComponent from './../../components/GoogleMap/GoogleMap';

const GoogleMapBuilder = () => {

    const OFFICES_ENDPOINT = '/offices';
    const {state: offices} = Http.useHttpGet(OFFICES_ENDPOINT, []);

    return (
            offices.map((office) => (
                <GoogleMapComponent />
                )
            )
        
    )
}


export default GoogleMapBuilder;

import React from 'react';
import ar from './../../img/ar.png'
import vr from './../../img/vr.png'

const AR_VR = () => {
    return(
        <div className="text-center">
            <img src={ar} className="img-fluid px-4 pt-4 d-block mx-auto" width={700} heigt={700} alt="AR Video" />
            <img src={vr} className="img-fluid p-4 d-block mx-auto" width={700} heigt={700} alt="VR Video" />
        </div>
    )
}

export default AR_VR;
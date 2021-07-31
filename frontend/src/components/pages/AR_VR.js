import React from 'react';
import { Link } from 'react-router-dom';
import ar from './../../img/ar.png';
import vr from './../../img/vr.png';

const AR_VR = () => {
    return(
            <div className="box-stacked row mx-3">
                <div className="box col-md-6 vertical-center">
                    <Link to="/ar">
                        <img src={ar} className="img-fluid" width={900} heigt={900} alt="AR Video" />
                    </Link>
                </div>
                <div className="box col-md-6 vertical-center">
                    <img src={vr} className="img-fluid" width={900} heigt={900} alt="VR Video" />
                </div>
            </div>
    )
}

export default AR_VR;
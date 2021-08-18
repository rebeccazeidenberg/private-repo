import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconHamburger from './../../img/icon-hamburger.png';
import IconMap from './../../img/icon-map.png';
import IconGalleries from './../../img/icon-galleries.png';
import IconSearch from './../../img/icon-search.png';
import Gallery3rdilab from './../../img/gallery-3rdilab.png';
import Options from './Options.js'

const Museums = () => {
    return(
        <div id="outer-container">
			<Options pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } ></Options>
			<div className="d-flex justify-content-between w-100">
				<div className="d-inline-block">
					<Link to="/map">
						<img src={IconMap} className="ml-4 mt-3 shadow-sm img-fluid" alt="Icon One" width={50} heigt={50} />
					</Link>
					<Link to="/museums">
						<img src={IconGalleries} className="mt-3 shadow-sm img-fluid" alt="Icon Two" width={50} heigt={50} />
					</Link>
				</div>
			</div>
            <p className="mt-3 ml-4 mb-0">SEARCH</p>
            <Form>
				<Form.Group className="mb-3 d-flex align-items-end justify-content-between w-100" controlId="formBasicSearch">
					<Form.Control className="ml-4 mr-4 search border-dark border-top-0 border-right-0 border-left-0" type="search" />
					<img src={IconSearch} className="mr-3 shadow-sm img-fluid" alt="Icon Three" width={50} heigt={50} />
				</Form.Group>
			</Form>
			<div className="">
				<Link to="/arvr">
					<div className="m-4 shadow">
						<img src={Gallery3rdilab} className="img-fluid" alt="3rdilab Gallery" width={400} heigt={70} />
					</div>
				</Link>
			</div>
        </div>
    )
}

export default Museums;
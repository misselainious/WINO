import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => (
<div>
<img src={'./images/PageNotFound.jpg'} style={{width: 600, height: 400, display: 'block', margin: 'auto', position: 'relative' }} />
<center><Link to="/"><h3 style={{marginBottom: 200}}>Return to Home Page</h3></Link></center>
</div>
);

export default ErrorPage;
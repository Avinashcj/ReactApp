import React from 'react';
import { Link } from 'react-router-dom';

const CandidateProcess = () => (
<header>
    <nav>
      <ul>
        <li><Link to='/Step1'>Step1</Link></li>
        <li><Link to='/Step2'>Step2</Link></li>
        <li><Link to='/Step3'>Step3</Link></li>
        <li><Link to='/Step4'>Step4</Link></li>
      </ul>
    </nav>
  </header>
)
export default CandidateProcess

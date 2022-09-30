import React from 'react';
import '../loading/loading.css';


const LoadingScreen: React.FC = () => (
  <div className="loading__container">
    <div className="lds-ring loading__position">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div >
);

export default LoadingScreen;

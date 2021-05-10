import React, {useState} from 'react';
import {Row, Breadcrumb, Col } from 'react-bootstrap';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Loader from '../components/common/Loader';

import '../assets/css/style.css';
import '../assets/css/responsive.css';

const MainLayout = () => {
  const [sideMenu, setSideMenu] = useState(true);
  const [loading, setLoading] = useState(true);

  let loader = null;

  if (!!loading) {
      loader = <Loader message="Loading..." />
  }


  return (
    
      <div className="page-wrapper">
                {/* Navigation */}
                <Navigation onClick={(active) => setSideMenu(active)} />
                {/* End Navigation */}
                
                <div className={`main-content d-flex flex-column ${sideMenu ? '' : 'hide-sidemenu'}`}>
                    {/* Breadcrumb */}
                        <div className="main-content-header">
                            <Breadcrumb>
                                <h1>Dashboard</h1>
                                <Breadcrumb.Item to="/dashboard">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item active>COMSIP CIMS Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    {/* End Breadcrumb */}

                    

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
  )
}

export default MainLayout

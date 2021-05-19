import React, {useState, useReducer} from 'react';
import {Row, Breadcrumb, Col } from 'react-bootstrap';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Loader from '../components/common/Loader';
import initialNavigationState from '../components/navigation/initialNavigationState';
import NavigationContext from '../context/NavigationContext'
import navigationReducer from '../reducers/navigationReducer';

import '../assets/css/style.css';
import '../assets/css/responsive.css';

import DataImportAdministration from './adminstration/data-import/DataImportAdministration';
import LocationAdministration from './adminstration/locations/LocationAdministration';
import RegistrationAdministration from './adminstration/registration/RegistrationAdministration';
import RolesAndPermissionsAdministration from './adminstration/roles-and-permissions/RolesAndPermissionsAdministration';
import UserManagementAdministration from './adminstration/user-management/UserManagementAdministration';

import CaseManagement from './case-management/CaseManagement';

import BasicLivelihoodEnrollment from './enrollments/basic-livelihood/BasicLivelihoodEnrollment';
import EnhancedLivelihoodEnrollment from './enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollment';
import EnhancedLivelihoodEnrollmentCorporativeDevelopment from './enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentCorporativeDevelopment';
import EnhancedLivelihoodEnrollmentJointSkillGroup from './enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentJointSkillGroup';
import EnhancedLivelihoodEnrollmentLesp from './enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentLesp';
import EnhancedLivelihoodEnrollmentProductionValueChain from './enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentProductionValueChain';
import EnhancedLivelihoodEnrollmentYouthChallengeSupport from './enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentYouthChallengeSupport';

import GraduationLivelihoodEnrollment from './enrollments/graduation/GraduationLivelihoodEnrollment';

import BasicLivelihoodMonitoring from './monitorings/basic-livelihood/BasicLivelihoodMonitoring';
import EnhancedLivelihoodMonitoring from './monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoring';
import EnhancedLivelihoodMonitoringCorporativeDevelopment from './monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringCorporativeDevelopment';
import EnhancedLivelihoodMonitoringJointSkillGroup from './monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringJointSkillGroup';
import EnhancedLivelihoodMonitoringLesp from './monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringLesp';
import EnhancedLivelihoodMonitoringProductionValueChain from './monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringProductionValueChain';
import EnhancedLivelihoodMonitoringYouthChallengeSupport from './monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringYouthChallengeSupport';

import GraduationLivelihoodMonitoring from './monitorings/graduation/GraduationLivelihoodMonitoring';

import BasicLivelihoodProgram from './programmes/basic-livelihood/BasicLivelihoodProgram';

import EnhancedLivelihoodProgram from './programmes/enhanced-livelihood/EnhancedLivelihoodProgram';
import EnhancedLivelihoodProgramsCorporativeDevelopment from './programmes/enhanced-livelihood/EnhancedLivelihoodProgramsCorporativeDevelopment';
import EnhancedLivelihoodProgramsJointSkillGroup from './programmes/enhanced-livelihood/EnhancedLivelihoodProgramsJointSkillGroup';
import EnhancedLivelihoodProgramsLesp from './programmes/enhanced-livelihood/EnhancedLivelihoodProgramsLesp';
import EnhancedLivelihoodProgramsProductionValueChain from './programmes/enhanced-livelihood/EnhancedLivelihoodProgramsProductionValueChain';
import EnhancedLivelihoodProgramsYouthChallengeSupport from './programmes/enhanced-livelihood/EnhancedLivelihoodProgramsYouthChallengeSupport';

import GraduationLivelihoodProgram from './programmes/graduation/GraduationLivelihoodProgram';
import Reports from './reports/Reports';

const MainLayout = () => {
  const [sideMenu, setSideMenu] = useState(true);
  const [loading, setLoading] = useState(true);


const [navigationState, navigationStateDispatch] = useReducer(navigationReducer, initialNavigationState);

  let loader = null;

  if (!!loading) {
      loader = <Loader message="Loading..." />
  }


  return (
    
      <div className="page-wrapper">
        <NavigationContext.Provider value={{navigationState, navigationStateDispatch}}>
            {/* Navigation */}
                <Navigation onClick={(active) => setSideMenu(active)} />
            {/* End Navigation */}
        </NavigationContext.Provider>    
                <div className={`main-content d-flex flex-column ${sideMenu ? '' : 'hide-sidemenu'}`}>
                    {/* Breadcrumb */}
                        <div className="main-content-header">
                            <Breadcrumb>
                                <h1>{navigationState.headerText}</h1>
                                <Breadcrumb.Item to="/dashboard">{navigationState.headerText}</Breadcrumb.Item>
                                <Breadcrumb.Item active>{navigationState.viewShotDiscription}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    {/* End Breadcrumb */}

                    {/* Main Content */}
                        {navigationState.viewShowing}
                    {/* End Main Content */}

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
  )
}

export default MainLayout

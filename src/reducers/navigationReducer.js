import initialNavigationState from '../components/navigation/initialNavigationState';

import DataImportAdministration from '../features/adminstration/data-import/DataImportAdministration';
import LocationAdministration from '../features/adminstration/locations/LocationAdministration';
import RegistrationAdministration from '../features/adminstration/registration/RegistrationAdministration';
import RolesAndPermissionsAdministration from '../features/adminstration/roles-and-permissions/RolesAndPermissionsAdministration';
import UserManagementAdministration from '../features/adminstration/user-management/UserManagementAdministration';

import CaseManagement from '../features/case-management/CaseManagement';

import BasicLivelihoodEnrollment from '../features/enrollments/basic-livelihood/BasicLivelihoodEnrollment';
import EnhancedLivelihoodEnrollment from '../features/enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollment';
import EnhancedLivelihoodEnrollmentCorporativeDevelopment from '../features/enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentCorporativeDevelopment';
import EnhancedLivelihoodEnrollmentJointSkillGroup from '../features/enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentJointSkillGroup';
import EnhancedLivelihoodEnrollmentLesp from '../features/enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentLesp';
import EnhancedLivelihoodEnrollmentProductionValueChain from '../features/enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentProductionValueChain';
import EnhancedLivelihoodEnrollmentYouthChallengeSupport from '../features/enrollments/enhanced-livelihood/EnhancedLivelihoodEnrollmentYouthChallengeSupport';

import GraduationLivelihoodEnrollment from '../features/enrollments/graduation/GraduationLivelihoodEnrollment';

import BasicLivelihoodMonitoring from '../features/monitorings/basic-livelihood/BasicLivelihoodMonitoring';
import EnhancedLivelihoodMonitoring from '../features/monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoring';
import EnhancedLivelihoodMonitoringCorporativeDevelopment from '../features/monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringCorporativeDevelopment';
import EnhancedLivelihoodMonitoringJointSkillGroup from '../features/monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringJointSkillGroup';
import EnhancedLivelihoodMonitoringLesp from '../features/monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringLesp';
import EnhancedLivelihoodMonitoringProductionValueChain from '../features/monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringProductionValueChain';
import EnhancedLivelihoodMonitoringYouthChallengeSupport from '../features/monitorings/enhanced-livelihood/EnhancedLivelihoodMonitoringYouthChallengeSupport';

import GraduationLivelihoodMonitoring from '../features/monitorings/graduation/GraduationLivelihoodMonitoring';

import BasicLivelihoodProgram from '../features/programmes/basic-livelihood/BasicLivelihoodProgram';

import EnhancedLivelihoodProgram from '../features/programmes/enhanced-livelihood/EnhancedLivelihoodProgram';
import EnhancedLivelihoodProgramsCorporativeDevelopment from '../features/programmes/enhanced-livelihood/EnhancedLivelihoodProgramsCorporativeDevelopment';
import EnhancedLivelihoodProgramsJointSkillGroup from '../features/programmes/enhanced-livelihood/EnhancedLivelihoodProgramsJointSkillGroup';
import EnhancedLivelihoodProgramsLesp from '../features/programmes/enhanced-livelihood/EnhancedLivelihoodProgramsLesp';
import EnhancedLivelihoodProgramsProductionValueChain from '../features/programmes/enhanced-livelihood/EnhancedLivelihoodProgramsProductionValueChain';
import EnhancedLivelihoodProgramsYouthChallengeSupport from '../features/programmes/enhanced-livelihood/EnhancedLivelihoodProgramsYouthChallengeSupport';

import GraduationLivelihoodProgram from '../features/programmes/graduation/GraduationLivelihoodProgram';
import Reports from '../features/reports/Reports';


const navigationReducer = (navigationState, action) => {
 switch(action.type){

   // SET Dashboard AS MAIN CONTENT
   case 'SET_DASHBOARD':
      return initialNavigationState;
   // SET DataImportAdministration AS MAIN CONTENT
   case 'SET_DIA':
      return { viewShowing: <DataImportAdministration />, headerText: 'Data Import Administration', routeName: '/data_import_admin',   viewShortDiscription: 'Import Households' }
   // SET LocationAdministration AS MAIN CONTENT
   case 'SET_LA':
      return { viewShowing: <LocationAdministration />, headerText: 'Location Administration', routeName: '/location_admin',   viewShortDiscription: 'Manage Location' }
   // SET RegistrationAdministration AS MAIN CONTENT
   case 'SET_RA':
      return { viewShowing: <RegistrationAdministration />, headerText: 'Registration Administration', routeName: '/registration_admin',   viewShortDiscription: 'Register Households' }
   // SET RolesAndPermissionsAdministration AS MAIN CONTENT
   case 'SET_RPA':
      return { viewShowing: <RolesAndPermissionsAdministration />, headerText: 'Roles And Permissions Administration', routeName: '/roles_permissions',   viewShortDiscription: 'Set Roles and Permissions' }
   // SET BasicLivelihoodEnrollment AS MAIN CONTENT
   case 'SET_BLE':
      return { viewShowing: <BasicLivelihoodEnrollment />, headerText: 'Basic Livelihood Enrollment', routeName: '/basic_enrollment',   viewShortDiscription: 'Basic Livelihood Enrollment' }
   // SET EnhancedLivelihoodEnrollment AS MAIN CONTENT
   case 'SET_ELE':
      return { viewShowing: <EnhancedLivelihoodEnrollment />, headerText: 'Enhanced Livelihood Enrollment', routeName: '/enhanced_enrollment',   viewShortDiscription: 'Enhenced Livelihood Enrollment' }
   // SET EnhancedLivelihoodEnrollmentCorporativeDevelopment AS MAIN CONTENT
   case 'SET_ELECD':
      return { viewShowing: <EnhancedLivelihoodEnrollmentCorporativeDevelopment />, headerText: 'Enhanced Livelihood Enrollment Corporative Development', routeName: '/corporative_development',   viewShortDiscription: 'Corporative Development' }
   // SET EnhancedLivelihoodEnrollmentJointSkillGroup AS MAIN CONTENT
   case 'SET_ELEJSG':
      return { viewShowing: <EnhancedLivelihoodEnrollmentJointSkillGroup />, headerText: 'Enhanced Livelihood Enrollment Joint Skill Group', routeName: '/joint_skill',   viewShortDiscription: 'Joint Skills Groups' }
   // SET EnhancedLivelihoodEnrollmentLesp AS MAIN CONTENT
   case 'SET_ELEL':
      return { viewShowing: <EnhancedLivelihoodEnrollmentLesp />, headerText: 'Enhanced Livelihood Enrollment Lesp', routeName: '/lesp_enrollment',   viewShortDiscription: 'LES Programme' }
   // SET EnhancedLivelihoodEnrollmentProductionValueChain AS MAIN CONTENT
   case 'SET_ELEPVC':
      return { viewShowing: <EnhancedLivelihoodEnrollmentProductionValueChain />, headerText: 'Enhanced Livelihood Enrollment Production Value Chain', routeName: '/value_chain',   viewShortDiscription: 'Production Value Chain' }
   // SET EnhancedLivelihoodEnrollmentYouthChallengeSupport AS MAIN CONTENT
   case 'SET_ELEYCS':
      return { viewShowing: <EnhancedLivelihoodEnrollmentYouthChallengeSupport />, headerText: 'Enhanced Livelihood Enrollment Youth Challenge Support', routeName: '/youth_challenge',   viewShortDiscription: 'Youth Challenge Support' }
   // SET UserManagementAdministration AS MAIN CONTENT
   case 'SET_UMA':
      return { viewShowing: <UserManagementAdministration />, headerText: 'User Management Administration', routeName: '/management_admin',   viewShortDiscription: 'Manage Users' }
   // SET CaseManagement AS MAIN CONTENT
   case 'SET_CM':
      return { viewShowing: <CaseManagement />, headerText: 'Case Management', routeName: '/case_management',   viewShortDiscription: 'Manage Cases' }
   // SET EnhancedLivelihoodEnrollmentYouthChallengeSupport AS MAIN CONTENT
   case 'SET_ELYCS':
      return { viewShowing: <EnhancedLivelihoodEnrollmentYouthChallengeSupport />, headerText: 'Enhanced Livelihood Enrollment Youth Challenge Support', routeName: '/youth_support',   viewShortDiscription: 'Youth Challenge Support' }
   // SET GraduationLivelihoodEnrollment AS MAIN CONTENT
   case 'SET_GLE':
      return { viewShowing: <GraduationLivelihoodEnrollment />, headerText: 'Graduation Livelihood Enrollment', routeName: '/graduation_enrollment',   viewShortDiscription: 'Manage Graduations' }
   // SET BasicLivelihoodMonitoring AS MAIN CONTENT
   case 'SET_BLM':
      return { viewShowing: <BasicLivelihoodMonitoring />, headerText: 'Basic Livelihood Monitoring', routeName: '/basic_monitoring',   viewShortDiscription: 'Basic Livelihood Monitoring' }
   // SET EnhancedLivelihoodMonitoring AS MAIN CONTENT
   case 'SET_EL':
     return { viewShowing: <EnhancedLivelihoodMonitoring />, headerText: ' Enhanced Livelihood Monitoring', routeName: '/enhanced_monitoring',   viewShortDiscription: 'Enhenced Livelihood Monitoring' }
   // SET EnhancedLivelihoodMonitoringCorporativeDevelopment AS MAIN CONTENT
   case 'SET_ELMCD':
     return { viewShowing: <EnhancedLivelihoodMonitoringCorporativeDevelopment />, headerText: ' Enhanced Livelihood Monitoring Corporative Development ', routeName: '/corporative_development',   viewShortDiscription: 'Corporative Development Monitoring' }
   // SET EnhancedLivelihoodMonitoringJointSkillGroup AS MAIN CONTENT
   case 'SET_ELMJSG':
     return { viewShowing: <EnhancedLivelihoodMonitoringJointSkillGroup />, headerText: ' Enhanced Livelihood Monitoring Joint Skill Group ', routeName: '/joint_group',   viewShortDiscription: 'Joint Skill Group Monitoring' }
   // SET EnhancedLivelihoodMonitoringLesp AS MAIN CONTENT
   case 'SET_ELML':
     return { viewShowing: <EnhancedLivelihoodMonitoringLesp />, headerText: ' Enhanced Livelihood Monitoring Lesp', routeName: '/lesp_monitoring',   viewShortDiscription: 'LESP Monitoring' }
   // SET EnhancedLivelihoodMonitoringProductionValueChain AS MAIN CONTENT
   case 'SET_ELMPVC':
     return { viewShowing: <EnhancedLivelihoodMonitoringProductionValueChain />, headerText: ' Enhanced Livelihood Monitoring Production Value Chain', routeName: '/pvc_monitoring',   viewShortDiscription: 'Production Value Chain Monitoring' }
   // SET EnhancedLivelihoodMonitoringYouthChallengeSupport AS MAIN CONTENT
   case 'SET_ELMYCS':
     return { viewShowing: <EnhancedLivelihoodMonitoringYouthChallengeSupport />, headerText: ' Enhanced Livelihood Monitoring Youth Challenge Support', routeName: '/ycs_monitoring',   viewShortDiscription: 'Youth Challenge Support Monitoring' }
   // SET GraduationLivelihoodMonitoring AS MAIN CONTENT
   case 'SET_GLM':
     return { viewShowing: <GraduationLivelihoodMonitoring />, headerText: ' Graduation Livelihood Monitoring', routeName: '/glm_monitoring',   viewShortDiscription: 'Graduation Livelihood Monitoring' }
   // SET BasicLivelihoodProgram AS MAIN CONTENT
   case 'SET_BLP':
     return { viewShowing: <BasicLivelihoodProgram />, headerText: ' Basic Livelihood Program', routeName: '/bl_program',   viewShortDiscription: 'Basic Livelihood Program' }
   // SET EnhancedLivelihoodProgram AS MAIN CONTENT
   case 'SET_ELP':
     return { viewShowing: <EnhancedLivelihoodProgram  />, headerText: ' Enhanced Livelihood Program', routeName: '/el_program',   viewShortDiscription: 'Enhanced Livelihood Program' }
   // SET EnhancedLivelihoodProgramsCorporativeDevelopment AS MAIN CONTENT
  case 'SET_ELPCD':
     return { viewShowing: <EnhancedLivelihoodProgramsCorporativeDevelopment />, headerText: '  Enhanced Livelihood Programs Corporative Development', routeName: '/elpcd_program',   viewShortDiscription: 'Enhanced Livelihood Corporative Development program' }
   // SET EnhancedLivelihoodProgramsJointSkillGroup AS MAIN CONTENT
   case 'SET_ELPJSG':
     return { viewShowing: <EnhancedLivelihoodProgramsJointSkillGroup />, headerText: ' Enhanced Livelihood Programs Joint Skill Group', routeName: '/elpjsg_program',   viewShortDiscription: 'Enhanced Livelihood Program Joint Skill Group' }
   // SET EnhancedLivelihoodProgramsLesp AS MAIN CONTENT
   case 'SET_ELPL':
     return { viewShowing: <EnhancedLivelihoodProgramsLesp />, headerText: ' Enhanced Livelihood Programs Lesp', routeName: '/elpl_program',   viewShortDiscription: 'Enhanced Livelihood Lesp Program' }
   // SET EnhancedLivelihoodProgramsProductionValueChain AS MAIN CONTENT
   case 'SET_ELPPVC':
     return { viewShowing: <EnhancedLivelihoodProgramsProductionValueChain />, headerText: ' Enhanced Livelihood Programs Production Value Chain', routeName: '/elppvc_program',   viewShortDiscription: 'Enhanced Livelihood Production Value Chain Program' }
   // SET EnhancedLivelihoodProgramsYouthChallengeSupport AS MAIN CONTENT
   case 'SET_ELPYCS':
     return { viewShowing: <EnhancedLivelihoodProgramsYouthChallengeSupport />, headerText: ' Enhanced Livelihood Programs Youth Challenge Support', routeName: '/elpycs_program',   viewShortDiscription: 'Enhanced Livelihood Youth Challenge Support Program' }
   // SET GraduationLivelihoodProgram AS MAIN CONTENT
   case 'SET_GLP':
     return { viewShowing: <GraduationLivelihoodProgram />, headerText: '  Graduation Livelihood Program', routeName: '/gl_program',   viewShortDiscription: 'Graduation Livelihood Program' }
   // SET Reports AS MAIN CONTENT
   case 'SET_REPORTS':
     return { viewShowing: <Reports />, headerText: '  Reports', routeName: '/reports',   viewShortDiscription: 'Reports' }
   // Set Default state
    default:
      return initialNavigationState;
  }
  
}

export default navigationReducer

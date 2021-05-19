import React from 'react';
import {Row, Col } from 'react-bootstrap';
import DashboardContext  from '../context/DashboardContext';
import EnrolmentCentre from '../components/dashboard/enrolment/EnrolmentCentre';
import EnrolmentNorth from '../components/dashboard/enrolment/EnrolmentNorth';
import EnrolmentSouth from '../components/dashboard/enrolment/EnrolmentSouth';


const Dashboard = () => {
  return (
    <>
      Dashboard 
      {/* Enrolment */}
        <Row>
          <DashboardContext.Provider>
          <Col g={8}>
              {/* File path: src/components/Dashboard/Sales/MonthlySales.js */}
              <EnrolmentNorth />
          </Col>

          <Col lg={8}>
              {/* File path: src/components/Dashboard/Sales/TotalOrders.js */}
              <EnrolmentCentre />
          </Col>

          <Col lg={8}>
              {/* File path: src/components/Dashboard/Sales/CompletedOrders.js */}
              <EnrolmentSouth />
          </Col>
          </DashboardContext.Provider>
        </Row>
      {/*End Enrolment */}

      {/* Programmes */}
      {/* End Programmes */}

      {/* Households */}
      {/* End Households */}

      {/* Case Management*/}
      {/* End Case Management */}
    </>
  )
}

export default Dashboard

import initialDashboardState from '../components/dashboard/initialDashboardState';

const dashboardReducer = (dashboardState, action) => {
  switch(action.type){

    default:
      return initialDashboardState;
  }
}

export default dashboardReducer

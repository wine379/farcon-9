import initialSearchState from '../components/search/initialSearchState';

const searchReducer = (searchState, action) => {

  switch(action.type){
    // FETCHING ORGS RESULTS
    case 'FETCHING_ORGS_LOADING':
      return {...searchState, organizationsLoading: true}
    case 'FETCHING_ORGS_ERROR':
       return {...searchState, organizationsLoading: 'Something went wrong'}
    case 'FETCHING_ORGS':
         return {...searchState, organizations: action.payload, organizationsLoading: false, organizationsError: ''}
    
    // FETCHING REGION RESULTS
    case 'FETCHING_REGIONS_LOADING':
      return {...searchState, regionsLoading: true}
    case 'FETCHING_REGIONS_ERROR':
      return {...searchState, regionsError: 'Something went wrong'}
    case 'FETCHING_REGIONS':
      return {...searchState, regionsList: action.payload, regionsLoading: false, regionsError: ''}
   
    case 'SELECT_REGION':
      return {...searchState, selectedRegion: action.payload}

    // FETCHING DISTRICTS RESULTS
    case 'FETCHING_DISTRICTS_LOADING':
      return {...searchState, districtsLoading: true}
    case 'FETCHING_DISTRICTS_ERROR':
      return {...searchState, districtsError: 'Something went wrong'}
    case 'FETCHING_DISTRICTS':
      return {...searchState, districts: action.payload, districtsLoading: false, districtsError: ''}
    case 'SELECT_DISTRICT':
      return {...searchState, selectedDistrict: action.payload}
    
    // FILTERING DISTRICTS
    case 'FILTER_DISTRICTS': 
      return {...searchState, districtsList: searchState.districts.filter((districts) => searchState.selectedRegion === districts.region_name)}

    case 'FILTER_DISTRICTS_SELECT_LIST':
      return {...searchState, districtsSelectionList: action.payload,}
    
  

    // FETCHING TAS RESULTS
    case 'FETCHING_TAS_LOADING':
      return {...searchState, traditionalAuthoritiesLoading: true}
    case 'FETCHING_TAS_ERROR':
      return {...searchState, traditionalAuthoritiesError: 'Something went wrong'}
    case 'FETCHING_TAS':
      return {...searchState, traditionalAuthorities: action.payload, traditionalAuthoritiesLoading: false, traditionalAuthoritiesError: ''}
    case 'SELECT_TA':
      return {...searchState, selectedTraditionalAuthority: action.payload}

    // FILTERING TAS
    case 'FILTER_TAS': 
      return {...searchState, traditionalAuthoritiesList: searchState.traditionalAuthorities.filter((traditionalAuthorities) => searchState.selectedDistrict === traditionalAuthorities.district)}
    case 'FILTER_TAS_SELECT_LIST':
      return {...searchState, traditionalAuthoritiesSelectionList: action.payload,}


    
    // FETCHING PROGRAMMATIC AREAS RESULTS
    case 'FETCHING_PROGRAMMATIC_AREAS_LOADING':
      return {...searchState, programmaticAreasLoading: true}
    case 'FETCHING_PROGRAMMATIC_AREAS_ERROR':
      return {...searchState, districtsError: 'Something went wrong'}
    case 'FETCHING_PROGRAMMATIC_AREAS':
        return {...searchState, programmaticAreasList: action.payload, programmaticAreasLoading: false, programmaticAreasError: ''}
    
            // FILTERING SELECT PROGRAMMATIC AREA
    case 'SELECT_PROGRAMMATIC_AREA':
      
      return {...searchState, selectedProgrammaticArea: action.payload }

    
    // FILTERING ORGANIZATIONS RESULTS
    case 'FILTER_RESULTS_BY_REGION':
      return {...searchState, filteredOrganizationsByDistrict: [], filteredOrganizationsByTA: [], filteredOrganizationsByRegion: searchState.organizations.filter((organizations) => searchState.selectedRegion === organizations.region) }

    case 'FILTER_RESULTS_BY_DISTRICT':
      return {...searchState, filteredOrganizationsByDistrict: searchState.organizations.filter((organizations) => searchState.selectedDistrict === organizations.district), filteredOrganizationsByTA: [], filteredOrganizationsByRegion: []}

    case 'FILTER_RESULTS_BY_TA':
      return {...searchState, filteredOrganizationsByDistrict: [], filteredOrganizationsByTA: searchState.organizations.filter((organizations) => searchState.selectedTraditionalAuthority === organizations.traditional_authority), filteredOrganizationsByRegion: []}
    
    case 'FILTER_RESULTS_BY_PROGRAMMATIC_AREA':
      let tempOrgList = []

      if(!searchState.filteredOrganizationsByRegion || !searchState.filteredOrganizationsByDistrict || !searchState.filteredOrganizationsByTA){
        tempOrgList = searchState.organizations.filter((organizations) => searchState.selectedProgrammaticArea === organizations.programmatic_area_names.programmatic_area)
      }
      
      if (!!searchState.filteredOrganizationsByRegion) {
        tempOrgList = searchState.filteredOrganizationsByRegion.filter((filteredOrganizationsByRegion) => searchState.selectedProgrammaticArea === filteredOrganizationsByRegion.programmatic_area_names.programmatic_area)
      }

      if(!!searchState.filteredOrganizationsByDistrict) {
        tempOrgList = searchState.filteredOrganizationsByDistrict.filter((filteredOrganizationsByDistrict) => searchState.selectedProgrammaticArea === filteredOrganizationsByDistrict.programmatic_area_names.programmatic_area)
      }

      if(!!searchState.filteredOrganizationsByTA) {
        tempOrgList = searchState.filteredOrganizationsByTA.filter((filteredOrganizationsByTA) => searchState.selectedProgrammaticArea === filteredOrganizationsByTA.programmatic_area_names.programmatic_area)
      }
      return {...searchState, filteredOrganizationsByProgrammaticArea: tempOrgList}

    // FETCH FILTERED SEARCH RESULTS
    case 'FETCH_FILTERED_SEARCH_RESULTS':
      return {...searchState, filteredOrganizations: searchState.organizations }

    // DEFAULT

    default:
      return initialSearchState;
  }
  
}

export { searchReducer as default }
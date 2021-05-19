export const REACT_APP_GRAPHQL_URI =  process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql';

export const SEARCH_ORGANIZATIONS_QUERY = `
  {
  Organization {
    org_name
    org_registration_date
    org_registration_number
    addresss_is_address_of_org {
      postal_address
    }
    emails_is_official_email_contact {
      email_address
    }
    phones_is_official_phone_contact {
      phone_number
    }
    location {
      latitude
      longitude
    }
    region
    district
    traditional_authority
    org_village
    programmatic_area_names {
      programmatic_area
    }
    activitys_is_activity_of_org {
      is_org_activity_in_programmatic_area {
        programmatic_area_name
      }
    }
    number_of_female_executive_members
    number_of_male_executive_members
    number_of_female_trustees
    number_of_male_trustees
    incomegenarationaactivitys_is_iga_for_org {
      iga_name
    }
    challenges_is_challenge_for_org {
      challenge_name
    }
    capacitybuildingneeds_is_capacity_building_need_for_org {
      capacity_building_need_name
    }
    is_event_participated_by_org {
      event_name
      event_type
      event_organization
    }
  }
}

`;

export const SEARCH_REGIONS_QUERY = `
  {
  Region{
    region_name
  }
}
`;

export const SEARCH_DISTRICTS_QUERY = `
  {
  District{
    region_name
    district_name  
  }
}
`;

export const SEARCH_TAS_QUERY = `
  {
  TraditionalAuthority {
    t_a_name
    district
  }
}
`;

export const PROGRAMMATIC_AREAS_QUERY = `
  {
  ProgrammaticArea {
    programmatic_area_name
  }
}
`;
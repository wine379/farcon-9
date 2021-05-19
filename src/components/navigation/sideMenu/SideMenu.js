import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import * as Icon from 'react-feather';
import './SideMenu.css';
import NavigationContext from '../../../context/NavigationContext';

const SideMenu = () => {
    const navigationContext = useContext(NavigationContext);
    return (
        <div className={"sidemenu-area"}>
                <Navbar className={"sidemenu"} >
                    <Navbar.Collapse>
                        <Nav>
                        <NavLink to="/dashboard/" className="nav-link">
                                <Icon.Inbox 
                                    className="icon"
                                /> 
                                <span onClick={() => navigationContext.navigationStateDispatch({type: 'SET_DASHBOARD'})} className="title">Dashboard</span>
                            </NavLink>

                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.Grid 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Enrolment
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_BLE'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Basic Livelihood
                                </NavLink>
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_ELE'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu"> 
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Enhanced Livelihood
                                </NavLink>
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_GLE'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Graduation
                                </NavLink>
                            </NavDropdown>
                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.Archive 
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Programs
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_BLP'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Basic Livelihood
                                </NavLink>
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_ELP'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu"> 
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Enhanced Livelihood
                                </NavLink>
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_GLP'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Graduation
                                </NavLink>
                            </NavDropdown>
                            <NavDropdown title= {
                                <div className="dropdown-title">
                                    <Icon.Monitor
                                        className="icon"
                                    /> 
                                    <span className="title">
                                        Monitoring
                                        <Icon.ChevronRight 
                                            className="icon fr"
                                        /> 
                                    </span>
                                </div>
                            }
                            id="basic-nav-dropdown">
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_GLM'})}
                                    to="/#" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Basic Livelihood
                                </NavLink>
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_EL'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu"> 
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Enhanced Livelihood
                                </NavLink>
                                <NavLink 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_GLM'})}
                                    to="/#/" 
                                    className="dropdown-item" 
                                    activeClassName="drpMenu">
                                    <Icon.ChevronRight 
                                        className="icon" 
                                    /> 
                                    Graduation
                                </NavLink>
                            </NavDropdown>

                            <NavLink 
                                to="/#" 
                                onClick={() => navigationContext.navigationStateDispatch({type: 'SET_REPORTS'})}
                                className="nav-link">
                                <Icon.Calendar 
                                    className="icon"
                                />
                                <span className="title">Reporting</span>
                            </NavLink>

                            <NavLink 
                                to="/#/" 
                                onClick={() => navigationContext.navigationStateDispatch({type: 'SET_CM'})}
                                className="nav-link">
                                <Icon.Book
                                    className="icon"
                                />
                                <span className="title">Case Management</span>
                            </NavLink>

                           
                            <NavDropdown 
                                className="super-color" 
                                title= {
                                    <div className="dropdown-title">
                                        <Icon.Database 
                                            className="icon"
                                        />
                                        <span className="title">
                                            Administration
                                            <Icon.ChevronRight 
                                                className="icon fr"
                                            />
                                        </span>
                                    </div>
                                }
                                id="basic-nav-dropdown">
                                <NavLink  
                                    activeClassName="drpMenu"
                                    to="/#/" 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_UMA'})}
                                    className="dropdown-item">
                                    <Icon.Bell 
                                        className="icon" 
                                    />
                                    User Management
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/#/" 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_RPA'})}
                                    className="dropdown-item"> 
                                    <Icon.Award 
                                        className="icon" 
                                    /> 
                                    Roles and Permissions
                                </NavLink>
                                
                                
                                <NavLink 
                                    activeClassName="drpMenu"
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_RA'})}
                                    to="/#/" 
                                    className="dropdown-item">
                                <Icon.FileText
                                    className="icon"
                                /> 
                                <span className="title">Registration</span>
                            </NavLink>
                                
                                
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/#/" 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_LA'})}
                                    className="dropdown-item">
                                    <Icon.ArrowRightCircle 
                                        className="icon" 
                                    />
                                    Location
                                </NavLink>
                                <NavLink 
                                    activeClassName="drpMenu"
                                    to="/#/" 
                                    onClick={() => navigationContext.navigationStateDispatch({type: 'SET_DIA'})}
                                    className="dropdown-item">
                                    <Icon.Layers 
                                        className="icon" 
                                    />
                                    Data Import
                                </NavLink>
                                    
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default SideMenu

import React , { Component } from 'react';
import SidebarItem from './sidebarItem';
import './headerTable.css';

const sideBarTable = (props) =>{


return(
    <React.Fragment>
             <SidebarItem day={"Monday"}></SidebarItem>
             <SidebarItem day={"Tuesday"}></SidebarItem>
             <SidebarItem day={"Wednesday"}></SidebarItem>
             <SidebarItem day={"Thursday"}></SidebarItem>
             <SidebarItem day={"Friday"}></SidebarItem>
    </React.Fragment>

)
}

export default sideBarTable; 
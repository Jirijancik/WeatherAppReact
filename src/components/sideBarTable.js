import React, { Component } from 'react';
import lifecycle from 'react-pure-lifecycle';
import SidebarItem from './sidebarItem';
import './sidebarTable.css';

let sidebarItemList = "Loading";

const Channels = {

    componentDidMount(props) {
        sidebarItemList = props.forecastListTable.map(item => <SidebarItem className="sidebarTable" temp={item.main.temp} >AHOJ</SidebarItem> )
    }
}

const sideBarTable = props => (
    <div>{sidebarItemList}</div>
    )

export default lifecycle(Channels)(sideBarTable); 
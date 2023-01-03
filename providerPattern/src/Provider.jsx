import "./Provider.css"
import React, {useContext} from "react";
import {DataContext} from './contextHook/listData'

function Provider() {
    return (
        <div className="main-container">
            <SideBar/>
            <Content/>
        </div>
    )
}

const SideBar = () => <List/>
const List = () => <ListItem/>

function ListItem() {
    const data = useContext(DataContext)
    return (
        <div
            className="list-item">
            {data.listItem.map((item) => (
                <span key={item}>{item}</span>))}
        </div>)
}

const Content = () => <div><Header/><Block/></div>

function Header() {
    const data = useContext(DataContext);
    return <div>{data.title}</div>;
}

function Block() {
    const data = useContext(DataContext);
    return <Text>{data}</Text>;
}

function Text() {
    const data = useContext(DataContext);
    return <h1>{data.text}</h1>;
}

export default Provider

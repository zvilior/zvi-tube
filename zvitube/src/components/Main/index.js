// import "../Layout.css";
import Header from "../Header";
import Video from "../Video";
import List from "../List";
import { dataContext } from '../../context'
import { useContext } from 'react'
import styles from './style.module.css'
function Main() {
    const DataContext = useContext(dataContext)


    return (
        <div className="wrapper">
            <img className={styles.img} src={require('../../assets/logo.png')} alt="" />

            <h1>Dear {DataContext.name} enjoy with zvitube</h1>
            <Header />
            <Video />
            <List />
        </div>
    );
}

export { Main };

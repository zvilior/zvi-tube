import { useContext } from 'react';
import { dataContext } from '../../context'
import styles from './style.module.css'
// import logo from '../../assets/logo.jpg'
function Header() {

  const DataContext = useContext(dataContext)
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(Boolean(e.target.value));
    if (e.target.value) {
      console.log("inside");
      setTimeout(() => {
        DataContext.setSearch(e.target.value)
      }, 500);;
    }
    // DataContext.setSearch(e.target.elements.search.value);
  };

  return (
    <header>
      <input className={styles.header} placeholder="Search" type="text" name="search" onInput={onsubmit}></input>
    </header>
  );
}

export default Header;

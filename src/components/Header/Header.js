import styles from "./Header.module.css";

const Header = () => {

    return <header className={styles.header}>
        <div className={styles['user-div']}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile"/>
                <h2>Username</h2>
                <div id="is_online"></div>
            </div>
        <div className={styles.logoDiv}>
            <h1>LOGO</h1>
        </div>
        <div className={styles.userDiv}>
            
            <button>Login</button>
        </div>
    </header>
};

export default Header;
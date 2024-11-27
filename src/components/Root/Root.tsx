import { Outlet, NavLink } from "react-router-dom";
import styles from "./Root.module.css";
import { useState } from "react";

const Root = () => {
    const [isStudentsCollapsed, setIsStudentsCollapsed] = useState(false);

    return (
        <div className={styles.container}>
           <section className={styles.sidebar}>
                <section className={styles.head}>
                    <img src="https://placehold.co/400x400" alt="" className={styles.userImg}/>
                    <div className={styles.userDetails}>
                        <p className={styles.title}>Administrator</p>
                        <p className={styles.name}>John Doe</p>
                    </div>
                </section>
                <nav className={styles.nav}>
                    <div className={styles.menu}>
                        <p className={styles.title}>Main</p>
                        <ul>
                            <li>
                                <NavLink to={""} className={styles.navLink}>
                                    <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                                    </svg>
                                    <span className={styles.text}>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"students"} className={styles.navLink}>
                                    <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                    <span className={styles.text}>Cursisten</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"cursussen"} className={styles.navLink}>
                                    <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
                                    </svg>
                                    <span className={styles.text}>Cursussen</span>
                                </NavLink>
                            </li>
                            <li className="hidden">
                                <div className={`justify-between ${styles.navLink} hover:cursor-pointer`} onClick={() => setIsStudentsCollapsed(!isStudentsCollapsed)}>
                                    <div className="flex gap-2">
                                        <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                        <span className={styles.text}>Lorem</span>
                                    </div>
                                    <svg className="w-4 h-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                    </svg>
                                </div>
                                { isStudentsCollapsed && (
                                    <ul className={styles.subMenu}>
                                        <li>
                                            <NavLink to={""} className={styles.navLink}>
                                                <span className={styles.text}>lorem</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={""} className={styles.navLink}>
                                                <span className={styles.text}>lorem</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                        <p className={styles.title}>Settings</p>
                        <ul>
                            <li>
                                <NavLink to={""} className={styles.navLink}>
                                    <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                                    </svg>
                                    <span className={styles.text}>Schedules</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.menu}>
                    <p className={styles.title}>Account</p>
                    <ul>
                        <li>
                            <NavLink to={""} className={styles.navLink}>
                                <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                                </svg>
                                <span className={styles.text}>info</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={""} className={styles.navLink}>
                                <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                                </svg>
                                <span className={styles.text}>Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
           </section>
            <section className={styles.mainContent}>
                <Outlet />
            </section>
        </div>
    );
}

export default Root;

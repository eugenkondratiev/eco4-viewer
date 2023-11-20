
import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (

        <>
            <header>
                <div className="nav-wrapper">

                    <nav>
                        <ul>
                            {/* <li>
                                <Link to="/">Головна</Link>

                            </li> */}
                            <li>
                                <Link to="/home">Домашня</Link>

                            </li>
                            <li>
                                <Link to="/blr4">Котел 4</Link>

                            </li>
                            <li>
                                <Link to="/t5">Турбина</Link>

                            </li>
                            <li>
                                <Link to="/day">Добові звіти</Link>
                            </li>
                            <li>
                                <Link to="/month">Місячні звіти</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )

}
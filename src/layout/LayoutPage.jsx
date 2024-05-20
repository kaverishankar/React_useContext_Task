import './Layoutmodule.css'
import { Link, Outlet } from "react-router-dom"
import links from '../link.json'

const Layout = () => {
    return (
        <div>
            <header className="header">
                <h1 style={{ textAlign: 'center', fontFamily: 'Poetsen One',color : '#ff0051' ,fontSize : '35px' }}>Phone World</h1>
                {
                    links.map((val) => (
                        <Link key={val.path} to={val.path} style={{ margin: '10px',color:'red' }}>
                            {val.name}
                        </Link>
                    )
                    )
                }
            </header>
            <aside className="sidebar">
                <h2>I Phone</h2>
                <h2>One Plus</h2>
                <h2>SamSung</h2>
                <h2>Oppo</h2>
                <h2>Vivo</h2>
                <h2>IQOO</h2>
                <h2>Redmi</h2>
            </aside>
            <div className='content'>
                <Outlet />
            </div>
            <footer className='footer'>
                <i style={{ padding: '10px' }} className="fa-brands fa-facebook"></i>
                <i style={{ padding: '10px' }} className="fa-brands fa-twitter"></i>
                <i style={{ padding: '10px' }} className="fa-brands fa-instagram"></i>
            </footer>
        </div>
    )
}

export default Layout
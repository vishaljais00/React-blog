import axios from "axios";
import { useEffect, useState } from "react"
import "./sidebar.css"
import {Link} from "react-router-dom"

export default function Sidebar() {

    const [cats, setCats] = useState([]);
    

    useEffect(()=>{

        const getCats = async ()=>{

            const res = await axios.get("/categories")
            setCats(res.data);
        }

        getCats();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://cdn.nikkiflower.com/assets/uploads/product_image/1393/small/1615536074_0.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facilis molestiae cum, blanditiis natus id error vero, libero ab, dolorem in iusto.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATOGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                 <span className="sidebarTitle">FOLLOW US</span>
                 <div className="sidebarSocial">
                 <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}

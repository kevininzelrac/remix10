import { NavLink } from "@remix-run/react"

const Nav = ()=> {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="blog">Blog</NavLink>
        </nav>
    )
}
export default Nav
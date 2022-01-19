import Link from "next/link";

const Navbar = ({ loginStatus }) => {
    return (
        <nav>
            {!loginStatus ?
                <Link href={'/feed'}>
                    <a>Login</a>
                </Link>
                :
                <Link href={'/'}>
                    <a>Logout</a>
                </Link>
            }
        </nav>
    );
}

export default Navbar;
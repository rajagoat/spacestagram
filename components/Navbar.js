import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
            <Link href={'/feed'}>
                <a>Login</a>
            </Link>
        </nav>
    );
}

export default Navbar;
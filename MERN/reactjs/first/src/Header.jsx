function Header() {
    return (
        <header>
            <ul style={
                {
                    display: "flex",
                    listStyle: "none",
                    gap:"50px"
                }
            }>
                <li>Home</li>
                <li>About</li>
                <li>Course</li>
                <li>Gallery</li>
            </ul>
        </header>
    )
}

export default Header;
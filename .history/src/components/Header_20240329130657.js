const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&usqp=CAU"
            alt="logo"
        />
    </a>
);
con
st Header = () => {
    return (
        <div className="header">
            <Title />
            {/* {Title()} */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Title;
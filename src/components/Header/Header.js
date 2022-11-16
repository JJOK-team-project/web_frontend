import "./Header.scss";
const dropdowncon = {
    <div class="dropdown-menu">
    <p>Dropdown content</p>
    <p>Dropdown content</p>
    <p>Dropdown content</p>
    </div>
}
function Header() {
  return (
    <div class="header">
        <h1>title</h1>
        <div class="dropdown">
            <button class="link">Information</button>
            
        </div>
        <div class="dropdown">
            <button class="link">Booking</button>
            <div class="dropdown-menu">
                <p>Dropdown content</p>
                <p>Dropdown content</p>
                <p>Dropdown content</p>
            </div>
        </div>
        <div class="dropdown">
            <a href="#" class="link">Pricing</a>
            <div class="dropdown-menu">
                <p>Dropdown content</p>
                <p>Dropdown content</p>
                <p>Dropdown content</p>
            </div>
        </div>
        <div class="dropdown">
            <a href="#" class="link">Join Us</a>
            <div class="dropdown-menu">
                <p>Dropdown content</p>
                <p>Dropdown content</p>
                <p>Dropdown content</p>
            </div>
        </div>
        <div class="dropdown">
            <a href="#" class="link">Login</a>
            <div class="dropdown-menu">
                <p>Dropdown content</p>
                <p>Dropdown content</p>
                <p>Dropdown content</p>
            </div>
        </div>
        <input type='text' name = 'searching' placeholder="search"></input>
    </div>
  );
}
export default Header;

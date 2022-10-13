import './Header.scss'
function Header(){
    return(
        <>
        <section className="header">
            <h1>Title</h1>
            <ul>
                <li><a link = "#" id = "header-elements">element 1</a></li>
                <li><a link = "#" id = "header-elements">element 2</a></li>
                <li><a link = "#" id = "header-elements">element 3</a></li>
                <li><a link = "#" id = "header-elements">element 4</a></li>
                <li><input type="search" className='search'></input></li>
            </ul>
        </section>
        </>
    )
}
export default Header
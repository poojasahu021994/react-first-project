import myimg from './assets/navbar_logo.png'
const Nav =() =>{
    return(
        <>
       
<section className="Topnavbar">
        <article>
            <div><a href="#"> <i class="fa-solid fa-envelope"></i>info@globledigitaltechnology.com</a></div>
            <div><a href="#"><i class="fa-solid fa-phone"></i>9009069985</a></div>
        </article>
        <article>
            <div><a href="#">Login</a></div>
            <div><a href="#">Register</a></div>
            <div><i className="fa-brands fa-facebook"></i></div>
            <div><a href="https://www.instagram.com/sahu_pooja02"><i class="fa-brands fa-instagram"></i></a></div>
            <div><i className="fa-brands fa-x-twitter"></i></div>
        </article>
    </section>
    <div className="Main_Navbar_div">
        <nav className="Main_navbar">
            <ul>
                <li>
                    <img src={myimg}/>
                </li>
                <li>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#About">About Us</a></li>
                        <li><a href="#All_course">All Course</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#contact1">Contact</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        </div>
        </>
    )
}
export default Nav
import About_detail from './assets/About_detail.png'
import python from './assets/python.jpg'
import business from './assets/business.jpg'
import color_design from './assets/color_design.jpg'
import course from './assets/course.avif'
import data_science from './assets/data_science.webp'
import management from './assets/management.jpeg'
import marketing from './assets/marketing.jpeg'

const About =() =>{
    return(
        <>
       
 {/* =========About section============= */}

    
<section className="About_detail" id="About" >
    <div id="about-us-heading"><h2>About Us</h2></div>
    <article>
        <div className="all_detail"><h2>Get up-skilled today,to get a better job tomorrow</h2><p>Globle Technology is a leading training Institute in Bhopal with more than 5 years of experience in this field. We are most popular for our training approach and strategies. These enable students to gain real-time exposure on cutting-edge technologies.We are specialized in providing excellent and cost-effective training courses in the below-mentioned technologies:We provide job training for all types of Internet Marketing and Software Courses used in the real world job environment.We cater to all the individuals ranging from beginner level computer user to the IT professionals. We prepare them for all the future challenges they might face in today’s job market.</p></div>
        <div><img src={About_detail} /></div>
    </article>
</section>

{/* =====types of Course===== */}
 <div id="All_course" className="course-heading"><h2>All Courses</h2></div>
<div className="Types_of_courses" >
    <div id="ui_ux">UI/UX Design</div>
    <div>Development</div>
    <div>Data Science</div>
    <div>Business</div>
    <div>Finacial</div>
</div>

<section className="card" >
    <article>
        <div><img src={python}/></div>
        <div>Data science and Machine learning with Python</div>
        <div className="price"><i className="fa-solid fa-indian-rupee-sign"></i> 350.00</div>
    </article>
    <article>
        <div><img src={color_design}/></div>
        <div>Create Amazing Color Schemes for Your UX Design Project</div>
        <div className="price"><i className="fa-solid fa-indian-rupee-sign"></i> 250.00</div>
    </article>
    <article>
        <div><img src={business}/></div>
        <div>Culture & Leadership:strategies for a Business</div>
        <div className="price"><i className="fa-solid fa-indian-rupee-sign"></i> 295.00</div>
    </article>
    <article>
        <div><img src={course}/></div>
        <div>Data science and Machine learning with Python</div>
        <div className="price"><i className="fa-solid fa-indian-rupee-sign"></i> 350.00</div>
    </article>
    <article>
        <div><img src={marketing}/></div>
        <div>Create Amazing Color Schemes for Your UX Design Project</div>
        <div className="price"><i className="fa-solid fa-indian-rupee-sign"></i> 250.00</div>
    </article>
    <article>
        <div><img src={management}/></div>
        <div>Culture & Leadership:strategies for a Business</div>
        <div className="price"><i className="fa-solid fa-indian-rupee-sign"></i> 295.00</div>
    </article>
</section>
        </>
    )
}
export default About
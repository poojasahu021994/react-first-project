const Contact =() =>{
    return(
        <>
        <section className="contact_title" id="contact1">
    <article>
        <div align ="center"><u>Get in Touch With Us</u></div>
    </article>
    </section>

    <section className="contact" >
    
        <article> 
            <div><i className="fa-regular fa-address-book"></i>Address</div>
            <div>B-10 2nd floor,MP Nagar,Bhopal,Madhya Pradesh<br/>462022</div>
            <br/>
            <div><i className="fa-regular fa-envelope"></i>Email Address</div>
            <div>info@globledigitaltechnology.com</div>
            <br/>
            <div><i className="fa-solid fa-phone"></i>Phone Number</div>
            <div>9090069985</div>
        </article>
        <article className="form">
        <form method="get" action=""  align="center">
            <div className="name_detail" >
                <input id="name" type="text" name="name" placeholder="First and last name"/></div>
                <br/>
                <div>
                     <input id="email" type="email" name="email" value="" placeholder="Enter Email"/>
                </div>
                <br/>
                <div>
                     <input id="number" type="tel" placeholder="Phone no."/>
                </div>
                   <br/>
                   <div>
                    <input type="text" name="Subject" placeholder="Subject"/></div>
                    <br/>
                    <button>Submit</button>
        </form>
    </article>
    </section>
 
        </>
    )
}
export default Contact
import React from 'react';
import Hero from '../components/hero';
import contactImg from '../images/contactbcg.png';
import contact from '../components/cp/contact.js';
import Title from '../components/title';

export default function contactPage(){
    return(
        <>
        <Hero img={contactImg} />
        <section className="py-5">
         <div className="row">
         <div className="col-10 mx-auto col-md-6 my-3">
         <Title title="contact us" />
         <form className="mt-5" action="https://formspree.io/anywhereankita@gmail.com" method="POST">
         <div className="form-group">
         <input type="text" name="firstName" className="form-control" placeholder="John Doe" />
         </div>
         <div className="form-group">
         <input type="email" name="email" className="form-control" placeholder="email@xyz.com" />
         </div>
         <div className="form-group">
         <input type="text" name="subject" className="form-control" placeholder="important!" />
         </div>
         <div className="form-group">
         <textarea name="message" className="form-control" rows="10" placeholder="Your message :)" />
         </div>
         <div className="form-group-mt-3">
         <input type="submit" value="Send" className="form-control bg-primary text-white"/>
         </div>
         </form>
         </div>        
         </div>
        </section>
        </>
    );
}
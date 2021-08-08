import React from 'react';
import "./WebPage.css";
import pre1 from '../images/pre1.png';
import pre2 from '../images/pre2.png';
import pre3 from '../images/pre3.png';
import pre4 from '../images/pre4.png';
import pre5 from '../images/pre5.png';
import pre6 from '../images/pre6.png';
import Statewise from './statewise';
import saikat from '../images/saikat.jpg';
import sudipta from '../images/sudipta.jpg';

const WebPage = () => {
	return (
		<>
			<header>
				<a href="#" className="logo">C<span className="fas fa-virus"></span>vid-19 Dashboard</a>
				<div id="menu" className="fas fa-bars"></div>
				<nav className="navbar">
					<a  href="#home">Home</a>
					<a href="#prevent">Prevent</a>
					<a href="#livestat">Live Dashboard</a>
					<a href="#creator">About us</a>
				</nav>
			</header>

			<section className="home" id="home">
				<div className="content">
					<h1>Prevention from Corona Virus</h1>
					<h3>stay home, stay safe</h3>
				</div>
			</section>

			<section className="prevent" id="prevent">
				<h1 className="heading"> How to prevent virus </h1>
				<div className="box-container">
					<div className="box">
						<img src={pre1} alt="" />
						<h3>wash your place</h3>
					</div>
					<div className="box">
						<img src={pre2} alt="" />
						<h3>maintain distance</h3>
					</div>
					<div className="box">
						<img src={pre3} alt="" />
						<h3>don't touch face</h3>
					</div>
					<div className="box">
						<img src={pre4} alt="" />
						<h3>wash your hand</h3>
					</div>
					<div className="box">
						<img src={pre5} alt="" />
						<h3>use napkin</h3>
					</div>
					<div className="box">
						<img src={pre6} alt="" />
						<h3>wear a mask</h3>
					</div>
				</div>
			</section>

			<Statewise/>

			<section className="creator" id="creator">

                <h1 className="heading">About us</h1>
                <div className="box-container">

                    <div className="box">
                        <img src={sudipta} alt=""/>
                            <h3>Sudipta Das</h3>
                            <span>sudipta@gmail.com</span>
                            <div className="share">
                                <a href="#" className="fab fa-whatsapp"></a>
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-instagram"></a>
                                <a href="#" className="fab fa-linkedin"></a>
                            </div>
                    </div>
                    <div className="box">
                        <img src={saikat} alt=""/>
                            <h3>Saikat Das</h3>
                            <span>saikat@gmail.com</span>
                            <div className="share">
                                <a href="#" className="fab fa-whatsapp"></a>
                                <a href="#" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-instagram"></a>
                                <a href="#" className="fab fa-linkedin"></a>
                            </div>
                    </div>
                </div>
            </section>
            <h1 className="credit"><a href="#"></a> &copy; copyright @ 2021 </h1>
			</>
			);
}


export default WebPage;
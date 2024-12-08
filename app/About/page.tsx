import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from "next/image";
import banner2 from "../image/depositphotos_206432966-stock-photo-attractive-fashionable-woman-posing-white.jpg";
import banner3 from "../image/Video card.png";
import card9 from "../image/team-1-user-1.jpg";
import card10 from "../image/media.png";
import card11 from "../image/team-1-user-2.jpg";
import row from "../image/row.png";




export default function page() {
    return (
        <>


            <div className="split-container">
                <div className="content">
                    <h2>Content Title</h2>
                    <p>We know how large objects will act, </p>
                    <p>but things on a small scale</p>

                    {/* Move the button here below the content */}
                    <div className="quote-container">
                        <button className="quote-button">
                            Get Quote Now
                        </button>
                    </div>
                </div>

                <div className="image">
                    <Image
                        src={banner2}
                        alt="Right Image"
                        style={{ width: '100%', height: '70%' }}
                    />
                </div>
            </div>



            <div className="two-column-container">
                <div className="left-column">
                    <p>Met minim Mollie non desert<br /> Alamo est sit cliquey dolor do<br /> met sent.</p>
                </div>
                <div className="right-column">
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
            </div>














            <section className="hero-section">


                <div className="stat">
                    <h3>15K</h3>
                    <p>Happy Customers</p>
                </div>
                <div className="stat">
                    <h3>150K</h3>
                    <p>Monthly Visitors</p>
                </div>
                <div className="stat">
                    <h3>15</h3>
                    <p>Countries Worldwide</p>
                </div>
                <div className="stat">
                    <h3>100+</h3>
                    <p>Top Partners</p>
                </div>


            </section>






            <div className="image3">
                <Image
                    src={banner3}
                    alt="Right Image"
                    style={{ width: '100%', height: '70%' }}
                />
            </div>


            {/* Editor's Pick Section */}
            <div className="editorPick">
                <h3>Meet Our Team</h3>
                <p>Problems trying to resolve the conflict between
                    <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>





            {/* card */}
            <section style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                {/* Card 1 */}
                <div
                    className="card"
                    style={{
                        width: "25rem",
                        height: "auto",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "16px",
                    }}
                >
                    <Image
                        src={card9}
                        alt="Right Image"
                        style={{ width: "100%", height: "70%" }}
                    />
                    <div className="card-body1">
                        <div>Username</div>
                        <p className="card-body2">Profession</p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '15px',
                                justifyContent: 'center',
                                marginTop: '20px', // Add margin-top here to create space
                            }}
                        >
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaFacebook size={30} style={{ color: '#3b5998' }} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaInstagram size={30} style={{ color: '#E4405F' }} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaTwitter size={30} style={{ color: '#1DA1F2' }} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Card 2 */}
                <div
                    className="card"
                    style={{
                        width: "25rem",
                        marginBottom: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "16px",
                        height: "450px",
                    }}
                >
                    <Image
                        src={card10}
                        alt="Right Image"
                        style={{ width: "100%", height: "70%" }}
                    />
                    <div className="card-body1">
                        <div>Username</div>
                        <p className="card-body2">Profession</p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '15px',
                                justifyContent: 'center',
                                marginTop: '20px', // Add margin-top here to create space
                            }}
                        >
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaFacebook size={30} style={{ color: '#3b5998' }} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaInstagram size={30} style={{ color: '#E4405F' }} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaTwitter size={30} style={{ color: '#1DA1F2' }} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Card 3 */}
                <div
                    className="card"
                    style={{
                        width: "25rem",
                        marginBottom: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "16px",
                    }}
                >
                    <Image
                        src={card11}
                        alt="Right Image"
                        style={{ width: "100%", height: "70%" }}
                    />
                    <div className="card-body1">
                        <div>Username</div>
                        <p className="card-body2">Profession</p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '15px',
                                justifyContent: 'center',
                                marginTop: '20px', // Add margin-top here to create space
                            }}
                        >
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaFacebook size={30} style={{ color: '#3b5998' }} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaInstagram size={30} style={{ color: '#E4405F' }} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <FaTwitter size={30} style={{ color: '#1DA1F2' }} />
                            </a>
                        </div>
                    </div>

                </div>
            </section>






    {/* Editor's Pick Section */}
    <div className="editorPick">
                <h3>Big Companies Are Here</h3>
                <p>Problems trying to resolve the conflict between 
                    <br />
                    the two major realms of Classical physics: Newtonian mechanics  </p>
            </div>




            <div className="image5">
                <Image
                    src={row}
                    alt="Right Image"
                    style={{ width: '100%', height: '70%' }}
                />
            </div>




        </>
    );
}




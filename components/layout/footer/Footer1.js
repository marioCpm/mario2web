'use client';
import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Footer1({ footerData }) {
    const { user, error, isLoading } = useUser();

    return (
        <>

            <footer className="footer">
                <div className="action-box">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                {!user?.email ? <div className="action-box-inner">
                                    <h2 className="title">{footerData?.footer1Topic}</h2>
                                    <p className="content">{footerData?.footer1Description}</p>
                                    <div className="group-btn">
                                        <Link href="/" className="tf-button">
                                            <span>SIGN UP NOW</span>
                                        </Link>
                                    </div>
                                </div> : <div className="action-box-inner">
                                    <h2 className="title">{footerData?.footer1Topic}</h2>
                                    <p className="content">{footerData?.footer1Description}</p>
                                    <div className="group-btn">
                                        <Link href="/pricing" className="tf-button">
                                            <span>UPGRADE PLAN</span>
                                        </Link>
                                    </div>
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md-12">
                                <div className="widget widget-infor">
                                    <div className="logo">
                                        <img id="logo_footer" src="/assets/images/logo/logo-footer.png" alt="Image" />
                                    </div>
                                    <p className="content">{footerData?.footer}</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <div className="widget widget-menu">
                                    {/* <div className="menu menu-1">
                                        <h6 className="widget-title">SUBSCRIBE</h6>
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/about1">About</Link></li>
                                            <li><Link href="/roadmap-1">Roadmap</Link></li>
                                            <li><Link href="/team">Our Team</Link></li>
                                            <li><Link href="/faq1">FAQs</Link></li>
                                        </ul>
                                    </div> */}
                                    {/* <div className="menu menu-2">
                                        <h6 className="widget-title">COMPANY</h6>
                                        <ul>
                                            <li><Link href="/about2">About Us 2</Link></li>
                                            <li><Link href="/roadmap-2">Road Map 2</Link></li>
                                            <li><Link href="/testimonial">Testimonial</Link></li>
                                            <li><Link href="/item-detail">Item Details</Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                                <div className="widget widget-subcribe">
                                    <h6 className="widget-title">SUBSCRIBE</h6>
                                    <form action="#" id="subscribe-form">
                                        <input type="email" placeholder="Enter your email" required id="subscribe-email" />
                                        <button className="tf-button" type="submit" id="subscribe-button">SUBSCRIBE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bottom">
                                    <p className="copy-right">GALENAI {new Date().getFullYear()} - ALL rights reserved</p>
                                    <ul className="social-item">
                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-telegram-plane" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                        <li><Link href="#"><i className="icon-fl-tik-tok-2" /></Link></li>
                                        <li><Link href="#"><i className="icon-fl-vt" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

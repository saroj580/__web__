import { useMediaQuery } from "react-responsive"

const FooterSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
    });

    return (
        <section className="footer-section">
            <img src="/images/footer-dip.png" alt="" className="w-full object-cover -translate-y-1" />
            <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh] ">
                <div className="overflow-hidden">
                    <h1 className="general-title text-center text-milk py-5">#CHUGRESPONSIBLY</h1>
                </div>

                {isMobile ? (
                    <img src="/images/footer-drink.png" alt="static footer image" className="absolute top-0 object-contain" />
                ): (
                    <video src="/videos/splash.mp4" autoPlay playsInline muted className="absolute top-[-100px] object-contain mix-blend-lighten"></video>   
                )}

                

                <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5 ">
                    <div className="social-btn">
                        <img src="/images/yt.svg" alt="" />
                    </div>

                    <div className="social-btn">
                        <img src="/images/insta.svg" alt="" />
                    </div>

                    <div className="social-btn">
                        <img src="/images/tiktok.svg" alt="" />
                    </div>
                    
                </div>

                <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
                    <div className="flex items:center md:gap-16 gap-5 ">
                        <div>
                            <p>SPLYT Flavors</p>
                        </div>

                        <div>
                            <p>Chug Club</p>
                            <p>Students Marketing</p>
                            <p>Diary Dealers</p>
                        </div>

                        <div>
                            <p>Company</p>
                            <p>Contacts</p>
                            <p>Tasty Talks</p>
                        </div>
                    </div>

                    <div className="md:max-w-lg">
                        <p>Get Early Access and Stay informed <br /> About Products Updates, Events and More!</p>
                        <div className="flex justify-between items-center border-b border=[#D9D9D9] py-5 md:mt-10">
                            <input type="email" placeholder="Your Email" className="w-full placeholder:font-sans placeholder:text-[#999999]" />
                            <img src="/images/arrow.svg" alt="arrow" />
                        </div>
                    </div>
                </div>

                <div className="copyright-box">
                    <p>Copyright &copy; 2025 Splyt - All Rights Reserved</p>
                    <div className="flex items-center gap-7">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSection

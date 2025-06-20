import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

function HeroSEction() {

    const isMobile = useMediaQuery({
        query:"(max-width:768px)"
    })

    const isTablet = useMediaQuery({
        query : "(max-width:1024px)"
    })


    useGSAP(() => {
        const titleSplit = SplitText.create(".hero-title", {
            type: "chars",
            
        })

        const timeLine = gsap.timeline({
            delay: 1
        });

        timeLine.to(".hero-content", {
            opacity: 1,
            y: 0,
            ease : "power1.inOut"
        }).to(".hero-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease : "circ.out"
        }, "-=0.5").from(titleSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease:"power2.out"
        })

        const heroTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-content",
                start: "1% top",
                end: "bottom top",
                scrub: true,
            }
        });
        heroTimeLine.to(".hero-container", {
            rotate: 7,
            scale: 0.9,
            yPercent : 3,
            ease: "power1.inOut"

        })
    })

    return (
        <section className="bg-main-bg">
            <div className="hero-container">
                {
                    isTablet ? (
                        <>
                            {
                                isMobile && <img src="/images/hero-bg.png" className="absolute bottom-40 size-full object-cover"/>
                            }
                            <img src="/images/hero-img.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto" />
                        </>
                    ): (
                        <video scr="/videos/hero-bg.mp4" autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover" />
                    )
                }

                <div className="hero-content opacity-0">
                    <div className="overflow-hidden">
                        <h1 className="hero-title">Freaking Delicious</h1>
                    </div>

                    <div style={{
                            clipPath : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }}
                        className="hero-text-scroll"
                    >
                        <div className="hero-subtitle">
                            <h1>Protein + Caffien</h1>
                        </div>
                    </div>

                    <h2>Live life to the fullest with SPLYT: Shatter boredom and embrace your inner kid with every delicious smooth chug.</h2>
                    <div className="hero-button">
                        <p>Chug a SPLYT</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSEction

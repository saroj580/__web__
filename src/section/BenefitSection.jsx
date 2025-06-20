import { useGSAP } from "@gsap/react"
import ClipPathTitle from "../compontents/ClipPathTitle"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const BenefitSection = () => {

    useGSAP(() => {
        const revealTimeline = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5,
                markers : true
            }
        });

        revealTimeline.to(".benefit-section .first-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        }).to(".benefit-section .second-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        }).to(".benefit-section .third-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        }).to(".benefit-section .fourth-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
    })
    return (
        <section className="benefit-section">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p>Unlock the Advantage: <br /> Explore the key benefit of Choosing SPLYT</p>
                </div>
                <div className="mt-10 col-center">
                    <ClipPathTitle
                        title={"Shelf stable"}
                        color={"#faeade"}
                        bg={"#c88e64"}
                        className={"first-title"}
                        borderColor={"#222123"}
                    />
                    <ClipPathTitle
                        title={"Protein + Caffeine"}
                        color={"#222123"}
                        bg={"#faeade"}
                        className={"second-title"}
                        borderColor={"#222123"}
                    />
                    <ClipPathTitle
                        title={"Infinitely recylable"}
                        color={"#faeade"}
                        bg={"#7F3B2D"}
                        className={"third-title"}
                        borderColor={"#222123"}
                    />
                    <ClipPathTitle
                        title={"Lacotse free"}
                        color={"#2E2D2F"}
                        bg={"#FED775"}
                        className={"fourth-title"}
                        borderColor={"#222123"}
                    />
                </div>

                <div className="md:mt-0 mt-10">
                    <p>And much more ...</p>
                </div>
            </div>
        </section>
    )
}

export default BenefitSection

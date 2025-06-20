import { useMediaQuery } from "react-responsive"
import { nutrientLists } from "../constants"
import { useEffect, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const NutritionSection = () => {
 
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",   
    })

    const [lists, setlistes] = useState(nutrientLists);

    useEffect(() => {
        if (isMobile) {
            setlistes(nutrientLists.slice(0,3))
        } else {
            setlistes(nutrientLists)
        }
    }, [isMobile])

    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", {
            type: "chars",
            
        })

        const paragraphSplit = SplitText.create(".nutrition-section p", {
            type: "words, lines",
            linesClass: "paragraph-line",

        })

        const contentTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top center",
            }
        })

        contentTimeline.from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease : "power2.out"
        }).from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger : 0.01,
        })

        const titleTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top 80%",
            }
        })

        titleTimeline.to(".nutrition-text-scroll", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease : "power1.inOut"
        })
    })

    return (
        <section className="nutrition-section">
            <img src="/images/slider-dip.png" alt=""  className="w-full object-cover" />
            <img src="/images/big-img.png" alt="" className="big-img" />

            <div className="flex absolute top-50 md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
                <div className="relative inline-block md:translate-y-20">
                    <div className="general-title relative flex flex-col justify-center items-center gap-24">
                        <div className="overflow-hidden place-self-start">
                            <h1 className="nutrition-title">Its still does</h1>
                        </div>
                        <div style={{clipPath : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}} className="nutrition-text-scroll place-self-start">
                            <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                                <h2 className="text-milk-yellow">Body good</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex relative md:justify-center items-center translate-y-5">
                    <div className=" md:max-w-xs max-w-md">
                        <p className=" w-full text-lg md:text-right text-balance font-paragraph mx-90">Milk contains a wide array of nutrients including vitamins, minerals and protein and this is lactose free</p>
                    </div>
                </div>

                <div className="nutrition-box mx-50 top-[70vh] ">
                    <div className="list-wrapper">
                        {
                            lists.map((nutrient, index) => (
                                <div key={index} className="relative flex-1 col-center">
                                    <div className="">
                                        <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                        <p className="font-paragraph text-sm mt-2">up to</p>
                                        <p className="text-2xl md:text-4xl tracking-tighter font-bold">{nutrient.amount}</p>
                                    </div>

                                    {
                                        index !== lists.length - 1 && (
                                            <div className="spacer-border"></div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NutritionSection

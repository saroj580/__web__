import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

const MessageSection = () => {
    useGSAP(() => {
        const firstMessageSplit = SplitText.create(".first-message", {
            type: "words",
            
        });
        const secondMessageSplit = SplitText.create(".second-message", {
            type: "words",
            
        });
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "words, lines",
            linesClass: "paragraph-line"
            
        })
        gsap.to(firstMessageSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end:"30% center",
                scrub:true,
                markers : true
            }
            
        })
        
    })


    return (
        <section className="message-content">
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message">Stir up your fearless past and</h1>
                        <div className="msg-text-scroll">
                            <div className="bg-light-brown md:pb-5 pb-3 px-5">
                                <h2 className="text-red-brown">Fuel Up </h2>
                            </div>
                        </div>

                        <h1 className="second-message">
                            Your future with every gulp of Perfect Protein
                        </h1>
                        
                    </div>
                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow hidden">
                            <p>Rev up your rebel spirit and feed the advanture of life with SPLYT, where you're on chug away from epic nostalgia and fearless fun</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MessageSection

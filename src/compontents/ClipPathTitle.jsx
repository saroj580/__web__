const ClipPathTitle = ({title, bg, className, borderColor, color}) => {
    return (
        <div className="2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw]">
            <div style={{clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", borderColor : borderColor}} className={`${className} border-[.5w] text-nowrap opacity-0`}>
                <div className="md:px-14 px-3 md:pt-0 pt-3 pb-5" style={{backgroundColor : bg}}>
                    <h2 className="" style={{color : color, }}>{title}</h2>
                </div>
           </div>
        </div>
    )
}

export default ClipPathTitle

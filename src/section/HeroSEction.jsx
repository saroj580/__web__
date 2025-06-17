function HeroSEction() {
    return (
        <section className="bg-main-bg">
            <div className="hero-container">
                <img
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
                    src="/images/hero-img.png"
                    alt="hero-img"
                />

                <div className="hero-content">
                    <div className="overflow-hidden">
                        <h1 className="hero-title">Freaking Delicious</h1>
                    </div>

                    <div style={{
                            clipPath : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }}
                        className="hero-text-scroll">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSEction

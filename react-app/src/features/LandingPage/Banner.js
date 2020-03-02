import React from 'react'

const Banner = () => {
    return <div className="banner">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="banner_item align-items-center" style={{ backgroundImage: "url(images/banner_1.jpg)" }}>
                    <div className="banner_category">
                        <a href="/categories">women's</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="banner_item align-items-center" style={{ backgroundImage: "url(images/banner_2.jpg)" }}>
                    <div className="banner_category">
                        <a href="/categories">accessories's</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="banner_item align-items-center" style={{ backgroundImage: "url(images/banner_3.jpg)" }}>
                    <div className="banner_category">
                        <a href="/categoriesml">men's</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
};

export default Banner;
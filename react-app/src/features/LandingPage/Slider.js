import React from 'react'

const Slider = () => {
    return <div className="main_slider" style={{ backgroundImage: "url(images/slider_1.jpg)" }}>
    <div className="container fill_height">
        <div className="row align-items-center fill_height">
            <div className="col">
                <div className="main_slider_content">
                    <h6>ImageKit React SDK Demo</h6>
                    <h1>File upload made easy</h1>
                    <div className="red_button shop_now_button"><a href="/product-upload">Upload Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
};

export default Slider;
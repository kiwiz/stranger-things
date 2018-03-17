import React from 'react'

const Parallax = (props) => (
    <div class="parallax">
        <div class="parallax-top-left" tabindex="1"></div>
        <div class="parallax-top-right" tabindex="2"></div>
        <div class="parallax-bottom-left" tabindex="3"></div>
        <div class="parallax-bottom-right" tabindex="4"></div>
        <div class="parallax-content">
            {props.children}
        </div>
    </div>
)

Parallax.Front = (props) => (
    <div class="parallax-front">
        {props.children}
    </div>
)

Parallax.Front = (props) => (
    <div class="parallax-back">
        {props.children}
    </div>
)

export default Parallax

import React from 'react';
import '../Footer/Footer.scss'
export default function(){
    return(
        <div className="footer">
            <div class="container">
                <div class="row">
                <div class="col-md-6 copyrights">
                    <p>© Copyright 2020   |   Design by Wayne   |   All Rights Reserved</p>
                </div>
                <div class="col-md-6 social">
                    <ul class="social-networks">
                    <li class="li1"><a href="https://www.facebook.com/ngoc.hoang.9843" target="_blank">Facebook</a></li>
                    <li class="li2"><a href="https://www.instagram.com/waynehoang/?hl=vi" target="_blank">Instagram</a></li>
                    <li class="li3"><a href="https://github.com/hoangtrandaingoc" target="_blank">Github</a></li>
                </ul>
                </div>
                </div>
            </div>
        </div>
    );
}
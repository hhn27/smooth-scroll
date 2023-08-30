'use client'
import './home.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useEffect, useLayoutEffect, useRef } from 'react';

export default function IndexHome(){
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const masked = document.querySelectorAll(".split-line-inner_mask");
        setTimeout(() => {
        gsap.utils.toArray(".split_line").forEach((word, index) => {
            gsap.to(masked[index], {
                scrollTrigger: {
                    trigger: word,
                    scroller: ".App",
                    scrub: true,
                    start: "top center",
                    end: "bottom center-=200",
                },
                width: "0%",
            })
        })
        const scrollText = document.querySelector(".scroll-text h2");
        gsap.to(scrollText, {
            scrollTrigger: {
                trigger: scrollText,
                scroller: ".App",
                scrub: true,
                start: "top bottom",
                end: "bottom top",
            },
            x: "-33%",
        })

        gsap.utils.toArray(".uneven").forEach((uneven) => {
        gsap.to(uneven, {
            scrollTrigger: {
                trigger: '.dribbble',
                scroller: ".App",
                scrub: true,
                start: "top top",
                end: "bottom top",
            },
            y: "-20%",
        })
        })
        gsap.utils.toArray(".even").forEach((even) => {
        gsap.to(even, {
            scrollTrigger: {
                trigger: '.dribbble',
                scroller: ".App",
                scrub: true,
                start: "top bottom",
                end: "bottom top",
            },
            y: "10%",
        })
        })
        gsap.to('.footer-transform', {
        scrollTrigger: {
            trigger: '.footer',
            scroller: ".App",
            scrub: true,
            start: "top bottom",
            end: "bottom bottom",
        },
        y: "0%",
        })
        gsap.utils.toArray(".banner-split-text div").forEach((text, index) => {
        if(index%2===0){
        gsap.to(text, {
            scrollTrigger: {
                trigger: '.banner',
                scroller: ".App",
                scrub: true,
                start: "top top",
                end: "bottom center",
            },
            y: `${5*index}%`,
        })
        }
        else{
            gsap.to(text, {
            scrollTrigger: {
                trigger: '.banner',
                scroller: ".App",
                scrub: true,
                start: "top top",
                end: "bottom center",
            },
            y: `-${5*index}%`,
        })
        }
        })
        ScrollTrigger.refresh();
    }, 1000)
        ScrollTrigger.refresh();
        return () => {
            ScrollTrigger.kill();
          };
    }, [])

return(
    <div>
            <section className="banner" style={{height: '100vh', width: '100%'}}>
                <div 
                    data-scroll
                    data-scroll-speed="-2"
                    data-scroll-direction="horizontal" 
                    className="banner-text"
                >
                    My
                </div>
                <div className="banner-split-text">
                    <div> P </div>
                    <div> O </div>
                    <div> F </div>
                    <div> O </div>
                    <div> L </div>
                    <div> I </div>
                    <div> O </div>
                </div>
                <div className="img-banner"><img src="https://uploads-ssl.webflow.com/63485f909aa66017bb9e4f34/634d91eab4bc153327869acc_Philipp_2023_Hero.webp"/></div>
                <div className="circle"></div>
            </section>
              <section className="how-i_work padding-top padding-bottom-large wf-section">
                <div className="container w-container">
                    <div className="row">
                    <div className="flex_col">
                        <div className="inline">
                            <div className="line">
                    </div>
                    <h2 className="text-m"> How I work</h2>
                </div>
                <div className="heading-l split_lines mask">
                    <div className="split_line">
                        <div className="split-line_inner">
                            I integrate, collaborate,

                        </div>
                        <div className="split-line-inner_mask">

                        </div>
                    </div>
                    <div className="split_line">
                        <div className="split-line_inner">and challenge.</div>
                        <div className="split-line-inner_mask">

                        </div>
                    </div>
                    <div className="split_line">
                        <div className="split-line_inner">I embrace

                        </div>
                        <div className="split-line-inner_mask">

                        </div>
                    </div>
                    <div className="split_line">
                        <div className="split-line_inner">
                            the creative freedom
                        </div>
                        <div className="split-line-inner_mask">

                        </div>
                    </div>
                    <div className="split_line">
                        <div className="split-line_inner">
                            to craft solutions</div><div className="split-line-inner_mask">

                            </div>
                        </div>
                        <div className="split_line">
                            <div className="split-line_inner">
                                that effectively
                            </div>
                            <div className="split-line-inner_mask">

                            </div>
                        </div>
                        <div className="split_line">
                            <div className="split-line_inner">
                                connect,
                            </div>
                            <div className="split-line-inner_mask">

                            </div>
                        </div>
                        <div className="split_line">
                            <div className="split-line_inner">
                                communicate,
                            </div>
                            <div className="split-line-inner_mask">

                            </div>
                        </div>
                        <div className="split_line">
                            <div className="split-line_inner">
                                and inspire
                            </div>
                            <div className="split-line-inner_mask">

                            </div>
                        </div>
                        <div className="split_line">
                            <div className="split-line_inner">
                                audiences.
                            </div>
                            <div className="split-line-inner_mask">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="scroll-text">
        <div>
            <h2>Discover more stuff i created</h2>
        </div>
    </section>
    <section className="dribbble">
    <div className="dribbble_grid">
        <div id="w-node-_682d6bb0-b50f-70d5-2c71-6e10f1395062-5e6888dd" className="uneven w-dyn-list">
            <div role="list" className="w-dyn-items">
                <div role="listitem" className="dribbble_shot w-dyn-item">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63c6bc604a2d9d87a77ee54e_tracics_-_search__.png" alt="Esport Dashboard - Search component 🔍" className="tiles_img"/>
                </div>
                <div role="listitem" className="dribbble_shot w-dyn-item">
                    <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63c6bc602f8e050c1efc7c57_instagram_presentation.png" alt="Website for an urban and latin DJ" className="tiles_img"/>
                </div>
                <div role="listitem" className="dribbble_shot w-dyn-item">
                    <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63c6bc6181b89f68f19b0166_rocket_league_v2.gif" alt="Rocket League Slider Animation" className="tiles_img"/>
                </div>
            </div>
        </div>
    <div id="w-node-_24785264-8934-3699-d45b-e8e4d21ae9d1-5e6888dd" className="even w-dyn-list">
        <div role="list" className="w-dyn-items">
            <div role="listitem" className="dribbble_shot w-dyn-item">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63d51338b37a755e5d8c9d64_filter_exploration.png" alt="Filter component exploration 📄" className="tiles_img"/>
            </div>
            <div role="listitem" className="dribbble_shot w-dyn-item">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63d4fb8a4a22f6d9b694f0d9_tracics_-_accuracy_comparison__.png" alt="Esport Dashboard - Accuracy comparison 🎯" className="tiles_img"/>
            </div>
            <div role="listitem" className="dribbble_shot w-dyn-item">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63c7d2d7315fa840406085f9_paycircle_-_overview_alt.png" alt="PayCircle - Transaction overview 💸" sizes="45vw" class="tiles_img"/>
            </div>
        </div>
    </div>
    <div id="w-node-c233090f-3aee-2eb2-5ca1-f704fd1d3b78-5e6888dd" className="uneven w-dyn-list">
        <div role="list" className="w-dyn-items">
            <div role="listitem" className="dribbble_shot w-dyn-item">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63c6bc61c1a72e8e1182b586_guccihighwaters_dribble.png" alt="guccihighwaters Website Concept" className="tiles_img"/>
            </div>
            <div role="listitem" className="dribbble_shot w-dyn-item">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63c6bc629fec132155f93345_ezgif-5-89481ed365b7.gif" alt="Personal Website - pgirzalsky.com - Redesign" className="tiles_img"/>
            </div>
            <div role="listitem" className="dribbble_shot w-dyn-item">
                <img loading="lazy" src="https://uploads-ssl.webflow.com/6348723903cf861b1ac814ed/63c6bc6307b6f48ccb80e784_logo_redesign_2019.png" alt="Personal Logo Redesign 2019" className="tiles_img"/>
            </div>
        </div>
    </div>
</div>
</section>
<section className="footer">
    <div className="footer-transform">
        <div className="lets-talk">
            <div className="word-split">
                <span>L</span>
                <span>E</span>
                <span>T</span>
                <span>'S</span>
            </div>
            <div className="word-split">
                <span>T</span>
                <span>A</span>
                <span>L</span>
                <span>K</span>
            </div>
        </div>
        <div className="social-media">
            <h3> Socials </h3>
            <div className="social">
                <span> Dribbble </span>
                <span> Instagram </span>
            </div>
        </div>
    </div>
</section>
    <div style={{height: '100vh', width: '100%'}}></div>
</div>
)}
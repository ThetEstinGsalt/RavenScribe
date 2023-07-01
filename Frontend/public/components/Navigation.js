import React, { Component } from 'react'
import $ from 'jquery'

class Navigation extends Component {
    constructor(props) {
        super()
    }
    componentDidMount() {
        $('document').ready(function () {
            let a = document.getElementById('ham');
            a.addEventListener('click', rotate)


            function rotate() {


                a.style.transform = 'rotate(-90deg)';

                setTimeout(() => {
                    a.style.transform = 'rotate(0deg)';

                }, 500);

            }

            $('#searchcross').on("click", function () {
                console.log("this is serachbar")
                // $('.searchbar').css({ 'z-index': '10', 'visibility': 'visible' })
                $('.searchbar').css({
                    'z-index': '-50', 'visibility': 'hidden', 'opacity': '0', 'display': 'none'
                })

                // $('.searchbar').hide()

            })
            $('.search-image').on("click", function () {
                $('.searchbar').css({ 'z-index': '1001', 'visibility': 'visible', 'opacity': '.99', 'display': 'flex' })
                // $('.searchbar').show()

            })

            $('.navlinks a li').on('mouseover', function () {


                $(this).children('.navlinks a li div ').css({

                    'visibility': 'visible',
                    'opacity': '1',
                    'transform': 'translateX(60px)',
                })

            }).on('mouseleave', function () {
                $(this).children('.navlinks a li div ').css({

                    'transform': 'translateX(40px)',
                    'opacity': '0',
                    'visibility': 'hidden'
                })
            })


            const burger = document.querySelector('#ham')
            const nav = document.querySelector('.navlinks')
            const ham = document.querySelector('#hamcross')
            // console.log(nav)

            burger.addEventListener('click', () => {

                nav.classList.toggle('active')
                console.log(nav.classList)
            })
            ham.addEventListener('click', function () {
                nav.classList.toggle('active')
            })





        })
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            // let prev = document.querySelector('#pagination-prev .pagination-title')
            // let next = document.querySelector('#pagination-next .pagination-title')
            // let site = document.querySelector('.site-content')
            // // prev.style.left = "0px"
            // // next.style.right = "0px"
            // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
            //     prev.style.left = "0px"
            //     next.style.right = "0px"


            // } else {
            //     prev.style.left = "-80px"
            //     next.style.right = "-80px"


            // }
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("jsnav").style.top = "0px";
            } else {
                document.getElementById("jsnav").style.top = "-60px";
            }
            prevScrollpos = currentScrollPos;
        }





    }
    render() {

        return (
            <>
                <nav id="jsnav" className="navigation-bar">
                    <div className="navcontainer">
                        <div className="nav-container">
                            <img id="ham" src={'../icons/ham.png'} alt="" />
                            <div className="logo" >
                                <img src={'../icons/logo.png'} style={{ height: 3.2 + 'em' }} alt="" />
                            </div>



                        </div>

                        <ul>



                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/search/2"}>Foods</a></li>
                            <li><a href={"/search/1"}>Lifestyle</a></li>
                            <li><a href={"/search/3"}>Guide</a></li>
                            <li><a href={"/search/4"}>Facts</a></li>
                            <li><a href={"/search/5"}>Fitness</a></li>


                        </ul>
                        <div className="search-image">
                            <img src="../icons/search.png" alt="" />



                        </div>

                    </div>

                </nav>
                <div className="searchbar">
                    <div className="input">
                        <div id="searchcross">
                            <img src="../icons/cross.png" alt="" />

                        </div>
                        <form action={"/search/keyword"} method="get">
                            <input type="text" placeholder="Enter keyword" spellCheck="false" name="keyword" />
                            <button type="submit"> Search </button>


                        </form>


                    </div>

                </div>

                <ul className="navlinks">

                    <div className="heading-text">
                        <a href={"/"} styles={{ color: "black", textDecoration: "none", marginLeft: 0.5 + 'em' }}>RavenScribe</a>


                        <img id="hamcross" src="../icons/cross.png" alt="" style={{ marginTop: 2.9 + 'px' }} />
                    </div>

                    <a href={"/"}>
                        <li>Home <div className="arrow"><img src="../icons/arrow.png" alt="" style={{ height: 16 + 'px' }} /></div>
                        </li>
                    </a>

                    <a href={"/search/2"}>
                        <li>Foods<div className="arrow"><img src="../icons/arrow.png" alt="" style={{ height: 16 + 'px' }} /></div>
                        </li>
                    </a>
                    <hr />
                    <a href={"/search/1"}>
                        <li>Lifestyle<div className="arrow"><img src="../icons/arrow.png" alt="" style={{ height: 16 + 'px' }} /></div>
                        </li>
                    </a>
                    <hr />
                    <a href={"/search/3"}>
                        <li>Guide<div className="arrow"><img src="../icons/arrow.png" alt="" style={{ height: 16 + 'px' }} /></div>
                        </li>
                    </a>
                    <hr />
                    <a href={"/search/4"}>
                        <li>Facts<div className="arrow"><img src="../icons/arrow.png" alt="" style={{ height: 16 + 'px' }} /></div>
                        </li>
                    </a>
                    <hr />
                    <a href={"/search/5"}>
                        <li>Fitness<div className="arrow"><img src="../icons/arrow.png" alt="" style={{ height: 16 + 'px' }} /></div>
                        </li>
                    </a>
                    <hr />
                    <a href={"/about"}>
                        <li>About<div className="arrow"><img src="../icons/arrow.png" alt="" style={{ height: 16 + 'px' }} /></div>
                        </li>
                    </a>
                    <hr />

                    <div className="social">
                        <div className="title" style={{ textAlign: "center", marginTop: 2 + 'em' }}>
                            Follow
                        </div>
                        <div className="logos">
                            <img src={"../icons/facebook.png"} alt="" />
                            <img src={"../icons/instagram.png"} alt="" />
                            <img src={"../icons/gmail.png"} alt="" />

                        </div>

                    </div>



                </ul>

            </>



        )
    }
}

export default Navigation
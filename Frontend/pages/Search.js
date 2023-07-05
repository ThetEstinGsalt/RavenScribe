import React, { Component } from 'react';
import Navigation from '../public/components/Navigation';

import $ from 'jquery'

class Search extends Component {
    componentDidMount(){
        $('.blog-thumbnail').on('mouseover', function () {
            $(this).children('.blog-thumbnail .view').css({ 'visibility': 'visible', 'transform': 'translateY(0px)', 'opacity': '1'
            })
            
            }).on('mouseleave', function () {
            $('.blog-thumbnail .view').css({ 'transform': 'translateY(50px)', 'opacity': '0', 'visibility': 'hidden' })
            })
            
    }
    render() {
        return (
            <>

            <Navigation/>
            <div>
                <div class="title-searchs">
    <h1 style={{"fontWeight":"100"}}>Blogs on "CheeseBurgers" </h1>

</div>

<div class="blogs">

    <div class="blog">
        <a href="/blog/{{blogs.auto_increment_id}}">
            <div class="blog-thumbnail" style={{"background": "url('https://images.unsplash.com/photo-1688261433834-8ae224ef3416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')no-repeat center center/cover;"}}>
                <div class="view">
                    View Post &rarr;

                </div>
            </div>
            <div class="blog-title" >
                This is a random blog written on RavenScribe For text purpose

            </div>
            <div class="blog-concept">
                This is some of the texts ofasdlf ke to use, then tap Add phone number. You'll be sent a text message (SMS) to the new phone number with a 6-digit security code. 


            </div>
        </a>

    </div>

    <div class="blog">
        <a href="/blog/{{blogs.auto_increment_id}}">
            <div class="blog-thumbnail" style={{"background": "url('https://images.unsplash.com/photo-1688261433834-8ae224ef3416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')no-repeat center center/cover;"}}>
                <div class="view">
                    View Post &rarr;

                </div>
            </div>
            <div class="blog-title" >
                This is a random blog written on RavenScribe For text purpose

            </div>
            <div class="blog-concept">
                This is some of the texts ofasdlf ke to use, then tap Add phone number. You'll be sent a text message (SMS) to the new phone number with a 6-digit security code. 


            </div>
        </a>

    </div>




</div>
<div class="space">
    advertisement

</div>
<div class="blogs">
<div class="blog">
        <a href="/blog/{{blogs.auto_increment_id}}">
            <div class="blog-thumbnail" style={{"background": "url('https://images.unsplash.com/photo-1688261433834-8ae224ef3416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')no-repeat center center/cover;"}}>
                <div class="view">
                    View Post &rarr;

                </div>
            </div>
            <div class="blog-title" >
                This is a random blog written on RavenScribe For text purpose

            </div>
            <div class="blog-concept">
                This is some of the texts ofasdlf ke to use, then tap Add phone number. You'll be sent a text message (SMS) to the new phone number with a 6-digit security code. 


            </div>
        </a>

    </div>

    <div class="blog">
        <a href="/blog/{{blogs.auto_increment_id}}">
            <div class="blog-thumbnail" style={{"background": "url('https://images.unsplash.com/photo-1688261433834-8ae224ef3416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')no-repeat center center/cover;"}}>
                <div class="view">
                    View Post &rarr;

                </div>
            </div>
            <div class="blog-title" >
                This is a random blog written on RavenScribe For text purpose

            </div>
            <div class="blog-concept">
                This is some of the texts ofasdlf ke to use, then tap Add phone number. You'll be sent a text message (SMS) to the new phone number with a 6-digit security code. 


            </div>
        </a>

    </div>



</div>
{/* </div> */}



<div class="space">
    advertisement

</div>
<div class="loadmore" id="loadmore" name="loadmore">
    <button>Load more</button>
</div>
            </div>
            </>
        );
    }
}

export default Search;

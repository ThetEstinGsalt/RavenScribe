
import Controlbar from '../../public/components/Controlbar';



import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';





axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


// import Slugify from 'slugify'
class Writing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            thumbnail: null,
            Permissions: false,
            code: null,
            Blog: null,
            sno:null,

        }


        // this.preinfo = () => {
        //     let title = document.getElementById("Blog-title").value
        //     let thumbnail = document.getElementById("Blog-thumbnail").value
        //     let preinfovar = document.getElementsByClassName("preinfo")[0]
        //     this.setState({ title: title, thumbnail: thumbnail })
        //     preinfovar.style.display = 'none'



        // }



        this.handleSubmit = async function (event) {

            event.preventDefault()
            this.props.CheckUser()
            let title = document.getElementsByName("heading")[0].innerText
            let thumbnail = document.getElementById("thumbnail").src
            let concept = document.getElementsByClassName("concept")[0].innerText
            let article = document.getElementsByName("article")[0]
            let filt_article = document.getElementsByName("article")[0].innerHTML
            console.log(this.props.JWT)



                    console.log(article.childNodes)
                    for (let i = 0; i < article.childNodes.length; i++) {
                        article.childNodes[i].setAttribute('contenteditable', 'false');
                        // if(article.childNodes[i].className!=='subHeading')
                        // article.childNodes[i].style.background = "white"


                    }
                    // let filt_article = document.getElementsByName("article")[0]


                    return await axios.post(`http://127.0.0.1:8000/api/Edit/${this.state.sno}`, {
                        // user_pass: localStorage.getItem("_zy97#zw&w*2sr0jogfm=kp!p4$rj2@$f%tsunc7p0u5$zhzal"),
                        // user_name: localStorage.getItem("name"),

                        url: title.toString().toLowerCase()
                            .replace(/\s+/g, '-')           // Replace spaces with -
                            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                            .replace(/^-+/, '')             // Trim - from start of text
                            .replace(/-+$/, ''),

                        Title: title,
                        Thumbnail: thumbnail,
                        Concept: concept,
                        Content: filt_article,
                        Rating: 0,
                        Berries: 0,
                        views: 0,
                        // timestemp: '2013-06-26 00:14:26.260524',
                        category: "something",
                        keywords: "something",
                        restriction: false,

                        user:this.props.decode(localStorage.getItem("JWT")).jwt,

                    }
                    ).then(res => console.log(this.props.decode(localStorage.getItem("JWT")))).catch(error => console.log(error.response.data))

                // case 'put':
                //     for (let i = 0; i < article.childNodes.length; i++) {
                //         article.childNodes[i].setAttribute('contenteditable', 'false');
                //         // if(article.childNodes[i].className!=='subHeading')
                //         // article.childNodes[i].style.background = "white"


                //     }
                //     console.log(title)
                //     return await axios.put(`http://127.0.0.1:8000/api/${this.state.Blog.sno}/update/`, {
                //         url: title.toString().toLowerCase()
                //             .replace(/\s+/g, '-')           // Replace spaces with -
                //             .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                //             .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                //             .replace(/^-+/, '')             // Trim - from start of text
                //             .replace(/-+$/, ''),

                //         Title: title,
                //         Thumbnail: thumbnail,
                //         Concept: concept,
                //         Content: filt_article,
                //         Rating: 0,
                //         Berries: 0,
                //         views: 0,
                //         // timestemp: '2013-06-26 00:14:26.260524',
                //         restriction: false,
                //         category: "something",
                //         keywords: "something",
                //         user: this.state.Blog.user




                //     }

                //     ).then(res => console.log(res)).catch(err => console.log(err))
                // let filt_article = document.getElementsByName("article")[0].innerHTML






                // ).then(res => this.window.location = "/").catch(err => console.log(err))


        }
    }


    // componentDidMount = () => {

    //     axios.get('https://api.unsplash.com/search/photos?page=1&query=apple&client_id=xHU5EEvdCdtZQZgPY0pEbjrswG0TTcVaL6KcqKDarkQ').then((response) => {
    //         // console.log()
    //         document.querySelector("div").innerHTML += `<img src="${response.data.results[0].links.download}"><img/>`
    //     })

    // }

    componentDidMount = () => {
        if(localStorage.getItem("JWT")!==null || localStorage.getItem("JWT")!==undefined){
            let query = ((window.location.href.split("/")))
            let sno=query[query.length-1]

            axios.get(`http://127.0.0.1:8000/api/SEO_FRIENDSLY_SLUG/${sno}`).then(res=>{
       
                this.setState({code:this.props.decode(   localStorage.getItem("JWT"))},()=>{
                    console.log(this.state.code)
                    if(this.state.code.jwt==res.data.user){
                        console.log(res.data.Content)
                        this.setState({Permissions:true,Blog: res.data, sno:res.data.sno},()=>{
                            document.getElementsByClassName("article")[0].innerHTML = this.state.Blog.Content
                            console.log(this.state.Blog.Content)
                            document.getElementById("concept").innerText = this.state.Blog.Concept
                            document.getElementById("thumbnail").src = this.state.Blog.Thumbnail
                            document.getElementsByClassName("blog-heading")[0].innerText = this.state.Blog.Title

                            let article = document.getElementsByClassName("article")[0]

                            for (let i = 0; i < article.childNodes.length; i++) {
                                article.childNodes[i].setAttribute('contenteditable', 'true');



                            }
                           

                        })

                    }
                    else{

                        this.setState({Permissions:false})

                    }
                })
                
            })



        }
        // if (this.props.requestType == "put") {
        //     let queryp = ((window.location.href.split("/"))[window.location.href.split("/").length - 2])
        //     let code = ((window.location.href.split("/"))[window.location.href.split("/").length - 1])
        //     let name = queryp.replace(/^./, queryp[0].toUpperCase());


        //     axios.post("http://127.0.0.1:8000/rest-auth/login/", {
        //         username: name,
        //         password: localStorage.getItem("_zy97#zw&w*2sr0jogfm=kp!p4$rj2@$f%tsunc7p0u5$zhzal"),

        //     }).then(res => {

        //         axios.get(`http://127.0.0.1:8000/api/${code}`).then(res => {

        //             this.setState({ Blog: res.data, code: res.data.user, Permissions: true }, () => {
        //                 axios.get(`http://127.0.0.1:8000/api/account/${name}`).then(ress => {
        //                     this.setState({ Permissions: ress.data.sno === this.state.code })
        //                     if (this.state.Permissions) {

        //                         document.getElementsByClassName("article")[0].innerHTML = this.state.Blog.Content
        //                         document.getElementById("concept").innerText = this.state.Blog.Concept
        //                         document.getElementById("thumbnail").src = this.state.Blog.Thumbnail
        //                         document.getElementsByClassName("blog-heading")[0].innerText = this.state.Blog.Title

        //                         let article = document.getElementsByClassName("article")[0]

        //                         for (let i = 0; i < article.childNodes.length; i++) {
        //                             article.childNodes[i].setAttribute('contenteditable', 'true');



        //                         }




        //                     }

        //                 })
        //             })






        //         })


        //     }




        //     )

        // }




    }


    render() {


        return (
            <>
               
                        {/* <div className="preinfo" >
                            <input type="text" id="Blog-title" />
                            <input type="text" id="Blog-thumbnail" />
                            <button onClick={this.preinfo}>Click me</button>

                        </div> */}



                        <form action="" onSubmit={(event) => this.handleSubmit(event,"post")} method="post" htmltype="post"><button id="blog_submit" type="submit">Submit</button></form>




                        <div className="site-content">
                            <div class="blog-heading" name="heading">{this.state.title} </div>
                            <img src={this.state.thumbnail} alt="" id="thumbnail" />


                            <div className="concept" id="concept" name="Blog_concept">

                            </div>
                            <div class="article" name="article">





                            </div>




                        </div>
                        <section style={{ height: 59 + 'vh' }}></section>
                        <Controlbar/>





{/* 
                {this.props.requestType == "put" &&

                    <>

                        <form action="" onSubmit={(event) => this.handleSubmit(event, this.props.requestType)} method="post" htmltype="post"><button id="blog_submit" type="submit">Submit</button></form>




                        <div className="site-content">
                            <div class="blog-heading" name="heading"> </div>
                            <img alt="" id="thumbnail" />


                            <div className="concept" id="concept" name="Blog_concept">

                            </div>
                            <div class="article" name="article">






                            </div>




                        </div>
                        <section style={{ height: 59 + 'vh' }}></section>


                    </>



                }
 */}

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        JWT: state.jwt,
    

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decode: (JWT) => dispatch(actions.authJWT(JWT)),
        CheckUser: () => dispatch(actions.authCheckState()),

    }
}

// export default Writing
export default (connect(mapStateToProps,mapDispatchToProps)(Writing))

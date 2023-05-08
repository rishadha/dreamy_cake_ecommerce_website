import React from "react";

import Link from "next/link";

const BlogGridBig = ({ show }) => {
    var data = [
        {
            id: 1,
            title: "The Certificate course",
            category: "Course",
            date: "25 April 2021",
            img: "banner-5-.jpg",
            desc: "The Basic Cake Decorating certificate course is a two-month program designed to teach students the fundamental skills of cake decoration.",
        },
        {
            id: 2,
            title: "Diploma Course",
            img: "banner-6-.jpg",
            category: "Course",
            date: "25 April 2021",
            desc: "The Cake Decorating diploma course is a six-month program designed to teach students skills of cake decoration.",
        },
        {
            id: 3,
            title: "Advance Diploma Course",
            img: "banner-7-.jpg",
            category: "Course",
            date: "25 April 2021",
            desc: "The Advance Cake Decorating certificate course is a twelve - month program designed to teach students the fundamental and advance skills of cake decoration.",
        },
        
    ];

    return (
        <>

            {data.slice(0, show).map((item, i) => (
                <article className="first-post mb-30 hover-up animated" key={i}>
                <div className="position-relative overflow-hidden">
                    <div className="post-thumb border-radius-15">
                        <Link href="/blog-post-right"><a>
                            <img className="border-radius-15" src={`/assets/imgs/blog/${item.img}`} alt="" />
                        </a></Link>
                    </div>
                </div>
                <div className="entry-content">
                    <h2 className="post-title mb-20">
                        <Link href="/blog-post-right"><a>{item.title} </a></Link>
                    </h2>
                    <p className="post-exerpt font-medium text-muted mb-30">{item.desc}</p>
                    <div className="mb-20 entry-meta meta-2">
                        {/* <div className="entry-meta meta-1 mb-30"> */}
                            {/* <div className="font-sm">
                                <span><span className="mr-10 text-muted"><i className="fi-rs-eye"></i></span>23k</span>
                                <span className="ml-30"
                                    ><span className="mr-10 text-muted"><i className="fi-rs-comment-alt"></i></span>17k</span>
                                <span className="ml-30"
                                    ><span className="mr-10 text-muted"><i className="fi-rs-share"></i></span>18k</span>
                            </div> */}
                        {/* </div> */}
                        <Link href="/blog-post-right"><a className="btn btn-sm">Read more<i className="fi-rs-arrow-right ml-10"></i></a></Link>
                    </div>
                </div>
                
            </article>
            ))}
        </>
        
    );
};

export default BlogGridBig;

import React from 'react'

export default function Footer() {
    let footerStyle = {
        position:"relative",
        top:"80vh",
        width:"100%"
    }
    return (
        <footer className="bg-dark text-center text-light py-5" style={footerStyle}>
            <input className="form-control w-25 m-auto" type="text" placeholder="Your Email"/>
            <button className="btn btn-primary w-25 mx-auto my-2">Subscribe</button>
            <p>Copyright&copy;ToDos.com</p>
        </footer>
    )
}

import React from "react"
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
            <h1>Hi 👋  ,</h1>
                        <h1> I'm  <span style={{marginLeft:20}}>Ashitosh</span> </h1>
                        <h3>
                        {
                            <Typewriter

                                options={{
                                    strings: [`A Full Stack Developer 💻`],
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: 'Typewriter__cursor',
                                    cursor: ''
                                }}

                            />
                        }
                        </h3>
                        <a href="#" className="btn-main-offer">CONTACT ME</a>
                

            </div>
        </div>
    )
}

export default Header

import React, {useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Circle from './rounde-circle.js'
//images
import flag from "../images/1.png";
import pencil from "../images/2.png";
import rocket from "../images/3.png";
import setting from "../images/4.png";
import avatar from "../images/avatar.png"

const Header = props => {
    return (
        <div className="header">
            <h1 className="text-center">Hi there!Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing </h1>
            <div className="col-sm-3 mt-5 mx-auto">
                <Link to="/" className="my-btn">work with us!</Link>
            </div>
        </div>
    );
}

const Services = props => {
    return (
        <div className="services text-center ">
            <div className="col-7 mx-auto">
                <h1 className="text-uppercase text-center">services we provided</h1>
            </div>
            <div className="col-1 mx-auto">
                <hr />
            </div>
            <div className="col-7 mx-auto mb-5">
                <p>Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className="row container mx-auto">
                <Item hasSocial={false} class="col-sm-3" image={flag} title="title" par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
                <Item hasSocial={false} class="col-sm-3" image={pencil} title="title" par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
                <Item hasSocial={false} class="col-sm-3" image={setting} title="title" par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
                <Item hasSocial={false} class="col-sm-3" image={rocket} title="title" par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
            </div>
        </div>
        
    );
}

const Team = props => {
   
    return (
        <div className="jumbotron text-center text-grayish">
            <div className="col-7 mx-auto">
                <h1 className="text-center text-uppercase">meet our beautifull team</h1>
            </div>
            <div className="col-1 mx-auto">
                <hr />
            </div>
            <div className="col-7 mx-auto mb-5">
                <p className="text-center"> Lorem ipsum is placeholder text commonly usedvisual mockups.</p>
            </div>

            <div className="row container mx-auto">
                <Item hasSocial={true} social={['twitter', 'envelope']} class="col-sm-3" image={avatar} title="title" circle={true} par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
                <Item hasSocial={true} social={['twitter', 'facebook']} class="col-sm-3" image={avatar} title="title" circle={true} par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
                <Item hasSocial={true} social={['twitter','facebook','envelope']} class="col-sm-3" image={avatar} title="title" circle={true} par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
                <Item hasSocial={true} social={['twitter','envelope','facebook','linkedin']} class="col-sm-3" image={avatar} title="title" circle={true} par="Lorem ipsum is placeholder text commonly used, and publishing industries for previewing layouts and visual mockups." />
            </div>

        </div>
    );
}

const Skills = props => {
    return (
        <div className="text-center text-grayish p-5">
            <div className="col-7 mx-auto">
                <h1 className="text-center text-grayish text-uppercase">We got Skills!</h1>
            </div>
            <div className="col-1 mx-auto">
                <hr />
            </div>
            <div className="col-7 mx-auto mb-5">
                <p className="text-center"> Lorem ipsum is placeholder text commonly usedvisual mockups.</p>
            </div>

            <div className="row container mx-auto">
                <div className="col-sm-3">
                    <div className="col-12">
                        <Circle percent='90' borderColor='progress-color-1' />
                        <h3 className="mt-3">web design</h3>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="col-12">
                        <Circle percent='90' borderColor='progress-color-2' />
                        <h3 className="mt-3">html/css</h3>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="col-12">
                        <Circle percent='70' borderColor='progress-color-3' />
                        <h3 className="mt-3">graphic design</h3>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="col-12">
                        <Circle percent='90' borderColor='progress-color-4' />
                        <h3 className="mt-3">web design</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}
const Portfolio = props => {
    //define state
    const [current, setCurrent] = useState('all');
    //define handle meth
    const handleChange = newValue => setCurrent(newValue);
    return (
        <div className="text-center bg-yellow p-5 portfolio">
            <div className="col-6 mx-auto">
                <h1 className="text-center text-uppercase">our portfolio!</h1>
            </div>

            <div className="col-1 mx-auto">
                <hr />
            </div>

            <div className="col-6 mx-auto mb-5">
                <p className="text-center"> this is our portfolio and it is awesomeLorem ipsum is placeholder text commonly usedvisual mockups.</p>
            </div>
            
            <div className="container"> 
                <div className="col-4 mx-auto mb-5">
                    <ul className="nav">
                        <li className="nav-item"><NavLink  name="all" onClick={e => handleChange(e.target.name)} className={`nav-link text-uppercase ${current==="all"?"portfolio-active-link":""}`}>all</NavLink></li>
                        <li className="nav-item"><NavLink  name="web" onClick={e => handleChange(e.target.name)} className={`nav-link text-uppercase ${current==="web"?"portfolio-active-link":""}`}>web</NavLink></li>
                        <li className="nav-item"><NavLink  name="apps" onClick={e => handleChange(e.target.name)} className={`nav-link text-uppercase ${current==="apps"?"portfolio-active-link":""}`}>apps</NavLink></li>
                        <li className="nav-item"><NavLink  name="icons" onClick={e => handleChange(e.target.name)} className={`nav-link text-uppercase ${current==="icons"?"portfolio-active-link":""}`}>icon</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="contaienr">
            <div className="col-5 mx-auto">
                    <div className="row">
                        <div className="col-sm-5">
                        <div className="col-12">
                            <Laptop content={current}/>
                        </div>
                            <p className="text-center mt-3">some dummy text</p>
                        </div>

                        <div className="col-sm-5 ml-5">
                        <div className="col-12">
                            <Laptop content={current}/>
                        </div>
                            <p className="text-center mt-3">some dummy text</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="contaienr mt-5" >
            <div className="col-5 mx-auto">
                    <div className="row" >
                        <div className="col-sm-5">
                            <div className="col-12">
                                <Laptop content={current}/>
                            </div>
                            <p className="text-center mt-3">some dummy text</p>
                        </div>

                        <div className="col-sm-5 ml-5">
                        <div className="col-12">
                            <Laptop content={current}/>
                        </div>
                            <p className="text-center mt-3">some dummy text</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="col-sm-5 mx-auto">
                    <button className="btn btn-lg bg-green" onClick={event => event.preventDefault()}>load more </button>
                </div>

            </div>
        </div>
    );
}

const Item = props => {
    return (
        <div className={props.class}>
            <div className="col-7 mx-auto mb-5">
              <img src={props.image} height="100" className={`${props.circle && 'rounded-circle ' }`}/>  
            </div>
            <h2 className="mb-3">{props.title}</h2>
            <p>{props.par}</p>
            <div className={`row container mx-auto`}>
               <Social isSocial={props.hasSocial} social={props.social} />
            </div>
        </div>
    );
}
const Social = ({social, isSocial}) => {
        if(isSocial) {
            return ( social.map((item, index) => (<span key={index} className={`col-2 ml-2 social-media fa fa-${item}`}></span> )));
        }
        return <div></div>
}
const Laptop = ({ content }) => {
    return (
        <div className="laptop">
            <div className="content">
                <p>{content}</p>
            </div>
        </div>
        
    );
} 
export { Header, Services, Team, Skills, Portfolio };

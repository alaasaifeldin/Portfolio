import Link from "next/link";
import {FaGithub,FaLinkedin,FaFacebook,FaWhatsapp} from "react-icons/fa"

const Social=[
  {icon:<FaFacebook/>,path:"https://www.facebook.com/mhaomod.gado/"},
  {icon:<FaWhatsapp/>,path:"https://wa.me/201069220635"},
  {icon:<FaLinkedin/>,path:"www.linkedin.com/in/mahmoud-gado-b53028244"},
  {icon:<FaGithub/>,path:"https://github.com/MahmoudGado1"},
]
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        Social.map((item,index)=>{
          return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })
      }
    </div>
  );
}

export default Socials;

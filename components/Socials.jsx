import Link from "next/link";
import {FaGithub,FaLinkedin,FaFacebook,FaWhatsapp} from "react-icons/fa"

const Social=[
  {icon:<FaFacebook/>,path:"https://www.facebook.com/share/17DQigey2J/"},
  {icon:<FaWhatsapp/>,path:"https://wa.me/201125098250"},
  {icon:<FaLinkedin/>,path:"https://www.linkedin.com/in/alaa-sherif-saifeldin-316310224/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {icon:<FaGithub/>,path:"https://github.com/alaasaifeldin"},
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

import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FaPython,FaHtml5, FaCss3Alt, FaJava, FaBootstrap, FaSwift, FaFigma, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiDart, SiDjango, SiTailwindcss, SiXcode, SiMysql, SiAndroidstudio, SiMarvelapp, SiVite, SiMetasploit, SiKalilinux, SiBurpsuite, SiHeroku  } from "react-icons/si";
import { RiNextjsFill, RiFlutterFill } from "react-icons/ri";
import { GrVmware } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { SiPostgresql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import './Skills.css'

const Skills = () => {
  return (
    <div id="skill-ctr" className="pt-3 pb-5">
        <div className="container-sm mb-3">
            <h3 className="fw-bold text-center mt-3 mb-0">Front-end Development</h3>
            <div className="skill-grid d-flex flex-wrap">
                <div className="skill-item text-center pb-3" title="JavaScript"><h3><IoLogoJavascript /></h3></div>
                <div className="skill-item text-center" title="HTML"><FaHtml5 className="skill-icon"/></div>
                <div className="skill-item text-center" title="CSS"><FaCss3Alt className="skill-icon"/></div>
                <div className="skill-item text-center" title="React"><FaReact className="skill-icon"/></div>
                <div className="skill-item text-center" title="Next.js"><RiNextjsFill className="skill-icon" /></div>
                <div className="skill-item text-center" title="Bootstrap"><FaBootstrap className="skill-icon"/></div>
                <div className="skill-item text-center" title="Tailwind CSS"><SiTailwindcss className="skill-icon"/></div>
                <div className="skill-item text-center" title="Typescript"><BiLogoTypescript  className="skill-icon"/></div>
                <div className="skill-item text-center" title="Vite"><SiVite className="skill-icon"/></div>
                <div className="skill-item text-center" title="Vercel"><IoLogoVercel className="skill-icon" /></div>
            </div>
        </div>
        <div className="container-sm mb-3">
            <h3 className="fw-bold text-center mt-3 mb-0">Back-end Development</h3>
            <div className="skill-grid d-flex flex-wrap">
                <div className="skill-item text-center" title="Python"><FaPython className="skill-icon"/></div>
                <div className="skill-item text-center" title="Django"><SiDjango className="skill-icon"/></div>
                <div className="skill-item text-center" title="MySQL"><SiMysql className="skill-icon"/></div>
                <div className="skill-item text-center" title="Node.js"><FaNodeJs className="skill-icon"/></div>
                <div className="skill-item text-center" title="PostgreSQL"><SiPostgresql className="skill-icon"/></div>
                <div className="skill-item text-center" title="Heroku"><SiHeroku className="skill-icon" /></div>
            </div>
        </div>
        <div className="container-sm mb-3">
            <h3 className="fw-bold text-center mt-3 mb-0">Tools</h3>
            <div className="skill-grid d-flex flex-wrap">
                <div className="skill-item text-center" title="Git Version Control"><FaGithub className="skill-icon"/></div>
                <div className="skill-item text-center" title="VS Code"><VscVscode className="skill-icon"/></div>
                <div className="skill-item text-center" title="Android Studio"><SiAndroidstudio className="skill-icon"/></div>
                <div className="skill-item text-center" title="Xcode"><SiXcode className="skill-icon"/></div>
                <div className="skill-item text-center" title="Figma"><FaFigma className="skill-icon"/></div>
                <div className="skill-item text-center" title="Marvel"><SiMarvelapp className="skill-icon"/></div>
                <div className="skill-item text-center" title="VMware Workstation"><GrVmware className="skill-icon"/></div>
            </div>
        </div>
        <div className="container-sm mb-3">
            <h3 className="fw-bold text-center mt-3 mb-0">Mobile App Development</h3>
            <div className="skill-grid d-flex flex-wrap">
                <div className="skill-item text-center" title="Flutter"><RiFlutterFill className="skill-icon"/></div>
                <div className="skill-item text-center" title="Java"><FaJava className="skill-icon"/></div>
                <div className="skill-item text-center" title="Dart"><SiDart className="skill-icon"/></div>
                <div className="skill-item text-center" title="Swift"><FaSwift className="skill-icon"/></div>
            </div>
        </div>
        <div className="container-sm">
            <h3 className="fw-bold text-center mt-3 mb-0">Cybersecurity</h3>
            <div className="skill-grid d-flex flex-wrap">
                <div className="skill-item text-center" title="Metasploit"><SiMetasploit className="skill-icon" /></div>
                <div className="skill-item text-center" title="Kali Linux"><SiKalilinux className="skill-icon" /></div>
                <div className="skill-item text-center" title="Burp Suite"><SiBurpsuite className="skill-icon" /></div>
            </div>
        </div>
    </div>
  )
}

export default Skills
import './styles/Welcome.css';
import { Link } from 'react-router-dom';
export const Welcome = () => {
    return (
        <>
            <div className="WTMP_DIV">
                <h1 className="WTMP_DIV_H1">Welcome To My Portfolio</h1>
            </div>
            <div className="P_DIV_LST">
                <p className="P_DIV_LST_P1">Hi, My Name Is </p>
                <p className="P_DIV_LST_P1">Atish Kumar Sahu</p>
                <p className="P_DIV_LST_P1">I Am A Full Stack Web Developer</p>
            </div>
            <div className="P_DIV_LST_1">
                <p className="P_DIV_LST_P2">
                    Welcome to my personal portfolio, where you'll get an in-depth look into my life, career, and aspirations. Here, I offer a comprehensive narrative about who I am, what drives me, and where I'm headed. You’ll learn about the work I do, the projects I've completed, and the exciting challenges I’m preparing to take on in the future. Beyond my professional journey, I’ll share insights into my passions, skills, and extracurricular activities, giving you a holistic view of my life both inside and outside the world of technology. From my technical expertise in full-stack development to my hobbies like gaming, traveling, and badminton, this space offers a window into what shapes me as a person. Whether you’re interested in learning more about my skills, my work ethic, or my future plans, I’m thrilled to share it all with you. I invite you to click the link below and join me on this exciting journey of discovery. Together, let's explore my path, passions, and pursuits.
                </p>
                <Link to="/about" className='LNK_DIV_LST_L'>Click Here!</Link>
            </div>
        </>
    );
}
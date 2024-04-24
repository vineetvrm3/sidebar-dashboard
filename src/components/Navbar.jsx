import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { format } from 'date-fns'


const Navbar = () => (
    <nav className="navbar">
        <div className="name-container">
            <p className="name">
                Good Afternoon, Akshay
            </p>
            <p className="plan-detail">
                You Are Subscribed to Retail Plan
            </p>
        </div>

        <div className="date-time-notification-container">
            <div className="date-time-container">
                <div className="logo">
                    <MdDateRange color="white"/>
                </div>
                <p className="date-time">
                    {`Today, ${format(new Date(),"dd MMMM yyyy")}`}
                </p>
            </div>

            <div className="date-time-container">
                <div className="logo">
                    <IoMdTime color="white"/>
                </div>
                <p className="date-time">
                    {format(new Date(),"hh:mm")}
                </p>
            </div>

            <div className="notification-logo">
                <IoMdNotificationsOutline color="white" size={20}/>
            </div>
        </div>
    </nav>
)

export default Navbar
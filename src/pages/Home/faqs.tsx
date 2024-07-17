import { Link } from "react-router-dom";
import Btn from "../../components/Button";
import TitleWithUnderline from "../../components/titleWithUnderline";

export default function FAQs() {
    return (
        <div className=" bg-cover bg-center py-40  bg-contain"
            style={{
                backgroundImage: `url("src/assets/img/Rectangle 580.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="flex flex-col items-center text-center">
                <TitleWithUnderline title="Some frequently asked questions asked" classe="items-center md:w-4/12  m-auto text-center text-white " />
                <Link to="/faqs">  <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Consult FAQs</Btn></Link>
            </div>
        </div>
    )
}
import Btn from "../../components/Button";
import TitleWithUnderline from "../../components/titleWithUnderline";

export default function FAQs() {
    return (
        <div className=" bg-cover bg-center py-40 bg-[url('src/assets/img/Rectangle 580.png')] " style={{ backgroundImage: `url(https:/encpted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZutnGq2nOq2bCccLG1PqB8HZ8Sk2rlZicSpAcZoc6iNaxsIA2)` }}>
            <div className="flex flex-col items-center text-center">
                <TitleWithUnderline title="Some frequently asked questions asked" classe="items-center md:w-4/12  m-auto text-center" />
                <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} classe="m-auto">Consult FAQs</Btn>
            </div>
        </div>
    )
}
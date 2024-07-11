import Btn from "../../components/Button";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Card from "../../components/card";

export default function Home() {
  return (
    <div>
      <section>
        <Header />
        <div className="bg-primary-100">
          <div className=" relative">
            <NavBar />
            <img src="src/assets/img/splash-164963_1920-removebg-preview 4.png" className="absolute  left-0" alt="" />
            <div className="w-10/12 m-auto space-y-10 py-40 ">
              <h1 className="text-[48px] text-primary-900 font-bold w-2/3">Redefining Water Conservation with HydroWallet</h1>
              <p className="w-2/3 ">HydroWallet isn't just a tool; it’s a transformative force in water management. Our innovative platform enables water suppliers to distribute water more efficiently and sustainably, ushering in a new era of responsible water use and stewardship.            </p>
              <Btn Size="large" Style="Filled" Color="primary" State="Default" icon={true} > Read more </Btn>
            </div>
            <img src="../src/assets/img/splash-164963_1920 2.png" className="absolute right-0 top-0" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div>

        </div>
        <div className="bg-white">
          <Card
            title="Titre1"
            btnAction="Read more"
            icon={true}
            imageUrl="../src/assets/img/Rectangle 584.png"
            sections={[
              {
                title: "Section 1",
                paragraphs: [
                  "Premier paragraphe de la section 1.",
                  "Deuxième paragraphe de la section 1.",
                ]
              },
              {
                title: "Section 2",
                paragraphs: [
                  "Premier paragraphe de la section 2.",
                  "Deuxième paragraphe de la section 2.",
                ]
              }
            ]}
          />
        </div>

      </section>
    </div>
  )

}
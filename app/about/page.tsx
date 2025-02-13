import Image from "next/image";

export default function About() {
  return (
    <div className="px-10 h-lvh flex flex-row ">
      <div className=" grid grid-cols-[50%,50%]">
        <div className="flex flex-col items-center px-10 gap-10">
          <h1 className="font-medium tracking-tight text-5xl text-slate-700 w-full">
            Dette er kunstKaja
          </h1>
          <p className="font-medium -tracking-tightest text-slate-700">
            Kaja Andrea Krøvel, kjent under kunstnernavnet "kunstkaja", er en
            norsk kunstner som har markert seg med sine unike og personlige
            verk. Hun er født og oppvokst i Ålesund, Møre og Romsdal, og hennes
            kunstneriske reise begynte tidlig i barndommen, hvor hun utviklet en
            lidenskap for visuell kunst. Gjennom årene har hun utviklet en
            distinkt stil som kombinerer tradisjonelle teknikker med moderne
            uttrykk. Krøvels kunstverk er preget av en dyp utforskning av
            menneskelige følelser og relasjoner. Hun henter inspirasjon fra både
            personlige erfaringer og universelle temaer, noe som gir arbeidene
            hennes en tidløs og gjenkjennelig kvalitet.
            <br />
            <br />
            Hennes bruk av farger og teksturer skaper en dynamisk og
            engasjerende visuell opplevelse for betrakteren. I tillegg til sitt
            kunstneriske arbeid, er Krøvel også engasjert i ulike prosjekter som
            fremmer kunst og kultur i lokalsamfunnet. Hun har deltatt i flere
            utstillinger både nasjonalt og internasjonalt, og hennes verk har
            blitt anerkjent for sin originalitet og dybde. Gjennom sitt
            engasjement og sin dedikasjon fortsetter "kunstkaja" å inspirere og
            berøre mennesker med sin kunst.
          </p>
          <button className="bg-slate-800 w-fit py-3 px-10 text-white rounded-full font-semibold">
            Kontakt meg
          </button>
        </div>
        <div className="outline">
          <Image width={250} height={250}></Image>
        </div>
      </div>
    </div>
  );
}

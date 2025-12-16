import "./App.css";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <main>
      <ServiceCard
        topTitle="Search engine"
        bottomTitle="Optinization"
        image="1"
        titleBg="green"
        cardBg="grey"
      />
      <ServiceCard
        topTitle="Pay-per-click"
        bottomTitle="Advertising"
        image="2"
        titleBg="white"
        cardBg="green"
      />
      <ServiceCard
        topTitle="Social Media"
        bottomTitle="Marketing"
        image="3"
        titleBg="white"
        cardBg="black"
      />
      <ServiceCard
        topTitle="Email"
        bottomTitle="Marketing"
        image="4"
        titleBg="green"
        cardBg="grey"
      />
      <ServiceCard
        topTitle="Content"
        bottomTitle="Creation"
        image="5"
        titleBg="white"
        cardBg="green"
      />
      <ServiceCard
        topTitle="Analytics and"
        bottomTitle="Tracking"
        image="6"
        titleBg="green"
        cardBg="black"
      />
    </main>
  );
}

export default App;

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/*

1. View === Komponen (Fungsi yang me-return sebuah tag html)
2. Nama komponen harus PasalCase
3. Boleh menulis kode JS dimanapun kecuali di dalam value return
4. Pengecualian: Bisa menulis JS di dalam value return asal:
    a. ditaruh di dalam slot expression => {}
    b. hanya boleh berbentuk express
*/

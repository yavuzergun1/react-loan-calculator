import "./App.css";

function App() {
  const kkdf = 342;
  const bsmv = 228;
  const faizOranı = 0.0228;
  const kkdfOranı = kkdf / 100000;
  const bsmvOranı = bsmv / 100000;
  const toplamfaizOranı = faizOranı + kkdfOranı + bsmvOranı;
  const taksitSayisi = 12;
  const krediTutari = 100000;
  const taksitTutari =
    krediTutari *
    ((toplamfaizOranı * (1 + toplamfaizOranı) ** taksitSayisi) /
      ((1 + toplamfaizOranı) ** taksitSayisi - 1));
  const faiz = krediTutari * ((faizOranı / 12) * 12);
  const anaPara = taksitTutari - faiz - kkdf - bsmv;
  const kalanAnaPara = krediTutari - anaPara;

  return (
    <div className="App">
      <div>aylık ödeme : {taksitTutari.toFixed(2)} </div>
      <div>faiz {faiz.toFixed(2)}</div>
      <div>anapara {anaPara.toFixed(2)}</div>
      <div>kalanAnaPara {kalanAnaPara.toFixed(2)}</div>
    </div>
  );
}

export default App;

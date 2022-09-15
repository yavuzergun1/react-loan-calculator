import React from 'react'

function AylikFaizHEsabi() {
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
     const haftalikFaiz = krediTutari * faizOranı * (7 / 30);
     const aylikFaiz = krediTutari * faizOranı * (30 / 30);
     const yillikFaiz = krediTutari * faizOranı * (365 / 30);
     const anaPara = taksitTutari - aylikFaiz - kkdf - bsmv;
     const kalanAnaPara = krediTutari - anaPara;
  return (
    <div>
      <div>aylık ödeme : {taksitTutari.toFixed(2)} </div>
      <div>faiz {aylikFaiz.toFixed(2)}</div>
      <div>anapara {anaPara.toFixed(2)}</div>
      <div>kalanAnaPara {kalanAnaPara.toFixed(2)}</div>
    </div>
  );
}

export default AylikFaizHEsabi
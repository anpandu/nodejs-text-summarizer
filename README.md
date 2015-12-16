# nodejs-text-summarizer

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]


## Installation

Install with npm:

```sh
npm install --save nodejs-text-summarizer
```


## How To Use

### Default
```javascript
var summarizer = require('nodejs-text-summarizer')

var text = 'Bandung, West Java. The Corruption Eradication Commission, better known as KPK, on Thursday launched the 2015 Anti-Corruption Festival, or Festa, in conjunction with the Bandung city government, to celebrate International Anti-Corruption Day. The festival will run until Friday. KPK acting chief Taufiqqurahman Ruki, National Police Chief Gen. Badrodin Haiti, House of Regional Representatives (DPD) Speaker Irman Gusman and Attorney General H.M. Prasetyo were to be joined by Political, Legal and Security Affairs Minister Luhut Panjaitan, Justice and Human Rights Minister Yasonna Laoly, Health Minister Nina Moeloek and Industry Minister Saleh Husin at the event. The KPK\'s Ruki opened the event on Thursday with a speech calling on the House to reconsider intentions to revise the KPK law, or "face the anti-corruption community." He pointed to three key aspects to the fight against corruption — human, cultural and systematic — and said that systematic aspect were the most important, as they reflects policies and laws. “We do not name someone as a suspect because we hold a grudge against that particular person or because we are driven by political motives," he said. "We do so in the name of the law." “Graft is a crime against humanity as it is proven to bring injustice and poverty and we have to eradicate it," Luhut said. "The country\'s leaders, whether at the central or regional government level, have to be good role models in fighting graft. I would like everyone to work together for a graft-free Indonesia." Bandung was selected to host the event as the city has the highest level of public engagement, infrastructure capability and corruption prevention, compared to other cities, KPK deputy chief Adnan Pandu Praja said. The KPK hopes Festa will encourage more Indonesians to join the fight against corruption by beginning in their own neighborhood. The festival will feature theater performances, live music and other events.'

var result = summarizer(text)
// The Corruption Eradication Commission, better known as KPK, on Thursday launched the 2015 Anti-Corruption Festival, or Festa, in conjunction with the Bandung city government, to celebrate International Anti-Corruption Day.

```

### With Options
```javascript
var summarizer = require('nodejs-text-summarizer')

var text2 = 'JAKARTA, KOMPAS.com - Kepala Suku Dinas Pendidikan (Kasudin) Wilayah II, Jakarta Selatan, Ferry Safrudin memastikan Sekolah Menengah Atas Negeri (SMAN) 8 di Bukit Duri, Tebet, Jakarta Selatan tak akan diliburkan jika kebanjiran. \u00a0\"Enggak akan ada libur kok,\" ujar Ferry Safrudin di Jakarta, Kamis (26/11/2015). Bagi Ferry, aktivitas belajar mengajar harus berjalan normal meskipun sekolah kebanjiran. Adapun SMAN 8 Jakarta merupakan salah satu sekolah yang menjadi langganan banjir. Pada tahun 2004 lalu, SMAN 8 pernah digenangi air setinggi tiga meter. Ferry juga menyampaikan langkah yang mungkin dilakukan pihaknya jika SMAN 8 kebanjiran. Nantinya, murid-murid SMAN 8 akan dievakuasi ke salah satu SD di kawasan Jakarta Timur jika banjir terjadi. \"Kami sudah koordinasi dengan sekolah yang ada di Jalan Slamet Riyadi, wilayahnya itu masuk sudin (Jakarta) Timur,\" kata dia. Menurut dia, walaupun berada di wilayah Timur, lokasi itu dinilai tepat karena jaraknya yang tidak terlalu jauh dari SMAN 8. \"Kapasitasnya juga bisa untuk banyak siswa,\" sambung Ferry. Tempat evakuasi itu merupakan bangunan dua tingkat yang merupakan gabungan beberapa sekolah.'

var opt = {
  n:3,
  lang:'ID',
  raw:true
}
var result2 = summarizer(text2, opt)
/*
[{
  "text": "Mengenai solusi perlintasan sebidang, Jonan mengatakan pilihan solusinya ada dua apakah rel mau ditaruh di atas atau dibuat underpass.",
  "s_id": 7,
  "word_form_similarity": 2.4125194522253346,
  "word_semantic_similarity": 5.060707927887952,
  "word_order_similarity": 1.846148073303909,
  "total_score": 2.620701161899454
}, {
  "text": "Menhub menyebutkan saat ini terdapat paling tidak 200 perlintasan kereta api sebidang.",
  "s_id": 11,
  "word_form_similarity": 2.130482262835204,
  "word_semantic_similarity": 4.667390226324007,
  "word_order_similarity": 2.3624904097212283,
  "total_score": 2.407373873872687
}, {
  "text": "Presiden Joko Widodo (Jokowi) meminta Kemenhub dan Pemprov DKI Jakarta berkoordinasi mencegah kecelakaan di perlintasan kereta api seperti yang terjadi pada Minggu pagi (6/12) di daerah Angke Jakarta Barat.",
  "s_id": 1,
  "word_form_similarity": 2.1856561818361477,
  "word_semantic_similarity": 4.641290591891664,
  "word_order_similarity": 1.7724121082904407,
  "total_score": 2.3898952154871287
}]
*/
```

## Testing

From the repo root:

```sh
npm test
```

## License

MIT © [Ananta Pandu](pandu.ml)

[npm-image]: https://badge.fury.io/js/nodejs-text-summarizer.svg
[npm-url]: https://npmjs.org/package/nodejs-text-summarizer
[travis-image]: https://travis-ci.org/anpandu/nodejs-text-summarizer.svg?branch=master
[travis-url]: https://travis-ci.org/anpandu/nodejs-text-summarizer
[daviddm-image]: https://david-dm.org/anpandu/nodejs-text-summarizer.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/anpandu/nodejs-text-summarizer
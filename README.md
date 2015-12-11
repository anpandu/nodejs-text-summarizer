# nodejs-text-summarizer

[![Build Status](https://secure.travis-ci.org/user/topic.png?branch=master)](http://travis-ci.org/anpandu/nodejs-text-summarizer)


## Installation

Install with npm:

```
npm install --save nodejs-text-summarizer
```


## How To Use

###
```javascript

var sum_en = require('nodejs-text-summarizer').EN // english
var sum_id = require('nodejs-text-summarizer').ID // bahasa indonesia

var text = 'Bandung, West Java. The Corruption Eradication Commission, better known as KPK, on Thursday launched the 2015 Anti-Corruption Festival, or Festa, in conjunction with the Bandung city government, to celebrate International Anti-Corruption Day. The festival will run until Friday. KPK acting chief Taufiqqurahman Ruki, National Police Chief Gen. Badrodin Haiti, House of Regional Representatives (DPD) Speaker Irman Gusman and Attorney General H.M. Prasetyo were to be joined by Political, Legal and Security Affairs Minister Luhut Panjaitan, Justice and Human Rights Minister Yasonna Laoly, Health Minister Nina Moeloek and Industry Minister Saleh Husin at the event. The KPK\'s Ruki opened the event on Thursday with a speech calling on the House to reconsider intentions to revise the KPK law, or "face the anti-corruption community." He pointed to three key aspects to the fight against corruption — human, cultural and systematic — and said that systematic aspect were the most important, as they reflects policies and laws. “We do not name someone as a suspect because we hold a grudge against that particular person or because we are driven by political motives," he said. "We do so in the name of the law." “Graft is a crime against humanity as it is proven to bring injustice and poverty and we have to eradicate it," Luhut said. "The country\'s leaders, whether at the central or regional government level, have to be good role models in fighting graft. I would like everyone to work together for a graft-free Indonesia." Bandung was selected to host the event as the city has the highest level of public engagement, infrastructure capability and corruption prevention, compared to other cities, KPK deputy chief Adnan Pandu Praja said. The KPK hopes Festa will encourage more Indonesians to join the fight against corruption by beginning in their own neighborhood. The festival will feature theater performances, live music and other events.'

var result = sum_en(text)
// Kepala Suku Dinas Pendidikan (Kasudin) Wilayah II, Jakarta Selatan, Ferry Safrudin memastikan Sekolah Menengah Atas Negeri (SMAN) 8 di Bukit Duri, Tebet, Jakarta Selatan tak akan diliburkan jika kebanjiran.

var text2 = 'JAKARTA, KOMPAS.com - Kepala Suku Dinas Pendidikan (Kasudin) Wilayah II, Jakarta Selatan, Ferry Safrudin memastikan Sekolah Menengah Atas Negeri (SMAN) 8 di Bukit Duri, Tebet, Jakarta Selatan tak akan diliburkan jika kebanjiran. \u00a0\"Enggak akan ada libur kok,\" ujar Ferry Safrudin di Jakarta, Kamis (26/11/2015). Bagi Ferry, aktivitas belajar mengajar harus berjalan normal meskipun sekolah kebanjiran. Adapun SMAN 8 Jakarta merupakan salah satu sekolah yang menjadi langganan banjir. Pada tahun 2004 lalu, SMAN 8 pernah digenangi air setinggi tiga meter. Ferry juga menyampaikan langkah yang mungkin dilakukan pihaknya jika SMAN 8 kebanjiran. Nantinya, murid-murid SMAN 8 akan dievakuasi ke salah satu SD di kawasan Jakarta Timur jika banjir terjadi. \"Kami sudah koordinasi dengan sekolah yang ada di Jalan Slamet Riyadi, wilayahnya itu masuk sudin (Jakarta) Timur,\" kata dia. Menurut dia, walaupun berada di wilayah Timur, lokasi itu dinilai tepat karena jaraknya yang tidak terlalu jauh dari SMAN 8. \"Kapasitasnya juga bisa untuk banyak siswa,\" sambung Ferry. Tempat evakuasi itu merupakan bangunan dua tingkat yang merupakan gabungan beberapa sekolah.'

var result2 = sum_id(text2)
// The Corruption Eradication Commission, better known as KPK, on Thursday launched the 2015 Anti-Corruption Festival, or Festa, in conjunction with the Bandung city government, to celebrate International Anti-Corruption Day.

```

## Testing

From the repo root:

```
npm test
```

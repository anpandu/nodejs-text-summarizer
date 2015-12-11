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
var sum_id = require('nodejs-text-summarizer').ID

var text = 'JAKARTA, KOMPAS.com - Kepala Suku Dinas Pendidikan (Kasudin) Wilayah II, Jakarta Selatan, Ferry Safrudin memastikan Sekolah Menengah Atas Negeri (SMAN) 8 di Bukit Duri, Tebet, Jakarta Selatan tak akan diliburkan jika kebanjiran. \u00a0\"Enggak akan ada libur kok,\" ujar Ferry Safrudin di Jakarta, Kamis (26/11/2015). Bagi Ferry, aktivitas belajar mengajar harus berjalan normal meskipun sekolah kebanjiran. (Baca: Meski Langganan Banjir, SMA 8 Tetap Berprestasi)Adapun SMAN 8 Jakarta merupakan salah satu sekolah yang menjadi langganan banjir. Pada tahun 2004 lalu, SMAN 8 pernah digenangi air setinggi tiga meter. Ferry juga menyampaikan langkah yang mungkin dilakukan pihaknya jika SMAN 8 kebanjiran. Nantinya, murid-murid SMAN 8 akan dievakuasi ke salah satu SD di kawasan Jakarta Timur jika banjir terjadi. \"Kami sudah koordinasi dengan sekolah yang ada di Jalan Slamet Riyadi, wilayahnya itu masuk sudin (Jakarta) Timur,\" kata dia. Menurut dia, walaupun berada di wilayah Timur, lokasi itu dinilai tepat karena jaraknya yang tidak terlalu jauh dari SMAN 8. \"Kapasitasnya juga bisa untuk banyak siswa,\" sambung Ferry. Tempat evakuasi itu merupakan bangunan dua tingkat yang merupakan gabungan beberapa sekolah.'

var result = sum_id(text)
// Kepala Suku Dinas Pendidikan (Kasudin) Wilayah II, Jakarta Selatan, Ferry Safrudin memastikan Sekolah Menengah Atas Negeri (SMAN) 8 di Bukit Duri, Tebet, Jakarta Selatan tak akan diliburkan jika kebanjiran.

```

## Testing

From the repo root:

```
npm test
```

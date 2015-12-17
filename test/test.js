var expect = require('chai').expect
var assert = require('assert')
var _ = require('lodash')
var summarizer = require('../index.js')

var EN_TEXT = 'Bandung, West Java. The Corruption Eradication Commission, better known as KPK, on Thursday launched the 2015 Anti-Corruption Festival, or Festa, in conjunction with the Bandung city government, to celebrate International Anti-Corruption Day. The festival will run until Friday. KPK acting chief Taufiqqurahman Ruki, National Police Chief Gen. Badrodin Haiti, House of Regional Representatives (DPD) Speaker Irman Gusman and Attorney General H.M. Prasetyo were to be joined by Political, Legal and Security Affairs Minister Luhut Panjaitan, Justice and Human Rights Minister Yasonna Laoly, Health Minister Nina Moeloek and Industry Minister Saleh Husin at the event. The KPK\'s Ruki opened the event on Thursday with a speech calling on the House to reconsider intentions to revise the KPK law, or "face the anti-corruption community." He pointed to three key aspects to the fight against corruption — human, cultural and systematic — and said that systematic aspect were the most important, as they reflects policies and laws. “We do not name someone as a suspect because we hold a grudge against that particular person or because we are driven by political motives," he said. "We do so in the name of the law." “Graft is a crime against humanity as it is proven to bring injustice and poverty and we have to eradicate it," Luhut said. "The country\'s leaders, whether at the central or regional government level, have to be good role models in fighting graft. I would like everyone to work together for a graft-free Indonesia." Bandung was selected to host the event as the city has the highest level of public engagement, infrastructure capability and corruption prevention, compared to other cities, KPK deputy chief Adnan Pandu Praja said. The KPK hopes Festa will encourage more Indonesians to join the fight against corruption by beginning in their own neighborhood. The festival will feature theater performances, live music and other events.'
var ID_TEXT = 'Jakarta (ANTARA News) - Presiden Joko Widodo (Jokowi) meminta Kemenhub dan Pemprov DKI Jakarta berkoordinasi mencegah kecelakaan di perlintasan kereta api seperti yang terjadi pada Minggu pagi (6/12) di daerah Angke Jakarta Barat. \"Arahan beliau agar kita berkoordinasi dengan Gubernur DKI Jakarta, sebenarnya sudah kita mulai kemarin,\" kata Menteri Perhubungan Ignasius Jonan di Kompleks Istana Kepresidenan Jakarta, Senin. Ia menyebutkan Kemenhub akan melanjutkan koordinasi dengan Pemprov DKI Jakarta terkait upaya pembenahan disiplin awak angkutan umum, termasuk Metromini. \"Juga pembahasan bagaimana mengatasi secara permanen perlintasan-perlintasan sebidang itu,\" ucapnya. Menurut dia, upaya pendisiplinan antara lain perlu ada petugas gabungan yang memeriksa, misalnya, pengemudi apakah mempunyai SIM yang sesuai atau tidak. \"Kemudian pemeriksaan kesehatan pengemudi, terus kelaikan kendaraan dan sebagainya,\" tuturnya. Mengenai solusi perlintasan sebidang, Jonan mengatakan pilihan solusinya ada dua apakah rel mau ditaruh di atas atau dibuat underpass. \"Ada yang berpendapat kalau underpass tidak muat banyak, ya harus diperlebar,\" imbuhnya. Ia menyebutkan untuk jalur rel di atas memang merupakan solusi yang lebih permanen hanya saja biayanya lebih mahal. \"Mungkin puluhan kali lipat jika dibanding dengan buat underpass atau flyover,\" tukasnya. Menhub menyebutkan saat ini terdapat paling tidak 200 perlintasan kereta api sebidang. \"Perlintasan yang resmi pasti ada penjaganya, kalau tidak resmi tidak ada,\" tambahnya. Ia menyebutkan jika perlintasan itu ada di jalan negara maka yang mengadakan petugas tersebut Kemenhub. \"Kalau jalan provinsi atau kabupaten, itu pemda yang menyediakan,\" kata Menhub Ignasius Jonan.\u00a0'

describe('MAIN', function () {

  it('check default', function () {
    assert(!_.isUndefined(summarizer), 'ID not found')
    var result = summarizer(EN_TEXT)
    assert(result.length > 0)
  })

  it('check raw=true', function () {
    assert(!_.isUndefined(summarizer), 'EN not found')
    var opt = {
      raw:true
    }
    var result = summarizer(EN_TEXT, opt)
    assert(result.length == 1)
  })

  it('check n=3', function () {
    assert(!_.isUndefined(summarizer), 'EN not found')
    var opt = {
      n:3, 
      raw:true
    }
    var result = summarizer(EN_TEXT, opt)
    assert(result.length == 3)
  })

  it('check lang=ID', function () {
    assert(!_.isUndefined(summarizer), 'EN not found')
    var opt = {
      n:3, 
      lang:'ID', 
      raw:true
    }
    var result = summarizer(ID_TEXT, opt)
    assert(result.length == 3)
  })

})

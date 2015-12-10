/*! topic v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

var _ = require('lodash')
var tokenizer = require('nalapa').tokenizer

var Cleaner = require('./modules/Cleaner.js')
var Processor = require('./modules/Processor.js')


/**
 * Module exports
 */

// module.exports = topic;

/**
 * @param {}
 * @return {}
 * @api public
 */

var topic = function () {
  var content = 'Jakarta (ANTARA News) - InterContinental Hotels Group (IHG) telah membuka Holiday Inn Express Jakarta International Expo, hotel Holiday Inn Express ke-7 di Indonesia, dan ketiga di Jakarta. Hotel 11 tingkat dengan 243 kamar itu menawarkan para wisatawan tempat yang bebas dari keributan dan juga merupakan satu-satunya hotel dengan akses langsung menuju Jakarta International Expo.\"Holiday Inn Express adalah brand yang berkembang pesat dan sangat terkenal bagi para wisatawan untuk mencari tempat tinggal nyaman dan terjangkau di tempat mereka beraktivitas,\" kata Alan Watts, Chief Operating Officer, Asia, Middle East and Africa (AMEA), IHG, dalam keterangan tertulisnya.\"Dengan adanya Holiday Inn Express Jakarta International Expo, pengunjung dengan kepentingan bisnis maupun wisata dapat memilih hotel Holiday Inn Express yang tersebar di lokasi-lokasi terbaik di Indonesia. Dalam beberapa tahun ke depan, kami berencana untuk menambah lima hotel Holiday Inn Express menjadi 12,\" sambung dia.Para tamu mendapatkan akses transit yang mudah ke bandara, di mana jarak dari Bandara Soekarno-Hatta kurang dari 30km.Selain itu, pintu Tol Kemayoran yang dekat membuat para tamu juga dapat mengakses jalan bebas hambatan menuju beberapa tempat atraksi yang ternama seperti pusat perbelanjaan Mangga Dua, Monumen Nasional, dan Kota Tua Batavia di daerah Pecinaan. Mal perbelanjaan yang terkenal seperti Mall of Indonesia, Emporium Pluit dan Mall Kelapa Gading juga hanya beberapa menit dari hotel. Hotel tersebut berlokasi di dekat Ancol Dreamland dan taman wisata Waterbom Jakarta tujuan favorit untuk keluarga. Sedangkan untuk para pemain golf bisa bermain di lapangan 18-hole Bandar Kemayoran Golf Course yang berada kurang dari 10 menit dari lokasi hotel.Para pengunjung dengan tujuan bisnis yang akan menghadiri pameran dan acara seperti Tradexpo Indonesia dan Jakarta Fair, memiliki akses langsung menuju Jakarta International Expo. Holiday Inn Express juga menyediakan ruangan untuk keperluan bisnis dengan peralatan lengkap, termasuk tiga ruang pertemuan dengan luas 35 meter persegi yang dapat sesuaikan dengan kebutuhan.\"Lokasi Holiday Inn Express Jakarta International Expo adalah tempat yang menginap yang sempurna untuk menjelajahi kota Jakart bagi pengunjung maupun penyelenggara pameran yang menginginkan akses cepat dan mudah ke tempat pameran,\" ujar Franco Ray, General Manager, Holiday Inn Express Jakarta International Expo.\"Kami memiliki 243 kamar yang dirancang dengan menarik dan nyaman, dengan pilihan kasur twin atau double, termasuk connecting room dan sembilan kamar suite dan kami sangat bersemangat untuk menyambut para tamu hotel kami,\" tambah dia.Para tamu dapat menikmati banyak hal saat menginap di Holiday Inn Express Jakarta International Expo yang mencakup: - Wi-Fi cepat dan gratis yang tersedia di seluruh penjuru hotel agar tetap terhubung selama tamu tinggal.- Gratis Express Start Breakfast atau Grab & Go untuk memulai hari dengan baik.- Perlengkapan tidur yang nyaman dan berkualitas dengan pilihan bantal yang lembut atau keras untuk beristirahat yang nyaman pada malam hari.- Power showers menyegarkan dengan 3 fungsi pijatan pada kepala dan handuk yang halus untuk kesegaran.- Ruang olah raga 24 jam untuk menambah energi dan menjaga rutinitas kebugaran meskipun jauh dari rumah.- Self-service pusat bisnis dan binatu.Holiday Inn Express Jakarta International Expo merupakan Holiday Inn Express yang ketiga di ibu kota Indonesia, bergabung dengan dua Holiday Inn Express hotel lainnya yang ada di Jakarta, melanjutkan kesuksesan dari Holiday Inn Express Jakarta Thamrin dan Holiday Inn Jakarta Pluit Citygate. Terdapat empat Holiday Inn Express lainnya yang tersebar di penjuru Indonesia seperti Bali, Semarang, Surabaya ditambah lima lainnya yang akan di bangun di penjuru negeri lima tahun kedepan. Secara keseluruhan di dunia, terdapat 2.400 hotel Holiday Inn Express dengan 540 hotel dalam rencana.Ada 15 IHG hotel di seluruh Indonesia dengan empat macam nama, termasuk InterContinental, Crowne Plaza dan Holiday Inn, dan total 28 hotel saluran lainnya, termasuk hotel pertama buatan negeri first Hotel Indigo, butik IHG, akan di tempatkan di Bali dan dibuka di tahun 2016.Untuk keperluan pemesanan dari sekarang hingga 31 Desember, hotel sedang mengadakan promosi dari USD 41++ per malam. Untuk pemesanan tempat dan informasi lebih lanjut mengenai Holiday Inn Express di penjuru dunia, dapat mengunjungi www.holidayinnexpress.com.ADV'
  
  content = Cleaner.replaceNonASCII(content, ' ')
  content = Cleaner.fixDotBetweenSentences(content)

  var sentences = tokenizer.splitSentence(content)
  
  sentences = Processor.addWords(sentences)
  sentences = Processor.addWordFormSimilarity(sentences)
  sentences = Processor.addWordSemanticSimilarity(sentences)
  sentences = Processor.addWordOrderSimilarity(sentences)
  sentences = Processor.deleteWords(sentences)

  sentences = _.chain(sentences).sortBy(function(a) { return a['word_order_similarity'] }).value()
  console.log(sentences)
  // console.log(JSON.stringify(sentences))
}

topic()

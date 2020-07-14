const fetch = require("node-fetch");

const listpertanyaanborse = [
  {
    number: 1,
    question: "Saya lebih suka main ke mall daripada nongkrong di kedai kopi",
    agr: 1,
  },
  {
    number: 2,
    question:
      "Saya suka main catur/kartu/domino atau permainan sederhana lainnya",
    agr: -1,
  },
  {
    number: 3,
    question:
      "Saya lebih suka naik kendaraan umum/jalan kaki daripada kendaraan pribadi",
    agr: -1,
  },
  {
    number: 4,
    question: "Saya tertarik dengan barang-barang kuno atau antik",
    agr: -1,
  },
  {
    number: 5,
    question: "Saya terkadang terganggu dengan pengamen dan pengemis",
    agr: 1,
  },
  {
    number: 6,
    question: "Saya sangat memperhatikan jumlah followers/likes saya",
    agr: 1,
  },
  { number: 7, question: "Saya tidak menyukai kegiatan petualangan", agr: 1 },
  {
    number: 8,
    question: "Saya memperhatikan status sosial teman saya",
    agr: 1,
  },
  {
    number: 9,
    question: "Saya sangat memperhatikan “brand” dari aksesoris saya",
    agr: 1,
  },
  {
    number: 10,
    question: "Menurut saya uang adalah variabel kehidupan yang sangat penting",
    agr: 1,
  },
  {
    number: 11,
    question:
      "Saya lebih suka makan mahal tapi enak daripada makan murah tapi banyak",
    agr: 1,
  },
  {
    number: 12,
    question:
      "Saya terkadang membeli barang yang pada akhirnya jarang saya pakai",
    agr: 1,
  },
  {
    number: 13,
    question:
      "Saya lebih memilih untuk membeli barang berdasarkan kemampuan fungsional dibanding  estetika",
    agr: -1,
  },
  {
    number: 14,
    question:
      "Saya tidak keberatan untuk mengeluarkan biaya yang cukup besar untuk perawatan diri saya.",
    agr: 1,
  },
  {
    number: 15,
    question:
      "Setelah selesai mengerjakan sesuatu yang susah dan melelahkan, saya sangat ingin bersenang-senang semeriah mungkin.",
    agr: 1,
  },
  {
    number: 16,
    question: "Saya suka memamerkan kehidupan pribadi saya",
    agr: 1,
  },
  {
    number: 17,
    question:
      "Saya terkadang tak bisa menahan kemauan saya untuk pergi berbelanja.",
    agr: 1,
  },
  { number: 18, question: "Menurut saya gaya Hipster itu keren.", agr: -1 },
  { number: 19, question: "Uang tidak bisa memberikanmu kebahagiaan", agr: -1 },
  {
    number: 20,
    question: "Saya suka nongkrong ditempat-tempat seperti warung kopi.",
    agr: -1,
  },
  {
    number: 21,
    question: "Saya tertarik dengan kegiatan camping atau piknik.",
    agr: -1,
  },
  {
    number: 22,
    question:
      "Saya lebih sering dan suka bepergian/liburan keluar negeri dibanding keliling Indonesia.",
    agr: 1,
  },
];
const listpertanyaankonpro = [
  {
    number: 23,
    question:
      "Saya terganggu dengan orang merokok atau minum (minuman keras) di dekat saya",
    agr: -1,
  },
  {
    number: 24,
    question:
      "Saya setuju bahwa laki-laki adalah (harus menjadi) tulang punggung keluarga",
    agr: -1,
  },
  { number: 25, question: "Saya tertarik membaca buku-buku filsafat ", agr: 1 },
  {
    number: 26,
    question: "Saya tertarik mengkaji masalah-masalah sosial atau masa depan ",
    agr: 1,
  },
  { number: 27, question: "Saya suka mengikuti kegiatan keagamaan", agr: -1 },
  {
    number: 28,
    question: "Menurut saya mempertahankan budaya adalah hal penting",
    agr: -1,
  },
  {
    number: 29,
    question:
      "Menurut saya paham ateisme merupakan paham yang salah/menyesatkan",
    agr: -1,
  },
  { number: 30, question: "Menurut saya Bahasa Perancis itu seksi ", agr: 1 },
  {
    number: 31,
    question: "Saya sangat memperhatikan feeds Instagram  ",
    agr: 1,
  },
  {
    number: 32,
    question:
      "Menurut saya pernikahan itu merupakan variabel penting dalam kehidupan",
    agr: -1,
  },
  {
    number: 33,
    question:
      "Saya menurut saya wajar saja jika pendidikan suami lebih dari istri",
    agr: -1,
  },
  {
    number: 34,
    question:
      "Saya lebih suka pasangan yang taat dalam beribadah/kegiatan keagamaan dan kuat dalam implementasi agamanya.",
    agr: -1,
  },
  {
    number: 35,
    question:
      "Menurut saya tidak wajar apabila karier/gaji seseorang wanita melebihi pasangan lakinya",
    agr: -1,
  },
  { number: 36, question: "Menurut saya LGBT itu salah", agr: -1 },
  {
    number: 37,
    question: "Saya lebih memilih untuk tidak pacaran sebelum nikah",
    agr: -1,
  },
  {
    number: 38,
    question:
      "Menurut saya perempuan harus dipandang sama secara sosial dengan laki-laki ",
    agr: 1,
  },
  {
    number: 39,
    question: "Saya mengikuti gerakan-gerakan feminisme. ",
    agr: 1,
  },
  {
    number: 40,
    question: "“Milik istri adalah milik istri, milik suami adalah milik istri",
    agr: -1,
  },
  {
    number: 41,
    question: "Menurut saya nikah beda agama bukan hal yang salah. ",
    agr: 1,
  },
  {
    number: 42,
    question: "Saya suka mengikuti berita-berita sekilas tentang politik. ",
    agr: 1,
  },
  {
    number: 43,
    question: "Saya lebih ingin nikah tepat waktu daripada nikah pada waktunya",
    agr: -1,
  },
  {
    number: 44,
    question:
      "Menurut saya sastra dan seni tidak begitu penting dalam kehidupan.",
    agr: -1,
  },
];
const postQuestion = async function (questionArg) {
  let preBody = {
    number: questionArg.number,
    axis: "y",
    question: questionArg.question,
    argument: questionArg.agr,
  };
  const response = await fetch("http://localhost:5000/api/getQuestions/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preBody),
  });
  const data = response.json();
  if (data.created) {
    return true;
  } else {
    return false;
  }
};

const postQuestions = async (questionArray) => {
  await questionArray.forEach((quest) => {
    postQuestion(quest).then((res) => console.log(res));
  });
};

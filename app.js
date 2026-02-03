// 高知県中心あたり
const map = L.map("map").setView([33.5597, 133.5311], 9);

// 地図タイル
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// 心霊スポット（※後で自由に追加・修正）
const hauntedSpots = [
  {
    name: "◯◯トンネル",
    lat: 33.515,
    lng: 133.465,
    description: "深夜に女性の霊が現れると噂されるトンネル。事故が多いことで知られる。"
  },
  {
    name: "△△廃校",
    lat: 33.703,
    lng: 133.085,
    description: "閉校後も足音や子どもの声が聞こえると言われている。"
  },
  {
    name: "□□海岸",
    lat: 32.785,
    lng: 132.965,
    description: "戦時中の歴史と関係があるとされ、夜になると人影が現れるという。"
  }
];

// マーカー追加
hauntedSpots.forEach(spot => {
  L.marker([spot.lat, spot.lng])
    .addTo(map)
    .bindPopup(`
      <strong>${spot.name}</strong><br>
      ${spot.description}
    `);
});

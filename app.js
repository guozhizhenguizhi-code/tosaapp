// ===== データ定義 =====
const hauntedSpots = [
    {
        rank: 1,
        name: "スカイレストニュー室戸",
        lat: 33.2895,
        lng: 134.1587,
        address: "〒781-7101 高知県室戸市室戸岬町６８９２",
        description: "廃墟となったレストラン。地下室で目撃談が多数報告されています。",
        type: "廃墟",
        details: "展望室に出る男の霊と怪光、地下室で無表情な男性の目撃情報があります。訪問後に原因不明の高熱に苦しんだという報告も。",
        danger: 5
    },
    {
        rank: 2,
        name: "足摺岬",
        lat: 32.7385,
        lng: 133.0126,
        address: "〒787-0315 高知県土佐清水市足摺岬２１４−１３",
        description: "自殺の名所として知られる岬。白山洞門付近で多くの目撃談があります。",
        type: "岬",
        details: "四国最南端の岬。白山洞門と遊歩道は特に霊的な現象が強いとされています。美しい景観の裏に悲しい歴史が。",
        danger: 5
    },
    {
        rank: 3,
        name: "ホテル皇邸",
        lat: 33.4923,
        lng: 133.6245,
        address: "〒781-0270 高知県高知市長浜１５８２−１",
        description: "廃墟となったホテル。不気味な雰囲気が漂います。",
        type: "廃墟",
        details: "海沿いにある廃ホテル。昼間でも不気味な雰囲気。ホームレスが住み着いていたという情報もあります。",
        danger: 4
    },
    {
        rank: 4,
        name: "見返り橋",
        lat: 33.7234,
        lng: 133.7456,
        address: "〒789-0581 高知県香美市土佐山田町西又",
        description: "橋の上で振り返ると何かが見えると言われています。",
        type: "橋",
        details: "その名の通り、橋の上で振り返ると霊が見えるという伝説があります。夜の訪問は特に危険とされています。",
        danger: 3
    },
    {
        rank: 5,
        name: "藤宮神社",
        lat: 33.6012,
        lng: 133.6789,
        address: "〒783-0047 高知県南国市岡豊町常通寺島２８１",
        description: "古くから心霊現象が報告される神社。",
        type: "神社",
        details: "地元では心霊スポットとして知られていますが、普通の神社との意見もあります。",
        danger: 2
    },
    {
        rank: 6,
        name: "ヴァンガード竜串",
        lat: 32.7923,
        lng: 132.9456,
        address: "〒787-0559 高知県土佐清水市下川口",
        description: "稲川淳二氏も取り上げた廃ホテル。301号室の濡れた女の霊が有名。",
        type: "廃墟",
        details: "監禁部屋があったという噂。301号室のびしょ濡れの女、展望室の男の霊と怪光の目撃談があります。",
        danger: 5
    },
    {
        rank: 7,
        name: "山下シーサイドマンション",
        lat: 33.4678,
        lng: 133.6123,
        address: "〒781-0113 高知県高知市種崎８５１−１",
        description: "海沿いの廃マンション。残留物が多く雰囲気があります。",
        type: "廃墟",
        details: "外観はいかにも心霊スポットという雰囲気。中はまだ使えそうなほどきれいですが、残留物が多数あります。",
        danger: 4
    },
    {
        rank: 8,
        name: "室戸岬",
        lat: 33.2500,
        lng: 134.1833,
        address: "〒781-7101 高知県室戸市室戸岬町",
        description: "荒波が打ち寄せる岬。夜は特に不気味な雰囲気。",
        type: "岬",
        details: "室戸岬周辺は複数の心霊スポットが集中しています。灯台や洞窟でも目撃談があります。",
        danger: 3
    },
    {
        rank: 9,
        name: "住吉海岸",
        lat: 33.5856,
        lng: 133.7234,
        address: "〒781-5622 高知県香南市夜須町手結山１５５２",
        description: "111人が亡くなった海難事故の現場。",
        type: "海岸",
        details: "1945年に111人が亡くなった悲劇の現場。冷やかしで行くような場所ではありません。",
        danger: 4
    },
    {
        rank: 10,
        name: "浦戸大橋",
        lat: 33.5123,
        lng: 133.6456,
        address: "高知県高知市 県道14号線",
        description: "自殺の名所として知られる橋。多数の飛び降りがありました。",
        type: "橋",
        details: "柵ができる前には何十人もの飛び降りがありました。橋の下には墓地もあり、夜は特に雰囲気があります。",
        danger: 4
    },
    {
        rank: 11,
        name: "菜園場劇場",
        lat: 33.5589,
        lng: 133.5312,
        address: "〒780-0823 高知県高知市菜園場町８−１８",
        description: "廃墟となった劇場。不可解な現象が報告されています。",
        type: "廃墟",
        details: "古い劇場の廃墟。一緒にいた友人が消えたという怖い体験談もあります。",
        danger: 3
    },
    {
        rank: 12,
        name: "太陽の丘（サニーヒルズ）",
        lat: 33.5234,
        lng: 133.4123,
        address: "〒781-1104 高知県土佐市高岡町丁２７０",
        description: "廃墟化した施設。危険な場所として知られています。",
        type: "廃墟",
        details: "現在も危険人物がうろついているという情報があり、命の保証はできません。",
        danger: 5
    },
    {
        rank: 13,
        name: "筆山公園",
        lat: 33.5667,
        lng: 133.5234,
        address: "高知県高知市 土佐道路",
        description: "展望台やトイレで自殺者が出たとの噂があります。",
        type: "公園",
        details: "夜景スポットとして人気ですが、展望台やトイレ、遊歩道で自殺者が出たという噂があります。",
        danger: 3
    },
    {
        rank: 14,
        name: "たまごトンネル",
        lat: 33.5812,
        lng: 133.4923,
        address: "〒780-0965 高知県高知市福井町１９５３",
        description: "霊園に続くトンネル。卵型の形状が特徴的。",
        type: "トンネル",
        details: "霊園への道にあるトンネル。地元民によると特に怖い現象はないとのことですが、雰囲気はあります。",
        danger: 2
    },
    {
        rank: 15,
        name: "松尾無線中継所",
        lat: 33.7456,
        lng: 133.8123,
        address: "〒781-4227 高知県香美市香北町川ノ内",
        description: "廃墟となった無線中継所。カメラの不調が報告されています。",
        type: "廃墟",
        details: "山奥にある廃墟。カメラやスマホが不調になるという報告があります。",
        danger: 3
    },
    {
        rank: 16,
        name: "旧宿毛トンネル",
        lat: 32.9456,
        lng: 132.7234,
        address: "高知県宿毛市 宿毛街道",
        description: "松葉杖の兵隊さんが現れるという伝説があります。",
        type: "トンネル",
        details: "戦時中の悲しい歴史があるトンネル。松葉杖をついた兵隊の霊が現れると言われています。",
        danger: 3
    },
    {
        rank: 17,
        name: "五台山公園",
        lat: 33.5445,
        lng: 133.5678,
        address: "〒781-8126 高知県高知市吸江２１０−１",
        description: "高知市を一望できる公園。夜は雰囲気が変わります。",
        type: "公園",
        details: "昼間は美しい展望スポットですが、夜は不気味な雰囲気に。",
        danger: 2
    },
    {
        rank: 18,
        name: "仁淀川河口大橋",
        lat: 33.4789,
        lng: 133.4567,
        address: "〒781-0323 高知県高知市春野町仁ノ",
        description: "河口で多数の死者が出ている場所。",
        type: "橋",
        details: "昔から相当数の死者が出ている場所。曰く付きの場所であることは間違いありません。",
        danger: 4
    }
];

// ===== グローバル変数 =====
let map;
let markers = [];
let infoWindow;
let activeMarker = null;
let activeSpotIndex = null;

// ===== Google Maps初期化 =====
function initMap() {
    // 高知県の中心座標
    const kochiCenter = { lat: 33.5597, lng: 133.5311 };
    
    // マップスタイル（ダークモード）
    const darkMapStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
        { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] }
    ];
    
    // マップ作成
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: kochiCenter,
        styles: darkMapStyle,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true
    });

    infoWindow = new google.maps.InfoWindow();

    // マーカー作成
    createMarkers();
    
    // スポットリスト表示
    displaySpotList(hauntedSpots);
    
    // 統計更新
    updateStats(hauntedSpots.length, hauntedSpots.length);
    
    // ローディング非表示
    hideLoading();
    
    // イベントリスナー設定
    setupEventListeners();
}

// ===== マーカー作成 =====
function createMarkers() {
    hauntedSpots.forEach((spot, index) => {
        const marker = new google.maps.Marker({
            position: { lat: spot.lat, lng: spot.lng },
            map: map,
            title: spot.name,
            icon: {
                url: createMarkerIcon(spot.danger),
                scaledSize: new google.maps.Size(40, 40)
            },
            animation: google.maps.Animation.DROP
        });

        // マーカークリックイベント
        marker.addListener('click', () => {
            showSpotInfo(spot, marker, index);
        });

        markers.push({ marker, spot, index });
    });
}

// ===== マーカーアイコン作成 =====
function createMarkerIcon(danger) {
    const color = danger >= 4 ? '#ff0000' : danger >= 3 ? '#ff6b6b' : '#ff9999';
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="${color}" stroke="#ffffff" stroke-width="2"/>
            <text x="20" y="26" font-size="20" text-anchor="middle" fill="white">👻</text>
        </svg>
    `;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

// ===== スポット情報表示 =====
function showSpotInfo(spot, marker, index) {
    // アクティブ状態更新
    setActiveSpot(index);
    
    // マーカーアニメーション
    animateMarker(marker);
    
    // 情報ウィンドウ表示
    const content = createInfoWindowContent(spot);
    infoWindow.setContent(content);
    infoWindow.open(map, marker);
    
    // マップを中心に
    map.panTo(marker.getPosition());
    map.setZoom(14);
}

// ===== 情報ウィンドウコンテンツ作成 =====
function createInfoWindowContent(spot) {
    const dangerStars = '⚠️'.repeat(spot.danger);
    return `
        <div style="padding: 15px; max-width: 300px; font-family: 'Segoe UI', sans-serif;">
            <div style="font-weight: bold; font-size: 18px; color: #ff6b6b; margin-bottom: 10px;">
                <span style="font-size: 20px;">👻</span> ${spot.name}
            </div>
            <div style="font-size: 12px; color: #666; margin-bottom: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                📍 ${spot.address}
            </div>
            <div style="font-size: 13px; color: #333; line-height: 1.5; margin-bottom: 10px;">
                ${spot.description}
            </div>
            <div style="font-size: 12px; color: #999; margin-bottom: 8px;">
                <strong>タイプ:</strong> ${getTypeIcon(spot.type)} ${spot.type}
            </div>
            <div style="font-size: 12px; color: #ff6b6b;">
                <strong>危険度:</strong> ${dangerStars}
            </div>
            <button onclick="showDetailModal(${spot.rank - 1})" 
                    style="margin-top: 10px; padding: 8px 15px; background: #ff6b6b; color: white; border: none; border-radius: 5px; cursor: pointer; width: 100%;">
                詳細を見る
            </button>
        </div>
    `;
}

// ===== タイプアイコン取得 =====
function getTypeIcon(type) {
    const icons = {
        '廃墟': '🏚️',
        '橋': '🌉',
        'トンネル': '🚇',
        '岬': '🏔️',
        '神社': '⛩️',
        '公園': '🌳',
        '海岸': '🌊'
    };
    return icons[type] || '📍';
}

// ===== マーカーアニメーション =====
function animateMarker(marker) {
    if (activeMarker && activeMarker !== marker) {
        activeMarker.setAnimation(null);
    }
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 2100);
    activeMarker = marker;
}

// ===== アクティブスポット設定 =====
function setActiveSpot(index) {
    document.querySelectorAll('.spot-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const spotItems = document.querySelectorAll('.spot-item');
    if (spotItems[index]) {
        spotItems[index].classList.add('active');
        spotItems[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    activeSpotIndex = index;
}

// ===== スポットリスト表示 =====
function displaySpotList(spots) {
    const spotList = document.getElementById('spot-list');
    spotList.innerHTML = '';
    
    spots.forEach((spot, index) => {
        const spotItem = document.createElement('div');
        spotItem.className = 'spot-item';
        spotItem.innerHTML = `
            <div>
                <span class="spot-rank">第${spot.rank}位</span>
                <span class="spot-name">${spot.name}</span>
            </div>
            <div class="spot-location">${getTypeIcon(spot.type)} ${spot.type}</div>
            <div class="spot-description">${spot.description}</div>
        `;

        spotItem.addEventListener('click', () => {
            const markerData = markers.find(m => m.index === index);
            if (markerData) {
                showSpotInfo(spot, markerData.marker, index);
            }
        });

        spotList.appendChild(spotItem);
    });
}

// ===== 検索・フィルター機能 =====
function setupEventListeners() {
    // 検索
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        filterSpots();
    });

    // タイプフィルター
    const typeFilter = document.getElementById('type-filter');
    typeFilter.addEventListener('change', (e) => {
        filterSpots();
    });

    // マップリセット
    const resetBtn = document.getElementById('reset-map');
    resetBtn.addEventListener('click', () => {
        map.setCenter({ lat: 33.5597, lng: 133.5311 });
        map.setZoom(9);
        infoWindow.close();
        document.querySelectorAll('.spot-item').forEach(item => {
            item.classList.remove('active');
        });
        searchInput.value = '';
        typeFilter.value = 'all';
        filterSpots();
    });

    // サイドバートグル（モバイル用）
    const toggleBtn = document.getElementById('toggle-sidebar');
    toggleBtn.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('visible');
    });

    // モーダルクローズ
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// ===== フィルタリング =====
function filterSpots() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedType = document.getElementById('type-filter').value;
    
    const filteredSpots = hauntedSpots.filter(spot => {
        const matchesSearch = spot.name.toLowerCase().includes(searchTerm) || 
                             spot.description.toLowerCase().includes(searchTerm);
        const matchesType = selectedType === 'all' || spot.type === selectedType;
        return matchesSearch && matchesType;
    });
    
    // マーカー表示/非表示
    markers.forEach(({ marker, spot }) => {
        const isVisible = filteredSpots.some(s => s.rank === spot.rank);
        marker.setVisible(isVisible);
    });
    
    // リスト更新
    displaySpotList(filteredSpots);
    
    // 統計更新
    updateStats(hauntedSpots.length, filteredSpots.length);
}

// ===== 統計更新 =====
function updateStats(total, visible) {
    document.getElementById('total-spots').textContent = total;
    document.getElementById('visible-spots').textContent = visible;
}

// ===== 詳細モーダル表示 =====
function showDetailModal(index) {
    const spot = hauntedSpots[index];
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const dangerStars = '⚠️'.repeat(spot.danger);
    
    modalBody.innerHTML = `
        <h2 style="color: #ff6b6b; margin-bottom: 20px; font-size: 24px;">
            ${getTypeIcon(spot.type)} ${spot.name}
        </h2>
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
            <p style="margin-bottom: 10px;"><strong>ランキング:</strong> 第${spot.rank}位</p>
            <p style="margin-bottom: 10px;"><strong>タイプ:</strong> ${spot.type}</p>
            <p style="margin-bottom: 10px;"><strong>危険度:</strong> ${dangerStars} (${spot.danger}/5)</p>
            <p style="margin-bottom: 0;"><strong>住所:</strong> ${spot.address}</p>
        </div>
        <div style="margin-bottom: 15px;">
            <h3 style="color: #ff6b6b; font-size: 18px; margin-bottom: 10px;">概要</h3>
            <p style="line-height: 1.6;">${spot.description}</p>
        </div>
        <div style="margin-bottom: 15px;">
            <h3 style="color: #ff6b6b; font-size: 18px; margin-bottom: 10px;">詳細情報</h3>
            <p style="line-height: 1.6;">${spot.details}</p>
        </div>
        <div style="background: rgba(255,107,107,0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #ff6b6b;">
            <p style="margin: 0; font-size: 14px;">
                <strong>⚠️ 警告:</strong> このスポットへの訪問は危険です。私有地への侵入は法律違反となります。
            </p>
        </div>
    `;
    
    modal.classList.add('show');
}

// ===== ローディング非表示 =====
function hideLoading() {
    const loading = document.getElementById('loading');
    loading.classList.add('hidden');
}

// ===== エラーハンドリング =====
window.addEventListener('error', (e) => {
    console.error('エラーが発生しました:', e);
    hideLoading();
});

// ===== 初期化完了 =====
console.log('🎃 高知県心霊スポットマップ - 初期化完了');
console.log(`📊 総スポット数: ${hauntedSpots.length}`);

// グローバルスコープに関数を公開
window.initMap = initMap;
window.showDetailModal = showDetailModal;
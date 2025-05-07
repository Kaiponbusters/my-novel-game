import { Game } from './game.js';

function main() {
    // URLパラメータから開始シーンを取得
    const urlParams = new URLSearchParams(window.location.search);
    const startSceneFromLoad = urlParams.get('startScene');

    // パラメータがない場合はタイトル画面にリダイレクト
    if (!startSceneFromLoad && !document.referrer.includes('title.html')) {
        window.location.href = 'title.html';
        return;
    }

    const game = new Game();

    // 保存データから開始するか、デフォルトのシーンから開始するか決定
    const initialSceneKey = startSceneFromLoad || 'scene1';

    game.startGame(initialSceneKey);
}

main();
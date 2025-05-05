import { Game } from './game.js';

function main() {
    const game = new Game();
    
    // URLパラメータから開始シーンを取得
    const urlParams = new URLSearchParams(window.location.search);
    const startSceneFromLoad = urlParams.get('startScene');
    
    // 保存データから開始するか、デフォルトのシーンから開始するか決定
    const initialSceneKey = startSceneFromLoad || 'scene1';
    
    game.startGame(initialSceneKey);
}

main();
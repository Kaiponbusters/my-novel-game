"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const loadButton = document.getElementById('load-button-title');
    if (startButton) {
        startButton.addEventListener('click', () => {
            // ゲーム本体のHTMLファイルに遷移
            window.location.href = 'index.html';
        });
    }
    if (loadButton) {
        loadButton.addEventListener('click', () => {
            // 保存されたシーンキーを取得
            const savedScene = localStorage.getItem('savedScene');
            if (savedScene) {
                // 保存データがある場合は、ゲーム本体に遷移し、
                // 開始シーンとして保存データをURLパラメータで渡す（例）
                // 実際のロード処理はindex.html側のJSで行う想定
                window.location.href = `index.html?startScene=${savedScene}`;
            }
            else {
                // 保存データがない場合（ここではアラート表示）
                alert('保存されたデータがありません。');
                // もしくはボタンを非活性にするなど
            }
        });
        // 初回ロード時に保存データがなければ「つづきから」ボタンを非活性化
        if (!localStorage.getItem('savedScene')) {
            loadButton.disabled = true;
            loadButton.style.opacity = '0.5';
            loadButton.style.cursor = 'not-allowed';
        }
    }
});

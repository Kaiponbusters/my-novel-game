import scenes from './scenes/scene1.js';
export class Game {
    constructor() {
        this.scenesMap = {};
        this.bgmAudio = null;
        this.isAutoMode = false;
        this.autoModeTimeout = null;
        this.currentScene = null;
        this.textEl = document.getElementById('text');
        this.choicesEl = document.getElementById('choices');
        this.bgEl = document.getElementById('background');
        this.charEl = document.getElementById('character');
        this.nameEl = document.getElementById('name');
        this.autoBtn = document.getElementById('auto-btn');
        this.skipBtn = document.getElementById('skip-btn');
        this.saveBtn = document.getElementById('save-btn');
        this.loadBtn = document.getElementById('load-btn');
        this.bgmAudio = null;
        // ボタンイベントリスナーを設定
        this.setupEventListeners();
    }
    setupEventListeners() {
        // オートモードの切り替え
        this.autoBtn.addEventListener('click', () => {
            this.isAutoMode = !this.isAutoMode;
            this.autoBtn.classList.toggle('bg-novel-secondary', this.isAutoMode);
            this.autoBtn.classList.toggle('text-novel-dark', this.isAutoMode);
            if (this.isAutoMode && this.currentScene && this.currentScene.choices.length === 1) {
                // 選択肢が1つしかない場合は自動進行
                this.autoModeTimeout = window.setTimeout(() => {
                    this.transitionToScene(this.currentScene.choices[0].nextScene);
                }, 3000); // 3秒後に自動進行
            }
        });
        // セーブ機能（簡易版）
        this.saveBtn.addEventListener('click', () => {
            const currentSceneKey = Object.keys(this.scenesMap).find(key => this.scenesMap[key] === this.currentScene);
            if (currentSceneKey) {
                localStorage.setItem('savedScene', currentSceneKey);
                this.showNotification('セーブしました');
            }
        });
        // ロード機能（簡易版）
        this.loadBtn.addEventListener('click', () => {
            const savedScene = localStorage.getItem('savedScene');
            if (savedScene && this.scenesMap[savedScene]) {
                this.transitionToScene(savedScene);
                this.showNotification('ロードしました');
            }
            else {
                this.showNotification('セーブデータがありません');
            }
        });
    }
    showNotification(message) {
        // 通知表示用の要素を作成
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-novel-primary text-white px-4 py-2 rounded shadow-lg z-50 fade-in';
        notification.textContent = message;
        document.body.appendChild(notification);
        // 数秒後に消す
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 2000);
    }
    startGame(initialSceneKey) {
        // シーンマップ初期化
        this.scenesMap = Object.assign({}, scenes);
        this.currentScene = this.scenesMap[initialSceneKey];
        this.displayScene();
    }
    transitionToScene(nextSceneKey) {
        // オートモードのタイムアウトをクリア
        if (this.autoModeTimeout !== null) {
            clearTimeout(this.autoModeTimeout);
            this.autoModeTimeout = null;
        }
        if (!nextSceneKey) {
            // エンディングの場合、選択肢を消して終了メッセージ表示
            this.choicesEl.innerHTML = '';
            this.addTextWithAnimation('\n\n--- END ---');
            return;
        }
        const next = this.scenesMap[nextSceneKey];
        if (next) {
            // トランジション効果
            this.applyTransitionEffect(() => {
                this.currentScene = next;
                this.displayScene();
            });
        }
    }
    applyTransitionEffect(callback) {
        // フェードアウト効果
        this.bgEl.style.opacity = '0.5';
        if (this.charEl) {
            this.charEl.style.opacity = '0';
        }
        setTimeout(() => {
            callback();
            // フェードイン効果
            this.bgEl.style.opacity = '1';
            if (this.charEl && this.charEl.style.display !== 'none') {
                this.charEl.style.opacity = '1';
            }
        }, 300);
    }
    addTextWithAnimation(text) {
        this.textEl.textContent += text;
    }
    playBGM(bgmFile) {
        if (!bgmFile)
            return;
        if (this.bgmAudio) {
            this.bgmAudio.pause();
        }
        this.bgmAudio = new Audio(`src/assets/audio/${bgmFile}`);
        this.bgmAudio.loop = true;
        this.bgmAudio.volume = 0.6;
        this.bgmAudio.play().catch(err => {
            console.warn('BGMの再生に失敗しました:', err);
        });
    }
    displayScene() {
        if (!this.currentScene)
            return;
        // タイトル表示（オプション）
        document.title = `${this.currentScene.title} | ビジュアルノベルゲーム`;
        // BGM切り替え
        this.playBGM(this.currentScene.bgm);
        // 背景画像切り替え
        if (this.currentScene.bg) {
            this.bgEl.src = `src/assets/images/${this.currentScene.bg}`;
        }
        // 立ち絵画像切り替え
        if (this.currentScene.char) {
            this.charEl.src = `src/assets/images/${this.currentScene.char}`;
            this.charEl.style.display = '';
            this.charEl.classList.add('fade-in');
            // アニメーション後にクラスを削除
            setTimeout(() => {
                this.charEl.classList.remove('fade-in');
            }, 500);
        }
        else {
            this.charEl.style.display = 'none';
        }
        // キャラクター名表示
        if (this.currentScene.name) {
            this.nameEl.textContent = this.currentScene.name;
            this.nameEl.style.display = '';
        }
        else {
            this.nameEl.textContent = '';
            this.nameEl.style.display = 'none';
        }
        // テキスト表示（アニメーション付き）
        this.textEl.textContent = '';
        this.textEl.textContent = this.currentScene.text;
        // 選択肢クリア
        this.choicesEl.innerHTML = '';
        // 選択肢ボタン生成
        this.currentScene.choices.forEach((choice) => {
            const btn = document.createElement('button');
            btn.textContent = choice.text;
            btn.addEventListener('click', () => {
                this.transitionToScene(choice.nextScene);
            });
            this.choicesEl.appendChild(btn);
        });
        // オートモードの場合、選択肢が1つだけなら自動進行
        if (this.isAutoMode && this.currentScene.choices.length === 1) {
            this.autoModeTimeout = window.setTimeout(() => {
                this.transitionToScene(this.currentScene.choices[0].nextScene);
            }, 5000); // 5秒後に自動進行
        }
    }
}

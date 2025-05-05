const scene1 = {
    title: "放課後の教室",
    text: "放課後の静かな教室。窓際で本を読んでいると、クラスで一番人気のイケメン・蓮があなたに声をかけてきた。\n\n蓮「最近、元気なさそうだけど……大丈夫？」",
    bg: "bg_classroom.jpg",
    char: "ren_normal.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "素直に悩みを打ち明ける",
            nextScene: "scene1A"
        },
        {
            text: "強がってごまかす",
            nextScene: "scene1B"
        },
        {
            text: "話題をそらす",
            nextScene: "scene1C"
        }
    ]
};

const scene1A = {
    title: "素直な気持ち",
    text: "あなたは悩みを正直に話した。\n\n蓮は真剣な表情で話を聞き、優しく励ましてくれる。\n\n蓮「無理しなくていい。俺がそばにいるから」\n\nあなたの心は少し軽くなった。",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "「ありがとう。少し気持ちが楽になった」",
            nextScene: "scene2A"
        },
        {
            text: "「でも、自分でなんとかしないと...」",
            nextScene: "scene2B"
        }
    ]
};

const scene1B = {
    title: "強がりの裏側",
    text: "あなたは「大丈夫」と笑ってごまかした。\n\n蓮はじっとあなたを見つめる。\n\n蓮「……本当に？無理してるなら、ちゃんと言えよ」\n\n少し照れくさくなりながらも、蓮の気遣いが嬉しかった。",
    bg: "bg_classroom.jpg",
    char: "ren_serious.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "「実は...」と本当のことを話す",
            nextScene: "scene2C"
        },
        {
            text: "「別に何でもないよ。心配してくれてありがとう」",
            nextScene: "scene2D"
        }
    ]
};

const scene1C = {
    title: "話題をそらして",
    text: "あなたは話題を変えてしまった。\n\n蓮は少し寂しそうに微笑む。\n\n蓮「……そっか。でも、何かあったらいつでも言って」\n\nあなたは蓮の優しさに気づき、胸が温かくなった。",
    bg: "bg_classroom.jpg",
    char: "ren_normal.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "「実は明日のテストのことで...」",
            nextScene: "scene2E"
        },
        {
            text: "「また今度話せたらいいな」と言って別れる",
            nextScene: "scene2F"
        }
    ]
};

// 新しいシーン：素直に悩みを打ち明けた後の展開
const scene2A = {
    title: "心の距離が縮まる",
    text: "「ありがとう。少し気持ちが楽になったよ」\n\n蓮は優しく微笑んで、窓辺に腰掛けた。\n\n蓮「良かった。それなら、一緒に帰らない？ちょうど俺も帰るところだし」\n\n夕陽が差し込む廊下を、二人で歩き始めた。",
    bg: "bg_corridor.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「実は、もう少し話を聞いてほしいことがあって...」",
            nextScene: "scene3A"
        },
        {
            text: "「ありがとう。でも、寄り道していいかな？」",
            nextScene: "scene3B"
        }
    ]
};

const scene2B = {
    title: "自立心",
    text: "「でも、自分でなんとかしないと...」\n\n蓮は少し考え込むように黙った後、ふっと表情を明るくした。\n\n蓮「そうだな。でも、全部一人で抱え込まなくていい。時には助けを求めることも大事だよ」\n\n蓮は教科書を手に取ると、「これ、明日までに読んでおくといいよ」と言った。",
    bg: "bg_classroom.jpg",
    char: "ren_normal.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "教科書を受け取って礼を言う",
            nextScene: "scene3C"
        },
        {
            text: "「一緒に勉強するのはどう？」と提案する",
            nextScene: "scene3D"
        }
    ]
};

// 強がった後の展開
const scene2C = {
    title: "本音を明かす時",
    text: "「実は...」とあなたは少し迷った後、本当の気持ちを打ち明けた。\n\n蓮は静かに頷きながら聞いている。\n\n蓮「正直に話してくれてありがとう。勇気がいることだよね」\n\n彼の言葉に、胸の奥が温かくなった。",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「これからどうしたらいいと思う？」とアドバイスを求める",
            nextScene: "scene3E"
        },
        {
            text: "「聞いてくれてありがとう」と感謝する",
            nextScene: "scene3F"
        }
    ]
};

const scene2D = {
    title: "距離を保ったまま",
    text: "「別に何でもないよ。心配してくれてありがとう」\n\n蓮は少し残念そうな表情をしたが、すぐに微笑んだ。\n\n蓮「そっか。でも、いつでも話を聞くよ」\n\n彼は腕時計を見て、「あ、部活の時間だ。またね」と言って立ち去ろうとした。",
    bg: "bg_classroom.jpg",
    char: "ren_normal.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "「ちょっと待って」と呼び止める",
            nextScene: "scene3G"
        },
        {
            text: "「またね」と見送る",
            nextScene: "scene3H"
        }
    ]
};

// 話題をそらした後の展開
const scene2E = {
    title: "テストの相談",
    text: "「実は明日のテストのことで悩んでて...」\n\n蓮は少し驚いた表情を見せた後、安心したように微笑んだ。\n\n蓮「そうだったのか。数学が苦手なんだっけ？」\n\n彼があなたの弱点を覚えていることに少し驚いた。",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "「うん、公式が覚えられなくて...」",
            nextScene: "scene3I"
        },
        {
            text: "「え？なんで知ってるの？」と驚く",
            nextScene: "scene3J"
        }
    ]
};

const scene2F = {
    title: "またの機会に",
    text: "「また今度話せたらいいな」と言って、あなたは席を立とうとした。\n\n蓮「待って」\n\n彼はカバンから何かを取り出した。小さな紙袋だ。\n\n蓮「これ、よかったら。気分転換になるかと思って」",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「ありがとう」と受け取る",
            nextScene: "scene3K"
        },
        {
            text: "「急に何？」と戸惑う",
            nextScene: "scene3L"
        }
    ]
};

// 第3層のシーン：より深い展開
const scene3A = {
    title: "心の内を明かす",
    text: "夕暮れの中、あなたは蓮に悩みの詳細を打ち明けた。将来の不安、友人関係、家族のこと…\n\n蓮は時折頷きながら、真剣に耳を傾けている。\n\n蓮「大変だったね。でも、一人じゃないよ」\n\n気がつくと、彼は優しく手を握っていた。",
    bg: "bg_sunset.jpg",
    char: "ren_serious.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "「ありがとう、蓮」と微笑む",
            nextScene: "ending1"
        },
        {
            text: "恥ずかしくなって手を引っ込める",
            nextScene: "ending2"
        }
    ]
};

const scene3B = {
    title: "特別な場所へ",
    text: "「ありがとう。でも、寄り道していいかな？」\n\n蓮は興味深そうに頷いた。\n\n蓮「いいよ。どこに行きたい？」\n\nあなたは迷わず、「屋上」と答えた。二人で屋上に向かうと、美しい夕焼けが広がっていた。",
    bg: "bg_rooftop.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "「ここが私の好きな場所なんだ」と伝える",
            nextScene: "ending3"
        },
        {
            text: "静かに景色を眺める",
            nextScene: "ending4"
        }
    ]
};

// 他の第3層シーンも同様に作成...
const scene3C = {
    title: "助け合いの一歩",
    text: "あなたは感謝の気持ちを込めて教科書を受け取った。\n\n蓮「一緒に頑張ろう。困ったことがあったら、いつでも言ってね」\n\n彼の言葉に、あなたは少し勇気づけられた気がした。",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「蓮こそ、何か困ったことがあったら言ってね」",
            nextScene: "ending5"
        },
        {
            text: "「うん、ありがとう」と微笑む",
            nextScene: "ending6"
        }
    ]
};

const scene3D = {
    title: "一緒の時間",
    text: "「一緒に勉強するのはどう？」とあなたが提案すると、蓮は少し驚いた表情を見せた後、嬉しそうに笑った。\n\n蓮「いいね。図書館に行こうか」\n\n二人で図書館へ向かう道すがら、彼との会話が弾んだ。",
    bg: "bg_library.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "真剣に勉強に集中する",
            nextScene: "ending7"
        },
        {
            text: "勉強そっちのけで話に夢中になる",
            nextScene: "ending8"
        }
    ]
};

// 他の第3層シーンも続けて追加...
const scene3E = {
    title: "アドバイスを求めて",
    text: "「これからどうしたらいいと思う？」\n\n蓮は少し考えた後、「まずは一つずつ、小さなことから解決していくといいよ」と優しく語りかけた。\n\n蓮「俺も一緒に考えるから」\n\nその言葉に、暗かった気持ちに光が差し込んだような気がした。",
    bg: "bg_classroom.jpg",
    char: "ren_serious.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「一緒に考えてくれるの？」",
            nextScene: "ending9"
        },
        {
            text: "「まずは明日からできることを考えよう」",
            nextScene: "ending10"
        }
    ]
};

const scene3F = {
    title: "感謝の気持ち",
    text: "「聞いてくれてありがとう。少し気持ちが楽になったよ」\n\n蓮はあなたの言葉に安心したように微笑んだ。\n\n蓮「よかった。これからも何かあったら話してくれると嬉しいな」\n\n彼の笑顔に、あなたの心は暖かさで満たされた。",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「今日はありがとう」と笑顔で別れる",
            nextScene: "ending11"
        },
        {
            text: "「また明日ね」と約束する",
            nextScene: "ending12"
        }
    ]
};

// その他の第3層シーンも同様に...
const scene3G = {
    title: "最後のチャンス",
    text: "「ちょっと待って！」\n\n蓮は立ち止まり、振り返った。\n\n蓮「どうした？」\n\nあなたは心臓の鼓動を感じながら、言葉を探した。",
    bg: "bg_classroom.jpg",
    char: "ren_normal.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "「やっぱり話を聞いてほしい」",
            nextScene: "ending13"
        },
        {
            text: "「今度、一緒にどこかに行かない？」",
            nextScene: "ending14"
        }
    ]
};

const scene3H = {
    title: "見送る背中",
    text: "「またね」\n\nあなたは蓮の背中を見送った。彼が教室を出るとき、一瞬だけ振り返り微笑んだ気がした。\n\nふと、窓の外を見ると、校庭で部活動を始める彼の姿が見えた。",
    bg: "bg_window.jpg",
    char: "",
    name: "",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "明日、改めて話そうと決める",
            nextScene: "ending15"
        },
        {
            text: "このままでいいと思う",
            nextScene: "ending16"
        }
    ]
};

// その他のシーン3も同様に作成...
const scene3I = {
    title: "勉強の相談",
    text: "「うん、公式が覚えられなくて...」\n\n蓮は微笑むと、ノートを開いた。\n\n蓮「ここ見て。公式を覚えるコツがあるんだ」\n\n彼の説明はとても分かりやすく、あなたは少しずつ理解し始めた。",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "「すごい！よく分かった」",
            nextScene: "ending17"
        },
        {
            text: "「でも、まだここが分からないな...」",
            nextScene: "ending18"
        }
    ]
};

const scene3J = {
    title: "意外な一面",
    text: "「え？なんで知ってるの？」\n\n蓮は少し照れたように頬を掻いた。\n\n蓮「実は...前から君のこと、見てたんだ」\n\nその言葉に、あなたの胸はどきりとした。",
    bg: "bg_classroom.jpg",
    char: "ren_blush.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "「私のこと、気にかけてくれてたの？」",
            nextScene: "ending19"
        },
        {
            text: "「それって...どういう意味？」",
            nextScene: "ending20"
        }
    ]
};

// その他のシーン3も追加...
const scene3K = {
    title: "思いがけない贈り物",
    text: "「ありがとう」\n\n紙袋を開けると、小さな手作りのストラップが入っていた。\n\n蓮「文化祭の時に作ったんだ。気に入ってくれるといいな」\n\n丁寧に作られたそのストラップを見て、あなたは感動した。",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「大切にするね」と約束する",
            nextScene: "ending21"
        },
        {
            text: "「私も何かお返しがしたい」",
            nextScene: "ending22"
        }
    ]
};

const scene3L = {
    title: "驚きの瞬間",
    text: "「急に何？」\n\n蓮は少し緊張した表情で言った。\n\n蓮「ずっと渡そうと思ってたんだ。でも、タイミングがなくて...」\n\n彼の真剣な表情に、あなたは少し心を動かされた。",
    bg: "bg_classroom.jpg",
    char: "ren_serious.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "「ごめんね、ありがとう」と受け取る",
            nextScene: "ending23"
        },
        {
            text: "「どうしてそこまでしてくれるの？」",
            nextScene: "ending24"
        }
    ]
};

// エンディングシーン
const ending1 = {
    title: "心の絆",
    text: "「ありがとう、蓮」\n\nあなたは微笑んだ。握られた手から伝わる温もりが心地よかった。\n\n蓮「これからも一緒に頑張ろう。僕がずっとそばにいるから」\n\nその日から、あなたと蓮の関係は少しずつ特別なものに変わっていった。\n\n- ハッピーエンド -",
    bg: "bg_sunset.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：二人の新たな始まり",
            nextScene: null
        }
    ]
};

const ending2 = {
    title: "揺れる気持ち",
    text: "あなたは恥ずかしくなって手を引っ込めた。\n\n蓮「あ、ごめん...」\n\n二人の間に一瞬の沈黙が流れたが、すぐに蓮は明るい表情に戻った。\n\n蓮「でも、これからも友達として支えになれたら嬉しいな」\n\nその優しさに、あなたは友情以上の何かを感じていることに気づいた。\n\n- フレンドシップエンド -",
    bg: "bg_sunset.jpg",
    char: "ren_normal.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：心に残る友情",
            nextScene: null
        }
    ]
};

// 他のエンディングも同様に追加...
const ending3 = {
    title: "特別な場所",
    text: "「ここが私の好きな場所なんだ」\n\n蓮は夕焼けに染まる空を見上げながら微笑んだ。\n\n蓮「綺麗だね。君と一緒にいると、景色も違って見えるよ」\n\n二人は肩を並べて立ち、沈みゆく太陽を見つめた。\n\nこれから先も、この特別な瞬間を大切にしていこうと思った。\n\n- ロマンティックエンド -",
    bg: "bg_rooftop.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：夕焼けの約束",
            nextScene: null
        }
    ]
};

// 残りのエンディングも簡潔に...
const ending4 = {
    title: "静かな時間",
    text: "あなたは黙って景色を眺めていた。蓮も黙ったまま、あなたの横に立っている。\n\n言葉を交わさなくても、二人の間には不思議な絆が生まれているように感じた。\n\n蓮「たまには、こうして静かな時間も良いものだね」\n\nあなたは小さく頷き、この瞬間を心に刻んだ。\n\n- 静寂のエンド -",
    bg: "bg_rooftop.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：静かな絆",
            nextScene: null
        }
    ]
};

// 以下、他のエンディングも追加（簡略化）
const ending5 = {
    title: "お互いの支え",
    text: "「蓮こそ、何か困ったことがあったら言ってね」\n\n蓮は少し驚いた表情を見せた後、心から嬉しそうに笑った。\n\n蓮「ありがとう。そう言ってもらえると嬉しいよ」\n\nこうして二人は、お互いを支え合う関係へと一歩踏み出した。\n\n- 相互支援エンド -",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：お互いの支え",
            nextScene: null
        }
    ]
};

const ending6 = {
    title: "小さな感謝",
    text: "「うん、ありがとう」\n\nあなたは笑顔で答えた。蓮も優しく微笑み返す。\n\n蓮「じゃあ、またね」\n\n彼が去った後も、その温かい微笑みがあなたの心に残り続けた。\n\n小さな出来事だったが、これからの日々に希望が生まれた瞬間だった。\n\n- 日常の輝きエンド -",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：日常の中の特別な瞬間",
            nextScene: null
        }
    ]
};

// その他のエンディングも追加（省略）...
// エンディングシーン7～24は必要に応じて追加

const ending7 = {
    title: "勉強の成果",
    text: "あなたは蓮と一緒に真剣に勉強に取り組んだ。時折彼が分かりやすく解説してくれる。\n\n蓮「ここ、こうやって考えると簡単になるんだ」\n\n集中して取り組んだ結果、あなたは少しずつ理解を深めていった。\n\n翌日のテストでは、自信を持って問題に取り組むことができた。\n\n- 成長エンド -",
    bg: "bg_library.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：努力の先に",
            nextScene: null
        }
    ]
};

const ending8 = {
    title: "心の対話",
    text: "勉強そっちのけで、二人の会話は尽きなかった。\n\n蓮「こんなに話が合う人は初めてかも」\n\n図書館の閉館時間が近づき、気づけば外は暗くなっていた。\n\n蓮「また明日も一緒に...勉強しようか」\n\nその言葉に、あなたは心躍るのを感じた。\n\n- 親密度アップエンド -",
    bg: "bg_library_evening.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：特別な友情の始まり",
            nextScene: null
        }
    ]
};

const ending9 = {
    title: "共に歩む未来",
    text: "「一緒に考えてくれるの？」\n\nあなたの言葉に、蓮は優しく頷いた。\n\n蓮「もちろん。一人で悩むより、二人で考えた方がいいアイデアが浮かぶはずだから」\n\nその日から、二人は放課後に悩みについて話し合う時間を持つようになった。\n\n少しずつ、あなたの悩みは解決に向かい始めた。\n\n- 協力エンド -",
    bg: "bg_classroom_evening.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：二人三脚",
            nextScene: null
        }
    ]
};

const ending10 = {
    title: "一歩前進",
    text: "「まずは明日からできることを考えよう」\n\n積極的なあなたの姿勢に、蓮は感心したように微笑んだ。\n\n蓮「その意気だ。じゃあ、具体的なプランを立てよう」\n\n二人で丁寧に計画を立てていくうちに、あなたの心は前向きな気持ちで満たされていった。\n\n- 前進エンド -",
    bg: "bg_classroom_evening.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：新たな一歩",
            nextScene: null
        }
    ]
};

const ending11 = {
    title: "特別な一日",
    text: "「今日はありがとう」\n\nあなたは笑顔で蓮に告げた。彼も柔らかな表情で頷く。\n\n蓮「こちらこそ。話してくれて嬉しかったよ」\n\n教室を出る時、彼は少し照れくさそうに「また明日」と言った。\n\n今日という日が、二人の関係に小さな変化をもたらした瞬間だった。\n\n- 心の交流エンド -",
    bg: "bg_classroom_evening.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：新しい扉",
            nextScene: null
        }
    ]
};

const ending12 = {
    title: "明日への約束",
    text: "「また明日ね」\n\nその言葉に、蓮の目が少し輝いた。\n\n蓮「ああ、約束だよ」\n\n彼との約束を胸に、あなたは軽やかな足取りで帰路についた。\n\n明日が待ち遠しくてたまらない。そんな気持ちが胸いっぱいに広がっていた。\n\n- 期待エンド -",
    bg: "bg_corridor_evening.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：明日への期待",
            nextScene: null
        }
    ]
};

const ending13 = {
    title: "素直な気持ち",
    text: "「やっぱり話を聞いてほしい」\n\nあなたの言葉に、蓮は少し驚いた表情を見せた後、優しく微笑んだ。\n\n蓮「もちろん。部活はまた今度でいいよ」\n\n彼は部活の時間を犠牲にして、あなたの話に耳を傾けてくれた。\n\nその優しさに、あなたの心は温かな感情で満たされた。\n\n- 特別な時間エンド -",
    bg: "bg_classroom_evening.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：優先してくれた気持ち",
            nextScene: null
        }
    ]
};

const ending14 = {
    title: "思い切った一歩",
    text: "「今度、一緒にどこかに行かない？」\n\nあなたの思い切った提案に、蓮は一瞬驚いた表情を見せたが、すぐに嬉しそうに笑った。\n\n蓮「行きたいな。どこがいい？」\n\nあなたの心臓は高鳴り、頬が熱くなるのを感じた。\n\n勇気を出して踏み出した一歩が、新たな関係の始まりとなった。\n\n- デートプランエンド -",
    bg: "bg_classroom.jpg",
    char: "ren_blush.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：恋の予感",
            nextScene: null
        }
    ]
};

const ending15 = {
    title: "明日への決意",
    text: "あなたは蓮の背中を見送りながら、「明日こそ話そう」と心に決めた。\n\n窓からは、運動場で走る彼の姿が見える。\n\n風に揺れる髪、真剣な表情。\n\nあなたは胸に手を当て、明日の自分に勇気が出ることを願った。\n\n- 決意エンド -",
    bg: "bg_window_evening.jpg",
    char: "",
    name: "",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：明日への勇気",
            nextScene: null
        }
    ]
};

const ending16 = {
    title: "日常の風景",
    text: "あなたは「このままでいい」と感じた。\n\n窓越しに見える蓮の姿は、いつもの光景だ。\n\n特別なことはなくても、彼が近くにいることが、あなたにとっての日常の安らぎだった。\n\nいつか、もっと近づける日が来るかもしれない。そう思いながら、あなたは微笑んだ。\n\n- 穏やかな日常エンド -",
    bg: "bg_window_evening.jpg",
    char: "",
    name: "",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：静かな想い",
            nextScene: null
        }
    ]
};

const ending17 = {
    title: "学びの喜び",
    text: "「すごい！よく分かった」\n\nあなたの目が輝いているのを見て、蓮も嬉しそうに微笑んだ。\n\n蓮「君の理解力が高いからだよ。俺の説明なんて大したことないさ」\n\n謙遜する彼に、あなたは心から感謝した。\n\n翌日のテストでは、その成果を発揮することができた。\n\n- 成功体験エンド -",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "END：自信への一歩",
            nextScene: null
        }
    ]
};

const ending18 = {
    title: "根気強い教え",
    text: "「でも、まだここが分からないな...」\n\nあなたの言葉に、蓮は諦めることなく、さらに丁寧に説明を始めた。\n\n蓮「大丈夫、焦らなくていいんだ。一緒に理解していこう」\n\n彼の根気強さと優しさに、あなたは心を打たれた。\n\n繰り返し教えてくれる彼のおかげで、少しずつ理解できるようになっていった。\n\n- 忍耐と成長エンド -",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm1.mp3",
    choices: [
        {
            text: "END：共に成長する喜び",
            nextScene: null
        }
    ]
};

const ending19 = {
    title: "心の距離",
    text: "「私のこと、気にかけてくれてたの？」\n\nあなたの言葉に、蓮は少し恥ずかしそうに頬を赤らめた。\n\n蓮「うん...いつも君のことが気になってた」\n\nその正直な告白に、あなたの心はとめどなく高鳴った。\n\n二人の間に流れる空気が、少しずつ変わっていくのを感じた。\n\n- ロマンスの芽生えエンド -",
    bg: "bg_classroom_evening.jpg",
    char: "ren_blush.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：特別な感情",
            nextScene: null
        }
    ]
};

const ending20 = {
    title: "素直な告白",
    text: "「それって...どういう意味？」\n\nあなたの問いかけに、蓮は真剣な表情で答えた。\n\n蓮「好きだから...君のことをもっと知りたいと思ってた」\n\n予想外の告白に、あなたは言葉を失った。\n\n彼の真っ直ぐな気持ちが、あなたの心に深く響いた。\n\n- 告白エンド -",
    bg: "bg_classroom_evening.jpg",
    char: "ren_blush.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：想いの告白",
            nextScene: null
        }
    ]
};

const ending21 = {
    title: "大切な贈り物",
    text: "「大切にするね」\n\nあなたはストラップを大事そうに手に持った。\n\n蓮「本当に？良かった」\n\n彼の嬉しそうな笑顔を見て、あなたも自然と笑顔になった。\n\nこの小さなストラップが、二人の間の特別な絆の証となった。\n\n- プレゼントエンド -",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：心のお守り",
            nextScene: null
        }
    ]
};

const ending22 = {
    title: "贈り物の交換",
    text: "「私も何かお返しがしたい」\n\nあなたの言葉に、蓮は少し驚いた様子を見せた。\n\n蓮「そんな...気持ちだけで十分だよ」\n\nそれでも、あなたは彼への感謝の気持ちを形にしたいと思った。\n\n後日、あなたが手作りのお菓子を渡すと、彼は照れくさそうに、でも心から喜んでくれた。\n\n- お返しエンド -",
    bg: "bg_classroom.jpg",
    char: "ren_blush.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：心を込めた贈り物",
            nextScene: null
        }
    ]
};

const ending23 = {
    title: "素直な気持ち",
    text: "「ごめんね、ありがとう」\n\nあなたは素直に謝り、紙袋を受け取った。\n\n蓮「いいんだ。気に入ってくれると嬉しい」\n\n中に入っていたのは、小さな手作りのブックマーク。あなたが本を読むのが好きだと知っていたからこそのプレゼントだった。\n\nその気遣いに、あなたは心から感動した。\n\n- 思いやりエンド -",
    bg: "bg_classroom.jpg",
    char: "ren_smile.png",
    name: "蓮",
    bgm: "bgm2.mp3",
    choices: [
        {
            text: "END：優しさの記憶",
            nextScene: null
        }
    ]
};

const ending24 = {
    title: "隠された想い",
    text: "「どうしてそこまでしてくれるの？」\n\nあなたの率直な質問に、蓮は少し言葉に詰まった。\n\n蓮「それは...特別だから」\n\n彼の言葉は曖昧だったが、その目に宿る感情は明確だった。\n\nあなたは彼の気持ちを感じ取り、静かに微笑んだ。言葉にしなくても、二人の間には確かな絆が生まれていた。\n\n- 秘めた想いエンド -",
    bg: "bg_classroom_evening.jpg",
    char: "ren_serious.png",
    name: "蓮",
    bgm: "bgm3.mp3",
    choices: [
        {
            text: "END：言葉にならない感情",
            nextScene: null
        }
    ]
};

export default { 
    scene1, scene1A, scene1B, scene1C, 
    scene2A, scene2B, scene2C, scene2D, scene2E, scene2F,
    scene3A, scene3B, scene3C, scene3D, scene3E, scene3F, scene3G, scene3H, scene3I, scene3J, scene3K, scene3L,
    ending1, ending2, ending3, ending4, ending5, ending6, ending7, ending8, ending9, ending10,
    ending11, ending12, ending13, ending14, ending15, ending16, ending17, ending18, ending19, ending20,
    ending21, ending22, ending23, ending24
};
const SITE_MOVIES = [
    {
        "title": "最后的旗帜",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情、战争",
        "tags": "一战反思 撤侨行动 人性光辉",
        "url": "./movie-0001.html",
        "cover": "./1.jpg"
    },
    {
        "title": "绿箭侠第四季",
        "region": "美国",
        "type": "电视剧",
        "year": "2015",
        "genre": "动作",
        "tags": "DC漫画 超级英雄 黑暗",
        "url": "./movie-0002.html",
        "cover": "./2.jpg"
    },
    {
        "title": "白鼬",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪/黑色幽默",
        "tags": "杀手 宠物 反套路 复仇 冷幽默",
        "url": "./movie-0003.html",
        "cover": "./3.jpg"
    },
    {
        "title": "超越极速",
        "region": "中国香港",
        "type": "电影",
        "year": "2026",
        "genre": "动作、赛车、犯罪",
        "tags": "飙车 卧底 复仇 兄弟情 港味",
        "url": "./movie-0004.html",
        "cover": "./4.jpg"
    },
    {
        "title": "名侦探柯南国语版",
        "region": "日本",
        "type": "剧集",
        "year": "1996",
        "genre": "动画,悬疑,推理,犯罪",
        "tags": "国语配音 经典推理 童年回忆",
        "url": "./movie-0005.html",
        "cover": "./5.jpg"
    },
    {
        "title": "女司机",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,犯罪",
        "tags": "女性 公路 犯罪 现实主义",
        "url": "./movie-0006.html",
        "cover": "./6.jpg"
    },
    {
        "title": "印度强棒",
        "region": "印度",
        "type": "电影",
        "year": "2021",
        "genre": "剧情,运动",
        "tags": "印度 棒球 逆袭 热血",
        "url": "./movie-0007.html",
        "cover": "./7.jpg"
    },
    {
        "title": "婚事",
        "region": "印度",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/悬疑",
        "tags": "嫁妆 命案 循环 女性",
        "url": "./movie-0008.html",
        "cover": "./8.jpg"
    },
    {
        "title": "恐怖魔笛",
        "region": "德国/法国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/奇幻",
        "tags": "花衣魔笛手 童话改编 暗黑 老鼠 音波杀人",
        "url": "./movie-0009.html",
        "cover": "./9.jpg"
    },
    {
        "title": "舞向死亡的少女",
        "region": "韩国",
        "type": "电影",
        "year": "2021",
        "genre": "悬疑,惊悚,剧情",
        "tags": "芭蕾 复仇 病态美学 反转 女性",
        "url": "./movie-0010.html",
        "cover": "./10.jpg"
    },
    {
        "title": "边缘状态",
        "region": "韩国",
        "type": "电影",
        "year": "2021",
        "genre": "悬疑,犯罪,心理",
        "tags": "双相情感障碍 凶案 记忆碎片 反转",
        "url": "./movie-0011.html",
        "cover": "./11.jpg"
    },
    {
        "title": "驭风男孩",
        "region": "马拉维/英国",
        "type": "电影",
        "year": "2019",
        "genre": "传记/剧情",
        "tags": "真实改编 风力发电 非洲 教育改变命运 自强不息",
        "url": "./movie-0012.html",
        "cover": "./12.jpg"
    },
    {
        "title": "派出所的故事",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "单元剧/喜剧/现实主义",
        "tags": "民警 基层 生活百态 温情 人间烟火",
        "url": "./movie-0013.html",
        "cover": "./13.jpg"
    },
    {
        "title": "擂台",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,运动,动作",
        "tags": "摔跤 父子 底层 尊严",
        "url": "./movie-0014.html",
        "cover": "./14.jpg"
    },
    {
        "title": "心灵勇者",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,传记",
        "tags": "心理治疗 创伤 勇气 真实故事改编",
        "url": "./movie-0015.html",
        "cover": "./15.jpg"
    },
    {
        "title": "开膛街第五季",
        "region": "英国",
        "type": "剧集",
        "year": "2019",
        "genre": "悬疑/惊悚/犯罪",
        "tags": "开膛手杰克 白教堂 法医 维多利亚时代",
        "url": "./movie-0016.html",
        "cover": "./16.jpg"
    },
    {
        "title": "铁狮玉玲珑2",
        "region": "中国台湾",
        "type": "电影",
        "year": "2015",
        "genre": "喜剧/家庭",
        "tags": "庙会 醒狮团 传承 台语 热血",
        "url": "./movie-0017.html",
        "cover": "./17.jpg"
    },
    {
        "title": "圈子之德州风云",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情,犯罪,动作",
        "tags": "地下德州扑克 华人移民 FBI卧底 暴力美学",
        "url": "./movie-0018.html",
        "cover": "./18.jpg"
    },
    {
        "title": "鲛绡碧",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "古装奇幻",
        "tags": "深海鲛人 刺绣 以泪换珠",
        "url": "./movie-0019.html",
        "cover": "./19.jpg"
    },
    {
        "title": "海岸大捕怪国语",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧、恐怖、怪兽",
        "tags": "港式无厘头 海鲜怪物 环保讽刺 本土情怀 cult",
        "url": "./movie-0020.html",
        "cover": "./20.jpg"
    },
    {
        "title": "狂飙摩托",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "动作,犯罪",
        "tags": "飙车 卧底 热血 兄弟情",
        "url": "./movie-0021.html",
        "cover": "./21.jpg"
    },
    {
        "title": "古墓奇缘",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "冒险/动作/奇幻",
        "tags": "盗墓 机关 寻宝 历史",
        "url": "./movie-0022.html",
        "cover": "./22.jpg"
    },
    {
        "title": "穿网球鞋的电脑",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "科幻,冒险",
        "tags": "AI 运动 热血 治愈",
        "url": "./movie-0023.html",
        "cover": "./23.jpg"
    },
    {
        "title": "春心荡漾",
        "region": "美国",
        "type": "电影",
        "year": "2005",
        "genre": "喜剧,爱情",
        "tags": "姐弟恋 治疗师 都市爱情 擦边球",
        "url": "./movie-0024.html",
        "cover": "./24.jpg"
    },
    {
        "title": "蒸气室",
        "region": "日本",
        "type": "电影",
        "year": "2020",
        "genre": "悬疑/科幻",
        "tags": "密闭空间 时间循环 桑拿",
        "url": "./movie-0025.html",
        "cover": "./25.jpg"
    },
    {
        "title": "鳄鱼群",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,冒险",
        "tags": "自然灾难 鳄鱼 湿地 求生 动物袭击",
        "url": "./movie-0026.html",
        "cover": "./26.jpg"
    },
    {
        "title": "摇摆女孩",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "音乐、喜剧、励志",
        "tags": "爵士乐 少女 草台班子 青春 摇摆舞",
        "url": "./movie-0027.html",
        "cover": "./27.jpg"
    },
    {
        "title": "国王与我",
        "region": "泰国",
        "type": "电影",
        "year": "2025",
        "genre": "历史,剧情",
        "tags": "拉玛四世 安娜 权力博弈 文化冲突",
        "url": "./movie-0028.html",
        "cover": "./28.jpg"
    },
    {
        "title": "让我们堂堂正正结婚吧",
        "region": "韩国",
        "type": "剧集",
        "year": "2025",
        "genre": "喜剧/爱情",
        "tags": "契约婚姻 政治 搞笑",
        "url": "./movie-0029.html",
        "cover": "./29.jpg"
    },
    {
        "title": "恐吓包裹",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖/悬疑",
        "tags": "密室 快递 社会讽刺 变态杀手 反转",
        "url": "./movie-0030.html",
        "cover": "./30.jpg"
    },
    {
        "title": "喋血满洲",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "谍战/历史/悬疑",
        "tags": "伪满洲国 双面间谍 冷枪",
        "url": "./movie-0031.html",
        "cover": "./31.jpg"
    },
    {
        "title": "动态漫画·妖道至尊第三季",
        "region": "中国大陆",
        "type": "动态漫画",
        "year": "2025",
        "genre": "玄幻/热血",
        "tags": "修仙 逆袭 动态漫画",
        "url": "./movie-0032.html",
        "cover": "./32.jpg"
    },
    {
        "title": "最后机会大学:篮球第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "纪录片/体育",
        "tags": "热血 逆袭 NCAA",
        "url": "./movie-0033.html",
        "cover": "./33.jpg"
    },
    {
        "title": "犯罪现场:死亡不朽",
        "region": "美国",
        "type": "电影",
        "year": "2027",
        "genre": "悬疑/犯罪/惊悚",
        "tags": "法医 连环杀手 绝症 博物馆凶案",
        "url": "./movie-0034.html",
        "cover": "./34.jpg"
    },
    {
        "title": "边界",
        "region": "瑞典/挪威",
        "type": "电影",
        "year": "2018",
        "genre": "剧情,奇幻,爱情",
        "tags": "北欧 神话 丑陋美学 边缘人 奇幻爱情",
        "url": "./movie-0035.html",
        "cover": "./35.jpg"
    },
    {
        "title": "双子谜情",
        "region": "中国大陆/台湾",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/家庭",
        "tags": "双胞胎 身份互换 原生家庭 心理创伤 烧脑",
        "url": "./movie-0036.html",
        "cover": "./36.jpg"
    },
    {
        "title": "拳王之路",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/传记",
        "tags": "拳击 励志 真实改编",
        "url": "./movie-0037.html",
        "cover": "./37.jpg"
    },
    {
        "title": "亚斯小子",
        "region": "西班牙",
        "type": "电影",
        "year": "2015",
        "genre": "剧情/喜剧",
        "tags": "亚斯伯格 足球 兄弟情 治愈",
        "url": "./movie-0038.html",
        "cover": "./38.jpg"
    },
    {
        "title": "拉米第三季",
        "region": "美国",
        "type": "剧集",
        "year": "2022",
        "genre": "剧情/喜剧",
        "tags": "宗教反思 移民家庭 成长困境 黑色幽默 文化冲突",
        "url": "./movie-0039.html",
        "cover": "./39.jpg"
    },
    {
        "title": "纸上旅团",
        "region": "日本",
        "type": "动画电影",
        "year": "2023",
        "genre": "奇幻/冒险",
        "tags": "剪纸 战争 和平 治愈 手绘",
        "url": "./movie-0040.html",
        "cover": "./40.jpg"
    },
    {
        "title": "鱼跃奇缘",
        "region": "中国",
        "type": "电影",
        "year": "2026",
        "genre": "奇幻/爱情/运动",
        "tags": "花样游泳 性别偏见 逆袭",
        "url": "./movie-0041.html",
        "cover": "./41.jpg"
    },
    {
        "title": "玛丽亚的情人",
        "region": "法国",
        "type": "电影",
        "year": "2021",
        "genre": "剧情,爱情",
        "tags": "二战 战后创伤 畸恋 救赎",
        "url": "./movie-0042.html",
        "cover": "./42.jpg"
    },
    {
        "title": "中国的战争",
        "region": "中国大陆",
        "type": "电影",
        "year": "2027",
        "genre": "战争史诗",
        "tags": "古代战争 家国情怀 冷兵器 大场面",
        "url": "./movie-0043.html",
        "cover": "./43.jpg"
    },
    {
        "title": "胡桃钳与奇幻四国",
        "region": "美国/俄罗斯",
        "type": "电影",
        "year": "2018",
        "genre": "奇幻、冒险、家庭",
        "tags": "芭蕾 玩偶 平行世界 时钟 雪",
        "url": "./movie-0044.html",
        "cover": "./44.jpg"
    },
    {
        "title": "加布里埃尔",
        "region": "法国",
        "type": "电影",
        "year": "2005",
        "genre": "剧情/爱情/文艺",
        "tags": "婚姻危机 中产阶级 知识分子 话剧改编 不忠",
        "url": "./movie-0045.html",
        "cover": "./45.jpg"
    },
    {
        "title": "西关大屋",
        "region": "中国内地",
        "type": "剧集",
        "year": "2024",
        "genre": "家庭/年代",
        "tags": "广州 西关 家族 民国",
        "url": "./movie-0046.html",
        "cover": "./46.jpg"
    },
    {
        "title": "不明飞行物",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "科幻",
        "tags": "UFO 自媒体 农村 荒诞 信仰",
        "url": "./movie-0047.html",
        "cover": "./47.jpg"
    },
    {
        "title": "浴火野钻",
        "region": "南非",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,冒险",
        "tags": "血钻 女性复仇 荒野 实拍 求生",
        "url": "./movie-0048.html",
        "cover": "./48.jpg"
    },
    {
        "title": "您只爱一次",
        "region": "日本",
        "type": "电视剧",
        "year": "2019",
        "genre": "爱情,生活",
        "tags": "离婚 重启人生 大龄青年 居酒屋",
        "url": "./movie-0049.html",
        "cover": "./49.jpg"
    },
    {
        "title": "八五盛夏",
        "region": "法国",
        "type": "电影",
        "year": "2020",
        "genre": "爱情/青春/剧情",
        "tags": "法国 青春 死亡 夏天 浪漫",
        "url": "./movie-0050.html",
        "cover": "./50.jpg"
    },
    {
        "title": "时光大盗",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2018",
        "genre": "喜剧/科幻/犯罪",
        "tags": "时间循环 笨贼 黑色幽默 蝴蝶效应",
        "url": "./movie-0051.html",
        "cover": "./51.jpg"
    },
    {
        "title": "不寻常",
        "region": "英国",
        "type": "电影",
        "year": "2023",
        "genre": "心理惊悚",
        "tags": "人格分裂 密室 反转 人性 悬疑",
        "url": "./movie-0052.html",
        "cover": "./52.jpg"
    },
    {
        "title": "绕道",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/悬疑",
        "tags": "夜间驾驶 身份错位 心理博弈",
        "url": "./movie-0053.html",
        "cover": "./53.jpg"
    },
    {
        "title": "丁香花开的兽道",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻/剧情/治愈",
        "tags": "日式奇幻 物哀美学 人兽之间 乡野传说",
        "url": "./movie-0054.html",
        "cover": "./54.jpg"
    },
    {
        "title": "虎胆龙威5",
        "region": "美国",
        "type": "电影",
        "year": "2027",
        "genre": "动作惊悚",
        "tags": "硬汉 父子情 摩天大楼 反恐",
        "url": "./movie-0055.html",
        "cover": "./55.jpg"
    },
    {
        "title": "暂无出口",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚/灾难",
        "tags": "密闭空间 暴风雪 身份猜疑 极限逃生",
        "url": "./movie-0056.html",
        "cover": "./56.jpg"
    },
    {
        "title": "与我同眠",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "爱情/奇幻/悬疑",
        "tags": "灵魂互换 一夜情 记忆追寻 巴黎 宿命",
        "url": "./movie-0057.html",
        "cover": "./57.jpg"
    },
    {
        "title": "江湖英雄联盟之血瞳杀机",
        "region": "中国大陆",
        "type": "网络电影",
        "year": "2024",
        "genre": "动作,奇幻,武侠",
        "tags": "暗黑武侠 异能 联盟 特效爽片 悬案",
        "url": "./movie-0058.html",
        "cover": "./58.jpg"
    },
    {
        "title": "塞涅卡",
        "region": "英国/德国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/历史",
        "tags": "古罗马 哲学家 权谋",
        "url": "./movie-0059.html",
        "cover": "./59.jpg"
    },
    {
        "title": "绀田照的合法食谱",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情,犯罪,美食",
        "tags": "黑道 料理 反套路",
        "url": "./movie-0060.html",
        "cover": "./60.jpg"
    },
    {
        "title": "疯狂的心",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/音乐/爱情",
        "tags": "乡村音乐 浪子回头 中年危机 治愈 公路",
        "url": "./movie-0061.html",
        "cover": "./61.jpg"
    },
    {
        "title": "车场",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/犯罪",
        "tags": "出租车 夜班 连环案 密闭空间",
        "url": "./movie-0062.html",
        "cover": "./62.jpg"
    },
    {
        "title": "叹别离",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2018",
        "genre": "古装/爱情/权谋",
        "tags": "宫墙悲剧 替身文学 宿命",
        "url": "./movie-0063.html",
        "cover": "./63.jpg"
    },
    {
        "title": "黄金公主:敌中突破",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "动作、古装、战争、冒险",
        "tags": "女武士 护国 冷兵器 权游风",
        "url": "./movie-0064.html",
        "cover": "./64.jpg"
    },
    {
        "title": "多桑不在家",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/家庭",
        "tags": "父子情 缺席的父亲 成长",
        "url": "./movie-0065.html",
        "cover": "./65.jpg"
    },
    {
        "title": "亨利的罪行",
        "region": "美国",
        "type": "电影",
        "year": "2011",
        "genre": "剧情/犯罪",
        "tags": "赎罪 小人物 黑色电影 宿命",
        "url": "./movie-0066.html",
        "cover": "./66.jpg"
    },
    {
        "title": "月出之战",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "科幻/战争",
        "tags": "月球基地 资源争夺 硬核科幻",
        "url": "./movie-0067.html",
        "cover": "./67.jpg"
    },
    {
        "title": "顾问",
        "region": "英国",
        "type": "剧集",
        "year": "2024",
        "genre": "惊悚/职场",
        "tags": "人工智能 公司政治 心理操控",
        "url": "./movie-0068.html",
        "cover": "./68.jpg"
    },
    {
        "title": "白天的星星",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "家庭、科幻",
        "tags": "平行时空 父女 温情 治愈",
        "url": "./movie-0069.html",
        "cover": "./69.jpg"
    },
    {
        "title": "德尔苏·乌扎拉",
        "region": "俄罗斯/日本",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/冒险",
        "tags": "荒野生存 人与自然 跨文化友谊",
        "url": "./movie-0070.html",
        "cover": "./70.jpg"
    },
    {
        "title": "树海村",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,悬疑,民俗",
        "tags": "青木原 民俗恐怖 诅咒 村八分 氛围",
        "url": "./movie-0071.html",
        "cover": "./71.jpg"
    },
    {
        "title": "陈赓晋南大捷",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "战争、历史、传记",
        "tags": "陈赓 晋南战役 运动战 军事指挥 解放战争",
        "url": "./movie-0072.html",
        "cover": "./72.jpg"
    },
    {
        "title": "歌剧红伶",
        "region": "法国/意大利",
        "type": "电影",
        "year": "1981",
        "genre": "惊悚/音乐",
        "tags": "幕后黑手 录音带阴谋 巴黎歌剧院 声乐",
        "url": "./movie-0073.html",
        "cover": "./73.jpg"
    },
    {
        "title": "吉达",
        "region": "沙特阿拉伯/埃及",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/女性/公路",
        "tags": "朝觐 母女 禁忌 觉醒",
        "url": "./movie-0074.html",
        "cover": "./74.jpg"
    },
    {
        "title": "囧爸喜事2023",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,家庭",
        "tags": "身份错位 代际冲突 闹剧",
        "url": "./movie-0075.html",
        "cover": "./75.jpg"
    },
    {
        "title": "冰菓",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2026",
        "genre": "悬疑、青春、校园",
        "tags": "推理 日常之谜 社团 友情 成长",
        "url": "./movie-0076.html",
        "cover": "./76.jpg"
    },
    {
        "title": "说你爱我2020",
        "region": "美国",
        "type": "剧集",
        "year": "2020",
        "genre": "剧情、爱情、伦理",
        "tags": "婚姻咨询 亲密关系 后疫情时代 多线叙事",
        "url": "./movie-0077.html",
        "cover": "./77.jpg"
    },
    {
        "title": "星梦缘",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "青春/励志/歌舞",
        "tags": "偶像养成 练习生 选秀 梦想",
        "url": "./movie-0078.html",
        "cover": "./78.jpg"
    },
    {
        "title": "霸凌尸校",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,惊悚,校园",
        "tags": "丧尸 校园霸凌 复仇 血腥",
        "url": "./movie-0079.html",
        "cover": "./79.jpg"
    },
    {
        "title": "守夜",
        "region": "西班牙",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/悬疑",
        "tags": "密室惊悚 遗愿诡异 心理恐惧",
        "url": "./movie-0080.html",
        "cover": "./80.jpg"
    },
    {
        "title": "照片里的伴娘",
        "region": "韩国",
        "type": "电影",
        "year": "2022",
        "genre": "喜剧/爱情",
        "tags": "拼贴 谎言 婚礼 闺蜜 身份冒充",
        "url": "./movie-0081.html",
        "cover": "./81.jpg"
    },
    {
        "title": "李狗娃",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情",
        "tags": "留守儿童 乡村教师 方言电影 纪实风格",
        "url": "./movie-0082.html",
        "cover": "./82.jpg"
    },
    {
        "title": "格尔达",
        "region": "丹麦/瑞典",
        "type": "电影",
        "year": "2024",
        "genre": "剧情、奇幻、心理",
        "tags": "北欧冷感 精神分裂 雪地意象 母女关系",
        "url": "./movie-0083.html",
        "cover": "./83.jpg"
    },
    {
        "title": "佛地魔:传人的起源",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "奇幻、黑暗、剧情",
        "tags": "哈利波特宇宙 反派起源 黑魔法 悲剧",
        "url": "./movie-0084.html",
        "cover": "./84.jpg"
    },
    {
        "title": "寻枪",
        "region": "中国大陆",
        "type": "电影",
        "year": "2002",
        "genre": "犯罪悬疑",
        "tags": "黑色幽默 寻枪 小人物 方言",
        "url": "./movie-0085.html",
        "cover": "./85.jpg"
    },
    {
        "title": "罗宫春色",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "历史、爱情、宫廷",
        "tags": "古罗马 禁欲 权力 宗教",
        "url": "./movie-0086.html",
        "cover": "./86.jpg"
    },
    {
        "title": "冒牌大状审死官",
        "region": "中国香港",
        "type": "电影",
        "year": "1993",
        "genre": "喜剧、律政",
        "tags": "周星驰式 乌龙 公堂 反转 市井",
        "url": "./movie-0087.html",
        "cover": "./87.jpg"
    },
    {
        "title": "时空战场",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "动作,科幻,战争",
        "tags": "时间循环 特种兵 历史改写",
        "url": "./movie-0088.html",
        "cover": "./88.jpg"
    },
    {
        "title": "同谋",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪、悬疑、动作",
        "tags": "双雄 卧底 黑警 背叛 猜忌",
        "url": "./movie-0089.html",
        "cover": "./89.jpg"
    },
    {
        "title": "神探杀手夺命抢",
        "region": "中国香港",
        "type": "电影",
        "year": "1989",
        "genre": "犯罪/动作",
        "tags": "双雄 警匪互换 黑色幽默 追车枪战 卧底疑云",
        "url": "./movie-0090.html",
        "cover": "./90.jpg"
    },
    {
        "title": "阿贵槌你喔",
        "region": "中国台湾",
        "type": "电影/动画",
        "year": "2004",
        "genre": "动画/喜剧/家庭",
        "tags": "闽南语 网络 搞笑 乡土 童年",
        "url": "./movie-0091.html",
        "cover": "./91.jpg"
    },
    {
        "title": "归来的醉汉",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,喜剧,家庭",
        "tags": "治愈 酒精 废柴 重生",
        "url": "./movie-0092.html",
        "cover": "./92.jpg"
    },
    {
        "title": "鬼夫",
        "region": "泰国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/爱情",
        "tags": "冥婚 乡村诅咒 前世债",
        "url": "./movie-0093.html",
        "cover": "./93.jpg"
    },
    {
        "title": "新版天真有邪",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "爱情,悬疑",
        "tags": "替身 白月光 报复",
        "url": "./movie-0094.html",
        "cover": "./94.jpg"
    },
    {
        "title": "无目标地区",
        "region": "德国/波兰",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑、剧情、惊悚",
        "tags": "身份认同 边境地带 冷战遗产 心理迷失",
        "url": "./movie-0095.html",
        "cover": "./95.jpg"
    },
    {
        "title": "血色孤语",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "犯罪/心理/惊悚",
        "tags": "多重人格 连环杀手 警匪博弈 黑暗心理学 反转",
        "url": "./movie-0096.html",
        "cover": "./96.jpg"
    },
    {
        "title": "海星(电影)",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/家庭",
        "tags": "亲情 自闭症 治愈 海岸 成长",
        "url": "./movie-0097.html",
        "cover": "./97.jpg"
    },
    {
        "title": "爱在柏林漂流时",
        "region": "德国",
        "type": "电影",
        "year": "2019",
        "genre": "剧情/同性/文艺",
        "tags": "异乡人 同志 漂泊 一夜情",
        "url": "./movie-0098.html",
        "cover": "./98.jpg"
    },
    {
        "title": "圣诉",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑/宗教",
        "tags": "教会 神父 指控 罗生门 演技派",
        "url": "./movie-0099.html",
        "cover": "./99.jpg"
    },
    {
        "title": "午夜节拍",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "音乐/剧情",
        "tags": "嘻哈 底层 梦想 街区 师徒",
        "url": "./movie-0100.html",
        "cover": "./100.jpg"
    },
    {
        "title": "欢迎来到布达佩斯大饭店",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情,悬疑,年代",
        "tags": "韦斯·安德森式美学 多线叙事 饭店秘史 复古迷案",
        "url": "./movie-0101.html",
        "cover": "./101.jpg"
    },
    {
        "title": "绝战狼女",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作冒险",
        "tags": "东北密林 狼群养育 护林员 偷猎大战",
        "url": "./movie-0102.html",
        "cover": "./102.jpg"
    },
    {
        "title": "莫娣",
        "region": "加拿大",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,传记",
        "tags": "艺术家 关节炎 民间艺术 爱情",
        "url": "./movie-0103.html",
        "cover": "./103.jpg"
    },
    {
        "title": "该死的歌德",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/音乐/传记",
        "tags": "另类传记 摇滚诗人 历史解构 荒诞幽默",
        "url": "./movie-0104.html",
        "cover": "./104.jpg"
    },
    {
        "title": "虚颜",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2023",
        "genre": "爱情",
        "tags": "古装 替身 虐恋 唯美",
        "url": "./movie-0105.html",
        "cover": "./105.jpg"
    },
    {
        "title": "春之声",
        "region": "中国大陆",
        "type": "电影",
        "year": "2017",
        "genre": "音乐/剧情",
        "tags": "交响乐 治愈 聋哑人",
        "url": "./movie-0106.html",
        "cover": "./106.jpg"
    },
    {
        "title": "娘家母亲",
        "region": "韩国",
        "type": "电影",
        "year": "2010",
        "genre": "剧情,家庭",
        "tags": "母女 农村 催泪 牺牲",
        "url": "./movie-0107.html",
        "cover": "./107.jpg"
    },
    {
        "title": "魔龙传奇3:巫师的诅咒",
        "region": "美国",
        "type": "电影",
        "year": "2005",
        "genre": "奇幻,动作",
        "tags": "屠龙 巫师 续集 低魔世界",
        "url": "./movie-0108.html",
        "cover": "./108.jpg"
    },
    {
        "title": "阿嬷的小学堂",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,剧情,家庭",
        "tags": "老人扫盲 温暖治愈 乡村",
        "url": "./movie-0109.html",
        "cover": "./109.jpg"
    },
    {
        "title": "腥风怒吼3",
        "region": "美国",
        "type": "电影",
        "year": "1995",
        "genre": "恐怖,奇幻",
        "tags": "都市传说 镜子恶魔 血债血偿",
        "url": "./movie-0110.html",
        "cover": "./110.jpg"
    },
    {
        "title": "绝命空间",
        "region": "韩国",
        "type": "剧集",
        "year": "2026",
        "genre": "悬疑/惊悚",
        "tags": "密室逃脱 社会讽刺 生存游戏",
        "url": "./movie-0111.html",
        "cover": "./111.jpg"
    },
    {
        "title": "2024北京卫视跨年晚会",
        "region": "中国大陆",
        "type": "综艺/晚会",
        "year": "2024",
        "genre": "音乐/歌舞/综艺",
        "tags": "跨年 晚会 北京 群星 现场",
        "url": "./movie-0112.html",
        "cover": "./112.jpg"
    },
    {
        "title": "家有蛇仙美貌妻",
        "region": "中国大陆",
        "type": "微短剧",
        "year": "2024",
        "genre": "古装/奇幻/喜剧",
        "tags": "蛇精 反向玛丽苏 反套路",
        "url": "./movie-0113.html",
        "cover": "./113.jpg"
    },
    {
        "title": "假面骑士555",
        "region": "日本",
        "type": "剧集",
        "year": "2023",
        "genre": "科幻/动作/特摄",
        "tags": "假面骑士 智能手机 怪人 变身腰带 青春群像",
        "url": "./movie-0114.html",
        "cover": "./114.jpg"
    },
    {
        "title": "妙先生之火泽睽笑人传",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动画",
        "tags": "奇幻 武侠 国风 暗黑 治愈",
        "url": "./movie-0115.html",
        "cover": "./115.jpg"
    },
    {
        "title": "港媳嫁到",
        "region": "中国大陆/中国香港",
        "type": "剧集",
        "year": "2025",
        "genre": "家庭/喜剧",
        "tags": "香港媳妇 内地婆婆 文化差异 婚后生活 爆笑",
        "url": "./movie-0116.html",
        "cover": "./116.jpg"
    },
    {
        "title": "史酷比:僵尸岛历险记",
        "region": "美国",
        "type": "动画电影",
        "year": "2024",
        "genre": "喜剧/悬疑/冒险",
        "tags": "狗 解谜 丧尸 恶搞 合家欢",
        "url": "./movie-0117.html",
        "cover": "./117.jpg"
    },
    {
        "title": "亲属关系",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "家庭伦理",
        "tags": "血缘 秘密 身份认同 家族恩怨",
        "url": "./movie-0118.html",
        "cover": "./118.jpg"
    },
    {
        "title": "大帅传奇",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "历史/剧情",
        "tags": "军阀 乱世枭雄 传记改编 权力博弈",
        "url": "./movie-0119.html",
        "cover": "./119.jpg"
    },
    {
        "title": "忘不了农场",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2023",
        "genre": "真人秀,治愈,生活",
        "tags": "阿尔茨海默症 经营体验 祖孙情 慢生活",
        "url": "./movie-0120.html",
        "cover": "./120.jpg"
    },
    {
        "title": "完美嫌疑人",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2021",
        "genre": "犯罪,悬疑",
        "tags": "刑侦 高智商犯罪 心理战 国产剧",
        "url": "./movie-0121.html",
        "cover": "./121.jpg"
    },
    {
        "title": "痴凤啼痕",
        "region": "中国香港",
        "type": "电影",
        "year": "1995",
        "genre": "爱情,悲剧",
        "tags": "粤剧名伶 痴恋 毁容 复仇 旧社会",
        "url": "./movie-0122.html",
        "cover": "./122.jpg"
    },
    {
        "title": "身在其中",
        "region": "法国",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖/家庭",
        "tags": "极端暴力 孕妇 翻拍经典",
        "url": "./movie-0123.html",
        "cover": "./123.jpg"
    },
    {
        "title": "他是龙",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2015",
        "genre": "奇幻",
        "tags": "龙 人龙恋 唯美",
        "url": "./movie-0124.html",
        "cover": "./124.jpg"
    },
    {
        "title": "希腊假日",
        "region": "意大利/希腊",
        "type": "电影",
        "year": "2026",
        "genre": "爱情,喜剧,公路",
        "tags": "地中海 艳遇 自我寻找 遗产",
        "url": "./movie-0125.html",
        "cover": "./125.jpg"
    },
    {
        "title": "北欧人",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "动作,历史",
        "tags": "维京 复仇 史诗 莎士比亚 哈姆雷特",
        "url": "./movie-0126.html",
        "cover": "./126.jpg"
    },
    {
        "title": "孵魔",
        "region": "芬兰",
        "type": "电影",
        "year": "2022",
        "genre": "恐怖/奇幻",
        "tags": "身体恐怖 民俗 女性 成长 异化",
        "url": "./movie-0127.html",
        "cover": "./127.jpg"
    },
    {
        "title": "领航人",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑",
        "tags": "航班 失踪 飞行员 记忆 超自然",
        "url": "./movie-0128.html",
        "cover": "./128.jpg"
    },
    {
        "title": "甜蜜圈套",
        "region": "西班牙",
        "type": "电影",
        "year": "2023",
        "genre": "爱情/惊悚/悬疑",
        "tags": "骗局 情感 反转 西班牙 女性",
        "url": "./movie-0129.html",
        "cover": "./129.jpg"
    },
    {
        "title": "戴脚镣的女孩",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/犯罪",
        "tags": "电子镣铐 社会回归 母女 司法伦理",
        "url": "./movie-0130.html",
        "cover": "./130.jpg"
    },
    {
        "title": "十六歳战争",
        "region": "日本",
        "type": "动画剧集",
        "year": "2023",
        "genre": "科幻,青春,战争",
        "tags": "反乌托邦 少女与机甲 集体主义",
        "url": "./movie-0131.html",
        "cover": "./131.jpg"
    },
    {
        "title": "处女心声",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情、青春、女性",
        "tags": "女高中生 性观念 友谊 毕业旅行",
        "url": "./movie-0132.html",
        "cover": "./132.jpg"
    },
    {
        "title": "青春残爱物语",
        "region": "日本",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/爱情",
        "tags": "残酷青春 霸凌 纯爱 致郁",
        "url": "./movie-0133.html",
        "cover": "./133.jpg"
    },
    {
        "title": "情陷曼哈顿",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/剧情",
        "tags": "异国恋情 华尔街 艺术与金钱 中年危机",
        "url": "./movie-0134.html",
        "cover": "./134.jpg"
    },
    {
        "title": "惩淫红字",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/惊悚/宗教",
        "tags": "清教徒 网络审判 符号学 舆论暴力",
        "url": "./movie-0135.html",
        "cover": "./135.jpg"
    },
    {
        "title": "皇家酒店谋杀案",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪悬疑",
        "tags": "密室 暴风雪山庄 探案 英伦",
        "url": "./movie-0136.html",
        "cover": "./136.jpg"
    },
    {
        "title": "青春期3",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "青春、剧情",
        "tags": "高考 家庭 成长 现实主义 压抑",
        "url": "./movie-0137.html",
        "cover": "./137.jpg"
    },
    {
        "title": "职业特工队2",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/惊悚/冒险",
        "tags": "特工 高科技 面具 反转 摩托车追逐",
        "url": "./movie-0138.html",
        "cover": "./138.jpg"
    },
    {
        "title": "子承父孽",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,犯罪,家庭",
        "tags": "父子 遗产 黑幕 赎罪",
        "url": "./movie-0139.html",
        "cover": "./139.jpg"
    },
    {
        "title": "我们的歌",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "音乐/剧情",
        "tags": "民谣 乐队 北漂 梦想",
        "url": "./movie-0140.html",
        "cover": "./140.jpg"
    },
    {
        "title": "爱情专卖店",
        "region": "中国",
        "type": "剧集",
        "year": "2022",
        "genre": "爱情,奇幻,喜剧",
        "tags": "情感 交易 都市 单元剧 治愈",
        "url": "./movie-0141.html",
        "cover": "./141.jpg"
    },
    {
        "title": "防弹武僧",
        "region": "美国/加拿大",
        "type": "电影",
        "year": "2003",
        "genre": "动作,奇幻,冒险",
        "tags": "超级英雄 不死之身 东方元素 师徒传承",
        "url": "./movie-0142.html",
        "cover": "./142.jpg"
    },
    {
        "title": "票1986",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,家庭",
        "tags": "穿越 老物件 时代变迁 亲情",
        "url": "./movie-0143.html",
        "cover": "./143.jpg"
    },
    {
        "title": "金装大酒店",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,悬疑",
        "tags": "酒店 密室 全员恶人",
        "url": "./movie-0144.html",
        "cover": "./144.jpg"
    },
    {
        "title": "老虎崛起",
        "region": "印度",
        "type": "电影",
        "year": "2024",
        "genre": "动作,冒险,剧情",
        "tags": "老虎 保护 复仇 丛林 硬汉",
        "url": "./movie-0145.html",
        "cover": "./145.jpg"
    },
    {
        "title": "眠狂四郎恶女狩猎",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "动作/时代剧/惊悚",
        "tags": "剑戟片 复仇 女性反派 孤独剑客 暴力美学",
        "url": "./movie-0146.html",
        "cover": "./146.jpg"
    },
    {
        "title": "那时便值得去世",
        "region": "日本",
        "type": "电影",
        "year": "1971",
        "genre": "剧情,动作,犯罪",
        "tags": "黑帮 任侠 悲剧 昭和 复仇",
        "url": "./movie-0147.html",
        "cover": "./147.jpg"
    },
    {
        "title": "小镇幽浮",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/科幻",
        "tags": "假外星人 社区广播 荒诞温情",
        "url": "./movie-0148.html",
        "cover": "./148.jpg"
    },
    {
        "title": "四片羽毛",
        "region": "英国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/战争",
        "tags": "荣誉 背叛 救赎",
        "url": "./movie-0149.html",
        "cover": "./149.jpg"
    },
    {
        "title": "政治之爱",
        "region": "阿根廷",
        "type": "电影",
        "year": "2020",
        "genre": "爱情,政治",
        "tags": "左翼 禁忌恋 黑色幽默",
        "url": "./movie-0150.html",
        "cover": "./150.jpg"
    },
    {
        "title": "谁伴我一生",
        "region": "中国香港",
        "type": "电影",
        "year": "1991",
        "genre": "剧情家庭",
        "tags": "老年痴呆 父子情 夕阳红 香港变迁",
        "url": "./movie-0151.html",
        "cover": "./1.jpg"
    },
    {
        "title": "丧尸乐园2",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "喜剧,恐怖,动作",
        "tags": "丧尸 恶搞 B级片",
        "url": "./movie-0152.html",
        "cover": "./2.jpg"
    },
    {
        "title": "女孩青春纪事",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/青春",
        "tags": "成长阵痛 校园霸凌 女性友谊",
        "url": "./movie-0153.html",
        "cover": "./3.jpg"
    },
    {
        "title": "祸乱:地下秩序",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,动作,惊悚",
        "tags": "地下拳场 黑帮复仇 暴力美学",
        "url": "./movie-0154.html",
        "cover": "./4.jpg"
    },
    {
        "title": "暗恋99天粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2016",
        "genre": "爱情/喜剧",
        "tags": "办公室 倒计时 乌龙",
        "url": "./movie-0155.html",
        "cover": "./5.jpg"
    },
    {
        "title": "秋津温泉",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "爱情,剧情,文艺",
        "tags": "昭和怀旧 禁忌之恋 温泉 宿命感 错过",
        "url": "./movie-0156.html",
        "cover": "./6.jpg"
    },
    {
        "title": "谍海艳姝",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "谍战,悬疑,女性",
        "tags": "民国 双面间谍 旗袍 智斗 大女主",
        "url": "./movie-0157.html",
        "cover": "./7.jpg"
    },
    {
        "title": "李查王三世",
        "region": "英国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,历史,喜剧",
        "tags": "王室恶搞 身份错位 黑色幽默",
        "url": "./movie-0158.html",
        "cover": "./8.jpg"
    },
    {
        "title": "爱玩怪兽",
        "region": "日本",
        "type": "电视剧",
        "year": "2023",
        "genre": "喜剧/奇幻/职场",
        "tags": "怪兽 办公室 日常",
        "url": "./movie-0159.html",
        "cover": "./9.jpg"
    },
    {
        "title": "仿生人间",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "科幻,悬疑,伦理",
        "tags": "人工智能 人性 身份认同 未来",
        "url": "./movie-0160.html",
        "cover": "./10.jpg"
    },
    {
        "title": "诗意中国第六季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "纪录片,历史,文化",
        "tags": "诗词 地理 人文 风光 教育",
        "url": "./movie-0161.html",
        "cover": "./11.jpg"
    },
    {
        "title": "一封明信片",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,悬疑,温情",
        "tags": "明信片 时空错位 治愈 小镇",
        "url": "./movie-0162.html",
        "cover": "./12.jpg"
    },
    {
        "title": "斗罗大陆2绝世唐门第三季",
        "region": "中国大陆",
        "type": "动画",
        "year": "2025",
        "genre": "玄幻、热血、冒险",
        "tags": "武魂觉醒 极限单兵 史莱克七怪",
        "url": "./movie-0163.html",
        "cover": "./13.jpg"
    },
    {
        "title": "西部雌雄客",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "西部/剧情",
        "tags": "女枪手 复仇 姐妹 荒野",
        "url": "./movie-0164.html",
        "cover": "./14.jpg"
    },
    {
        "title": "禁恋",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/剧情/伦理",
        "tags": "继父女恋 道德边界 情感依赖 社会禁忌",
        "url": "./movie-0165.html",
        "cover": "./15.jpg"
    },
    {
        "title": "总是有穷人",
        "region": "法国",
        "type": "电影",
        "year": "2014",
        "genre": "剧情/社会",
        "tags": "贫富差距 黑色幽默 人性 讽刺",
        "url": "./movie-0166.html",
        "cover": "./16.jpg"
    },
    {
        "title": "吉姆·加菲根:宇宙先生",
        "region": "美国",
        "type": "综艺/脱口秀",
        "year": "2023",
        "genre": "喜剧、脱口秀",
        "tags": "单口喜剧 物理 日常 冷幽默 哲学",
        "url": "./movie-0167.html",
        "cover": "./17.jpg"
    },
    {
        "title": "飙城",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "动作/犯罪",
        "tags": "飙车 黑帮 复仇 兄弟情",
        "url": "./movie-0168.html",
        "cover": "./18.jpg"
    },
    {
        "title": "万尼亚舅舅",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2010",
        "genre": "剧情,文学改编",
        "tags": "契诃夫 乡村悲喜剧 中年危机",
        "url": "./movie-0169.html",
        "cover": "./19.jpg"
    },
    {
        "title": "诱惑游戏",
        "region": "韩国",
        "type": "电视剧",
        "year": "2024",
        "genre": "悬疑,爱情,惊悚",
        "tags": "复仇 财阀 假戏真做 反转",
        "url": "./movie-0170.html",
        "cover": "./20.jpg"
    },
    {
        "title": "单眼皮",
        "region": "中国大陆",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/家庭",
        "tags": "单眼皮 少女成长 家庭关系 自我认同",
        "url": "./movie-0171.html",
        "cover": "./21.jpg"
    },
    {
        "title": "女人,有时是男人",
        "region": "韩国",
        "type": "电影",
        "year": "2009",
        "genre": "剧情/喜剧/性别",
        "tags": "性别认同 家庭 传统与现代 黑色幽默",
        "url": "./movie-0172.html",
        "cover": "./22.jpg"
    },
    {
        "title": "故乡稗史",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/历史",
        "tags": "农村 口述史 黑白 三代人 纪实风格",
        "url": "./movie-0173.html",
        "cover": "./23.jpg"
    },
    {
        "title": "赤裸特工粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "动作,惊悚",
        "tags": "杀手 女特工 暴力美学 堕落 复仇",
        "url": "./movie-0174.html",
        "cover": "./24.jpg"
    },
    {
        "title": "小亲亲",
        "region": "中国香港",
        "type": "电影",
        "year": "2022",
        "genre": "爱情/喜剧/都市",
        "tags": "电台 冤家 旧物 港风 嘴硬",
        "url": "./movie-0175.html",
        "cover": "./25.jpg"
    },
    {
        "title": "咎爱心风暴",
        "region": "日本",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情,悬疑",
        "tags": "复仇 心理 禁忌",
        "url": "./movie-0176.html",
        "cover": "./26.jpg"
    },
    {
        "title": "自由之丘",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/战争",
        "tags": "二战 集中营 人性 音乐 救赎",
        "url": "./movie-0177.html",
        "cover": "./27.jpg"
    },
    {
        "title": "人体雕塑",
        "region": "法国/德国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/艺术/情色",
        "tags": "艺术创作 身体政治 亲密关系",
        "url": "./movie-0178.html",
        "cover": "./28.jpg"
    },
    {
        "title": "穿越者之异梦空间",
        "region": "中国内地",
        "type": "电视剧",
        "year": "2025",
        "genre": "科幻,爱情",
        "tags": "穿越 梦境 多重宇宙 宿命",
        "url": "./movie-0179.html",
        "cover": "./29.jpg"
    },
    {
        "title": "明月守护者",
        "region": "法国",
        "type": "电影",
        "year": "2018",
        "genre": "动画,奇幻,冒险",
        "tags": "月亮传说 光影对决 唯美画风",
        "url": "./movie-0180.html",
        "cover": "./30.jpg"
    },
    {
        "title": "玛洛谋杀俱乐部第二季",
        "region": "英国",
        "type": "剧集",
        "year": "2025",
        "genre": "犯罪,悬疑,喜剧",
        "tags": "女性 探案 英剧 小镇",
        "url": "./movie-0181.html",
        "cover": "./31.jpg"
    },
    {
        "title": "血色玫瑰",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "犯罪,悬疑,惊悚",
        "tags": "连环杀手 花卉隐喻 双女主 罪案侧写",
        "url": "./movie-0182.html",
        "cover": "./32.jpg"
    },
    {
        "title": "地球之盐",
        "region": "巴西",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/历史",
        "tags": "纪实影像 环境破坏 救赎 真实人物改编",
        "url": "./movie-0183.html",
        "cover": "./33.jpg"
    },
    {
        "title": "六十岁未婚国语",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/喜剧/家庭",
        "tags": "女性 老年 独立 婚姻 社会话题",
        "url": "./movie-0184.html",
        "cover": "./34.jpg"
    },
    {
        "title": "土狗的陆地头等舱",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,公路",
        "tags": "宠物 自驾游 治愈 乡土 黑色幽默",
        "url": "./movie-0185.html",
        "cover": "./35.jpg"
    },
    {
        "title": "玛丽安",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,恐怖,悬疑",
        "tags": "诅咒继承 海边小镇 女巫传说 身份错位",
        "url": "./movie-0186.html",
        "cover": "./36.jpg"
    },
    {
        "title": "成形",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,奇幻,悬疑",
        "tags": "雕塑 艺术 身份认同 身体恐怖 心理",
        "url": "./movie-0187.html",
        "cover": "./37.jpg"
    },
    {
        "title": "洪熙官之少林五祖",
        "region": "中国香港",
        "type": "电影",
        "year": "2026",
        "genre": "动作武侠",
        "tags": "少林 反清复明 硬核功夫 师徒情",
        "url": "./movie-0188.html",
        "cover": "./38.jpg"
    },
    {
        "title": "脏话蓝调",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "音乐/喜剧/剧情",
        "tags": "爵士乐 语言治疗 口吃 中年危机",
        "url": "./movie-0189.html",
        "cover": "./39.jpg"
    },
    {
        "title": "冬天不冷",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "剧情,家庭,生活",
        "tags": "养老 代际冲突 温情",
        "url": "./movie-0190.html",
        "cover": "./40.jpg"
    },
    {
        "title": "梅朵与月光",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/文艺",
        "tags": "西藏 支教 心灵救赎 女性",
        "url": "./movie-0191.html",
        "cover": "./41.jpg"
    },
    {
        "title": "女人的陷阱",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/犯罪/剧情",
        "tags": "女性复仇 设局 心理战 多重反转",
        "url": "./movie-0192.html",
        "cover": "./42.jpg"
    },
    {
        "title": "美国广场",
        "region": "美国",
        "type": "剧集",
        "year": "2022",
        "genre": "政治悬疑",
        "tags": "市政 腐败 记者调查 权力游戏 群像",
        "url": "./movie-0193.html",
        "cover": "./43.jpg"
    },
    {
        "title": "沙漠活宝",
        "region": "印度",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧/冒险",
        "tags": "公路电影 寻宝 废柴联盟 沙漠风情 印度式开挂",
        "url": "./movie-0194.html",
        "cover": "./44.jpg"
    },
    {
        "title": "二十",
        "region": "韩国",
        "type": "电影",
        "year": "2015",
        "genre": "喜剧,青春,爱情",
        "tags": "二十岁 三个死党 求职 初恋 酒后真言",
        "url": "./movie-0195.html",
        "cover": "./45.jpg"
    },
    {
        "title": "威尼斯计划",
        "region": "意大利/美国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,惊悚",
        "tags": "威尼斯 假面舞会 连环杀手 艺术犯罪",
        "url": "./movie-0196.html",
        "cover": "./46.jpg"
    },
    {
        "title": "宝贝星球",
        "region": "美国",
        "type": "电影",
        "year": "2008",
        "genre": "动画,科幻,家庭",
        "tags": "外星人 萌宠 环保 星际冒险 治愈系",
        "url": "./movie-0197.html",
        "cover": "./47.jpg"
    },
    {
        "title": "不哭妈妈",
        "region": "韩国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,家庭,犯罪",
        "tags": "母爱复仇 弱势群体 社会现实",
        "url": "./movie-0198.html",
        "cover": "./48.jpg"
    },
    {
        "title": "北部城市",
        "region": "英国",
        "type": "电视剧",
        "year": "2019",
        "genre": "剧情/犯罪/社会",
        "tags": "英国北部 小镇 毒品 家族恩怨 阶层",
        "url": "./movie-0199.html",
        "cover": "./49.jpg"
    },
    {
        "title": "黛绿年华",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "青春怀旧",
        "tags": "60年代 旗袍 师生恋 移民潮",
        "url": "./movie-0200.html",
        "cover": "./50.jpg"
    },
    {
        "title": "武侠",
        "region": "中国大陆/中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "武侠/动作/悬疑",
        "tags": "硬核武学 清末乱世 身份谜团 拳拳到肉",
        "url": "./movie-0201.html",
        "cover": "./51.jpg"
    },
    {
        "title": "蓝衣魔鬼",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "犯罪,黑色电影,剧情",
        "tags": "1940年代 黑人侦探 种族歧视 蛇蝎美人 复古质感",
        "url": "./movie-0202.html",
        "cover": "./52.jpg"
    },
    {
        "title": "香火2003",
        "region": "中国大陆",
        "type": "电影",
        "year": "2003",
        "genre": "剧情",
        "tags": "农村 信仰 黑色幽默 生存",
        "url": "./movie-0203.html",
        "cover": "./53.jpg"
    },
    {
        "title": "魔鬼名校",
        "region": "中国香港",
        "type": "电影",
        "year": "1988",
        "genre": "恐怖,惊悚,校园",
        "tags": "港式邪典 女校怪谈 降头 伦理",
        "url": "./movie-0204.html",
        "cover": "./54.jpg"
    },
    {
        "title": "黑车玄疑",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "悬疑/犯罪",
        "tags": "网约车 都市传说 多重反转",
        "url": "./movie-0205.html",
        "cover": "./55.jpg"
    },
    {
        "title": "无处可逃",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "动作,惊悚",
        "tags": "封闭空间 反转 生存 犯罪",
        "url": "./movie-0206.html",
        "cover": "./56.jpg"
    },
    {
        "title": "玻璃圈风云",
        "region": "美国",
        "type": "电影",
        "year": "1992",
        "genre": "剧情,犯罪",
        "tags": "华尔街 内幕交易 黑色电影 骗局 年代感",
        "url": "./movie-0207.html",
        "cover": "./57.jpg"
    },
    {
        "title": "枕边杀机",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/悬疑/犯罪",
        "tags": "婚姻 精神控制 反转 心理战",
        "url": "./movie-0208.html",
        "cover": "./58.jpg"
    },
    {
        "title": "网络迷宫",
        "region": "日本",
        "type": "动画电影",
        "year": "2023",
        "genre": "科幻,心理,冒险",
        "tags": "意识上传 互联网具现化 防火墙怪兽 失踪人口 像素风格",
        "url": "./movie-0209.html",
        "cover": "./59.jpg"
    },
    {
        "title": "缉毒警",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "动作、犯罪、剧情",
        "tags": "卧底 边境毒战 兄弟反目 牺牲",
        "url": "./movie-0210.html",
        "cover": "./60.jpg"
    },
    {
        "title": "警察故事3:超级警察",
        "region": "中国香港",
        "type": "电影",
        "year": "1992",
        "genre": "动作/犯罪/喜剧",
        "tags": "成龙 特技 枪战 卧底 国际贩毒",
        "url": "./movie-0211.html",
        "cover": "./61.jpg"
    },
    {
        "title": "莉亚的7重人生",
        "region": "法国",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情,科幻,悬疑",
        "tags": "多重人格 犯罪心理 逆时间 拼图叙事",
        "url": "./movie-0212.html",
        "cover": "./62.jpg"
    },
    {
        "title": "灵异航班",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/悬疑",
        "tags": "高空密室 循环叙事 哀伤恐怖",
        "url": "./movie-0213.html",
        "cover": "./63.jpg"
    },
    {
        "title": "高纬度战栗",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "悬疑,刑侦",
        "tags": "边境 卧底 黑手党 极昼",
        "url": "./movie-0214.html",
        "cover": "./64.jpg"
    },
    {
        "title": "227",
        "region": "美国",
        "type": "电视剧",
        "year": "1985",
        "genre": "喜剧/家庭/生活",
        "tags": "情景喜剧 邻里故事 黑人家庭 80年代 生活喜剧",
        "url": "./movie-0215.html",
        "cover": "./65.jpg"
    },
    {
        "title": "臭小子与美丽世界",
        "region": "日本",
        "type": "电影",
        "year": "2021",
        "genre": "剧情",
        "tags": "公路 成长 治愈 青春",
        "url": "./movie-0216.html",
        "cover": "./66.jpg"
    },
    {
        "title": "延禧攻略番外篇之金枝玉叶",
        "region": "中国",
        "type": "网络剧",
        "year": "2026",
        "genre": "古装/宫斗",
        "tags": "下一代恩怨 和亲公主 令妃之女 越南制作 权谋",
        "url": "./movie-0217.html",
        "cover": "./67.jpg"
    },
    {
        "title": "在地球染血2",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "动作,科幻",
        "tags": "血腥 机甲 末日 复仇",
        "url": "./movie-0218.html",
        "cover": "./68.jpg"
    },
    {
        "title": "金刚经",
        "region": "中国大陆",
        "type": "电影",
        "year": "2012",
        "genre": "剧情/短片/悬疑",
        "tags": "作者电影 文艺 罪案 轮回 方言",
        "url": "./movie-0219.html",
        "cover": "./69.jpg"
    },
    {
        "title": "逆天至尊",
        "region": "中国大陆",
        "type": "动漫",
        "year": "2024",
        "genre": "玄幻,热血,战斗",
        "tags": "重生 废柴逆袭 东方玄幻",
        "url": "./movie-0220.html",
        "cover": "./70.jpg"
    },
    {
        "title": "黄河英雄",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "历史、战争、动作",
        "tags": "抗战 黄河 游击战 兄弟情 悲壮",
        "url": "./movie-0221.html",
        "cover": "./71.jpg"
    },
    {
        "title": "彩云",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "爱情/奇幻",
        "tags": "穿越 港风 怀旧 遗憾",
        "url": "./movie-0222.html",
        "cover": "./72.jpg"
    },
    {
        "title": "残酷",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,惊悚",
        "tags": "社会批判 职场 复仇 女性",
        "url": "./movie-0223.html",
        "cover": "./73.jpg"
    },
    {
        "title": "桑巴尔普里纺织工",
        "region": "印度",
        "type": "电影",
        "year": "2027",
        "genre": "剧情,历史,传记",
        "tags": "手工艺 殖民抗争 非遗传承",
        "url": "./movie-0224.html",
        "cover": "./74.jpg"
    },
    {
        "title": "我所有的孩子",
        "region": "美国",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情,家庭",
        "tags": "代孕 遗产纠纷 黑帮 身份认同 群像",
        "url": "./movie-0225.html",
        "cover": "./75.jpg"
    },
    {
        "title": "残屋尸骸",
        "region": "美国",
        "type": "电影",
        "year": "2015",
        "genre": "恐怖,惊悚",
        "tags": "凶宅 地下室 遗骨 诅咒 家族秘密",
        "url": "./movie-0226.html",
        "cover": "./76.jpg"
    },
    {
        "title": "恐怖蜡像馆",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/惊悚",
        "tags": "蜡像 小镇传说 身体恐怖 密室",
        "url": "./movie-0227.html",
        "cover": "./77.jpg"
    },
    {
        "title": "归零",
        "region": "美国",
        "type": "剧集",
        "year": "2023",
        "genre": "科幻/悬疑",
        "tags": "时间循环 记忆重置 反套路 量子物理 非线性叙事",
        "url": "./movie-0228.html",
        "cover": "./78.jpg"
    },
    {
        "title": "修女有枪",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/犯罪/喜剧",
        "tags": "黑色幽默 女权 修道院 枪战",
        "url": "./movie-0229.html",
        "cover": "./79.jpg"
    },
    {
        "title": "浪客剑心最终章人诛篇",
        "region": "日本",
        "type": "电影",
        "year": "2021",
        "genre": "动作,历史,剧情",
        "tags": "漫改 剑戟片 幕末 复仇 高燃打斗",
        "url": "./movie-0230.html",
        "cover": "./80.jpg"
    },
    {
        "title": "天赐的声音第三季",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2022",
        "genre": "音乐,真人秀",
        "tags": "翻唱 乐评人争议 胡彦斌 张韶涵",
        "url": "./movie-0231.html",
        "cover": "./81.jpg"
    },
    {
        "title": "战地钟声",
        "region": "美国/西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "战争/爱情/历史",
        "tags": "西班牙内战 海明威改编 爆破手",
        "url": "./movie-0232.html",
        "cover": "./82.jpg"
    },
    {
        "title": "狩猎者:凛冬之战",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作/奇幻",
        "tags": "怪兽 废土 女性战士 史诗",
        "url": "./movie-0233.html",
        "cover": "./83.jpg"
    },
    {
        "title": "我所看到的都是你",
        "region": "韩国",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑,爱情,科幻",
        "tags": "视觉移植 畸恋 替身虐恋",
        "url": "./movie-0234.html",
        "cover": "./84.jpg"
    },
    {
        "title": "武士的家用账",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/家庭/历史",
        "tags": "江户时代 账房先生 武士道",
        "url": "./movie-0235.html",
        "cover": "./85.jpg"
    },
    {
        "title": "从地心窜出3",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻/惊悚",
        "tags": "巨兽 矿井 生存 变异生物",
        "url": "./movie-0236.html",
        "cover": "./86.jpg"
    },
    {
        "title": "嫁个老公过日子",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2015",
        "genre": "家庭/喜剧/爱情",
        "tags": "北京 台湾 婆媳 传统小吃",
        "url": "./movie-0237.html",
        "cover": "./87.jpg"
    },
    {
        "title": "十条命国语",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "动画,奇幻,家庭",
        "tags": "猫 转世 成长 亲情 治愈",
        "url": "./movie-0238.html",
        "cover": "./88.jpg"
    },
    {
        "title": "科搜研之女第23季",
        "region": "日本",
        "type": "剧集",
        "year": "2023",
        "genre": "刑侦科学",
        "tags": "法医 女性视角 科搜研 现场还原 长寿剧",
        "url": "./movie-0239.html",
        "cover": "./89.jpg"
    },
    {
        "title": "运囚生死斗",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2019",
        "genre": "动作/惊悚",
        "tags": "囚车 变异 封闭空间 生存",
        "url": "./movie-0240.html",
        "cover": "./90.jpg"
    },
    {
        "title": "史酷比:第十三幽灵的诅咒",
        "region": "美国",
        "type": "动画电影",
        "year": "2019",
        "genre": "动画,喜剧,悬疑",
        "tags": "史酷比 幽灵 揭秘 童年向",
        "url": "./movie-0241.html",
        "cover": "./91.jpg"
    },
    {
        "title": "陶瓷",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/家庭",
        "tags": "匠人精神 母女和解 非遗传承",
        "url": "./movie-0242.html",
        "cover": "./92.jpg"
    },
    {
        "title": "吃鸟瘾",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/恐怖",
        "tags": "心理 疾病 象征",
        "url": "./movie-0243.html",
        "cover": "./93.jpg"
    },
    {
        "title": "信是有缘粤语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2018",
        "genre": "爱情/奇幻/年代",
        "tags": "信件 穿越时空 命运 粤语",
        "url": "./movie-0244.html",
        "cover": "./94.jpg"
    },
    {
        "title": "安娜情欲史",
        "region": "丹麦/法国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/爱情",
        "tags": "女性视角 性别权力 情欲觉醒",
        "url": "./movie-0245.html",
        "cover": "./95.jpg"
    },
    {
        "title": "突然死亡",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作,惊悚",
        "tags": "密室 致命游戏 高官 政治惊悚 拳拳到肉",
        "url": "./movie-0246.html",
        "cover": "./96.jpg"
    },
    {
        "title": "美国派9",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧/青春",
        "tags": "性喜剧 经典续集 新一代",
        "url": "./movie-0247.html",
        "cover": "./97.jpg"
    },
    {
        "title": "云中阴影",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "动作、恐怖、战争",
        "tags": "二战 怪物 B-17轰炸机 女飞行员",
        "url": "./movie-0248.html",
        "cover": "./98.jpg"
    },
    {
        "title": "星游记之风暴法米拉2",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "动画/冒险",
        "tags": "热血 宇宙冒险 续作 国漫",
        "url": "./movie-0249.html",
        "cover": "./99.jpg"
    },
    {
        "title": "淡蓝琥珀",
        "region": "中国大陆",
        "type": "电影",
        "year": "2018",
        "genre": "剧情,悬疑,文艺",
        "tags": "女性 物证 执念 都市",
        "url": "./movie-0250.html",
        "cover": "./100.jpg"
    },
    {
        "title": "丹青小姐",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "古装/爱情/悬疑",
        "tags": "国画 宅斗 替身 虐恋",
        "url": "./movie-0251.html",
        "cover": "./101.jpg"
    },
    {
        "title": "白烂贱客",
        "region": "美国",
        "type": "电影",
        "year": "2001",
        "genre": "喜剧",
        "tags": "嘴炮 无厘头 迷影文化 好莱坞讽刺 低俗恶搞",
        "url": "./movie-0252.html",
        "cover": "./102.jpg"
    },
    {
        "title": "下流人生",
        "region": "中国香港",
        "type": "电影",
        "year": "2021",
        "genre": "犯罪,剧情",
        "tags": "底层 写实 人性",
        "url": "./movie-0253.html",
        "cover": "./103.jpg"
    },
    {
        "title": "鳄鱼邓迪在洛杉矶",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,动作",
        "tags": "鳄鱼 洛杉矶 文化冲突 冒险 搞笑",
        "url": "./movie-0254.html",
        "cover": "./104.jpg"
    },
    {
        "title": "刚果惊魂",
        "region": "美国",
        "type": "电影",
        "year": "1995",
        "genre": "动作,冒险,科幻",
        "tags": "丛林 猩猩 钻石 探险",
        "url": "./movie-0255.html",
        "cover": "./105.jpg"
    },
    {
        "title": "抗敌英雄",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "战争,动作",
        "tags": "二战 狙击手 兄弟情 复仇",
        "url": "./movie-0256.html",
        "cover": "./106.jpg"
    },
    {
        "title": "特拉·威利:未知星球",
        "region": "法国",
        "type": "电影",
        "year": "2019",
        "genre": "动画,科幻",
        "tags": "冒险 儿童 太空",
        "url": "./movie-0257.html",
        "cover": "./107.jpg"
    },
    {
        "title": "离乡人",
        "region": "意大利",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/移民",
        "tags": "北非移民 西西里岛 父子 身份认同",
        "url": "./movie-0258.html",
        "cover": "./108.jpg"
    },
    {
        "title": "午夜废墟",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖,灵异",
        "tags": "鬼屋 直播 诅咒 伪纪录片",
        "url": "./movie-0259.html",
        "cover": "./109.jpg"
    },
    {
        "title": "狂蟒之灾4",
        "region": "美国",
        "type": "电影",
        "year": "2009",
        "genre": "动作/恐怖",
        "tags": "巨蛇 实验室 丛林 基因变异",
        "url": "./movie-0260.html",
        "cover": "./110.jpg"
    },
    {
        "title": "十四孤儿闯江湖",
        "region": "中国香港",
        "type": "电影",
        "year": "1989",
        "genre": "剧情/动作",
        "tags": "江湖 兄弟情 义气 老港片",
        "url": "./movie-0261.html",
        "cover": "./111.jpg"
    },
    {
        "title": "大王龙",
        "region": "中国",
        "type": "动画电影",
        "year": "2025",
        "genre": "动画,冒险,家庭",
        "tags": "恐龙 父子情 成长 国漫",
        "url": "./movie-0262.html",
        "cover": "./112.jpg"
    },
    {
        "title": "狂野非洲",
        "region": "美国/南非",
        "type": "电影",
        "year": "2025",
        "genre": "纪录片,冒险",
        "tags": "大自然 动物世界 震撼画面 环保 IMAX",
        "url": "./movie-0263.html",
        "cover": "./113.jpg"
    },
    {
        "title": "假面复仇",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/犯罪",
        "tags": "面具 直播 私刑",
        "url": "./movie-0264.html",
        "cover": "./114.jpg"
    },
    {
        "title": "班战斯的海盗",
        "region": "英国",
        "type": "电影",
        "year": "2016",
        "genre": "冒险,喜剧,奇幻",
        "tags": "海盗 诅咒 寻宝 摇滚 骷髅",
        "url": "./movie-0265.html",
        "cover": "./115.jpg"
    },
    {
        "title": "战国妖狐救世姐弟篇",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "奇幻/战斗/历史",
        "tags": "战国时代 人妖共存 姐弟情深 救世使命 热血战斗",
        "url": "./movie-0266.html",
        "cover": "./116.jpg"
    },
    {
        "title": "西部联盟",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻,西部",
        "tags": "蒸汽朋克 赏金猎人 人工智能 牛仔",
        "url": "./movie-0267.html",
        "cover": "./117.jpg"
    },
    {
        "title": "雾夜情杀案",
        "region": "中国台湾",
        "type": "电影",
        "year": "2026",
        "genre": "悬疑、犯罪、惊悚",
        "tags": "本格推理 暴风雪山庄 全员恶人 多次反转",
        "url": "./movie-0268.html",
        "cover": "./118.jpg"
    },
    {
        "title": "不眠神话",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻/惊悚",
        "tags": "失眠 实验药物 阴谋论 心理惊悚",
        "url": "./movie-0269.html",
        "cover": "./119.jpg"
    },
    {
        "title": "龙之心4:心火之战",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻/动作/冒险",
        "tags": "屠龙者 龙族内战 火焰魔法",
        "url": "./movie-0270.html",
        "cover": "./120.jpg"
    },
    {
        "title": "命运拳台",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "科幻、动作、竞技",
        "tags": "拳击 AI 人生重置",
        "url": "./movie-0271.html",
        "cover": "./121.jpg"
    },
    {
        "title": "近战法师",
        "region": "中国大陆",
        "type": "网络剧",
        "year": "2023",
        "genre": "动作/奇幻/喜剧",
        "tags": "游戏穿越 法师肉搏 反套路 爽剧 轻喜",
        "url": "./movie-0272.html",
        "cover": "./122.jpg"
    },
    {
        "title": "耀眼的日子",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/家庭",
        "tags": "催泪 父女 临终 治愈 平凡",
        "url": "./movie-0273.html",
        "cover": "./123.jpg"
    },
    {
        "title": "情深爱更深",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,剧情",
        "tags": "虐恋 救赎 失忆",
        "url": "./movie-0274.html",
        "cover": "./124.jpg"
    },
    {
        "title": "小镇警官",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "刑侦/悬疑",
        "tags": "小镇 连环案 警察 人情社会 秘密",
        "url": "./movie-0275.html",
        "cover": "./125.jpg"
    },
    {
        "title": "间谍亚契第六季",
        "region": "美国",
        "type": "TV 动画",
        "year": "2025",
        "genre": "喜剧/动作/间谍",
        "tags": "成人动画 嘴炮 无厘头 特工恶搞",
        "url": "./movie-0276.html",
        "cover": "./126.jpg"
    },
    {
        "title": "第七层楼的诡异",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,悬疑",
        "tags": "密室 公寓 灵异 反转 都市怪谈",
        "url": "./movie-0277.html",
        "cover": "./127.jpg"
    },
    {
        "title": "雨果的冒险",
        "region": "法国",
        "type": "电影",
        "year": "2011",
        "genre": "冒险",
        "tags": "蒸汽朋克 孤儿 机械人偶 火车站 遗产",
        "url": "./movie-0278.html",
        "cover": "./128.jpg"
    },
    {
        "title": "爱的一课",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2026",
        "genre": "剧情,教育,家庭",
        "tags": "单亲爸爸 特殊儿童 理解",
        "url": "./movie-0279.html",
        "cover": "./129.jpg"
    },
    {
        "title": "爱情与信仰之第三者",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/同性",
        "tags": "禁忌之恋 宗教冲突 社会写实",
        "url": "./movie-0280.html",
        "cover": "./130.jpg"
    },
    {
        "title": "陆小凤传奇之血衣之谜",
        "region": "中国",
        "type": "电影",
        "year": "2015",
        "genre": "武侠/悬疑",
        "tags": "古龙 破案 密室 江湖恩怨",
        "url": "./movie-0281.html",
        "cover": "./131.jpg"
    },
    {
        "title": "惊奇队长",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/科幻/超级英雄",
        "tags": "漫威 宇宙 女性英雄 能量操控",
        "url": "./movie-0282.html",
        "cover": "./132.jpg"
    },
    {
        "title": "打黑风暴",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2010",
        "genre": "刑侦,悬疑,动作",
        "tags": "扫黑 卧底 真实案件改编",
        "url": "./movie-0283.html",
        "cover": "./133.jpg"
    },
    {
        "title": "福岛50英雄",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/灾难/纪实",
        "tags": "311地震 核泄漏 底层英雄 群像",
        "url": "./movie-0284.html",
        "cover": "./134.jpg"
    },
    {
        "title": "婚礼进行曲",
        "region": "意大利",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧/爱情",
        "tags": "讽刺 婚前焦虑 闹剧 多重反转",
        "url": "./movie-0285.html",
        "cover": "./135.jpg"
    },
    {
        "title": "人肉鼠餐",
        "region": "香港",
        "type": "电影",
        "year": "1988",
        "genre": "恐怖",
        "tags": "剥削 变异 社会批判 恶心 Cult",
        "url": "./movie-0286.html",
        "cover": "./136.jpg"
    },
    {
        "title": "愿望树粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "2015",
        "genre": "爱情,奇幻",
        "tags": "港产片 许愿 穿越 温情",
        "url": "./movie-0287.html",
        "cover": "./137.jpg"
    },
    {
        "title": "匿名者2011",
        "region": "德国/英国",
        "type": "电影",
        "year": "2011",
        "genre": "悬疑,惊悚",
        "tags": "黑客 暗网 社会运动 维基解密 政治黑幕",
        "url": "./movie-0288.html",
        "cover": "./138.jpg"
    },
    {
        "title": "娘家的故事4",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2022",
        "genre": "家庭,伦理",
        "tags": "家族纷争 母女和解 遗产阴谋",
        "url": "./movie-0289.html",
        "cover": "./139.jpg"
    },
    {
        "title": "幸福保卫战",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2013",
        "genre": "剧情/家庭/喜剧",
        "tags": "中年危机 婚姻保卫 现实题材 轻喜剧",
        "url": "./movie-0290.html",
        "cover": "./140.jpg"
    },
    {
        "title": "百万金臂",
        "region": "美国",
        "type": "电影",
        "year": "2014",
        "genre": "运动",
        "tags": "棒球 真实改编 励志",
        "url": "./movie-0291.html",
        "cover": "./141.jpg"
    },
    {
        "title": "黑死性高潮",
        "region": "德国",
        "type": "电影",
        "year": "2017",
        "genre": "剧情,恐怖,历史",
        "tags": "中世纪 黑死病 邪教 癫狂",
        "url": "./movie-0292.html",
        "cover": "./142.jpg"
    },
    {
        "title": "夜梦效应",
        "region": "美国/加拿大",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/悬疑/心理",
        "tags": "梦境 集体幻觉 记忆植入 阴谋论",
        "url": "./movie-0293.html",
        "cover": "./143.jpg"
    },
    {
        "title": "九尾妖狐之血泪",
        "region": "韩国",
        "type": "电影",
        "year": "2020",
        "genre": "奇幻、古装、爱情、动作",
        "tags": "九尾狐 千年爱恋 宿命悲剧 朝鲜王朝 女性复仇",
        "url": "./movie-0294.html",
        "cover": "./144.jpg"
    },
    {
        "title": "加点浪漫",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "爱情/奇幻",
        "tags": "餐厅 味觉 情绪",
        "url": "./movie-0295.html",
        "cover": "./145.jpg"
    },
    {
        "title": "瑞秋要出嫁",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "家庭喜剧",
        "tags": "婚礼 姐妹 家族秘密 混乱 和解",
        "url": "./movie-0296.html",
        "cover": "./146.jpg"
    },
    {
        "title": "因为有你",
        "region": "中国",
        "type": "电影",
        "year": "2021",
        "genre": "爱情/剧情",
        "tags": "治愈 小镇爱情 双向救赎",
        "url": "./movie-0297.html",
        "cover": "./147.jpg"
    },
    {
        "title": "野兽的赫雷德罗斯",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "历史剧情",
        "tags": "中世纪 北欧传说 弑君者 王权斗争",
        "url": "./movie-0298.html",
        "cover": "./148.jpg"
    },
    {
        "title": "卡门回家",
        "region": "西班牙",
        "type": "电影",
        "year": "2024",
        "genre": "剧情、悬疑",
        "tags": "返乡 身份认同 女性 乡村 记忆谜团",
        "url": "./movie-0299.html",
        "cover": "./149.jpg"
    },
    {
        "title": "棋子",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "悬疑,犯罪,心理",
        "tags": "象棋 连环杀手 高智商犯罪 猫鼠游戏 反转",
        "url": "./movie-0300.html",
        "cover": "./150.jpg"
    },
    {
        "title": "超感应频率",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2020",
        "genre": "科幻/悬疑",
        "tags": "脑电波 杀人频率 集体幻觉 电台 双时间线",
        "url": "./movie-0301.html",
        "cover": "./1.jpg"
    },
    {
        "title": "自由的代价",
        "region": "美国/中东",
        "type": "电影",
        "year": "2026",
        "genre": "战争、剧情、惊悚",
        "tags": "狙击手 道德困境 反战 救赎",
        "url": "./movie-0302.html",
        "cover": "./2.jpg"
    },
    {
        "title": "非常警事",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2012",
        "genre": "剧情/悬疑/刑侦",
        "tags": "重案组 单元剧 心理侧写 国产刑侦 真实改编",
        "url": "./movie-0303.html",
        "cover": "./3.jpg"
    },
    {
        "title": "彼时生命",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,家庭",
        "tags": "临终关怀 治愈 死亡教育 冷门职业 自我救赎",
        "url": "./movie-0304.html",
        "cover": "./4.jpg"
    },
    {
        "title": "灵与肉",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/奇幻",
        "tags": "灵魂互换 婚姻危机 黑色幽默 身体喜剧",
        "url": "./movie-0305.html",
        "cover": "./5.jpg"
    },
    {
        "title": "黑艳凤",
        "region": "中国内地",
        "type": "电视剧",
        "year": "2026",
        "genre": "悬疑/犯罪/年代",
        "tags": "民国 复仇 京剧 连环命案",
        "url": "./movie-0306.html",
        "cover": "./6.jpg"
    },
    {
        "title": "美国恐怖故事第四季",
        "region": "美国",
        "type": "电视剧",
        "year": "2023",
        "genre": "恐怖,惊悚,奇幻",
        "tags": "怪胎秀 邪教 身体恐怖 复古美学",
        "url": "./movie-0307.html",
        "cover": "./7.jpg"
    },
    {
        "title": "邪恶国度",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/惊悚",
        "tags": "邪教 密室逃脱 心理恐怖 反转",
        "url": "./movie-0308.html",
        "cover": "./8.jpg"
    },
    {
        "title": "第7度感应",
        "region": "中国香港",
        "type": "电影",
        "year": "2018",
        "genre": "科幻,惊悚",
        "tags": "超能力 连环杀手 预知未来 牺牲 悬疑",
        "url": "./movie-0309.html",
        "cover": "./9.jpg"
    },
    {
        "title": "让女孩轻松一下",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/青春",
        "tags": "女性友谊 反差萌 高考",
        "url": "./movie-0310.html",
        "cover": "./10.jpg"
    },
    {
        "title": "废柴老爸",
        "region": "中国香港",
        "type": "电影",
        "year": "2021",
        "genre": "喜剧,家庭,奇幻",
        "tags": "身份互换 亲情 搞笑 成长",
        "url": "./movie-0311.html",
        "cover": "./11.jpg"
    },
    {
        "title": "两支箭·石器时代的侦探",
        "region": "日本",
        "type": "TV Series",
        "year": "2024",
        "genre": "悬疑/冒险/历史",
        "tags": "原始侦探 部落冲突 推理 冷兵器",
        "url": "./movie-0312.html",
        "cover": "./12.jpg"
    },
    {
        "title": "印度城市",
        "region": "印度",
        "type": "电影",
        "year": "2025",
        "genre": "现实主义,剧情",
        "tags": "贫民窟 梦想 板球 阶级",
        "url": "./movie-0313.html",
        "cover": "./13.jpg"
    },
    {
        "title": "热砂中的坦克军团",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2024",
        "genre": "战争,动作,历史",
        "tags": "坦克战 沙漠 二战 硬核 热血",
        "url": "./movie-0314.html",
        "cover": "./14.jpg"
    },
    {
        "title": "一座岛的永恒",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2019",
        "genre": "剧情/奇幻/哲学",
        "tags": "孤岛 时间静止 哲思 孤独 生命意义",
        "url": "./movie-0315.html",
        "cover": "./15.jpg"
    },
    {
        "title": "后人",
        "region": "美国",
        "type": "电视剧",
        "year": "2026",
        "genre": "科幻/家庭",
        "tags": "基因编辑 百年家族 伦理争议 永生计划 人性拷问",
        "url": "./movie-0316.html",
        "cover": "./16.jpg"
    },
    {
        "title": "战地巫师",
        "region": "柬埔寨/法国",
        "type": "电影",
        "year": "2012",
        "genre": "剧情,战争",
        "tags": "柬埔寨 红色高棉 灵性 女性",
        "url": "./movie-0317.html",
        "cover": "./17.jpg"
    },
    {
        "title": "预言",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑/科幻/惊悚",
        "tags": "时间循环 社会派科幻 手机诅咒 都市传说",
        "url": "./movie-0318.html",
        "cover": "./18.jpg"
    },
    {
        "title": "爱在惜别时",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/爱情",
        "tags": "重逢 遗憾 中式情感 时间跨度 家庭牵绊",
        "url": "./movie-0319.html",
        "cover": "./19.jpg"
    },
    {
        "title": "想爱趁现在",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,剧情",
        "tags": "绝症 旅行 遗愿清单 同志",
        "url": "./movie-0320.html",
        "cover": "./20.jpg"
    },
    {
        "title": "康纳一家第七季",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧、家庭、生活",
        "tags": "蓝领家庭 情景喜剧 伊利诺伊州 生活琐事 代际冲突",
        "url": "./movie-0321.html",
        "cover": "./21.jpg"
    },
    {
        "title": "暗芝居第三季",
        "region": "日本",
        "type": "动画剧集",
        "year": "2025",
        "genre": "恐怖,怪谈",
        "tags": "都市传说 短篇集 纸芝居 夏天",
        "url": "./movie-0322.html",
        "cover": "./22.jpg"
    },
    {
        "title": "绝境求生:冰峰奇迹",
        "region": "西班牙",
        "type": "电影",
        "year": "2024",
        "genre": "冒险/传记/灾难",
        "tags": "登山 空难 自救 真实改编",
        "url": "./movie-0323.html",
        "cover": "./23.jpg"
    },
    {
        "title": "异形2",
        "region": "美国",
        "type": "电影",
        "year": "1986",
        "genre": "动作,科幻,恐怖",
        "tags": "太空 续集 女性英雄 詹姆斯·卡梅隆",
        "url": "./movie-0324.html",
        "cover": "./24.jpg"
    },
    {
        "title": "进京城",
        "region": "中国",
        "type": "电影",
        "year": "2023",
        "genre": "历史,剧情",
        "tags": "京剧 动荡年代 家族",
        "url": "./movie-0325.html",
        "cover": "./25.jpg"
    },
    {
        "title": "陈翔六点半之重楼别",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/戏曲/剧情",
        "tags": "滇剧 草台班子 中年逆袭",
        "url": "./movie-0326.html",
        "cover": "./26.jpg"
    },
    {
        "title": "古堡",
        "region": "英国",
        "type": "电影",
        "year": "1977",
        "genre": "恐怖/悬疑",
        "tags": "哥特 遗产 诅咒 孤岛 复古",
        "url": "./movie-0327.html",
        "cover": "./27.jpg"
    },
    {
        "title": "蓝衣士兵",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/历史",
        "tags": "抗战 医务兵 女性 人性",
        "url": "./movie-0328.html",
        "cover": "./28.jpg"
    },
    {
        "title": "来找我",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "悬疑/惊悚",
        "tags": "密室 心理游戏 直播 反转",
        "url": "./movie-0329.html",
        "cover": "./29.jpg"
    },
    {
        "title": "她们的故事",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,家庭",
        "tags": "女性群像 计划生育 三代和解",
        "url": "./movie-0330.html",
        "cover": "./30.jpg"
    },
    {
        "title": "无息之处",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "悬疑惊悚",
        "tags": "都市传说 风水 密室逃脱",
        "url": "./movie-0331.html",
        "cover": "./31.jpg"
    },
    {
        "title": "被遗忘的人",
        "region": "德国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,悬疑",
        "tags": "身份迷失 社会福利系统 孤独 寻找 冷峻",
        "url": "./movie-0332.html",
        "cover": "./32.jpg"
    },
    {
        "title": "战争安魂曲",
        "region": "德国/法国",
        "type": "电影",
        "year": "2028",
        "genre": "战争/音乐/奇幻",
        "tags": "一战 合唱团 亡灵之音",
        "url": "./movie-0333.html",
        "cover": "./33.jpg"
    },
    {
        "title": "大红狗克里弗",
        "region": "美国",
        "type": "电影",
        "year": "2021",
        "genre": "家庭奇幻",
        "tags": "巨型宠物 萌宠喜剧 成长寓言 城市冒险",
        "url": "./movie-0334.html",
        "cover": "./34.jpg"
    },
    {
        "title": "西伯利亚和他",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2019",
        "genre": "剧情,同性,悬疑",
        "tags": "西伯利亚 军人 禁忌之恋 寒冬 心理",
        "url": "./movie-0335.html",
        "cover": "./35.jpg"
    },
    {
        "title": "123度谋杀案",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/犯罪",
        "tags": "数学 现场温度 完美犯罪 教授 体温谋杀",
        "url": "./movie-0336.html",
        "cover": "./36.jpg"
    },
    {
        "title": "警中青春",
        "region": "日本",
        "type": "剧集",
        "year": "1986",
        "genre": "剧情,青春,警匪",
        "tags": "昭和 警察学校 热血 晨间剧",
        "url": "./movie-0337.html",
        "cover": "./37.jpg"
    },
    {
        "title": "中国好声音2022",
        "region": "中国大陆",
        "type": "综艺/音乐",
        "year": "2022",
        "genre": "音乐/真人秀/选秀",
        "tags": "导师混战 原创赛道 草根逆袭 情怀杀",
        "url": "./movie-0338.html",
        "cover": "./38.jpg"
    },
    {
        "title": "独臂刀客/断臂刀国语",
        "region": "中国香港",
        "type": "电影",
        "year": "1971",
        "genre": "动作/武侠",
        "tags": "断臂复仇 独臂刀法 邵氏经典",
        "url": "./movie-0339.html",
        "cover": "./39.jpg"
    },
    {
        "title": "弗雷德电影版",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/动画/家庭",
        "tags": "蠢萌 日常冒险 话痨主角 治愈",
        "url": "./movie-0340.html",
        "cover": "./40.jpg"
    },
    {
        "title": "史上最强弟子",
        "region": "日本",
        "type": "动画剧集",
        "year": "2026",
        "genre": "动作,喜剧,校园",
        "tags": "热血 武痴 菜鸟逆袭 格斗技 搞笑日常",
        "url": "./movie-0341.html",
        "cover": "./41.jpg"
    },
    {
        "title": "曼德拉",
        "region": "南非",
        "type": "电视剧",
        "year": "2022",
        "genre": "传记,历史",
        "tags": "种族隔离 领袖 抗争 和平",
        "url": "./movie-0342.html",
        "cover": "./42.jpg"
    },
    {
        "title": "我是卢武铉",
        "region": "韩国",
        "type": "纪录片",
        "year": "2024",
        "genre": "传记,历史",
        "tags": "政治人物 民众记忆 理想主义 韩国近代史",
        "url": "./movie-0343.html",
        "cover": "./43.jpg"
    },
    {
        "title": "吉姆·加菲根:喜剧怪兽",
        "region": "美国",
        "type": "综艺/脱口秀",
        "year": "2026",
        "genre": "单口喜剧/奇幻",
        "tags": "实验喜剧 互动特辑 观众选择 AI生成",
        "url": "./movie-0344.html",
        "cover": "./44.jpg"
    },
    {
        "title": "出发",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/公路/青春",
        "tags": "毕业旅行 和解 乡村支教 极简主义",
        "url": "./movie-0345.html",
        "cover": "./45.jpg"
    },
    {
        "title": "心竞技",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "青春,竞技,剧情",
        "tags": "电竞 心理学 战队 热血",
        "url": "./movie-0346.html",
        "cover": "./46.jpg"
    },
    {
        "title": "依巴拉度时间",
        "region": "日本",
        "type": "电影/艺术片",
        "year": "2026",
        "genre": "奇幻/治愈/实验",
        "tags": "时间静止 梦幻乌托邦 宫泽贤治风",
        "url": "./movie-0347.html",
        "cover": "./47.jpg"
    },
    {
        "title": "鹰峰同学请穿上衣服",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧,校园,奇幻",
        "tags": "青春 反套路 羞耻PLAY 超能力 漫改",
        "url": "./movie-0348.html",
        "cover": "./48.jpg"
    },
    {
        "title": "我走我路",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/公路",
        "tags": "徒步 自我救赎 女性成长 荒野",
        "url": "./movie-0349.html",
        "cover": "./49.jpg"
    },
    {
        "title": "谱写明日的照相馆",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,奇幻",
        "tags": "治愈 时间旅行 胶片 亲情",
        "url": "./movie-0350.html",
        "cover": "./50.jpg"
    },
    {
        "title": "他们她们",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2026",
        "genre": "爱情,剧情,多元性别",
        "tags": "LGBTQ+ 群像 都市 自我认同",
        "url": "./movie-0351.html",
        "cover": "./51.jpg"
    },
    {
        "title": "杏运",
        "region": "中国大陆",
        "type": "电影",
        "year": "2018",
        "genre": "剧情/家庭/励志",
        "tags": "失独家庭 代际和解 乡村扶贫 杏树隐喻",
        "url": "./movie-0352.html",
        "cover": "./52.jpg"
    },
    {
        "title": "琉璃奇缘",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,奇幻,剧情",
        "tags": "玻璃工艺 时空交错 治愈 匠人精神 纯爱",
        "url": "./movie-0353.html",
        "cover": "./53.jpg"
    },
    {
        "title": "睡觉的顽皮豹",
        "region": "日本",
        "type": "动画剧集",
        "year": "2016",
        "genre": "喜剧/儿童",
        "tags": "粉红豹衍生 无对白 萌系 日常",
        "url": "./movie-0354.html",
        "cover": "./54.jpg"
    },
    {
        "title": "生活大爆炸第七季",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "喜剧科幻",
        "tags": "宅男 量子物理 太空旅行 老夫老妻",
        "url": "./movie-0355.html",
        "cover": "./55.jpg"
    },
    {
        "title": "系统逼我做皇后第五季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2027",
        "genre": "古装/奇幻/爱情",
        "tags": "穿越系统 宫斗逆袭 女帝养成",
        "url": "./movie-0356.html",
        "cover": "./56.jpg"
    },
    {
        "title": "烈女雪沉冤",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "古装,悬疑,犯罪",
        "tags": "古代断案 女性复仇 公案剧 案中案 侠义精神",
        "url": "./movie-0357.html",
        "cover": "./57.jpg"
    },
    {
        "title": "硅谷第五季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "喜剧,剧情",
        "tags": "科技创业 黑色幽默 AI 办公室政治 群像",
        "url": "./movie-0358.html",
        "cover": "./58.jpg"
    },
    {
        "title": "小夜莺",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "动画/家庭",
        "tags": "童话质感 音乐治愈 自闭症 祖孙情",
        "url": "./movie-0359.html",
        "cover": "./59.jpg"
    },
    {
        "title": "凪的新生活",
        "region": "日本",
        "type": "电视剧",
        "year": "2023",
        "genre": "剧情,生活",
        "tags": "重启人生 社交恐惧 治愈系",
        "url": "./movie-0360.html",
        "cover": "./60.jpg"
    },
    {
        "title": "天伦劫1996",
        "region": "台湾",
        "type": "电视剧",
        "year": "1996",
        "genre": "家庭、伦理、剧情",
        "tags": "家族恩怨 遗弃 复仇 母女情 时代变迁",
        "url": "./movie-0361.html",
        "cover": "./61.jpg"
    },
    {
        "title": "普蒂安",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/奇幻",
        "tags": "重生 植物 记忆 寓言",
        "url": "./movie-0362.html",
        "cover": "./62.jpg"
    },
    {
        "title": "迷离生日情仇",
        "region": "香港",
        "type": "电影",
        "year": "1995",
        "genre": "悬疑,爱情,惊悚",
        "tags": "王家卫风 失忆 杀手 黑色电影",
        "url": "./movie-0363.html",
        "cover": "./63.jpg"
    },
    {
        "title": "白蛇传说",
        "region": "中国大陆",
        "type": "电影",
        "year": "2011",
        "genre": "奇幻,爱情",
        "tags": "东方美学 魔改 特效 虐恋 法海",
        "url": "./movie-0364.html",
        "cover": "./64.jpg"
    },
    {
        "title": "洛奇5国语",
        "region": "美国/中国大陆(配音版)",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/运动",
        "tags": "经典续作 拳击 传承 师徒 情怀",
        "url": "./movie-0365.html",
        "cover": "./65.jpg"
    },
    {
        "title": "宫本武藏 二刀流开眼",
        "region": "日本",
        "type": "电影",
        "year": "1963",
        "genre": "历史",
        "tags": "剑豪传奇 兵法哲学 流派开创",
        "url": "./movie-0366.html",
        "cover": "./66.jpg"
    },
    {
        "title": "巴不得回家",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,家庭",
        "tags": "养老 跨境 亲情 粤语",
        "url": "./movie-0367.html",
        "cover": "./67.jpg"
    },
    {
        "title": "野兽逻辑",
        "region": "日本",
        "type": "动画剧集",
        "year": "2023",
        "genre": "悬疑/奇幻/推理",
        "tags": "兽拟人 本格推理 黑色幽默 单元剧",
        "url": "./movie-0368.html",
        "cover": "./68.jpg"
    },
    {
        "title": "哈哈农夫",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "喜剧,剧情",
        "tags": "乡村振兴 荒诞 成长 群像",
        "url": "./movie-0369.html",
        "cover": "./69.jpg"
    },
    {
        "title": "再向虎山行",
        "region": "中国香港",
        "type": "剧集",
        "year": "2025",
        "genre": "动作、武侠",
        "tags": "江湖 复仇 硬桥硬马 兄弟情",
        "url": "./movie-0370.html",
        "cover": "./70.jpg"
    },
    {
        "title": "深海危机",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作,灾难",
        "tags": "潜艇 深海 核泄漏 营救",
        "url": "./movie-0371.html",
        "cover": "./71.jpg"
    },
    {
        "title": "性福疗程",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2012",
        "genre": "剧情/爱情",
        "tags": "残障人士 性治疗 真实故事改编 温柔治愈 身份认同",
        "url": "./movie-0372.html",
        "cover": "./72.jpg"
    },
    {
        "title": "小迷糊大逃亡",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,动作",
        "tags": "乌龙 逃亡 特工 错位身份 爆笑",
        "url": "./movie-0373.html",
        "cover": "./73.jpg"
    },
    {
        "title": "前桥魔女",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "奇幻,青春",
        "tags": "魔法少女 小镇 友情 成长",
        "url": "./movie-0374.html",
        "cover": "./74.jpg"
    },
    {
        "title": "花见",
        "region": "日本",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/家庭",
        "tags": "日本 赏樱 家庭 和解 治愈",
        "url": "./movie-0375.html",
        "cover": "./75.jpg"
    },
    {
        "title": "小脚板走天涯6",
        "region": "美国",
        "type": "动画电影",
        "year": "1998",
        "genre": "冒险,家庭,音乐",
        "tags": "恐龙 童年经典 冒险 成长",
        "url": "./movie-0376.html",
        "cover": "./76.jpg"
    },
    {
        "title": "大漠情怨",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2023",
        "genre": "古装,爱情,武侠",
        "tags": "沙漠 复仇 虐恋 商队 权谋",
        "url": "./movie-0377.html",
        "cover": "./77.jpg"
    },
    {
        "title": "跳进地理书的旅行",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2024",
        "genre": "真人秀,教育,旅行",
        "tags": "科普 地理 探险 明星 实景",
        "url": "./movie-0378.html",
        "cover": "./78.jpg"
    },
    {
        "title": "阳光姐妹淘 2011",
        "region": "韩国",
        "type": "电影",
        "year": "2011",
        "genre": "剧情,喜剧",
        "tags": "友情 怀旧 催泪",
        "url": "./movie-0379.html",
        "cover": "./79.jpg"
    },
    {
        "title": "贫贱夫妻百事吉",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "剧情喜剧",
        "tags": "家庭 逆袭 温情",
        "url": "./movie-0380.html",
        "cover": "./80.jpg"
    },
    {
        "title": "地狱疆场",
        "region": "韩国",
        "type": "电影",
        "year": "2026",
        "genre": "战争/动作/历史",
        "tags": "朝鲜战争 人盾战术 兄弟相残 长镜头",
        "url": "./movie-0381.html",
        "cover": "./81.jpg"
    },
    {
        "title": "四个羁基的男人",
        "region": "台湾",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,喜剧",
        "tags": "中年危机 男同 友情 公路 多元成家",
        "url": "./movie-0382.html",
        "cover": "./82.jpg"
    },
    {
        "title": "回声2024",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "动作/犯罪/超级英雄",
        "tags": "回声 夜魔侠 金并 聋哑 复仇",
        "url": "./movie-0383.html",
        "cover": "./83.jpg"
    },
    {
        "title": "日式面包王",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "动画,美食,搞笑",
        "tags": "面包对决 太阳之手 热血烘焙",
        "url": "./movie-0384.html",
        "cover": "./84.jpg"
    },
    {
        "title": "格拉德贝克人质危机",
        "region": "德国",
        "type": "电影",
        "year": "2022",
        "genre": "惊悚/犯罪",
        "tags": "真实事件 银行劫案 人质 媒体",
        "url": "./movie-0385.html",
        "cover": "./85.jpg"
    },
    {
        "title": "虎儿猛将",
        "region": "中国大陆",
        "type": "动画",
        "year": "2022",
        "genre": "动作,家庭,奇幻",
        "tags": "少年 成长 中国功夫",
        "url": "./movie-0386.html",
        "cover": "./86.jpg"
    },
    {
        "title": "叛逆女巫",
        "region": "英国",
        "type": "电视剧",
        "year": "2023",
        "genre": "奇幻,剧情,青春",
        "tags": "魔法学校 女巫崛起 反抗体制 姐妹情 暗黑童话",
        "url": "./movie-0387.html",
        "cover": "./87.jpg"
    },
    {
        "title": "安德鲁和威利冒险记",
        "region": "日本",
        "type": "动画短片",
        "year": "1984",
        "genre": "动画/冒险/家庭",
        "tags": "宫崎骏早期 手绘 童真 森林",
        "url": "./movie-0388.html",
        "cover": "./88.jpg"
    },
    {
        "title": "陪我走到世界尽头",
        "region": "法国/德国",
        "type": "电影",
        "year": "2010",
        "genre": "剧情/家庭",
        "tags": "忘年交 临终关怀 救赎 温情",
        "url": "./movie-0389.html",
        "cover": "./89.jpg"
    },
    {
        "title": "医神华佗粤语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2024",
        "genre": "古装,传记,悬疑",
        "tags": "粤语原声 神医传奇 政治阴谋 外科鼻祖",
        "url": "./movie-0390.html",
        "cover": "./90.jpg"
    },
    {
        "title": "猩红诊所",
        "region": "日本",
        "type": "电影",
        "year": "2019",
        "genre": "悬疑/恐怖/剧情",
        "tags": "密室 医疗恐怖 反转 心理 致郁",
        "url": "./movie-0391.html",
        "cover": "./91.jpg"
    },
    {
        "title": "情归何处",
        "region": "中国香港",
        "type": "剧集",
        "year": "1996",
        "genre": "剧情,爱情,家庭",
        "tags": "经典港剧 移民 离别 家庭伦理",
        "url": "./movie-0392.html",
        "cover": "./92.jpg"
    },
    {
        "title": "盗走卓别林",
        "region": "法国",
        "type": "电影",
        "year": "2021",
        "genre": "喜剧/犯罪",
        "tags": "盗贼 模仿秀 戏中戏 致敬经典",
        "url": "./movie-0393.html",
        "cover": "./93.jpg"
    },
    {
        "title": "涉谷怪谈",
        "region": "日本",
        "type": "电影",
        "year": "2004",
        "genre": "恐怖/惊悚",
        "tags": "都市传说 诅咒 录像带 涉谷 心理恐惧",
        "url": "./movie-0394.html",
        "cover": "./94.jpg"
    },
    {
        "title": "吸血鬼的印记",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖",
        "tags": "吸血鬼 家族诅咒 哥特",
        "url": "./movie-0395.html",
        "cover": "./95.jpg"
    },
    {
        "title": "赌圣3:无名小子",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧动作",
        "tags": "赌博 失忆 师徒",
        "url": "./movie-0396.html",
        "cover": "./96.jpg"
    },
    {
        "title": "武庚纪第一季",
        "region": "中国大陆",
        "type": "动画剧集",
        "year": "2021",
        "genre": "奇幻/动作/古装",
        "tags": "神话改编 人族反抗 热血战斗 权谋",
        "url": "./movie-0397.html",
        "cover": "./97.jpg"
    },
    {
        "title": "总是有个人在爱你",
        "region": "中国台湾",
        "type": "电影",
        "year": "2026",
        "genre": "爱情,剧情,奇幻",
        "tags": "时空通讯 温暖 双向救赎 书信",
        "url": "./movie-0398.html",
        "cover": "./98.jpg"
    },
    {
        "title": "青蛙的叫声",
        "region": "法国",
        "type": "电影",
        "year": "2015",
        "genre": "悬疑/剧情",
        "tags": "小镇秘密 童年阴影 人性实验 开放式结局",
        "url": "./movie-0399.html",
        "cover": "./99.jpg"
    },
    {
        "title": "最差劲",
        "region": "日本",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/家庭",
        "tags": "丧文化 废柴 和解",
        "url": "./movie-0400.html",
        "cover": "./100.jpg"
    },
    {
        "title": "女人在家",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "剧情,家庭,女性",
        "tags": "全职主妇 自我觉醒 邻里关系 直播创业",
        "url": "./movie-0401.html",
        "cover": "./101.jpg"
    },
    {
        "title": "长沙里:被遗忘的英雄们",
        "region": "韩国",
        "type": "电影",
        "year": "2022",
        "genre": "战争/历史/剧情",
        "tags": "朝鲜战争 学生兵 真实事件改编 悲壮",
        "url": "./movie-0402.html",
        "cover": "./102.jpg"
    },
    {
        "title": "恋爱的正确标记法",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2019",
        "genre": "爱情/喜剧",
        "tags": "都市 职场 反套路 女性",
        "url": "./movie-0403.html",
        "cover": "./103.jpg"
    },
    {
        "title": "天高地厚",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情家庭",
        "tags": "西北 父子 教育 公路",
        "url": "./movie-0404.html",
        "cover": "./104.jpg"
    },
    {
        "title": "血染雪山堡",
        "region": "英国",
        "type": "电影",
        "year": "2023",
        "genre": "动作/战争/惊悚",
        "tags": "二战 阿尔卑斯山 孤胆英雄 营救",
        "url": "./movie-0405.html",
        "cover": "./105.jpg"
    },
    {
        "title": "爱的引擎",
        "region": "日本",
        "type": "动画电影",
        "year": "2021",
        "genre": "科幻/爱情/治愈",
        "tags": "机器人 末世 机械之心 公路片",
        "url": "./movie-0406.html",
        "cover": "./106.jpg"
    },
    {
        "title": "女警出更",
        "region": "香港",
        "type": "剧集",
        "year": "2024",
        "genre": "动作,喜剧",
        "tags": "女权 职场 功夫 卧底 乌龙",
        "url": "./movie-0407.html",
        "cover": "./107.jpg"
    },
    {
        "title": "大脑中的猫",
        "region": "阿根廷",
        "type": "电影",
        "year": "2025",
        "genre": "科幻/惊悚",
        "tags": "意识上传 伦理 记忆",
        "url": "./movie-0408.html",
        "cover": "./108.jpg"
    },
    {
        "title": "一秒钟",
        "region": "中国大陆",
        "type": "电影",
        "year": "2020",
        "genre": "剧情/历史",
        "tags": "胶片 父女情 时代伤痕",
        "url": "./movie-0409.html",
        "cover": "./109.jpg"
    },
    {
        "title": "风流神探一拖七",
        "region": "中国香港",
        "type": "电影",
        "year": "1992",
        "genre": "喜剧,动作",
        "tags": "侦探 乌龙 后宫 搞笑",
        "url": "./movie-0410.html",
        "cover": "./110.jpg"
    },
    {
        "title": "李碧华鬼魅系列",
        "region": "中国香港",
        "type": "电视剧系列",
        "year": "2025",
        "genre": "恐怖,悬疑,爱情",
        "tags": "单元剧 都市传说 孽缘 宿命 奇情",
        "url": "./movie-0411.html",
        "cover": "./111.jpg"
    },
    {
        "title": "思念",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,奇幻,剧情",
        "tags": "思念体 异地恋 电台 超现实",
        "url": "./movie-0412.html",
        "cover": "./112.jpg"
    },
    {
        "title": "大使千金",
        "region": "韩国",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情/喜剧",
        "tags": "政治 外交 假结婚 财阀 高甜",
        "url": "./movie-0413.html",
        "cover": "./113.jpg"
    },
    {
        "title": "黑岩",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/民俗",
        "tags": "日式恐怖 山村诅咒 禁忌之地 氛围恐怖",
        "url": "./movie-0414.html",
        "cover": "./114.jpg"
    },
    {
        "title": "电影社会主义",
        "region": "法国/瑞士",
        "type": "电影",
        "year": "2010",
        "genre": "剧情/实验",
        "tags": "戈达尔 散文电影 左派思想 影像论文",
        "url": "./movie-0415.html",
        "cover": "./115.jpg"
    },
    {
        "title": "爱的锦囊妙计2",
        "region": "中国",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情,喜剧",
        "tags": "恋爱技巧 职场冤家 真假情侣",
        "url": "./movie-0416.html",
        "cover": "./116.jpg"
    },
    {
        "title": "顽固分子",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2016",
        "genre": "剧情,战争",
        "tags": "二战 狙击手 斯大林格勒 信念",
        "url": "./movie-0417.html",
        "cover": "./117.jpg"
    },
    {
        "title": "湖妖",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻,爱情,惊悚",
        "tags": "民间传说 水怪 前世今生 国风美学",
        "url": "./movie-0418.html",
        "cover": "./118.jpg"
    },
    {
        "title": "亚森罗苹",
        "region": "法国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑、犯罪、动作",
        "tags": "怪盗 复仇 模仿犯 巴黎",
        "url": "./movie-0419.html",
        "cover": "./119.jpg"
    },
    {
        "title": "幸福来接龙",
        "region": "中国",
        "type": "剧集",
        "year": "2021",
        "genre": "家庭,喜剧,温情",
        "tags": "接龙游戏 隔代亲 社区温情",
        "url": "./movie-0420.html",
        "cover": "./120.jpg"
    },
    {
        "title": "百搭咖排室",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧,都市",
        "tags": "情景喜剧 咖啡馆 打工人生 单元剧",
        "url": "./movie-0421.html",
        "cover": "./121.jpg"
    },
    {
        "title": "星空",
        "region": "中国台湾",
        "type": "电影",
        "year": "2011",
        "genre": "剧情、奇幻",
        "tags": "几米 治愈 成长 孤独 童年",
        "url": "./movie-0422.html",
        "cover": "./122.jpg"
    },
    {
        "title": "隔世琴缘",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "奇幻、爱情、古装",
        "tags": "前世今生 古琴 轮回 命运",
        "url": "./movie-0423.html",
        "cover": "./123.jpg"
    },
    {
        "title": "何处是归程",
        "region": "中国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/公路/家庭",
        "tags": "寻根 父子 卡车司机 公路片",
        "url": "./movie-0424.html",
        "cover": "./124.jpg"
    },
    {
        "title": "亮演人生",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情,喜剧",
        "tags": "剧团 生死 温情",
        "url": "./movie-0425.html",
        "cover": "./125.jpg"
    },
    {
        "title": "警察故事1985粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "1985",
        "genre": "动作,犯罪",
        "tags": "经典 成龙 硬核特技",
        "url": "./movie-0426.html",
        "cover": "./126.jpg"
    },
    {
        "title": "情到浓时",
        "region": "中国香港",
        "type": "电影",
        "year": "2026",
        "genre": "爱情,剧情",
        "tags": "都市爱情 错过与重逢 文艺 怀旧",
        "url": "./movie-0427.html",
        "cover": "./127.jpg"
    },
    {
        "title": "战火四千金",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2012",
        "genre": "战争/剧情/家庭",
        "tags": "抗战 姐妹情 家国仇恨 谍战 牺牲",
        "url": "./movie-0428.html",
        "cover": "./128.jpg"
    },
    {
        "title": "英勇废柴",
        "region": "阿根廷",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,冒险",
        "tags": "废柴联盟 合作社 对抗资本 荒诞 热血",
        "url": "./movie-0429.html",
        "cover": "./129.jpg"
    },
    {
        "title": "雨魅巴别塔",
        "region": "日本/新加坡",
        "type": "电影",
        "year": "2024",
        "genre": "奇幻/悬疑/灾难",
        "tags": "雨 公寓 密闭 沟通 怪谈",
        "url": "./movie-0430.html",
        "cover": "./130.jpg"
    },
    {
        "title": "不羁的美女",
        "region": "法国",
        "type": "电影",
        "year": "1991",
        "genre": "剧情,爱情",
        "tags": "艺术家 激情 自由 中年危机",
        "url": "./movie-0431.html",
        "cover": "./131.jpg"
    },
    {
        "title": "萨拉托加(电影)",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "历史/战争",
        "tags": "独立战争 将领对决 战术博弈 人性",
        "url": "./movie-0432.html",
        "cover": "./132.jpg"
    },
    {
        "title": "海军少爷兵",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧、动作",
        "tags": "富二代 新兵训练 整蛊 成长 意外英雄",
        "url": "./movie-0433.html",
        "cover": "./133.jpg"
    },
    {
        "title": "潮童假期",
        "region": "中国香港",
        "type": "电影",
        "year": "2013",
        "genre": "喜剧/家庭/儿童",
        "tags": "萌娃 香港 暑假 代际冲突 爆笑",
        "url": "./movie-0434.html",
        "cover": "./134.jpg"
    },
    {
        "title": "令人耳朵腐烂的爱",
        "region": "西班牙",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖爱情",
        "tags": "身体恐怖 病态迷恋 声波武器 极端占有欲",
        "url": "./movie-0435.html",
        "cover": "./135.jpg"
    },
    {
        "title": "爱人的最后一封情书",
        "region": "英国",
        "type": "电影",
        "year": "2021",
        "genre": "爱情/剧情/年代",
        "tags": "书信 跨越时空 出轨与救赎 女性独立 双线叙事",
        "url": "./movie-0436.html",
        "cover": "./136.jpg"
    },
    {
        "title": "道士上山",
        "region": "中国大陆",
        "type": "电影",
        "year": "2015",
        "genre": "剧情/奇幻/动作",
        "tags": "道士 现代 隐修 传承 功夫",
        "url": "./movie-0437.html",
        "cover": "./137.jpg"
    },
    {
        "title": "守龙者",
        "region": "中国大陆/西班牙",
        "type": "电影",
        "year": "2022",
        "genre": "动画,奇幻,冒险",
        "tags": "龙 成长 勇气 合作",
        "url": "./movie-0438.html",
        "cover": "./138.jpg"
    },
    {
        "title": "印度刺客:萨达尔·辛格",
        "region": "印度",
        "type": "电影",
        "year": "2021",
        "genre": "历史,动作,传记",
        "tags": "印度独立 刺客 真实人物 复仇 锡克教",
        "url": "./movie-0439.html",
        "cover": "./139.jpg"
    },
    {
        "title": "纯情罗曼史第三季",
        "region": "日本",
        "type": "动漫",
        "year": "2024",
        "genre": "爱情,耽美",
        "tags": "漫改 纯爱 作家 年龄差",
        "url": "./movie-0440.html",
        "cover": "./140.jpg"
    },
    {
        "title": "四大名捕",
        "region": "中国",
        "type": "电影",
        "year": "2024",
        "genre": "武侠/悬疑",
        "tags": "推理破案 朝堂阴谋 反类型",
        "url": "./movie-0441.html",
        "cover": "./141.jpg"
    },
    {
        "title": "想爱就爱2.5",
        "region": "泰国",
        "type": "电影",
        "year": "2015",
        "genre": "爱情/剧情",
        "tags": "青春 同性 抉择 成长 治愈",
        "url": "./movie-0442.html",
        "cover": "./142.jpg"
    },
    {
        "title": "玩进鬼门关",
        "region": "美国/日本",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/惊悚/悬疑",
        "tags": "实境游戏 诡异游戏厅 死亡游戏 友情 逃生",
        "url": "./movie-0443.html",
        "cover": "./143.jpg"
    },
    {
        "title": "都市巡警",
        "region": "法国",
        "type": "剧集",
        "year": "2024",
        "genre": "犯罪,动作,喜剧",
        "tags": "巴黎 基层警察 日常 荒诞 群像",
        "url": "./movie-0444.html",
        "cover": "./144.jpg"
    },
    {
        "title": "哺乳期的女人",
        "region": "中国大陆",
        "type": "电影",
        "year": "2015",
        "genre": "剧情",
        "tags": "女性 农村 伦理",
        "url": "./movie-0445.html",
        "cover": "./145.jpg"
    },
    {
        "title": "换汇者",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,犯罪",
        "tags": "金融犯罪 地下钱庄 灰色地带 双雄对决 街头质感",
        "url": "./movie-0446.html",
        "cover": "./146.jpg"
    },
    {
        "title": "圣奥古斯丁",
        "region": "意大利/法国",
        "type": "电影",
        "year": "1986",
        "genre": "剧情/历史",
        "tags": "宗教史诗 忏悔录 古典美学",
        "url": "./movie-0447.html",
        "cover": "./147.jpg"
    },
    {
        "title": "史上最大作弊战争",
        "region": "泰国",
        "type": "电影",
        "year": "2026",
        "genre": "犯罪悬疑",
        "tags": "天才枪手 烧脑 跨国作弊 教育反思",
        "url": "./movie-0448.html",
        "cover": "./148.jpg"
    },
    {
        "title": "惹火女色狼",
        "region": "香港",
        "type": "电影",
        "year": "1995",
        "genre": "情色,喜剧,犯罪",
        "tags": "都市艳情 女性反杀 港产片 偷情与背叛",
        "url": "./movie-0449.html",
        "cover": "./149.jpg"
    },
    {
        "title": "熊霸天下",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/家庭/动画",
        "tags": "拟人动物 喜剧 家庭关系",
        "url": "./movie-0450.html",
        "cover": "./150.jpg"
    },
    {
        "title": "边缘干探",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪、动作、悬疑",
        "tags": "卧底 双面人生 黑警 街头激战 人性拷问",
        "url": "./movie-0451.html",
        "cover": "./1.jpg"
    },
    {
        "title": "七十二家房客第十七部粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2024",
        "genre": "情景喜剧/生活",
        "tags": "港式情怀 邻里日常 粤语俚语",
        "url": "./movie-0452.html",
        "cover": "./2.jpg"
    },
    {
        "title": "国民公敌",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/犯罪/政治",
        "tags": "舆论审判 媒体战 暴力美学",
        "url": "./movie-0453.html",
        "cover": "./3.jpg"
    },
    {
        "title": "少年有梦",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "青春,剧情",
        "tags": "高考 小镇青年 摇滚 代际冲突 励志",
        "url": "./movie-0454.html",
        "cover": "./4.jpg"
    },
    {
        "title": "京剧猫",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动画,动作,奇幻",
        "tags": "国粹 猫 冒险 热血",
        "url": "./movie-0455.html",
        "cover": "./5.jpg"
    },
    {
        "title": "断线森林2",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/惊悚/冒险",
        "tags": "生存 猎杀游戏 女战士 复仇 丛林",
        "url": "./movie-0456.html",
        "cover": "./6.jpg"
    },
    {
        "title": "飞天大逃亡",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻,惊悚",
        "tags": "高空动作 反乌托邦 硬核逃杀",
        "url": "./movie-0457.html",
        "cover": "./7.jpg"
    },
    {
        "title": "来自星星的少年",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "科幻,剧情,青春",
        "tags": "自闭症 外星人 治愈 校园欺凌",
        "url": "./movie-0458.html",
        "cover": "./8.jpg"
    },
    {
        "title": "疯狂状态",
        "region": "美国",
        "type": "电视剧",
        "year": "2025",
        "genre": "剧情/惊悚",
        "tags": "精神病院 心理医生 反转 记忆植入 高层阴谋",
        "url": "./movie-0459.html",
        "cover": "./9.jpg"
    },
    {
        "title": "从伦敦到布莱顿",
        "region": "英国",
        "type": "电影",
        "year": "2006",
        "genre": "犯罪惊悚",
        "tags": "黑帮 逃亡 底层女性 非线性叙事",
        "url": "./movie-0460.html",
        "cover": "./10.jpg"
    },
    {
        "title": "杨门虎将",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2004",
        "genre": "历史,战争,古装",
        "tags": "杨家将 悲壮 忠烈 佘太君",
        "url": "./movie-0461.html",
        "cover": "./11.jpg"
    },
    {
        "title": "火药、背叛和阴谋",
        "region": "英国",
        "type": "剧集",
        "year": "2023",
        "genre": "历史,惊悚",
        "tags": "宫廷 爆炸 刺杀 权谋",
        "url": "./movie-0462.html",
        "cover": "./12.jpg"
    },
    {
        "title": "荡女痴男",
        "region": "中国台湾",
        "type": "电影",
        "year": "1989",
        "genre": "爱情、剧情、古装",
        "tags": "虐恋 风月场 命运纠葛 女权意识",
        "url": "./movie-0463.html",
        "cover": "./13.jpg"
    },
    {
        "title": "凶手就在门外",
        "region": "韩国",
        "type": "电影",
        "year": "2026",
        "genre": "惊悚,犯罪",
        "tags": "密室 邻里恐惧 反转 实时叙事",
        "url": "./movie-0464.html",
        "cover": "./14.jpg"
    },
    {
        "title": "全金属狂潮第二季",
        "region": "日本",
        "type": "剧集",
        "year": "2003",
        "genre": "动画/喜剧/科幻",
        "tags": "军事宅 校园日常 反差搞笑",
        "url": "./movie-0465.html",
        "cover": "./15.jpg"
    },
    {
        "title": "死亡诗社",
        "region": "美国",
        "type": "电影",
        "year": "1989",
        "genre": "剧情/励志",
        "tags": "教育 诗歌 自由 悲剧美学",
        "url": "./movie-0466.html",
        "cover": "./16.jpg"
    },
    {
        "title": "越策越开心2013",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2013",
        "genre": "喜剧,脱口秀,综艺剧",
        "tags": "搞笑 方言 脱口秀 无厘头 单元",
        "url": "./movie-0467.html",
        "cover": "./17.jpg"
    },
    {
        "title": "弓元特攻队",
        "region": "中国大陆",
        "type": "网络剧",
        "year": "2020",
        "genre": "喜剧",
        "tags": "特工 职场 废柴 反转",
        "url": "./movie-0468.html",
        "cover": "./18.jpg"
    },
    {
        "title": "约翰·卡朋特的郊区尖叫",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖,惊悚,讽刺",
        "tags": "邪教 郊区 邻居 身体恐怖 黑色幽默",
        "url": "./movie-0469.html",
        "cover": "./19.jpg"
    },
    {
        "title": "诡夜三日",
        "region": "泰国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,惊悚,悬疑",
        "tags": "泰式恐怖 时间循环 乡村邪术 高能反转",
        "url": "./movie-0470.html",
        "cover": "./20.jpg"
    },
    {
        "title": "美食大冒险之英雄烩",
        "region": "中国",
        "type": "动画电影",
        "year": "2025",
        "genre": "喜剧、冒险、奇幻",
        "tags": "美食世界 吃货 功夫 中华料理",
        "url": "./movie-0471.html",
        "cover": "./21.jpg"
    },
    {
        "title": "人造天劫",
        "region": "中国香港/美国",
        "type": "电影",
        "year": "2018",
        "genre": "动作/科幻/灾难",
        "tags": "气象武器 反恐 亲情救赎",
        "url": "./movie-0472.html",
        "cover": "./22.jpg"
    },
    {
        "title": "小病猫",
        "region": "中国大陆",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/家庭/儿童",
        "tags": "儿童 疾病 母女 催泪",
        "url": "./movie-0473.html",
        "cover": "./23.jpg"
    },
    {
        "title": "浅田家!",
        "region": "日本",
        "type": "电影",
        "year": "2020",
        "genre": "剧情,家庭,喜剧",
        "tags": "真实改编 摄影 温情 治愈 亲情",
        "url": "./movie-0474.html",
        "cover": "./24.jpg"
    },
    {
        "title": "我是路人甲",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,现实",
        "tags": "横店 群演 梦想 纪录片风格",
        "url": "./movie-0475.html",
        "cover": "./25.jpg"
    },
    {
        "title": "飞侠哥顿的终极冒险",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻,动作",
        "tags": "重启 平行宇宙 太空歌剧",
        "url": "./movie-0476.html",
        "cover": "./26.jpg"
    },
    {
        "title": "江湖大风暴",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "动作/犯罪",
        "tags": "卧底 兄弟情 九龙城寨 冷兵器",
        "url": "./movie-0477.html",
        "cover": "./27.jpg"
    },
    {
        "title": "维也纳和鬼魂乐队",
        "region": "法国/奥地利",
        "type": "电影",
        "year": "2024",
        "genre": "音乐/奇幻/喜剧",
        "tags": "乐队 鬼魂 古典乐 跨时空合作",
        "url": "./movie-0478.html",
        "cover": "./28.jpg"
    },
    {
        "title": "我们星球上的生命",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "自然纪录片",
        "tags": "震撼 环保 生存 视觉盛宴",
        "url": "./movie-0479.html",
        "cover": "./29.jpg"
    },
    {
        "title": "霹雳五号2",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻",
        "tags": "机甲续作 人工智能觉醒 公路片",
        "url": "./movie-0480.html",
        "cover": "./30.jpg"
    },
    {
        "title": "破阵",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2023",
        "genre": "悬疑/动作/古装",
        "tags": "棋局 谍战 江湖 智商博弈",
        "url": "./movie-0481.html",
        "cover": "./31.jpg"
    },
    {
        "title": "熟男,我爱你",
        "region": "意大利",
        "type": "电影",
        "year": "2008",
        "genre": "喜剧,爱情",
        "tags": "姐弟恋 浪漫 轻熟 治愈",
        "url": "./movie-0482.html",
        "cover": "./32.jpg"
    },
    {
        "title": "迷城",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "悬疑/科幻/惊悚",
        "tags": "平行时空 重庆 迷宫 高概念 烧脑",
        "url": "./movie-0483.html",
        "cover": "./33.jpg"
    },
    {
        "title": "昨天、今天和明天",
        "region": "中国大陆",
        "type": "电影",
        "year": "1997",
        "genre": "爱情/奇幻",
        "tags": "时间循环 人生选择 哲理",
        "url": "./movie-0484.html",
        "cover": "./34.jpg"
    },
    {
        "title": "夜之女王",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/惊悚",
        "tags": "地下世界 身份互换 反转",
        "url": "./movie-0485.html",
        "cover": "./35.jpg"
    },
    {
        "title": "上车,走吧",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/公路/家庭",
        "tags": "父子和解 大巴司机 临终之旅 乡土中国",
        "url": "./movie-0486.html",
        "cover": "./36.jpg"
    },
    {
        "title": "两情一路",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情,公路",
        "tags": "自驾 公路片 治愈 分手旅行 重逢",
        "url": "./movie-0487.html",
        "cover": "./37.jpg"
    },
    {
        "title": "一山难容二虎",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,犯罪,动作",
        "tags": "双雄 东北喜剧 悍匪 窝里斗",
        "url": "./movie-0488.html",
        "cover": "./38.jpg"
    },
    {
        "title": "一念杀机",
        "region": "中国香港",
        "type": "电影",
        "year": "2022",
        "genre": "悬疑/犯罪",
        "tags": "平行宇宙 一念之差 蝴蝶效应 烧脑",
        "url": "./movie-0489.html",
        "cover": "./39.jpg"
    },
    {
        "title": "梅格雷的亡者",
        "region": "法国,比利时",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,犯罪,剧情",
        "tags": "侦探片 法式 noir 连环杀人 心理博弈 慢热",
        "url": "./movie-0490.html",
        "cover": "./40.jpg"
    },
    {
        "title": "泳池管理员",
        "region": "日本",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/悬疑",
        "tags": "悬疑 心理 孤独 监视 夏天",
        "url": "./movie-0491.html",
        "cover": "./41.jpg"
    },
    {
        "title": "意大利第一年",
        "region": "意大利",
        "type": "电视剧",
        "year": "2022",
        "genre": "历史,剧情",
        "tags": "统一 政治 史诗 人性",
        "url": "./movie-0492.html",
        "cover": "./42.jpg"
    },
    {
        "title": "我为车狂",
        "region": "日本",
        "type": "剧集",
        "year": "2022",
        "genre": "剧情/竞技/热血",
        "tags": "赛车 改装 梦想 友情",
        "url": "./movie-0493.html",
        "cover": "./43.jpg"
    },
    {
        "title": "博物馆惊魂夜:卡门拉回归",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "喜剧,奇幻,冒险",
        "tags": "博物馆 复活 经典反派回归",
        "url": "./movie-0494.html",
        "cover": "./44.jpg"
    },
    {
        "title": "热血狂花",
        "region": "中国大陆",
        "type": "电影",
        "year": "2022",
        "genre": "运动,青春",
        "tags": "啦啦队 男子高校 破格 热血 燃",
        "url": "./movie-0495.html",
        "cover": "./45.jpg"
    },
    {
        "title": "有你的恋歌",
        "region": "日本",
        "type": "电影",
        "year": "2022",
        "genre": "爱情/音乐",
        "tags": "纯爱 乐队 夏日 时空交错",
        "url": "./movie-0496.html",
        "cover": "./46.jpg"
    },
    {
        "title": "托托小英雄",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,奇幻,冒险",
        "tags": "儿童 想象力 亲情",
        "url": "./movie-0497.html",
        "cover": "./47.jpg"
    },
    {
        "title": "非关性爱",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/爱情",
        "tags": "亲密关系 女性视角 成长 都会 写实",
        "url": "./movie-0498.html",
        "cover": "./48.jpg"
    },
    {
        "title": "圣殿骑士之路尽头的国度",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "冒险/历史",
        "tags": "圣杯传说 考古探险 中世纪谜题",
        "url": "./movie-0499.html",
        "cover": "./49.jpg"
    },
    {
        "title": "有顶天酒店",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/剧情",
        "tags": "群像 跨年夜 酒店 巧合 温情",
        "url": "./movie-0500.html",
        "cover": "./50.jpg"
    },
    {
        "title": "盲人阿清",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/犯罪/悬疑",
        "tags": "盲人 复仇 声音 正义",
        "url": "./movie-0501.html",
        "cover": "./51.jpg"
    },
    {
        "title": "今匀大赌大件事",
        "region": "中国香港",
        "type": "电影",
        "year": "1995",
        "genre": "喜剧,犯罪",
        "tags": "赌片 港式无厘头 乌龙 兄弟 黑吃黑",
        "url": "./movie-0502.html",
        "cover": "./52.jpg"
    },
    {
        "title": "1980",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,历史",
        "tags": "改革开放 个体户 时代浪潮 父子",
        "url": "./movie-0503.html",
        "cover": "./53.jpg"
    },
    {
        "title": "爱情白皮书1993",
        "region": "台湾",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情青春",
        "tags": "校园 纯爱 怀旧",
        "url": "./movie-0504.html",
        "cover": "./54.jpg"
    },
    {
        "title": "欲海飘萍",
        "region": "中国香港",
        "type": "电影",
        "year": "1996",
        "genre": "剧情,爱情",
        "tags": "情欲 赌城 命运 悲剧 女性",
        "url": "./movie-0505.html",
        "cover": "./55.jpg"
    },
    {
        "title": "人为释放",
        "region": "美国",
        "type": "电影",
        "year": "2018",
        "genre": "科幻/惊悚/悬疑",
        "tags": "AI觉醒 监狱 记忆删除 反转结局 哲学思辨",
        "url": "./movie-0506.html",
        "cover": "./56.jpg"
    },
    {
        "title": "如何分手",
        "region": "韩国",
        "type": "电影",
        "year": "2017",
        "genre": "爱情剧情",
        "tags": "分手 现实 扎心 都市",
        "url": "./movie-0507.html",
        "cover": "./57.jpg"
    },
    {
        "title": "乔琪·斯通的梦想人生",
        "region": "美国",
        "type": "剧集",
        "year": "2021",
        "genre": "剧情,喜剧",
        "tags": "励志 女性成长 脱口秀 纽约 追梦",
        "url": "./movie-0508.html",
        "cover": "./58.jpg"
    },
    {
        "title": "夏天协奏曲",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/音乐/奇幻",
        "tags": "古典乐 时空交错 夏日恋情 疗愈",
        "url": "./movie-0509.html",
        "cover": "./59.jpg"
    },
    {
        "title": "美丽的凯特",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,西部,犯罪",
        "tags": "女性复仇 澳洲荒野 性别暴力 诗意暴力",
        "url": "./movie-0510.html",
        "cover": "./60.jpg"
    },
    {
        "title": "好奇心",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,奇幻",
        "tags": "单元剧 禁忌 窥视 高能",
        "url": "./movie-0511.html",
        "cover": "./61.jpg"
    },
    {
        "title": "科图柯诺反叛",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2025",
        "genre": "战争,历史,动作",
        "tags": "冷兵器 民族起义 史诗",
        "url": "./movie-0512.html",
        "cover": "./62.jpg"
    },
    {
        "title": "华佗与曹操",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "历史,剧情",
        "tags": "三国悬案 医道与权谋 开颅谜团",
        "url": "./movie-0513.html",
        "cover": "./63.jpg"
    },
    {
        "title": "针孔旅社2",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖/惊悚",
        "tags": "密室 偷窥 变态 续集",
        "url": "./movie-0514.html",
        "cover": "./64.jpg"
    },
    {
        "title": "野蛮女霸王",
        "region": "台湾",
        "type": "电影",
        "year": "1999",
        "genre": "喜剧/爱情",
        "tags": "黑帮千金 校园 女追男 搞笑",
        "url": "./movie-0515.html",
        "cover": "./65.jpg"
    },
    {
        "title": "吴夫人的外出",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/悬疑/古装",
        "tags": "徽州女人 贞节牌坊 密室逃脱 女性觉醒",
        "url": "./movie-0516.html",
        "cover": "./66.jpg"
    },
    {
        "title": "我的三平方",
        "region": "中国大陆",
        "type": "电影",
        "year": "2018",
        "genre": "剧情/喜剧",
        "tags": "基层 教育 梦想 治愈",
        "url": "./movie-0517.html",
        "cover": "./67.jpg"
    },
    {
        "title": "乡间僻静处",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚,悬疑",
        "tags": "心理惊悚 乡下别墅 邻里秘密 封闭空间",
        "url": "./movie-0518.html",
        "cover": "./68.jpg"
    },
    {
        "title": "非婚不可",
        "region": "泰国",
        "type": "电视剧",
        "year": "2025",
        "genre": "爱情,喜剧,剧情",
        "tags": "契约结婚 先婚后爱 家族恩怨 霸道总裁 泰式甜宠",
        "url": "./movie-0519.html",
        "cover": "./69.jpg"
    },
    {
        "title": "霓裳记",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "古装/悬疑/职业",
        "tags": "唐朝 衣冠令 裁缝 破案",
        "url": "./movie-0520.html",
        "cover": "./70.jpg"
    },
    {
        "title": "师父",
        "region": "中国大陆",
        "type": "电影",
        "year": "2015",
        "genre": "动作,剧情",
        "tags": "武侠 民国 武行 规矩 硬派",
        "url": "./movie-0521.html",
        "cover": "./71.jpg"
    },
    {
        "title": "天兵遇上暴走伯",
        "region": "中国香港",
        "type": "电影",
        "year": "2019",
        "genre": "喜剧,动作",
        "tags": "乌龙搭档 老顽童 警匪 港式无厘头",
        "url": "./movie-0522.html",
        "cover": "./72.jpg"
    },
    {
        "title": "游说",
        "region": "美国",
        "type": "电影",
        "year": "2027",
        "genre": "剧情/惊悚",
        "tags": "政治献金 卧底 道德困境 反转",
        "url": "./movie-0523.html",
        "cover": "./73.jpg"
    },
    {
        "title": "大审判家",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情、犯罪、法庭",
        "tags": "陪审团 操纵 阴谋论 法律漏洞",
        "url": "./movie-0524.html",
        "cover": "./74.jpg"
    },
    {
        "title": "一条狗的使命2",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/喜剧/家庭",
        "tags": "狗狗 轮回 治愈 家庭 成长",
        "url": "./movie-0525.html",
        "cover": "./75.jpg"
    },
    {
        "title": "金水桥边",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "年代,家庭,悬疑",
        "tags": "北京大院 文革 改革开放 四合院",
        "url": "./movie-0526.html",
        "cover": "./76.jpg"
    },
    {
        "title": "大旅行3",
        "region": "美国",
        "type": "电影/动画",
        "year": "2025",
        "genre": "动画/冒险/喜剧",
        "tags": "动物迁徙 家庭 搞笑 公路动画",
        "url": "./movie-0527.html",
        "cover": "./77.jpg"
    },
    {
        "title": "如何入睡",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚,心理,恐怖",
        "tags": "失眠症 幻觉 精神控制",
        "url": "./movie-0528.html",
        "cover": "./78.jpg"
    },
    {
        "title": "反败为胜",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "体育/剧情",
        "tags": "电竞 老兵 逆袭 战队 热血",
        "url": "./movie-0529.html",
        "cover": "./79.jpg"
    },
    {
        "title": "凉宫春日的忧郁",
        "region": "日本",
        "type": "电视剧",
        "year": "2024",
        "genre": "科幻,校园,奇幻",
        "tags": "轻小说改编 时间循环 神级女主",
        "url": "./movie-0530.html",
        "cover": "./80.jpg"
    },
    {
        "title": "滚女十八招",
        "region": "中国香港",
        "type": "电影",
        "year": "1988",
        "genre": "喜剧,情色",
        "tags": "风月 搞笑 港式 古装 艳情",
        "url": "./movie-0531.html",
        "cover": "./81.jpg"
    },
    {
        "title": "功夫小子",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "动作/喜剧/家庭",
        "tags": "少年成长 传统武术 校园霸凌 祖孙情",
        "url": "./movie-0532.html",
        "cover": "./82.jpg"
    },
    {
        "title": "区小队",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2018",
        "genre": "剧情",
        "tags": "抗日 谍战 青春 热血 小人物",
        "url": "./movie-0533.html",
        "cover": "./83.jpg"
    },
    {
        "title": "公主闹双包3:浪漫星空",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "爱情,喜剧,奇幻",
        "tags": "身份互换 王室 星空 浪漫喜剧 双胞胎",
        "url": "./movie-0534.html",
        "cover": "./84.jpg"
    },
    {
        "title": "零号作品",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,惊悚,科幻",
        "tags": "剧本杀 元宇宙 删除记忆 反转",
        "url": "./movie-0535.html",
        "cover": "./85.jpg"
    },
    {
        "title": "禁止出售",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/犯罪",
        "tags": "打拐题材 边境罪恶 女性力量 现实主义",
        "url": "./movie-0536.html",
        "cover": "./86.jpg"
    },
    {
        "title": "萌犬好声音2",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "喜剧,家庭,音乐",
        "tags": "动物选秀 搞笑翻唱 友情比拼",
        "url": "./movie-0537.html",
        "cover": "./87.jpg"
    },
    {
        "title": "二人小町",
        "region": "日本",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/惊悚/心理",
        "tags": "双重人格 偶像 粉丝 偏执 密室",
        "url": "./movie-0538.html",
        "cover": "./88.jpg"
    },
    {
        "title": "白头神探3终极悔辱",
        "region": "美国",
        "type": "电影",
        "year": "1994",
        "genre": "喜剧/动作",
        "tags": "无厘头 恶搞 白头神探 笑料密集",
        "url": "./movie-0539.html",
        "cover": "./89.jpg"
    },
    {
        "title": "猛龙铁金刚",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "动作",
        "tags": "功夫 退休杀手 养老院 港式恶搞",
        "url": "./movie-0540.html",
        "cover": "./90.jpg"
    },
    {
        "title": "狗年",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/喜剧",
        "tags": "生肖 小镇 黑色幽默 命运",
        "url": "./movie-0541.html",
        "cover": "./91.jpg"
    },
    {
        "title": "生命之书",
        "region": "美国",
        "type": "电影",
        "year": "2014",
        "genre": "动画,奇幻,冒险",
        "tags": "亡灵节 勇气 神话改编 视觉盛宴",
        "url": "./movie-0542.html",
        "cover": "./92.jpg"
    },
    {
        "title": "居住正义",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "剧情、社会、黑色幽默",
        "tags": "租房 青年困境 社运 钉子户 都市传说",
        "url": "./movie-0543.html",
        "cover": "./93.jpg"
    },
    {
        "title": "难道,没有这样做",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "剧情、家庭、伦理",
        "tags": "社会派 育儿 抑郁症 女性",
        "url": "./movie-0544.html",
        "cover": "./94.jpg"
    },
    {
        "title": "缥缈剑仙传",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "古装,奇幻,动作",
        "tags": "修仙 剑道 逆袭",
        "url": "./movie-0545.html",
        "cover": "./95.jpg"
    },
    {
        "title": "冷血继父",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/悬疑/犯罪",
        "tags": "家庭 伪装 谋杀 心理操控 反转结局",
        "url": "./movie-0546.html",
        "cover": "./96.jpg"
    },
    {
        "title": "战国妖狐千魔混沌篇",
        "region": "日本",
        "type": "动画剧集",
        "year": "2026",
        "genre": "奇幻/战斗/热血",
        "tags": "战国时代 人妖共存 史诗战争 悲剧美学 神仙打架",
        "url": "./movie-0547.html",
        "cover": "./97.jpg"
    },
    {
        "title": "分秒间离",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻/爱情/剧情",
        "tags": "时间感知障碍 恋人 文艺科幻 非线性叙事 虐心",
        "url": "./movie-0548.html",
        "cover": "./98.jpg"
    },
    {
        "title": "猫灵相册",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻,温情",
        "tags": "猫咪 治愈 轮回 摄影",
        "url": "./movie-0549.html",
        "cover": "./99.jpg"
    },
    {
        "title": "论战争",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/战争/哲学",
        "tags": "辩论 反战 思辨 单一场景",
        "url": "./movie-0550.html",
        "cover": "./100.jpg"
    },
    {
        "title": "奇思妙探第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,犯罪,喜剧",
        "tags": "女侦探 高智商 社交障碍 单元探案 主线",
        "url": "./movie-0551.html",
        "cover": "./101.jpg"
    },
    {
        "title": "轮回:疯狂时代",
        "region": "中国大陆",
        "type": "动画剧集",
        "year": "2025",
        "genre": "奇幻/喜剧/悬疑",
        "tags": "时间循环 职场 荒诞 黑色幽默 解构",
        "url": "./movie-0552.html",
        "cover": "./102.jpg"
    },
    {
        "title": "是谁杀了德山大五郎",
        "region": "日本",
        "type": "剧集",
        "year": "2016",
        "genre": "悬疑/校园/黑色喜剧",
        "tags": "班级审判 密室杀人 荒诞 全员嫌疑人 反转再反转",
        "url": "./movie-0553.html",
        "cover": "./103.jpg"
    },
    {
        "title": "鼹鼠之歌2:香港狂骚曲",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/动作/犯罪",
        "tags": "卧底 香港元素 无厘头",
        "url": "./movie-0554.html",
        "cover": "./104.jpg"
    },
    {
        "title": "少年与英雄",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/运动",
        "tags": "励志 乡土 拳击",
        "url": "./movie-0555.html",
        "cover": "./105.jpg"
    },
    {
        "title": "识骨寻踪第五季",
        "region": "美国",
        "type": "剧集",
        "year": "2009",
        "genre": "犯罪/悬疑/剧情",
        "tags": "法医人类学 搭档破案 单元剧 情感推进",
        "url": "./movie-0556.html",
        "cover": "./106.jpg"
    },
    {
        "title": "新白蛇传之青蛇",
        "region": "中国大陆",
        "type": "网络电影",
        "year": "2021",
        "genre": "奇幻、爱情、动作",
        "tags": "青蛇 法海 姐妹 独立",
        "url": "./movie-0557.html",
        "cover": "./107.jpg"
    },
    {
        "title": "反击第一季",
        "region": "英国/美国",
        "type": "剧集",
        "year": "2010",
        "genre": "动作军事",
        "tags": "特种部队 雇佣兵 反恐 硬核枪战",
        "url": "./movie-0558.html",
        "cover": "./108.jpg"
    },
    {
        "title": "金融大王",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "传记,犯罪",
        "tags": "华尔街 白手起家 金融诈骗 黑色幽默",
        "url": "./movie-0559.html",
        "cover": "./109.jpg"
    },
    {
        "title": "善恶无赦",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚/伦理",
        "tags": "私刑 道德困境 反转 爽感",
        "url": "./movie-0560.html",
        "cover": "./110.jpg"
    },
    {
        "title": "勇鼠闯天堂",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "动画/冒险",
        "tags": "定格动画 死亡教育 老鼠 天堂与地狱 治愈",
        "url": "./movie-0561.html",
        "cover": "./111.jpg"
    },
    {
        "title": "老橡树酒馆",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情",
        "tags": "温情 社区 救赎 移民",
        "url": "./movie-0562.html",
        "cover": "./112.jpg"
    },
    {
        "title": "结束,开始",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,爱情",
        "tags": "时间循环 抉择 文艺 哲学",
        "url": "./movie-0563.html",
        "cover": "./113.jpg"
    },
    {
        "title": "非人哉第三季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "喜剧",
        "tags": "动画 神怪 搞笑 日常",
        "url": "./movie-0564.html",
        "cover": "./114.jpg"
    },
    {
        "title": "永远不要对熊猫说不",
        "region": "美国",
        "type": "电影",
        "year": "2016",
        "genre": "喜剧,冒险",
        "tags": "伪纪录片 荒诞 动物保护 反套路",
        "url": "./movie-0565.html",
        "cover": "./115.jpg"
    },
    {
        "title": "裂爱",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/悬疑/心理",
        "tags": "双重人格 病态爱情 婚姻真相 反转 女性视角",
        "url": "./movie-0566.html",
        "cover": "./116.jpg"
    },
    {
        "title": "大学生士兵的故事",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2011",
        "genre": "喜剧,军旅",
        "tags": "青春 成长 军营 搞笑",
        "url": "./movie-0567.html",
        "cover": "./117.jpg"
    },
    {
        "title": "芦苇荡的时光",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/家庭/文艺",
        "tags": "代际冲突 回乡潮 方言电影 湿地生态",
        "url": "./movie-0568.html",
        "cover": "./118.jpg"
    },
    {
        "title": "来电狂响",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑",
        "tags": "电话 悬疑 心理 惊悚",
        "url": "./movie-0569.html",
        "cover": "./119.jpg"
    },
    {
        "title": "机器肉鸡第八季",
        "region": "美国",
        "type": "剧集",
        "year": "2023",
        "genre": "喜剧/科幻/动画",
        "tags": "定格动画 恶搞 重口味 无厘头 黑色幽默",
        "url": "./movie-0570.html",
        "cover": "./120.jpg"
    },
    {
        "title": "尸兄",
        "region": "中国大陆",
        "type": "动画剧集",
        "year": "2025",
        "genre": "恐怖/喜剧/冒险",
        "tags": "丧尸 末世 搞笑 国漫 异能",
        "url": "./movie-0571.html",
        "cover": "./121.jpg"
    },
    {
        "title": "颤栗时空",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,惊悚,悬疑",
        "tags": "时间循环 平行宇宙 意识上传 烧脑",
        "url": "./movie-0572.html",
        "cover": "./122.jpg"
    },
    {
        "title": "地狱手机",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,科幻,惊悚",
        "tags": "智能手机 诅咒 社交网络",
        "url": "./movie-0573.html",
        "cover": "./123.jpg"
    },
    {
        "title": "双重躯体",
        "region": "德国/奥地利",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,悬疑",
        "tags": "克隆人 身份焦虑 婚姻危机",
        "url": "./movie-0574.html",
        "cover": "./124.jpg"
    },
    {
        "title": "原钻",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪,惊悚,悬疑",
        "tags": "黑市钻石 身世之谜 两代盗贼 逆袭",
        "url": "./movie-0575.html",
        "cover": "./125.jpg"
    },
    {
        "title": "巨齿鲨2:海沟深渊",
        "region": "美国/中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "动作/科幻/惊悚",
        "tags": "深海怪兽 海底基地 基因突变 极限逃生",
        "url": "./movie-0576.html",
        "cover": "./126.jpg"
    },
    {
        "title": "史努比回家",
        "region": "美国",
        "type": "动画电影",
        "year": "2025",
        "genre": "动画,冒险,家庭",
        "tags": "史努比 花生漫画 友情 寻家",
        "url": "./movie-0577.html",
        "cover": "./127.jpg"
    },
    {
        "title": "浴火新娘",
        "region": "泰国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,爱情",
        "tags": "鬼新娘 泰式巫蛊 复仇 嫁衣 民俗",
        "url": "./movie-0578.html",
        "cover": "./128.jpg"
    },
    {
        "title": "爵士乐政变大阴谋",
        "region": "美国",
        "type": "电影",
        "year": "2006",
        "genre": "悬疑,历史,惊悚",
        "tags": "政治黑幕 爵士乐 刺杀 阴谋论 黑白通吃",
        "url": "./movie-0579.html",
        "cover": "./129.jpg"
    },
    {
        "title": "黑暗之敌",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "战争悬疑",
        "tags": "二战 地堡 狼人 心理恐怖",
        "url": "./movie-0580.html",
        "cover": "./130.jpg"
    },
    {
        "title": "三少爷的剑",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "动作/武侠/古装",
        "tags": "谢晓峰 江湖宿命 剑道巅峰",
        "url": "./movie-0581.html",
        "cover": "./131.jpg"
    },
    {
        "title": "歌海情天",
        "region": "中国大陆",
        "type": "电影",
        "year": "2019",
        "genre": "歌舞,爱情",
        "tags": "民歌 海岛 两岸 寻根",
        "url": "./movie-0582.html",
        "cover": "./132.jpg"
    },
    {
        "title": "逃跑的新郎",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "喜剧,爱情",
        "tags": "公路 恐婚 反转 追爱",
        "url": "./movie-0583.html",
        "cover": "./133.jpg"
    },
    {
        "title": "铁拳怒潮",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作/犯罪",
        "tags": "复仇 硬汉 黑帮 拳击 暴力美学",
        "url": "./movie-0584.html",
        "cover": "./134.jpg"
    },
    {
        "title": "他们微笑的样子",
        "region": "意大利",
        "type": "电影",
        "year": "1998",
        "genre": "剧情/历史",
        "tags": "社会写实 阶级 工人运动 家族 金棕榈提名",
        "url": "./movie-0585.html",
        "cover": "./135.jpg"
    },
    {
        "title": "焦土",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚/悬疑/灾难",
        "tags": "山火 幸存者 野外求生 心理恐怖 密闭",
        "url": "./movie-0586.html",
        "cover": "./136.jpg"
    },
    {
        "title": "翻挞法兰妻",
        "region": "中国香港",
        "type": "电影",
        "year": "2021",
        "genre": "爱情/喜剧",
        "tags": "离婚 失忆 追妻火葬场 搞笑 浪漫",
        "url": "./movie-0587.html",
        "cover": "./137.jpg"
    },
    {
        "title": "维和防暴队",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "动作/战争/主旋律",
        "tags": "维和 联合国 非洲 危机 中国力量",
        "url": "./movie-0588.html",
        "cover": "./138.jpg"
    },
    {
        "title": "猎魔士",
        "region": "美国/波兰",
        "type": "剧集",
        "year": "2019",
        "genre": "奇幻/动作/冒险",
        "tags": "猎魔人 两线叙事 命运 魔物 白狼",
        "url": "./movie-0589.html",
        "cover": "./139.jpg"
    },
    {
        "title": "1991:朋克突围之年",
        "region": "美国",
        "type": "电影",
        "year": "2016",
        "genre": "纪录片/音乐",
        "tags": "朋克摇滚 涅槃 1991年 现场录像 文化史",
        "url": "./movie-0590.html",
        "cover": "./140.jpg"
    },
    {
        "title": "蠢爱三人行",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/爱情",
        "tags": "三角恋 幽默 误会",
        "url": "./movie-0591.html",
        "cover": "./141.jpg"
    },
    {
        "title": "情欲暗潮",
        "region": "丹麦",
        "type": "电影",
        "year": "2020",
        "genre": "剧情/惊悚",
        "tags": "溺水 情欲 心理疾病 哥特 替身",
        "url": "./movie-0592.html",
        "cover": "./142.jpg"
    },
    {
        "title": "康乃狄克鬼屋事件",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖",
        "tags": "真实改编 凶宅 招魂 家庭 附身",
        "url": "./movie-0593.html",
        "cover": "./143.jpg"
    },
    {
        "title": "松花湖畔的较量",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/犯罪/刑侦",
        "tags": "连环命案 90年代东北 老刑警 冰天雪地 社会变迁",
        "url": "./movie-0594.html",
        "cover": "./144.jpg"
    },
    {
        "title": "平淡生活",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2004",
        "genre": "剧情/家庭",
        "tags": "北漂 底层 励志 散文叙事 海岩",
        "url": "./movie-0595.html",
        "cover": "./145.jpg"
    },
    {
        "title": "被称为爸爸的女人",
        "region": "印度",
        "type": "电影",
        "year": "2027",
        "genre": "家庭、剧情",
        "tags": "跨性别 父亲 传统 板球 身份认同",
        "url": "./movie-0596.html",
        "cover": "./146.jpg"
    },
    {
        "title": "大劫难",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/惊悚/灾难",
        "tags": "劫机 病毒 孤胆英雄 密室",
        "url": "./movie-0597.html",
        "cover": "./147.jpg"
    },
    {
        "title": "灵域1",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "古装/奇幻/冒险",
        "tags": "九州 热血 少年漫改 特效大片",
        "url": "./movie-0598.html",
        "cover": "./148.jpg"
    },
    {
        "title": "废青乐队死唔去",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/音乐",
        "tags": "摇滚 励志 底层",
        "url": "./movie-0599.html",
        "cover": "./149.jpg"
    },
    {
        "title": "我们的乐坛",
        "region": "香港",
        "type": "剧集",
        "year": "2023",
        "genre": "音乐/剧情",
        "tags": "粤语流行乐 行业沉浮 追梦 黄金年代 情怀",
        "url": "./movie-0600.html",
        "cover": "./150.jpg"
    },
    {
        "title": "盗命兄弟",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪/动作",
        "tags": "兄弟情 器官贩卖 反转",
        "url": "./movie-0601.html",
        "cover": "./1.jpg"
    },
    {
        "title": "老板",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "职场/惊悚",
        "tags": "监视 大逃杀 社畜",
        "url": "./movie-0602.html",
        "cover": "./2.jpg"
    },
    {
        "title": "阴阳师·平安物语第三季",
        "region": "日本",
        "type": "动画",
        "year": "2024",
        "genre": "奇幻/日常",
        "tags": "式神 温馨治愈 单元剧",
        "url": "./movie-0603.html",
        "cover": "./3.jpg"
    },
    {
        "title": "红色",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "动作/犯罪",
        "tags": "杀手 复仇 视觉",
        "url": "./movie-0604.html",
        "cover": "./4.jpg"
    },
    {
        "title": "英雄祭",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2014",
        "genre": "战争,传奇",
        "tags": "抗日 间谍 兄弟情 牺牲",
        "url": "./movie-0605.html",
        "cover": "./5.jpg"
    },
    {
        "title": "血橙",
        "region": "意大利",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,犯罪,黑色幽默",
        "tags": "黑手党 家族生意 荒诞",
        "url": "./movie-0606.html",
        "cover": "./6.jpg"
    },
    {
        "title": "基督最后的诱惑",
        "region": "美国/加拿大",
        "type": "电影",
        "year": "1988",
        "genre": "剧情,宗教",
        "tags": "人性耶稣 争议改编 精神试炼",
        "url": "./movie-0607.html",
        "cover": "./7.jpg"
    },
    {
        "title": "维尔博",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "惊悚、犯罪、动作",
        "tags": "巴黎地下墓穴 暗网直播 极限跑酷 法式暴力 密室逃生",
        "url": "./movie-0608.html",
        "cover": "./8.jpg"
    },
    {
        "title": "天线宝宝",
        "region": "英国",
        "type": "剧集",
        "year": "2024",
        "genre": "恐怖/实验",
        "tags": "邪典重启 儿童邪典 超自然 心理恐怖 社会隐喻",
        "url": "./movie-0609.html",
        "cover": "./9.jpg"
    },
    {
        "title": "畸人列传粤语",
        "region": "香港",
        "type": "电视剧",
        "year": "1992",
        "genre": "剧情、惊悚、社会",
        "tags": "畸形人 单元剧 猎奇 粤语配音",
        "url": "./movie-0610.html",
        "cover": "./10.jpg"
    },
    {
        "title": "灭绝",
        "region": "美国/德国",
        "type": "电影",
        "year": "2023",
        "genre": "科幻,动作,惊悚",
        "tags": "人造人反叛 自我认知 硬科幻 道德困境",
        "url": "./movie-0611.html",
        "cover": "./11.jpg"
    },
    {
        "title": "从前的光景",
        "region": "中国台湾",
        "type": "电影",
        "year": "2015",
        "genre": "剧情,家庭",
        "tags": "乡土 怀旧 亲情 文艺 时光",
        "url": "./movie-0612.html",
        "cover": "./12.jpg"
    },
    {
        "title": "圈套",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,犯罪",
        "tags": "高智商犯罪 陷阱 复仇 无指纹 审判",
        "url": "./movie-0613.html",
        "cover": "./13.jpg"
    },
    {
        "title": "夏日国度",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "奇幻家庭",
        "tags": "童话 穿越 祖孙 治愈",
        "url": "./movie-0614.html",
        "cover": "./14.jpg"
    },
    {
        "title": "玉米面包、厄尔和我",
        "region": "美国",
        "type": "电影",
        "year": "2016",
        "genre": "剧情,喜剧",
        "tags": "南方小镇 忘年交 美食治愈",
        "url": "./movie-0615.html",
        "cover": "./15.jpg"
    },
    {
        "title": "爱斯基摩闯纽约",
        "region": "美国",
        "type": "电影",
        "year": "1992",
        "genre": "喜剧/冒险",
        "tags": "文化冲突 纽约 爱斯基摩 鱼离开水 90年代",
        "url": "./movie-0616.html",
        "cover": "./16.jpg"
    },
    {
        "title": "乘胜狙击国语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2017",
        "genre": "剧情/犯罪/悬疑",
        "tags": "赌术 复仇 千门八将 豪门",
        "url": "./movie-0617.html",
        "cover": "./17.jpg"
    },
    {
        "title": "恋爱局中局",
        "region": "泰国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/爱情/悬疑",
        "tags": "骗中骗 假情侣 泰国风情 反转再反转 欢喜冤家",
        "url": "./movie-0618.html",
        "cover": "./18.jpg"
    },
    {
        "title": "爱人!别跑",
        "region": "泰国",
        "type": "电影",
        "year": "2023",
        "genre": "爱情/喜剧",
        "tags": "追妻火葬场 搞笑公路 泰式甜度",
        "url": "./movie-0619.html",
        "cover": "./19.jpg"
    },
    {
        "title": "马克·卡文迪什:永不停歇",
        "region": "英国",
        "type": "电影",
        "year": "2023",
        "genre": "纪录片/运动",
        "tags": "公路自行车 绝地反击 体育精神",
        "url": "./movie-0620.html",
        "cover": "./20.jpg"
    },
    {
        "title": "北极光下",
        "region": "加拿大/挪威",
        "type": "电影",
        "year": "2018",
        "genre": "爱情/剧情",
        "tags": "北极 极光 治愈 孤独",
        "url": "./movie-0621.html",
        "cover": "./21.jpg"
    },
    {
        "title": "我的恐怖女友",
        "region": "韩国",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,恐怖",
        "tags": "反转 同居 怪谈 爱情 黑色幽默",
        "url": "./movie-0622.html",
        "cover": "./22.jpg"
    },
    {
        "title": "在某人受伤害之前",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚,心理,犯罪",
        "tags": "校园枪击 预知未来 道德两难 禁枪隐喻",
        "url": "./movie-0623.html",
        "cover": "./23.jpg"
    },
    {
        "title": "德州电锯大屠杀",
        "region": "美国",
        "type": "电影",
        "year": "1974",
        "genre": "恐怖/惊悚",
        "tags": "屠杀 公路恐怖 真实事件改编",
        "url": "./movie-0624.html",
        "cover": "./24.jpg"
    },
    {
        "title": "秘密同盟",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/犯罪",
        "tags": "双男主 卧底 黑帮 背叛",
        "url": "./movie-0625.html",
        "cover": "./25.jpg"
    },
    {
        "title": "猎人游戏",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "动作,惊悚,科幻",
        "tags": "真人游戏 丛林追杀 高科技 生存 反乌托邦",
        "url": "./movie-0626.html",
        "cover": "./26.jpg"
    },
    {
        "title": "阴暗家族",
        "region": "瑞典",
        "type": "电视剧",
        "year": "2026",
        "genre": "悬疑/剧情",
        "tags": "北欧 noir 家族秘密 岛屿",
        "url": "./movie-0627.html",
        "cover": "./27.jpg"
    },
    {
        "title": "重点是,我爱你",
        "region": "西班牙",
        "type": "电影",
        "year": "2021",
        "genre": "喜剧/爱情/家庭",
        "tags": "母语综合征 文化冲突 温情 公路片",
        "url": "./movie-0628.html",
        "cover": "./28.jpg"
    },
    {
        "title": "婚姻趣事",
        "region": "英国",
        "type": "电影",
        "year": "1999",
        "genre": "喜剧,剧情,家庭",
        "tags": "黑色幽默 中年危机 婚姻咨询",
        "url": "./movie-0629.html",
        "cover": "./29.jpg"
    },
    {
        "title": "男性,女性",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,爱情,哲思",
        "tags": "两性战争 巴黎青年 黑白色调 对话体",
        "url": "./movie-0630.html",
        "cover": "./30.jpg"
    },
    {
        "title": "异星争霸战",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,动作",
        "tags": "星际 机甲 特效大片 殖民 反战",
        "url": "./movie-0631.html",
        "cover": "./31.jpg"
    },
    {
        "title": "紧急救援",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "动作/灾难",
        "tags": "消防救援 真实事件改编 群像 泪点",
        "url": "./movie-0632.html",
        "cover": "./32.jpg"
    },
    {
        "title": "小镇大街",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑",
        "tags": "小镇 经济衰退 纵火案 邻里",
        "url": "./movie-0633.html",
        "cover": "./33.jpg"
    },
    {
        "title": "最狂野的梦想:征服珠峰",
        "region": "英国",
        "type": "纪录片",
        "year": "2023",
        "genre": "纪录,冒险,传记",
        "tags": "登山 真实事件 极限挑战 人性",
        "url": "./movie-0634.html",
        "cover": "./34.jpg"
    },
    {
        "title": "电影首策",
        "region": "中国大陆",
        "type": "电影",
        "year": "2016",
        "genre": "剧情,喜剧",
        "tags": "电影行业 制片人 行业黑幕 理想与现实",
        "url": "./movie-0635.html",
        "cover": "./35.jpg"
    },
    {
        "title": "最爱出现了",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,奇幻",
        "tags": "平行世界 抉择 真爱测试",
        "url": "./movie-0636.html",
        "cover": "./36.jpg"
    },
    {
        "title": "怒火1984",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "动作/犯罪/警匪",
        "tags": "动作 警匪 1980年代 飙车 枪战",
        "url": "./movie-0637.html",
        "cover": "./37.jpg"
    },
    {
        "title": "阴阳错",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻、爱情、喜剧",
        "tags": "鬼新娘 生死簿 冥婚 港式幽默 阴间公务员",
        "url": "./movie-0638.html",
        "cover": "./38.jpg"
    },
    {
        "title": "大都会传奇",
        "region": "美国",
        "type": "电影",
        "year": "2027",
        "genre": "剧情/犯罪",
        "tags": "纽约 黑帮 家族 权力 史诗",
        "url": "./movie-0639.html",
        "cover": "./39.jpg"
    },
    {
        "title": "烟花女驼龙",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪、动作、历史",
        "tags": "民国东北 女匪首 复仇传奇 枪战",
        "url": "./movie-0640.html",
        "cover": "./40.jpg"
    },
    {
        "title": "封城之后",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2023",
        "genre": "悬疑/灾难/人性",
        "tags": "密闭空间 人性考验 社会缩影 悬疑烧脑",
        "url": "./movie-0641.html",
        "cover": "./41.jpg"
    },
    {
        "title": "姐,你好",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/家庭",
        "tags": "身份互换 母女关系 职场",
        "url": "./movie-0642.html",
        "cover": "./42.jpg"
    },
    {
        "title": "鲨鱼开大口",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2026",
        "genre": "喜剧,恐怖,科幻",
        "tags": "B级片 环保 变异生物 黑色幽默",
        "url": "./movie-0643.html",
        "cover": "./43.jpg"
    },
    {
        "title": "此恨绵绵无绝期",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑/惊悚",
        "tags": "复仇 母女 细思极恐",
        "url": "./movie-0644.html",
        "cover": "./44.jpg"
    },
    {
        "title": "伊万的生活",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/黑色幽默",
        "tags": "存在主义 官僚主义 荒诞 平行叙事",
        "url": "./movie-0645.html",
        "cover": "./45.jpg"
    },
    {
        "title": "衣橱国语",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑,奇幻",
        "tags": "平行时空 语言 身份认同",
        "url": "./movie-0646.html",
        "cover": "./46.jpg"
    },
    {
        "title": "更高境界",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情",
        "tags": "登山 救赎 心理",
        "url": "./movie-0647.html",
        "cover": "./47.jpg"
    },
    {
        "title": "虚界之魔兽",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "奇幻,冒险",
        "tags": "奇幻 冒险 游戏 虚拟现实",
        "url": "./movie-0648.html",
        "cover": "./48.jpg"
    },
    {
        "title": "惊魂杰克路",
        "region": "加拿大",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖、悬疑",
        "tags": "公路恐怖 时间循环 小镇怪谈 低成本 心理惊悚",
        "url": "./movie-0649.html",
        "cover": "./49.jpg"
    },
    {
        "title": "黑暗城市",
        "region": "德国",
        "type": "电影",
        "year": "2027",
        "genre": "科幻,惊悚,黑色电影",
        "tags": "永夜 侦探 记忆操控 赛博朋克 阴谋",
        "url": "./movie-0650.html",
        "cover": "./50.jpg"
    },
    {
        "title": "赤胆屠龙",
        "region": "美国",
        "type": "电影",
        "year": "1959",
        "genre": "西部,冒险,动作",
        "tags": "经典西部片 警长 单挑匪帮 约翰·韦恩式 正邪对决",
        "url": "./movie-0651.html",
        "cover": "./51.jpg"
    },
    {
        "title": "樱桃派",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,家庭,悬疑",
        "tags": "甜品 家族秘史 味觉记忆 返乡",
        "url": "./movie-0652.html",
        "cover": "./52.jpg"
    },
    {
        "title": "换爱四人组",
        "region": "西班牙",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/伦理",
        "tags": "伴侣交换 心理博弈 多线叙事",
        "url": "./movie-0653.html",
        "cover": "./53.jpg"
    },
    {
        "title": "最后的亚历山大",
        "region": "英国/美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/历史/冒险",
        "tags": "史诗 帝王 考古 平行宇宙 宿命",
        "url": "./movie-0654.html",
        "cover": "./54.jpg"
    },
    {
        "title": "蔑视",
        "region": "法国/意大利",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/心理/情色",
        "tags": "婚姻危机 戈达尔式 疏离 戏中戏 艺术片",
        "url": "./movie-0655.html",
        "cover": "./55.jpg"
    },
    {
        "title": "忽然啰啰挛",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/同性/奇幻",
        "tags": "身体互换 恐同直男 毒舌基友",
        "url": "./movie-0656.html",
        "cover": "./56.jpg"
    },
    {
        "title": "安娜华特的离奇命运",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/悬疑/心理",
        "tags": "循环死亡 诅咒录像带 女性复仇",
        "url": "./movie-0657.html",
        "cover": "./57.jpg"
    },
    {
        "title": "梦女孩",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "奇幻/悬疑/青春",
        "tags": "梦境入侵 少女 超能力 校园",
        "url": "./movie-0658.html",
        "cover": "./58.jpg"
    },
    {
        "title": "刺客公敌",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作,喜剧,犯罪",
        "tags": "杀手 相亲 误会 全球通缉 狼人杀",
        "url": "./movie-0659.html",
        "cover": "./59.jpg"
    },
    {
        "title": "窗户周一到",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/奇幻",
        "tags": "时间循环 治愈 邻里 日常",
        "url": "./movie-0660.html",
        "cover": "./60.jpg"
    },
    {
        "title": "欢乐男孩的最后一站",
        "region": "日本",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/喜剧/青春",
        "tags": "青春挽歌 男孩团体 解散之旅",
        "url": "./movie-0661.html",
        "cover": "./61.jpg"
    },
    {
        "title": "性感食人族",
        "region": "巴西",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖/情色/惊悚",
        "tags": "食人 欲望 雨林 邪典 社会隐喻",
        "url": "./movie-0662.html",
        "cover": "./62.jpg"
    },
    {
        "title": "金式森林",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2023",
        "genre": "剧情、家庭、商战",
        "tags": "豪门恩怨 遗产争夺 父子和解",
        "url": "./movie-0663.html",
        "cover": "./63.jpg"
    },
    {
        "title": "海棠红",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/犯罪",
        "tags": "黑帮 女杀手 复仇 旗袍 香港记忆",
        "url": "./movie-0664.html",
        "cover": "./64.jpg"
    },
    {
        "title": "快乐年华",
        "region": "中国大陆",
        "type": "电影",
        "year": "2022",
        "genre": "剧情,青春",
        "tags": "80年代 工厂子弟 怀旧 友情 成长",
        "url": "./movie-0665.html",
        "cover": "./65.jpg"
    },
    {
        "title": "小时候有神明",
        "region": "中国台湾",
        "type": "电影",
        "year": "2022",
        "genre": "奇幻、家庭",
        "tags": "童年 神明 告别",
        "url": "./movie-0666.html",
        "cover": "./66.jpg"
    },
    {
        "title": "哈啰,我叫朵莉丝",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "都市,爱情",
        "tags": "女性成长 姐弟恋 职场逆袭 轻喜剧",
        "url": "./movie-0667.html",
        "cover": "./67.jpg"
    },
    {
        "title": "世界旅行",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2020",
        "genre": "真人秀,旅行",
        "tags": "穷游 文化 治愈",
        "url": "./movie-0668.html",
        "cover": "./68.jpg"
    },
    {
        "title": "下一代粤语",
        "region": "中国香港/广东",
        "type": "纪录片",
        "year": "2024",
        "genre": "纪录片/社会/人文",
        "tags": "粤语 文化传承 语言消亡 儿童 本土",
        "url": "./movie-0669.html",
        "cover": "./69.jpg"
    },
    {
        "title": "好母亲",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/惊悚",
        "tags": "母职惩罚 社会议题 法律边缘 情感博弈",
        "url": "./movie-0670.html",
        "cover": "./70.jpg"
    },
    {
        "title": "海因里希",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "历史,剧情,战争",
        "tags": "二战 人性 反思 真实改编",
        "url": "./movie-0671.html",
        "cover": "./71.jpg"
    },
    {
        "title": "蹩脚英语",
        "region": "法国/美国",
        "type": "电影",
        "year": "2023",
        "genre": "爱情/喜剧",
        "tags": "语言障碍 巴黎 翻译乌龙",
        "url": "./movie-0672.html",
        "cover": "./72.jpg"
    },
    {
        "title": "爱神巧克力第二季",
        "region": "中国大陆",
        "type": "动画/剧集",
        "year": "2024",
        "genre": "爱情/奇幻/校园",
        "tags": "甜宠 奇幻设定 校园青春 多角恋",
        "url": "./movie-0673.html",
        "cover": "./73.jpg"
    },
    {
        "title": "随身变2:我们才是一家人",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,科幻,家庭",
        "tags": "变形 身体互换 家庭矛盾 爆笑 续集",
        "url": "./movie-0674.html",
        "cover": "./74.jpg"
    },
    {
        "title": "石光荣的战火青春",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "战争,历史,剧情",
        "tags": "抗战 老兵 回忆录 兄弟情",
        "url": "./movie-0675.html",
        "cover": "./75.jpg"
    },
    {
        "title": "俄罗斯小说",
        "region": "俄罗斯",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/历史/文学改编",
        "tags": "陀思妥耶夫斯基 当代重构 西伯利亚史诗",
        "url": "./movie-0676.html",
        "cover": "./76.jpg"
    },
    {
        "title": "新宿天鹅2:横滨暴走",
        "region": "日本",
        "type": "电影",
        "year": "2017",
        "genre": "动作,犯罪,喜剧",
        "tags": "黑帮火拼 男公关 热血笨蛋 日式暴力美学",
        "url": "./movie-0677.html",
        "cover": "./77.jpg"
    },
    {
        "title": "夺命十二小时",
        "region": "中国内地",
        "type": "电影",
        "year": "2025",
        "genre": "动作,犯罪,悬疑",
        "tags": "极限营救 复仇 暴风雪山庄 反转",
        "url": "./movie-0678.html",
        "cover": "./78.jpg"
    },
    {
        "title": "黑街霸王",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪剧情",
        "tags": "夜市 黑帮 父子 底层",
        "url": "./movie-0679.html",
        "cover": "./79.jpg"
    },
    {
        "title": "特工的错误",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2024",
        "genre": "动作/谍战",
        "tags": "双面间谍 自我背叛 身份混乱 冷战遗产",
        "url": "./movie-0680.html",
        "cover": "./80.jpg"
    },
    {
        "title": "茜茜皇后",
        "region": "奥地利/德国",
        "type": "电视剧",
        "year": "2022",
        "genre": "历史/传记",
        "tags": "宫廷反叛 女性觉醒 皇室悲剧 美丽代价",
        "url": "./movie-0681.html",
        "cover": "./81.jpg"
    },
    {
        "title": "恶夜活死鸡",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/喜剧",
        "tags": "丧尸片 黑色幽默 农场惊魂",
        "url": "./movie-0682.html",
        "cover": "./82.jpg"
    },
    {
        "title": "无腿先生",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "传记/励志",
        "tags": "残疾人 登山 真实改编 信念",
        "url": "./movie-0683.html",
        "cover": "./83.jpg"
    },
    {
        "title": "太阳王子 霍尔斯的大冒险",
        "region": "日本",
        "type": "电影/动画",
        "year": "1968",
        "genre": "动画/冒险/奇幻",
        "tags": "高畑勋 宫崎骏 经典 北欧 成长",
        "url": "./movie-0684.html",
        "cover": "./84.jpg"
    },
    {
        "title": "超八之年",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,惊悚",
        "tags": "记忆删除 阴谋 反乌托邦 8mm胶片",
        "url": "./movie-0685.html",
        "cover": "./85.jpg"
    },
    {
        "title": "重生之爱",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "爱情,奇幻",
        "tags": "时空循环 救赎 青春遗憾",
        "url": "./movie-0686.html",
        "cover": "./86.jpg"
    },
    {
        "title": "九二神雕之痴心情长剑",
        "region": "中国香港",
        "type": "电影",
        "year": "2026",
        "genre": "武侠、奇幻、爱情",
        "tags": "古装 神话 宿命 剑灵",
        "url": "./movie-0687.html",
        "cover": "./87.jpg"
    },
    {
        "title": "血裸祭",
        "region": "东南亚(泰国/柬埔寨)",
        "type": "电影",
        "year": "2018",
        "genre": "恐怖,民俗,惊悚",
        "tags": "原始巫祭 丛林邪教 裸身仪式 轮回诅咒 民俗恐怖",
        "url": "./movie-0688.html",
        "cover": "./88.jpg"
    },
    {
        "title": "圈套3",
        "region": "日本",
        "type": "电视剧",
        "year": "2005",
        "genre": "悬疑/喜剧/奇幻",
        "tags": "日式冷幽默 超能力 物理学家 魔术解密 邪教",
        "url": "./movie-0689.html",
        "cover": "./89.jpg"
    },
    {
        "title": "黑月亮",
        "region": "德国/奥地利",
        "type": "电影",
        "year": "2025",
        "genre": "科幻/悬疑",
        "tags": "月球矩阵 集体幻觉 哲学惊悚 视觉美学",
        "url": "./movie-0690.html",
        "cover": "./90.jpg"
    },
    {
        "title": "表情奇幻冒险",
        "region": "美国",
        "type": "动画电影",
        "year": "2023",
        "genre": "喜剧,冒险,奇幻",
        "tags": "元宇宙 情绪 解谜 打工族",
        "url": "./movie-0691.html",
        "cover": "./91.jpg"
    },
    {
        "title": "小太阳达芬妮",
        "region": "法国",
        "type": "动画电影",
        "year": "2021",
        "genre": "动画/冒险/家庭",
        "tags": "成长 勇气 奇幻",
        "url": "./movie-0692.html",
        "cover": "./92.jpg"
    },
    {
        "title": "太坏了",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/青春",
        "tags": "高中 派对 恶搞 兄弟情 反转",
        "url": "./movie-0693.html",
        "cover": "./93.jpg"
    },
    {
        "title": "量子力学",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,悬疑,惊悚",
        "tags": "平行宇宙 量子纠缠 硬科幻 烧脑",
        "url": "./movie-0694.html",
        "cover": "./94.jpg"
    },
    {
        "title": "无法攻略的女人",
        "region": "韩国",
        "type": "电视剧",
        "year": "2024",
        "genre": "浪漫/爱情",
        "tags": "财阀 互怼 契约恋爱 姐弟恋",
        "url": "./movie-0695.html",
        "cover": "./95.jpg"
    },
    {
        "title": "费城实验",
        "region": "美国",
        "type": "电影",
        "year": "2012",
        "genre": "科幻/悬疑/惊悚",
        "tags": "隐形实验 时空穿越 军方阴谋 平行世界 量子纠缠",
        "url": "./movie-0696.html",
        "cover": "./96.jpg"
    },
    {
        "title": "黑道家族 第三季",
        "region": "美国",
        "type": "剧集",
        "year": "2001",
        "genre": "剧情/犯罪/黑色幽默",
        "tags": "黑帮史诗 心理分析 家庭伦理 权力游戏",
        "url": "./movie-0697.html",
        "cover": "./97.jpg"
    },
    {
        "title": "黑社会以和为贵",
        "region": "香港",
        "type": "电影",
        "year": "2006",
        "genre": "犯罪/剧情",
        "tags": "黑帮 权斗 杜琪峰",
        "url": "./movie-0698.html",
        "cover": "./98.jpg"
    },
    {
        "title": "似曾相识",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情,科幻,悬疑",
        "tags": "既视感 记忆植入 咖啡馆邂逅 时间循环 神经科学",
        "url": "./movie-0699.html",
        "cover": "./99.jpg"
    },
    {
        "title": "夜之门",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2023",
        "genre": "奇幻、爱情、历史",
        "tags": "时光旅馆 战争亡灵 遗憾 二战 超现实",
        "url": "./movie-0700.html",
        "cover": "./100.jpg"
    },
    {
        "title": "一个美国消防员的生活",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,传记",
        "tags": "职业 家庭 牺牲 写实",
        "url": "./movie-0701.html",
        "cover": "./101.jpg"
    },
    {
        "title": "女子警察的逆袭2021",
        "region": "日本",
        "type": "剧集",
        "year": "2021",
        "genre": "喜剧,警务,剧情",
        "tags": "职场 女警 日常系 热血",
        "url": "./movie-0702.html",
        "cover": "./102.jpg"
    },
    {
        "title": "黑话律师",
        "region": "韩国",
        "type": "电视剧",
        "year": "2024",
        "genre": "悬疑犯罪",
        "tags": "律政 欺诈 以恶制恶",
        "url": "./movie-0703.html",
        "cover": "./103.jpg"
    },
    {
        "title": "异教徒的标志",
        "region": "美国/英国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/惊悚",
        "tags": "邪教 心理恐怖 民俗 孤立无援",
        "url": "./movie-0704.html",
        "cover": "./104.jpg"
    },
    {
        "title": "珍与艾玛",
        "region": "加拿大",
        "type": "电影",
        "year": "2022",
        "genre": "剧情,同性,运动",
        "tags": "女子冰球 中老年爱情 出柜 第二春 温情",
        "url": "./movie-0705.html",
        "cover": "./105.jpg"
    },
    {
        "title": "温柔本色",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,同性,文艺",
        "tags": "跨性别者 中年危机 温情",
        "url": "./movie-0706.html",
        "cover": "./106.jpg"
    },
    {
        "title": "海鲨一号",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作/悬疑/战争",
        "tags": "潜艇 间谍 冷战 深海 谍战",
        "url": "./movie-0707.html",
        "cover": "./107.jpg"
    },
    {
        "title": "坐稳车泰欣娜",
        "region": "芬兰",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/公路",
        "tags": "北欧 荒诞 独立 女性 黑色幽默",
        "url": "./movie-0708.html",
        "cover": "./108.jpg"
    },
    {
        "title": "武动乾坤第一季",
        "region": "中国大陆",
        "type": "剧集/动画",
        "year": "2025",
        "genre": "奇幻,冒险,古装",
        "tags": "修仙 逆袭 热血战斗 宗门斗争 异宝",
        "url": "./movie-0709.html",
        "cover": "./109.jpg"
    },
    {
        "title": "拉玛卡",
        "region": "西班牙",
        "type": "电影",
        "year": "2022",
        "genre": "惊悚/悬疑/犯罪",
        "tags": "密室 复仇 反转",
        "url": "./movie-0710.html",
        "cover": "./110.jpg"
    },
    {
        "title": "球场上的朝阳",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "运动/励志",
        "tags": "足球 校园 弱旅逆袭 热血",
        "url": "./movie-0711.html",
        "cover": "./111.jpg"
    },
    {
        "title": "绝情海",
        "region": "中国",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,奇幻",
        "tags": "失忆 深海 执念 疗愈",
        "url": "./movie-0712.html",
        "cover": "./112.jpg"
    },
    {
        "title": "强袭魔女第二季",
        "region": "日本",
        "type": "TV剧集",
        "year": "2026",
        "genre": "动画,科幻,战斗",
        "tags": "军事 魔法少女 架空历史 飞行 异能",
        "url": "./movie-0713.html",
        "cover": "./113.jpg"
    },
    {
        "title": "小女追爱记",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧,爱情",
        "tags": "反转 社死现场 契约恋爱",
        "url": "./movie-0714.html",
        "cover": "./114.jpg"
    },
    {
        "title": "风影",
        "region": "中国香港/法国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/武侠/文艺",
        "tags": "女杀手 盲剑客 诗意暴力 宿命",
        "url": "./movie-0715.html",
        "cover": "./115.jpg"
    },
    {
        "title": "我生命中最美丽的日子",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,家庭,战争",
        "tags": "二战 疗愈 记忆 返璞归真",
        "url": "./movie-0716.html",
        "cover": "./116.jpg"
    },
    {
        "title": "非洲之王",
        "region": "德国",
        "type": "电影",
        "year": "2007",
        "genre": "喜剧/家庭/冒险",
        "tags": "非洲旅行 冒牌国王 家庭和解 乌龙事件 酋长",
        "url": "./movie-0717.html",
        "cover": "./117.jpg"
    },
    {
        "title": "雨光",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/爱情",
        "tags": "雨声 盲人调音师 治愈系 文艺向 错过与重逢",
        "url": "./movie-0718.html",
        "cover": "./118.jpg"
    },
    {
        "title": "准妈妈四重奏",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "喜剧/家庭",
        "tags": "孕期喜剧 四位闺蜜 产房风云 社畜怀孕 女性群像",
        "url": "./movie-0719.html",
        "cover": "./119.jpg"
    },
    {
        "title": "恶果之家",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/心理/超自然",
        "tags": "凶宅 因果 循环 家庭诅咒",
        "url": "./movie-0720.html",
        "cover": "./120.jpg"
    },
    {
        "title": "杀手烙印",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "动作/犯罪/黑帮",
        "tags": "杀手 纹身 宿敌 暴力美学",
        "url": "./movie-0721.html",
        "cover": "./121.jpg"
    },
    {
        "title": "落差",
        "region": "韩国",
        "type": "电影",
        "year": "2020",
        "genre": "悬疑/惊悚",
        "tags": "阶级隐喻 垂直城市 电梯恐惧",
        "url": "./movie-0722.html",
        "cover": "./122.jpg"
    },
    {
        "title": "不准掉头",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪,悬疑,公路",
        "tags": "黑色幽默 命运反转 荒漠追逃",
        "url": "./movie-0723.html",
        "cover": "./123.jpg"
    },
    {
        "title": "凡人修仙传真人版",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2027",
        "genre": "古装/奇幻/冒险",
        "tags": "修仙 逆袭 长篇小说改编 凡人流",
        "url": "./movie-0724.html",
        "cover": "./124.jpg"
    },
    {
        "title": "男子玩品",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑,犯罪",
        "tags": "心理操控 模特行业 暗黑 反转",
        "url": "./movie-0725.html",
        "cover": "./125.jpg"
    },
    {
        "title": "加冕街之路",
        "region": "英国",
        "type": "剧情/家庭",
        "year": "2023",
        "genre": "生活/年代",
        "tags": "英国工薪阶层 邻里 养老 温情",
        "url": "./movie-0726.html",
        "cover": "./126.jpg"
    },
    {
        "title": "第十一个妈妈",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情家庭",
        "tags": "继母 虐童 救赎 韩式催泪",
        "url": "./movie-0727.html",
        "cover": "./127.jpg"
    },
    {
        "title": "阿波罗13号",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻/灾难",
        "tags": "太空救援 真实改编 绝地求生 团队协作",
        "url": "./movie-0728.html",
        "cover": "./128.jpg"
    },
    {
        "title": "卫星男孩",
        "region": "中国大陆",
        "type": "电影",
        "year": "2028",
        "genre": "科幻/剧情",
        "tags": "孤独 外星信号 童年",
        "url": "./movie-0729.html",
        "cover": "./129.jpg"
    },
    {
        "title": "最后的歌舞女郎",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,音乐",
        "tags": "百老汇 谢幕 中年危机 梦想",
        "url": "./movie-0730.html",
        "cover": "./130.jpg"
    },
    {
        "title": "回声潮世代",
        "region": "美国",
        "type": "电视剧",
        "year": "2024",
        "genre": "剧情/家庭",
        "tags": "代际冲突 社会变迁 家庭史诗 经济危机",
        "url": "./movie-0731.html",
        "cover": "./131.jpg"
    },
    {
        "title": "乐队男孩:从何而来",
        "region": "中国台湾",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/同性/音乐",
        "tags": "青春 乐队 成长 身份认同 90年代",
        "url": "./movie-0732.html",
        "cover": "./132.jpg"
    },
    {
        "title": "拥抱星星的月亮",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2023",
        "genre": "家庭,伦理,治愈",
        "tags": "姐妹 亲情羁绊 代际冲突 温情 现实题材",
        "url": "./movie-0733.html",
        "cover": "./133.jpg"
    },
    {
        "title": "上流秘笈",
        "region": "中国香港",
        "type": "剧集",
        "year": "2022",
        "genre": "剧情,悬疑,家庭",
        "tags": "豪门 复仇 女频爽文",
        "url": "./movie-0734.html",
        "cover": "./134.jpg"
    },
    {
        "title": "二十一世纪神话学",
        "region": "法国",
        "type": "电视剧",
        "year": "2024",
        "genre": "剧情,奇幻,哲学",
        "tags": "现代神话 存在主义 城市传说 法剧",
        "url": "./movie-0735.html",
        "cover": "./135.jpg"
    },
    {
        "title": "她爱",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "爱情悬疑",
        "tags": "百合 记忆删除 科幻伦理 替身文学",
        "url": "./movie-0736.html",
        "cover": "./136.jpg"
    },
    {
        "title": "拜见婆婆大人II",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2010",
        "genre": "家庭/喜剧",
        "tags": "婆媳大战 台剧喜剧 夸张反转 婆婆变儿媳",
        "url": "./movie-0737.html",
        "cover": "./137.jpg"
    },
    {
        "title": "最后的面具",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/惊悚",
        "tags": "威尼斯狂欢节 面具杀人魔 身份互换",
        "url": "./movie-0738.html",
        "cover": "./138.jpg"
    },
    {
        "title": "朱门情仇",
        "region": "中国香港",
        "type": "剧集",
        "year": "2022",
        "genre": "年代,爱情,悬疑",
        "tags": "豪门 复仇 旗袍 虐恋",
        "url": "./movie-0739.html",
        "cover": "./139.jpg"
    },
    {
        "title": "约瑟夫·钱伯斯的正直",
        "region": "美国",
        "type": "电影",
        "year": "2027",
        "genre": "剧情,传记,历史",
        "tags": "种族歧视 司法正义 平民英雄 真人改编",
        "url": "./movie-0740.html",
        "cover": "./140.jpg"
    },
    {
        "title": "杀手:代号47",
        "region": "美国/德国",
        "type": "电影",
        "year": "2007",
        "genre": "动作,惊悚",
        "tags": "杀手 光头 基因改造 反套路",
        "url": "./movie-0741.html",
        "cover": "./141.jpg"
    },
    {
        "title": "江照黎明",
        "region": "中国",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/犯罪",
        "tags": "长江浮尸 码头社区 二十年旧案",
        "url": "./movie-0742.html",
        "cover": "./142.jpg"
    },
    {
        "title": "野鸭变凤凰",
        "region": "美国",
        "type": "电影",
        "year": "1992",
        "genre": "喜剧/家庭/运动",
        "tags": "冰球 励志 熊孩子",
        "url": "./movie-0743.html",
        "cover": "./143.jpg"
    },
    {
        "title": "大学生轶事",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "青春、喜剧、校园",
        "tags": "大学宿舍 奇葩室友 社团 毕业倒计时 群像",
        "url": "./movie-0744.html",
        "cover": "./144.jpg"
    },
    {
        "title": "新世纪福尔摩斯:地狱新娘",
        "region": "英国",
        "type": "电影",
        "year": "2016",
        "genre": "悬疑,犯罪",
        "tags": "维多利亚时代 时空交错 特别篇",
        "url": "./movie-0745.html",
        "cover": "./145.jpg"
    },
    {
        "title": "东月西阳",
        "region": "日本",
        "type": "动画电影",
        "year": "2004",
        "genre": "爱情,科幻",
        "tags": "东京 月球 异地恋",
        "url": "./movie-0746.html",
        "cover": "./146.jpg"
    },
    {
        "title": "两不疑第二季",
        "region": "中国大陆",
        "type": "动漫",
        "year": "2025",
        "genre": "喜剧/爱情/古风/搞笑",
        "tags": "灵魂互换 帝后CP 搞笑日常 权谋",
        "url": "./movie-0747.html",
        "cover": "./147.jpg"
    },
    {
        "title": "东北风云2020",
        "region": "中国大陆",
        "type": "电影",
        "year": "2020",
        "genre": "喜剧/犯罪",
        "tags": "东北幽默 笨贼 误打误撞",
        "url": "./movie-0748.html",
        "cover": "./148.jpg"
    },
    {
        "title": "水下之旅",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "惊悚/冒险",
        "tags": "深海 遗迹 怪物 失温",
        "url": "./movie-0749.html",
        "cover": "./149.jpg"
    },
    {
        "title": "我的妈咪不是人",
        "region": "中国",
        "type": "剧集",
        "year": "2026",
        "genre": "喜剧,科幻,家庭",
        "tags": "机器人妈妈 育儿 冲突 治愈",
        "url": "./movie-0750.html",
        "cover": "./150.jpg"
    },
    {
        "title": "世界大马戏团",
        "region": "美国/英国",
        "type": "剧集",
        "year": "2027",
        "genre": "剧情/历史/悬疑",
        "tags": "马戏团 二战 超现实 群像",
        "url": "./movie-0751.html",
        "cover": "./1.jpg"
    },
    {
        "title": "游览意大利",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "公路、喜剧、剧情",
        "tags": "老年爱情 房车旅行 黑手党 遗产 意式幽默",
        "url": "./movie-0752.html",
        "cover": "./2.jpg"
    },
    {
        "title": "她痴迷于我的丈夫",
        "region": "韩国",
        "type": "电视剧",
        "year": "2023",
        "genre": "悬疑,爱情,惊悚",
        "tags": "出轨 复仇 心理学 第三者",
        "url": "./movie-0753.html",
        "cover": "./3.jpg"
    },
    {
        "title": "死亡军团",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "动作/悬疑/科幻",
        "tags": "雇佣兵 永生 阴谋 暗黑 高科技",
        "url": "./movie-0754.html",
        "cover": "./4.jpg"
    },
    {
        "title": "斯洛沃之家",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/历史",
        "tags": "孤儿院 苏联末期 成长 友谊 逃亡",
        "url": "./movie-0755.html",
        "cover": "./5.jpg"
    },
    {
        "title": "决战擂台",
        "region": "香港",
        "type": "电影",
        "year": "2023",
        "genre": "动作,运动,剧情",
        "tags": "综合格斗 逆袭 师徒情 血汗 励志",
        "url": "./movie-0756.html",
        "cover": "./6.jpg"
    },
    {
        "title": "猛兽噬人",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖,冒险",
        "tags": "荒野求生 远古巨兽 血腥猎杀 小成本爆款",
        "url": "./movie-0757.html",
        "cover": "./7.jpg"
    },
    {
        "title": "鬼玩人第三季",
        "region": "美国",
        "type": "电视剧",
        "year": "2025",
        "genre": "恐怖,喜剧,奇幻",
        "tags": "血腥 恶搞 尸变 末世",
        "url": "./movie-0758.html",
        "cover": "./8.jpg"
    },
    {
        "title": "白色空间",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "科幻/悬疑",
        "tags": "记忆删除 实验室诡事 身份谜团 哲学拷问",
        "url": "./movie-0759.html",
        "cover": "./9.jpg"
    },
    {
        "title": "无间行者",
        "region": "香港",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,动作,悬疑",
        "tags": "卧底 黑帮 双雄对决 心理博弈",
        "url": "./movie-0760.html",
        "cover": "./10.jpg"
    },
    {
        "title": "和你的第100次恋爱",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "奇幻爱情",
        "tags": "时间循环 纯爱 救赎 催泪 命运",
        "url": "./movie-0761.html",
        "cover": "./11.jpg"
    },
    {
        "title": "血魔回魂",
        "region": "中国香港",
        "type": "电影",
        "year": "1996",
        "genre": "恐怖/惊悚",
        "tags": "僵尸 茅山术 附身 九叔 童年阴影",
        "url": "./movie-0762.html",
        "cover": "./12.jpg"
    },
    {
        "title": "村里来了个直播女神",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情,喜剧,乡村",
        "tags": "网红经济 城乡差异 乡村振兴 励志",
        "url": "./movie-0763.html",
        "cover": "./13.jpg"
    },
    {
        "title": "人造怪物",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻/惊悚",
        "tags": "基因编辑 伦理困境 生物恐怖 密室逃生",
        "url": "./movie-0764.html",
        "cover": "./14.jpg"
    },
    {
        "title": "恐怖旅舍第二站",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,惊悚,血腥",
        "tags": "虐杀 公路恐怖 密闭空间 反转 B级片",
        "url": "./movie-0765.html",
        "cover": "./15.jpg"
    },
    {
        "title": "激情.别动",
        "region": "香港",
        "type": "电影",
        "year": "2026",
        "genre": "爱情/惊悚/心理",
        "tags": "偷情 密室 人性博弈 反转 伦理",
        "url": "./movie-0766.html",
        "cover": "./16.jpg"
    },
    {
        "title": "10+10",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,家庭,社会",
        "tags": "合集电影 代际 台湾社会 短片集 人文关怀",
        "url": "./movie-0767.html",
        "cover": "./17.jpg"
    },
    {
        "title": "死亡与复活",
        "region": "德国",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑/奇幻",
        "tags": "轮回 记忆碎片 宗教隐喻 心理惊悚",
        "url": "./movie-0768.html",
        "cover": "./18.jpg"
    },
    {
        "title": "榆木湖边的房子",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑,惊悚,剧情",
        "tags": "湖景房 邻居 失踪 秘密 心理惊悚",
        "url": "./movie-0769.html",
        "cover": "./19.jpg"
    },
    {
        "title": "戏杀",
        "region": "中国大陆",
        "type": "网剧/短剧",
        "year": "2025",
        "genre": "悬疑/古装",
        "tags": "梨园 密室杀人 本格 戏中戏",
        "url": "./movie-0770.html",
        "cover": "./20.jpg"
    },
    {
        "title": "钢铁少女",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "科幻,动作",
        "tags": "机甲 少女 末日 人工智能",
        "url": "./movie-0771.html",
        "cover": "./21.jpg"
    },
    {
        "title": "墓地邂逅",
        "region": "加拿大",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/伪纪录片",
        "tags": "灵异直播 废弃教堂 附身",
        "url": "./movie-0772.html",
        "cover": "./22.jpg"
    },
    {
        "title": "无懈可击2016",
        "region": "美国",
        "type": "电影",
        "year": "2016",
        "genre": "悬疑犯罪",
        "tags": "高智商犯罪 完美不在场证明 警匪博弈 反转",
        "url": "./movie-0773.html",
        "cover": "./23.jpg"
    },
    {
        "title": "失匙开锁佬",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2022",
        "genre": "悬疑、职业",
        "tags": "开锁 单元剧 人性",
        "url": "./movie-0774.html",
        "cover": "./24.jpg"
    },
    {
        "title": "一千零一克",
        "region": "法国/德国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/爱情",
        "tags": "治愈系 计量学 跨文化 中年危机",
        "url": "./movie-0775.html",
        "cover": "./25.jpg"
    },
    {
        "title": "姻缘天定",
        "region": "泰国",
        "type": "电视剧",
        "year": "2018",
        "genre": "爱情,奇幻",
        "tags": "穿越 前世今生 搞笑 浪漫",
        "url": "./movie-0776.html",
        "cover": "./26.jpg"
    },
    {
        "title": "红男绿女青春乐",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "歌舞,喜剧,爱情",
        "tags": "高校音乐剧 颜色帮派 毕业晚会 红绿对决 翻拍经典",
        "url": "./movie-0777.html",
        "cover": "./27.jpg"
    },
    {
        "title": "幽灵终结者外传",
        "region": "美国",
        "type": "电视剧",
        "year": "2020",
        "genre": "科幻,动作,超自然",
        "tags": "平行宇宙 捉鬼 女性主角",
        "url": "./movie-0778.html",
        "cover": "./28.jpg"
    },
    {
        "title": "第阿侯叶战场",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "历史战争",
        "tags": "彝族 古代战争 以少胜多 冷兵器",
        "url": "./movie-0779.html",
        "cover": "./29.jpg"
    },
    {
        "title": "无烟煤",
        "region": "德国",
        "type": "剧集",
        "year": "2024",
        "genre": "犯罪,悬疑,剧情",
        "tags": "矿难 小镇秘密 阶级冲突 复仇",
        "url": "./movie-0780.html",
        "cover": "./30.jpg"
    },
    {
        "title": "西行纪",
        "region": "中国大陆",
        "type": "动画剧集",
        "year": "2025",
        "genre": "奇幻,冒险,动作",
        "tags": "西游 暗黑神话 热血 反传统",
        "url": "./movie-0781.html",
        "cover": "./31.jpg"
    },
    {
        "title": "猫眼三姐妹第一季",
        "region": "日本",
        "type": "剧集",
        "year": "2026",
        "genre": "动作/犯罪",
        "tags": "怪盗 姐妹情 现代翻拍",
        "url": "./movie-0782.html",
        "cover": "./32.jpg"
    },
    {
        "title": "日本黑社会",
        "region": "日本",
        "type": "电影",
        "year": "2019",
        "genre": "剧情,犯罪,黑帮",
        "tags": "老年极道 底层挣扎 泡沫时代遗恨",
        "url": "./movie-0783.html",
        "cover": "./33.jpg"
    },
    {
        "title": "聚焦人生",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情",
        "tags": "职场 新闻调查 理想主义",
        "url": "./movie-0784.html",
        "cover": "./34.jpg"
    },
    {
        "title": "魔高一丈",
        "region": "中国香港",
        "type": "电影",
        "year": "1987",
        "genre": "喜剧/奇幻/动作",
        "tags": "茅山术 僵尸 斗法 港式无厘头 午马",
        "url": "./movie-0785.html",
        "cover": "./35.jpg"
    },
    {
        "title": "苏恩之争",
        "region": "韩国",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情,商战,历史",
        "tags": "财阀 继承权 狗血反转 虚构历史",
        "url": "./movie-0786.html",
        "cover": "./36.jpg"
    },
    {
        "title": "危险警告",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,灾难,动作",
        "tags": "地震 地铁 生死时速",
        "url": "./movie-0787.html",
        "cover": "./37.jpg"
    },
    {
        "title": "恐怖之森2",
        "region": "日本",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖/悬疑",
        "tags": "J-Horror 森林 都市传说 诅咒 续集",
        "url": "./movie-0788.html",
        "cover": "./38.jpg"
    },
    {
        "title": "幕后玩家",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/犯罪",
        "tags": "公关 反转 商战 直播 操控",
        "url": "./movie-0789.html",
        "cover": "./39.jpg"
    },
    {
        "title": "相反的一天",
        "region": "美国",
        "type": "电影",
        "year": "2020",
        "genre": "喜剧/家庭/奇幻",
        "tags": "奇幻设定 亲子 身份互换 搞笑 温情",
        "url": "./movie-0790.html",
        "cover": "./40.jpg"
    },
    {
        "title": "谁曾见过龙之脚趾",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻/冒险/家庭",
        "tags": "童话 寻龙 诗意 治愈",
        "url": "./movie-0791.html",
        "cover": "./41.jpg"
    },
    {
        "title": "神秘足迹",
        "region": "中国",
        "type": "剧集",
        "year": "2023",
        "genre": "悬疑/犯罪",
        "tags": "足迹学 连环案 刑侦",
        "url": "./movie-0792.html",
        "cover": "./42.jpg"
    },
    {
        "title": "小熊维尼之长鼻怪大冒险",
        "region": "美国",
        "type": "动画电影",
        "year": "2026",
        "genre": "动画,家庭",
        "tags": "冒险 友情 治愈 童话",
        "url": "./movie-0793.html",
        "cover": "./43.jpg"
    },
    {
        "title": "黑暗之地",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/惊悚",
        "tags": "密室 心理 生存 反转 人性",
        "url": "./movie-0794.html",
        "cover": "./44.jpg"
    },
    {
        "title": "刘少奇的故事",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2019",
        "genre": "传记,历史",
        "tags": "伟人足迹 革命情怀 家国天下",
        "url": "./movie-0795.html",
        "cover": "./45.jpg"
    },
    {
        "title": "鼓舞飞扬",
        "region": "香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,音乐",
        "tags": "鼓手 少年 励志",
        "url": "./movie-0796.html",
        "cover": "./46.jpg"
    },
    {
        "title": "野性的冬天",
        "region": "中国内地",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/冒险/家庭",
        "tags": "东北 父女 荒野求生 和解",
        "url": "./movie-0797.html",
        "cover": "./47.jpg"
    },
    {
        "title": "钻石王牌第三季",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "动画/运动",
        "tags": "棒球 热血 成长 甲子园",
        "url": "./movie-0798.html",
        "cover": "./48.jpg"
    },
    {
        "title": "欢乐喜剧人 老友季",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2025",
        "genre": "喜剧,真人秀",
        "tags": "喜剧人重聚 老友对决 经典角色再现 即兴喜剧 情怀杀",
        "url": "./movie-0799.html",
        "cover": "./49.jpg"
    },
    {
        "title": "凶宅勿近",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2024",
        "genre": "恐怖、灵异、悬疑",
        "tags": "凶宅 直播 民俗 怨念",
        "url": "./movie-0800.html",
        "cover": "./50.jpg"
    },
    {
        "title": "少年师爷之祭禹盛典",
        "region": "中国大陆",
        "type": "动画片",
        "year": "2015",
        "genre": "动画/冒险",
        "tags": "绍兴 大禹 传统文化 益智 少年英雄",
        "url": "./movie-0801.html",
        "cover": "./51.jpg"
    },
    {
        "title": "养鬼吃人2",
        "region": "英国",
        "type": "电影",
        "year": "1988",
        "genre": "恐怖/奇幻",
        "tags": "地狱 修道士 血腥 超自然",
        "url": "./movie-0802.html",
        "cover": "./52.jpg"
    },
    {
        "title": "虎侠歼仇",
        "region": "中国香港",
        "type": "电影",
        "year": "1973",
        "genre": "武侠,动作",
        "tags": "复仇 虎形拳 血债血偿",
        "url": "./movie-0803.html",
        "cover": "./53.jpg"
    },
    {
        "title": "传奇酒馆",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2024",
        "genre": "奇幻、剧情、群像",
        "tags": "深夜食堂风 许愿 代价 单元剧 人生百态",
        "url": "./movie-0804.html",
        "cover": "./54.jpg"
    },
    {
        "title": "「舞」亲最爱你",
        "region": "中国",
        "type": "电影",
        "year": "2025",
        "genre": "音乐家庭",
        "tags": "舞蹈 亲情 代际冲突 广场舞 街舞",
        "url": "./movie-0805.html",
        "cover": "./55.jpg"
    },
    {
        "title": "我的孙悟空",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动画,家庭",
        "tags": "成长 名著改编 齐天大圣 父子",
        "url": "./movie-0806.html",
        "cover": "./56.jpg"
    },
    {
        "title": "卡美洛",
        "region": "英国",
        "type": "剧集",
        "year": "2026",
        "genre": "奇幻,历史,剧情",
        "tags": "亚瑟王 颠覆 政治惊悚 魔法 史诗",
        "url": "./movie-0807.html",
        "cover": "./57.jpg"
    },
    {
        "title": "圆梦",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/奇幻",
        "tags": "梦境 亲情 治愈 元宇宙 告别",
        "url": "./movie-0808.html",
        "cover": "./58.jpg"
    },
    {
        "title": "一嫁三丈夫",
        "region": "中国大陆",
        "type": "微短剧",
        "year": "2025",
        "genre": "喜剧/爱情",
        "tags": "荒诞 女尊 反转 酋长",
        "url": "./movie-0809.html",
        "cover": "./59.jpg"
    },
    {
        "title": "温柔的杀人者记录",
        "region": "日本",
        "type": "电影",
        "year": "2019",
        "genre": "犯罪,悬疑,剧情",
        "tags": "连环杀手 缉凶 人性拷问",
        "url": "./movie-0810.html",
        "cover": "./60.jpg"
    },
    {
        "title": "泳舞姐妹",
        "region": "英国/叙利亚",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,传记",
        "tags": "难民 花样游泳 姐妹 奥运",
        "url": "./movie-0811.html",
        "cover": "./61.jpg"
    },
    {
        "title": "加拿大人",
        "region": "加拿大",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,西部,历史",
        "tags": "拓荒者 孤独 冷峻美学",
        "url": "./movie-0812.html",
        "cover": "./62.jpg"
    },
    {
        "title": "哭泣杀神4 雄首冬狱",
        "region": "日本",
        "type": "OVA/电影",
        "year": "2024",
        "genre": "动作,犯罪",
        "tags": "杀手 越狱 雪地监狱 极道 复仇",
        "url": "./movie-0813.html",
        "cover": "./63.jpg"
    },
    {
        "title": "匿爱",
        "region": "泰国",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情,剧情",
        "tags": "暗恋 双向奔赴 虐心 校园",
        "url": "./movie-0814.html",
        "cover": "./64.jpg"
    },
    {
        "title": "致允熙",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/爱情/同性",
        "tags": "书信 怀旧 暗恋 小镇 女性",
        "url": "./movie-0815.html",
        "cover": "./65.jpg"
    },
    {
        "title": "香椿",
        "region": "中国大陆",
        "type": "电影",
        "year": "2027",
        "genre": "剧情/家庭",
        "tags": "乡土 亲情 季节流转 代际和解",
        "url": "./movie-0816.html",
        "cover": "./66.jpg"
    },
    {
        "title": "诱惑医生一百天",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2003",
        "genre": "爱情,喜剧,剧情",
        "tags": "医院 日久生情 轻喜剧 港风 女追男",
        "url": "./movie-0817.html",
        "cover": "./67.jpg"
    },
    {
        "title": "牛角石",
        "region": "中国大陆",
        "type": "电影",
        "year": "1974",
        "genre": "剧情,历史,乡村",
        "tags": "集体化 农村 斗争 怀旧 纪实",
        "url": "./movie-0818.html",
        "cover": "./68.jpg"
    },
    {
        "title": "南极料理人",
        "region": "日本",
        "type": "电影",
        "year": "2009",
        "genre": "剧情,美食",
        "tags": "南极 科考队 料理 孤独 治愈",
        "url": "./movie-0819.html",
        "cover": "./69.jpg"
    },
    {
        "title": "白面包车里的人",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "悬疑/犯罪/社会",
        "tags": "拐卖 追凶 小人物 真实感",
        "url": "./movie-0820.html",
        "cover": "./70.jpg"
    },
    {
        "title": "女神(2017年电影)",
        "region": "韩国",
        "type": "电影",
        "year": "2017",
        "genre": "剧情,悬疑",
        "tags": "校园霸凌 社交网络 复仇 女性",
        "url": "./movie-0821.html",
        "cover": "./71.jpg"
    },
    {
        "title": "黑色手铐",
        "region": "美国",
        "type": "电影",
        "year": "1977",
        "genre": "犯罪,惊悚,黑色电影",
        "tags": "连环杀手 警探 70年代复古 雨夜 追凶",
        "url": "./movie-0822.html",
        "cover": "./72.jpg"
    },
    {
        "title": "麦克白1971",
        "region": "英国/美国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/历史/战争",
        "tags": "莎翁改编 权力宿命 暴力美学",
        "url": "./movie-0823.html",
        "cover": "./73.jpg"
    },
    {
        "title": "消失的呐喊",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,悬疑",
        "tags": "灵异 惊悚 心理 超自然",
        "url": "./movie-0824.html",
        "cover": "./74.jpg"
    },
    {
        "title": "抽丝剥茧",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,犯罪",
        "tags": "法医 密室 反转 高智商",
        "url": "./movie-0825.html",
        "cover": "./75.jpg"
    },
    {
        "title": "一周",
        "region": "加拿大",
        "type": "电影",
        "year": "2009",
        "genre": "剧情,公路,文艺",
        "tags": "生命倒计时 摩托车旅行 自我救赎 绝症人生",
        "url": "./movie-0826.html",
        "cover": "./76.jpg"
    },
    {
        "title": "明星志愿2",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2019",
        "genre": "剧情/爱情/行业",
        "tags": "娱乐圈 练习生 经纪人 出道 友情岁月",
        "url": "./movie-0827.html",
        "cover": "./77.jpg"
    },
    {
        "title": "拼命三郎",
        "region": "中国香港",
        "type": "电影",
        "year": "1989",
        "genre": "动作,犯罪,剧情",
        "tags": "警匪 兄弟情 港式暴力美学",
        "url": "./movie-0828.html",
        "cover": "./78.jpg"
    },
    {
        "title": "这个杀手不太冷静",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,动作,犯罪",
        "tags": "冒牌杀手 黑帮闹剧 戏中戏",
        "url": "./movie-0829.html",
        "cover": "./79.jpg"
    },
    {
        "title": "石油大亨",
        "region": "美国",
        "type": "剧集",
        "year": "2019",
        "genre": "犯罪/剧情/惊悚",
        "tags": "西部 家族斗争 黑色黄金",
        "url": "./movie-0830.html",
        "cover": "./80.jpg"
    },
    {
        "title": "奔跑者",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "动作,惊悚,体育",
        "tags": "跑酷 极限运动 黑帮",
        "url": "./movie-0831.html",
        "cover": "./81.jpg"
    },
    {
        "title": "半支烟国语",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/犯罪/怀旧",
        "tags": "香港 黑帮 记忆 寻找",
        "url": "./movie-0832.html",
        "cover": "./82.jpg"
    },
    {
        "title": "罗斌的烦恼",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "家庭/喜剧",
        "tags": "中年危机 养老 轻喜",
        "url": "./movie-0833.html",
        "cover": "./83.jpg"
    },
    {
        "title": "辛亥元勋蒋翊武",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "历史,传记,战争",
        "tags": "辛亥革命 革命烈士 武昌起义 清末",
        "url": "./movie-0834.html",
        "cover": "./84.jpg"
    },
    {
        "title": "桃太郎的海鹰",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "战争,剧情",
        "tags": "二战 神风特攻队 青春挽歌 反战",
        "url": "./movie-0835.html",
        "cover": "./85.jpg"
    },
    {
        "title": "杰出的女性",
        "region": "美国",
        "type": "电视剧",
        "year": "2023",
        "genre": "传记,剧情",
        "tags": "女权 职场 历史",
        "url": "./movie-0836.html",
        "cover": "./86.jpg"
    },
    {
        "title": "金车换玉人",
        "region": "中国",
        "type": "电视剧/短剧",
        "year": "2024",
        "genre": "喜剧/爱情",
        "tags": "豪门 替身 女强 反转 甜宠",
        "url": "./movie-0837.html",
        "cover": "./87.jpg"
    },
    {
        "title": "耶稣的甜血",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,悬疑,宗教",
        "tags": "宗教神秘 家族秘密 红酒 意大利",
        "url": "./movie-0838.html",
        "cover": "./88.jpg"
    },
    {
        "title": "大西洋帝国第三季",
        "region": "美国",
        "type": "剧集",
        "year": "2012",
        "genre": "剧情/犯罪",
        "tags": "禁酒令 黑帮 权力斗争 历史 多线叙事",
        "url": "./movie-0839.html",
        "cover": "./89.jpg"
    },
    {
        "title": "别去地下室",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖",
        "tags": "幽闭恐惧 民间传说 怪物 生存 密室",
        "url": "./movie-0840.html",
        "cover": "./90.jpg"
    },
    {
        "title": "星梦奇缘",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2023",
        "genre": "都市,励志",
        "tags": "娱乐圈 经纪人 造星 梦想",
        "url": "./movie-0841.html",
        "cover": "./91.jpg"
    },
    {
        "title": "救森动物联盟",
        "region": "美国",
        "type": "动画片",
        "year": "2025",
        "genre": "冒险动画",
        "tags": "环保 动物伙伴 正能量",
        "url": "./movie-0842.html",
        "cover": "./92.jpg"
    },
    {
        "title": "魅力四射4:一鼓作气",
        "region": "美国",
        "type": "电影",
        "year": "2015",
        "genre": "喜剧/运动/歌舞",
        "tags": "啦啦队 高校 逆袭 竞争对手联合 热血",
        "url": "./movie-0843.html",
        "cover": "./93.jpg"
    },
    {
        "title": "香蕉天堂",
        "region": "中国台湾",
        "type": "电影",
        "year": "1989",
        "genre": "剧情、历史、喜剧",
        "tags": "眷村 老兵 身份错位 反战 乡愁喜剧",
        "url": "./movie-0844.html",
        "cover": "./94.jpg"
    },
    {
        "title": "草莽神龙战三关",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "古装/动作",
        "tags": "武侠 硬核功夫 过关斩将 复仇",
        "url": "./movie-0845.html",
        "cover": "./95.jpg"
    },
    {
        "title": "异度凶情国语",
        "region": "中国香港",
        "type": "剧集",
        "year": "1994",
        "genre": "恐怖/悬疑",
        "tags": "灵异破案 前世今生 港式惊悚",
        "url": "./movie-0846.html",
        "cover": "./96.jpg"
    },
    {
        "title": "辣手寻芳",
        "region": "香港",
        "type": "电影",
        "year": "1993",
        "genre": "动作,犯罪,惊悚",
        "tags": "警匪 女性 卧底 枪战 黑帮",
        "url": "./movie-0847.html",
        "cover": "./97.jpg"
    },
    {
        "title": "你在何方",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,剧情",
        "tags": "时空交错 寻亲 记忆迷宫",
        "url": "./movie-0848.html",
        "cover": "./98.jpg"
    },
    {
        "title": "无限全纪录",
        "region": "中国大陆",
        "type": "纪录片",
        "year": "2023",
        "genre": "纪录/科技",
        "tags": "科普 宇宙 人工智能 前沿科技",
        "url": "./movie-0849.html",
        "cover": "./99.jpg"
    },
    {
        "title": "银瀑2:重现",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,惊悚",
        "tags": "续集 邪教 水源 反转",
        "url": "./movie-0850.html",
        "cover": "./100.jpg"
    },
    {
        "title": "型男主厨三星梦:巴黎篇",
        "region": "法国",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/职场",
        "tags": "美食 竞争 巴黎 米其林",
        "url": "./movie-0851.html",
        "cover": "./101.jpg"
    },
    {
        "title": "星星相吸惜",
        "region": "香港",
        "type": "电影",
        "year": "1995",
        "genre": "爱情/科幻",
        "tags": "外星恋 港式软科幻 浪漫轻喜 星爷配角团",
        "url": "./movie-0852.html",
        "cover": "./102.jpg"
    },
    {
        "title": "县厅招待课",
        "region": "日本",
        "type": "剧集",
        "year": "2023",
        "genre": "职场/喜剧",
        "tags": "公务员 地方振兴 热血职场",
        "url": "./movie-0853.html",
        "cover": "./103.jpg"
    },
    {
        "title": "英伦琵琶",
        "region": "中国香港",
        "type": "电影",
        "year": "1984",
        "genre": "动作/喜剧/音乐",
        "tags": "香港电影 伦敦 黑帮 琵琶 功夫喜剧",
        "url": "./movie-0854.html",
        "cover": "./104.jpg"
    },
    {
        "title": "敢梦有爱",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "爱情、奇幻、治愈",
        "tags": "双向奔赴 梦境连接 失忆恋人",
        "url": "./movie-0855.html",
        "cover": "./105.jpg"
    },
    {
        "title": "恐怖份子制造国度",
        "region": "中东/美国合拍",
        "type": "电影",
        "year": "2024",
        "genre": "战争剧情",
        "tags": "反恐战争 无人机 误炸 循环复仇",
        "url": "./movie-0856.html",
        "cover": "./106.jpg"
    },
    {
        "title": "暗金丑岛君:完结篇",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/犯罪",
        "tags": "高利贷 社会写实 人性深渊 日式残酷 系列完结",
        "url": "./movie-0857.html",
        "cover": "./107.jpg"
    },
    {
        "title": "色欲情狂",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚,情色,悬疑",
        "tags": "偷窥 艺术犯罪 心理扭曲 画作 双重人格",
        "url": "./movie-0858.html",
        "cover": "./108.jpg"
    },
    {
        "title": "地质灾难",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作,灾难,科幻",
        "tags": "特效大片 地心 救援 末日",
        "url": "./movie-0859.html",
        "cover": "./109.jpg"
    },
    {
        "title": "女人的面孔",
        "region": "瑞典",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/心理",
        "tags": "脸盲症 母亲复仇 北欧冷感 惊悚元素",
        "url": "./movie-0860.html",
        "cover": "./110.jpg"
    },
    {
        "title": "婚礼搞轰趴",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,爱情",
        "tags": "婚礼 闹剧 家人 疯狂一夜 群像",
        "url": "./movie-0861.html",
        "cover": "./111.jpg"
    },
    {
        "title": "美国最后的处女",
        "region": "美国",
        "type": "电影",
        "year": "1982",
        "genre": "青春,剧情",
        "tags": "80年代 性启蒙 残酷青春 失贞",
        "url": "./movie-0862.html",
        "cover": "./112.jpg"
    },
    {
        "title": "小豆豆电视台",
        "region": "日本",
        "type": "剧集",
        "year": "2016",
        "genre": "剧情,传记,温情",
        "tags": "黑柳彻子 NHK 昭和时代 电视史 满岛光",
        "url": "./movie-0863.html",
        "cover": "./113.jpg"
    },
    {
        "title": "纳瓦隆第十突击队",
        "region": "英国/美国",
        "type": "电影",
        "year": "1978",
        "genre": "战争/动作/冒险",
        "tags": "二战 特种作战 经典续作 炸桥",
        "url": "./movie-0864.html",
        "cover": "./114.jpg"
    },
    {
        "title": "12次同床",
        "region": "香港",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,剧情",
        "tags": "时间循环 婚姻危机 沟通 小成本",
        "url": "./movie-0865.html",
        "cover": "./115.jpg"
    },
    {
        "title": "我的冤家是条狗",
        "region": "英国",
        "type": "电影",
        "year": "2018",
        "genre": "喜剧/家庭/剧情",
        "tags": "宠物 遗愿 斗牛犬 治愈",
        "url": "./movie-0866.html",
        "cover": "./116.jpg"
    },
    {
        "title": "降龙神掌苏乞儿",
        "region": "中国大陆",
        "type": "网络电影",
        "year": "2022",
        "genre": "动作、武侠、奇幻",
        "tags": "乞丐 降龙 帮派 复仇 觉醒",
        "url": "./movie-0867.html",
        "cover": "./117.jpg"
    },
    {
        "title": "青山不墨",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "剧情,历史,家庭",
        "tags": "林业 三代人 环保 年代",
        "url": "./movie-0868.html",
        "cover": "./118.jpg"
    },
    {
        "title": "通过免费公路",
        "region": "美国",
        "type": "电影",
        "year": "2019",
        "genre": "剧情/冒险",
        "tags": "公路片 父亲 自闭症 旅行 治愈",
        "url": "./movie-0869.html",
        "cover": "./119.jpg"
    },
    {
        "title": "厄夜直播",
        "region": "韩国",
        "type": "电影",
        "year": "2021",
        "genre": "恐怖,惊悚,伪纪录片",
        "tags": "直播 都市探险 诅咒",
        "url": "./movie-0870.html",
        "cover": "./120.jpg"
    },
    {
        "title": "别惹小孩",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/喜剧",
        "tags": "硬汉 保姆 恶童 家庭保卫战 反差萌",
        "url": "./movie-0871.html",
        "cover": "./121.jpg"
    },
    {
        "title": "我的名字是⋯",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/剧情",
        "tags": "失忆 身份互换 自我寻找",
        "url": "./movie-0872.html",
        "cover": "./122.jpg"
    },
    {
        "title": "少年女仆",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧,家庭",
        "tags": "女仆装 校园 温馨 女装",
        "url": "./movie-0873.html",
        "cover": "./123.jpg"
    },
    {
        "title": "赵氏孤儿 动画版",
        "region": "中国大陆",
        "type": "动画电影",
        "year": "2027",
        "genre": "动画/历史",
        "tags": "水墨 忠义 悲剧 成人向",
        "url": "./movie-0874.html",
        "cover": "./124.jpg"
    },
    {
        "title": "狄仁杰之鬼影血手",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "悬疑,动作,古装",
        "tags": "探案 东方奇幻 密室",
        "url": "./movie-0875.html",
        "cover": "./125.jpg"
    },
    {
        "title": "边缘追缉",
        "region": "中国",
        "type": "剧集",
        "year": "2027",
        "genre": "悬疑,犯罪",
        "tags": "卧底 边境 毒品 反转",
        "url": "./movie-0876.html",
        "cover": "./126.jpg"
    },
    {
        "title": "反攻美国",
        "region": "美国",
        "type": "电影",
        "year": "2027",
        "genre": "动作/战争/喜剧",
        "tags": "中美对抗 高科技 讽刺 逆袭",
        "url": "./movie-0877.html",
        "cover": "./127.jpg"
    },
    {
        "title": "滑稽",
        "region": "意大利,法国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,传记,喜剧",
        "tags": "小丑 二战 欢笑与眼泪 威尼斯金狮",
        "url": "./movie-0878.html",
        "cover": "./128.jpg"
    },
    {
        "title": "火山爆发",
        "region": "冰岛,丹麦",
        "type": "电影",
        "year": "2025",
        "genre": "灾难,剧情,家庭",
        "tags": "火山 冷战家庭 北欧冷漠 生存 和解",
        "url": "./movie-0879.html",
        "cover": "./129.jpg"
    },
    {
        "title": "绝路",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,悬疑,剧情",
        "tags": "边境 卧底 背叛 人性考验",
        "url": "./movie-0880.html",
        "cover": "./130.jpg"
    },
    {
        "title": "猎爱陷阱",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2021",
        "genre": "爱情,悬疑",
        "tags": "高智商恋爱 复仇 职场",
        "url": "./movie-0881.html",
        "cover": "./131.jpg"
    },
    {
        "title": "你的降临",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/科幻/治愈",
        "tags": "时间旅行 命运改写 催泪向 纯爱",
        "url": "./movie-0882.html",
        "cover": "./132.jpg"
    },
    {
        "title": "飞越山海关",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "历史,战争",
        "tags": "国共 谍战 雪原",
        "url": "./movie-0883.html",
        "cover": "./133.jpg"
    },
    {
        "title": "武工队传奇",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2014",
        "genre": "战争、动作、谍战",
        "tags": "抗日 小队作战 正剧",
        "url": "./movie-0884.html",
        "cover": "./134.jpg"
    },
    {
        "title": "我的宝贝2024",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情犯罪",
        "tags": "打拐 亲情 公路 催泪",
        "url": "./movie-0885.html",
        "cover": "./135.jpg"
    },
    {
        "title": "你是好孩子",
        "region": "日本",
        "type": "电影",
        "year": "2015",
        "genre": "剧情/家庭",
        "tags": "校园 霸凌 家暴 治愈 社会",
        "url": "./movie-0886.html",
        "cover": "./136.jpg"
    },
    {
        "title": "亚当格林的阿拉丁历险记",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻、冒险、喜剧、歌舞",
        "tags": "恶搞 神灯 现代元素 歌舞 亚当·格林",
        "url": "./movie-0887.html",
        "cover": "./137.jpg"
    },
    {
        "title": "拥抱梦想",
        "region": "印度",
        "type": "电影",
        "year": "2025",
        "genre": "歌舞,励志",
        "tags": "街舞 贫民窟 女性 逆袭",
        "url": "./movie-0888.html",
        "cover": "./138.jpg"
    },
    {
        "title": "矢在弦上第一季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,犯罪",
        "tags": "狙击手 连环凶杀 密码学",
        "url": "./movie-0889.html",
        "cover": "./139.jpg"
    },
    {
        "title": "吾爱敦煌",
        "region": "中国",
        "type": "纪录片",
        "year": "2023",
        "genre": "纪录片,历史,传记",
        "tags": "敦煌 文物保护 樊锦诗 艺术 传承",
        "url": "./movie-0890.html",
        "cover": "./140.jpg"
    },
    {
        "title": "阿拉巴马的月亮",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "冒险家庭",
        "tags": "荒野生存 父与子 治愈 温情",
        "url": "./movie-0891.html",
        "cover": "./141.jpg"
    },
    {
        "title": "生化危机:死亡岛",
        "region": "美国/日本",
        "type": "电影/动画",
        "year": "2025",
        "genre": "动作,恐怖,科幻",
        "tags": "丧尸 生存 射击",
        "url": "./movie-0892.html",
        "cover": "./142.jpg"
    },
    {
        "title": "最想念的季节",
        "region": "中国台湾",
        "type": "电影",
        "year": "2017",
        "genre": "爱情",
        "tags": "青春 书信 错过",
        "url": "./movie-0893.html",
        "cover": "./143.jpg"
    },
    {
        "title": "福山家",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/悬疑/家庭",
        "tags": "农村 重男轻女 冥婚 封建迷信 复仇",
        "url": "./movie-0894.html",
        "cover": "./144.jpg"
    },
    {
        "title": "尘封往事",
        "region": "中国香港",
        "type": "电影",
        "year": "1995",
        "genre": "剧情,犯罪",
        "tags": "黑帮 卧底 旧仇 救赎 岁月",
        "url": "./movie-0895.html",
        "cover": "./145.jpg"
    },
    {
        "title": "捣乱剧团在幻想领域",
        "region": "英国",
        "type": "电影",
        "year": "2026",
        "genre": "喜剧/奇幻/冒险",
        "tags": "剧场 异世界 元叙事 荒诞",
        "url": "./movie-0896.html",
        "cover": "./146.jpg"
    },
    {
        "title": "同居人是猫",
        "region": "日本",
        "type": "TV剧集",
        "year": "2019",
        "genre": "动画,治愈,日常",
        "tags": "猫奴 社恐 双视角 温情",
        "url": "./movie-0897.html",
        "cover": "./147.jpg"
    },
    {
        "title": "宝贝当家",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2016",
        "genre": "家庭喜剧",
        "tags": "萌娃 育儿 代际冲突 轻喜剧",
        "url": "./movie-0898.html",
        "cover": "./148.jpg"
    },
    {
        "title": "眼泪制造者",
        "region": "日本/意大利",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻,剧情,科幻",
        "tags": "情感工厂 记忆 反乌托邦 催泪 人性实验",
        "url": "./movie-0899.html",
        "cover": "./149.jpg"
    },
    {
        "title": "驱魔13",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/惊悚",
        "tags": "驱魔 数字诅咒 反转 心理恐怖 宗教",
        "url": "./movie-0900.html",
        "cover": "./150.jpg"
    },
    {
        "title": "意大利制造2020",
        "region": "意大利",
        "type": "剧集",
        "year": "2020",
        "genre": "剧情/时尚",
        "tags": "时尚产业 职场 女性成长 米兰",
        "url": "./movie-0901.html",
        "cover": "./1.jpg"
    },
    {
        "title": "禁闭男童",
        "region": "西班牙",
        "type": "电影",
        "year": "2019",
        "genre": "悬疑/惊悚",
        "tags": "密室 心理 反转 宗教",
        "url": "./movie-0902.html",
        "cover": "./2.jpg"
    },
    {
        "title": "逼虎跳墙",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "犯罪/剧情",
        "tags": "黑帮 底层挣扎 乡土气息 黑色幽默",
        "url": "./movie-0903.html",
        "cover": "./3.jpg"
    },
    {
        "title": "离婚风暴",
        "region": "韩国",
        "type": "剧集",
        "year": "2027",
        "genre": "剧情,律政,情感",
        "tags": "离婚律师 婚姻百态 女性觉醒",
        "url": "./movie-0904.html",
        "cover": "./4.jpg"
    },
    {
        "title": "太平洋剧作家节",
        "region": "美国/澳大利亚",
        "type": "剧集",
        "year": "2026",
        "genre": "喜剧剧情",
        "tags": "作家 孤岛 创作瓶颈 黑色幽默",
        "url": "./movie-0905.html",
        "cover": "./5.jpg"
    },
    {
        "title": "鬼精灵3",
        "region": "美国",
        "type": "电影",
        "year": "1995",
        "genre": "恐怖,喜剧,奇幻",
        "tags": "小成本邪典 恶作剧杀人 金杯诅咒 黑色幽默",
        "url": "./movie-0906.html",
        "cover": "./6.jpg"
    },
    {
        "title": "一打亲上亲",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "喜剧/家庭",
        "tags": "群像 催婚 社交",
        "url": "./movie-0907.html",
        "cover": "./7.jpg"
    },
    {
        "title": "厨神小当家第二季",
        "region": "日本",
        "type": "动画",
        "year": "2024",
        "genre": "美食,热血,奇幻",
        "tags": "童年回忆 续作 特技做菜",
        "url": "./movie-0908.html",
        "cover": "./8.jpg"
    },
    {
        "title": "何二狗的名单",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2014",
        "genre": "喜剧/农村/温情",
        "tags": "扶贫 假名单 全村希望",
        "url": "./movie-0909.html",
        "cover": "./9.jpg"
    },
    {
        "title": "憨媳当家",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "喜剧,家庭",
        "tags": "农村 婆媳 傻白甜 创业 逆袭",
        "url": "./movie-0910.html",
        "cover": "./10.jpg"
    },
    {
        "title": "姐妹的花园",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/家庭",
        "tags": "女性 亲情 拆迁 治愈",
        "url": "./movie-0911.html",
        "cover": "./11.jpg"
    },
    {
        "title": "你值得什么",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/惊悚/心理",
        "tags": "心理医生 PUA 操控 反杀 悬疑",
        "url": "./movie-0912.html",
        "cover": "./12.jpg"
    },
    {
        "title": "秀逗魔导士",
        "region": "日本",
        "type": "TV动画",
        "year": "1995",
        "genre": "喜剧/奇幻/冒险",
        "tags": "魔法 搞笑 龙破斩 冒险 莉娜因巴斯",
        "url": "./movie-0913.html",
        "cover": "./13.jpg"
    },
    {
        "title": "爱上特种兵",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2021",
        "genre": "爱情,军旅,剧情",
        "tags": "军人 医生 甜宠 热血 成长",
        "url": "./movie-0914.html",
        "cover": "./14.jpg"
    },
    {
        "title": "男人帮",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧/剧情",
        "tags": "兄弟情 中年危机 都市 损友 男性群像",
        "url": "./movie-0915.html",
        "cover": "./15.jpg"
    },
    {
        "title": "夸伦奎地",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2015",
        "genre": "悬疑/奇幻",
        "tags": "神秘 文化冲突 原始信仰 心理",
        "url": "./movie-0916.html",
        "cover": "./16.jpg"
    },
    {
        "title": "阴阳路12:美容尸",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/惊悚",
        "tags": "入殓师 整容 都市传说 行业秘辛 灵异",
        "url": "./movie-0917.html",
        "cover": "./17.jpg"
    },
    {
        "title": "蓝色天使",
        "region": "德国",
        "type": "电影",
        "year": "2024",
        "genre": "战争/剧情",
        "tags": "女飞行员 二战 反战",
        "url": "./movie-0918.html",
        "cover": "./18.jpg"
    },
    {
        "title": "石纪元 龙水",
        "region": "日本",
        "type": "动画电影",
        "year": "2025",
        "genre": "科幻/冒险",
        "tags": "科学 文明重建 热血 番外篇",
        "url": "./movie-0919.html",
        "cover": "./19.jpg"
    },
    {
        "title": "泰迦奥特曼",
        "region": "日本",
        "type": "剧集",
        "year": "2019",
        "genre": "科幻、动作、特摄",
        "tags": "奥特曼 光之国 父子情 外星人 变身",
        "url": "./movie-0920.html",
        "cover": "./20.jpg"
    },
    {
        "title": "完美独裁",
        "region": "美国/德国",
        "type": "电视剧",
        "year": "2025",
        "genre": "科幻/惊悚",
        "tags": "大数据 监控社会 政治",
        "url": "./movie-0921.html",
        "cover": "./21.jpg"
    },
    {
        "title": "朱莉娅的困扰",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/心理",
        "tags": "多重人格 女性 家庭暴力 反转",
        "url": "./movie-0922.html",
        "cover": "./22.jpg"
    },
    {
        "title": "凯利帮",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2024",
        "genre": "西部,传记,犯罪",
        "tags": "丛林匪徒 抗暴传奇 自制盔甲 底层反抗",
        "url": "./movie-0923.html",
        "cover": "./23.jpg"
    },
    {
        "title": "大吉",
        "region": "日本",
        "type": "电影",
        "year": "2018",
        "genre": "剧情/家庭",
        "tags": "遗愿清单 父子 送葬 治愈 公路片",
        "url": "./movie-0924.html",
        "cover": "./24.jpg"
    },
    {
        "title": "魔鬼骑士",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "动作,奇幻,恐怖",
        "tags": "中世纪 黑魔法 骑士 穿越 末日",
        "url": "./movie-0925.html",
        "cover": "./25.jpg"
    },
    {
        "title": "戏子人生",
        "region": "中国大陆",
        "type": "电影",
        "year": "1992",
        "genre": "剧情/历史/戏曲",
        "tags": "京剧 文革 变迁 师徒",
        "url": "./movie-0926.html",
        "cover": "./26.jpg"
    },
    {
        "title": "万世师表",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,历史,传记",
        "tags": "教育本质 古典学 人生导师 英伦风骨",
        "url": "./movie-0927.html",
        "cover": "./27.jpg"
    },
    {
        "title": "摇啊笑啊桥",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,儿童,家庭",
        "tags": "留守儿童 湘西 桥 童真 乡村教师",
        "url": "./movie-0928.html",
        "cover": "./28.jpg"
    },
    {
        "title": "迷人的图画",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,剧情",
        "tags": "艺术 背叛 真相 悬疑",
        "url": "./movie-0929.html",
        "cover": "./29.jpg"
    },
    {
        "title": "未闻花名",
        "region": "日本",
        "type": "剧集",
        "year": "2019",
        "genre": "动画,奇幻,催泪",
        "tags": "治愈 青春 幽灵 友情 花语",
        "url": "./movie-0930.html",
        "cover": "./30.jpg"
    },
    {
        "title": "疑犯追踪第五季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/犯罪",
        "tags": "AI觉醒 监控 动作 终章",
        "url": "./movie-0931.html",
        "cover": "./31.jpg"
    },
    {
        "title": "欲流双行道",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/惊悚/伦理",
        "tags": "阶层对立 偷窥视角 禁忌之恋",
        "url": "./movie-0932.html",
        "cover": "./32.jpg"
    },
    {
        "title": "雨和闪电的气息",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,奇幻,悬疑",
        "tags": "气味 轮回 雨夜 相遇",
        "url": "./movie-0933.html",
        "cover": "./33.jpg"
    },
    {
        "title": "荣耀乒乓",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2020",
        "genre": "运动/剧情/励志",
        "tags": "乒乓 热血竞技 双男主",
        "url": "./movie-0934.html",
        "cover": "./34.jpg"
    },
    {
        "title": "女主角",
        "region": "印度",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/歌舞",
        "tags": "宝莱坞 女性崛起 演艺圈 励志",
        "url": "./movie-0935.html",
        "cover": "./35.jpg"
    },
    {
        "title": "我的秘密室友2020",
        "region": "中国",
        "type": "剧集",
        "year": "2020",
        "genre": "爱情,奇幻",
        "tags": "时空融合 合租男女 跨时间恋爱",
        "url": "./movie-0936.html",
        "cover": "./36.jpg"
    },
    {
        "title": "逆女泰瑞丝",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,惊悚",
        "tags": "母女 控制 反叛 遗产",
        "url": "./movie-0937.html",
        "cover": "./37.jpg"
    },
    {
        "title": "主妇也要拼",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "家庭/职场",
        "tags": "全职主妇 再就业 女性群像 励志",
        "url": "./movie-0938.html",
        "cover": "./38.jpg"
    },
    {
        "title": "功夫兔与菜包狗第二季",
        "region": "中国大陆",
        "type": "TV 动画",
        "year": "2020",
        "genre": "喜剧,动作,动画",
        "tags": "无厘头 兔狗大战 国产动画 物理恶搞 烧脑",
        "url": "./movie-0939.html",
        "cover": "./39.jpg"
    },
    {
        "title": "缘路山旮旯",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/喜剧/爱情",
        "tags": "香港离岛 社恐程序员 网恋 乡土情怀",
        "url": "./movie-0940.html",
        "cover": "./40.jpg"
    },
    {
        "title": "卢卡斯兄弟搬家公司第一季",
        "region": "美国",
        "type": "剧集",
        "year": "2022",
        "genre": "喜剧,生活",
        "tags": "兄弟日常 客户奇葩 情景喜剧 温情搞笑",
        "url": "./movie-0941.html",
        "cover": "./41.jpg"
    },
    {
        "title": "逆局",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2021",
        "genre": "犯罪,悬疑,律政",
        "tags": "监狱推理 连环杀人 法医细节 双雄对峙",
        "url": "./movie-0942.html",
        "cover": "./42.jpg"
    },
    {
        "title": "艾米丽的困扰",
        "region": "加拿大",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,惊悚,心理",
        "tags": "精神分裂 房屋 记忆 反转 独居",
        "url": "./movie-0943.html",
        "cover": "./43.jpg"
    },
    {
        "title": "银发的阿基多",
        "region": "日本",
        "type": "电影",
        "year": "2006",
        "genre": "动画/科幻/冒险",
        "tags": "末世 森林变异 少年冒险 环保",
        "url": "./movie-0944.html",
        "cover": "./44.jpg"
    },
    {
        "title": "福地万里",
        "region": "中国大陆",
        "type": "电影",
        "year": "2013",
        "genre": "剧情/农村",
        "tags": "土地情结 家族史诗 时代变迁 现实主义",
        "url": "./movie-0945.html",
        "cover": "./45.jpg"
    },
    {
        "title": "做我太太一百天",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "家庭伦理",
        "tags": "契约婚姻 治愈 日久生情 美食",
        "url": "./movie-0946.html",
        "cover": "./46.jpg"
    },
    {
        "title": "女军官与魔鬼",
        "region": "美国",
        "type": "电影",
        "year": "1997",
        "genre": "恐怖/悬疑/惊悚",
        "tags": "驱魔 军队 灵异事件 心理惊悚 宗教",
        "url": "./movie-0947.html",
        "cover": "./47.jpg"
    },
    {
        "title": "谋杀,我的宝贝",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "犯罪/喜剧/剧情",
        "tags": "新手妈妈 连环杀手 黑色幽默 郊区秘密 双面生活",
        "url": "./movie-0948.html",
        "cover": "./48.jpg"
    },
    {
        "title": "一路向暖第一季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/治愈/公路",
        "tags": "公路 治愈 群像",
        "url": "./movie-0949.html",
        "cover": "./49.jpg"
    },
    {
        "title": "喜欢您国语",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/喜剧",
        "tags": "语言障碍 代际冲突 港陆关系 温情",
        "url": "./movie-0950.html",
        "cover": "./50.jpg"
    },
    {
        "title": "白雪公主与青蛙王子",
        "region": "德国",
        "type": "动画",
        "year": "2015",
        "genre": "爱情/奇幻/喜剧",
        "tags": "格林童话 改编 公主与王子 反套路",
        "url": "./movie-0951.html",
        "cover": "./51.jpg"
    },
    {
        "title": "缘之空",
        "region": "日本",
        "type": "动画剧集",
        "year": "2025",
        "genre": "爱情/剧情/伦理",
        "tags": "乡村 禁忌 怀旧 治愈",
        "url": "./movie-0952.html",
        "cover": "./52.jpg"
    },
    {
        "title": "妈妈你真棒",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "家庭/喜剧",
        "tags": "母女关系 身份互换 中年危机 校园",
        "url": "./movie-0953.html",
        "cover": "./53.jpg"
    },
    {
        "title": "面具圣徒",
        "region": "西班牙",
        "type": "剧集",
        "year": "2024",
        "genre": "动作/冒险",
        "tags": "蒙面英雄 宗教符号 西班牙历史 复仇者联盟式组队",
        "url": "./movie-0954.html",
        "cover": "./54.jpg"
    },
    {
        "title": "风流骗子",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情/喜剧",
        "tags": "诈骗犯 假戏真做 财阀斗法",
        "url": "./movie-0955.html",
        "cover": "./55.jpg"
    },
    {
        "title": "瓦尼塔斯的笔记",
        "region": "日本",
        "type": "TV Series",
        "year": "2024",
        "genre": "动画/悬疑/奇幻",
        "tags": "吸血鬼 蒸汽朋克 侦探 复仇",
        "url": "./movie-0956.html",
        "cover": "./56.jpg"
    },
    {
        "title": "荒唐阿姨大电影",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧",
        "tags": "英式幽默 时尚 中年危机 荒诞 闺蜜",
        "url": "./movie-0957.html",
        "cover": "./57.jpg"
    },
    {
        "title": "借来的100天泰国版",
        "region": "泰国",
        "type": "电影",
        "year": "2019",
        "genre": "奇幻/悬疑",
        "tags": "重启人生 附身 校园 因果",
        "url": "./movie-0958.html",
        "cover": "./58.jpg"
    },
    {
        "title": "闪亮女声",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "音乐,剧情,传记",
        "tags": "女子组合 六十年代 种族歧视 梦想",
        "url": "./movie-0959.html",
        "cover": "./59.jpg"
    },
    {
        "title": "梦精记之金老师",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/爱情/奇幻",
        "tags": "成年向 补习班 幻想 搞笑 反转",
        "url": "./movie-0960.html",
        "cover": "./60.jpg"
    },
    {
        "title": "大炮破坏者",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "科幻/机甲/动作",
        "tags": "佣兵 巨型武器 末世",
        "url": "./movie-0961.html",
        "cover": "./61.jpg"
    },
    {
        "title": "挚爱极地",
        "region": "挪威",
        "type": "电影",
        "year": "2025",
        "genre": "冒险/剧情/生存",
        "tags": "北极 科学家 求生 孤独 人与动物",
        "url": "./movie-0962.html",
        "cover": "./62.jpg"
    },
    {
        "title": "炭团与竹轮",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻,治愈",
        "tags": "食物拟人 深夜食堂 人生百味",
        "url": "./movie-0963.html",
        "cover": "./63.jpg"
    },
    {
        "title": "唐2022",
        "region": "中国大陆",
        "type": "电影",
        "year": "2022",
        "genre": "古装动作",
        "tags": "狄仁杰 赛博朋克 悬疑 武侠",
        "url": "./movie-0964.html",
        "cover": "./64.jpg"
    },
    {
        "title": "法证先锋2",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2008",
        "genre": "悬疑/犯罪/法证",
        "tags": "法证 刑侦 高智商犯罪 团队破案 港剧经典",
        "url": "./movie-0965.html",
        "cover": "./65.jpg"
    },
    {
        "title": "花有重开日",
        "region": "中国内地",
        "type": "电视剧",
        "year": "2024",
        "genre": "剧情,年代,家庭",
        "tags": "返城知青 时代变迁 亲情救赎",
        "url": "./movie-0966.html",
        "cover": "./66.jpg"
    },
    {
        "title": "灰姑娘药剂师 另一个故事",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "医疗,剧情,职场",
        "tags": "药剂师 平行视角 女性 写实",
        "url": "./movie-0967.html",
        "cover": "./67.jpg"
    },
    {
        "title": "小大老传",
        "region": "中国台湾",
        "type": "电影",
        "year": "1987",
        "genre": "剧情/喜剧/家庭",
        "tags": "养老院 忘年交 童真 乡土",
        "url": "./movie-0968.html",
        "cover": "./68.jpg"
    },
    {
        "title": "野外的勇气",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "冒险,剧情,家庭",
        "tags": "荒野求生 父子 成长 勇气 生存挑战",
        "url": "./movie-0969.html",
        "cover": "./69.jpg"
    },
    {
        "title": "星条旗永不落",
        "region": "美国",
        "type": "剧集",
        "year": "2006",
        "genre": "战争,剧情",
        "tags": "伊拉克战争 老兵 创伤后应激障碍 群像",
        "url": "./movie-0970.html",
        "cover": "./70.jpg"
    },
    {
        "title": "残酷的彼得",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "惊悚/悬疑",
        "tags": "反套路 黑暗童话 心理博弈",
        "url": "./movie-0971.html",
        "cover": "./71.jpg"
    },
    {
        "title": "梦中情人们",
        "region": "美国",
        "type": "剧集",
        "year": "2023",
        "genre": "奇幻,爱情,喜剧",
        "tags": "梦境 多重宇宙 自我探索 幽默",
        "url": "./movie-0972.html",
        "cover": "./72.jpg"
    },
    {
        "title": "疯狂兔宝",
        "region": "中国大陆",
        "type": "动画电影",
        "year": "2024",
        "genre": "喜剧,动画,家庭",
        "tags": "兔子 萌宠 冒险 治愈",
        "url": "./movie-0973.html",
        "cover": "./73.jpg"
    },
    {
        "title": "树势:最后一滴血",
        "region": "泰国",
        "type": "电影",
        "year": "2025",
        "genre": "动作,武侠,奇幻",
        "tags": "泰拳 古树 能量传承 复仇",
        "url": "./movie-0974.html",
        "cover": "./74.jpg"
    },
    {
        "title": "找新娘",
        "region": "印度",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/爱情/歌舞",
        "tags": "寻亲 婚礼 错位 印度风情 爆笑",
        "url": "./movie-0975.html",
        "cover": "./75.jpg"
    },
    {
        "title": "鬼屋奇谭",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,喜剧",
        "tags": "密室逃脱 反转 黑色幽默",
        "url": "./movie-0976.html",
        "cover": "./76.jpg"
    },
    {
        "title": "我还有话说",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑",
        "tags": "陪审团 密室 推理 反转",
        "url": "./movie-0977.html",
        "cover": "./77.jpg"
    },
    {
        "title": "玄奘大师",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "传记,历史,剧情",
        "tags": "史诗 佛法 丝绸之路 信念",
        "url": "./movie-0978.html",
        "cover": "./78.jpg"
    },
    {
        "title": "教室危机",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑、校园、惊悚",
        "tags": "高考 补习班 教育内卷 集体中毒 密室逃脱",
        "url": "./movie-0979.html",
        "cover": "./79.jpg"
    },
    {
        "title": "霸王艳后",
        "region": "中国香港",
        "type": "电影",
        "year": "1992",
        "genre": "情色/历史",
        "tags": "古装艳情 野史改编 邵氏风月",
        "url": "./movie-0980.html",
        "cover": "./80.jpg"
    },
    {
        "title": "美国恐怖故事第六季",
        "region": "美国",
        "type": "剧集",
        "year": "2016",
        "genre": "恐怖/悬疑",
        "tags": "伪纪录片 殖民恐怖 剧集嵌套 罗阿诺克",
        "url": "./movie-0981.html",
        "cover": "./81.jpg"
    },
    {
        "title": "雪原孤军",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "战争,历史",
        "tags": "抗美援朝 长津湖 绝境",
        "url": "./movie-0982.html",
        "cover": "./82.jpg"
    },
    {
        "title": "僵尸城市",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/恐怖/丧尸",
        "tags": "丧尸 高燃动作 城市封锁 人性考验",
        "url": "./movie-0983.html",
        "cover": "./83.jpg"
    },
    {
        "title": "乘船而去",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "家庭剧情片",
        "tags": "江南水乡 临终 和解",
        "url": "./movie-0984.html",
        "cover": "./84.jpg"
    },
    {
        "title": "对不起,多谢你",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "剧情家庭",
        "tags": "父子 道歉 绝症 和解",
        "url": "./movie-0985.html",
        "cover": "./85.jpg"
    },
    {
        "title": "龙拳小子2",
        "region": "中国大陆/香港",
        "type": "电影",
        "year": "2025",
        "genre": "动作/喜剧/儿童",
        "tags": "功夫 少年 复仇 热血",
        "url": "./movie-0986.html",
        "cover": "./86.jpg"
    },
    {
        "title": "大潮如歌",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "年代/商战/剧情",
        "tags": "改革开放 乡镇企业 民营经济 家族恩怨 时代浪潮",
        "url": "./movie-0987.html",
        "cover": "./87.jpg"
    },
    {
        "title": "眨眼廿年",
        "region": "中国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/奇幻",
        "tags": "时间回溯 青春遗憾 时空诊所",
        "url": "./movie-0988.html",
        "cover": "./88.jpg"
    },
    {
        "title": "真实电影",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑",
        "tags": "元电影 存在主义 身份危机",
        "url": "./movie-0989.html",
        "cover": "./89.jpg"
    },
    {
        "title": "喜剧者联盟",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/喜剧",
        "tags": "脱口秀 线下剧场 生存压力 梦想 师徒",
        "url": "./movie-0990.html",
        "cover": "./90.jpg"
    },
    {
        "title": "高潮医生",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "医疗/剧情/职场",
        "tags": "医生 成瘾科室 现实 禁忌",
        "url": "./movie-0991.html",
        "cover": "./91.jpg"
    },
    {
        "title": "拜见宫主大人",
        "region": "中国",
        "type": "剧集",
        "year": "2025",
        "genre": "古装/喜剧",
        "tags": "穿越 江湖 女强 甜宠",
        "url": "./movie-0992.html",
        "cover": "./92.jpg"
    },
    {
        "title": "社会学家和小熊",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,剧情",
        "tags": "知识分子的困境 童真 讽刺 温馨",
        "url": "./movie-0993.html",
        "cover": "./93.jpg"
    },
    {
        "title": "新年来啦之大闹除夕",
        "region": "中国大陆",
        "type": "动画电影",
        "year": "2024",
        "genre": "喜剧/动画/奇幻",
        "tags": "春节 年兽 冒险 合家欢",
        "url": "./movie-0994.html",
        "cover": "./94.jpg"
    },
    {
        "title": "坏教欲女孩",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/惊悚",
        "tags": "邪教 少女 心理操控 反转",
        "url": "./movie-0995.html",
        "cover": "./95.jpg"
    },
    {
        "title": "科洛弗悖论",
        "region": "美国",
        "type": "电影",
        "year": "2018",
        "genre": "科幻、惊悚、悬疑",
        "tags": "太空站 粒子加速器 多维空间 怪物",
        "url": "./movie-0996.html",
        "cover": "./96.jpg"
    },
    {
        "title": "怪物就在我们之间",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,惊悚,社会",
        "tags": "都市传说 集体癔症 怪物隐喻 社区秘密 全员恶人",
        "url": "./movie-0997.html",
        "cover": "./97.jpg"
    },
    {
        "title": "白宫水管工",
        "region": "美国",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情,传记,历史",
        "tags": "政治 丑闻 真实事件 惊悚",
        "url": "./movie-0998.html",
        "cover": "./98.jpg"
    },
    {
        "title": "奇科·泽维尔",
        "region": "巴西",
        "type": "电影",
        "year": "2024",
        "genre": "传记,剧情",
        "tags": "音乐人 抗争 真实改编",
        "url": "./movie-0999.html",
        "cover": "./99.jpg"
    },
    {
        "title": "迷糊餐厅第三季",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "喜剧,日常,恋爱",
        "tags": "职场 搞笑 慢热 群像 治愈",
        "url": "./movie-1000.html",
        "cover": "./100.jpg"
    },
    {
        "title": "演员龟冈拓次",
        "region": "日本",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/喜剧",
        "tags": "龙套 演艺圈 人生如戏",
        "url": "./movie-1001.html",
        "cover": "./101.jpg"
    },
    {
        "title": "危险性交易",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/伦理",
        "tags": "暗网 复仇 女性视角",
        "url": "./movie-1002.html",
        "cover": "./102.jpg"
    },
    {
        "title": "神效苹果醋",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "科幻/悬疑/喜剧",
        "tags": "都市传说 黑科技 成瘾 人性实验",
        "url": "./movie-1003.html",
        "cover": "./103.jpg"
    },
    {
        "title": "突尼斯的沙发",
        "region": "法国/突尼斯",
        "type": "电影",
        "year": "2022",
        "genre": "剧情,爱情",
        "tags": "异国恋 文化冲突 治愈",
        "url": "./movie-1004.html",
        "cover": "./104.jpg"
    },
    {
        "title": "今敏:造梦机器",
        "region": "日本",
        "type": "纪录片",
        "year": "2021",
        "genre": "传记/纪录",
        "tags": "今敏 幕后 未公开遗稿 动画制作",
        "url": "./movie-1005.html",
        "cover": "./105.jpg"
    },
    {
        "title": "牧师神探第十季",
        "region": "英国",
        "type": "剧集",
        "year": "2027",
        "genre": "悬疑/犯罪/剧情",
        "tags": "英剧 推理 宗教 乡村 老牌",
        "url": "./movie-1006.html",
        "cover": "./106.jpg"
    },
    {
        "title": "释放印度战俘",
        "region": "印度",
        "type": "电影",
        "year": "2027",
        "genre": "战争/剧情",
        "tags": "人道主义 印巴关系 政治博弈",
        "url": "./movie-1007.html",
        "cover": "./107.jpg"
    },
    {
        "title": "真假森林王",
        "region": "中国大陆",
        "type": "动画电影",
        "year": "2022",
        "genre": "喜剧,冒险,家庭",
        "tags": "森林 王位 模仿 成长 谎言",
        "url": "./movie-1008.html",
        "cover": "./108.jpg"
    },
    {
        "title": "八面埋伏",
        "region": "美国/英国",
        "type": "电影",
        "year": "2004",
        "genre": "悬疑/惊悚/犯罪",
        "tags": "孤岛 FBI 连环杀手 心理游戏",
        "url": "./movie-1009.html",
        "cover": "./109.jpg"
    },
    {
        "title": "继承之战第一季",
        "region": "美国",
        "type": "电视剧",
        "year": "2026",
        "genre": "剧情/商战/家庭",
        "tags": "豪门 媒体帝国 父与子 莎士比亚式",
        "url": "./movie-1010.html",
        "cover": "./110.jpg"
    },
    {
        "title": "谋杀游戏",
        "region": "英国",
        "type": "剧集",
        "year": "2026",
        "genre": "犯罪,推理",
        "tags": "剧本杀 暴风雪山庄 高智商",
        "url": "./movie-1011.html",
        "cover": "./111.jpg"
    },
    {
        "title": "饮食男女",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/家庭",
        "tags": "美食 代际 治愈 慢节奏",
        "url": "./movie-1012.html",
        "cover": "./112.jpg"
    },
    {
        "title": "住我对面的小哥哥",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "爱情/喜剧/青春",
        "tags": "超短剧集 邻居恋爱 双向暗恋 甜宠轻喜",
        "url": "./movie-1013.html",
        "cover": "./113.jpg"
    },
    {
        "title": "爱人2022",
        "region": "韩国",
        "type": "电影",
        "year": "2022",
        "genre": "爱情剧情",
        "tags": "疫情爱情 时空交错 隔离日记 文艺",
        "url": "./movie-1014.html",
        "cover": "./114.jpg"
    },
    {
        "title": "犯罪都市3",
        "region": "韩国",
        "type": "电影",
        "year": "2027",
        "genre": "动作、犯罪",
        "tags": "黑帮 刑警 暴力美学 硬汉 兄弟情",
        "url": "./movie-1015.html",
        "cover": "./115.jpg"
    },
    {
        "title": "小镇车神之五菱漂移",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作,赛车,喜剧",
        "tags": "五菱宏光 漂移 小镇 逆袭",
        "url": "./movie-1016.html",
        "cover": "./116.jpg"
    },
    {
        "title": "星梦缘",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "青春偶像",
        "tags": "娱乐圈 练习生 逆袭 甜宠 梦想",
        "url": "./movie-1017.html",
        "cover": "./117.jpg"
    },
    {
        "title": "023档案",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,犯罪",
        "tags": "连环案件 档案管理员 旧案重查",
        "url": "./movie-1018.html",
        "cover": "./118.jpg"
    },
    {
        "title": "一丝偶然",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑",
        "tags": "命运 蝴蝶效应 意大利电影 多线叙事 因果循环",
        "url": "./movie-1019.html",
        "cover": "./119.jpg"
    },
    {
        "title": "阿姆斯特丹",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "历史,悬疑,喜剧",
        "tags": "群星 真实改编 阴谋论 友谊",
        "url": "./movie-1020.html",
        "cover": "./120.jpg"
    },
    {
        "title": "库伯里克机长",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "灾难,惊悚,剧情",
        "tags": "空难 人工智能 驾驶舱 求生",
        "url": "./movie-1021.html",
        "cover": "./121.jpg"
    },
    {
        "title": "大嘴巴第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧/动画/成人/青春",
        "tags": "青春期 激素怪兽 性教育 恶搞 脑洞",
        "url": "./movie-1022.html",
        "cover": "./122.jpg"
    },
    {
        "title": "大哥大续集",
        "region": "中国香港",
        "type": "电影",
        "year": "2004",
        "genre": "剧情/犯罪/黑帮",
        "tags": "江湖 兄弟情 权谋 回归 警匪",
        "url": "./movie-1023.html",
        "cover": "./123.jpg"
    },
    {
        "title": "克金玩家",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧,剧情",
        "tags": "游戏 氪金 现实",
        "url": "./movie-1024.html",
        "cover": "./124.jpg"
    },
    {
        "title": "禁地之青衣玉罗",
        "region": "中国大陆",
        "type": "网络电影",
        "year": "2024",
        "genre": "悬疑惊悚",
        "tags": "民国 凶宅 戏班 诅咒",
        "url": "./movie-1025.html",
        "cover": "./125.jpg"
    },
    {
        "title": "乡村爱情16",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧、乡村、生活",
        "tags": "东北喜剧 家长里短 乡村振兴",
        "url": "./movie-1026.html",
        "cover": "./126.jpg"
    },
    {
        "title": "心碎效应",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "科幻,爱情",
        "tags": "记忆删除 情感实验 伦理 治愈",
        "url": "./movie-1027.html",
        "cover": "./127.jpg"
    },
    {
        "title": "喜欢你喜欢我",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2023",
        "genre": "爱情,都市",
        "tags": "双向暗恋 职场 治愈",
        "url": "./movie-1028.html",
        "cover": "./128.jpg"
    },
    {
        "title": "爱祇有一个字",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "爱情、奇幻",
        "tags": "宿命 语言 文字游戏 深情",
        "url": "./movie-1029.html",
        "cover": "./129.jpg"
    },
    {
        "title": "本小姐乃白鸟丽子 电影版",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/爱情",
        "tags": "漫改 大小姐 反差萌 校园 搞笑",
        "url": "./movie-1030.html",
        "cover": "./130.jpg"
    },
    {
        "title": "斯旺尼河",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,悬疑,家庭",
        "tags": "美国南方 河流 失踪 秘密",
        "url": "./movie-1031.html",
        "cover": "./131.jpg"
    },
    {
        "title": "有车好好开",
        "region": "中国大陆",
        "type": "电影",
        "year": "2000",
        "genre": "喜剧/公路",
        "tags": "搭车 旅途 小人物 温暖",
        "url": "./movie-1032.html",
        "cover": "./132.jpg"
    },
    {
        "title": "大都会1927",
        "region": "德国",
        "type": "电影",
        "year": "2027",
        "genre": "科幻、黑色电影",
        "tags": "赛博朋克 阶级对立 机器人革命 默片致敬",
        "url": "./movie-1033.html",
        "cover": "./133.jpg"
    },
    {
        "title": "站立的动物故事",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2024",
        "genre": "动画/寓言/黑色幽默",
        "tags": "拟人 政治隐喻 荒诞 定格动画",
        "url": "./movie-1034.html",
        "cover": "./134.jpg"
    },
    {
        "title": "角落办公室",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "职场,悬疑,剧情",
        "tags": "办公室政治 神秘主义 公司秘闻 反内卷",
        "url": "./movie-1035.html",
        "cover": "./135.jpg"
    },
    {
        "title": "记忆密码战",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作,科幻",
        "tags": "记忆植入 特工 背叛",
        "url": "./movie-1036.html",
        "cover": "./136.jpg"
    },
    {
        "title": "银湖夺宝战",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作冒险",
        "tags": "湖泊 水下洞穴 寻宝 环保",
        "url": "./movie-1037.html",
        "cover": "./137.jpg"
    },
    {
        "title": "死亡路",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑、惊悚、犯罪",
        "tags": "公路 复仇 限时 飙车 多重反转",
        "url": "./movie-1038.html",
        "cover": "./138.jpg"
    },
    {
        "title": "田柾国:我在这里",
        "region": "韩国",
        "type": "纪录片",
        "year": "2024",
        "genre": "音乐,传记",
        "tags": "防弹少年团 幕后 成长",
        "url": "./movie-1039.html",
        "cover": "./139.jpg"
    },
    {
        "title": "杰克亨特",
        "region": "英国",
        "type": "剧集",
        "year": "2020",
        "genre": "悬疑/犯罪",
        "tags": "失忆侦探 笔记破案 双线叙事",
        "url": "./movie-1040.html",
        "cover": "./140.jpg"
    },
    {
        "title": "犯规王",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,运动",
        "tags": "足球 作弊 废柴逆袭 市井英雄 无厘头",
        "url": "./movie-1041.html",
        "cover": "./141.jpg"
    },
    {
        "title": "深宫绮梦",
        "region": "中国大陆",
        "type": "短剧",
        "year": "2024",
        "genre": "古装,宫斗,奇幻",
        "tags": "穿越 系统 爽文 逆袭",
        "url": "./movie-1042.html",
        "cover": "./142.jpg"
    },
    {
        "title": "时光逆爱90年",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "爱情、科幻",
        "tags": "穿越时空 催泪 年代反差",
        "url": "./movie-1043.html",
        "cover": "./143.jpg"
    },
    {
        "title": "爱你不爱",
        "region": "香港",
        "type": "电影",
        "year": "1994",
        "genre": "爱情/剧情",
        "tags": "都市情感 选择难题 王家卫风",
        "url": "./movie-1044.html",
        "cover": "./144.jpg"
    },
    {
        "title": "神眼之金面具",
        "region": "中国大陆",
        "type": "网络电影",
        "year": "2024",
        "genre": "悬疑,冒险,古装",
        "tags": "盗墓 机关术 双男主 寻宝",
        "url": "./movie-1045.html",
        "cover": "./145.jpg"
    },
    {
        "title": "满面春风",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/家庭",
        "tags": "丧葬行业 父子关系 小镇 生死观 治愈",
        "url": "./movie-1046.html",
        "cover": "./146.jpg"
    },
    {
        "title": "智慧风暴",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻/惊悚",
        "tags": "AI 脑机接口 反乌托邦 思维 控制",
        "url": "./movie-1047.html",
        "cover": "./147.jpg"
    },
    {
        "title": "榜上佳婿",
        "region": "中国内地",
        "type": "剧集",
        "year": "2024",
        "genre": "古装,爱情,悬疑",
        "tags": "科举 替身 朝堂权谋 先婚后爱",
        "url": "./movie-1048.html",
        "cover": "./148.jpg"
    },
    {
        "title": "全面攻占:倒数救援",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/惊悚",
        "tags": "恐怖分子 限时营救 硬汉",
        "url": "./movie-1049.html",
        "cover": "./149.jpg"
    },
    {
        "title": "神探特伦特第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/犯罪/剧情",
        "tags": "高智商 连环案 警探 心理博弈",
        "url": "./movie-1050.html",
        "cover": "./150.jpg"
    },
    {
        "title": "1966年的世界杯",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,喜剧,体育",
        "tags": "足球 怀旧 小镇 家庭",
        "url": "./movie-1051.html",
        "cover": "./1.jpg"
    },
    {
        "title": "欲望科学怪人",
        "region": "日本",
        "type": "电影",
        "year": "1998",
        "genre": "恐怖/科幻/情色",
        "tags": "怪谈 人体实验 疯狂科学家 器官贩卖 日式赛博",
        "url": "./movie-1052.html",
        "cover": "./2.jpg"
    },
    {
        "title": "暹罗女王",
        "region": "泰国",
        "type": "电视剧",
        "year": "2027",
        "genre": "历史/古装/宫斗",
        "tags": "大女主 权谋 泰式宫廷 史诗",
        "url": "./movie-1053.html",
        "cover": "./3.jpg"
    },
    {
        "title": "妙人笑史",
        "region": "中国香港",
        "type": "电视剧",
        "year": "1998",
        "genre": "古装,喜剧,传奇",
        "tags": "民间笑话 机智书生 单元剧",
        "url": "./movie-1054.html",
        "cover": "./4.jpg"
    },
    {
        "title": "黑冰",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "刑侦,悬疑,犯罪",
        "tags": "禁毒 卧底 高智商犯罪 恶劣天气",
        "url": "./movie-1055.html",
        "cover": "./5.jpg"
    },
    {
        "title": "七大罪:天空的囚人",
        "region": "日本",
        "type": "动画电影",
        "year": "2018",
        "genre": "热血/奇幻/冒险",
        "tags": "剧场版 战斗 友谊 空中监狱",
        "url": "./movie-1056.html",
        "cover": "./6.jpg"
    },
    {
        "title": "黎明要来",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,同性",
        "tags": "青春 残酷 救赎 乡土",
        "url": "./movie-1057.html",
        "cover": "./7.jpg"
    },
    {
        "title": "解放3:主攻方向",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2019",
        "genre": "战争/历史",
        "tags": "二战 坦克大战 全景叙事",
        "url": "./movie-1058.html",
        "cover": "./8.jpg"
    },
    {
        "title": "阴阳路十九之我对眼见到野",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖,喜剧",
        "tags": "鬼片 港味 阴阳眼 单元剧",
        "url": "./movie-1059.html",
        "cover": "./9.jpg"
    },
    {
        "title": "雪人奇缘",
        "region": "美国/中国大陆",
        "type": "动画电影",
        "year": "2019",
        "genre": "冒险,家庭,奇幻",
        "tags": "雪人 喜马拉雅山 回家 魔力 风景",
        "url": "./movie-1060.html",
        "cover": "./10.jpg"
    },
    {
        "title": "帕美嘉",
        "region": "意大利",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,惊悚,剧情",
        "tags": "邪教 失踪案 乡野传说",
        "url": "./movie-1061.html",
        "cover": "./11.jpg"
    },
    {
        "title": "变身国王粤语",
        "region": "香港",
        "type": "电影",
        "year": "2001",
        "genre": "喜剧,动画,冒险",
        "tags": "粤语配音 本土化笑料 草泥马",
        "url": "./movie-1062.html",
        "cover": "./12.jpg"
    },
    {
        "title": "血婚",
        "region": "西班牙",
        "type": "电影",
        "year": "2028",
        "genre": "剧情/爱情/惊悚",
        "tags": "婚礼 复仇 佛朗明哥 诗意",
        "url": "./movie-1063.html",
        "cover": "./13.jpg"
    },
    {
        "title": "侠女游龙国语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "1994",
        "genre": "武侠/古装/爱情",
        "tags": "女侠 宫廷 江湖 恩怨 国语配音",
        "url": "./movie-1064.html",
        "cover": "./14.jpg"
    },
    {
        "title": "一路格桑花",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情/公路",
        "tags": "西藏 治愈 亲情",
        "url": "./movie-1065.html",
        "cover": "./15.jpg"
    },
    {
        "title": "最幸运的女孩",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情悬疑",
        "tags": "创伤 复仇 女性",
        "url": "./movie-1066.html",
        "cover": "./16.jpg"
    },
    {
        "title": "白夜侠",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作、武侠、悬疑",
        "tags": "侠客 昼夜双面 复仇 冷兵器",
        "url": "./movie-1067.html",
        "cover": "./17.jpg"
    },
    {
        "title": "胡贝之灯",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/奇幻",
        "tags": "民间传说 古镇 寻仇 因果报应",
        "url": "./movie-1068.html",
        "cover": "./18.jpg"
    },
    {
        "title": "孽债迷情",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2025",
        "genre": "爱情,悬疑,剧情",
        "tags": "狗血 豪门 复仇 虐恋 港风",
        "url": "./movie-1069.html",
        "cover": "./19.jpg"
    },
    {
        "title": "劳拉的星星在中国",
        "region": "德国/中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动画,奇幻,家庭",
        "tags": "友谊 跨国文化 冒险 治愈 童年",
        "url": "./movie-1070.html",
        "cover": "./20.jpg"
    },
    {
        "title": "双重约会2017",
        "region": "英国",
        "type": "电影",
        "year": "2017",
        "genre": "喜剧/恐怖",
        "tags": "英式喜剧 血腥恐怖 男性友谊 30岁危机 黑色幽默",
        "url": "./movie-1071.html",
        "cover": "./21.jpg"
    },
    {
        "title": "何日君再来国语",
        "region": "香港",
        "type": "电影",
        "year": "1991",
        "genre": "爱情,战争,剧情",
        "tags": "抗战背景 上海滩 乱世佳人 三角恋 梅艳芳",
        "url": "./movie-1072.html",
        "cover": "./22.jpg"
    },
    {
        "title": "轰炸鲁尔水坝记",
        "region": "英国",
        "type": "电影",
        "year": "2023",
        "genre": "战争/历史/动作",
        "tags": "二战 英国皇家空军 水坝 跳弹 真实事件",
        "url": "./movie-1073.html",
        "cover": "./23.jpg"
    },
    {
        "title": "墓王之王",
        "region": "中国大陆",
        "type": "网络动画",
        "year": "2021",
        "genre": "古风/武侠/悬疑",
        "tags": "攻墓 盗墓 机关术 江湖恩怨 动作",
        "url": "./movie-1074.html",
        "cover": "./24.jpg"
    },
    {
        "title": "日常系的异能战斗",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "动作,奇幻,日常",
        "tags": "中二病 社团 超能力 校园 反套路",
        "url": "./movie-1075.html",
        "cover": "./25.jpg"
    },
    {
        "title": "恐怖录影带",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖/悬疑/伪纪录",
        "tags": "录像带诅咒 灵异探险 都市传说 视错觉杀人",
        "url": "./movie-1076.html",
        "cover": "./26.jpg"
    },
    {
        "title": "黑色诞生",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖、超自然",
        "tags": "降生 异教 恶魔 女性诅咒",
        "url": "./movie-1077.html",
        "cover": "./27.jpg"
    },
    {
        "title": "神骑魔法大冒险",
        "region": "美国",
        "type": "动画电影",
        "year": "2023",
        "genre": "奇幻",
        "tags": "魔法 冒险 友情 动物伙伴",
        "url": "./movie-1078.html",
        "cover": "./28.jpg"
    },
    {
        "title": "爱情神灯",
        "region": "印度",
        "type": "电影",
        "year": "2022",
        "genre": "奇幻/爱情/歌舞",
        "tags": "阿拉丁 反转 灯神 阶级 宝莱坞",
        "url": "./movie-1079.html",
        "cover": "./29.jpg"
    },
    {
        "title": "在我心里的星星",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情,奇幻",
        "tags": "绝症 治愈 催泪",
        "url": "./movie-1080.html",
        "cover": "./30.jpg"
    },
    {
        "title": "孝女沈清",
        "region": "韩国",
        "type": "电影",
        "year": "2026",
        "genre": "古装、剧情、奇幻",
        "tags": "民间传说 献祭 女性觉醒 视觉系",
        "url": "./movie-1081.html",
        "cover": "./31.jpg"
    },
    {
        "title": "乌菲兹美术馆的日与夜",
        "region": "意大利",
        "type": "电影",
        "year": "2026",
        "genre": "纪录片,艺术,历史",
        "tags": "美术馆 名画 保安 夜巡 美第奇家族",
        "url": "./movie-1082.html",
        "cover": "./32.jpg"
    },
    {
        "title": "血溅锦山河",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "武侠、动作、历史",
        "tags": "锦衣卫 国仇家恨 冷兵器 忠义",
        "url": "./movie-1083.html",
        "cover": "./33.jpg"
    },
    {
        "title": "怨灵游戏",
        "region": "泰国,韩国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,惊悚,悬疑",
        "tags": "诅咒游戏 校园怪谈 血腥 反转",
        "url": "./movie-1084.html",
        "cover": "./34.jpg"
    },
    {
        "title": "阿婆的槟榔",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/家庭/社会",
        "tags": "乡土情怀 槟榔西施 代际冲突 非遗 女性",
        "url": "./movie-1085.html",
        "cover": "./35.jpg"
    },
    {
        "title": "猎与杀",
        "region": "加拿大",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚,生存,动作",
        "tags": "荒野 连环猎杀 反猎杀 生存狂",
        "url": "./movie-1086.html",
        "cover": "./36.jpg"
    },
    {
        "title": "极限送达",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "动作/冒险",
        "tags": "快递 极端环境 极限运动 生存 硬汉",
        "url": "./movie-1087.html",
        "cover": "./37.jpg"
    },
    {
        "title": "周身瘾",
        "region": "香港",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情,犯罪",
        "tags": "成瘾 卧底 心理博弈",
        "url": "./movie-1088.html",
        "cover": "./38.jpg"
    },
    {
        "title": "错嫁世子妃",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2022",
        "genre": "古装/爱情/喜剧",
        "tags": "替嫁 先婚后爱 朝堂 女强",
        "url": "./movie-1089.html",
        "cover": "./39.jpg"
    },
    {
        "title": "河道女王",
        "region": "新西兰",
        "type": "电影/剧集",
        "year": "2025",
        "genre": "剧情,悬疑,犯罪,惊悚",
        "tags": "女性力量 河流 小镇秘密 失踪案 复仇",
        "url": "./movie-1090.html",
        "cover": "./40.jpg"
    },
    {
        "title": "战栗1978",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,历史",
        "tags": "伪纪录片 连环杀手 复古恐怖 录像带",
        "url": "./movie-1091.html",
        "cover": "./41.jpg"
    },
    {
        "title": "迷幻卧底:费瑞崛起",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作,犯罪,惊悚",
        "tags": "视觉迷幻 双重人格 毒枭世界 邪典美学",
        "url": "./movie-1092.html",
        "cover": "./42.jpg"
    },
    {
        "title": "社会威胁",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/惊悚/犯罪",
        "tags": "街头 暴力 种族 警匪 写实",
        "url": "./movie-1093.html",
        "cover": "./43.jpg"
    },
    {
        "title": "麦克法兰",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,剧情,惊悚",
        "tags": "黑帮 家族 背叛",
        "url": "./movie-1094.html",
        "cover": "./44.jpg"
    },
    {
        "title": "咒怨:黑色少女",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖",
        "tags": "日式心理恐怖 女鬼新篇 诅咒传承",
        "url": "./movie-1095.html",
        "cover": "./45.jpg"
    },
    {
        "title": "我们的快乐人生",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2021",
        "genre": "家庭",
        "tags": "改革开放 创业 姐妹情 时代变迁 沪漂",
        "url": "./movie-1096.html",
        "cover": "./46.jpg"
    },
    {
        "title": "超级巨星",
        "region": "印度",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,歌舞,励志",
        "tags": "平民窟 网红 阶级",
        "url": "./movie-1097.html",
        "cover": "./47.jpg"
    },
    {
        "title": "你的鸟儿会唱歌",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,剧情",
        "tags": "文艺 三角恋 书店 青春",
        "url": "./movie-1098.html",
        "cover": "./48.jpg"
    },
    {
        "title": "女之园",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/历史",
        "tags": "女性主义 二战 慰安妇 沉默与控诉",
        "url": "./movie-1099.html",
        "cover": "./49.jpg"
    },
    {
        "title": "迪克·特蕾西",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作,犯罪,黑色电影",
        "tags": "硬汉侦探 霓虹美学 连环杀手 漫画改编",
        "url": "./movie-1100.html",
        "cover": "./50.jpg"
    },
    {
        "title": "白粉飞 第四季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "犯罪/剧情/动作",
        "tags": "毒品帝国 80年代 洛杉矶 黑帮 家族斗争",
        "url": "./movie-1101.html",
        "cover": "./51.jpg"
    },
    {
        "title": "戈壁恩仇录",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "武侠,动作,历史",
        "tags": "西部武侠 复仇 丝绸之路 冷兵器",
        "url": "./movie-1102.html",
        "cover": "./52.jpg"
    },
    {
        "title": "新娘百分百",
        "region": "泰国",
        "type": "电影",
        "year": "2023",
        "genre": "爱情、喜剧",
        "tags": "婚庆 假戏真做 霸总 泰式抓马 反转",
        "url": "./movie-1103.html",
        "cover": "./53.jpg"
    },
    {
        "title": "凛冬王第一季",
        "region": "美国",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情,动作,历史,奇幻",
        "tags": "中世纪 权力斗争 冰雪世界",
        "url": "./movie-1104.html",
        "cover": "./54.jpg"
    },
    {
        "title": "大班密令之都市浮华粤语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "1989",
        "genre": "剧情/犯罪",
        "tags": "廉政公署 商战 粤语原声 80年代 卧底",
        "url": "./movie-1105.html",
        "cover": "./55.jpg"
    },
    {
        "title": "街篮联盟",
        "region": "中国",
        "type": "电视剧",
        "year": "2024",
        "genre": "青春,运动,热血",
        "tags": "街头篮球 成长 兄弟情 逆袭",
        "url": "./movie-1106.html",
        "cover": "./56.jpg"
    },
    {
        "title": "加菲猫的幸福生活第二季",
        "region": "美国",
        "type": "动画剧集",
        "year": "2009",
        "genre": "喜剧/动画/家庭",
        "tags": "搞笑日常 猫咪 美食 懒散哲学",
        "url": "./movie-1107.html",
        "cover": "./57.jpg"
    },
    {
        "title": "阴阳界",
        "region": "中国香港",
        "type": "电影",
        "year": "1998",
        "genre": "恐怖/奇幻",
        "tags": "阴阳眼 冥婚 轮回 民俗恐怖",
        "url": "./movie-1108.html",
        "cover": "./58.jpg"
    },
    {
        "title": "魅味",
        "region": "日本",
        "type": "电影",
        "year": "2027",
        "genre": "惊悚/悬疑/美食",
        "tags": "感官恐怖 料理 心理操控",
        "url": "./movie-1109.html",
        "cover": "./59.jpg"
    },
    {
        "title": "望实与君雄",
        "region": "日本",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情,剧情,青春",
        "tags": "校园 暗恋 双向奔赴 治愈 日系",
        "url": "./movie-1110.html",
        "cover": "./60.jpg"
    },
    {
        "title": "超急情圣",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "浪漫喜剧,奇幻",
        "tags": "平行时空 约会 自我成长",
        "url": "./movie-1111.html",
        "cover": "./61.jpg"
    },
    {
        "title": "超级小郎中",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2021",
        "genre": "古装、奇幻、悬疑",
        "tags": "中医解谜 民间怪谈 单元探案",
        "url": "./movie-1112.html",
        "cover": "./62.jpg"
    },
    {
        "title": "中华英雄粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "动作,奇幻",
        "tags": "漫画改编 民国 异能 粤语原声",
        "url": "./movie-1113.html",
        "cover": "./63.jpg"
    },
    {
        "title": "画室培欲",
        "region": "日本",
        "type": "电影",
        "year": "2002",
        "genre": "悬疑/惊悚/情色",
        "tags": "密室囚禁 斯德哥尔摩综合征 创作欲 反转",
        "url": "./movie-1114.html",
        "cover": "./64.jpg"
    },
    {
        "title": "不规则的爱",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,爱情,悬疑",
        "tags": "非线性叙事 都市情感 心理博弈",
        "url": "./movie-1115.html",
        "cover": "./65.jpg"
    },
    {
        "title": "性命出售",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/犯罪/剧情",
        "tags": "暗网 器官贩卖 社会派 反转 人性",
        "url": "./movie-1116.html",
        "cover": "./66.jpg"
    },
    {
        "title": "我们存在的理由",
        "region": "法国/德国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/哲学",
        "tags": "存在主义 家庭 传承 生命意义 静谧",
        "url": "./movie-1117.html",
        "cover": "./67.jpg"
    },
    {
        "title": "大雄的绘世界物语",
        "region": "日本",
        "type": "动画电影",
        "year": "2025",
        "genre": "奇幻,冒险,治愈",
        "tags": "哆啦A梦 绘画 平行世界 友情",
        "url": "./movie-1118.html",
        "cover": "./68.jpg"
    },
    {
        "title": "新乌龙女校2",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/冒险",
        "tags": "英式幽默 女子学校 荒诞 反叛 姐妹情",
        "url": "./movie-1119.html",
        "cover": "./69.jpg"
    },
    {
        "title": "八又二分一女人",
        "region": "日本,法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,奇幻",
        "tags": "梦境 欲望 费里尼致敬 超现实",
        "url": "./movie-1120.html",
        "cover": "./70.jpg"
    },
    {
        "title": "限时翻供",
        "region": "韩国",
        "type": "电影",
        "year": "2026",
        "genre": "动作/犯罪/法庭",
        "tags": "律师 黑帮 12小时 反转",
        "url": "./movie-1121.html",
        "cover": "./71.jpg"
    },
    {
        "title": "泄密者",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "犯罪,悬疑,剧情",
        "tags": "港产犯罪 媒体黑幕 记者 以命换真相 道德困境",
        "url": "./movie-1122.html",
        "cover": "./72.jpg"
    },
    {
        "title": "七月之后",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "爱情、奇幻、悬疑",
        "tags": "时间循环 青梅竹马 唯美",
        "url": "./movie-1123.html",
        "cover": "./73.jpg"
    },
    {
        "title": "荼靡",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2025",
        "genre": "爱情,剧情,人生",
        "tags": "平行时空 女性抉择 职场 虐心",
        "url": "./movie-1124.html",
        "cover": "./74.jpg"
    },
    {
        "title": "大周小冰人第二季",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "古装,爱情,职场",
        "tags": "媒人 婚恋 甜宠 探案 古代职场",
        "url": "./movie-1125.html",
        "cover": "./75.jpg"
    },
    {
        "title": "少林兄弟",
        "region": "中国香港",
        "type": "电影",
        "year": "1977",
        "genre": "动作武侠",
        "tags": "邵氏 少林寺 兄弟情 复仇",
        "url": "./movie-1126.html",
        "cover": "./76.jpg"
    },
    {
        "title": "我是中国人",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,战争,历史",
        "tags": "二战 华工 身份认同 海外",
        "url": "./movie-1127.html",
        "cover": "./77.jpg"
    },
    {
        "title": "扮演受害者",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2006",
        "genre": "喜剧/犯罪",
        "tags": "黑色幽默 角色扮演 社会讽刺",
        "url": "./movie-1128.html",
        "cover": "./78.jpg"
    },
    {
        "title": "生命的圆圈",
        "region": "伊朗",
        "type": "电影",
        "year": "2000",
        "genre": "剧情,社会",
        "tags": "伊朗女性 长镜头 多线叙事 社会困境",
        "url": "./movie-1129.html",
        "cover": "./79.jpg"
    },
    {
        "title": "熔岩毒蛛",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻/灾难/恐怖",
        "tags": "B级片 火山 蜘蛛 怪兽 血腥",
        "url": "./movie-1130.html",
        "cover": "./80.jpg"
    },
    {
        "title": "种女",
        "region": "韩国",
        "type": "电影",
        "year": "1994",
        "genre": "剧情,伦理,历史",
        "tags": "朝鲜王朝 代孕制度 阶级悲剧",
        "url": "./movie-1131.html",
        "cover": "./81.jpg"
    },
    {
        "title": "七魔剑支配天下",
        "region": "日本",
        "type": "动画",
        "year": "2024",
        "genre": "奇幻战斗",
        "tags": "魔法学院 复仇 暗黑 群像 剑术",
        "url": "./movie-1132.html",
        "cover": "./82.jpg"
    },
    {
        "title": "行运一条龙",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "贺岁喜剧",
        "tags": "风水 过年 闹剧 家族",
        "url": "./movie-1133.html",
        "cover": "./83.jpg"
    },
    {
        "title": "小谢尔顿第四季",
        "region": "美国",
        "type": "电视剧",
        "year": "2020",
        "genre": "喜剧、家庭",
        "tags": "天才 童年 德州 成长烦恼",
        "url": "./movie-1134.html",
        "cover": "./84.jpg"
    },
    {
        "title": "维也纳的姑娘们",
        "region": "奥地利,德国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,音乐,爱情",
        "tags": "古典乐 女性成长 异国他乡 梦想",
        "url": "./movie-1135.html",
        "cover": "./85.jpg"
    },
    {
        "title": "方世玉粤语",
        "region": "香港",
        "type": "电影",
        "year": "1993",
        "genre": "动作、喜剧",
        "tags": "功夫 港片 经典 武侠",
        "url": "./movie-1136.html",
        "cover": "./86.jpg"
    },
    {
        "title": "早餐中国第四季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "纪录片",
        "tags": "美食 人文 烟火气 城市漫步",
        "url": "./movie-1137.html",
        "cover": "./87.jpg"
    },
    {
        "title": "小女神花铃",
        "region": "日本",
        "type": "动画",
        "year": "2023",
        "genre": "奇幻冒险",
        "tags": "变身少女 远古遗迹 女神转世 萌系画风",
        "url": "./movie-1138.html",
        "cover": "./88.jpg"
    },
    {
        "title": "冲突1945",
        "region": "美国",
        "type": "电影",
        "year": "1945",
        "genre": "战争,剧情",
        "tags": "二战 黑白 人性拷问 战地",
        "url": "./movie-1139.html",
        "cover": "./89.jpg"
    },
    {
        "title": "爱是一只猫",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/奇幻",
        "tags": "超现实 巴黎 孤独灵魂 治愈系",
        "url": "./movie-1140.html",
        "cover": "./90.jpg"
    },
    {
        "title": "铁血:生死隧战",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "战争/科幻",
        "tags": "隧道战 机械外骨骼 小队",
        "url": "./movie-1141.html",
        "cover": "./91.jpg"
    },
    {
        "title": "魔鬼骑士",
        "region": "美国",
        "type": "电影",
        "year": "1995",
        "genre": "恐怖,动作",
        "tags": "邪典 丧尸 骑士 末日",
        "url": "./movie-1142.html",
        "cover": "./92.jpg"
    },
    {
        "title": "鬼讯号2:灵异透视",
        "region": "美国",
        "type": "电影",
        "year": "2010",
        "genre": "恐怖",
        "tags": "超自然 灵媒 惊悚 续集 视觉",
        "url": "./movie-1143.html",
        "cover": "./93.jpg"
    },
    {
        "title": "一团乱麻",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/剧情",
        "tags": "家族群 过年 黑色幽默 社死",
        "url": "./movie-1144.html",
        "cover": "./94.jpg"
    },
    {
        "title": "帝王蝶之子",
        "region": "墨西哥/美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/奇幻/冒险",
        "tags": "超能力 迁徙 毒品 家族秘密 蝴蝶",
        "url": "./movie-1145.html",
        "cover": "./95.jpg"
    },
    {
        "title": "莱芬斯坦:影像的背叛",
        "region": "德国",
        "type": "电影",
        "year": "2019",
        "genre": "传记、历史",
        "tags": "艺术与权力 道德困境 纪录片导演",
        "url": "./movie-1146.html",
        "cover": "./96.jpg"
    },
    {
        "title": "震耳欲聋",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,犯罪,动作",
        "tags": "听障主角 低频陷阱 反杀",
        "url": "./movie-1147.html",
        "cover": "./97.jpg"
    },
    {
        "title": "龙王子第一季",
        "region": "美国",
        "type": "动画剧集",
        "year": "2024",
        "genre": "奇幻/冒险",
        "tags": "龙 魔法 双男主 史诗",
        "url": "./movie-1148.html",
        "cover": "./98.jpg"
    },
    {
        "title": "荒岛酒池",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,冒险,悬疑",
        "tags": "孤岛 酿酒 荒诞 寻宝 黑色幽默",
        "url": "./movie-1149.html",
        "cover": "./99.jpg"
    },
    {
        "title": "飘扬的红领巾",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "儿童,剧情",
        "tags": "留守儿童 成长 支教 理想 乡村",
        "url": "./movie-1150.html",
        "cover": "./100.jpg"
    },
    {
        "title": "周围的事",
        "region": "日本",
        "type": "电影",
        "year": "2008",
        "genre": "剧情",
        "tags": "家庭 日常 生死观 治愈",
        "url": "./movie-1151.html",
        "cover": "./101.jpg"
    },
    {
        "title": "吉祥不高兴",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "喜剧/爱情/古装",
        "tags": "先婚后爱 欢喜冤家 轻喜 甜宠 宅斗",
        "url": "./movie-1152.html",
        "cover": "./102.jpg"
    },
    {
        "title": "观鸟者",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/剧情",
        "tags": "鸟类 小镇秘密 自闭症 目击证人",
        "url": "./movie-1153.html",
        "cover": "./103.jpg"
    },
    {
        "title": "僵尸至尊",
        "region": "中国香港",
        "type": "电影",
        "year": "1991",
        "genre": "喜剧/恐怖/动作",
        "tags": "僵尸片 林正英式 茅山术 师徒 搞笑捉鬼",
        "url": "./movie-1154.html",
        "cover": "./104.jpg"
    },
    {
        "title": "鬼才要毕业",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2024",
        "genre": "喜剧/奇幻",
        "tags": "校园 鬼魂 青春",
        "url": "./movie-1155.html",
        "cover": "./105.jpg"
    },
    {
        "title": "勇士不哭",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/运动",
        "tags": "励志 拳击 父子关系 逆袭 底层抗争",
        "url": "./movie-1156.html",
        "cover": "./106.jpg"
    },
    {
        "title": "狼少女与黑王子",
        "region": "日本",
        "type": "电影",
        "year": "2016",
        "genre": "爱情/喜剧/校园",
        "tags": "少女漫改 抖S男主 假戏真做 驯化关系",
        "url": "./movie-1157.html",
        "cover": "./107.jpg"
    },
    {
        "title": "传呼机粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,家庭",
        "tags": "怀旧 九十年代 移民潮 市井温情",
        "url": "./movie-1158.html",
        "cover": "./108.jpg"
    },
    {
        "title": "来自月亮的我",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/奇幻/爱情",
        "tags": "月亮拟人 社畜幻想 都市童话 治愈系",
        "url": "./movie-1159.html",
        "cover": "./109.jpg"
    },
    {
        "title": "地球外少年少女",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "科幻,冒险",
        "tags": "太空 生存 AI 青少年",
        "url": "./movie-1160.html",
        "cover": "./110.jpg"
    },
    {
        "title": "忍者神龟:变种大乱斗",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "动画,动作,喜剧,科幻",
        "tags": "超级英雄 青少年 街头文化 成长",
        "url": "./movie-1161.html",
        "cover": "./111.jpg"
    },
    {
        "title": "烽火情鸳",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,战争",
        "tags": "抗日战争 谍战 民国 伉俪 牺牲",
        "url": "./movie-1162.html",
        "cover": "./112.jpg"
    },
    {
        "title": "帐篷、帐篷",
        "region": "韩国",
        "type": "电影",
        "year": "2019",
        "genre": "剧情/悬疑",
        "tags": "露营 失踪 家庭秘密 暴风雪 心理",
        "url": "./movie-1163.html",
        "cover": "./113.jpg"
    },
    {
        "title": "浪客剑心",
        "region": "日本",
        "type": "电影",
        "year": "2012",
        "genre": "动作/历史",
        "tags": "明治维新 逆刃刀 杀手赎罪 漫改 剑戟",
        "url": "./movie-1164.html",
        "cover": "./114.jpg"
    },
    {
        "title": "伟大的黎明",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "历史/战争",
        "tags": "黎明前夕 谍战 1949 上海",
        "url": "./movie-1165.html",
        "cover": "./115.jpg"
    },
    {
        "title": "光复日",
        "region": "中国台湾",
        "type": "电影",
        "year": "2018",
        "genre": "剧情/历史",
        "tags": "1945 终战 家族 身份认同 暗流",
        "url": "./movie-1166.html",
        "cover": "./116.jpg"
    },
    {
        "title": "利刃出鞘2",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "悬疑,犯罪,喜剧",
        "tags": "侦探 孤岛 富豪 古典派",
        "url": "./movie-1167.html",
        "cover": "./117.jpg"
    },
    {
        "title": "重生虐渣:娇养冰山总裁",
        "region": "中国大陆",
        "type": "网络微短剧",
        "year": "2024",
        "genre": "剧情,爱情,奇幻",
        "tags": "重生 复仇 甜宠 霸总 逆袭",
        "url": "./movie-1168.html",
        "cover": "./118.jpg"
    },
    {
        "title": "南方公园:新冠之后",
        "region": "美国",
        "type": "动画特辑",
        "year": "2023",
        "genre": "喜剧,科幻,讽刺",
        "tags": "疫情 时间穿越 成人向",
        "url": "./movie-1169.html",
        "cover": "./119.jpg"
    },
    {
        "title": "整蛊兄弟帮",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧",
        "tags": "恶作剧 兄弟情 无厘头",
        "url": "./movie-1170.html",
        "cover": "./120.jpg"
    },
    {
        "title": "咖啡吧",
        "region": "韩国",
        "type": "剧集",
        "year": "2026",
        "genre": "悬疑奇幻",
        "tags": "单元剧 都市传说 治愈向 时间回溯",
        "url": "./movie-1171.html",
        "cover": "./121.jpg"
    },
    {
        "title": "九死一省",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑/犯罪/惊悚",
        "tags": "邪教 密室 心理博弈 限时",
        "url": "./movie-1172.html",
        "cover": "./122.jpg"
    },
    {
        "title": "早安甜心欧嗨哟",
        "region": "日本",
        "type": "剧集",
        "year": "2021",
        "genre": "喜剧,爱情",
        "tags": "早餐店 治愈 反差萌 晨间日常",
        "url": "./movie-1173.html",
        "cover": "./123.jpg"
    },
    {
        "title": "鬼使神差1987",
        "region": "美国",
        "type": "电影",
        "year": "1987",
        "genre": "恐怖,奇幻",
        "tags": "灵媒 古宅 诅咒",
        "url": "./movie-1174.html",
        "cover": "./124.jpg"
    },
    {
        "title": "宏观世界",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "科幻/剧情",
        "tags": "量子物理 多重宇宙 孤独 抉择",
        "url": "./movie-1175.html",
        "cover": "./125.jpg"
    },
    {
        "title": "青柠男女第二季",
        "region": "中国大陆",
        "type": "网剧",
        "year": "2020",
        "genre": "都市、情感、喜剧",
        "tags": "合租 职场 轻熟男女 女性群像",
        "url": "./movie-1176.html",
        "cover": "./126.jpg"
    },
    {
        "title": "听说很好吃第四季",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2026",
        "genre": "真人秀,美食",
        "tags": "创意料理 明星 竞技 治愈",
        "url": "./movie-1177.html",
        "cover": "./127.jpg"
    },
    {
        "title": "调教你处男",
        "region": "香港",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,喜剧",
        "tags": "性喜剧 成长 温情",
        "url": "./movie-1178.html",
        "cover": "./128.jpg"
    },
    {
        "title": "没事没事",
        "region": "韩国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情,家庭",
        "tags": "温情 治愈 生死 亲情",
        "url": "./movie-1179.html",
        "cover": "./129.jpg"
    },
    {
        "title": "谁老在说我坏话",
        "region": "中国",
        "type": "剧集",
        "year": "2025",
        "genre": "喜剧/奇幻/悬疑",
        "tags": "读心术 职场黑马 反PUA 爽剧",
        "url": "./movie-1180.html",
        "cover": "./130.jpg"
    },
    {
        "title": "月明千里",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "古装,爱情,武侠",
        "tags": "江湖 宿命 复仇 诗意 唯美",
        "url": "./movie-1181.html",
        "cover": "./131.jpg"
    },
    {
        "title": "自由!",
        "region": "法国",
        "type": "电视剧",
        "year": "2024",
        "genre": "历史",
        "tags": "法国大革命 女性群像 断头台 政治惊悚",
        "url": "./movie-1182.html",
        "cover": "./132.jpg"
    },
    {
        "title": "情满雪阳花",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/爱情",
        "tags": "年代 家族恩怨 虐恋 治愈",
        "url": "./movie-1183.html",
        "cover": "./133.jpg"
    },
    {
        "title": "功夫小兔侠",
        "region": "中国大陆",
        "type": "动画电影",
        "year": "2024",
        "genre": "喜剧/动作/儿童",
        "tags": "动物功夫 反派萌化 传统武术 合家欢",
        "url": "./movie-1184.html",
        "cover": "./134.jpg"
    },
    {
        "title": "超次元学院2",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/校园",
        "tags": "穿越 异能 青春 虚拟现实",
        "url": "./movie-1185.html",
        "cover": "./135.jpg"
    },
    {
        "title": "过年好",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/家庭",
        "tags": "春节 亲情 返乡 和解 代沟",
        "url": "./movie-1186.html",
        "cover": "./136.jpg"
    },
    {
        "title": "舞妓哈哈哈",
        "region": "日本",
        "type": "电影",
        "year": "2007",
        "genre": "喜剧,剧情",
        "tags": "舞妓 追梦 文化冲突 搞笑 励志",
        "url": "./movie-1187.html",
        "cover": "./137.jpg"
    },
    {
        "title": "魔鬼·性·狂想曲",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,情色,心理惊悚",
        "tags": "欲望纠缠 虚实交错 女性凝视",
        "url": "./movie-1188.html",
        "cover": "./138.jpg"
    },
    {
        "title": "坑蒙拐骗外星人",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,科幻",
        "tags": "外星人 诈骗 黑色幽默 小镇",
        "url": "./movie-1189.html",
        "cover": "./139.jpg"
    },
    {
        "title": "寻找薇薇安·迈尔",
        "region": "美国",
        "type": "电视剧",
        "year": "2026",
        "genre": "剧情/悬疑/传记",
        "tags": "摄影 身份之谜 女性视角 文艺 慢热",
        "url": "./movie-1190.html",
        "cover": "./140.jpg"
    },
    {
        "title": "龙虎会",
        "region": "中国香港",
        "type": "电影",
        "year": "1992",
        "genre": "动作/犯罪",
        "tags": "双雄 警匪 兄弟情 枪战 港片黄金时代",
        "url": "./movie-1191.html",
        "cover": "./141.jpg"
    },
    {
        "title": "青春月谭",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情、奇幻、青春",
        "tags": "时间循环 校园 遗憾 成长",
        "url": "./movie-1192.html",
        "cover": "./142.jpg"
    },
    {
        "title": "恰吉",
        "region": "美国",
        "type": "剧集",
        "year": "2019",
        "genre": "恐怖/惊悚/黑色喜剧",
        "tags": "鬼娃 附身 青少年恐怖 血腥恶趣味",
        "url": "./movie-1193.html",
        "cover": "./143.jpg"
    },
    {
        "title": "女兵报到",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/军旅",
        "tags": "青春 成长 热血 女性 励志",
        "url": "./movie-1194.html",
        "cover": "./144.jpg"
    },
    {
        "title": "少爷的磨难",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2021",
        "genre": "剧情,历史,家庭",
        "tags": "民国 家族 兴衰 成长",
        "url": "./movie-1195.html",
        "cover": "./145.jpg"
    },
    {
        "title": "致命追击 2009",
        "region": "法国",
        "type": "电影",
        "year": "2009",
        "genre": "犯罪动作",
        "tags": "杀手 复仇 巴黎 怀旧动作",
        "url": "./movie-1196.html",
        "cover": "./146.jpg"
    },
    {
        "title": "兰闺飞凤",
        "region": "中国香港",
        "type": "电影",
        "year": "1988",
        "genre": "喜剧,动作,女性",
        "tags": "港产片 女子特工 全女班 八十年代",
        "url": "./movie-1197.html",
        "cover": "./147.jpg"
    },
    {
        "title": "霹雳娇娃",
        "region": "美国",
        "type": "电影",
        "year": "2019",
        "genre": "动作,喜剧,冒险",
        "tags": "女特工 高科技 姐妹情 全球追凶 重启版",
        "url": "./movie-1198.html",
        "cover": "./148.jpg"
    },
    {
        "title": "幸福满满",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "家庭/喜剧",
        "tags": "养老 拆迁 广场舞 邻里 轻喜",
        "url": "./movie-1199.html",
        "cover": "./149.jpg"
    },
    {
        "title": "复仇艳遇",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情,惊悚,悬疑",
        "tags": "假戏真做 身份谜团 色诱陷阱 反转",
        "url": "./movie-1200.html",
        "cover": "./150.jpg"
    },
    {
        "title": "第二爱情",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情/剧情/伦理",
        "tags": "出轨 中年危机 不伦 细腻 心理",
        "url": "./movie-1201.html",
        "cover": "./1.jpg"
    },
    {
        "title": "公民良心",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2003",
        "genre": "剧情,犯罪,社会",
        "tags": "反腐 良心 小人物 写实 震撼",
        "url": "./movie-1202.html",
        "cover": "./2.jpg"
    },
    {
        "title": "山村姐妹",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情,农村,年代",
        "tags": "姐妹情深 改革开放 女性成长 乡土中国 奋斗",
        "url": "./movie-1203.html",
        "cover": "./3.jpg"
    },
    {
        "title": "兽娘动物园",
        "region": "日本",
        "type": "动画剧集",
        "year": "2017",
        "genre": "奇幻,冒险",
        "tags": "兽娘 废土 科普",
        "url": "./movie-1204.html",
        "cover": "./4.jpg"
    },
    {
        "title": "毕业忌念册",
        "region": "泰国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖",
        "tags": "校园诅咒 毕业照 轮回 泰式鬼片",
        "url": "./movie-1205.html",
        "cover": "./5.jpg"
    },
    {
        "title": "疯狂的兔子",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,动画,家庭",
        "tags": "兔子 疯狂实验 末日危机 无厘头 高智商动物",
        "url": "./movie-1206.html",
        "cover": "./6.jpg"
    },
    {
        "title": "永不独行",
        "region": "中国大陆",
        "type": "电影",
        "year": "2020",
        "genre": "剧情,运动,家庭",
        "tags": "足球 父子情 救赎",
        "url": "./movie-1207.html",
        "cover": "./7.jpg"
    },
    {
        "title": "海角上的兄妹",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/悬疑/同性",
        "tags": "灯塔 自闭症 守护 海岸",
        "url": "./movie-1208.html",
        "cover": "./8.jpg"
    },
    {
        "title": "魔法双星",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "奇幻,家庭,冒险",
        "tags": "双胞胎 魔法学院 对立元素 姐妹情",
        "url": "./movie-1209.html",
        "cover": "./9.jpg"
    },
    {
        "title": "姓科的人",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑",
        "tags": "悬疑 姓氏 怪谈 乡村 人性",
        "url": "./movie-1210.html",
        "cover": "./10.jpg"
    },
    {
        "title": "哈基",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "剧情、音乐",
        "tags": "说唱 代际冲突 方言 底层叙事 梦想",
        "url": "./movie-1211.html",
        "cover": "./11.jpg"
    },
    {
        "title": "工作细胞 国语版",
        "region": "日本/中国大陆",
        "type": "剧集/动画",
        "year": "2024",
        "genre": "喜剧/科普/动作",
        "tags": "拟人化 细胞 人体 配音",
        "url": "./movie-1212.html",
        "cover": "./12.jpg"
    },
    {
        "title": "老虎吊颈",
        "region": "中国香港",
        "type": "电影",
        "year": "1989",
        "genre": "动作,惊悚",
        "tags": "警匪 卧底 黑吃黑 极限",
        "url": "./movie-1213.html",
        "cover": "./13.jpg"
    },
    {
        "title": "末日机器",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,惊悚",
        "tags": "人工智能 末日 伦理 密室 阴谋",
        "url": "./movie-1214.html",
        "cover": "./14.jpg"
    },
    {
        "title": "碧眼",
        "region": "蒙古/德国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/西部",
        "tags": "草原 复仇 边缘人 牧民生活",
        "url": "./movie-1215.html",
        "cover": "./15.jpg"
    },
    {
        "title": "夜总会奇杀案",
        "region": "中国香港",
        "type": "电影",
        "year": "1997",
        "genre": "悬疑,犯罪,惊悚",
        "tags": "怀旧 舞女 密室 连环杀手 港产片",
        "url": "./movie-1216.html",
        "cover": "./16.jpg"
    },
    {
        "title": "河畔城市",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑",
        "tags": "河流 记忆 失踪 潮湿美学",
        "url": "./movie-1217.html",
        "cover": "./17.jpg"
    },
    {
        "title": "神警郝万忠",
        "region": "中国大陆",
        "type": "电影",
        "year": "2011",
        "genre": "剧情,犯罪,传记",
        "tags": "真实改编 英模 警察 破案",
        "url": "./movie-1218.html",
        "cover": "./18.jpg"
    },
    {
        "title": "地雷险区",
        "region": "乌克兰/波兰",
        "type": "电影",
        "year": "2022",
        "genre": "战争、惊悚、剧情",
        "tags": "排雷兵 儿童 生死抉择 东乌冲突 人性",
        "url": "./movie-1219.html",
        "cover": "./19.jpg"
    },
    {
        "title": "高速公路家族",
        "region": "韩国",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/家庭/悬疑",
        "tags": "流浪家庭 服务区 秘密 犯罪 底层",
        "url": "./movie-1220.html",
        "cover": "./20.jpg"
    },
    {
        "title": "卡片王子大暴走",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "奇幻,冒险,喜剧",
        "tags": "卡牌对战 异世界 热血 王子复仇 搞笑",
        "url": "./movie-1221.html",
        "cover": "./21.jpg"
    },
    {
        "title": "大唐歌飞",
        "region": "中国",
        "type": "电视剧",
        "year": "2025",
        "genre": "历史,音乐,剧情",
        "tags": "唐朝乐籍 女性群像 诗词入曲",
        "url": "./movie-1222.html",
        "cover": "./22.jpg"
    },
    {
        "title": "英才恨",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/悬疑/惊悚",
        "tags": "补习班 升学压力 复仇 心理惊悚",
        "url": "./movie-1223.html",
        "cover": "./23.jpg"
    },
    {
        "title": "三次元女友第一季",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧/爱情/校园",
        "tags": "宅男 现充 恋爱 反差 青春",
        "url": "./movie-1224.html",
        "cover": "./24.jpg"
    },
    {
        "title": "好运家",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,家庭",
        "tags": "麻将 家庭纠纷 草根 亲情",
        "url": "./movie-1225.html",
        "cover": "./25.jpg"
    },
    {
        "title": "两极对立",
        "region": "美国/德国",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚/剧情",
        "tags": "人格分裂 极地 密室 心理博弈 一人分饰两角",
        "url": "./movie-1226.html",
        "cover": "./26.jpg"
    },
    {
        "title": "幽游白书:冥界决斗篇",
        "region": "日本",
        "type": "动画剧集",
        "year": "2026",
        "genre": "动作/奇幻/冒险",
        "tags": "热血战斗 灵界侦探 tournament 伙伴羁绊 视觉奇观",
        "url": "./movie-1227.html",
        "cover": "./27.jpg"
    },
    {
        "title": "电报",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑,奇幻",
        "tags": "老旧电报机 跨时空 温情",
        "url": "./movie-1228.html",
        "cover": "./28.jpg"
    },
    {
        "title": "极品闺蜜2019粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧/剧情/女性",
        "tags": "塑料姐妹花 港式幽默 绝症反转",
        "url": "./movie-1229.html",
        "cover": "./29.jpg"
    },
    {
        "title": "叔比狗:木乃伊传奇",
        "region": "美国",
        "type": "动画电影",
        "year": "2022",
        "genre": "喜剧/冒险/悬疑",
        "tags": "侦探狗 埃及 木乃伊 幽默 团队",
        "url": "./movie-1230.html",
        "cover": "./30.jpg"
    },
    {
        "title": "兄弟弹珠",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/家庭/运动",
        "tags": "弹珠 自闭症 兄弟情 催泪",
        "url": "./movie-1231.html",
        "cover": "./31.jpg"
    },
    {
        "title": "再爱的机会",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,剧情",
        "tags": "中年爱情 离婚夫妻 治愈",
        "url": "./movie-1232.html",
        "cover": "./32.jpg"
    },
    {
        "title": "出位新闻眼",
        "region": "美国",
        "type": "电视剧",
        "year": "2025",
        "genre": "剧情/职场",
        "tags": "媒体 新闻理想 职场斗争 收视率 道德困境",
        "url": "./movie-1233.html",
        "cover": "./33.jpg"
    },
    {
        "title": "至尊宝",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "奇幻爱情喜剧",
        "tags": "穿越 宿命 逆袭 月光宝盒 无厘头",
        "url": "./movie-1234.html",
        "cover": "./34.jpg"
    },
    {
        "title": "战地女护士",
        "region": "中国大陆",
        "type": "电影",
        "year": "2029",
        "genre": "战争/剧情/历史",
        "tags": "女性视角 医疗兵 人性光辉 残酷美学",
        "url": "./movie-1235.html",
        "cover": "./35.jpg"
    },
    {
        "title": "蜡笔小新:小白的屁屁炸弹",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "动画,喜剧,冒险",
        "tags": "蜡笔小新 小白 生化危机 家庭 恶搞",
        "url": "./movie-1236.html",
        "cover": "./36.jpg"
    },
    {
        "title": "魔术师",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,剧情,犯罪",
        "tags": "近景魔术 欺诈师 记忆操控 推理",
        "url": "./movie-1237.html",
        "cover": "./37.jpg"
    },
    {
        "title": "城迷",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/悬疑/犯罪",
        "tags": "都市传说 迷宫 失踪案 建筑师 记忆",
        "url": "./movie-1238.html",
        "cover": "./38.jpg"
    },
    {
        "title": "栩栩如昇",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,悬疑",
        "tags": "AI 复活 伦理",
        "url": "./movie-1239.html",
        "cover": "./39.jpg"
    },
    {
        "title": "燕子与鹦鹉",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "剧情、同性、家庭",
        "tags": "同性 少子化 代孕 和解",
        "url": "./movie-1240.html",
        "cover": "./40.jpg"
    },
    {
        "title": "维达I:过去的碎片",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/动作/冒险",
        "tags": "星球大战衍生 原力黑暗面 宿命 机械改造",
        "url": "./movie-1241.html",
        "cover": "./41.jpg"
    },
    {
        "title": "封神之人鱼传说",
        "region": "中国大陆",
        "type": "网络电影",
        "year": "2026",
        "genre": "奇幻、古装、爱情",
        "tags": "封神宇宙 人鱼恋 商周之战 诅咒",
        "url": "./movie-1242.html",
        "cover": "./42.jpg"
    },
    {
        "title": "汪汪队立大功第九季",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "动画,儿童",
        "tags": "冒险 救援 狗狗",
        "url": "./movie-1243.html",
        "cover": "./43.jpg"
    },
    {
        "title": "第三次浪潮",
        "region": "日本",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/科幻/灾难",
        "tags": "海啸 时光回溯 救援 牺牲 政府阴谋",
        "url": "./movie-1244.html",
        "cover": "./44.jpg"
    },
    {
        "title": "眠狂四郎无赖控:魔性之肌",
        "region": "日本",
        "type": "电影",
        "year": "1972",
        "genre": "动作,剧情,历史",
        "tags": "剑戟 时代剧 魔性 女性",
        "url": "./movie-1245.html",
        "cover": "./45.jpg"
    },
    {
        "title": "今夜玩到趴",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧、犯罪",
        "tags": "黑色幽默 连环意外 一夜狂乱",
        "url": "./movie-1246.html",
        "cover": "./46.jpg"
    },
    {
        "title": "福冈恋爱白书12",
        "region": "日本",
        "type": "剧集",
        "year": "2021",
        "genre": "爱情,剧情",
        "tags": "福冈 单元剧 真实改编 地方台",
        "url": "./movie-1247.html",
        "cover": "./47.jpg"
    },
    {
        "title": "番茄红",
        "region": "意大利",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/家庭/喜剧",
        "tags": "意大利南部 番茄种植 家族秘密 土地情结",
        "url": "./movie-1248.html",
        "cover": "./48.jpg"
    },
    {
        "title": "毕业季",
        "region": "日本",
        "type": "电视剧",
        "year": "2024",
        "genre": "校园,悬疑,青春",
        "tags": "毕业典礼 校园霸凌 复仇",
        "url": "./movie-1249.html",
        "cover": "./49.jpg"
    },
    {
        "title": "骨头先生",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "恐怖/喜剧",
        "tags": "木偶戏 连环杀手 黑童话 哥特喜剧 双主角",
        "url": "./movie-1250.html",
        "cover": "./50.jpg"
    },
    {
        "title": "老师不是人",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,科幻,悬疑",
        "tags": "寄生外星人 高中 叛逆 逃亡 身体恐怖",
        "url": "./movie-1251.html",
        "cover": "./51.jpg"
    },
    {
        "title": "玛丽亚·莫雷纳",
        "region": "西班牙",
        "type": "电视剧",
        "year": "2023",
        "genre": "剧情、历史",
        "tags": "吉普赛 复仇 家族史诗 弗拉明戈 禁恋",
        "url": "./movie-1252.html",
        "cover": "./52.jpg"
    },
    {
        "title": "机动战士高达 逆袭的夏亚",
        "region": "日本",
        "type": "动画电影",
        "year": "1988",
        "genre": "科幻,机战",
        "tags": "高达 宇宙世纪 经典对决",
        "url": "./movie-1253.html",
        "cover": "./53.jpg"
    },
    {
        "title": "飞女正传",
        "region": "香港",
        "type": "电影",
        "year": "2023",
        "genre": "动作,剧情",
        "tags": "女性 街头 帮派 复古 港风",
        "url": "./movie-1254.html",
        "cover": "./54.jpg"
    },
    {
        "title": "黑色太阳",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻、惊悚",
        "tags": "末日 变异 生存 阴谋",
        "url": "./movie-1255.html",
        "cover": "./55.jpg"
    },
    {
        "title": "到底是谁搞的鬼",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "恐怖,悬疑,青春",
        "tags": "网红 直播杀人 校园霸凌",
        "url": "./movie-1256.html",
        "cover": "./56.jpg"
    },
    {
        "title": "生存恐惧",
        "region": "日本",
        "type": "电影/动画",
        "year": "2025",
        "genre": "科幻/动作/恐怖",
        "tags": "逃生 外星生物 空间站 密室",
        "url": "./movie-1257.html",
        "cover": "./57.jpg"
    },
    {
        "title": "狂怒!",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作,惊悚,犯罪",
        "tags": "复仇 地下拳场 极限格斗 父女",
        "url": "./movie-1258.html",
        "cover": "./58.jpg"
    },
    {
        "title": "腌黄瓜先生第二季",
        "region": "美国",
        "type": "动画剧集",
        "year": "2024",
        "genre": "黑色喜剧/恐怖",
        "tags": "邪典 狗 邪教 内脏美学 儿童不宜",
        "url": "./movie-1259.html",
        "cover": "./59.jpg"
    },
    {
        "title": "两公婆今晚玩大咗",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "黑色喜剧/犯罪",
        "tags": "夫妻档 绑架乌龙 荒诞一夜",
        "url": "./movie-1260.html",
        "cover": "./60.jpg"
    },
    {
        "title": "永远的一天",
        "region": "希腊/法国",
        "type": "电影",
        "year": "1998",
        "genre": "剧情/哲学",
        "tags": "时间与记忆 诗意电影 生命终点",
        "url": "./movie-1261.html",
        "cover": "./61.jpg"
    },
    {
        "title": "三时三餐渔村篇第六季",
        "region": "韩国",
        "type": "综艺",
        "year": "2024",
        "genre": "真人秀",
        "tags": "慢生活 海岛 自给自足 老友记",
        "url": "./movie-1262.html",
        "cover": "./62.jpg"
    },
    {
        "title": "就系广告咁简单",
        "region": "中国香港",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/职场",
        "tags": "广告业 粤语 创意 黑色幽默",
        "url": "./movie-1263.html",
        "cover": "./63.jpg"
    },
    {
        "title": "萨拉托加(电影)",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情,历史,战争",
        "tags": "赛马 独立战争 家族 和解",
        "url": "./movie-1264.html",
        "cover": "./64.jpg"
    },
    {
        "title": "安妮·霍尔",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,爱情,文艺",
        "tags": "知识分子恋爱 伍迪·艾伦式 反浪漫",
        "url": "./movie-1265.html",
        "cover": "./65.jpg"
    },
    {
        "title": "岳:冰峰救援",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "冒险,灾难,剧情",
        "tags": "山岳救援 人性考验 北阿尔卑斯 极限生存",
        "url": "./movie-1266.html",
        "cover": "./66.jpg"
    },
    {
        "title": "狂父复子仇",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪/惊悚/动作",
        "tags": "复仇 父亲 黑帮 暴力美学 悲剧",
        "url": "./movie-1267.html",
        "cover": "./67.jpg"
    },
    {
        "title": "泰王纳黎宣5",
        "region": "泰国",
        "type": "电影",
        "year": "2015",
        "genre": "历史,战争",
        "tags": "史诗 泰缅战争 象战 民族英雄 宫廷",
        "url": "./movie-1268.html",
        "cover": "./68.jpg"
    },
    {
        "title": "神圣的母牛",
        "region": "法国",
        "type": "电影",
        "year": "2019",
        "genre": "剧情,喜剧,乡村",
        "tags": "农业 母女 传统与现代 黑色幽默",
        "url": "./movie-1269.html",
        "cover": "./69.jpg"
    },
    {
        "title": "信任之剑",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "历史/剧情",
        "tags": "武士道 法庭剧 反转",
        "url": "./movie-1270.html",
        "cover": "./70.jpg"
    },
    {
        "title": "夫妻时差",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情,家庭,奇幻",
        "tags": "婚姻 时差 反转 情感 平行世界",
        "url": "./movie-1271.html",
        "cover": "./71.jpg"
    },
    {
        "title": "时代当下",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2021",
        "genre": "剧情,年代",
        "tags": "改革开放 小人物 奋斗",
        "url": "./movie-1272.html",
        "cover": "./72.jpg"
    },
    {
        "title": "特战行动",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "动作,战争",
        "tags": "反恐 小队 高科技 实战 兄弟",
        "url": "./movie-1273.html",
        "cover": "./73.jpg"
    },
    {
        "title": "堕落妹",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "青春,剧情",
        "tags": "问题少女 叛逆 救赎 校园暴力",
        "url": "./movie-1274.html",
        "cover": "./74.jpg"
    },
    {
        "title": "珈百璃的堕落",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "奇幻喜剧",
        "tags": "天使 废柴 反差萌 日常",
        "url": "./movie-1275.html",
        "cover": "./75.jpg"
    },
    {
        "title": "神偷大盗",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/动作/犯罪",
        "tags": "盗贼联盟 黑吃黑 反转再反转",
        "url": "./movie-1276.html",
        "cover": "./76.jpg"
    },
    {
        "title": "锦衣卫之夺命奇书",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "动作,武侠,悬疑",
        "tags": "古装推理 连环杀人 武打设计",
        "url": "./movie-1277.html",
        "cover": "./77.jpg"
    },
    {
        "title": "铁面虎将",
        "region": "中国大陆",
        "type": "网络剧",
        "year": "2025",
        "genre": "古装,动作,悬疑",
        "tags": "替身 朝堂权谋 武打",
        "url": "./movie-1278.html",
        "cover": "./78.jpg"
    },
    {
        "title": "女盖世太保",
        "region": "法国/西德",
        "type": "电影",
        "year": "1976",
        "genre": "战争、惊悚、犯罪",
        "tags": "纳粹 女囚 剥削 复仇",
        "url": "./movie-1279.html",
        "cover": "./79.jpg"
    },
    {
        "title": "老鹰的历史",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "纪录片/传记/历史",
        "tags": "摇滚乐队 音乐史 幕后 美国梦",
        "url": "./movie-1280.html",
        "cover": "./80.jpg"
    },
    {
        "title": "毁灭者",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作,科幻",
        "tags": "反英雄 硬核 废土 暴力美学",
        "url": "./movie-1281.html",
        "cover": "./81.jpg"
    },
    {
        "title": "夜间公园",
        "region": "韩国",
        "type": "电视剧",
        "year": "2023",
        "genre": "奇幻/悬疑/职场",
        "tags": "午夜公园 妖精 许愿 代价",
        "url": "./movie-1282.html",
        "cover": "./82.jpg"
    },
    {
        "title": "生前之日",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑,奇幻",
        "tags": "时间循环 绝症 温情 反转",
        "url": "./movie-1283.html",
        "cover": "./83.jpg"
    },
    {
        "title": "春色奇观",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/奇幻/情色",
        "tags": "感官世界 春日幻想 欲望可视化",
        "url": "./movie-1284.html",
        "cover": "./84.jpg"
    },
    {
        "title": "捕狼行动",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "刑侦,动作",
        "tags": "缉毒 边境 卧底 硬汉",
        "url": "./movie-1285.html",
        "cover": "./85.jpg"
    },
    {
        "title": "无限",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "科幻/动作",
        "tags": "轮回 超能力 追杀 记忆觉醒",
        "url": "./movie-1286.html",
        "cover": "./86.jpg"
    },
    {
        "title": "诗人之血",
        "region": "法国",
        "type": "电影",
        "year": "1932",
        "genre": "奇幻/avant-garde",
        "tags": "超现实主义 实验电影 让·科克托",
        "url": "./movie-1287.html",
        "cover": "./87.jpg"
    },
    {
        "title": "要案组雷霆出击",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2016",
        "genre": "刑侦/悬疑",
        "tags": "重案 单元剧 团队协作 烧脑",
        "url": "./movie-1288.html",
        "cover": "./88.jpg"
    },
    {
        "title": "玉兰花开君再来",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2016",
        "genre": "爱情,年代",
        "tags": "民国 上海滩 歌女 复仇",
        "url": "./movie-1289.html",
        "cover": "./89.jpg"
    },
    {
        "title": "剑姬神圣谭",
        "region": "日本",
        "type": "动画剧集",
        "year": "2023",
        "genre": "奇幻/动作",
        "tags": "战斗少女 剑术 魔法 冒险小队 宿命对决",
        "url": "./movie-1290.html",
        "cover": "./90.jpg"
    },
    {
        "title": "天赋异禀第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/动作",
        "tags": "超能力 地下反抗军 道德灰度",
        "url": "./movie-1291.html",
        "cover": "./91.jpg"
    },
    {
        "title": "情系丹江口",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,家庭",
        "tags": "移民 南水北调 乡愁 三代人 现实主义",
        "url": "./movie-1292.html",
        "cover": "./92.jpg"
    },
    {
        "title": "恋爱星期天",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "爱情/奇幻",
        "tags": "时间循环 治愈 遗憾 东京 纯爱",
        "url": "./movie-1293.html",
        "cover": "./93.jpg"
    },
    {
        "title": "摄影师马丁",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/悬疑",
        "tags": "心理惊悚 记忆碎片 照片谜题 身份迷失",
        "url": "./movie-1294.html",
        "cover": "./94.jpg"
    },
    {
        "title": "剧场版 咒术回战 0",
        "region": "日本",
        "type": "动画电影",
        "year": "2021",
        "genre": "动作/奇幻/黑暗",
        "tags": "咒术 纯爱战神 乙骨忧太 热血催泪",
        "url": "./movie-1295.html",
        "cover": "./95.jpg"
    },
    {
        "title": "飞行者",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "传记,剧情",
        "tags": "航空 冒险 梦想 传奇",
        "url": "./movie-1296.html",
        "cover": "./96.jpg"
    },
    {
        "title": "不可抗力",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,灾难,人性",
        "tags": "暴风雪 密室 道德困境 社会缩影",
        "url": "./movie-1297.html",
        "cover": "./97.jpg"
    },
    {
        "title": "步步深陷",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑,爱情,都市",
        "tags": "诈骗 反套路 职场 高智商 男女主",
        "url": "./movie-1298.html",
        "cover": "./98.jpg"
    },
    {
        "title": "牛顿小子",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情,传记,西部",
        "tags": "少年劫匪 西部末路 兄弟情义",
        "url": "./movie-1299.html",
        "cover": "./99.jpg"
    },
    {
        "title": "半城明媚半城雨第一季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "奇幻,古装",
        "tags": "妖怪 老上海 古董 单元剧",
        "url": "./movie-1300.html",
        "cover": "./100.jpg"
    },
    {
        "title": "只能爱一个",
        "region": "中国台湾",
        "type": "电影",
        "year": "2026",
        "genre": "爱情/奇幻",
        "tags": "平行宇宙 选择困境 催泪",
        "url": "./movie-1301.html",
        "cover": "./101.jpg"
    },
    {
        "title": "天降财神1996国语",
        "region": "中国香港",
        "type": "剧集",
        "year": "1996",
        "genre": "喜剧,奇幻,家庭",
        "tags": "神仙下凡 港式喜剧 怀旧",
        "url": "./movie-1302.html",
        "cover": "./102.jpg"
    },
    {
        "title": "再见女儿",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "家庭,悬疑",
        "tags": "重组家庭 失踪 姐妹 日记",
        "url": "./movie-1303.html",
        "cover": "./103.jpg"
    },
    {
        "title": "血腥的艾里斯",
        "region": "西班牙",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/惊悚/女性",
        "tags": "复仇新娘 血腥婚礼 邪教 生存 女性反击",
        "url": "./movie-1304.html",
        "cover": "./104.jpg"
    },
    {
        "title": "甜密密",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2022",
        "genre": "爱情,喜剧,美食",
        "tags": "甜品 治愈 欢喜冤家",
        "url": "./movie-1305.html",
        "cover": "./105.jpg"
    },
    {
        "title": "疯狂农庄:动物也开趴",
        "region": "美国",
        "type": "动画电影",
        "year": "2006",
        "genre": "喜剧/动画/音乐",
        "tags": "农场 派对 拟人动物 屎尿屁",
        "url": "./movie-1306.html",
        "cover": "./106.jpg"
    },
    {
        "title": "沙丘之子",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "科幻/冒险",
        "tags": "太空歌剧 政治 复仇 史诗 特效大片",
        "url": "./movie-1307.html",
        "cover": "./107.jpg"
    },
    {
        "title": "双子星大冒险国语",
        "region": "中国大陆/美国",
        "type": "电影",
        "year": "2016",
        "genre": "动画/冒险/喜剧",
        "tags": "双胞胎 星际冒险 国语配音 成长",
        "url": "./movie-1308.html",
        "cover": "./108.jpg"
    },
    {
        "title": "超人气动物园",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2026",
        "genre": "喜剧,奇幻,家庭",
        "tags": "经营 拟人 网红 守护灵",
        "url": "./movie-1309.html",
        "cover": "./109.jpg"
    },
    {
        "title": "超能透明人",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/科幻/惊悚",
        "tags": "隐身 基因突变 反英雄",
        "url": "./movie-1310.html",
        "cover": "./110.jpg"
    },
    {
        "title": "波兰电影",
        "region": "波兰",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑",
        "tags": "元电影 影迷情怀 共产主义时期 寻找真相",
        "url": "./movie-1311.html",
        "cover": "./111.jpg"
    },
    {
        "title": "三嫁惹君心",
        "region": "中国",
        "type": "剧集",
        "year": "2025",
        "genre": "古装、爱情、喜剧",
        "tags": "先婚后爱 欢喜冤家 中医 宅斗 轻喜",
        "url": "./movie-1312.html",
        "cover": "./112.jpg"
    },
    {
        "title": "那场雨爱上你",
        "region": "泰国",
        "type": "剧集",
        "year": "2024",
        "genre": "同性爱情",
        "tags": "泰国 雨季 校园 初恋",
        "url": "./movie-1313.html",
        "cover": "./113.jpg"
    },
    {
        "title": "与我为邻",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/科幻",
        "tags": "外星邻居 身体寄生 小镇疑云 集体失忆 惊悚慢热",
        "url": "./movie-1314.html",
        "cover": "./114.jpg"
    },
    {
        "title": "阿玛菲艳阳天",
        "region": "意大利",
        "type": "电影",
        "year": "2023",
        "genre": "爱情/剧情",
        "tags": "疗愈 度假 美食 中年危机 偶遇",
        "url": "./movie-1315.html",
        "cover": "./115.jpg"
    },
    {
        "title": "90年圣诞假期",
        "region": "美国",
        "type": "电影",
        "year": "2020",
        "genre": "家庭",
        "tags": "怀旧 圣诞 成长 90年代",
        "url": "./movie-1316.html",
        "cover": "./116.jpg"
    },
    {
        "title": "生死绝恋",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2003",
        "genre": "爱情/剧情/家庭",
        "tags": "豪门 绝症 虐恋 年代经典",
        "url": "./movie-1317.html",
        "cover": "./117.jpg"
    },
    {
        "title": "失落的宝藏",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/冒险",
        "tags": "寻宝 丛林 阴谋 家族诅咒",
        "url": "./movie-1318.html",
        "cover": "./118.jpg"
    },
    {
        "title": "至暗米里亚姆",
        "region": "波兰",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/历史/战争",
        "tags": "二战 女同 纳粹 集中营幸存者",
        "url": "./movie-1319.html",
        "cover": "./119.jpg"
    },
    {
        "title": "谜道",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑,犯罪,心理",
        "tags": "刑侦 记忆 符号 连环案 公路",
        "url": "./movie-1320.html",
        "cover": "./120.jpg"
    },
    {
        "title": "奥约帝国缔造者",
        "region": "尼日利亚",
        "type": "剧集",
        "year": "2023",
        "genre": "历史,史诗,剧情",
        "tags": "非洲 王朝 权谋 冷兵器 传奇",
        "url": "./movie-1321.html",
        "cover": "./121.jpg"
    },
    {
        "title": "天王助理",
        "region": "中国",
        "type": "电视剧",
        "year": "2023",
        "genre": "喜剧,爱情,职场",
        "tags": "娱乐圈 打工逆袭 毒舌顶流 职场菜鸟",
        "url": "./movie-1322.html",
        "cover": "./122.jpg"
    },
    {
        "title": "扯蛋莎翁史",
        "region": "英国",
        "type": "电影",
        "year": "2018",
        "genre": "喜剧,历史,恶搞",
        "tags": "荒诞 解构 莎士比亚 英式幽默 穿越",
        "url": "./movie-1323.html",
        "cover": "./123.jpg"
    },
    {
        "title": "大阪外道",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "犯罪",
        "tags": "黑帮 悬疑 复仇 暴力美学 大阪",
        "url": "./movie-1324.html",
        "cover": "./124.jpg"
    },
    {
        "title": "罪美人",
        "region": "韩国",
        "type": "剧集",
        "year": "2020",
        "genre": "悬疑/犯罪/爱情",
        "tags": "整容复仇 换脸 财阀",
        "url": "./movie-1325.html",
        "cover": "./125.jpg"
    },
    {
        "title": "珠峰女王:拉克帕·夏尔巴",
        "region": "美国/尼泊尔",
        "type": "电影",
        "year": "2024",
        "genre": "传记/冒险",
        "tags": "登山 女性力量 真实改编 逆境 生存",
        "url": "./movie-1326.html",
        "cover": "./126.jpg"
    },
    {
        "title": "宝城艳姬",
        "region": "意大利",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/爱情/历史",
        "tags": "古装 宫廷 女性觉醒 权谋 美学",
        "url": "./movie-1327.html",
        "cover": "./127.jpg"
    },
    {
        "title": "翻叮一族粤语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2010",
        "genre": "喜剧/都市",
        "tags": "TVB 金融海啸 翻身 底层奋斗 市井智慧",
        "url": "./movie-1328.html",
        "cover": "./128.jpg"
    },
    {
        "title": "机器肉鸡第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "喜剧/动画/恶搞",
        "tags": "定格动画 玩梗 成人向 短剧",
        "url": "./movie-1329.html",
        "cover": "./129.jpg"
    },
    {
        "title": "人情纸气球",
        "region": "中国台湾",
        "type": "电影",
        "year": "2020",
        "genre": "剧情",
        "tags": "葬礼 纸扎 亲情 留守儿童 告别",
        "url": "./movie-1330.html",
        "cover": "./130.jpg"
    },
    {
        "title": "开拍吧!第二滴血",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "喜剧/动作",
        "tags": "戏中戏 片场 恶搞 无厘头",
        "url": "./movie-1331.html",
        "cover": "./131.jpg"
    },
    {
        "title": "巴斯特·基顿归来",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,动作,传记",
        "tags": "默片 致敬 穿越 特技",
        "url": "./movie-1332.html",
        "cover": "./132.jpg"
    },
    {
        "title": "隐藏的话",
        "region": "中国台湾",
        "type": "电影",
        "year": "2018",
        "genre": "剧情/家庭",
        "tags": "日记 自闭症 母爱 治愈",
        "url": "./movie-1333.html",
        "cover": "./133.jpg"
    },
    {
        "title": "我的英雄学院第七季",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "动画、热血",
        "tags": "超能力 英雄 死柄木 最终决战",
        "url": "./movie-1334.html",
        "cover": "./134.jpg"
    },
    {
        "title": "娇妻芳龄几许",
        "region": "韩国",
        "type": "电影",
        "year": "2023",
        "genre": "悬疑惊悚",
        "tags": "年龄欺诈 豪门恩怨 反转",
        "url": "./movie-1335.html",
        "cover": "./135.jpg"
    },
    {
        "title": "千万别抬头",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,科幻,讽刺",
        "tags": "黑色幽默 社会讽刺 末日危机 媒体乱象 政治讽刺",
        "url": "./movie-1336.html",
        "cover": "./136.jpg"
    },
    {
        "title": "楚门的世界",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/科幻/悬疑",
        "tags": "虚拟现实 自由意志 媒体操控 惊悚反转",
        "url": "./movie-1337.html",
        "cover": "./137.jpg"
    },
    {
        "title": "水浇园丁",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,家庭",
        "tags": "恶作剧 邻里 生活喜剧 经典致敬",
        "url": "./movie-1338.html",
        "cover": "./138.jpg"
    },
    {
        "title": "梅与小猫巴士",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "动画/奇幻",
        "tags": "吉卜力精神 猫的报恩 童年冒险 治愈系",
        "url": "./movie-1339.html",
        "cover": "./139.jpg"
    },
    {
        "title": "野马",
        "region": "土耳其/法国",
        "type": "电影",
        "year": "2015",
        "genre": "剧情,青春",
        "tags": "女性觉醒 乡村 束缚",
        "url": "./movie-1340.html",
        "cover": "./140.jpg"
    },
    {
        "title": "阿拉斯加大淘金第六季",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "纪录片/冒险",
        "tags": "淘金 极限生存 家族纷争 自然奇观",
        "url": "./movie-1341.html",
        "cover": "./141.jpg"
    },
    {
        "title": "卡片战斗先导者",
        "region": "日本",
        "type": "剧集",
        "year": "2011",
        "genre": "动画/竞技",
        "tags": "卡牌 热血 少年 友情 成长",
        "url": "./movie-1342.html",
        "cover": "./142.jpg"
    },
    {
        "title": "日夜男女",
        "region": "韩国",
        "type": "电影",
        "year": "2023",
        "genre": "爱情、奇幻、剧情",
        "tags": "双人格 便利店夜班 治愈 时间循环",
        "url": "./movie-1343.html",
        "cover": "./143.jpg"
    },
    {
        "title": "乡村小屋",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/惊悚",
        "tags": "密室 遗产 家族秘密 反转",
        "url": "./movie-1344.html",
        "cover": "./144.jpg"
    },
    {
        "title": "小楼残梦国语",
        "region": "中国香港",
        "type": "电影",
        "year": "1975",
        "genre": "爱情,文艺",
        "tags": "邵氏 虐恋 民国",
        "url": "./movie-1345.html",
        "cover": "./145.jpg"
    },
    {
        "title": "偷窃",
        "region": "波兰",
        "type": "电影",
        "year": "2016",
        "genre": "剧情/犯罪",
        "tags": "二战 奥斯维辛 犹太人 金牙 道德困境",
        "url": "./movie-1346.html",
        "cover": "./146.jpg"
    },
    {
        "title": "这个夏天的秘密",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,青春",
        "tags": "治愈 秘密 成长",
        "url": "./movie-1347.html",
        "cover": "./147.jpg"
    },
    {
        "title": "头骨欲裂",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "动作/犯罪",
        "tags": "硬核动作 黑帮复仇 肉搏 感官刺激 一镜到底(伪)",
        "url": "./movie-1348.html",
        "cover": "./148.jpg"
    },
    {
        "title": "风之门:情系西西里岛",
        "region": "意大利",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情史诗",
        "tags": "黑手党 风车 时代剧 家族斗争 禁忌之恋",
        "url": "./movie-1349.html",
        "cover": "./149.jpg"
    },
    {
        "title": "绿林怪杰",
        "region": "英国",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧,冒险,历史",
        "tags": "侠盗 恶搞 中世纪 英式幽默",
        "url": "./movie-1350.html",
        "cover": "./150.jpg"
    },
    {
        "title": "尖峰",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "动作,警匪",
        "tags": "港产片 双雄对决 高楼攀爬",
        "url": "./movie-1351.html",
        "cover": "./1.jpg"
    },
    {
        "title": "克利夫的一切",
        "region": "法国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑剧情",
        "tags": "人格分裂 小镇秘事 身份认同",
        "url": "./movie-1352.html",
        "cover": "./2.jpg"
    },
    {
        "title": "大明嫔妃之反攻",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "古装/宫斗/动作",
        "tags": "嫔妃逆袭 女性权谋 冷宫复仇 动作设计",
        "url": "./movie-1353.html",
        "cover": "./3.jpg"
    },
    {
        "title": "红绒花",
        "region": "中国大陆",
        "type": "剧集",
        "year": "1985",
        "genre": "剧情,爱情,年代",
        "tags": "80年代 纺织厂 姐妹情 改革 命运",
        "url": "./movie-1354.html",
        "cover": "./4.jpg"
    },
    {
        "title": "死水",
        "region": "日本",
        "type": "电影",
        "year": "2021",
        "genre": "恐怖/悬疑",
        "tags": "民俗恐怖 诅咒村落 水井 轮回",
        "url": "./movie-1355.html",
        "cover": "./5.jpg"
    },
    {
        "title": "蓝色夏威夷",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "喜剧,音乐",
        "tags": "海滩 摇滚 猫王致敬",
        "url": "./movie-1356.html",
        "cover": "./6.jpg"
    },
    {
        "title": "杀人狂魔的故事",
        "region": "英国",
        "type": "剧集",
        "year": "2025",
        "genre": "惊悚/犯罪/心理",
        "tags": "连环杀手 童年创伤 叙事诡计 神反转",
        "url": "./movie-1357.html",
        "cover": "./7.jpg"
    },
    {
        "title": "汪洋中的一条船1978",
        "region": "中国台湾",
        "type": "电影",
        "year": "1978",
        "genre": "剧情,传记",
        "tags": "励志 残疾 真人真事 奋斗 乡土",
        "url": "./movie-1358.html",
        "cover": "./8.jpg"
    },
    {
        "title": "古宅老友记第五季",
        "region": "英国",
        "type": "剧集",
        "year": "2026",
        "genre": "喜剧奇幻",
        "tags": "鬼魂 合家欢 英式幽默 治愈",
        "url": "./movie-1359.html",
        "cover": "./9.jpg"
    },
    {
        "title": "黑与白(电影)",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑/犯罪",
        "tags": "种族 双男主 法律 反转 正义",
        "url": "./movie-1360.html",
        "cover": "./10.jpg"
    },
    {
        "title": "怒火街头国语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2024",
        "genre": "动作/犯罪/律政",
        "tags": "普通话版 草根律师 旧区抗争 市井热血",
        "url": "./movie-1361.html",
        "cover": "./11.jpg"
    },
    {
        "title": "青春请闭眼",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "悬疑/青春",
        "tags": "狼人杀 校园 死亡游戏 心理战 友谊",
        "url": "./movie-1362.html",
        "cover": "./12.jpg"
    },
    {
        "title": "人间恐怖",
        "region": "中国香港,中国台湾",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑,惊悚,单元剧",
        "tags": "人性 怪谈 反转 都市传说 心理",
        "url": "./movie-1363.html",
        "cover": "./13.jpg"
    },
    {
        "title": "今夜缠绵",
        "region": "法国",
        "type": "电影",
        "year": "2022",
        "genre": "爱情,剧情,音乐",
        "tags": "一夜情缘 巴黎夜景 灵魂共振",
        "url": "./movie-1364.html",
        "cover": "./14.jpg"
    },
    {
        "title": "爱在回响",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,奇幻,剧情",
        "tags": "时空交错 治愈 遗憾",
        "url": "./movie-1365.html",
        "cover": "./15.jpg"
    },
    {
        "title": "阿拉伯的劳伦斯",
        "region": "英国",
        "type": "电视剧",
        "year": "2023",
        "genre": "传记,历史,战争",
        "tags": "经典翻拍 沙漠史诗 政治阴谋",
        "url": "./movie-1366.html",
        "cover": "./16.jpg"
    },
    {
        "title": "一起露营吧",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚/悬疑",
        "tags": "野外求生 都市传说 直播 密室逃脱",
        "url": "./movie-1367.html",
        "cover": "./17.jpg"
    },
    {
        "title": "昨夜情深",
        "region": "美国",
        "type": "电影",
        "year": "1986",
        "genre": "剧情/爱情",
        "tags": "一夜情 纽约 两性关系 话痨 独立电影",
        "url": "./movie-1368.html",
        "cover": "./18.jpg"
    },
    {
        "title": "喋血藏金岭",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作,悬疑,西部",
        "tags": "夺宝 兄弟反目 密闭空间 枪战 非线性叙事",
        "url": "./movie-1369.html",
        "cover": "./19.jpg"
    },
    {
        "title": "闪亮的风采",
        "region": "澳大利亚",
        "type": "电影",
        "year": "1996",
        "genre": "音乐传记",
        "tags": "钢琴天才 父权压制 精神分裂",
        "url": "./movie-1370.html",
        "cover": "./20.jpg"
    },
    {
        "title": "米加门顿",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/悬疑/密室推理",
        "tags": "超能力公寓 集体失忆 数字诅咒 智斗",
        "url": "./movie-1371.html",
        "cover": "./21.jpg"
    },
    {
        "title": "我被处刑的未来",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "科幻/悬疑",
        "tags": "时间悖论 死刑 预知犯罪 道德困境 反转结局",
        "url": "./movie-1372.html",
        "cover": "./22.jpg"
    },
    {
        "title": "强风吹拂",
        "region": "日本",
        "type": "电影",
        "year": "2021",
        "genre": "运动,剧情,励志",
        "tags": "长跑 箱根驿传 青春 团队 逆境",
        "url": "./movie-1373.html",
        "cover": "./23.jpg"
    },
    {
        "title": "安娜贝尔2:诞生国语",
        "region": "美国/中国大陆合拍",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖/悬疑/惊悚",
        "tags": "鬼娃 国语配音版 孤儿院 邪教起源",
        "url": "./movie-1374.html",
        "cover": "./24.jpg"
    },
    {
        "title": "人浮于爱",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情/悬疑",
        "tags": "多角恋 PUA 情感操控",
        "url": "./movie-1375.html",
        "cover": "./25.jpg"
    },
    {
        "title": "天生不是宝贝",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/家庭",
        "tags": "弃婴 寻亲 身份认同 公路",
        "url": "./movie-1376.html",
        "cover": "./26.jpg"
    },
    {
        "title": "地狱猫",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "动作",
        "tags": "女杀手 黑色幽默 飙车 复仇 义警",
        "url": "./movie-1377.html",
        "cover": "./27.jpg"
    },
    {
        "title": "上空英雌地球争覇战",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "科幻,动作",
        "tags": "机甲 女性英雄 全球竞赛 外星入侵 变身",
        "url": "./movie-1378.html",
        "cover": "./28.jpg"
    },
    {
        "title": "多田便利屋",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/治愈",
        "tags": "便利屋 日常 人情味 单元剧 温暖",
        "url": "./movie-1379.html",
        "cover": "./29.jpg"
    },
    {
        "title": "双重威胁",
        "region": "泰国/中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "动作/悬疑/犯罪",
        "tags": "双雄对决 记忆移植 东南亚 器官贩卖",
        "url": "./movie-1380.html",
        "cover": "./30.jpg"
    },
    {
        "title": "大唐英豪之曼陀罗之谜",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "动作,悬疑,古装",
        "tags": "狄仁杰宇宙 幻术 解毒 双男主",
        "url": "./movie-1381.html",
        "cover": "./31.jpg"
    },
    {
        "title": "十三个女人",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,剧情,女性",
        "tags": "密室 心理博弈 复仇 群像",
        "url": "./movie-1382.html",
        "cover": "./32.jpg"
    },
    {
        "title": "惊天核网2002",
        "region": "美国",
        "type": "电影",
        "year": "2002",
        "genre": "动作,惊悚",
        "tags": "反恐 硬汉 限时营救 高科技",
        "url": "./movie-1383.html",
        "cover": "./33.jpg"
    },
    {
        "title": "年轻女人",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/女性",
        "tags": "女性成长 巴黎 迷茫 独立 文艺",
        "url": "./movie-1384.html",
        "cover": "./34.jpg"
    },
    {
        "title": "暗红",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,惊悚,剧情",
        "tags": "连环杀手 黑吃黑 反转再反转",
        "url": "./movie-1385.html",
        "cover": "./35.jpg"
    },
    {
        "title": "读心人第三季",
        "region": "加拿大",
        "type": "剧集",
        "year": "2015",
        "genre": "悬疑、奇幻、犯罪",
        "tags": "超能力破案 读心术 伦理困境",
        "url": "./movie-1386.html",
        "cover": "./36.jpg"
    },
    {
        "title": "大时代2国语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2024",
        "genre": "商战家族",
        "tags": "股票 家族恩怨 复仇 丁蟹2.0 TVB",
        "url": "./movie-1387.html",
        "cover": "./37.jpg"
    },
    {
        "title": "瞧!你这小脾气",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧/爱情",
        "tags": "欢喜冤家 职场 成长治愈 轻喜",
        "url": "./movie-1388.html",
        "cover": "./38.jpg"
    },
    {
        "title": "女巫",
        "region": "美国/英国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/民俗",
        "tags": "民间传说 巫术 17世纪 心理恐怖 邪教",
        "url": "./movie-1389.html",
        "cover": "./39.jpg"
    },
    {
        "title": "梦幻书院第七季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "动画,喜剧,奇幻",
        "tags": "国风 书院 修仙 搞笑",
        "url": "./movie-1390.html",
        "cover": "./40.jpg"
    },
    {
        "title": "影城春光",
        "region": "中国台湾",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/同性/青春",
        "tags": "老戏院 胶片守护者 禁忌之恋",
        "url": "./movie-1391.html",
        "cover": "./41.jpg"
    },
    {
        "title": "最美的时候遇见你",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "爱情/青春",
        "tags": "校园 遗憾 成长 纯爱",
        "url": "./movie-1392.html",
        "cover": "./42.jpg"
    },
    {
        "title": "阿舍正传",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,喜剧",
        "tags": "宫庙 八家将 边缘人 自我认同",
        "url": "./movie-1393.html",
        "cover": "./43.jpg"
    },
    {
        "title": "天旋地恋粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,奇幻",
        "tags": "粤语 时空循环 街头文化 怀旧",
        "url": "./movie-1394.html",
        "cover": "./44.jpg"
    },
    {
        "title": "湿油漆",
        "region": "英国",
        "type": "短片",
        "year": "2018",
        "genre": "悬疑,短片,心理",
        "tags": "画廊 盗窃 密室 反转 极简主义",
        "url": "./movie-1395.html",
        "cover": "./45.jpg"
    },
    {
        "title": "王室的婚礼",
        "region": "英国",
        "type": "电视剧",
        "year": "2023",
        "genre": "剧情,历史,宫廷",
        "tags": "王室 婚姻 阴谋 女性",
        "url": "./movie-1396.html",
        "cover": "./46.jpg"
    },
    {
        "title": "黑暗的森林",
        "region": "德国",
        "type": "电影",
        "year": "2017",
        "genre": "悬疑、恐怖、奇幻",
        "tags": "黑森林 传说 失踪 孩子 仪式",
        "url": "./movie-1397.html",
        "cover": "./47.jpg"
    },
    {
        "title": "反串之旅",
        "region": "中国大陆",
        "type": "综艺/纪录片",
        "year": "2020",
        "genre": "真人秀,社会实验,性别议题",
        "tags": "性别互换 社会实验 明星体验 共情挑战",
        "url": "./movie-1398.html",
        "cover": "./48.jpg"
    },
    {
        "title": "灵镜传奇",
        "region": "中国香港",
        "type": "剧集",
        "year": "2025",
        "genre": "奇幻,古装,悬疑",
        "tags": "玄幻 平行时空 神器 宿命 港风",
        "url": "./movie-1399.html",
        "cover": "./49.jpg"
    },
    {
        "title": "枕边不细语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "1990",
        "genre": "剧情、家庭、伦理",
        "tags": "怀旧 家族恩怨 卧底 失忆 港风",
        "url": "./movie-1400.html",
        "cover": "./50.jpg"
    },
    {
        "title": "饥饿病院",
        "region": "西班牙",
        "type": "电影",
        "year": "2013",
        "genre": "惊悚",
        "tags": "反乌托邦 医疗恐怖 阶级隔离",
        "url": "./movie-1401.html",
        "cover": "./51.jpg"
    },
    {
        "title": "黑色蛋糕",
        "region": "美国",
        "type": "电视剧",
        "year": "2023",
        "genre": "悬疑,犯罪,美食",
        "tags": "甜品师 冷案 双重身份 复仇",
        "url": "./movie-1402.html",
        "cover": "./52.jpg"
    },
    {
        "title": "原罪的羔羊",
        "region": "中国香港",
        "type": "电影",
        "year": "2026",
        "genre": "犯罪/悬疑/惊悚",
        "tags": "连环杀手 宗教 心理战 复仇",
        "url": "./movie-1403.html",
        "cover": "./53.jpg"
    },
    {
        "title": "没女神探",
        "region": "中国香港",
        "type": "电影",
        "year": "2015",
        "genre": "喜剧/悬疑/犯罪",
        "tags": "女警 乌龙探案 无厘头 单元破案 港式幽默",
        "url": "./movie-1404.html",
        "cover": "./54.jpg"
    },
    {
        "title": "你杀死的东西",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖、惊悚",
        "tags": "心理恐怖 内疚 幻觉 创伤 家庭",
        "url": "./movie-1405.html",
        "cover": "./55.jpg"
    },
    {
        "title": "黑洞启示录",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻灾难",
        "tags": "天体物理 硬科幻 人类存亡 末日求生",
        "url": "./movie-1406.html",
        "cover": "./56.jpg"
    },
    {
        "title": "花漾天海第一季",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/冒险/奇幻",
        "tags": "邮轮 时空循环 失踪案 海洋传说",
        "url": "./movie-1407.html",
        "cover": "./57.jpg"
    },
    {
        "title": "模范爱侣",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/惊悚",
        "tags": "婚姻背叛 悬疑 女性视角 社会阶层 反转",
        "url": "./movie-1408.html",
        "cover": "./58.jpg"
    },
    {
        "title": "隔世情真",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "爱情",
        "tags": "奇幻 穿越 书信 怀旧",
        "url": "./movie-1409.html",
        "cover": "./59.jpg"
    },
    {
        "title": "至上之法",
        "region": "韩国",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/律政/悬疑/惊悚",
        "tags": "法学院 谋杀案 模拟法庭 精英教育",
        "url": "./movie-1410.html",
        "cover": "./60.jpg"
    },
    {
        "title": "香港",
        "region": "香港",
        "type": "电影",
        "year": "2025",
        "genre": "科幻/黑色电影",
        "tags": "近未来 极端贫富 雨水税 公寓格斗 父女情",
        "url": "./movie-1411.html",
        "cover": "./61.jpg"
    },
    {
        "title": "蓝色管弦乐第二季",
        "region": "日本",
        "type": "动画剧集",
        "year": "2025",
        "genre": "音乐、青春、励志",
        "tags": "交响乐 天才与凡人 社团活动 成长",
        "url": "./movie-1412.html",
        "cover": "./62.jpg"
    },
    {
        "title": "新婚公寓",
        "region": "韩国",
        "type": "剧集",
        "year": "2023",
        "genre": "悬疑/惊悚/爱情",
        "tags": "新婚 邻里 变态 反转 密室",
        "url": "./movie-1413.html",
        "cover": "./63.jpg"
    },
    {
        "title": "海报女郎",
        "region": "美国",
        "type": "电影",
        "year": "1944",
        "genre": "歌舞/爱情",
        "tags": "二战后方 军工厂女孩 百老汇梦",
        "url": "./movie-1414.html",
        "cover": "./64.jpg"
    },
    {
        "title": "迷情机密",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑",
        "tags": "爱情 谋杀 间谍 记忆 反转",
        "url": "./movie-1415.html",
        "cover": "./65.jpg"
    },
    {
        "title": "白僵尸",
        "region": "美国",
        "type": "电影",
        "year": "1932",
        "genre": "恐怖、奇幻、早期电影",
        "tags": "黑白片 海地 巫毒 活死人 邪教",
        "url": "./movie-1416.html",
        "cover": "./66.jpg"
    },
    {
        "title": "梁祝:化蝶",
        "region": "中国",
        "type": "电影",
        "year": "2015",
        "genre": "爱情,古装",
        "tags": "民间传说 悲剧 奇幻 戏曲元素 凄美",
        "url": "./movie-1417.html",
        "cover": "./67.jpg"
    },
    {
        "title": "洗头",
        "region": "中国大陆",
        "type": "短片",
        "year": "2019",
        "genre": "剧情,家庭,女性",
        "tags": "母女代沟 日常对抗 短片张力 现实主义",
        "url": "./movie-1418.html",
        "cover": "./68.jpg"
    },
    {
        "title": "田园乐韵",
        "region": "中国",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/音乐/乡村",
        "tags": "乡村振兴 民乐 直播 代际 古琴",
        "url": "./movie-1419.html",
        "cover": "./69.jpg"
    },
    {
        "title": "最后的猎人",
        "region": "法国/加拿大",
        "type": "纪录片",
        "year": "2004",
        "genre": "纪录/冒险/传记",
        "tags": "极地 生存 传统坚守 人与自然",
        "url": "./movie-1420.html",
        "cover": "./70.jpg"
    },
    {
        "title": "玫瑰人生国语",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2024",
        "genre": "家庭,伦理,剧情",
        "tags": "三代女性 配音 家族恩怨 和解",
        "url": "./movie-1421.html",
        "cover": "./71.jpg"
    },
    {
        "title": "蓝色维也纳",
        "region": "奥地利",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/音乐/历史",
        "tags": "二战 艺术 背叛 古典乐",
        "url": "./movie-1422.html",
        "cover": "./72.jpg"
    },
    {
        "title": "魁拔",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "动画",
        "tags": "热血 奇幻 动作 国风",
        "url": "./movie-1423.html",
        "cover": "./73.jpg"
    },
    {
        "title": "来自火星的蜜拉",
        "region": "日本",
        "type": "TV剧集",
        "year": "2024",
        "genre": "爱情,科幻,治愈",
        "tags": "跨物种恋爱 社畜 孤僻 暖色调",
        "url": "./movie-1424.html",
        "cover": "./74.jpg"
    },
    {
        "title": "小孩猴有钱",
        "region": "台湾",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,黑色喜剧",
        "tags": "小孩 金融 诈骗 校园 阶层",
        "url": "./movie-1425.html",
        "cover": "./75.jpg"
    },
    {
        "title": "机器先锋",
        "region": "日本",
        "type": "动画剧集",
        "year": "2022",
        "genre": "科幻/机甲/战争",
        "tags": "原创 反乌托邦 哲学 机战 硬核",
        "url": "./movie-1426.html",
        "cover": "./76.jpg"
    },
    {
        "title": "圆梦公司",
        "region": "英国",
        "type": "剧集",
        "year": "2026",
        "genre": "剧情,奇幻",
        "tags": "记忆 代价 人性",
        "url": "./movie-1427.html",
        "cover": "./77.jpg"
    },
    {
        "title": "换命真相粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2023",
        "genre": "悬疑,奇幻",
        "tags": "身份互换 粤语原声 商战 救赎",
        "url": "./movie-1428.html",
        "cover": "./78.jpg"
    },
    {
        "title": "疯死",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/惊悚",
        "tags": "邪教 心理惊悚 密闭空间 反转",
        "url": "./movie-1429.html",
        "cover": "./79.jpg"
    },
    {
        "title": "千金女贼",
        "region": "台湾",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情/悬疑/喜剧",
        "tags": "身份互换 豪门恩怨 女贼情缘 罗曼史",
        "url": "./movie-1430.html",
        "cover": "./80.jpg"
    },
    {
        "title": "无限不无聊",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,喜剧,哲学",
        "tags": "时间循环 存在主义 幽默 脑洞大开",
        "url": "./movie-1431.html",
        "cover": "./81.jpg"
    },
    {
        "title": "奉旨成亲粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧/古装/爱情",
        "tags": "粤语 甜宠 女强 搞笑",
        "url": "./movie-1432.html",
        "cover": "./82.jpg"
    },
    {
        "title": "杀杀人、跳跳舞",
        "region": "中国香港",
        "type": "电影",
        "year": "1998",
        "genre": "动作,犯罪,爱情",
        "tags": "杀手 都市孤独 爵士乐 芭蕾",
        "url": "./movie-1433.html",
        "cover": "./83.jpg"
    },
    {
        "title": "追杀女巫猎人",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作/奇幻/恐怖",
        "tags": "女巫 反英雄 血腥",
        "url": "./movie-1434.html",
        "cover": "./84.jpg"
    },
    {
        "title": "致命伤害",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,犯罪,心理",
        "tags": "复仇 记忆碎片 心理操控 反转 暗黑",
        "url": "./movie-1435.html",
        "cover": "./85.jpg"
    },
    {
        "title": "孤战",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "谍战,悬疑,历史",
        "tags": "潜伏 孤胆英雄 智斗 抗战",
        "url": "./movie-1436.html",
        "cover": "./86.jpg"
    },
    {
        "title": "白兔糖",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "温情治愈",
        "tags": "育儿 大叔与萝莉 非血缘 日常",
        "url": "./movie-1437.html",
        "cover": "./87.jpg"
    },
    {
        "title": "魔战",
        "region": "香港",
        "type": "电影",
        "year": "1984",
        "genre": "恐怖/动作",
        "tags": "僵尸 茅山术 邵氏 邪典 功夫",
        "url": "./movie-1438.html",
        "cover": "./88.jpg"
    },
    {
        "title": "黑凯撒",
        "region": "美国",
        "type": "电影",
        "year": "1973",
        "genre": "剧情,犯罪,动作",
        "tags": "黑人剥削 黑帮 复仇",
        "url": "./movie-1439.html",
        "cover": "./89.jpg"
    },
    {
        "title": "春风野火",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪,剧情",
        "tags": "小镇悬疑 阶层对立 女性复仇",
        "url": "./movie-1440.html",
        "cover": "./90.jpg"
    },
    {
        "title": "狼袭草原",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作/冒险/西部",
        "tags": "草原 狼群 复仇 生存 民族",
        "url": "./movie-1441.html",
        "cover": "./91.jpg"
    },
    {
        "title": "海底军舰",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "动作,科幻,战争",
        "tags": "二战 机密兵器 深海巨兽 特效大片",
        "url": "./movie-1442.html",
        "cover": "./92.jpg"
    },
    {
        "title": "旧情棉棉",
        "region": "中国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/家庭",
        "tags": "棉纺厂 下岗潮 初恋 老年爱情 时代创伤",
        "url": "./movie-1443.html",
        "cover": "./93.jpg"
    },
    {
        "title": "喜剧之王2014",
        "region": "中国香港",
        "type": "电影",
        "year": "2014",
        "genre": "剧情,喜剧",
        "tags": "龙套 励志 致敬",
        "url": "./movie-1444.html",
        "cover": "./94.jpg"
    },
    {
        "title": "我非英雄",
        "region": "中国大陆",
        "type": "网络剧",
        "year": "2025",
        "genre": "悬疑,犯罪,心理",
        "tags": "刑警 双面人 卧底 心理创伤",
        "url": "./movie-1445.html",
        "cover": "./95.jpg"
    },
    {
        "title": "原谅的勇气",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,家庭,治愈",
        "tags": "死刑犯 受害者家属 和解之路 书信 心理创伤",
        "url": "./movie-1446.html",
        "cover": "./96.jpg"
    },
    {
        "title": "夜城赋之离生",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "古装、奇幻、权谋",
        "tags": "双面卧底 宫闱秘事 身份互换",
        "url": "./movie-1447.html",
        "cover": "./97.jpg"
    },
    {
        "title": "联邦调查局第一季",
        "region": "美国",
        "type": "电视剧",
        "year": "2018",
        "genre": "犯罪/剧情/动作",
        "tags": "探案剧 迪克·沃尔夫 纽约",
        "url": "./movie-1448.html",
        "cover": "./98.jpg"
    },
    {
        "title": "俏女怀春",
        "region": "中国香港",
        "type": "电影",
        "year": "1989",
        "genre": "喜剧/爱情",
        "tags": "港产片 误会 追女仔",
        "url": "./movie-1449.html",
        "cover": "./99.jpg"
    },
    {
        "title": "亚利桑那",
        "region": "美国",
        "type": "电影",
        "year": "2018",
        "genre": "惊悚/喜剧/黑色幽默",
        "tags": "次贷危机 房产血案 荒诞追杀",
        "url": "./movie-1450.html",
        "cover": "./100.jpg"
    },
    {
        "title": "极光大冒险",
        "region": "挪威/英国",
        "type": "电影/动画",
        "year": "2023",
        "genre": "冒险/家庭/奇幻",
        "tags": "极光 北极 动物 友情 成长",
        "url": "./movie-1451.html",
        "cover": "./101.jpg"
    },
    {
        "title": "凯恩舰事变",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/战争/心理",
        "tags": "海军 兵变 心理压迫 权威 法庭戏",
        "url": "./movie-1452.html",
        "cover": "./102.jpg"
    },
    {
        "title": "寂静的房子",
        "region": "土耳其",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖,心理,超自然",
        "tags": "一镜到底 声音恐惧 老宅诅咒",
        "url": "./movie-1453.html",
        "cover": "./103.jpg"
    },
    {
        "title": "即使你不和我做",
        "region": "日本",
        "type": "剧集",
        "year": "2023",
        "genre": "爱情,剧情",
        "tags": "无性婚姻 情感倦怠 出轨与救赎 成人情感",
        "url": "./movie-1454.html",
        "cover": "./104.jpg"
    },
    {
        "title": "京城教一粤语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2000",
        "genre": "动作/历史",
        "tags": "武术 京城 师傅 擂台 粤语配音",
        "url": "./movie-1455.html",
        "cover": "./105.jpg"
    },
    {
        "title": "母亲的罪爱",
        "region": "日本",
        "type": "电影",
        "year": "2014",
        "genre": "剧情,犯罪,家庭",
        "tags": "弑子 母亲 社会压迫 底层 法庭",
        "url": "./movie-1456.html",
        "cover": "./106.jpg"
    },
    {
        "title": "金部长的梦想人生",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,喜剧",
        "tags": "中年危机 公务员 人生重启",
        "url": "./movie-1457.html",
        "cover": "./107.jpg"
    },
    {
        "title": "让叶兰在空中飞舞",
        "region": "日本",
        "type": "电影",
        "year": "2026",
        "genre": "动画/奇幻/剧情",
        "tags": "治愈 植物灵 环保 成长",
        "url": "./movie-1458.html",
        "cover": "./108.jpg"
    },
    {
        "title": "得布拉肯宁",
        "region": "英国/挪威",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/犯罪/惊悚/北欧 noir",
        "tags": "极夜 邪教 心理惊悚 矿产",
        "url": "./movie-1459.html",
        "cover": "./109.jpg"
    },
    {
        "title": "欲海杀人王",
        "region": "中国香港",
        "type": "电影",
        "year": "1994",
        "genre": "犯罪/惊悚",
        "tags": "奇案 情色 Cult 任达华",
        "url": "./movie-1460.html",
        "cover": "./110.jpg"
    },
    {
        "title": "异度空间",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,悬疑",
        "tags": "心理 幻觉 出租屋 循环",
        "url": "./movie-1461.html",
        "cover": "./111.jpg"
    },
    {
        "title": "骨魔",
        "region": "中国香港",
        "type": "电影",
        "year": "1999",
        "genre": "恐怖,动作",
        "tags": "僵尸 奇幻 港片 邪术",
        "url": "./movie-1462.html",
        "cover": "./112.jpg"
    },
    {
        "title": "下一站...天后",
        "region": "中国香港",
        "type": "电影",
        "year": "2003",
        "genre": "喜剧音乐",
        "tags": "追梦 歌唱 小人物 励志 青春",
        "url": "./movie-1463.html",
        "cover": "./113.jpg"
    },
    {
        "title": "赤胆丹心",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "动作",
        "tags": "民国 义士 冷兵器格斗",
        "url": "./movie-1464.html",
        "cover": "./114.jpg"
    },
    {
        "title": "极南之地",
        "region": "新西兰/美国",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/生存",
        "tags": "南极灾难 科考惊悚 冰下怪物",
        "url": "./movie-1465.html",
        "cover": "./115.jpg"
    },
    {
        "title": "家的方向",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "文艺剧情",
        "tags": "公路 寻根 方言",
        "url": "./movie-1466.html",
        "cover": "./116.jpg"
    },
    {
        "title": "影像之书",
        "region": "法国",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/实验",
        "tags": "迷影致敬 胶片与数码 媒介反思 散文电影",
        "url": "./movie-1467.html",
        "cover": "./117.jpg"
    },
    {
        "title": "发条城市",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧、犯罪、冒险",
        "tags": "小人物 误打误撞 古董 闹剧",
        "url": "./movie-1468.html",
        "cover": "./118.jpg"
    },
    {
        "title": "围困",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/灾难",
        "tags": "暴风雪山庄 人性 生存 心理博弈",
        "url": "./movie-1469.html",
        "cover": "./119.jpg"
    },
    {
        "title": "孝女巧遇亲生父",
        "region": "中国大陆",
        "type": "电影",
        "year": "1993",
        "genre": "家庭伦理",
        "tags": "寻亲 催泪 年代 重逢 苦情",
        "url": "./movie-1470.html",
        "cover": "./120.jpg"
    },
    {
        "title": "末日狂城",
        "region": "美国/中国合拍",
        "type": "电影",
        "year": "2026",
        "genre": "动作/科幻/灾难",
        "tags": "末日 变异生物 孤城 机甲 生存",
        "url": "./movie-1471.html",
        "cover": "./121.jpg"
    },
    {
        "title": "父愁者联盟",
        "region": "中国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,家庭,动作",
        "tags": "父母 家长会 搞笑动作",
        "url": "./movie-1472.html",
        "cover": "./122.jpg"
    },
    {
        "title": "背鸭子的男孩",
        "region": "中国",
        "type": "电影",
        "year": "2005",
        "genre": "剧情/公路/青春",
        "tags": "四川 留守儿童 寻父 泥石流",
        "url": "./movie-1473.html",
        "cover": "./123.jpg"
    },
    {
        "title": "恶邻罗曼史",
        "region": "韩国",
        "type": "电影",
        "year": "2015",
        "genre": "爱情,喜剧",
        "tags": "契约恋爱 欢喜冤家 噪音战争 邻里关系",
        "url": "./movie-1474.html",
        "cover": "./124.jpg"
    },
    {
        "title": "外星人之谜",
        "region": "美国",
        "type": "纪录片",
        "year": "2025",
        "genre": "纪录,悬疑,科幻",
        "tags": "未解之谜 远古外星人理论 考古 阴谋论",
        "url": "./movie-1475.html",
        "cover": "./125.jpg"
    },
    {
        "title": "编辑情人梦",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情,职场",
        "tags": "出版社 编辑 姐弟恋 文学",
        "url": "./movie-1476.html",
        "cover": "./126.jpg"
    },
    {
        "title": "伦敦大道",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,爱情,黑色电影",
        "tags": "黑帮 文艺 救赎 偷窃",
        "url": "./movie-1477.html",
        "cover": "./127.jpg"
    },
    {
        "title": "钟路布尔斯",
        "region": "韩国",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情,动作",
        "tags": "黑帮 梨泰院 正义 兄弟情 漫画改编",
        "url": "./movie-1478.html",
        "cover": "./128.jpg"
    },
    {
        "title": "我的纯洁土地",
        "region": "英国/巴基斯坦",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/犯罪",
        "tags": "荣誉谋杀 移民二代 女性复仇 现实主义",
        "url": "./movie-1479.html",
        "cover": "./129.jpg"
    },
    {
        "title": "博物馆奇妙夜3",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "奇幻、喜剧、冒险",
        "tags": "博物馆 复活 时空穿越 历史名人 父女情",
        "url": "./movie-1480.html",
        "cover": "./130.jpg"
    },
    {
        "title": "冲天小子粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "1989",
        "genre": "动作犯罪",
        "tags": "机车 兄弟情 热血 复仇",
        "url": "./movie-1481.html",
        "cover": "./131.jpg"
    },
    {
        "title": "弃子",
        "region": "中国香港",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/犯罪/悬疑",
        "tags": "跨境拐卖 寻亲 底层悲歌 多线叙事",
        "url": "./movie-1482.html",
        "cover": "./132.jpg"
    },
    {
        "title": "志愿军",
        "region": "中国",
        "type": "电影",
        "year": "2024",
        "genre": "战争,历史",
        "tags": "战争 历史 抗美援朝 家国情怀",
        "url": "./movie-1483.html",
        "cover": "./133.jpg"
    },
    {
        "title": "我的青春不再见",
        "region": "中国大陆",
        "type": "电影",
        "year": "2019",
        "genre": "剧情/青春",
        "tags": "校园 友谊 成长",
        "url": "./movie-1484.html",
        "cover": "./134.jpg"
    },
    {
        "title": "螳螂小子粤语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "1994",
        "genre": "动作/喜剧/武侠",
        "tags": "功夫喜剧 粤语原声 螳螂拳 市井",
        "url": "./movie-1485.html",
        "cover": "./135.jpg"
    },
    {
        "title": "情人们",
        "region": "法国/日本",
        "type": "电影",
        "year": "2026",
        "genre": "爱情,奇幻",
        "tags": "哲学 平行时空 文艺 宿命",
        "url": "./movie-1486.html",
        "cover": "./136.jpg"
    },
    {
        "title": "在西伯利亚森林中",
        "region": "法国/俄罗斯",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/冒险",
        "tags": "隐居 极寒求生 自我放逐",
        "url": "./movie-1487.html",
        "cover": "./137.jpg"
    },
    {
        "title": "征空伟史",
        "region": "美国",
        "type": "剧集",
        "year": "2020",
        "genre": "剧情,历史,传记",
        "tags": "太空竞赛 宇航员 真实事件改编",
        "url": "./movie-1488.html",
        "cover": "./138.jpg"
    },
    {
        "title": "那些迷人的往事",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,家庭",
        "tags": "怀旧 亲情 往事 知青 和解",
        "url": "./movie-1489.html",
        "cover": "./139.jpg"
    },
    {
        "title": "没有鳞片的文森特",
        "region": "欧洲",
        "type": "动画短片",
        "year": "2022",
        "genre": "奇幻、成长、寓言",
        "tags": "身份认同 校园霸凌 缺陷美学 自我接纳",
        "url": "./movie-1490.html",
        "cover": "./140.jpg"
    },
    {
        "title": "童党万岁",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,青春",
        "tags": "帮派 青少年 乡愁 成长",
        "url": "./movie-1491.html",
        "cover": "./141.jpg"
    },
    {
        "title": "没有空气的时间",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作科幻",
        "tags": "太空灾难 缺氧 极限逃生 密闭空间 母性",
        "url": "./movie-1492.html",
        "cover": "./142.jpg"
    },
    {
        "title": "逃亡",
        "region": "瑞典/丹麦",
        "type": "电影",
        "year": "2025",
        "genre": "动画,纪录片,剧情",
        "tags": "阿富汗难民 LGBTQ+ 身份认同 手绘动画 真实事件改编",
        "url": "./movie-1493.html",
        "cover": "./143.jpg"
    },
    {
        "title": "黑袍纠察队第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "动作,科幻,黑色幽默",
        "tags": "反超级英雄 血腥 政治讽刺 祖国人",
        "url": "./movie-1494.html",
        "cover": "./144.jpg"
    },
    {
        "title": "月夜屠夫",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚,犯罪,悬疑",
        "tags": "连环杀手 雨夜 心理战 重口味",
        "url": "./movie-1495.html",
        "cover": "./145.jpg"
    },
    {
        "title": "牡蛎公主",
        "region": "法国",
        "type": "电影",
        "year": "2022",
        "genre": "奇幻,文艺,女性",
        "tags": "法国电影 海边小镇 女性成长 身体意象",
        "url": "./movie-1496.html",
        "cover": "./146.jpg"
    },
    {
        "title": "夺宝奇兵:圣战奇兵",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "冒险/动作",
        "tags": "圣杯 纳粹 考古 父子",
        "url": "./movie-1497.html",
        "cover": "./147.jpg"
    },
    {
        "title": "永不消逝的电波",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "剧情,历史,悬疑",
        "tags": "谍战 黑白转彩色 革命 信仰",
        "url": "./movie-1498.html",
        "cover": "./148.jpg"
    },
    {
        "title": "海的盖子",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/治愈",
        "tags": "海边 料理 慢生活 成长",
        "url": "./movie-1499.html",
        "cover": "./149.jpg"
    },
    {
        "title": "太空吸血鬼",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻,恐怖,惊悚",
        "tags": "太空站 变异 生存",
        "url": "./movie-1500.html",
        "cover": "./150.jpg"
    },
    {
        "title": "快乐妓女去好莱坞",
        "region": "意大利/美国",
        "type": "电影",
        "year": "1977",
        "genre": "喜剧/情色/剧情",
        "tags": "讽刺 性解放 娱乐圈黑幕 公路电影 七十年代",
        "url": "./movie-1501.html",
        "cover": "./1.jpg"
    },
    {
        "title": "星际大战假日特别节目",
        "region": "美国",
        "type": "电影/电视特别篇",
        "year": "2026",
        "genre": "科幻/喜剧/音乐",
        "tags": "恶搞 星战粉丝向 动画与真人结合 圣诞节",
        "url": "./movie-1502.html",
        "cover": "./2.jpg"
    },
    {
        "title": "外婆的重托",
        "region": "中国内地",
        "type": "电影",
        "year": "2021",
        "genre": "剧情家庭",
        "tags": "公路 祖孙情 寻亲 温情",
        "url": "./movie-1503.html",
        "cover": "./3.jpg"
    },
    {
        "title": "三小一家人",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2023",
        "genre": "家庭喜剧",
        "tags": "三兄弟 创业 乌龙事件 亲情治愈",
        "url": "./movie-1504.html",
        "cover": "./4.jpg"
    },
    {
        "title": "烈日狂风",
        "region": "澳大利亚",
        "type": "电影",
        "year": "2025",
        "genre": "冒险,惊悚,西部",
        "tags": "沙漠 求生 复仇 狼群",
        "url": "./movie-1505.html",
        "cover": "./5.jpg"
    },
    {
        "title": "年轻的阿罕默德",
        "region": "比利时/法国",
        "type": "电影",
        "year": "2019",
        "genre": "剧情",
        "tags": "宗教极端主义 青少年 现实主义 达内兄弟",
        "url": "./movie-1506.html",
        "cover": "./6.jpg"
    },
    {
        "title": "黑暗时代",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "历史、剧情、惊悚",
        "tags": "中世纪 权谋 瘟疫 信仰",
        "url": "./movie-1507.html",
        "cover": "./7.jpg"
    },
    {
        "title": "秘鲁大冒险",
        "region": "西班牙",
        "type": "电影",
        "year": "2012",
        "genre": "动画,喜剧,冒险",
        "tags": "西班牙动画 考古 爆笑 寻宝",
        "url": "./movie-1508.html",
        "cover": "./8.jpg"
    },
    {
        "title": "达沙拉塔姆",
        "region": "印度",
        "type": "电影",
        "year": "2024",
        "genre": "史诗/动作",
        "tags": "古印度战争 种姓反抗 视觉奇观",
        "url": "./movie-1509.html",
        "cover": "./9.jpg"
    },
    {
        "title": "不死废人",
        "region": "中国香港",
        "type": "电影",
        "year": "2026",
        "genre": "动作,科幻",
        "tags": "再生 杀手 阴谋",
        "url": "./movie-1510.html",
        "cover": "./10.jpg"
    },
    {
        "title": "美式晚宴",
        "region": "美国",
        "type": "电影",
        "year": "2017",
        "genre": "剧情/悬疑/惊悚",
        "tags": "家庭晚宴 黑镜式 科技伦理 全员秘密 密室",
        "url": "./movie-1511.html",
        "cover": "./11.jpg"
    },
    {
        "title": "僧侣和枪",
        "region": "不丹",
        "type": "电影",
        "year": "2021",
        "genre": "剧情,喜剧",
        "tags": "不丹电影 文化冲突 幸福指数",
        "url": "./movie-1512.html",
        "cover": "./12.jpg"
    },
    {
        "title": "民心难违",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2027",
        "genre": "现实,民生",
        "tags": "基层干部 乡村振兴 温情",
        "url": "./movie-1513.html",
        "cover": "./13.jpg"
    },
    {
        "title": "沙漠中的少年",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情",
        "tags": "公路 成长 亲情",
        "url": "./movie-1514.html",
        "cover": "./14.jpg"
    },
    {
        "title": "义勇义勇",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "剧情/历史/战争",
        "tags": "抗战 东北 草根英雄 群像",
        "url": "./movie-1515.html",
        "cover": "./15.jpg"
    },
    {
        "title": "貌合神离",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑/家庭/心理",
        "tags": "婚姻惊悚 双面人生 密室推理 全员恶人",
        "url": "./movie-1516.html",
        "cover": "./16.jpg"
    },
    {
        "title": "海紫",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情,奇幻",
        "tags": "色盲 画家 奇遇",
        "url": "./movie-1517.html",
        "cover": "./17.jpg"
    },
    {
        "title": "最美的相遇",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "爱情/剧情/家庭",
        "tags": "失智症 老年爱情 重逢 遗忘与铭记 台式温情",
        "url": "./movie-1518.html",
        "cover": "./18.jpg"
    },
    {
        "title": "太平间闹鬼事件",
        "region": "中国",
        "type": "网络电影",
        "year": "2024",
        "genre": "恐怖/悬疑/惊悚",
        "tags": "中式民俗 停尸房 还魂 骗局",
        "url": "./movie-1519.html",
        "cover": "./19.jpg"
    },
    {
        "title": "病毒2018",
        "region": "西班牙",
        "type": "电影",
        "year": "2024",
        "genre": "科幻/灾难",
        "tags": "后末日 免疫者 社会实验 生存",
        "url": "./movie-1520.html",
        "cover": "./20.jpg"
    },
    {
        "title": "风尘艳侣",
        "region": "中国香港",
        "type": "电影",
        "year": "1995",
        "genre": "爱情,剧情,犯罪",
        "tags": "夜总会 错爱 黑帮 宿命",
        "url": "./movie-1521.html",
        "cover": "./21.jpg"
    },
    {
        "title": "保持缄默",
        "region": "英国",
        "type": "电影",
        "year": "2005",
        "genre": "喜剧/犯罪/黑色幽默",
        "tags": "连环杀手管家 乡村 神反转",
        "url": "./movie-1522.html",
        "cover": "./22.jpg"
    },
    {
        "title": "空房间里的妻子",
        "region": "西班牙",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/悬疑",
        "tags": "密室 精神控制 反转",
        "url": "./movie-1523.html",
        "cover": "./23.jpg"
    },
    {
        "title": "艳后春情",
        "region": "法国/意大利",
        "type": "电影",
        "year": "2024",
        "genre": "历史/爱情/剧情",
        "tags": "古埃及 权力游戏 禁忌之恋",
        "url": "./movie-1524.html",
        "cover": "./24.jpg"
    },
    {
        "title": "咖啡之恋",
        "region": "中国台湾",
        "type": "电影",
        "year": "2019",
        "genre": "爱情/剧情",
        "tags": "咖啡馆 味觉记忆 治愈系",
        "url": "./movie-1525.html",
        "cover": "./25.jpg"
    },
    {
        "title": "人中之龙 ~序章~",
        "region": "日本",
        "type": "电影/剧集",
        "year": "2007",
        "genre": "动作/犯罪",
        "tags": "极道 改编游戏 热血 兄弟情",
        "url": "./movie-1526.html",
        "cover": "./26.jpg"
    },
    {
        "title": "我是冒险王2011",
        "region": "中国大陆",
        "type": "电影",
        "year": "2011",
        "genre": "冒险",
        "tags": "探险 伪纪录片 密室寻宝",
        "url": "./movie-1527.html",
        "cover": "./27.jpg"
    },
    {
        "title": "九月的某四天",
        "region": "巴西",
        "type": "电影",
        "year": "2021",
        "genre": "历史,惊悚",
        "tags": "政治绑架 真实事件 理想主义",
        "url": "./movie-1528.html",
        "cover": "./28.jpg"
    },
    {
        "title": "我的丈夫工作无能",
        "region": "日本",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情/家庭",
        "tags": "社畜反转 治愈 废柴逆袭 婚姻关系",
        "url": "./movie-1529.html",
        "cover": "./29.jpg"
    },
    {
        "title": "土耳其射击",
        "region": "土耳其/美国",
        "type": "电影",
        "year": "2022",
        "genre": "动作/犯罪/运动",
        "tags": "枪战 竞技 复仇 异域风情",
        "url": "./movie-1530.html",
        "cover": "./30.jpg"
    },
    {
        "title": "妙探肥羊",
        "region": "中国大陆",
        "type": "网剧",
        "year": "2023",
        "genre": "喜剧/悬疑",
        "tags": "农村 探案 反转 方言",
        "url": "./movie-1531.html",
        "cover": "./31.jpg"
    },
    {
        "title": "最佳电影",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,剧情",
        "tags": "元电影 荒诞 理想主义",
        "url": "./movie-1532.html",
        "cover": "./32.jpg"
    },
    {
        "title": "美国列兵史密斯",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "战争",
        "tags": "反战 伊拉克战争 心理 纪实风 人性",
        "url": "./movie-1533.html",
        "cover": "./33.jpg"
    },
    {
        "title": "怪胎圣诞节",
        "region": "美国",
        "type": "电影",
        "year": "2019",
        "genre": "喜剧,奇幻",
        "tags": "圣诞 家庭 怪咖 荒诞",
        "url": "./movie-1534.html",
        "cover": "./34.jpg"
    },
    {
        "title": "待字闺中",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情,家庭,社会",
        "tags": "大龄未婚 三线城市 母女关系 相亲市场",
        "url": "./movie-1535.html",
        "cover": "./35.jpg"
    },
    {
        "title": "柏格曼岛",
        "region": "法国/瑞典",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/文艺/爱情",
        "tags": "迷影 导演与缪斯 创作焦虑 北欧冷感",
        "url": "./movie-1536.html",
        "cover": "./36.jpg"
    },
    {
        "title": "九天",
        "region": "中国香港",
        "type": "电影",
        "year": "2026",
        "genre": "动作,灾难",
        "tags": "反恐 倒计时 硬核",
        "url": "./movie-1537.html",
        "cover": "./37.jpg"
    },
    {
        "title": "冻肉2023",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖,惊悚,犯罪",
        "tags": "冷库 密闭空间 连环失踪 食人",
        "url": "./movie-1538.html",
        "cover": "./38.jpg"
    },
    {
        "title": "活佛济公",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "1994",
        "genre": "古装神话喜剧",
        "tags": "济公 讽刺 降妖 单元剧",
        "url": "./movie-1539.html",
        "cover": "./39.jpg"
    },
    {
        "title": "第二次呼吸",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,运动",
        "tags": "自由潜水 极限 父女 创伤 海洋",
        "url": "./movie-1540.html",
        "cover": "./40.jpg"
    },
    {
        "title": "借尸还魂",
        "region": "中国台湾/新加坡",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖/悬疑",
        "tags": "南洋民俗 换魂术 灵媒复仇",
        "url": "./movie-1541.html",
        "cover": "./41.jpg"
    },
    {
        "title": "人生恰恰恰",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/家庭",
        "tags": "老年学舞 退休生活 群像",
        "url": "./movie-1542.html",
        "cover": "./42.jpg"
    },
    {
        "title": "我聘请了职业杀手",
        "region": "英国",
        "type": "电影",
        "year": "2021",
        "genre": "黑色幽默/犯罪",
        "tags": "自杀 杀手 乌龙 便利店 误打误撞",
        "url": "./movie-1543.html",
        "cover": "./43.jpg"
    },
    {
        "title": "恋爱星求人粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2010",
        "genre": "喜剧,爱情,时装",
        "tags": "星座 职场 港剧 欢喜冤家 都市",
        "url": "./movie-1544.html",
        "cover": "./44.jpg"
    },
    {
        "title": "乡村之魂",
        "region": "伊朗",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,音乐",
        "tags": "伊朗电影 传统音乐 乡村教师 文化抗争 诗意",
        "url": "./movie-1545.html",
        "cover": "./45.jpg"
    },
    {
        "title": "一起来看流星雨",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2009",
        "genre": "爱情",
        "tags": "偶像剧 校园 霸道男主 励志 雷人",
        "url": "./movie-1546.html",
        "cover": "./46.jpg"
    },
    {
        "title": "我和纽约超级皇后",
        "region": "美国",
        "type": "电影",
        "year": "2017",
        "genre": "喜剧/剧情",
        "tags": "移民故事 选美皇后 跨种族友谊 自我认同",
        "url": "./movie-1547.html",
        "cover": "./47.jpg"
    },
    {
        "title": "激情家族",
        "region": "意大利",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/喜剧/家庭",
        "tags": "家族企业 爱恨情仇 黑色幽默 遗产",
        "url": "./movie-1548.html",
        "cover": "./48.jpg"
    },
    {
        "title": "再见少女团",
        "region": "日本",
        "type": "剧集",
        "year": "2026",
        "genre": "剧情、音乐",
        "tags": "偶像 解散 成长 纪录片风格 友情",
        "url": "./movie-1549.html",
        "cover": "./49.jpg"
    },
    {
        "title": "执斧人",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/犯罪",
        "tags": "东北林区 斧头追杀 心理惊悚",
        "url": "./movie-1550.html",
        "cover": "./50.jpg"
    },
    {
        "title": "春宵苦短,少女前进吧!",
        "region": "日本",
        "type": "电影/动画",
        "year": "2017",
        "genre": "爱情/奇幻/喜剧",
        "tags": "浪漫 奇幻 青春 汤浅政明 狂欢",
        "url": "./movie-1551.html",
        "cover": "./51.jpg"
    },
    {
        "title": "说出你的故事",
        "region": "中国内地",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑、剧情、犯罪",
        "tags": "播客 犯罪 都市传说 网络暴力 反转",
        "url": "./movie-1552.html",
        "cover": "./52.jpg"
    },
    {
        "title": "狙魔女杰 第四季",
        "region": "加拿大",
        "type": "剧集",
        "year": "2025",
        "genre": "奇幻动作",
        "tags": "女巫 恶魔 公路片 血腥",
        "url": "./movie-1553.html",
        "cover": "./53.jpg"
    },
    {
        "title": "马里兰庄园",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/悬疑",
        "tags": "鬼屋 家族诅咒 女巫 地下室 时间循环",
        "url": "./movie-1554.html",
        "cover": "./54.jpg"
    },
    {
        "title": "古宅老友记第五季",
        "region": "英国",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧,奇幻",
        "tags": "鬼魂 合租 英式幽默 完结季",
        "url": "./movie-1555.html",
        "cover": "./55.jpg"
    },
    {
        "title": "我为你喝彩",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2023",
        "genre": "真人秀",
        "tags": "职业体验 致敬劳动者 明星素人",
        "url": "./movie-1556.html",
        "cover": "./56.jpg"
    },
    {
        "title": "乡间一日",
        "region": "法国",
        "type": "电影",
        "year": "1936",
        "genre": "剧情/爱情/短片",
        "tags": "黑白 诗意现实 印象派 让·雷诺阿 夏日",
        "url": "./movie-1557.html",
        "cover": "./57.jpg"
    },
    {
        "title": "暗数杀人",
        "region": "韩国",
        "type": "电影",
        "year": "2018",
        "genre": "犯罪,悬疑",
        "tags": "连环杀人 警匪对峙 真实改编",
        "url": "./movie-1558.html",
        "cover": "./58.jpg"
    },
    {
        "title": "天国之钥",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻",
        "tags": "末世宗教 人工智能 哲学拷问",
        "url": "./movie-1559.html",
        "cover": "./59.jpg"
    },
    {
        "title": "田教授家的28个保姆",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "喜剧/家庭/都市",
        "tags": "保姆 退休生活 代际冲突 上海 讽刺",
        "url": "./movie-1560.html",
        "cover": "./60.jpg"
    },
    {
        "title": "味之道",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情,美食",
        "tags": "料理 复仇 传承",
        "url": "./movie-1561.html",
        "cover": "./61.jpg"
    },
    {
        "title": "水与火的缠绵",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情,家庭",
        "tags": "中年爱情 再婚 水火不容 治愈",
        "url": "./movie-1562.html",
        "cover": "./62.jpg"
    },
    {
        "title": "功夫男仆",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "动作、喜剧、剧情",
        "tags": "港式功夫 主仆情 低调度日 高手在民间",
        "url": "./movie-1563.html",
        "cover": "./63.jpg"
    },
    {
        "title": "末日情缘",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情,科幻,剧情",
        "tags": "末日恋爱 太空移民 遗愿清单 公路剧 治愈",
        "url": "./movie-1564.html",
        "cover": "./64.jpg"
    },
    {
        "title": "芭比的完美圣诞",
        "region": "美国",
        "type": "电影",
        "year": "2011",
        "genre": "动画/家庭/歌舞",
        "tags": "童话 圣诞魔法 梦想 姐妹情",
        "url": "./movie-1565.html",
        "cover": "./65.jpg"
    },
    {
        "title": "就在这一夜",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "爱情/剧情",
        "tags": "一夜情 重逢 命运",
        "url": "./movie-1566.html",
        "cover": "./66.jpg"
    },
    {
        "title": "40",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,家庭,女性",
        "tags": "中年危机 女性 职场 生育 现实",
        "url": "./movie-1567.html",
        "cover": "./67.jpg"
    },
    {
        "title": "泰版我的女孩",
        "region": "泰国",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情,喜剧",
        "tags": "翻拍 谎言 假兄妹 泰式搞笑",
        "url": "./movie-1568.html",
        "cover": "./68.jpg"
    },
    {
        "title": "奔跑吧兄弟第四季",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2017",
        "genre": "真人秀",
        "tags": "户外竞技 明星 搞笑 撕名牌 跑男",
        "url": "./movie-1569.html",
        "cover": "./69.jpg"
    },
    {
        "title": "疯女日记",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/心理/悬疑",
        "tags": "精神病院 女性 历史改编 假病历 女权",
        "url": "./movie-1570.html",
        "cover": "./70.jpg"
    },
    {
        "title": "寻护者",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "动作,冒险,科幻",
        "tags": "外星 守护 基因 末世 孤儿",
        "url": "./movie-1571.html",
        "cover": "./71.jpg"
    },
    {
        "title": "群兽",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚,灾难,悬疑",
        "tags": "变异生物 密室逃生 人性考验 血腥 密闭空间",
        "url": "./movie-1572.html",
        "cover": "./72.jpg"
    },
    {
        "title": "我身记忆",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "剧情奇幻",
        "tags": "失忆 多重人格 身体交换 烧脑",
        "url": "./movie-1573.html",
        "cover": "./73.jpg"
    },
    {
        "title": "心动的瞬间",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2020",
        "genre": "爱情/奇幻",
        "tags": "触电体质 超能力恋爱 青春校园",
        "url": "./movie-1574.html",
        "cover": "./74.jpg"
    },
    {
        "title": "春满乾坤福满门",
        "region": "中国大陆/新加坡",
        "type": "剧集",
        "year": "2024",
        "genre": "家庭、年代、剧情",
        "tags": "南洋 家族 迁徙 团圆",
        "url": "./movie-1575.html",
        "cover": "./75.jpg"
    },
    {
        "title": "后裔",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻、动作、冒险",
        "tags": "末世 基因编辑 克隆人 等级社会",
        "url": "./movie-1576.html",
        "cover": "./76.jpg"
    },
    {
        "title": "时空使徒",
        "region": "日本",
        "type": "剧集",
        "year": "2027",
        "genre": "悬疑,奇幻",
        "tags": "穿越 师徒 悖论",
        "url": "./movie-1577.html",
        "cover": "./77.jpg"
    },
    {
        "title": "马利和我",
        "region": "美国",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/家庭/喜剧",
        "tags": "宠物 狗狗 成长 治愈",
        "url": "./movie-1578.html",
        "cover": "./78.jpg"
    },
    {
        "title": "少年同盟第二季",
        "region": "日本",
        "type": "动漫",
        "year": "2012",
        "genre": "日常,青春,治愈",
        "tags": "校园 友情 双胞胎 平凡日常 笑中带泪",
        "url": "./movie-1579.html",
        "cover": "./79.jpg"
    },
    {
        "title": "在巨人中间",
        "region": "法国/加拿大",
        "type": "剧集",
        "year": "2024",
        "genre": "科幻/悬疑/冒险",
        "tags": "缩小症 微观世界 生存挑战 政治寓言",
        "url": "./movie-1580.html",
        "cover": "./80.jpg"
    },
    {
        "title": "我们的时间就在当前",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,家庭",
        "tags": "临终关怀 时间哲学 日常奇迹 台系温情",
        "url": "./movie-1581.html",
        "cover": "./81.jpg"
    },
    {
        "title": "青蛙王国之冰冻大冒险",
        "region": "中国大陆",
        "type": "动画电影",
        "year": "2024",
        "genre": "动画/冒险/喜剧",
        "tags": "青蛙王国IP 冰河世纪 勇气成长",
        "url": "./movie-1582.html",
        "cover": "./82.jpg"
    },
    {
        "title": "2019天猫双十一狂欢夜",
        "region": "中国大陆",
        "type": "综艺/特别节目",
        "year": "2019",
        "genre": "晚会/直播",
        "tags": "购物节 明星 实时互动",
        "url": "./movie-1583.html",
        "cover": "./83.jpg"
    },
    {
        "title": "糖小姐探案集",
        "region": "中国大陆",
        "type": "网剧",
        "year": "2024",
        "genre": "悬疑/喜剧",
        "tags": "甜品师 单元剧 本格推理",
        "url": "./movie-1584.html",
        "cover": "./84.jpg"
    },
    {
        "title": "梦女孩",
        "region": "中国大陆",
        "type": "电影",
        "year": "2022",
        "genre": "奇幻/剧情",
        "tags": "梦境 成长 治愈 友谊",
        "url": "./movie-1585.html",
        "cover": "./85.jpg"
    },
    {
        "title": "也平凡",
        "region": "中国",
        "type": "剧集",
        "year": "2024",
        "genre": "刑侦,悬疑",
        "tags": "双面人生 连环命案 阶层隐喻",
        "url": "./movie-1586.html",
        "cover": "./86.jpg"
    },
    {
        "title": "母与女1960",
        "region": "中国香港",
        "type": "电影",
        "year": "1960",
        "genre": "剧情/家庭",
        "tags": "粤语片 女性 牺牲 伦理 黑白",
        "url": "./movie-1587.html",
        "cover": "./87.jpg"
    },
    {
        "title": "人生的钥匙",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情、奇幻、悬疑",
        "tags": "哲学寓言 多线叙事 身份交换 存在主义",
        "url": "./movie-1588.html",
        "cover": "./88.jpg"
    },
    {
        "title": "老而不",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,黑色幽默,社会",
        "tags": "老年 失业 江湖 尊严",
        "url": "./movie-1589.html",
        "cover": "./89.jpg"
    },
    {
        "title": "欲海群雌",
        "region": "中国香港",
        "type": "电影",
        "year": "1985",
        "genre": "剧情,情色,伦理",
        "tags": "风月场 女性群像 时代悲剧",
        "url": "./movie-1590.html",
        "cover": "./90.jpg"
    },
    {
        "title": "大明星醒目狗",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/家庭/冒险",
        "tags": "萌宠 娱乐圈 逆袭 爆笑 温情",
        "url": "./movie-1591.html",
        "cover": "./91.jpg"
    },
    {
        "title": "破·天·慌",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪/动作/悬疑",
        "tags": "双雄 炸街 猫鼠游戏 反转",
        "url": "./movie-1592.html",
        "cover": "./92.jpg"
    },
    {
        "title": "成圣的99种方法",
        "region": "中国大陆",
        "type": "动画",
        "year": "2023",
        "genre": "奇幻,搞笑",
        "tags": "修仙方法论 系统流 反内卷 轻松 脑洞",
        "url": "./movie-1593.html",
        "cover": "./93.jpg"
    },
    {
        "title": "马后炮",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,悬疑",
        "tags": "时空循环 预知 黑色幽默 小人物 彩票",
        "url": "./movie-1594.html",
        "cover": "./94.jpg"
    },
    {
        "title": "任人差遣",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/悬疑",
        "tags": "打工人 反转 职场黑幕 心理博弈",
        "url": "./movie-1595.html",
        "cover": "./95.jpg"
    },
    {
        "title": "猪皮天堂",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情、运动、黑色幽默",
        "tags": "美式足球 底层 梦想 荒诞",
        "url": "./movie-1596.html",
        "cover": "./96.jpg"
    },
    {
        "title": "孽迷宫",
        "region": "西班牙",
        "type": "剧集",
        "year": "2021",
        "genre": "悬疑惊悚",
        "tags": "多层反转 家庭秘密 乱伦 哥特",
        "url": "./movie-1597.html",
        "cover": "./97.jpg"
    },
    {
        "title": "拆毁国语",
        "region": "香港/中国大陆",
        "type": "电影",
        "year": "2027",
        "genre": "剧情,家庭,历史",
        "tags": "拆迁 家族史 香港回归 文化记忆 方言冲突",
        "url": "./movie-1598.html",
        "cover": "./98.jpg"
    },
    {
        "title": "红旗歌",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "歌舞/历史/剧情",
        "tags": "红色经典 幕后故事 艺术与信仰 燃情岁月",
        "url": "./movie-1599.html",
        "cover": "./99.jpg"
    },
    {
        "title": "我们的少年时代",
        "region": "中国",
        "type": "剧集",
        "year": "2024",
        "genre": "青春,校园,喜剧",
        "tags": "2000年代 怀旧 高考 友情",
        "url": "./movie-1600.html",
        "cover": "./100.jpg"
    },
    {
        "title": "碧玉惊魂夜",
        "region": "香港",
        "type": "电影",
        "year": "1988",
        "genre": "恐怖,惊悚",
        "tags": "古宅 附身 玉石 民俗恐怖",
        "url": "./movie-1601.html",
        "cover": "./101.jpg"
    },
    {
        "title": "精武五虎粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "1988",
        "genre": "动作,历史",
        "tags": "民国 功夫 爱国",
        "url": "./movie-1602.html",
        "cover": "./102.jpg"
    },
    {
        "title": "猛兽列车",
        "region": "中国大陆",
        "type": "电影",
        "year": "2016",
        "genre": "动作,悬疑,犯罪",
        "tags": "列车 封闭空间 密室逃脱 特工",
        "url": "./movie-1603.html",
        "cover": "./103.jpg"
    },
    {
        "title": "苗翠花粤语",
        "region": "中国香港",
        "type": "电视剧",
        "year": "1998",
        "genre": "喜剧",
        "tags": "武侠 女侠 搞笑",
        "url": "./movie-1604.html",
        "cover": "./104.jpg"
    },
    {
        "title": "顶楼第三季",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑/狗血/复仇/剧情",
        "tags": "上流社会 全员恶人 反转再反转 顶级狗血",
        "url": "./movie-1605.html",
        "cover": "./105.jpg"
    },
    {
        "title": "三个蓝月亮",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,奇幻",
        "tags": "精神病人 小镇谜团 多重人格 时间循环 疗愈",
        "url": "./movie-1606.html",
        "cover": "./106.jpg"
    },
    {
        "title": "身为人母",
        "region": "美国",
        "type": "电影",
        "year": "2006",
        "genre": "剧情",
        "tags": "婚姻困境 中年危机 欲望与责任 郊区生活",
        "url": "./movie-1607.html",
        "cover": "./107.jpg"
    },
    {
        "title": "凯西回家",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,家庭",
        "tags": "失踪儿童 寻亲 社会写实 催泪",
        "url": "./movie-1608.html",
        "cover": "./108.jpg"
    },
    {
        "title": "残值",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/悬疑/社会",
        "tags": "保险调查 骗保迷局 小城众生",
        "url": "./movie-1609.html",
        "cover": "./109.jpg"
    },
    {
        "title": "苏联巴士站",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/公路",
        "tags": "苏联美学 荒诞 迁徙",
        "url": "./movie-1610.html",
        "cover": "./110.jpg"
    },
    {
        "title": "窒友梅根",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,科幻",
        "tags": "玩偶 AI 杀人狂 闺蜜",
        "url": "./movie-1611.html",
        "cover": "./111.jpg"
    },
    {
        "title": "等待弥赛亚",
        "region": "美国",
        "type": "电视剧",
        "year": "2024",
        "genre": "悬疑/剧情",
        "tags": "邪教 末日 心理 群像 等待",
        "url": "./movie-1612.html",
        "cover": "./112.jpg"
    },
    {
        "title": "千万别松手",
        "region": "美国/英国",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚灾难",
        "tags": "高空 生死 救援 极限",
        "url": "./movie-1613.html",
        "cover": "./113.jpg"
    },
    {
        "title": "神秘的日本",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/惊悚",
        "tags": "都市传说 反转 遗产谜团",
        "url": "./movie-1614.html",
        "cover": "./114.jpg"
    },
    {
        "title": "摆高",
        "region": "中国大陆",
        "type": "电影",
        "year": "2018",
        "genre": "剧情,运动,励志",
        "tags": "跳高少年 农村体育 土法训练 金牌教练",
        "url": "./movie-1615.html",
        "cover": "./115.jpg"
    },
    {
        "title": "雪山奇迹",
        "region": "中国",
        "type": "电影",
        "year": "2025",
        "genre": "冒险/剧情/灾难",
        "tags": "雪山 生存 人性 救赎",
        "url": "./movie-1616.html",
        "cover": "./116.jpg"
    },
    {
        "title": "较量2",
        "region": "印度",
        "type": "电影",
        "year": "2021",
        "genre": "剧情,惊悚,犯罪",
        "tags": "悬疑 复仇 高智商 反转 续集",
        "url": "./movie-1617.html",
        "cover": "./117.jpg"
    },
    {
        "title": "神秘粉红",
        "region": "日本",
        "type": "电影/动画",
        "year": "2026",
        "genre": "奇幻/悬疑/少女",
        "tags": "颜色 失踪 心理",
        "url": "./movie-1618.html",
        "cover": "./118.jpg"
    },
    {
        "title": "怀特霍尔街上的长筒靴",
        "region": "英国",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑,惊悚,历史",
        "tags": "二战 军情五处 女间谍 双面人生",
        "url": "./movie-1619.html",
        "cover": "./119.jpg"
    },
    {
        "title": "让·多米尼克",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,传记,历史",
        "tags": "作家 疾病 抗争 眼动书写 文学",
        "url": "./movie-1620.html",
        "cover": "./120.jpg"
    },
    {
        "title": "人海沧桑",
        "region": "中国大陆",
        "type": "电影",
        "year": "1989",
        "genre": "剧情,历史",
        "tags": "民国 家族 史诗 命运",
        "url": "./movie-1621.html",
        "cover": "./121.jpg"
    },
    {
        "title": "博士之日",
        "region": "英国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情、传记、历史",
        "tags": "科学家 道德困境 二战 原子弹",
        "url": "./movie-1622.html",
        "cover": "./122.jpg"
    },
    {
        "title": "青岛君是坏心眼",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情喜剧/职场",
        "tags": "腹黑上司 办公室恋情 攻略反被攻略 甜虐交织",
        "url": "./movie-1623.html",
        "cover": "./123.jpg"
    },
    {
        "title": "幻影死神",
        "region": "日本",
        "type": "动画剧集",
        "year": "2020",
        "genre": "悬疑,奇幻",
        "tags": "死神 轮回 都市传说 心理惊悚",
        "url": "./movie-1624.html",
        "cover": "./124.jpg"
    },
    {
        "title": "私处",
        "region": "美国",
        "type": "电影",
        "year": "2005",
        "genre": "喜剧,剧情,青春",
        "tags": "青春期 身体焦虑 女性友谊 成长喜剧 校园",
        "url": "./movie-1625.html",
        "cover": "./125.jpg"
    },
    {
        "title": "筏子客",
        "region": "中国大陆",
        "type": "电影",
        "year": "1992",
        "genre": "剧情",
        "tags": "黄河 民俗 底层 命运",
        "url": "./movie-1626.html",
        "cover": "./126.jpg"
    },
    {
        "title": "一村之长之皆大欢喜",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "乡村喜剧",
        "tags": "村长 选举 乡村振兴 荒诞",
        "url": "./movie-1627.html",
        "cover": "./127.jpg"
    },
    {
        "title": "心跳漏一拍第三季",
        "region": "英国",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情/青春",
        "tags": "LGBTQ+ 校园 成长烦恼",
        "url": "./movie-1628.html",
        "cover": "./128.jpg"
    },
    {
        "title": "青春纪录",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "青春/职场",
        "tags": "模特行业 偶像转型 现实主义 亲情线 热血成长",
        "url": "./movie-1629.html",
        "cover": "./129.jpg"
    },
    {
        "title": "开国将帅授衔1955",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "历史/传记",
        "tags": "将帅 授衔 家国情怀",
        "url": "./movie-1630.html",
        "cover": "./130.jpg"
    },
    {
        "title": "性爱特务",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "情色/犯罪/动作/黑色电影",
        "tags": "特工 色诱 港产片 大尺度 悬疑",
        "url": "./movie-1631.html",
        "cover": "./131.jpg"
    },
    {
        "title": "冠军亚瑟",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "冒险,剧情,运动",
        "tags": "越野赛 人狗情 真实改编 励志 亚马逊",
        "url": "./movie-1632.html",
        "cover": "./132.jpg"
    },
    {
        "title": "烈火出击",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2022",
        "genre": "动作,灾难,职业",
        "tags": "消防员 救援 兄弟情 热血",
        "url": "./movie-1633.html",
        "cover": "./133.jpg"
    },
    {
        "title": "追爱四人行",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "喜剧/爱情/公路",
        "tags": "自驾游 兄弟情 意外邂逅 治愈",
        "url": "./movie-1634.html",
        "cover": "./134.jpg"
    },
    {
        "title": "倾城歌手",
        "region": "中国香港/中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "音乐/剧情/爱情",
        "tags": "粤语歌 失声 替唱 经纪人 追梦",
        "url": "./movie-1635.html",
        "cover": "./135.jpg"
    },
    {
        "title": "鲁邦三世:意大利游戏",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "动作,喜剧,犯罪",
        "tags": "怪盗 意大利 智斗 经典IP",
        "url": "./movie-1636.html",
        "cover": "./136.jpg"
    },
    {
        "title": "雾都孤儿2005",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/犯罪/悬疑",
        "tags": "翻拍 暗黑 伦敦 扒手 蒸汽朋克",
        "url": "./movie-1637.html",
        "cover": "./137.jpg"
    },
    {
        "title": "失忆的爱",
        "region": "韩国",
        "type": "剧集",
        "year": "2021",
        "genre": "爱情,悬疑",
        "tags": "失忆 契约婚姻 反转 催泪",
        "url": "./movie-1638.html",
        "cover": "./138.jpg"
    },
    {
        "title": "目击风暴",
        "region": "中国大陆",
        "type": "电影",
        "year": "2019",
        "genre": "悬疑犯罪",
        "tags": "台风 目击证人 心理阴影 连环案",
        "url": "./movie-1639.html",
        "cover": "./139.jpg"
    },
    {
        "title": "山魂霹雳",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/冒险",
        "tags": "地质勘探 山村 诅咒 连环失踪",
        "url": "./movie-1640.html",
        "cover": "./140.jpg"
    },
    {
        "title": "午睡的艺术",
        "region": "西班牙",
        "type": "电影",
        "year": "2020",
        "genre": "喜剧,剧情",
        "tags": "生活哲学 幽默 治愈 老年 慢生活",
        "url": "./movie-1641.html",
        "cover": "./141.jpg"
    },
    {
        "title": "媒人",
        "region": "韩国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/喜剧/爱情",
        "tags": "相亲 婚介所 催婚 中年爱情 现实主义",
        "url": "./movie-1642.html",
        "cover": "./142.jpg"
    },
    {
        "title": "鲁邦三世 义大利游戏",
        "region": "日本",
        "type": "动画剧集",
        "year": "2026",
        "genre": "喜剧,动作,犯罪",
        "tags": "怪盗 义大利 智斗",
        "url": "./movie-1643.html",
        "cover": "./143.jpg"
    },
    {
        "title": "最后一场演奏会",
        "region": "英国",
        "type": "电影",
        "year": "2012",
        "genre": "剧情/音乐",
        "tags": "古典音乐 师徒 绝症 荣耀",
        "url": "./movie-1644.html",
        "cover": "./144.jpg"
    },
    {
        "title": "何文秀传奇",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2007",
        "genre": "古装,悬疑,爱情",
        "tags": "明朝 冤案 复仇 越剧",
        "url": "./movie-1645.html",
        "cover": "./145.jpg"
    },
    {
        "title": "我的魔鬼朋友",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "奇幻/剧情/心理",
        "tags": "隐喻 心魔 童年创伤 幻想朋友",
        "url": "./movie-1646.html",
        "cover": "./146.jpg"
    },
    {
        "title": "皖美风味",
        "region": "中国大陆",
        "type": "纪录片",
        "year": "2023",
        "genre": "纪录片",
        "tags": "美食 安徽 人文",
        "url": "./movie-1647.html",
        "cover": "./147.jpg"
    },
    {
        "title": "狼人拜恩",
        "region": "德国",
        "type": "电视剧",
        "year": "2024",
        "genre": "恐怖/历史/奇幻",
        "tags": "狼人 中世纪 猎巫 诅咒 黑暗",
        "url": "./movie-1648.html",
        "cover": "./148.jpg"
    },
    {
        "title": "致命弯道5:血族",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "恐怖,动作",
        "tags": "血腥 变异 公路惊悚 吸血鬼 重口味",
        "url": "./movie-1649.html",
        "cover": "./149.jpg"
    },
    {
        "title": "性之道",
        "region": "意大利",
        "type": "电影",
        "year": "2024",
        "genre": "剧情、情色、伦理",
        "tags": "性治疗 婚姻危机 开放式关系 中产阶级",
        "url": "./movie-1650.html",
        "cover": "./150.jpg"
    },
    {
        "title": "风景",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2007",
        "genre": "家庭/伦理",
        "tags": "知青 返城 亲情 伤痕",
        "url": "./movie-1651.html",
        "cover": "./1.jpg"
    },
    {
        "title": "永远的第一名",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情/同性/青春",
        "tags": "校园 学霸 双向暗恋 清新 竞争",
        "url": "./movie-1652.html",
        "cover": "./2.jpg"
    },
    {
        "title": "与你共融",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/家庭/奇幻",
        "tags": "亲情催泪 奇幻现实 社会议题 治愈系",
        "url": "./movie-1653.html",
        "cover": "./3.jpg"
    },
    {
        "title": "一叶小舟",
        "region": "法国",
        "type": "电影",
        "year": "2018",
        "genre": "剧情",
        "tags": "难民 地中海 沉默 生存 群像",
        "url": "./movie-1654.html",
        "cover": "./4.jpg"
    },
    {
        "title": "生死桥",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,犯罪",
        "tags": "大桥塌陷 连环案件 小镇秘密 群像",
        "url": "./movie-1655.html",
        "cover": "./5.jpg"
    },
    {
        "title": "十字剑第二季",
        "region": "美国",
        "type": "电视剧",
        "year": "2021",
        "genre": "喜剧动画",
        "tags": "中世纪 皇室 讽刺 屎尿屁",
        "url": "./movie-1656.html",
        "cover": "./6.jpg"
    },
    {
        "title": "丧尸末日战",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "动作,恐怖,科幻",
        "tags": "丧尸变异 末日求生 硬核动作 军事科幻",
        "url": "./movie-1657.html",
        "cover": "./7.jpg"
    },
    {
        "title": "大赌场国语",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪/动作/悬疑",
        "tags": "赌场 卧底 复仇 国语配音 双雄",
        "url": "./movie-1658.html",
        "cover": "./8.jpg"
    },
    {
        "title": "袋鼠丝苗为两餐粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "1989",
        "genre": "喜剧/家庭/剧情",
        "tags": "怀旧 港剧 市井 奋斗 幽默",
        "url": "./movie-1659.html",
        "cover": "./9.jpg"
    },
    {
        "title": "凯洛的末日日常",
        "region": "英国",
        "type": "剧集",
        "year": "2023",
        "genre": "喜剧/剧情/科幻",
        "tags": "末日倒计时 日常重复 存在主义 黑色幽默 英国丧剧",
        "url": "./movie-1660.html",
        "cover": "./10.jpg"
    },
    {
        "title": "网购美食宅幸福",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "美食/治愈",
        "tags": "宅家 网购 独居 小众美食 单元剧",
        "url": "./movie-1661.html",
        "cover": "./11.jpg"
    },
    {
        "title": "捉鬼有限公司",
        "region": "中国香港",
        "type": "电影",
        "year": "1990",
        "genre": "喜剧,恐怖",
        "tags": "僵尸 职场 无厘头 捉鬼",
        "url": "./movie-1662.html",
        "cover": "./12.jpg"
    },
    {
        "title": "龙女",
        "region": "中国香港",
        "type": "电影",
        "year": "2021",
        "genre": "奇幻/古装/爱情",
        "tags": "神话 南海 鲛人 虐恋 特效",
        "url": "./movie-1663.html",
        "cover": "./13.jpg"
    },
    {
        "title": "理想的意大利情人",
        "region": "意大利",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,喜剧",
        "tags": "浪漫 异国风情 谎言 相遇",
        "url": "./movie-1664.html",
        "cover": "./14.jpg"
    },
    {
        "title": "弊家伙...玩大咗",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "黑色幽默/犯罪/喜剧",
        "tags": "港产片回归 小人物闯祸 荒诞绑架 乌龙犯罪 地道粤语",
        "url": "./movie-1665.html",
        "cover": "./15.jpg"
    },
    {
        "title": "冰封侠:时空行者",
        "region": "中国大陆/香港",
        "type": "电影",
        "year": "2018",
        "genre": "动作/科幻",
        "tags": "穿越 清朝 香港 雷剧 特效大片",
        "url": "./movie-1666.html",
        "cover": "./16.jpg"
    },
    {
        "title": "铁男1:金属兽",
        "region": "日本",
        "type": "电影",
        "year": "1989",
        "genre": "科幻恐怖",
        "tags": "身体恐怖 赛博朋克 cult 金属",
        "url": "./movie-1667.html",
        "cover": "./17.jpg"
    },
    {
        "title": "致命偷情",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚,悬疑,情色",
        "tags": "19禁 反转 蛇蝎美人 密室",
        "url": "./movie-1668.html",
        "cover": "./18.jpg"
    },
    {
        "title": "生命中的第一次",
        "region": "法国/比利时",
        "type": "电影",
        "year": "2015",
        "genre": "喜剧/爱情/青春",
        "tags": "成长 初体验 法式幽默 青春疼痛",
        "url": "./movie-1669.html",
        "cover": "./19.jpg"
    },
    {
        "title": "敌对证人",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑/犯罪/法庭",
        "tags": "律政 反转 心理战 密室 经典翻新",
        "url": "./movie-1670.html",
        "cover": "./20.jpg"
    },
    {
        "title": "追凶双雄",
        "region": "美国",
        "type": "TV Series",
        "year": "2025",
        "genre": "悬疑,动作",
        "tags": "双男主 亦敌亦友 连环杀手 西部 冷硬派",
        "url": "./movie-1671.html",
        "cover": "./21.jpg"
    },
    {
        "title": "情迷四月天",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/喜剧",
        "tags": "英式幽默 四月谎言 田园风光 中年浪漫",
        "url": "./movie-1672.html",
        "cover": "./22.jpg"
    },
    {
        "title": "刺猬背西瓜",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/家庭",
        "tags": "留守儿童 乡村 亲情 治愈",
        "url": "./movie-1673.html",
        "cover": "./23.jpg"
    },
    {
        "title": "开门之前,意外之后",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "惊悚/剧情/悬疑",
        "tags": "密闭空间 道德困境 罗生门式叙事 社会派",
        "url": "./movie-1674.html",
        "cover": "./24.jpg"
    },
    {
        "title": "左轮百合",
        "region": "日本",
        "type": "电影",
        "year": "2018",
        "genre": "动作、犯罪、女同",
        "tags": "双女主 黑帮 枪战 百合 暴力美学",
        "url": "./movie-1675.html",
        "cover": "./25.jpg"
    },
    {
        "title": "游唱诗人",
        "region": "法国/意大利",
        "type": "电影",
        "year": "2024",
        "genre": "音乐/剧情",
        "tags": "流浪 诗歌 中世纪 自我救赎 竖琴",
        "url": "./movie-1676.html",
        "cover": "./26.jpg"
    },
    {
        "title": "穆戈尔·毛戈利",
        "region": "英国/美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,音乐",
        "tags": "说唱 身份认同 英籍巴基斯坦裔",
        "url": "./movie-1677.html",
        "cover": "./27.jpg"
    },
    {
        "title": "路上有狼",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,悬疑,公路",
        "tags": "长途司机 连环绑架 公路惊悚 父女情 反转",
        "url": "./movie-1678.html",
        "cover": "./28.jpg"
    },
    {
        "title": "鸟儿们的奇幻冒险",
        "region": "法国/比利时",
        "type": "动画电影",
        "year": "2023",
        "genre": "奇幻、冒险",
        "tags": "迁徙 勇气 自然奇迹 成长",
        "url": "./movie-1679.html",
        "cover": "./29.jpg"
    },
    {
        "title": "我曾是罗丽娜·波比特",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "真实犯罪剧情",
        "tags": "女性复仇 真实事件改编 庭审 社会议题",
        "url": "./movie-1680.html",
        "cover": "./30.jpg"
    },
    {
        "title": "狼人游戏2025",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,恐怖,喜剧",
        "tags": "狼人 派对游戏 山庄 暴风雪山庄",
        "url": "./movie-1681.html",
        "cover": "./31.jpg"
    },
    {
        "title": "索兰与路德维格的圣诞节",
        "region": "挪威",
        "type": "电影",
        "year": "2013",
        "genre": "动画/家庭/奇幻",
        "tags": "北欧童话 圣诞节 友谊",
        "url": "./movie-1682.html",
        "cover": "./32.jpg"
    },
    {
        "title": "迪恩·斯潘雷",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,剧情",
        "tags": "老年 怀旧 友谊 演讲",
        "url": "./movie-1683.html",
        "cover": "./33.jpg"
    },
    {
        "title": "壹号皇庭粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2025",
        "genre": "律政,剧情",
        "tags": "粤语原声 法庭 职业",
        "url": "./movie-1684.html",
        "cover": "./34.jpg"
    },
    {
        "title": "魔戒:洛汗人之战",
        "region": "美国/新西兰",
        "type": "动画电影",
        "year": "2024",
        "genre": "动画/奇幻/战争",
        "tags": "中土世界 洛汗 史诗",
        "url": "./movie-1685.html",
        "cover": "./35.jpg"
    },
    {
        "title": "开心汉堡店第三季",
        "region": "美国",
        "type": "电视剧",
        "year": "2024",
        "genre": "喜剧/动画",
        "tags": "家庭经营 小镇日常 脱线幽默",
        "url": "./movie-1686.html",
        "cover": "./36.jpg"
    },
    {
        "title": "名门二淑女之心之万生祈恋",
        "region": "泰国",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情,年代,剧情",
        "tags": "豪门恩怨 前世今生 虐恋",
        "url": "./movie-1687.html",
        "cover": "./37.jpg"
    },
    {
        "title": "闻香寻爱",
        "region": "台湾",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,奇幻,剧情",
        "tags": "嗅觉 气味 灵魂伴侣 治愈",
        "url": "./movie-1688.html",
        "cover": "./38.jpg"
    },
    {
        "title": "丑女之战",
        "region": "印度",
        "type": "电影",
        "year": "2026",
        "genre": "剧情,喜剧,社会",
        "tags": "外貌焦虑 女性觉醒 逆向审美 网络暴力",
        "url": "./movie-1689.html",
        "cover": "./39.jpg"
    },
    {
        "title": "我是唱作人第一季",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2024",
        "genre": "音乐,真人秀",
        "tags": "原创 比赛 唱作人 淘汰 幕后",
        "url": "./movie-1690.html",
        "cover": "./40.jpg"
    },
    {
        "title": "唤爱",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情、家庭、奇幻",
        "tags": "亲情 穿越 留守儿童 声音",
        "url": "./movie-1691.html",
        "cover": "./41.jpg"
    },
    {
        "title": "你看起来很好吃",
        "region": "日本",
        "type": "动画电影",
        "year": "2026",
        "genre": "奇幻/冒险/治愈",
        "tags": "美食世界 拟人食材 公路片",
        "url": "./movie-1692.html",
        "cover": "./42.jpg"
    },
    {
        "title": "缘来想见妳",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情,奇幻,喜剧",
        "tags": "双向奔赴 都市童话 错位相遇",
        "url": "./movie-1693.html",
        "cover": "./43.jpg"
    },
    {
        "title": "关键协议",
        "region": "美国/英国",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪/悬疑",
        "tags": "密室 谈判 心理战 罗生门",
        "url": "./movie-1694.html",
        "cover": "./44.jpg"
    },
    {
        "title": "不要看地下室",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,悬疑,惊悚",
        "tags": "密室恐怖 社会隐喻 反转结局 公寓怪谈",
        "url": "./movie-1695.html",
        "cover": "./45.jpg"
    },
    {
        "title": "阿莱塔街388号",
        "region": "西班牙",
        "type": "电影",
        "year": "2022",
        "genre": "恐怖,悬疑",
        "tags": "凶宅 邪教 遗产 录像带 密室逃脱",
        "url": "./movie-1696.html",
        "cover": "./46.jpg"
    },
    {
        "title": "前进或死亡",
        "region": "德国",
        "type": "电影",
        "year": "2025",
        "genre": "战争,剧情,历史",
        "tags": "一战 战壕 军事法庭 荒诞",
        "url": "./movie-1697.html",
        "cover": "./47.jpg"
    },
    {
        "title": "雷射鹰",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "动作,科幻",
        "tags": "赛博朋克 机械鹰 反乌托邦 生化改造",
        "url": "./movie-1698.html",
        "cover": "./48.jpg"
    },
    {
        "title": "欣德大厅",
        "region": "英国",
        "type": "剧集",
        "year": "2024",
        "genre": "悬疑/古装",
        "tags": "庄园 家族秘密 哥特 双时间线 英伦",
        "url": "./movie-1699.html",
        "cover": "./49.jpg"
    },
    {
        "title": "世人",
        "region": "中国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,家庭",
        "tags": "养老 代际 城市变迁 群像",
        "url": "./movie-1700.html",
        "cover": "./50.jpg"
    },
    {
        "title": "取消关注",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖/惊悚",
        "tags": "暗网 直播 诅咒 社交恐怖 病毒式传播",
        "url": "./movie-1701.html",
        "cover": "./51.jpg"
    },
    {
        "title": "红色翅膀:火烈鸟故事",
        "region": "法国,坦桑尼亚",
        "type": "电影",
        "year": "2021",
        "genre": "纪录片,自然,冒险",
        "tags": "火烈鸟 盐碱地 迁徙 生命奇迹 视觉史诗",
        "url": "./movie-1702.html",
        "cover": "./52.jpg"
    },
    {
        "title": "第5届中国电影华表奖",
        "region": "中国",
        "type": "电视节目/颁奖礼",
        "year": "2002",
        "genre": "纪录片/综艺",
        "tags": "颁奖典礼 荣誉时刻 主旋律 群星汇聚 行业盛事",
        "url": "./movie-1703.html",
        "cover": "./53.jpg"
    },
    {
        "title": "跳水男孩",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/运动",
        "tags": "青春 励志 友情 成长 竞技",
        "url": "./movie-1704.html",
        "cover": "./54.jpg"
    },
    {
        "title": "异形:圣地",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻,恐怖",
        "tags": "异形 宗教 太空哥特 身体恐怖",
        "url": "./movie-1705.html",
        "cover": "./55.jpg"
    },
    {
        "title": "记忆2021",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,悬疑,爱情",
        "tags": "记忆删除 近未来 软科幻 失忆",
        "url": "./movie-1706.html",
        "cover": "./56.jpg"
    },
    {
        "title": "不良行为第一季",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/犯罪",
        "tags": "少年犯 感化院 黑暗青春 群像剧",
        "url": "./movie-1707.html",
        "cover": "./57.jpg"
    },
    {
        "title": "罗曼蒂克消亡史",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情",
        "tags": "爱情 年代 命运 史诗",
        "url": "./movie-1708.html",
        "cover": "./58.jpg"
    },
    {
        "title": "长脚女佣",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,悬疑,奇幻",
        "tags": "社会隐喻 阶级 身体恐怖 温情",
        "url": "./movie-1709.html",
        "cover": "./59.jpg"
    },
    {
        "title": "夫妻成长日记3:爱情陷阱",
        "region": "日本",
        "type": "电影",
        "year": "2018",
        "genre": "爱情,剧情",
        "tags": "婚姻危机 出轨 日式伦理 成人向",
        "url": "./movie-1710.html",
        "cover": "./60.jpg"
    },
    {
        "title": "遗忘空间",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻",
        "tags": "记忆 悬疑 惊悚",
        "url": "./movie-1711.html",
        "cover": "./61.jpg"
    },
    {
        "title": "求助未来岳母",
        "region": "印度",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/家庭",
        "tags": "穿越 婆媳关系 网恋 爆笑",
        "url": "./movie-1712.html",
        "cover": "./62.jpg"
    },
    {
        "title": "月之心",
        "region": "韩国",
        "type": "电视剧",
        "year": "2024",
        "genre": "爱情/奇幻",
        "tags": "月亮 轮回 契约恋爱 古装现代 唯美",
        "url": "./movie-1713.html",
        "cover": "./63.jpg"
    },
    {
        "title": "幽冥花开",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2024",
        "genre": "奇幻/悬疑/爱情",
        "tags": "冥婚 百合 民俗恐怖",
        "url": "./movie-1714.html",
        "cover": "./64.jpg"
    },
    {
        "title": "痴男淑女",
        "region": "美国",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧/爱情",
        "tags": "约会软件 错位爱情 群像 城市男女",
        "url": "./movie-1715.html",
        "cover": "./65.jpg"
    },
    {
        "title": "狂姝末路",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,动作,惊悚",
        "tags": "女性 复仇 公路 暴力美学 绝境求生",
        "url": "./movie-1716.html",
        "cover": "./66.jpg"
    },
    {
        "title": "心灵家园",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2028",
        "genre": "都市/家庭/心理",
        "tags": "原生家庭 心理咨询 群像剧 现实主义",
        "url": "./movie-1717.html",
        "cover": "./67.jpg"
    },
    {
        "title": "理想的义大利情人",
        "region": "意大利/法国",
        "type": "电影",
        "year": "2024",
        "genre": "爱情/喜剧",
        "tags": "异国恋 文化差异 浪漫 疗伤",
        "url": "./movie-1718.html",
        "cover": "./68.jpg"
    },
    {
        "title": "大街上的商店",
        "region": "捷克斯洛伐克",
        "type": "电影",
        "year": "1965",
        "genre": "剧情/战争/人性",
        "tags": "二战 犹太人 黑白 人性 经典",
        "url": "./movie-1719.html",
        "cover": "./69.jpg"
    },
    {
        "title": "菲利普:无冕之王",
        "region": "英国",
        "type": "剧集",
        "year": "2025",
        "genre": "传记/剧情",
        "tags": "菲利普亲王 王室 女王 历史 婚姻",
        "url": "./movie-1720.html",
        "cover": "./70.jpg"
    },
    {
        "title": "魔女2025",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,动作,惊悚",
        "tags": "超能力 女性英雄 实验室 暴力美学",
        "url": "./movie-1721.html",
        "cover": "./71.jpg"
    },
    {
        "title": "藏历一年",
        "region": "中国大陆",
        "type": "纪录片",
        "year": "2026",
        "genre": "纪录片/人文/宗教",
        "tags": "西藏 转山 信仰 四季",
        "url": "./movie-1722.html",
        "cover": "./72.jpg"
    },
    {
        "title": "惊天大逃亡",
        "region": "香港",
        "type": "电影",
        "year": "1998",
        "genre": "动作,犯罪,剧情",
        "tags": "偷渡 金三角 杀手 绝境求生 兄弟",
        "url": "./movie-1723.html",
        "cover": "./73.jpg"
    },
    {
        "title": "午夜巴塞罗那",
        "region": "西班牙,美国",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,剧情,悬疑",
        "tags": "多角恋 高迪建筑 悬疑反转 女性视角 欧洲文艺",
        "url": "./movie-1724.html",
        "cover": "./74.jpg"
    },
    {
        "title": "除恶使者",
        "region": "中国香港",
        "type": "电影",
        "year": "2007",
        "genre": "动作,犯罪,警匪",
        "tags": "私刑 地下执法 连环杀手 黑帮 复仇",
        "url": "./movie-1725.html",
        "cover": "./75.jpg"
    },
    {
        "title": "湘音湘韵",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,音乐",
        "tags": "方言 花鼓戏 传承 乡土",
        "url": "./movie-1726.html",
        "cover": "./76.jpg"
    },
    {
        "title": "嗨!营业中第二季",
        "region": "中国台湾",
        "type": "综艺",
        "year": "2023",
        "genre": "真人秀",
        "tags": "明星经营 户外烹饪 团队矛盾 创业",
        "url": "./movie-1727.html",
        "cover": "./77.jpg"
    },
    {
        "title": "舍己救人",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "灾难、动作",
        "tags": "消防员 真实事件改编 隧道坍塌 极限救援 父子情",
        "url": "./movie-1728.html",
        "cover": "./78.jpg"
    },
    {
        "title": "悲惨世界",
        "region": "英国",
        "type": "剧集",
        "year": "2024",
        "genre": "历史,剧情",
        "tags": "名著改编 革命 人性 史诗",
        "url": "./movie-1729.html",
        "cover": "./79.jpg"
    },
    {
        "title": "留神",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/犯罪",
        "tags": "心理博弈 诈骗 老年诈骗 反杀 高智商",
        "url": "./movie-1730.html",
        "cover": "./80.jpg"
    },
    {
        "title": "真情不眠",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2024",
        "genre": "家庭/剧情",
        "tags": "失眠 家庭 和解 深夜",
        "url": "./movie-1731.html",
        "cover": "./81.jpg"
    },
    {
        "title": "神圣的偶像",
        "region": "韩国",
        "type": "电视剧",
        "year": "2024",
        "genre": "奇幻/喜剧",
        "tags": "穿越 爱豆 神父",
        "url": "./movie-1732.html",
        "cover": "./82.jpg"
    },
    {
        "title": "真·女立喰师列伝",
        "region": "日本",
        "type": "剧集",
        "year": "2018",
        "genre": "剧情,美食",
        "tags": "站食 孤狼 女性 复仇",
        "url": "./movie-1733.html",
        "cover": "./83.jpg"
    },
    {
        "title": "团战之夜",
        "region": "中国",
        "type": "电影/电竞",
        "year": "2025",
        "genre": "动作/剧情/体育",
        "tags": "电竞 MOBA 逆袭 兄弟情 最后一战",
        "url": "./movie-1734.html",
        "cover": "./84.jpg"
    },
    {
        "title": "抢劫恋爱",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧、爱情、犯罪",
        "tags": "银行劫案 谈判专家 人质 乌龙 双向奔赴",
        "url": "./movie-1735.html",
        "cover": "./85.jpg"
    },
    {
        "title": "莫负当年情",
        "region": "中国香港",
        "type": "电影",
        "year": "1994",
        "genre": "爱情/剧情",
        "tags": "怀旧 初恋 错过 时光倒流 中式美学",
        "url": "./movie-1736.html",
        "cover": "./86.jpg"
    },
    {
        "title": "丑小鸭天鹅",
        "region": "丹麦/瑞典",
        "type": "电影",
        "year": "2025",
        "genre": "剧情、家庭",
        "tags": "芭蕾 代际创伤 北欧冷调 自我认同 姐妹情",
        "url": "./movie-1737.html",
        "cover": "./87.jpg"
    },
    {
        "title": "网络凶铃",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "恐怖,悬疑,惊悚",
        "tags": "都市传说 暗网 直播 心理恐惧",
        "url": "./movie-1738.html",
        "cover": "./88.jpg"
    },
    {
        "title": "恋爱潜伏",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "浪漫喜剧、谍战",
        "tags": "间谍 假戏真做 同居 反差萌",
        "url": "./movie-1739.html",
        "cover": "./89.jpg"
    },
    {
        "title": "戏梦巴黎",
        "region": "法国/意大利",
        "type": "电影",
        "year": "2003",
        "genre": "剧情,情色,历史",
        "tags": "1968 五月风暴 电影迷 三角关系 禁忌",
        "url": "./movie-1740.html",
        "cover": "./90.jpg"
    },
    {
        "title": "十年不晚",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑犯罪",
        "tags": "复仇 伪装 卧底 反转",
        "url": "./movie-1741.html",
        "cover": "./91.jpg"
    },
    {
        "title": "去天上",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "科幻/冒险",
        "tags": "太空电梯 宇航员 牺牲 未来科技",
        "url": "./movie-1742.html",
        "cover": "./92.jpg"
    },
    {
        "title": "狂岛凶灵",
        "region": "泰国",
        "type": "电影",
        "year": "2017",
        "genre": "恐怖/冒险",
        "tags": "无人岛 幽灵船 降头 湿身",
        "url": "./movie-1743.html",
        "cover": "./93.jpg"
    },
    {
        "title": "无限逆境之末班地铁",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/惊悚",
        "tags": "循环 地铁 生存 时空扭曲",
        "url": "./movie-1744.html",
        "cover": "./94.jpg"
    },
    {
        "title": "雷霆壮志",
        "region": "美国",
        "type": "电影",
        "year": "1990",
        "genre": "动作,赛车",
        "tags": "赛车 复仇 兄弟情 高速",
        "url": "./movie-1745.html",
        "cover": "./95.jpg"
    },
    {
        "title": "河神",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "奇幻,悬疑,民俗",
        "tags": "黄河 河神传说 环保 奇幻探案 民俗文化",
        "url": "./movie-1746.html",
        "cover": "./96.jpg"
    },
    {
        "title": "修复体",
        "region": "德国/波兰",
        "type": "电影",
        "year": "2025",
        "genre": "科幻/惊悚/伦理",
        "tags": "克隆 记忆植入 替代 悬疑",
        "url": "./movie-1747.html",
        "cover": "./97.jpg"
    },
    {
        "title": "光荣的日子",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2018",
        "genre": "历史,剧情",
        "tags": "抗战 乡村教师 信仰",
        "url": "./movie-1748.html",
        "cover": "./98.jpg"
    },
    {
        "title": "侏罗纪公园国语",
        "region": "美国/中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "科幻/惊悚/冒险",
        "tags": "恐龙 克隆 主题公园 全中文配音",
        "url": "./movie-1749.html",
        "cover": "./99.jpg"
    },
    {
        "title": "春雷",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,历史,教育",
        "tags": "恢复高考 知青命运 时代转折 知识改变命运",
        "url": "./movie-1750.html",
        "cover": "./100.jpg"
    },
    {
        "title": "你是哪里人",
        "region": "中国台湾",
        "type": "电影",
        "year": "2025",
        "genre": "家庭剧情",
        "tags": "身份认同 返乡 家族秘密 公路片 温情",
        "url": "./movie-1751.html",
        "cover": "./101.jpg"
    },
    {
        "title": "地球生灵",
        "region": "英国",
        "type": "纪录片",
        "year": "2019",
        "genre": "自然,纪录",
        "tags": "动物 生态 唯美 生命",
        "url": "./movie-1752.html",
        "cover": "./102.jpg"
    },
    {
        "title": "走佬小棋王",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧/家庭",
        "tags": "象棋 街头智慧 留守儿童",
        "url": "./movie-1753.html",
        "cover": "./103.jpg"
    },
    {
        "title": "英雄联盟:双城之战第一季",
        "region": "美国,法国",
        "type": "剧集",
        "year": "2021",
        "genre": "动画,动作,科幻,冒险",
        "tags": "游戏改编 拳头游戏 蒸汽朋克 姐妹反目 社会矛盾",
        "url": "./movie-1754.html",
        "cover": "./104.jpg"
    },
    {
        "title": "芭比之特务小组",
        "region": "美国",
        "type": "动画电影",
        "year": "2022",
        "genre": "冒险,喜剧",
        "tags": "芭比 特工 女性 友情",
        "url": "./movie-1755.html",
        "cover": "./105.jpg"
    },
    {
        "title": "荡妇娜娜",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,女性,历史",
        "tags": "19世纪 性批判 同名改编 觉醒 妓女 政治黑幕 女权 传记改编",
        "url": "./movie-1756.html",
        "cover": "./106.jpg"
    },
    {
        "title": "该剧的电视电影版",
        "region": "中国大陆",
        "type": "电视电影",
        "year": "2013",
        "genre": "剧情/家庭",
        "tags": "幕后 衍生 老剧重拍 情感",
        "url": "./movie-1757.html",
        "cover": "./107.jpg"
    },
    {
        "title": "十分钟年华老去:大提琴篇",
        "region": "法国/英国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/艺术",
        "tags": "音乐 衰老 瞬间 无对白",
        "url": "./movie-1758.html",
        "cover": "./108.jpg"
    },
    {
        "title": "第一千金欧游记",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "喜剧,爱情,冒险",
        "tags": "总统女儿 公路 保镖 欧洲",
        "url": "./movie-1759.html",
        "cover": "./109.jpg"
    },
    {
        "title": "王老五天堂",
        "region": "中国大陆",
        "type": "网络剧",
        "year": "2024",
        "genre": "奇幻喜剧",
        "tags": "单身 虚拟世界 讽刺 爱情实验",
        "url": "./movie-1760.html",
        "cover": "./110.jpg"
    },
    {
        "title": "糊涂太空人",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/科幻",
        "tags": "太空喜剧 失忆 身份错位 NASA恶搞",
        "url": "./movie-1761.html",
        "cover": "./111.jpg"
    },
    {
        "title": "37次想你",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "爱情/悬疑",
        "tags": "记忆循环 都市恋爱 时间重置 催泪向",
        "url": "./movie-1762.html",
        "cover": "./112.jpg"
    },
    {
        "title": "血源",
        "region": "美国/加拿大",
        "type": "电视剧",
        "year": "2023",
        "genre": "恐怖/悬疑/科幻",
        "tags": "基因诅咒 家族秘密 克苏鲁元素 身体恐怖",
        "url": "./movie-1763.html",
        "cover": "./113.jpg"
    },
    {
        "title": "御前演出",
        "region": "中国",
        "type": "电影",
        "year": "2023",
        "genre": "古装、喜剧",
        "tags": "戏班 宫廷 乌龙",
        "url": "./movie-1764.html",
        "cover": "./114.jpg"
    },
    {
        "title": "生人活埋",
        "region": "西班牙",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/悬疑",
        "tags": "密闭空间 心理 反转 直播",
        "url": "./movie-1765.html",
        "cover": "./115.jpg"
    },
    {
        "title": "加萨战争下的孩童",
        "region": "巴勒斯坦/英国",
        "type": "纪录片",
        "year": "2025",
        "genre": "纪录片/战争",
        "tags": "战争 儿童视角 真实影像 和平 催泪",
        "url": "./movie-1766.html",
        "cover": "./116.jpg"
    },
    {
        "title": "1993空劫行动",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作/灾难/犯罪",
        "tags": "真实事件改编 反劫机 高空惊魂 孤胆英雄",
        "url": "./movie-1767.html",
        "cover": "./117.jpg"
    },
    {
        "title": "卡比利亚",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,文艺",
        "tags": "女性 生存 新浪潮遗韵",
        "url": "./movie-1768.html",
        "cover": "./118.jpg"
    },
    {
        "title": "她的摇滚滋味",
        "region": "中国",
        "type": "电影",
        "year": "2025",
        "genre": "音乐/剧情",
        "tags": "女性摇滚 聋哑 逆袭",
        "url": "./movie-1769.html",
        "cover": "./119.jpg"
    },
    {
        "title": "掘金已死:圣诞故事",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "黑色幽默/犯罪",
        "tags": "加密货币 圣诞背景 黑色童话 反套路",
        "url": "./movie-1770.html",
        "cover": "./120.jpg"
    },
    {
        "title": "夜梦传说之天狼使者",
        "region": "中国内地",
        "type": "网络电影",
        "year": "2017",
        "genre": "奇幻,动作",
        "tags": "梦境 穿越 守护者 都市异能 传说",
        "url": "./movie-1771.html",
        "cover": "./121.jpg"
    },
    {
        "title": "错点鸳鸯",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "古装,爱情,喜剧",
        "tags": "替嫁 先婚后爱 误会 江湖 甜宠",
        "url": "./movie-1772.html",
        "cover": "./122.jpg"
    },
    {
        "title": "天降厨神独宠我",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2027",
        "genre": "爱情,奇幻,喜剧",
        "tags": "甜宠 穿越 美食 爽文",
        "url": "./movie-1773.html",
        "cover": "./123.jpg"
    },
    {
        "title": "飞行大王",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,运动,励志",
        "tags": "滑翔翼 小镇青年 逆袭 父子矛盾 天空竞技",
        "url": "./movie-1774.html",
        "cover": "./124.jpg"
    },
    {
        "title": "拜金女孩",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情,喜剧",
        "tags": "契约恋爱 贫富差距 反转 女性",
        "url": "./movie-1775.html",
        "cover": "./125.jpg"
    },
    {
        "title": "加拉哈德爵士历险记",
        "region": "英国",
        "type": "迷你剧",
        "year": "2024",
        "genre": "冒险,历史",
        "tags": "亚瑟王传说 骑士精神 魔幻史诗 成长叙事 暗黑童话",
        "url": "./movie-1776.html",
        "cover": "./126.jpg"
    },
    {
        "title": "超级英雄必死",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作、科幻、惊悚",
        "tags": "反超级英雄 极限求生 地下竞技场 能力失效 血腥",
        "url": "./movie-1777.html",
        "cover": "./127.jpg"
    },
    {
        "title": "我在岛屿读书第二季",
        "region": "中国大陆",
        "type": "综艺",
        "year": "2024",
        "genre": "真人秀/文化",
        "tags": "读书 岛屿 作家 慢综艺 治愈",
        "url": "./movie-1778.html",
        "cover": "./128.jpg"
    },
    {
        "title": "串珠",
        "region": "日本",
        "type": "电影",
        "year": "2011",
        "genre": "剧情家庭",
        "tags": "海女 珍珠 母爱 传承 小镇",
        "url": "./movie-1779.html",
        "cover": "./129.jpg"
    },
    {
        "title": "瞭望塔惊魂",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖、惊悚",
        "tags": "孤岛 森林 监控 未知存在 心理压迫",
        "url": "./movie-1780.html",
        "cover": "./130.jpg"
    },
    {
        "title": "丝绸之路",
        "region": "中国大陆",
        "type": "剧集/纪录片",
        "year": "2025",
        "genre": "历史/冒险",
        "tags": "丝绸之路 考古 纪录片 文明",
        "url": "./movie-1781.html",
        "cover": "./131.jpg"
    },
    {
        "title": "精灵高中:周五夜惊吓夜",
        "region": "美国",
        "type": "电影/动画",
        "year": "2024",
        "genre": "动画,喜剧,奇幻",
        "tags": "怪物学校 校园舞会 跨种族友谊 青春歌舞 惊吓派对",
        "url": "./movie-1782.html",
        "cover": "./132.jpg"
    },
    {
        "title": "超能萌妹战江湖",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "喜剧/动作/奇幻",
        "tags": "异能 古装现代混搭 沙雕 女性武侠 反套路",
        "url": "./movie-1783.html",
        "cover": "./133.jpg"
    },
    {
        "title": "大醉侠",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "动作/武侠/喜剧",
        "tags": "醉拳 江湖恩怨 市井侠义 反套路",
        "url": "./movie-1784.html",
        "cover": "./134.jpg"
    },
    {
        "title": "张杰未你好吗跨年演唱会",
        "region": "中国大陆",
        "type": "综艺/演唱会",
        "year": "2023",
        "genre": "音乐/纪实",
        "tags": "演唱会电影 张杰 星素互动 幕后花絮",
        "url": "./movie-1785.html",
        "cover": "./135.jpg"
    },
    {
        "title": "雨色可可第一季",
        "region": "日本",
        "type": "动画剧集",
        "year": "2015",
        "genre": "日常/治愈",
        "tags": "咖啡店 泡面番 温馨日常 声优演绎 生活碎片",
        "url": "./movie-1786.html",
        "cover": "./136.jpg"
    },
    {
        "title": "艾米利亚的孩子",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/悬疑",
        "tags": "遗传诅咒 洋娃娃 精神病房 细思极恐",
        "url": "./movie-1787.html",
        "cover": "./137.jpg"
    },
    {
        "title": "黑色月光粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2027",
        "genre": "警匪,悬疑,犯罪",
        "tags": "卧底 黑帮 双面间谍 粤语原声",
        "url": "./movie-1788.html",
        "cover": "./138.jpg"
    },
    {
        "title": "妳俩没有明天",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,犯罪",
        "tags": "女同 公路片 黑色电影 逃亡 边缘人",
        "url": "./movie-1789.html",
        "cover": "./139.jpg"
    },
    {
        "title": "毒品网路",
        "region": "墨西哥/美国",
        "type": "电视剧",
        "year": "2026",
        "genre": "犯罪,悬疑,动作",
        "tags": "暗网 黑帮 卧底 科技犯罪 多线叙事",
        "url": "./movie-1790.html",
        "cover": "./140.jpg"
    },
    {
        "title": "初恋那一天所读的故事",
        "region": "日本",
        "type": "剧集",
        "year": "2019",
        "genre": "爱情/剧情",
        "tags": "师生恋 补习班 年下 文学告白 时间错位",
        "url": "./movie-1791.html",
        "cover": "./141.jpg"
    },
    {
        "title": "杀人偏差值70",
        "region": "日本",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,惊悚,校园",
        "tags": "高考 精英教育 心理战 密室 反杀",
        "url": "./movie-1792.html",
        "cover": "./142.jpg"
    },
    {
        "title": "绝密使命2021",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2021",
        "genre": "谍战/历史/剧情",
        "tags": "红色 交通线 真实改编 信仰",
        "url": "./movie-1793.html",
        "cover": "./143.jpg"
    },
    {
        "title": "梦想竞速",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "运动/励志/剧情",
        "tags": "赛车 平民车手 父亲欠债 逆袭",
        "url": "./movie-1794.html",
        "cover": "./144.jpg"
    },
    {
        "title": "亿万第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2017",
        "genre": "剧情/犯罪/商战",
        "tags": "对冲基金 检察官 猫鼠游戏 华尔街黑幕 高智商对决",
        "url": "./movie-1795.html",
        "cover": "./145.jpg"
    },
    {
        "title": "山谷两日",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑/西部/犯罪",
        "tags": "荒漠小镇 身份互换 全员恶人 非线性叙事",
        "url": "./movie-1796.html",
        "cover": "./146.jpg"
    },
    {
        "title": "救命解药",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/悬疑",
        "tags": "心理 密室 医疗恐怖 反转",
        "url": "./movie-1797.html",
        "cover": "./147.jpg"
    },
    {
        "title": "太空堡垒:大电影",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻/动画/战争",
        "tags": "机甲 星际移民 三代人 宇宙史诗",
        "url": "./movie-1798.html",
        "cover": "./148.jpg"
    },
    {
        "title": "天龙八部之六脉神剑粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "2023",
        "genre": "武侠古装",
        "tags": "金庸改编 段誉 武林纷争",
        "url": "./movie-1799.html",
        "cover": "./149.jpg"
    },
    {
        "title": "老婆大人俱乐部",
        "region": "中国香港",
        "type": "电视剧",
        "year": "2011",
        "genre": "喜剧/爱情",
        "tags": "港剧 婚姻 女性 职场 闺蜜",
        "url": "./movie-1800.html",
        "cover": "./150.jpg"
    },
    {
        "title": "快乐男孩卡莫拉",
        "region": "意大利",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/喜剧",
        "tags": "黑帮家庭 少年成长 荒诞 那不勒斯",
        "url": "./movie-1801.html",
        "cover": "./1.jpg"
    },
    {
        "title": "鬼猛腳",
        "region": "香港",
        "type": "电影",
        "year": "1995",
        "genre": "恐怖",
        "tags": "僵尸 功夫 喜剧 民俗",
        "url": "./movie-1802.html",
        "cover": "./2.jpg"
    },
    {
        "title": "茱丽叶国度",
        "region": "意大利",
        "type": "电影",
        "year": "2025",
        "genre": "爱情,奇幻,剧情",
        "tags": "写信文化 平行时空 维罗纳",
        "url": "./movie-1803.html",
        "cover": "./3.jpg"
    },
    {
        "title": "隔窗恋爱:飘洋过海",
        "region": "西班牙",
        "type": "电影",
        "year": "2025",
        "genre": "爱情/剧情",
        "tags": "异国恋 远距离 跨洋追爱",
        "url": "./movie-1804.html",
        "cover": "./4.jpg"
    },
    {
        "title": "人生大赛",
        "region": "韩国",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/竞技",
        "tags": "电竞 中年危机 热血逆袭",
        "url": "./movie-1805.html",
        "cover": "./5.jpg"
    },
    {
        "title": "菜鸟对天兵",
        "region": "中国香港",
        "type": "电影",
        "year": "1990",
        "genre": "喜剧/动作",
        "tags": "警匪 乌龙 无厘头 搭档 港味",
        "url": "./movie-1806.html",
        "cover": "./6.jpg"
    },
    {
        "title": "10 号公路",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "惊悚/犯罪/公路",
        "tags": "无人区 卡车司机 直播 网络迷因 杀人狂",
        "url": "./movie-1807.html",
        "cover": "./7.jpg"
    },
    {
        "title": "江湖豪客",
        "region": "中国台湾",
        "type": "剧集",
        "year": "2015",
        "genre": "黑帮动作",
        "tags": "兄弟情 江湖道义 80年代 复古美学",
        "url": "./movie-1808.html",
        "cover": "./8.jpg"
    },
    {
        "title": "闪光的乐队",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "剧情/音乐",
        "tags": "摇滚 追梦 时代变迁",
        "url": "./movie-1809.html",
        "cover": "./9.jpg"
    },
    {
        "title": "鸡蛋救援",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/冒险/家庭",
        "tags": "定格动画 荒诞 超市冒险 一人分饰多角",
        "url": "./movie-1810.html",
        "cover": "./10.jpg"
    },
    {
        "title": "危险辩护",
        "region": "美国/英国",
        "type": "电影",
        "year": "2013",
        "genre": "犯罪/悬疑/惊悚",
        "tags": "律师 黑帮 道德困境 法庭",
        "url": "./movie-1811.html",
        "cover": "./11.jpg"
    },
    {
        "title": "趁火行劫",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪,动作,悬疑",
        "tags": "高智商犯罪 黑吃黑 限时救援 城市灾难",
        "url": "./movie-1812.html",
        "cover": "./12.jpg"
    },
    {
        "title": "甜心辣舞 2",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "爱情,歌舞,剧情",
        "tags": "拉丁舞 中年危机 重燃梦想",
        "url": "./movie-1813.html",
        "cover": "./13.jpg"
    },
    {
        "title": "使徒保禄",
        "region": "意大利/美国",
        "type": "电影",
        "year": "2025",
        "genre": "宗教/历史/传记",
        "tags": "信仰 迫害 书信 归信之路",
        "url": "./movie-1814.html",
        "cover": "./14.jpg"
    },
    {
        "title": "人生清理员2024",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2024",
        "genre": "剧情/治愈/社会",
        "tags": "命案现场清理 死亡教育 群像 催泪",
        "url": "./movie-1815.html",
        "cover": "./15.jpg"
    },
    {
        "title": "非常小特务",
        "region": "英国",
        "type": "电影",
        "year": "2027",
        "genre": "动作/喜剧/家庭",
        "tags": "儿童间谍 反套路 高科技 英式幽默",
        "url": "./movie-1816.html",
        "cover": "./16.jpg"
    },
    {
        "title": "边城夺宝记",
        "region": "中国大陆",
        "type": "电影",
        "year": "2025",
        "genre": "冒险/动作",
        "tags": "探墓 民国 少数民族 寻宝 动作喜剧",
        "url": "./movie-1817.html",
        "cover": "./17.jpg"
    },
    {
        "title": "月球的黑暗面",
        "region": "美国",
        "type": "电影",
        "year": "2018",
        "genre": "科幻,惊悚,悬疑",
        "tags": "太空灾难 未知生物 密闭空间",
        "url": "./movie-1818.html",
        "cover": "./18.jpg"
    },
    {
        "title": "帕梅拉·曼的私密午后",
        "region": "英国",
        "type": "电影",
        "year": "2003",
        "genre": "剧情/情色/心理",
        "tags": "中产阶级 出轨 女性欲望",
        "url": "./movie-1819.html",
        "cover": "./19.jpg"
    },
    {
        "title": "迷失灵魂的素描像",
        "region": "日本",
        "type": "电影",
        "year": "2022",
        "genre": "悬疑,奇幻",
        "tags": "通灵 肖像画 诅咒",
        "url": "./movie-1820.html",
        "cover": "./20.jpg"
    },
    {
        "title": "遛鸟家族",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "剧情,家庭,黑色幽默",
        "tags": "北京大爷 拆迁 父子关系 老炮儿",
        "url": "./movie-1821.html",
        "cover": "./21.jpg"
    },
    {
        "title": "千言慢煮",
        "region": "中国台湾",
        "type": "电影",
        "year": "2017",
        "genre": "剧情,家庭,美食",
        "tags": "亲情 味觉记忆 慢生活 和解 治愈",
        "url": "./movie-1822.html",
        "cover": "./22.jpg"
    },
    {
        "title": "货物200",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2007",
        "genre": "战争、剧情",
        "tags": "苏阿战争 卡车 黑色幽默 公路 残酷",
        "url": "./movie-1823.html",
        "cover": "./23.jpg"
    },
    {
        "title": "你好倾城",
        "region": "中国大陆",
        "type": "电影",
        "year": "2022",
        "genre": "爱情",
        "tags": "时间循环 暗恋 双向奔赴",
        "url": "./movie-1824.html",
        "cover": "./24.jpg"
    },
    {
        "title": "换世之恋",
        "region": "泰国",
        "type": "剧集",
        "year": "2026",
        "genre": "爱情",
        "tags": "奇幻 轮回 同性 虐恋",
        "url": "./movie-1825.html",
        "cover": "./25.jpg"
    },
    {
        "title": "早餐时女歌迷快闪",
        "region": "日本",
        "type": "电影",
        "year": "2016",
        "genre": "喜剧,音乐",
        "tags": "追星文化 青春喜剧 日式幽默 偶像崇拜",
        "url": "./movie-1826.html",
        "cover": "./26.jpg"
    },
    {
        "title": "家有色邻",
        "region": "日本",
        "type": "剧集",
        "year": "2017",
        "genre": "喜剧,爱情,青春",
        "tags": "青梅竹马 邻居 误会 同居 搞笑",
        "url": "./movie-1827.html",
        "cover": "./27.jpg"
    },
    {
        "title": "一个男人和一个女人",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "爱情,剧情,文艺",
        "tags": "中年危机 邂逅 疗愈 法式浪漫",
        "url": "./movie-1828.html",
        "cover": "./28.jpg"
    },
    {
        "title": "法医密档",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑、犯罪、法医、纪实",
        "tags": "法医学 单元探案 硬核科普 真实案件改编",
        "url": "./movie-1829.html",
        "cover": "./29.jpg"
    },
    {
        "title": "美国回老家",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "剧情/喜剧",
        "tags": "移民 返乡 文化冲突 家庭",
        "url": "./movie-1830.html",
        "cover": "./30.jpg"
    },
    {
        "title": "游戏王 次元的黑暗面",
        "region": "日本",
        "type": "动画电影",
        "year": "2016",
        "genre": "奇幻,冒险",
        "tags": "卡牌对决 平行世界 友情 暗游戏",
        "url": "./movie-1831.html",
        "cover": "./31.jpg"
    },
    {
        "title": "月咏",
        "region": "日本",
        "type": "动画剧集",
        "year": "2024",
        "genre": "奇幻/动作/冒险",
        "tags": "狼人 平安时代 月光 阴阳师 宿命",
        "url": "./movie-1832.html",
        "cover": "./32.jpg"
    },
    {
        "title": "羞辱",
        "region": "黎巴嫩",
        "type": "电影",
        "year": "2017",
        "genre": "剧情,犯罪",
        "tags": "法庭 种族 偏见 尊严",
        "url": "./movie-1833.html",
        "cover": "./33.jpg"
    },
    {
        "title": "特遣侦察",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "动作谍战",
        "tags": "朝鲜核危机 孤胆英雄 朝韩合作 极限逃脱",
        "url": "./movie-1834.html",
        "cover": "./34.jpg"
    },
    {
        "title": "约翰·木兰尼和午餐小伙伴",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "喜剧/动画",
        "tags": "脱口秀 奇幻冒险 食物 童年 想象力",
        "url": "./movie-1835.html",
        "cover": "./35.jpg"
    },
    {
        "title": "辣手保姆 2",
        "region": "美国",
        "type": "电影",
        "year": "2020",
        "genre": "喜剧,恐怖",
        "tags": "血腥 cult 少女杀手 恶魔献祭 反杀",
        "url": "./movie-1836.html",
        "cover": "./36.jpg"
    },
    {
        "title": "花,盛开,绽放",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2022",
        "genre": "剧情/家庭/女性",
        "tags": "三代女性 花店传承 和解",
        "url": "./movie-1837.html",
        "cover": "./37.jpg"
    },
    {
        "title": "大雄的宇宙开拓史",
        "region": "日本",
        "type": "电影",
        "year": "1981",
        "genre": "科幻、冒险、动画",
        "tags": "哆啦A梦 太空 殖民 友情 拓荒",
        "url": "./movie-1838.html",
        "cover": "./38.jpg"
    },
    {
        "title": "旺角马场",
        "region": "中国香港",
        "type": "剧集",
        "year": "2025",
        "genre": "犯罪/剧情/动作",
        "tags": "赛马 黑帮 卧底 兄弟情",
        "url": "./movie-1839.html",
        "cover": "./39.jpg"
    },
    {
        "title": "海上男儿",
        "region": "台湾",
        "type": "电视剧",
        "year": "2024",
        "genre": "剧情/同性/家庭",
        "tags": "讨海人 父子 柜中 渔村 传承",
        "url": "./movie-1840.html",
        "cover": "./40.jpg"
    },
    {
        "title": "绝种好男人",
        "region": "中国香港",
        "type": "电影",
        "year": "2003",
        "genre": "喜剧/爱情",
        "tags": "港式无厘头 废柴逆袭 真假身份",
        "url": "./movie-1841.html",
        "cover": "./41.jpg"
    },
    {
        "title": "青出于蓝粤语",
        "region": "中国香港",
        "type": "剧集",
        "year": "1990",
        "genre": "家庭,喜剧",
        "tags": "港剧 师徒 粤语原声 年代剧",
        "url": "./movie-1842.html",
        "cover": "./42.jpg"
    },
    {
        "title": "阳光路上",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2018",
        "genre": "剧情/家庭",
        "tags": "乡村教师 留守儿童 治愈系",
        "url": "./movie-1843.html",
        "cover": "./43.jpg"
    },
    {
        "title": "血锁情义心",
        "region": "香港",
        "type": "电影",
        "year": "2024",
        "genre": "动作,剧情",
        "tags": "兄弟情 卧底 九龙城寨美学",
        "url": "./movie-1844.html",
        "cover": "./44.jpg"
    },
    {
        "title": "仙人坝的红衣兜",
        "region": "中国大陆",
        "type": "电影",
        "year": "2012",
        "genre": "剧情,历史,战争",
        "tags": "抗日战争 女性 乡村",
        "url": "./movie-1845.html",
        "cover": "./45.jpg"
    },
    {
        "title": "大地与阴影",
        "region": "哥伦比亚",
        "type": "电影",
        "year": "2015",
        "genre": "剧情/家庭",
        "tags": "乡村 甘蔗田 疾病 回归",
        "url": "./movie-1846.html",
        "cover": "./46.jpg"
    },
    {
        "title": "沉沦",
        "region": "法国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/惊悚",
        "tags": "心理惊悚 小三复仇 阶级差异 女性反杀",
        "url": "./movie-1847.html",
        "cover": "./47.jpg"
    },
    {
        "title": "路易斯安纳鱼子酱",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/喜剧/家庭",
        "tags": "南方 穷富 食物 和解",
        "url": "./movie-1848.html",
        "cover": "./48.jpg"
    },
    {
        "title": "变相怪杰",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "动作奇幻喜剧",
        "tags": "身份互换 都市英雄 面具异能 黑色幽默",
        "url": "./movie-1849.html",
        "cover": "./49.jpg"
    },
    {
        "title": "沧元图",
        "region": "中国大陆",
        "type": "动画",
        "year": "2023",
        "genre": "奇幻",
        "tags": "修仙 热血 妖族 国风",
        "url": "./movie-1850.html",
        "cover": "./50.jpg"
    },
    {
        "title": "外星居民第四季",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "科幻/喜剧/悬疑",
        "tags": "外星人 小镇 黑色幽默 身份认同 新篇章",
        "url": "./movie-1851.html",
        "cover": "./51.jpg"
    },
    {
        "title": "世界大战2 新的进攻",
        "region": "美国",
        "type": "电影",
        "year": "2008",
        "genre": "科幻、灾难、动作",
        "tags": "外星人 十年后 电磁炮 废墟 基因突变",
        "url": "./movie-1852.html",
        "cover": "./52.jpg"
    },
    {
        "title": "恋上纯喫茶1",
        "region": "日本",
        "type": "电视剧",
        "year": "2025",
        "genre": "剧情/美食/治愈",
        "tags": "咖啡馆 昭和风 单元剧 慢生活 人情味",
        "url": "./movie-1853.html",
        "cover": "./53.jpg"
    },
    {
        "title": "匹夫英雄",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "历史/战争/传记",
        "tags": "民国土匪 抗日传奇 草莽英雄 双男主 江湖义气",
        "url": "./movie-1854.html",
        "cover": "./54.jpg"
    },
    {
        "title": "星辰大海",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "科幻/冒险/家庭",
        "tags": "太空 父女 AI 牺牲 硬科幻",
        "url": "./movie-1855.html",
        "cover": "./55.jpg"
    },
    {
        "title": "甜蜜湾之恋",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "爱情/剧情",
        "tags": "渔村 青梅竹马 海难 等待 纯爱",
        "url": "./movie-1856.html",
        "cover": "./56.jpg"
    },
    {
        "title": "摧花狂魔",
        "region": "美国",
        "type": "电影",
        "year": "2017",
        "genre": "恐怖/惊悚",
        "tags": "变态杀手 心理压迫 密室逃生 血腥 悬疑",
        "url": "./movie-1857.html",
        "cover": "./57.jpg"
    },
    {
        "title": "酷狗马马杜",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "动画/家庭/冒险",
        "tags": "会说话的狗 公路喜剧 底层逆袭 拟人化动物 街头智慧",
        "url": "./movie-1858.html",
        "cover": "./58.jpg"
    },
    {
        "title": "真相半白",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "悬疑/犯罪/心理",
        "tags": "刑侦 记忆迷宫 反转 连环案 高智商",
        "url": "./movie-1859.html",
        "cover": "./59.jpg"
    },
    {
        "title": "再见了,亲爱的总统",
        "region": "韩国",
        "type": "电影",
        "year": "2020",
        "genre": "喜剧,政治,剧情",
        "tags": "暗杀 乌龙 小人物 讽刺",
        "url": "./movie-1860.html",
        "cover": "./60.jpg"
    },
    {
        "title": "鲁本,鲁本",
        "region": "美国",
        "type": "电影",
        "year": "2021",
        "genre": "剧情",
        "tags": "双胞胎 身份互换 钢琴 谎言 救赎",
        "url": "./movie-1861.html",
        "cover": "./61.jpg"
    },
    {
        "title": "敌特在行动",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2023",
        "genre": "谍战/悬疑",
        "tags": "1950年代 反特 工厂 内鬼 连环案",
        "url": "./movie-1862.html",
        "cover": "./62.jpg"
    },
    {
        "title": "一千零一夜第四季",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "剧情/奇幻",
        "tags": "单元剧 寓言 创意 脑洞",
        "url": "./movie-1863.html",
        "cover": "./63.jpg"
    },
    {
        "title": "决斗太阳谷",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻,西部",
        "tags": "机甲 沙漠 赏金猎人 水资源",
        "url": "./movie-1864.html",
        "cover": "./64.jpg"
    },
    {
        "title": "佛罗伦萨人",
        "region": "意大利,法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,历史",
        "tags": "艺术 家族 文艺复兴 阴谋 传承",
        "url": "./movie-1865.html",
        "cover": "./65.jpg"
    },
    {
        "title": "美男堂",
        "region": "韩国",
        "type": "剧集",
        "year": "2022",
        "genre": "犯罪/喜剧/悬疑",
        "tags": "巫师诈骗犯 咖啡厅伪装 前刑警 搞笑破案 坑蒙拐骗",
        "url": "./movie-1866.html",
        "cover": "./66.jpg"
    },
    {
        "title": "降龙大师",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "奇幻动作",
        "tags": "修仙 降龙 学院派",
        "url": "./movie-1867.html",
        "cover": "./67.jpg"
    },
    {
        "title": "我的天才女友第一季",
        "region": "意大利",
        "type": "剧集",
        "year": "2018",
        "genre": "剧情",
        "tags": "女性友谊 成长 那不勒斯 文学改编",
        "url": "./movie-1868.html",
        "cover": "./68.jpg"
    },
    {
        "title": "不可能的事",
        "region": "中国香港",
        "type": "电影",
        "year": "2023",
        "genre": "剧情、奇幻",
        "tags": "逆天改命 彩票 家庭温情",
        "url": "./movie-1869.html",
        "cover": "./69.jpg"
    },
    {
        "title": "双城故事1991",
        "region": "中国香港",
        "type": "电影",
        "year": "1991",
        "genre": "爱情/剧情",
        "tags": "时代变迁 单车送报 沪港双城",
        "url": "./movie-1870.html",
        "cover": "./70.jpg"
    },
    {
        "title": "糕点铺精灵",
        "region": "德国",
        "type": "剧集",
        "year": "2026",
        "genre": "奇幻/家庭/剧情",
        "tags": "甜品 治愈 魔法 精灵 小镇",
        "url": "./movie-1871.html",
        "cover": "./71.jpg"
    },
    {
        "title": "对角交响曲",
        "region": "法国",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/音乐/悬疑",
        "tags": "钢琴 双重人格 乐谱密码 古典乐",
        "url": "./movie-1872.html",
        "cover": "./72.jpg"
    },
    {
        "title": "掩不住的阳光",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑/剧情/社会",
        "tags": "盲人 悬案 感官叙事 追凶",
        "url": "./movie-1873.html",
        "cover": "./73.jpg"
    },
    {
        "title": "圈套2",
        "region": "韩国",
        "type": "电视剧",
        "year": "2025",
        "genre": "犯罪,惊悚,悬疑",
        "tags": "高智商犯罪 以恶制恶 反转王 全员恶人 大尺度",
        "url": "./movie-1874.html",
        "cover": "./74.jpg"
    },
    {
        "title": "魔法双星",
        "region": "美国/加拿大",
        "type": "电影",
        "year": "2024",
        "genre": "奇幻/家庭/冒险",
        "tags": "双胞胎 平行世界 元素魔法",
        "url": "./movie-1875.html",
        "cover": "./75.jpg"
    },
    {
        "title": "查科",
        "region": "阿根廷",
        "type": "电影",
        "year": "2023",
        "genre": "历史/战争/惊悚",
        "tags": "南美历史 巴拉圭战争 雨林地狱 军官溃败 存在主义",
        "url": "./movie-1876.html",
        "cover": "./76.jpg"
    },
    {
        "title": "玩得开心,瓦夏!",
        "region": "俄罗斯",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧/剧情",
        "tags": "苏联解体遗孤 寻根 误会 公路片 温情喜剧",
        "url": "./movie-1877.html",
        "cover": "./77.jpg"
    },
    {
        "title": "新河东狮吼",
        "region": "中国香港",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,爱情,古装",
        "tags": "女强男弱 爆笑改装 古代女权",
        "url": "./movie-1878.html",
        "cover": "./78.jpg"
    },
    {
        "title": "伊布里斯",
        "region": "马来西亚",
        "type": "电影",
        "year": "2023",
        "genre": "恐怖/心理",
        "tags": "伊斯兰教 魔鬼 附身 民俗恐怖 驱魔",
        "url": "./movie-1879.html",
        "cover": "./79.jpg"
    },
    {
        "title": "我曾拥有那座城堡",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/历史",
        "tags": "贵族没落 城堡拍卖 家族记忆 时代变迁 优雅告别",
        "url": "./movie-1880.html",
        "cover": "./80.jpg"
    },
    {
        "title": "特写",
        "region": "伊朗",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/纪录",
        "tags": "身份冒用 电影狂热 真实改编",
        "url": "./movie-1881.html",
        "cover": "./81.jpg"
    },
    {
        "title": "神龙飞侠",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "动作/奇幻",
        "tags": "都市侠客 龙族觉醒 港式漫改",
        "url": "./movie-1882.html",
        "cover": "./82.jpg"
    },
    {
        "title": "十二生笑又笑一打亲",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧、家庭",
        "tags": "贺岁 群星 生肖 乌龙 亲情",
        "url": "./movie-1883.html",
        "cover": "./83.jpg"
    },
    {
        "title": "国土安全第二季",
        "region": "美国",
        "type": "电视剧",
        "year": "2012",
        "genre": "悬疑/惊悚/谍战",
        "tags": "反恐 中情局 双面间谍 心理博弈",
        "url": "./movie-1884.html",
        "cover": "./84.jpg"
    },
    {
        "title": "穿越谜团",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "科幻悬疑",
        "tags": "时间循环 平行宇宙 亲情救赎",
        "url": "./movie-1885.html",
        "cover": "./85.jpg"
    },
    {
        "title": "泽普鲁德影片",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,惊悚,历史",
        "tags": "模拟现实 阴谋论 媒介自反",
        "url": "./movie-1886.html",
        "cover": "./86.jpg"
    },
    {
        "title": "风流神探",
        "region": "中国香港",
        "type": "剧集",
        "year": "2023",
        "genre": "悬疑/犯罪",
        "tags": "单元探案 高智商犯罪 反套路 双男主",
        "url": "./movie-1887.html",
        "cover": "./87.jpg"
    },
    {
        "title": "没有谎言",
        "region": "韩国",
        "type": "剧集",
        "year": "2023",
        "genre": "奇幻,爱情",
        "tags": "谎言检测 直球女 政坛阴谋",
        "url": "./movie-1888.html",
        "cover": "./88.jpg"
    },
    {
        "title": "梦魂颠倒",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "恐怖,悬疑,惊悚",
        "tags": "梦境 失忆 民俗 邪教",
        "url": "./movie-1889.html",
        "cover": "./89.jpg"
    },
    {
        "title": "幽灵医生",
        "region": "韩国",
        "type": "电视剧",
        "year": "2024",
        "genre": "奇幻,医疗,喜剧",
        "tags": "附身 鬼魂 胸外科 傲娇",
        "url": "./movie-1890.html",
        "cover": "./90.jpg"
    },
    {
        "title": "塔纳吉:无名勇士",
        "region": "印度",
        "type": "电影",
        "year": "2024",
        "genre": "历史,战争",
        "tags": "马拉地帝国 冷兵器 殉国 史诗 忠义",
        "url": "./movie-1891.html",
        "cover": "./91.jpg"
    },
    {
        "title": "日本酷儿",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情,同性",
        "tags": "LGBTQ 职场 自我认同 群像 生活流",
        "url": "./movie-1892.html",
        "cover": "./92.jpg"
    },
    {
        "title": "额外旅程",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻剧情",
        "tags": "临终关怀 意识上传 伦理困境 温情",
        "url": "./movie-1893.html",
        "cover": "./93.jpg"
    },
    {
        "title": "霹雳游侠2000",
        "region": "美国",
        "type": "电影",
        "year": "1991",
        "genre": "动作",
        "tags": "科幻 智能车 怀旧 续集 经典翻拍",
        "url": "./movie-1894.html",
        "cover": "./94.jpg"
    },
    {
        "title": "40 冲一波",
        "region": "中国台湾",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧,爱情,剧情",
        "tags": "中年危机 女性成长 公路电影 励志",
        "url": "./movie-1895.html",
        "cover": "./95.jpg"
    },
    {
        "title": "神效苹果醋",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "悬疑,科幻,惊悚",
        "tags": "阴谋 保健品 记忆篡改 邪教 科技伦理",
        "url": "./movie-1896.html",
        "cover": "./96.jpg"
    },
    {
        "title": "永不言死",
        "region": "日本",
        "type": "电影",
        "year": "2020",
        "genre": "剧情,奇幻,战争",
        "tags": "二战 轮回 神风特攻队 反战 生死",
        "url": "./movie-1897.html",
        "cover": "./97.jpg"
    },
    {
        "title": "谋杀游戏",
        "region": "英国",
        "type": "剧集/限定剧",
        "year": "2025",
        "genre": "悬疑/犯罪/惊悚",
        "tags": "阿加莎式 暴风雪山庄 剧本杀 直播杀人 社交推理",
        "url": "./movie-1898.html",
        "cover": "./98.jpg"
    },
    {
        "title": "胸口",
        "region": "法国",
        "type": "电影",
        "year": "2018",
        "genre": "剧情,奇幻",
        "tags": "身体 情感 寓言 文艺 心理",
        "url": "./movie-1899.html",
        "cover": "./99.jpg"
    },
    {
        "title": "赛车生涯",
        "region": "美国",
        "type": "电影",
        "year": "2019",
        "genre": "剧情/运动/传记",
        "tags": "赛车 父子 励志 真实改编",
        "url": "./movie-1900.html",
        "cover": "./100.jpg"
    },
    {
        "title": "单身厨房2011",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2011",
        "genre": "真人秀/生活",
        "tags": "相亲 美食 古早综艺 都市男女",
        "url": "./movie-1901.html",
        "cover": "./101.jpg"
    },
    {
        "title": "雪孩子",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,奇幻",
        "tags": "留守儿童 幻觉 冬季 治愈",
        "url": "./movie-1902.html",
        "cover": "./102.jpg"
    },
    {
        "title": "碧窗艳影",
        "region": "美国",
        "type": "电影",
        "year": "1954",
        "genre": "悬疑,犯罪",
        "tags": "希区柯克式 窥视 谋杀",
        "url": "./movie-1903.html",
        "cover": "./103.jpg"
    },
    {
        "title": "乳莺出谷",
        "region": "中国台湾",
        "type": "电影",
        "year": "2024",
        "genre": "剧情、音乐、家庭",
        "tags": "歌唱 山村 天赋 少女 寻亲",
        "url": "./movie-1904.html",
        "cover": "./104.jpg"
    },
    {
        "title": "黑色惊爆线",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "犯罪,动作",
        "tags": "黑帮 记者 卧底 反转",
        "url": "./movie-1905.html",
        "cover": "./105.jpg"
    },
    {
        "title": "英雄好汉粤语",
        "region": "中国香港",
        "type": "电影",
        "year": "1987",
        "genre": "动作/犯罪",
        "tags": "黑帮 兄弟情 双雄",
        "url": "./movie-1906.html",
        "cover": "./106.jpg"
    },
    {
        "title": "无从选择",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "科幻/惊悚",
        "tags": "平行宇宙 身份认同 悬疑 高概念 反转",
        "url": "./movie-1907.html",
        "cover": "./107.jpg"
    },
    {
        "title": "一日重生",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情、奇幻、家庭",
        "tags": "时光倒流 父子 和解 遗憾 催泪",
        "url": "./movie-1908.html",
        "cover": "./108.jpg"
    },
    {
        "title": "山间铃响马帮来1954",
        "region": "中国大陆",
        "type": "电影",
        "year": "1954",
        "genre": "战争,剧情",
        "tags": "红色经典 边疆 剿匪 民族团结",
        "url": "./movie-1909.html",
        "cover": "./109.jpg"
    },
    {
        "title": "老虎与妙贼",
        "region": "印度",
        "type": "电影",
        "year": "2023",
        "genre": "动作,喜剧,冒险",
        "tags": "动物园 偷窃 黑吃黑 动物保护",
        "url": "./movie-1910.html",
        "cover": "./110.jpg"
    },
    {
        "title": "战无双",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "动作,武侠",
        "tags": "格斗 复仇 热血 功夫 硬核",
        "url": "./movie-1911.html",
        "cover": "./111.jpg"
    },
    {
        "title": "10号舱里的女人",
        "region": "英国/美国",
        "type": "电影",
        "year": "2026",
        "genre": "悬疑/惊悚/犯罪",
        "tags": "豪华邮轮 目击犯罪 无人相信 密闭空间",
        "url": "./movie-1912.html",
        "cover": "./112.jpg"
    },
    {
        "title": "玉蝎子的魔咒",
        "region": "美国",
        "type": "电影",
        "year": "2001",
        "genre": "喜剧/犯罪/爱情",
        "tags": "伍迪·艾伦 催眠 复古风 妙探搭档",
        "url": "./movie-1913.html",
        "cover": "./113.jpg"
    },
    {
        "title": "我的丫鬟是总监",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2024",
        "genre": "喜剧/古装/爱情",
        "tags": "穿越 职场反内卷 灵魂互换 女强男弱",
        "url": "./movie-1914.html",
        "cover": "./114.jpg"
    },
    {
        "title": "萌眼杀手",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/犯罪",
        "tags": "反转 连环杀手 童颜 社会批判",
        "url": "./movie-1915.html",
        "cover": "./115.jpg"
    },
    {
        "title": "红豆面包",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/家庭",
        "tags": "饮食治愈 祖孙情 战后时代",
        "url": "./movie-1916.html",
        "cover": "./116.jpg"
    },
    {
        "title": "夺冠",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,运动",
        "tags": "热血 逆袭 女足",
        "url": "./movie-1917.html",
        "cover": "./117.jpg"
    },
    {
        "title": "吞火人",
        "region": "印度",
        "type": "电影",
        "year": "2017",
        "genre": "悬疑、犯罪、剧情",
        "tags": "杂耍 连环杀人 符号学 底层叙事",
        "url": "./movie-1918.html",
        "cover": "./118.jpg"
    },
    {
        "title": "牧师神探 第六季",
        "region": "英国",
        "type": "剧集",
        "year": "2021",
        "genre": "剧情/悬疑/犯罪",
        "tags": "英伦乡村 神探搭档 战后创伤 道德困境",
        "url": "./movie-1919.html",
        "cover": "./119.jpg"
    },
    {
        "title": "帝国的崛起:奥斯曼第二季",
        "region": "土耳其/美国",
        "type": "剧集",
        "year": "2022",
        "genre": "剧情/历史/战争/传记",
        "tags": "奥斯曼帝国 征服者 历史还原 史诗战争 宗教冲突",
        "url": "./movie-1920.html",
        "cover": "./120.jpg"
    },
    {
        "title": "浴血十四年",
        "region": "中国",
        "type": "电视剧",
        "year": "2025",
        "genre": "战争,历史,剧情",
        "tags": "抗日战争 家族恩怨 军人成长 史诗 家国情怀",
        "url": "./movie-1921.html",
        "cover": "./121.jpg"
    },
    {
        "title": "海滩的一天",
        "region": "中国台湾",
        "type": "电影",
        "year": "1983",
        "genre": "剧情、文艺、家庭",
        "tags": "女性成长 婚姻困境 都市生活 时间跳跃",
        "url": "./movie-1922.html",
        "cover": "./122.jpg"
    },
    {
        "title": "一路上有你",
        "region": "中国",
        "type": "电影",
        "year": "2026",
        "genre": "公路/剧情",
        "tags": "失明 导盲犬 西藏 治愈 临终关怀",
        "url": "./movie-1923.html",
        "cover": "./123.jpg"
    },
    {
        "title": "名侦探柯南:黑铁的鱼影",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "动画,悬疑,动作",
        "tags": "剧场版 黑衣组织 太平洋浮标 灰原哀",
        "url": "./movie-1924.html",
        "cover": "./124.jpg"
    },
    {
        "title": "步步高升",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "剧情/职场",
        "tags": "职场 逆袭 商战 人性",
        "url": "./movie-1925.html",
        "cover": "./125.jpg"
    },
    {
        "title": "怖谷鸟",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖/心理",
        "tags": "民宿惊魂 时间循环 替身 鸟鸣杀人",
        "url": "./movie-1926.html",
        "cover": "./126.jpg"
    },
    {
        "title": "金牌客服董董恩",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "职场/喜剧",
        "tags": "客服 行业剧 轻喜剧 反内卷 成长",
        "url": "./movie-1927.html",
        "cover": "./127.jpg"
    },
    {
        "title": "健太与纯与加世的国度",
        "region": "日本",
        "type": "电影",
        "year": "2023",
        "genre": "剧情,青春,社会",
        "tags": "日本 底层 青年 友谊 逃离",
        "url": "./movie-1928.html",
        "cover": "./128.jpg"
    },
    {
        "title": "脸红心跳",
        "region": "日本",
        "type": "剧集",
        "year": "2025",
        "genre": "爱情/喜剧",
        "tags": "漫改 社死 纯爱 双向暗恋",
        "url": "./movie-1929.html",
        "cover": "./129.jpg"
    },
    {
        "title": "主流",
        "region": "美国",
        "type": "电影",
        "year": "2023",
        "genre": "喜剧/剧情",
        "tags": "互联网讽刺 网红文化 身份表演 黑色幽默 世代冲突",
        "url": "./movie-1930.html",
        "cover": "./130.jpg"
    },
    {
        "title": "最后的约定",
        "region": "中国大陆",
        "type": "电影",
        "year": "2023",
        "genre": "剧情/家庭",
        "tags": "临终关怀 父子 承诺 公路",
        "url": "./movie-1931.html",
        "cover": "./131.jpg"
    },
    {
        "title": "送子成婚",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,家庭",
        "tags": "同性 催婚 代孕 反向出柜",
        "url": "./movie-1932.html",
        "cover": "./132.jpg"
    },
    {
        "title": "英国之声",
        "region": "英国",
        "type": "剧集",
        "year": "2025",
        "genre": "音乐/剧情/历史",
        "tags": "选秀 音乐工业 时代变迁",
        "url": "./movie-1933.html",
        "cover": "./133.jpg"
    },
    {
        "title": "活尸大军",
        "region": "美国",
        "type": "电影",
        "year": "2021",
        "genre": "动作,恐怖,丧尸",
        "tags": "丧尸劫案 拉斯维加斯 雇佣兵 硬核动作 劫匪与僵尸",
        "url": "./movie-1934.html",
        "cover": "./134.jpg"
    },
    {
        "title": "恋恋情深",
        "region": "中国台湾",
        "type": "电视剧",
        "year": "2018",
        "genre": "剧情/同性/家庭",
        "tags": "同志 形婚 老年 养老院 遗产",
        "url": "./movie-1935.html",
        "cover": "./135.jpg"
    },
    {
        "title": "风流妙贼",
        "region": "中国香港",
        "type": "电影",
        "year": "1999",
        "genre": "喜剧,犯罪",
        "tags": "盗贼 爱情 乌龙 搞笑",
        "url": "./movie-1936.html",
        "cover": "./136.jpg"
    },
    {
        "title": "大楼里只有谋杀第五季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "悬疑、喜剧、犯罪",
        "tags": "播客 破案 黑色幽默 公寓",
        "url": "./movie-1937.html",
        "cover": "./137.jpg"
    },
    {
        "title": "奇遇",
        "region": "意大利",
        "type": "电影",
        "year": "2025",
        "genre": "剧情,奇幻",
        "tags": "孤岛 失踪 隐喻 现代寓言 沉默",
        "url": "./movie-1938.html",
        "cover": "./138.jpg"
    },
    {
        "title": "千里送鹤",
        "region": "中国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情,家庭",
        "tags": "留守儿童 公路片 动物保护 亲情",
        "url": "./movie-1939.html",
        "cover": "./139.jpg"
    },
    {
        "title": "才不要和老板谈恋爱",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2024",
        "genre": "爱情,喜剧",
        "tags": "职场 契约恋爱 打脸",
        "url": "./movie-1940.html",
        "cover": "./140.jpg"
    },
    {
        "title": "舒适的麻木",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/心理/黑色喜剧",
        "tags": "社畜 情感阻滞 麻木症",
        "url": "./movie-1941.html",
        "cover": "./141.jpg"
    },
    {
        "title": "万物三生",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2025",
        "genre": "科幻/爱情/悬疑",
        "tags": "平行时空 无限流 宿命 硬科幻 烧脑",
        "url": "./movie-1942.html",
        "cover": "./142.jpg"
    },
    {
        "title": "那些人们",
        "region": "美国",
        "type": "剧集",
        "year": "2015",
        "genre": "剧情/历史",
        "tags": "群像剧 大萧条 人性光辉",
        "url": "./movie-1943.html",
        "cover": "./143.jpg"
    },
    {
        "title": "美丽新秩序",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "科幻,反乌托邦",
        "tags": "极权 AI统治 人性实验",
        "url": "./movie-1944.html",
        "cover": "./144.jpg"
    },
    {
        "title": "女人有话说第一季",
        "region": "中国",
        "type": "综艺",
        "year": "2018",
        "genre": "真人秀,访谈",
        "tags": "女性视角 明星对谈 情感话题 生活方式 纪实",
        "url": "./movie-1945.html",
        "cover": "./145.jpg"
    },
    {
        "title": "恩情",
        "region": "中国大陆",
        "type": "电视剧",
        "year": "2025",
        "genre": "家庭/伦理",
        "tags": "收养 母爱 年代剧 催泪 回报",
        "url": "./movie-1946.html",
        "cover": "./146.jpg"
    },
    {
        "title": "海上男儿",
        "region": "日本",
        "type": "剧集",
        "year": "2023",
        "genre": "剧情/家庭",
        "tags": "渔业 父子关系 小镇生活 成长 治愈",
        "url": "./movie-1947.html",
        "cover": "./147.jpg"
    },
    {
        "title": "复仇的女枪手",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "动作/犯罪",
        "tags": "女性复仇 枪战 律政背景 爽片",
        "url": "./movie-1948.html",
        "cover": "./148.jpg"
    },
    {
        "title": "意大利星期六",
        "region": "意大利",
        "type": "电影",
        "year": "2025",
        "genre": "喜剧,爱情",
        "tags": "周末 奇遇 一夜情 罗马 浪漫",
        "url": "./movie-1949.html",
        "cover": "./149.jpg"
    },
    {
        "title": "猛鬼专线2",
        "region": "泰国",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖,惊悚",
        "tags": "鬼魂 公交车 轮回 东南亚 民俗",
        "url": "./movie-1950.html",
        "cover": "./150.jpg"
    },
    {
        "title": "特鲁曼",
        "region": "美国",
        "type": "剧集",
        "year": "2026",
        "genre": "科幻/剧情",
        "tags": "虚拟现实 觉醒 存在主义",
        "url": "./movie-1951.html",
        "cover": "./1.jpg"
    },
    {
        "title": "我的小情人1974",
        "region": "法国",
        "type": "电影",
        "year": "1974",
        "genre": "剧情,爱情",
        "tags": "法国 禁忌恋 成长",
        "url": "./movie-1952.html",
        "cover": "./2.jpg"
    },
    {
        "title": "哈丽特",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "传记/历史",
        "tags": "废奴运动 女性领袖 地下铁路",
        "url": "./movie-1953.html",
        "cover": "./3.jpg"
    },
    {
        "title": "飞行的水手",
        "region": "法国",
        "type": "电影",
        "year": "2025",
        "genre": "冒险/奇幻",
        "tags": "环保寓言 蒸汽朋克 飞艇 孤独症",
        "url": "./movie-1954.html",
        "cover": "./4.jpg"
    },
    {
        "title": "教室里的一头牦牛",
        "region": "不丹",
        "type": "电影",
        "year": "2019",
        "genre": "剧情",
        "tags": "不丹 教育 偏远山区 理想与现实",
        "url": "./movie-1955.html",
        "cover": "./5.jpg"
    },
    {
        "title": "寻找奇迹水人",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "家庭,冒险",
        "tags": "绝症儿童 森林传说 治愈之旅 温情励志",
        "url": "./movie-1956.html",
        "cover": "./6.jpg"
    },
    {
        "title": "死亡之谜",
        "region": "美国",
        "type": "电影",
        "year": "2019",
        "genre": "悬疑/惊悚",
        "tags": "密室 心理 解谜",
        "url": "./movie-1957.html",
        "cover": "./7.jpg"
    },
    {
        "title": "无限接近",
        "region": "美国",
        "type": "电影",
        "year": "2026",
        "genre": "科幻悬疑",
        "tags": "平行宇宙 量子 恋人",
        "url": "./movie-1958.html",
        "cover": "./8.jpg"
    },
    {
        "title": "丹顿事件",
        "region": "美国",
        "type": "电视剧(限定剧)",
        "year": "2023",
        "genre": "悬疑/犯罪/纪实风格",
        "tags": "小镇悬疑 邪教 档案解密 全员嫌疑人",
        "url": "./movie-1959.html",
        "cover": "./9.jpg"
    },
    {
        "title": "裸男怨女",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "喜剧,爱情",
        "tags": "荒诞 黑色幽默 男女关系 英式幽默",
        "url": "./movie-1960.html",
        "cover": "./10.jpg"
    },
    {
        "title": "只是朋友2012",
        "region": "美国",
        "type": "电影",
        "year": "2022",
        "genre": "喜剧,爱情",
        "tags": "婚礼 最佳损友 表白 尴尬 小镇",
        "url": "./movie-1961.html",
        "cover": "./11.jpg"
    },
    {
        "title": "善意的背叛",
        "region": "瑞典",
        "type": "剧集",
        "year": "1992",
        "genre": "剧情,家庭,伦理",
        "tags": "婚姻 真相 北欧 冷冽",
        "url": "./movie-1962.html",
        "cover": "./12.jpg"
    },
    {
        "title": "侠圣",
        "region": "中国香港",
        "type": "电影",
        "year": "1992",
        "genre": "动作喜剧",
        "tags": "都市奇侠 风水玄学 关之琳",
        "url": "./movie-1963.html",
        "cover": "./13.jpg"
    },
    {
        "title": "一起火锅吧",
        "region": "中国大陆",
        "type": "综艺/电影",
        "year": "2022",
        "genre": "真人秀,喜剧",
        "tags": "火锅 明星 聊天 美食 生活",
        "url": "./movie-1964.html",
        "cover": "./14.jpg"
    },
    {
        "title": "约瑟",
        "region": "法国/以色列",
        "type": "动画电影",
        "year": "2018",
        "genre": "历史,战争,剧情",
        "tags": "圣经故事 定格动画 战争反思 兄弟情 宽恕",
        "url": "./movie-1965.html",
        "cover": "./15.jpg"
    },
    {
        "title": "回到你怀抱",
        "region": "韩国",
        "type": "电影",
        "year": "2022",
        "genre": "剧情/家庭",
        "tags": "母女和解 遗愿清单 催泪",
        "url": "./movie-1966.html",
        "cover": "./16.jpg"
    },
    {
        "title": "我和爸爸",
        "region": "中国大陆",
        "type": "电影",
        "year": "2024",
        "genre": "剧情/家庭",
        "tags": "亲情 误解 和解",
        "url": "./movie-1967.html",
        "cover": "./17.jpg"
    },
    {
        "title": "第十九个妻子",
        "region": "印度",
        "type": "电影",
        "year": "2025",
        "genre": "历史/悬疑/女性",
        "tags": "一夫多妻 宗教社区 复仇",
        "url": "./movie-1968.html",
        "cover": "./18.jpg"
    },
    {
        "title": "列侬和洋子:仅限于天空",
        "region": "英国",
        "type": "电影",
        "year": "2025",
        "genre": "纪录片,音乐,传记",
        "tags": "黑白档案 实验影像 爱情 反战",
        "url": "./movie-1969.html",
        "cover": "./19.jpg"
    },
    {
        "title": "妈妈别哭",
        "region": "韩国",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/家庭",
        "tags": "母爱 遗愿清单 催泪 绝症",
        "url": "./movie-1970.html",
        "cover": "./20.jpg"
    },
    {
        "title": "无尽情爱",
        "region": "法国",
        "type": "剧集",
        "year": "2023",
        "genre": "爱情,剧情",
        "tags": "循环 宿命 巴黎 成长",
        "url": "./movie-1971.html",
        "cover": "./21.jpg"
    },
    {
        "title": "进阶的主母",
        "region": "中国大陆",
        "type": "剧集",
        "year": "2026",
        "genre": "古装宅斗",
        "tags": "穿越 逆袭 经商 女性 权谋",
        "url": "./movie-1972.html",
        "cover": "./22.jpg"
    },
    {
        "title": "秃鹰第二季",
        "region": "美国",
        "type": "剧集",
        "year": "2025",
        "genre": "动作,惊悚,谍战",
        "tags": "特工 复仇 阴谋论 独行侠 高智商",
        "url": "./movie-1973.html",
        "cover": "./23.jpg"
    },
    {
        "title": "亡者之湿",
        "region": "日本",
        "type": "电影",
        "year": "2025",
        "genre": "恐怖",
        "tags": "民俗 诅咒 水怪",
        "url": "./movie-1974.html",
        "cover": "./24.jpg"
    },
    {
        "title": "好孕测验",
        "region": "韩国",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/悬疑",
        "tags": "验孕棒 暗网 直播 诅咒 反转",
        "url": "./movie-1975.html",
        "cover": "./25.jpg"
    },
    {
        "title": "我不是贼",
        "region": "中国",
        "type": "电影",
        "year": "2024",
        "genre": "犯罪/剧情",
        "tags": "底层冤案 追凶 黑色幽默",
        "url": "./movie-1976.html",
        "cover": "./26.jpg"
    },
    {
        "title": "农家女",
        "region": "中国大陆",
        "type": "电影",
        "year": "2021",
        "genre": "剧情/家庭/农村",
        "tags": "乡村振兴 女性自强 非遗传承",
        "url": "./movie-1977.html",
        "cover": "./27.jpg"
    },
    {
        "title": "魔蝎大帝5:灵魂之书",
        "region": "美国",
        "type": "电影",
        "year": "2018",
        "genre": "动作/奇幻",
        "tags": "冒险 古埃及 魔幻 续作 爽片",
        "url": "./movie-1978.html",
        "cover": "./28.jpg"
    },
    {
        "title": "血手淫心",
        "region": "中国香港",
        "type": "电影",
        "year": "1989",
        "genre": "恐怖/惊悚",
        "tags": "邪典 凶杀 幻觉 心理分裂 限制级",
        "url": "./movie-1979.html",
        "cover": "./29.jpg"
    },
    {
        "title": "行骗高手",
        "region": "韩国",
        "type": "电视剧",
        "year": "2025",
        "genre": "犯罪/悬疑/喜剧",
        "tags": "高智商 诈骗 复仇 反转 单元剧",
        "url": "./movie-1980.html",
        "cover": "./30.jpg"
    },
    {
        "title": "刺杀甘迺迪",
        "region": "美国",
        "type": "电影",
        "year": "2025",
        "genre": "悬疑,惊悚,历史",
        "tags": "政治阴谋 调查 记者 真相 档案",
        "url": "./movie-1981.html",
        "cover": "./31.jpg"
    },
    {
        "title": "马卡龙少女",
        "region": "法国",
        "type": "剧集",
        "year": "2023",
        "genre": "喜剧/青春/美食",
        "tags": "甜品师 社交焦虑 童年味觉",
        "url": "./movie-1982.html",
        "cover": "./32.jpg"
    },
    {
        "title": "唐顿庄园第三季",
        "region": "英国",
        "type": "剧集",
        "year": "2013",
        "genre": "剧情/历史",
        "tags": "家族兴衰 阶级冲突 遗产危机",
        "url": "./movie-1983.html",
        "cover": "./33.jpg"
    },
    {
        "title": "艾德温·德鲁德之谜",
        "region": "英国",
        "type": "电影",
        "year": "2024",
        "genre": "悬疑,剧情",
        "tags": "狄更斯 未完成小说 双重人格 哥特",
        "url": "./movie-1984.html",
        "cover": "./34.jpg"
    },
    {
        "title": "风流女教师",
        "region": "日本",
        "type": "剧集",
        "year": "2024",
        "genre": "剧情/悬疑/爱情",
        "tags": "师生禁忌 校园霸凌 反转 女性复仇 伦理",
        "url": "./movie-1985.html",
        "cover": "./35.jpg"
    },
    {
        "title": "恶霸末日",
        "region": "中国大陆",
        "type": "电影",
        "year": "1997",
        "genre": "剧情,犯罪,惊悚",
        "tags": "反腐 经典老片 写实 悲剧",
        "url": "./movie-1986.html",
        "cover": "./36.jpg"
    },
    {
        "title": "巴黎梦想家",
        "region": "法国",
        "type": "电影",
        "year": "2019",
        "genre": "剧情,爱情",
        "tags": "艺术 北漂(法版) 理想 浪漫",
        "url": "./movie-1987.html",
        "cover": "./37.jpg"
    },
    {
        "title": "球王艳福",
        "region": "中国香港",
        "type": "电影",
        "year": "1992",
        "genre": "喜剧/情色",
        "tags": "港产片 足球题材 风月无边 荒诞夸张 屌丝逆袭",
        "url": "./movie-1988.html",
        "cover": "./38.jpg"
    },
    {
        "title": "爱的永恒欢乐",
        "region": "美国",
        "type": "电影",
        "year": "2024",
        "genre": "科幻、爱情",
        "tags": "时间循环 AI 伦理 催泪",
        "url": "./movie-1989.html",
        "cover": "./39.jpg"
    },
    {
        "title": "喵有卵用第三季",
        "region": "中国大陆",
        "type": "动画剧集",
        "year": "2024",
        "genre": "喜剧,奇幻",
        "tags": "猫咪 无厘头 打工日常 神仙打架",
        "url": "./movie-1990.html",
        "cover": "./40.jpg"
    },
    {
        "title": "雌雄斗智",
        "region": "香港",
        "type": "电影",
        "year": "1984",
        "genre": "喜剧,犯罪,爱情",
        "tags": "斗智 盗窃 男女对决 神偷 搞笑",
        "url": "./movie-1991.html",
        "cover": "./41.jpg"
    },
    {
        "title": "铁证悬案第一季",
        "region": "美国",
        "type": "电视剧",
        "year": "2024",
        "genre": "犯罪/悬疑/剧情",
        "tags": "冤案 回忆 单元剧 女性主角",
        "url": "./movie-1992.html",
        "cover": "./42.jpg"
    },
    {
        "title": "轩辕大帝",
        "region": "中国大陆",
        "type": "电影",
        "year": "2026",
        "genre": "奇幻,动作",
        "tags": "上古神话 黄帝 机甲 文明起源",
        "url": "./movie-1993.html",
        "cover": "./43.jpg"
    },
    {
        "title": "巴黎颂纽约情",
        "region": "法国/美国",
        "type": "电影",
        "year": "2026",
        "genre": "爱情/剧情",
        "tags": "异国恋 艺术圈 时差 北漂",
        "url": "./movie-1994.html",
        "cover": "./44.jpg"
    },
    {
        "title": "小矮人",
        "region": "欧洲",
        "type": "电影",
        "year": "2025",
        "genre": "剧情/奇幻/社会",
        "tags": "侏儒症 工业小镇 魔幻现实主义",
        "url": "./movie-1995.html",
        "cover": "./45.jpg"
    },
    {
        "title": "夺魂电影",
        "region": "中国香港",
        "type": "电影",
        "year": "2002",
        "genre": "恐怖,悬疑",
        "tags": "邪典 电影院 诅咒 录像带",
        "url": "./movie-1996.html",
        "cover": "./46.jpg"
    },
    {
        "title": "兰若行者",
        "region": "中国香港",
        "type": "电影",
        "year": "2027",
        "genre": "奇幻/恐怖",
        "tags": "道士 千年树妖 前世今生 黑吃黑",
        "url": "./movie-1997.html",
        "cover": "./47.jpg"
    },
    {
        "title": "恋爱中的厨师",
        "region": "法国",
        "type": "电影",
        "year": "2022",
        "genre": "爱情/喜剧",
        "tags": "美食 冤家 米其林",
        "url": "./movie-1998.html",
        "cover": "./48.jpg"
    },
    {
        "title": "囧爸",
        "region": "中国",
        "type": "电影",
        "year": "2025",
        "genre": "家庭喜剧片",
        "tags": "带娃 反差萌 公路",
        "url": "./movie-1999.html",
        "cover": "./49.jpg"
    },
    {
        "title": "蝙蝠别墅",
        "region": "中国香港",
        "type": "电影",
        "year": "2024",
        "genre": "惊悚/悬疑/灾难",
        "tags": "密室 病毒 生态报复 豪宅 倒计时",
        "url": "./movie-2000.html",
        "cover": "./50.jpg"
    }
];

function startExperience() {
    const music = document.getElementById('bg-music');
    music.play().catch(e => console.log("Audio play blocked by browser policy"));
    nextStep(1);
}

function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

// تابع دقیق برای پاشیدن قطرات آب (💦) روی صفحه
function triggerWaterSplash() {
    const splashEl = document.getElementById('water-splash-effect');
    
    // پاک کردن کلاس قبلی برای اجرای مجدد انیمیشن در خطاهای بعدی
    splashEl.classList.remove('active');
    void splashEl.offsetWidth; // ریست کردن انیمیشن در مرورگر
    
    splashEl.classList.add('active');
    
    setTimeout(() => {
        splashEl.classList.remove('active');
    }, 700);
}

// لیست ۱۰ پیشنهاد خنده‌دار برای متن دکمه پاپ‌آپ
const popupBtnTexts = [
    "من کص‌خلم، باز امتحان می‌کنم 🤡",
    "یبار دیگگگگگگگه 😭😂",
    "نمیخواممممممم 😤",
    "گوه خوردم، ببرم عقب 🤦‍♂️",
    "ای بابا، بازم اشتباه زدم؟ 😑",
    "اشکالی نداره من لج‌بازم 🚀",
    "بی‌خیال این گندکاری، دوباره! 🤡",
    "غلط کردم، حلش می‌کنم 😎",
    "دوباره میزنم این دفعه حدهههه 🔥",
    "اصلا عقل تو کله من نیست که! 😂"
];

function showPopup(message) {
    document.getElementById('popup-text').innerHTML = message;
    
    // انتخاب تصادفی متن دکمه
    const randomBtnText = popupBtnTexts[Math.floor(Math.random() * popupBtnTexts.length)];
    document.getElementById('popup-btn').innerHTML = randomBtnText;

    document.getElementById('popup-overlay').classList.remove('hidden');
    
    // فعال کردن انیمیشن ریختن آب
    triggerWaterSplash();
}

function closePopup() {
    document.getElementById('popup-overlay').classList.add('hidden');
}

let q1Errors = 0;
const q1Messages = [
    "آخه تو رو چه به این عدد؟ بی‌مغز 😂",
    "اوخیییی  😂😂  هنوزم برات زوده",
    "به همین خیال باش  😏",
    "نه عزیزم، هنوز به جواب نزدیک نشدی  😂",
    "داری شانست رو امتحان می‌کنی یا واقعاً جدی جدی اینو زدی؟ 🤦‍♂️😂",
    "یه بار دیگه فکر کن... البته اگه فکر کردن بلدی  😂",
    "من کم‌کم دارم به هوشت شک می‌کنم  😭😂",
    "جواب درست دقیقاً جلوی چشمته... ولی خب  😐😂",
    "باشه، قبول... این مرحله برای تو خیلی پیشرفته‌ست  😂",
    "هنوز هم؟ 😭  بیا یه نفس بکش، بعد دوباره تلاش کن  😂"
];

function checkQ1() {
    const val = document.getElementById('q1-input').value.trim();

    if (val === "0") {
        showPopup("🎉 بالاخره! نکشیمون باهوشش 😂");
        setTimeout(() => {
            closePopup();
            nextStep(2);
        }, 1500);
    } else {
        let msgIndex = q1Errors < q1Messages.length ? q1Errors : q1Messages.length - 1;
        showPopup(q1Messages[msgIndex]);
        q1Errors++;
    }
}

function checkQ2(option) {
    const nextBtn = document.getElementById('q2-next');

    if (option === 1) {
        showPopup("ای کص‌کش  😂😂 می‌دونستم خودتم می‌خوای!");
    } else if (option === 2) {
        showPopup("نههههه  😂 معلومه دلت نیست!");
    } else if (option === 3) {
        showPopup("می‌موندی حالا...مگه چی می‌خواست بشه؟  😂");
    } else if (option === 4) {
        showPopup("از تو هیچی بعید نیست، سگ سفید  😂😂 (جواب درست!)");
        nextBtn.classList.remove('hidden');
    }
}

function checkQ3(option) {
    const nextBtn = document.getElementById('q3-next');

    if (option === 1) {
        showPopup("گوه نخور کثیییییف  😂");
    } else if (option === 2) {
        showPopup("می‌دونستم می‌دونستم.....من نباید اینو می‌فهمیدم  😂");
    } else if (option === 3) {
        showPopup("فساد چیه شما خیلی بیشتریدی خیلی!");
    } else if (option === 4) {
        showPopup("من زیر بار نمی‌رم!می‌دونم انجامش دادی، ممکن نیست...  ✅");
        nextBtn.classList.remove('hidden');
    }
}

let q4Errors = 0;
const q4WrongMsgs = [
    "جوووون؟ 😂",
    "نه عزیزم، دوباره فکر کن  😂",
    "واقعاً با این اعتمادبه‌نفس جواب دادی؟ 😭",
    "من دیگه چیزی نمی‌گم... خودت یه بار دیگه بخون  😂",
    "نزدیک بود... البته خیلی هم نزدیک نبود  😂",
    "این جواب از کجا اومد؟ 😂",
    "ذهن خلاقی داری، ولی نه  😂",
    "یه کم کمتر باهوش باش لطفاً  😭"
];

function checkQ4() {
    const val = document.getElementById('q4-input').value.trim().toLowerCase();
    const nextBtn = document.getElementById('q4-next');

    if (val === "کون" || val === "کون.") {
        showPopup("🎉 بمال بمالللللل  😂");
        nextBtn.classList.remove('hidden');
    } else {
        let randMsg = q4WrongMsgs[Math.floor(Math.random() * q4WrongMsgs.length)];
        showPopup(randMsg);
        q4Errors++;
    }
}

let q5Errors = 0;
function checkQ5() {
    const val = document.getElementById('q5-input').value.trim();
    const nextBtn = document.getElementById('q5-next');

    if (val === "رقیه") {
        showPopup("🎉به رقیه نخندیم  😂❤️");
        nextBtn.classList.remove('hidden');
    } else {
        q5Errors++;
        if (q5Errors === 1) {
            showPopup("جوووون؟  😂 سه تا عکس گذاشتم، نه سه تا معمای حل‌نشدنی! دوباره نگاه کن.");
        } else if (q5Errors === 2) {
            showPopup("نههههه  😂 این مغزی که این همه ازش تعریف کردم کجاست؟");
        } else if (q5Errors === 3) {
            showPopup("عزیزم...  😭 یه بار دیگه به عکسا نگاه کن، داری آبروی هوشتو می‌بری  😂");
        } else if (q5Errors === 4) {
            showPopup("من دیگه کمکت نمی‌کنم  😌 خودت گفتی باهوشی! ثابتش کن  😂");
        } else {
            showPopup("رقیه  😭😂 فقط همین یه کلمه‌ست... بگو رقیه و نجات پیدا کن!");
        }
    }
}

function checkQ6(option) {
    const extraEl = document.getElementById('q6-extra');
    extraEl.innerHTML = "";

    if (option === 1) {
        showPopup("🎉 هوررررراااا! بهت ۱۰ هزار تومن میدممم  💸😂");
        extraEl.innerHTML = `<button class="md-btn success next-btn" onclick="alert('گول خوردی پوچ بود! 😂')">پیشنهاد بهتر رو ببین  😏</button>`;
    } else if (option === 2) {
        showPopup("🎉 هوررررراااا! این بار ۴۵ هزار تومن  💸💸");
        extraEl.innerHTML = `<button class="md-btn success next-btn" onclick="alert('بازم پوچ! حماقت نکن 😂')">یکی بهتر هم هست؟ 😏</button>`;
    } else if (option === 3) {
        showPopup("😂 هورررررااااا! ۱۵۰ هزار تومن  💸💸💸");
        extraEl.innerHTML = `<button class="md-btn success next-btn" onclick="nextStep('final')">خب ببینیم آخرش چی میشه  😂</button>`;
    } else if (option === 4) {
        showPopup("😂😂😂 گاوات ریدی!<br>این گزینه پوچ ما بودددددد  🤡 فکر کردی هرچی باشه عالیه؟!  😂<br>هیچی گیرت نیومد!");
        setTimeout(() => {
            closePopup();
            nextStep('final');
        }, 3500);
    }
}

function finishExperience() {
    showPopup("دوست داریم در جریان باششششش: ❤️😂");
}

// این تابع وقتی اجرا میشه که ویدیو تا آخر (۱۰ ثانیه) پخش بشه و تموم بشه
function onVideoEnded() {
    // کمی مکث کوتاه (مثلاً نیم ثانیه) بعد از اتمام ویدیو و بعد ورود به چالش
    setTimeout(() => {
        skipWelcome();
    }, 500);
}

// تابع رد کردن یا ورود بعد از اتمام ویدیو
function skipWelcome() {
    const welcomeOverlay = document.getElementById('welcome-overlay');
    
    if (!welcomeOverlay.classList.contains('hidden')) {
        welcomeOverlay.classList.add('hidden');

        // پلی کردن موزیک پس‌زمینه (در صورت وجود)
        const music = document.getElementById('bg-music');
        if (music) {
            music.play().catch(e => console.log("Audio play blocked"));
        }

        // رفتن به مرحله اول سوالات
        nextStep(1);
    }
}
function startQuizFromWelcome() {
    // محو کردن صفحه ولکام
    const welcomeOverlay = document.getElementById('welcome-overlay');
    welcomeOverlay.classList.add('hidden');

    // پلی کردن موزیک پس‌زمینه (در صورت وجود)
    const music = document.getElementById('bg-music');
    if (music) {
        music.play().catch(e => console.log("Audio play blocked by browser policy"));
    }

    // رفتن به مرحله اول سوالات
    nextStep(1);
}

// مدیریت جابجایی بین مراحل
function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

// --- سؤال اول ---
let q1Errors = 0;
const q1Messages = [
    "آخه تو رو چه به این عدد؟ بی‌مغز 😂", // بار اول
    "اوخیییی  😂😂  هنوزم برات زوده", // بار دوم
    "به همین خیال باش  😏", // بار سوم
    "نه عزیزم، هنوز به جواب نزدیک نشدی  😂", // بار چهارم
    "داری شانست رو امتحان می‌کنی یا واقعاً جدی جدی اینو زدی؟ 🤦‍♂️😂", // بار پنجم
    "یه بار دیگه فکر کن... البته اگه فکر کردن بلدی  😂", // بار ششم
    "من کم‌کم دارم به هوشت شک می‌کنم  😭😂", // بار هفتم
    "جواب درست دقیقاً جلوی چشمته... ولی خب  😐😂", // بار هشتم
    "باشه، قبول... این مرحله برای تو خیلی پیشرفته‌ست  😂", // بار نهم
    "هنوز هم؟ 😭  بیا یه نفس بکش، بعد دوباره تلاش کن  😂" // بار دهم به بعد
];

function checkQ1() {
    const val = document.getElementById('q1-input').value.trim();
    const msgEl = document.getElementById('q1-msg');

    if (val === "0") {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "🎉 بالاخره! دیدی تونستی؟ 😂";
        setTimeout(() => {
            nextStep(2);
        }, 1500);
    } else {
        let msgIndex = q1Errors < q1Messages.length ? q1Errors : q1Messages.length - 1;
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = q1Messages[msgIndex];
        q1Errors++;
    }
}

// --- سؤال دوم ---
function checkQ2(option) {
    const msgEl = document.getElementById('q2-msg');
    const nextBtn = document.getElementById('q2-next');

    if (option === 1) {
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = "ای کص‌کش  😂😂 می‌دونستم خودتم می‌خوای!";
    } else if (option === 2) {
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = "نههههه  😂 معلومه دلت نیست!";
    } else if (option === 3) {
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = "می‌موندی حالا...مگه چی می‌خواست بشه؟  😂";
    } else if (option === 4) {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "از تو هیچی بعید نیست، سگ سفید  😂😂 (جواب درست!)";
        nextBtn.classList.remove('hidden');
    }
}

// --- سؤال سوم ---
function checkQ3(option) {
    const msgEl = document.getElementById('q3-msg');
    const nextBtn = document.getElementById('q3-next');

    if (option === 1) {
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = "گوه نخور کثیییییف  😂";
    } else if (option === 2) {
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = "می‌دونستم می‌دونستم.....من نباید اینو می‌فهمیدم  😂";
    } else if (option === 3) {
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = "فساد چیه شما خیلی بیشتریدی خیلی!";
    } else if (option === 4) {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "من زیر بار نمی‌رم!می‌دونم انجامش دادی، ممکن نیست...  ✅";
        nextBtn.classList.remove('hidden');
    }
}

// --- سؤال چهارم ---
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
    const msgEl = document.getElementById('q4-msg');
    const nextBtn = document.getElementById('q4-next');

    if (val === "کون" || val === "کون.") {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "🎉 بالاخره! مغز مبارک روشن شد  😂";
        nextBtn.classList.remove('hidden');
    } else {
        let randMsg = q4WrongMsgs[Math.floor(Math.random() * q4WrongMsgs.length)];
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = randMsg;
        q4Errors++;
    }
}

// --- سؤال پنجم ---
let q5Errors = 0;
function checkQ5() {
    const val = document.getElementById('q5-input').value.trim();
    const msgEl = document.getElementById('q5-msg');
    const nextBtn = document.getElementById('q5-next');

    if (val === "رقیه") {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "🎉 آفرینننن! بالاخره مغز مبارک همکاری کرد  😂❤️";
        nextBtn.classList.remove('hidden');
    } else {
        q5Errors++;
        msgEl.style.color = "#d32f2f";
        if (q5Errors === 1) {
            msgEl.innerHTML = "جوووون؟  😂 سه تا عکس گذاشتم، نه سه تا معمای حل‌نشدنی! دوباره نگاه کن.";
        } else if (q5Errors === 2) {
            msgEl.innerHTML = "نههههه  😂 این مغزی که این همه ازش تعریف کردم کجاست؟";
        } else if (q5Errors === 3) {
            msgEl.innerHTML = "عزیزم...  😭 یه بار دیگه به عکسا نگاه کن، داری آبروی هوشتو می‌بری  😂";
        } else if (q5Errors === 4) {
            msgEl.innerHTML = "من دیگه کمکت نمی‌کنم  😌 خودت گفتی باهوشی! ثابتش کن  😂";
        } else {
            msgEl.innerHTML = "رقیه  😭😂 فقط همین یه کلمه‌ست... بگو رقیه و نجات پیدا کن!";
        }
    }
}

// --- سؤال ششم ---
function checkQ6(option) {
    const msgEl = document.getElementById('q6-msg');
    const extraEl = document.getElementById('q6-extra');
    extraEl.innerHTML = ""; // پاک کردن دکمه‌های قبلی

    if (option === 1) {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "🎉 هوررررراااا! بهت ۱۰ هزار تومن میدممم  💸😂";
        extraEl.innerHTML = `<button class="next-btn" onclick="alert('گول خوردی پوچ بود! 😂')">پیشنهاد بهتر رو ببین  😏</button>`;
    } else if (option === 2) {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "🎉 هوررررراااا! این بار ۴۵ هزار تومن  💸💸";
        extraEl.innerHTML = `<button class="next-btn" onclick="alert('بازم پوچ! حماقت نکن 😂')">یکی بهتر هم هست؟ 😏</button>`;
    } else if (option === 3) {
        msgEl.style.color = "#2e7d32";
        msgEl.innerHTML = "😂 هورررررااااا! ۱۵۰ هزار تومن  💸💸💸";
        extraEl.innerHTML = `<button class="next-btn" onclick="nextStep('final')">خب ببینیم آخرش چی میشه  😂</button>`;
    } else if (option === 4) {
        msgEl.style.color = "#d32f2f";
        msgEl.innerHTML = "😂😂😂 گاوات ریدید!<br>این گزینه پوچ ما بودددددد  🤡 فکر کردی هرچی باشه عالیه؟!  😂<br>هیچی گیرت نیومد!";
        setTimeout(() => {
            nextStep('final');
        }, 3500);
    }
}

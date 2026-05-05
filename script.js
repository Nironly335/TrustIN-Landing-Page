if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

let agreed = false;

function tog() {
  agreed = !agreed;
  document.getElementById('cb').classList.toggle('on', agreed);
  chk();
}

function chk() {
  const go =
    document.getElementById('fn').value.trim() &&
    document.getElementById('ln').value.trim() &&
    document.getElementById('em').value.includes('@') &&
    agreed;
  document.getElementById('sbtn').disabled = !go;
}

['fn', 'ln', 'em'].forEach(id =>
  document.getElementById(id).addEventListener('input', chk)
);

function sub() {
  const fn = document.getElementById('fn').value.trim();
  const ln = document.getElementById('ln').value.trim();
  const em = document.getElementById('em').value.trim();
  const role = document.getElementById('role').value;
  console.log('FIRST NAME:', fn);
  console.log('LAST NAME:', ln);
  console.log('EMAIL:', em);
  console.log('ROLE:', role || '(not specified)');
  document.getElementById('form-body').style.display = 'none';
  document.getElementById('ok').classList.add('show');
}

const C = {
  en: {
    ey: 'Beta · Saxony, Germany',
    h1: 'The legal way to earn in Germany —<br><i>from day one</i>',
    lead: 'Freiberufler registration, student matching, and automatic invoicing — all in one place. Built for foreigners navigating the German system.',
    tp1: 'Officially compliant with German law',
    tp2: 'From registration to income in 7 days',
    tp3: 'Support in English, German and Russian',
    quote: '"Existing platforms leave you alone with German bureaucracy — we answer the question \'am I even allowed to work like this?\' on day one."',
    cite: '— TrustIN founding team, Dresden',
    rcE: 'Sound familiar?',
    rcT: 'Does this sound like you?',
    rc1: "You're already teaching — without contracts, invoices, or official status",
    rc2: 'German bureaucracy feels impossible, and time is running out',
    rc3: "You want to work legally — but don't know where to start",
    hwL: 'How it works',
    hwT: 'Three steps to legal income',
    sn1: 'Step 01', sh1: 'Register as Freiberufler',
    sd1: 'We guide you through German self-employment registration in 30 minutes — step by step, in your language. No lawyers, no confusion.',
    st1: 'Available now',
    sn2: 'Step 02', sh2: 'Earn, invoice, repeat',
    sd2: 'Invoices are generated automatically after every lesson. Archive them or send directly to the Finanzamt — your call.',
    st2: 'Coming soon',
    sn3: 'Step 03', sh3: 'Get matched with students',
    sd3: 'Students in your city search by subject and find you. We handle the matching — you show up and teach what you know.',
    st3: 'Roadmap',
    wbH: 'Ready to start?',
    wbP: "Join the waitlist and be first when TrustIN launches in your city. It's free and takes 30 seconds.",
    wbM: '"We don\'t teach you how to teach. We remove the paperwork between you and your students — so you can spend your time working, not filing."',
    wbA: '— Semyon Mazheika, founder',
    l1: 'First name', l2: 'Last name', l3: 'Email', l4: 'Who are you?',
    r0: 'Choose an option',
    r1: 'Migrant tutor',
    r2: 'Want to start teaching',
    r3: 'Looking for a tutor',
    r4: 'German freelancer',
    ct: 'I agree to the storage and processing of my personal data in accordance with the <a href="#">Privacy Policy</a> (GDPR).',
    btn: 'Join waitlist',
    fine: 'Free to join · No credit card needed',
    okH: "You're on the list",
    okP: "We'll be in touch when TrustIN launches near you.",
    stat1: 'International students<br>in Saxony alone',
    stat2: 'Average time to complete<br>Freiberufler registration',
    stat3: 'From zero to your<br>first legal income',
    fl: '© 2026 TrustIN · Dresden, Saxony',
    fp: 'Privacy Policy',
    p1: 'Anna', p2: 'Müller', p3: 'anna@example.com',
  },
  de: {
    ey: 'Beta · Sachsen, Deutschland',
    h1: 'Legal verdienen in Deutschland —<br><i>ab dem ersten Tag</i>',
    lead: 'Freiberufler-Anmeldung, Schülervermittlung und automatische Rechnungen — alles an einem Ort. Für Ausländer, die das deutsche System navigieren.',
    tp1: 'Rechtlich abgesichert nach deutschem Recht',
    tp2: 'Von der Anmeldung zum Einkommen in 7 Tagen',
    tp3: 'Support auf Englisch, Deutsch und Russisch',
    quote: '„Bestehende Plattformen lassen dich allein mit der deutschen Bürokratie — wir beantworten die Frage „Darf ich das eigentlich?" am ersten Tag."',
    cite: '— TrustIN-Gründungsteam, Dresden',
    rcE: 'Kennst du das?',
    rcT: 'Kommt dir das bekannt vor?',
    rc1: 'Du gibst Nachhilfe — privat, ohne Rechnung, ohne Gewerbeanmeldung',
    rc2: 'Du weißt, dass es einen richtigen Weg gibt — aber der Papierkram hält dich auf',
    rc3: 'Du möchtest offiziell arbeiten — und dein Einkommen behalten',
    hwL: 'So funktioniert es',
    hwT: 'Drei Schritte zu legalem Einkommen',
    sn1: 'Schritt 01', sh1: 'Als Freiberufler anmelden',
    sd1: 'Wir führen dich in 30 Minuten durch die Anmeldung — Schritt für Schritt, in deiner Sprache.',
    st1: 'Jetzt verfügbar',
    sn2: 'Schritt 02', sh2: 'Verdienen, abrechnen, wiederholen',
    sd2: 'Rechnungen automatisch nach jeder Stunde. Archivieren oder direkt ans Finanzamt.',
    st2: 'Demnächst',
    sn3: 'Schritt 03', sh3: 'Schüler finden',
    sd3: 'Schüler in deiner Stadt finden dich nach Fach. Wir kümmern uns um die Vermittlung.',
    st3: 'Roadmap',
    wbH: 'Bereit loszulegen?',
    wbP: 'Trag dich in die Warteliste ein und sei der Erste, wenn TrustIN in deiner Stadt startet.',
    wbM: '„Wir bringen dir nicht das Unterrichten bei. Wir nehmen dir den Papierkram zwischen dir und deinen Schülern ab — damit du arbeitest, statt zu sortieren."',
    wbA: '— Semjon Maschejka, Gründer',
    l1: 'Vorname', l2: 'Nachname', l3: 'E-Mail', l4: 'Wer bist du?',
    r0: 'Bitte wählen',
    r1: 'Ich gebe bereits Nachhilfe',
    r2: 'Ich möchte mit Nachhilfe starten',
    r3: 'Ich suche Nachhilfe',
    r4: 'Deutscher Freiberufler',
    ct: 'Ich stimme der Speicherung meiner Daten gemäß <a href="#">Datenschutzerklärung</a> (DSGVO) zu.',
    btn: 'Eintragen',
    fine: 'Kostenlos · Keine Kreditkarte',
    okH: 'Du bist dabei',
    okP: 'Wir melden uns, wenn TrustIN in deiner Stadt startet.',
    stat1: 'Internationale Studierende<br>allein in Sachsen',
    stat2: 'Durchschnittliche Zeit für die<br>Freiberufler-Anmeldung',
    stat3: 'Von null bis zum<br>ersten legalen Einkommen',
    fl: '© 2026 TrustIN · Dresden, Sachsen',
    fp: 'Datenschutz',
    p1: 'Anna', p2: 'Müller', p3: 'anna@beispiel.de',
  },
  ru: {
    ey: 'Бета · Саксония, Германия',
    h1: 'Легальный заработок в Германии —<br><i>с первого дня</i>',
    lead: 'Регистрация Freiberufler, поиск учеников и автоматические счета — всё в одном месте. Создано для иностранцев в немецкой системе.',
    tp1: 'Официально и в соответствии с немецким законом',
    tp2: 'От регистрации до дохода за 7 дней',
    tp3: 'Поддержка на английском, немецком и русском',
    quote: '«Существующие платформы оставляют вас один на один с немецкой бюрократией — мы отвечаем на вопрос «а я вообще имею право так работать?» в первый же день.»',
    cite: '— Команда основателей TrustIN, Дрезден',
    rcE: 'Это про тебя?',
    rcT: 'Узнай себя',
    rc1: 'Ты уже преподаёшь — без договора, без счетов, без официального статуса',
    rc2: 'Немецкая бюрократия непонятна, а время поджимает',
    rc3: 'Ты хочешь работать легально — но не знаешь с чего начать',
    hwL: 'Как это работает',
    hwT: 'Три шага до легального дохода',
    sn1: 'Шаг 01', sh1: 'Регистрация Freiberufler',
    sd1: 'Проведём через каждый шаг за 30 минут — на вашем языке. Никаких юристов, никакой путаницы.',
    st1: 'Уже доступно',
    sn2: 'Шаг 02', sh2: 'Зарабатывать и выставлять счета',
    sd2: 'Счета формируются автоматически после каждого урока. В архив или сразу в Finanzamt.',
    st2: 'Скоро',
    sn3: 'Шаг 03', sh3: 'Найти учеников',
    sd3: 'Ученики в вашем городе ищут по предмету и находят вас. Мы делаем связку.',
    st3: 'В планах',
    wbH: 'Готовы начать?',
    wbP: 'Вступайте в список ожидания и получите доступ первыми, когда мы запустимся в вашем городе.',
    wbM: '«Мы не учим тебя преподавать. Мы убираем бюрократию между тобой и учеником — чтобы ты тратил время на работу, а не на бумаги.»',
    wbA: '— Семён Мажейка, основатель',
    l1: 'Имя', l2: 'Фамилия', l3: 'Email', l4: 'Кто ты?',
    r0: 'Выбери вариант',
    r1: 'Репетитор-мигрант',
    r2: 'Хочу начать преподавать',
    r3: 'Ищу репетитора',
    r4: 'Немецкий фрилансер',
    ct: 'Я согласен(а) на хранение и обработку моих персональных данных согласно <a href="#">Политике конфиденциальности</a> (GDPR).',
    btn: 'Записаться',
    fine: 'Бесплатно · Без карты',
    okH: 'Вы в списке',
    okP: 'Напишем, когда TrustIN запустится в вашем городе.',
    stat1: 'Иностранных студентов<br>только в Саксонии',
    stat2: 'Среднее время регистрации<br>Freiberufler',
    stat3: 'От нуля до первого<br>легального дохода',
    fl: '© 2026 TrustIN · Дрезден, Саксония',
    fp: 'Конфиденциальность',
    p1: 'Анна', p2: 'Мюллер', p3: 'anna@example.com',
  },
  uk: {
    ey: 'Бета · Саксонія, Німеччина',
    h1: 'Легальний заробіток у Німеччині —<br><i>з першого дня</i>',
    lead: 'Реєстрація Freiberufler, пошук учнів та автоматичні рахунки — все в одному місці. Створено для іноземців у німецькій системі.',
    tp1: 'Офіційно та відповідно до законодавства Німеччини',
    tp2: 'Від реєстрації до доходу за 7 днів',
    tp3: 'Підтримка англійською, німецькою та російською',
    quote: '«Існуючі платформи залишають вас сам на сам з німецькою бюрократією — ми відповідаємо на питання «а я взагалі маю право так працювати?» в перший же день.»',
    cite: '— Команда засновників TrustIN, Дрезден',
    rcE: 'Це про тебе?',
    rcT: 'Впізнай себе',
    rc1: 'Ти вже викладаєш — без договору, без рахунків, без офіційного статусу',
    rc2: 'Німецька бюрократія незрозуміла, а час підганяє',
    rc3: 'Ти хочеш працювати легально — але не знаєш з чого почати',
    hwL: 'Як це працює',
    hwT: 'Три кроки до легального доходу',
    sn1: 'Крок 01', sh1: 'Реєстрація Freiberufler',
    sd1: 'Проведемо через кожен крок за 30 хвилин — вашою мовою. Жодних юристів, жодної плутанини.',
    st1: 'Вже доступно',
    sn2: 'Крок 02', sh2: 'Заробляти і виставляти рахунки',
    sd2: 'Рахунки формуються автоматично після кожного уроку. В архів або одразу до Finanzamt.',
    st2: 'Незабаром',
    sn3: 'Крок 03', sh3: 'Знайти учнів',
    sd3: 'Учні у вашому місті шукають за предметом і знаходять вас. Ми робимо зв\'язку.',
    st3: 'У планах',
    wbH: 'Готові почати?',
    wbP: 'Вступайте до списку очікування та отримайте доступ першими, коли ми запустимося у вашому місті.',
    wbM: '«Ми не вчимо тебе викладати. Ми прибираємо бюрократію між тобою та учнем — щоб ти витрачав час на роботу, а не на папери.»',
    wbA: '— Семен Мажейка, засновник',
    l1: 'Ім\'я', l2: 'Прізвище', l3: 'Email', l4: 'Хто ти?',
    r0: 'Обери варіант',
    r1: 'Репетитор-мігрант',
    r2: 'Хочу почати викладати',
    r3: 'Шукаю репетитора',
    r4: 'Німецький фрілансер',
    ct: 'Я погоджуюся зі зберіганням та обробкою моїх персональних даних відповідно до <a href="#">Політики конфіденційності</a> (GDPR).',
    btn: 'Записатися',
    fine: 'Безкоштовно · Без картки',
    okH: 'Ви у списку',
    okP: 'Напишемо, коли TrustIN запуститься у вашому місті.',
    stat1: 'Іноземних студентів<br>лише в Саксонії',
    stat2: 'Середній час реєстрації<br>Freiberufler',
    stat3: 'Від нуля до першого<br>легального доходу',
    fl: '© 2026 TrustIN · Дрезден, Саксонія',
    fp: 'Конфіденційність',
    p1: 'Ганна', p2: 'Мюллер', p3: 'hanna@example.com',
  },
};

function sl(l, btn) {
  if (!C[l]) return;
  try { localStorage.setItem('trustin-lang', l); } catch (e) { /* private mode */ }
  document.querySelectorAll('.lb').forEach(b => b.classList.remove('on'));
  const target = btn || document.querySelector(`.lb[data-lang="${l}"]`);
  if (target) target.classList.add('on');
  const c = C[l];
  const s = (id, v) => { const e = document.getElementById(id); if (e) e.innerHTML = v; };
  s('ey', c.ey); s('h1', c.h1); s('lead', c.lead);
  s('tp1', c.tp1); s('tp2', c.tp2); s('tp3', c.tp3);
  s('quote', c.quote); s('cite', c.cite);
  s('rc-eyebrow', c.rcE); s('rc-title', c.rcT);
  s('rc1', c.rc1); s('rc2', c.rc2); s('rc3', c.rc3);
  s('hw-label', c.hwL); s('hw-title', c.hwT);
  s('sn1', c.sn1); s('sh1', c.sh1); s('sd1', c.sd1); s('st1', c.st1);
  s('sn2', c.sn2); s('sh2', c.sh2); s('sd2', c.sd2); s('st2', c.st2);
  s('sn3', c.sn3); s('sh3', c.sh3); s('sd3', c.sd3); s('st3', c.st3);
  s('wb-h', c.wbH); s('wb-p', c.wbP);
  s('wb-mission', c.wbM); s('wb-author', c.wbA);
  s('l1', c.l1); s('l2', c.l2); s('l3', c.l3); s('l4', c.l4); s('ctt', c.ct);
  s('r0', c.r0); s('r1', c.r1); s('r2', c.r2); s('r3', c.r3); s('r4', c.r4);
  document.getElementById('sbtn').innerHTML = c.btn;
  s('fine', c.fine);
  s('ok-h', c.okH); s('ok-p', c.okP);
  s('stat1', c.stat1); s('stat2', c.stat2); s('stat3', c.stat3);
  s('fl', c.fl); s('fp', c.fp);
  document.getElementById('fn').placeholder = c.p1;
  document.getElementById('ln').placeholder = c.p2;
  document.getElementById('em').placeholder = c.p3;
  if (typeof replayFadeIns === 'function') replayFadeIns();
}

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));

function replayFadeIns() {
  const els = document.querySelectorAll('.fade-in');
  els.forEach(el => el.classList.remove('visible'));
  requestAnimationFrame(() => requestAnimationFrame(() => {
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }));
}

(function initLang() {
  let saved;
  try { saved = localStorage.getItem('trustin-lang'); } catch (e) { /* private mode */ }
  if (saved && C[saved]) { sl(saved); return; }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  sl(C[browser] ? browser : 'en');
})();

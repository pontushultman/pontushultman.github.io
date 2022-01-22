
"use strict";

let hiRef;
let prisRef;
let mottagningarRef;
let testerRef;
let omRef;
let kontaktRef;
let priserh2Ref;
let priserh4Ref;
let antigenHeaderRef;
let antigenparagraphRef;
let antikroppHeaderRef;
let antikroppParagraphRef;
let pcrHeaderRef;
let pcrParagraphRef;
let erbjudandeHeaderRef;
let erbjudandeParagraphRef;
let ourReceptionsRef;
let ourReceptionsParagraphRef;
let openTrelleborgRef;
let openTrelleborgParagraphRef;
let openYstadRef;
let openYstadParagraphRef;
let openLundRef;
let openLundParagraphRef;
let ourTestsRef;
let ourTestsParagraphRef;
let covidbevisHeaderRef;
let covidbevisParagraphRef1;
let covidbevisParagraphRef2;
let covidbevisParagraphRef3;
let antigentestHeaderRef1;
let antigentestParagraphRef1;
let antigentestParagraphRef2;
let antigentestParagraphRef3;
let antigentestParagraphRef4;
let antikroppHeaderRef1;
let antikroppParagraphRef1;
let antikroppParagraphRef2;
let pcrHeaderRef1;
let pcrParagraphRef1;
let pcrParagraphRef2;
let pcrParagraphRef3;
let omHeaderRef1;
let omParagraphRef1;
let kvalificieradHeaderRef1;
let kvalificeradParagraph1;
let viRef1;
let viParagraph1;
let labRef1;
let labParagraph1;
let contactRef1;
let formHeaderRef1;
let formParagraphRef1;
let yourNameRef;
let yourMailRef;
let yourPhoneRef;
let messageRef;
let sendRef;


window.addEventListener("load", () => {

    hiRef = document.getElementById("hiRef");
    prisRef = document.getElementById("prisRef");
    mottagningarRef = document.getElementById("mottagningarRef");
    testerRef = document.getElementById("testerRef");
    omRef = document.getElementById("omRef");
    kontaktRef = document.getElementById("kontaktRef");
    priserh2Ref = document.getElementById("priserh2");
    priserh4Ref = document.getElementById("priserh4");
    antigenHeaderRef = document.getElementById("antigenHeader");
    antigenparagraphRef = document.getElementById("antigentestParagraph");
    antikroppHeaderRef = document.getElementById("antikroppHeader");
    antikroppParagraphRef = document.getElementById("antikroppParagraph");
    pcrHeaderRef = document.getElementById("pcrHeader");
    pcrParagraphRef = document.getElementById("pcrParagraph");
    erbjudandeHeaderRef = document.getElementById("erbjudandeHeader");
    erbjudandeParagraphRef = document.getElementById("erbjudandeParagraph");
    ourReceptionsRef = document.getElementById("ourReceptions");
    ourReceptionsParagraphRef = document.getElementById("ourReceptionsParagraph");
    openTrelleborgRef = document.getElementById("openTrelleborg");
    openYstadRef = document.getElementById("openYstad");
    openLundRef = document.getElementById("openLund");
    ourTestsRef = document.getElementById("ourTests");
    ourTestsParagraphRef = document.getElementById("ourTestsParagraph");
    covidbevisHeaderRef = document.getElementById("covidbevisHeader");
    covidbevisParagraphRef1 = document.getElementById("covidbevisParagraphRef1");
    covidbevisParagraphRef2 = document.getElementById("covidbevisParagraphRef2");
    covidbevisParagraphRef3 = document.getElementById("covidbevisParagraphRef3");
    antigentestHeaderRef1 = document.getElementById("antigenHeader1");
    antigentestParagraphRef1 = document.getElementById("antigenParagraph1");
    antigentestParagraphRef2 = document.getElementById("antigenParagraph2");
    antigentestParagraphRef3 = document.getElementById("antigenParagraph3");
    antigentestParagraphRef4 = document.getElementById("antigenParagraph4");
    antikroppHeaderRef1 = document.getElementById("antikroppHeader1");
    antikroppParagraphRef1 = document.getElementById("antikroppParagraph1");
    antikroppParagraphRef2 = document.getElementById("antikroppParagraph2");
    pcrHeaderRef1 = document.getElementById("pcrHeader1");
    pcrParagraphRef1 = document.getElementById("pcrParagraph1");
    pcrParagraphRef2 = document.getElementById("pcrParagraph2");
    pcrParagraphRef3 = document.getElementById("pcrParagraph3");
    omHeaderRef1 = document.getElementById("omHeader1");
    omParagraphRef1 = document.getElementById("omParagraph1");
    kvalificieradHeaderRef1 = document.getElementById("kvalHeader1");
    kvalificeradParagraph1 = document.getElementById("kvalParagraph1");
    viRef1 = document.getElementById("viHeader1");
    viParagraph1 = document.getElementById("viParagraph1");
    labRef1 = document.getElementById("labHeader1");
    labParagraph1 = document.getElementById("labParagraph1");
    contactRef1 = document.getElementById("contactHeader");
    formHeaderRef1 = document.getElementById("formHeader1");
    formParagraphRef1 = document.getElementById("formParagraph1");
    yourNameRef = document.getElementById("name");
    yourMailRef = document.getElementById("email");
    yourPhoneRef = document.getElementById("phone");
    messageRef = document.getElementById("message");
    sendRef = document.getElementById("formSend")


    document.getElementById("en").addEventListener("click", function() {
        changeLanguage(language.en); 
    });
    document.getElementById("se").addEventListener("click", function() {
        changeLanguage(language.se);
    });

});

function changeLanguage(language) {
    hiRef.textContent = language.hi;
    prisRef.textContent = language.pris;
    mottagningarRef.textContent = language.mottagningar;
    testerRef.textContent = language.tester;
    omRef.textContent = language.om;
    kontaktRef.textContent = language.kontakt;
    priserh2Ref.textContent = language.priserh2;
    priserh4Ref.textContent = language.priserh4;
    antigenHeaderRef.textContent = language.antigentest;
    antigenparagraphRef.innerHTML = language.antigenparagraph;
    antikroppHeaderRef.textContent = language.antikropptest;
    antikroppParagraphRef.innerHTML = language.antikroppparagraph;
    pcrHeaderRef.textContent = language.pcrtest;
    pcrParagraphRef.innerHTML = language.pcrtestparagraph;
    erbjudandeHeaderRef.textContent = language.offer;
    erbjudandeParagraphRef.innerHTML = language.offerParagraph;
    ourReceptionsRef.textContent = language.ourReceptions;
    ourReceptionsParagraphRef.textContent = language.ourReceptionsParagraph;
    openTrelleborgRef.innerHTML = language.openTrelleborg;
    openYstadRef.innerHTML = language.openYstad;
    openLundRef.innerHTML = language.openLund;
    ourTestsRef.textContent = language.ourTests;
    ourTestsParagraphRef.textContent = language.ourTestsParagraph;
    covidbevisHeaderRef.textContent = language.covidCert;
    covidbevisParagraphRef1.textContent = language.covidCertParagraph1;
    covidbevisParagraphRef2.textContent = language.covidCertParagraph2;
    covidbevisParagraphRef3.textContent = language.covidCertParagraph3;
    antigentestHeaderRef1.textContent = language.antigenHeader1;
    antigentestParagraphRef1.textContent = language.antigenParagraph1;
    antigentestParagraphRef2.textContent = language.antigenParagraph2;
    antigentestParagraphRef3.textContent = language.antigenParagraph3;
    antigentestParagraphRef4.textContent = language.antigenParagraph4;
    antikroppHeaderRef1.textContent = language.antikroppHeader1;
    antikroppParagraphRef1.textContent = language.antikroppParagraph1;
    antikroppParagraphRef2.textContent = language.antikroppParagraph2;
    pcrHeaderRef1.textContent = language.pcrHeader1;
    pcrParagraphRef1.textContent = language.pcrParagraph1;
    pcrParagraphRef2.textContent = language.pcrParagraph2;
    pcrParagraphRef3.textContent = language.pcrParagraph3;
    omHeaderRef1.textContent = language.omOssHeader1;
    omParagraphRef1.textContent = language.omOssParagraph1;
    kvalificieradHeaderRef1.textContent = language.kvalPersonal;
    kvalificeradParagraph1.textContent = language.kvalPersonalParagraph;
    viRef1.textContent = language.viFinns;
    viParagraph1.textContent = language.viFinnsParagraph;
    labRef1.textContent = language.ourLabsHeader;
    labParagraph1.textContent = language.ourLabsParagraph;
    contactRef1.textContent = language.mailContact;
    formHeaderRef1.textContent = language.formContact;
    formParagraphRef1.textContent = language.formParagraph;
    yourNameRef.placeholder = language.formName;
    yourMailRef.placeholder = language.formMail;
    yourPhoneRef.placeholder = language.formPhone;
    messageRef.placeholder = language.formMsg;
    sendRef.textContent = language.formSend;

}

var language = {
    en: {
        hi: "Your place for Covid-19 testing.",
        pris: "Prices",
        mottagningar: "Receptions",
        tester: "Tests",
        om: "About",
        kontakt: "Contact",
        priserh2: "Prices",
        priserh4: "All our tests are issued by licensed doctors.",
        antigentest: "Antigen test (rapid test)",
        antigenparagraph: "395kr with certificate." + '<br>' + "Children under 12 years: 245kr" + '<br>' + "Response time within 15 minutes.",
        antikropptest: "Antibody test",
        antikroppparagraph: "299kr with certificate" + '<br>' + "Response time within 15 minutes.",
        pcrtest: "PCR-test (throat test)",
        pcrtestparagraph: "1295 kr with certificate." + '<br>' + "If you take test before 14:00 response the same day.",
        offer: "Limited offer",
        offerParagraph: "Antigen test (rapid test)" + '<br>' + "Under 18 and students: 195 kr" + '<br>' + "Adults (18+): 295 kr" + "<br>" + "Not valid for travel, only health certificate",
        ourReceptions: "Our receptions",
        ourReceptionsParagraph: "Contact us at support@innovac.se (7:00 - 22:00 | +46 709 13 18 13 | We only have drop-in",
        openTrelleborg: '<b>' + "Opening hours:" + '</b>' + '<br>' + "Monday, Tuesday: 12:00 - 21:30" + '<br>' + "Wednesday, Thursday: 09:30 - 21:30" + '<br>' + "Friday: 06:30 - 21:30" + '<br>' + "Saturday: 08:00 - 21:30" + '<br>' + "Sunday: 11:00 - 21:30",
        openYstad: '<b>' + "Opening hours:" + '</b>' + '<br>' + "Monday to Sunday: 10:00 - 21:00",
        openLund: '<b>' + "Opening hours:" + '</b>' + '<br>' + "Monday to Friday: 09:00 - 17:00" + '<br>' + "Saturday: 10:00 - 15:00" + '<br>' + "Sunday: 11:00 - 16:00",
        ourTests: "Our tests",
        ourTestsParagraph: "If you are going to travel: What rules apply to your destination may vary from day to day and we therefore encourage our customers to continuously check what rules apply to your particular trip. You will receive the right information at the embassy of the country of entry.",
        covidCert: "Covid certificate",
        covidCertParagraph1: "We are affiliated with the E-Health Authority's e-service \" Covidbevis \". This means that negative tests that we issue for Covid-19 can be stored (if you wish) as a covid certificate at the e-health authority.",
        covidCertParagraph2: "You must have a digital mailbox on kivra in order to receive your proof. You can then use the Covid certificate when travelling within Europe",
        covidCertParagraph3: "The above applies to all our clinics and for antigen tests and PCR tests.",
        antigenHeader1: "Antigen test (rapid test)",
        antigenParagraph1: "An antigen test is intended to detect the presence of viruses and is a method for detecting an ongoing infection with COVID-19. The test is a quick test with a response of 15 minutes. An antigen test is an excellent screening test.",
        antigenParagraph2: "The antigen test we use is from German NADAL and has a very high specificity (>99.9%). This means that the probability of getting a negative response if you do not have COVID-19 is minimal. A positive response should be confirmed with a PCR, as false positive responses may occur due to cross-reactivity with other viruses.",
        antigenParagraph3: "The test result may be positive or negative. No level of viral levels is determined with this sample.",
        antigenParagraph4: "The certificate is issued in English and contains the signature and stamp of a licensed doctor. It is equipped with QR code and is very difficult to counterfeit. Test results and medical certificates were sent out immediately.",
        antikroppHeader1: "Antibody test",
        antikroppParagraph1: "An IgG/IgM antibody test can show if you have a recent or had a previous coronavirus infection. IgG – a so-called memory antibody, forms part of our immunity. If you have IgG, you have a protection that probably lasts this season and can stay in risk groups according to the Public Health Agency of Sweden. IgM, acute antibodies, indicates a recent infection.",
        antikroppParagraph2: "Quick tests are taken with a simple prick in the finger. The blood is sucked up into a pipette and dripped into the test cassette together with reagents. If you want to measure levels of antibodies in the blood, we will assist with it for venous sampling. Our sampler will explain what your answer means for you. We use antibody tests from Healgen. The antibody tests meet the Public Health Agency of Sweden's performance requirements for rapid tests. Rapid tests for antibodies are screening tests, and a concentration determination of antibodies is always recommended in case of positive test results.",
        pcrHeader1: "PCR-test (test for traveling)",
        pcrParagraph1: "A PCR test detects the presence of viruses in the mucous membrane and is the most safe way to assess whether there is an active viral infection. However, the test cannot distinguish between infectious and non-contagious virus in the mucous membrane and can thus be positive from 2 days before the onset of symptoms up to about 3 weeks after a healed infection. If the test is positive, the rules are such that you are not allowed to travel.",
        pcrParagraph2: "The certificate is signed by our licensed doctor and provided with a QR code so that it can be verified online worldwide. The certificate is very difficult to falsify. The result can be Negative, Positive or Non-Analyzeable. The prevalence of non-analyzeable responses in us is less than 0.4%. If this happens, the laboratory will re-run the analysis free of charge the same evening. If the overtaking is also non-analyzeable and this leads to a new sample needing to be taken, it is also free of charge, but we are not responsible for additional costs incurred in such a situation.",
        pcrParagraph3: "The certificate is issued in English and contains the signature and stamp of a licensed doctor. Make sure to have at least 6h margin from test response to departure.",
        omOssHeader1: "About us",
        omOssParagraph1: "InnoVacc performs preventive medical sampling for private individuals and company employees.",
        kvalPersonal: "Qualified healthcare professional",
        kvalPersonalParagraph: "We only use qualified healthcare professionals, where all doctors are licensed by the National Board of Health and Welfare. We are also under the Supervision of the Health and Social Care Inspectorate (IVO).",
        viFinns: "We are here for you",
        viFinnsParagraph: "Our purpose is to confirm individuals' ability to act in terms of work and travel, and therefore issue licensed certificates as proof that you are healthy.",
        ourLabsHeader: "Our laboratories and tests",
        ourLabsParagraph: "We only use tests and laboratory operations that comply with the Public Health Agency of Sweden's requirements for your safety",
        mailContact: "mail: support@innovacc.se (7-22) | phone: +46 709 13 18 13 | innovacc.se",
        formContact: "Contact us",
        formParagraph: "We usually respond within 24 hours. Can also be reached at + 46 709 13 18 13",
        formName: "Your name *",
        formMail: "Your mail *",
        formPhone: "Your phonenumber *",
        formMsg: "Message *",
        formSend: "Send message"

     }, 
     se: {
        hi: "Din testmottagning för Covid-19.",
        pris: "Priser",
        mottagningar: "Mottagningar",
        tester: "Tester",
        om: "Om oss",
        kontakt: "Kontakt",
        priserh2: "Priser",
        priserh4: "Alla våra tester är utfärdade av legitimerade läkare.",
        antigentest: "Antigentest (snabbtest)",
        antigenparagraph: "395kr inkl intyg." + '<br>' + "Barn under 12 år: 245kr" + '<br>' + "Svarstid inom 15 minuter.",
        antikropptest: "Antikropptest",
        antikroppparagraph: "299kr inkl intyg." + '<br>' + "Svarstid inom 15 minuter.",
        pcrtest: "PCR-test (svalgprov)",
        pcrtestparagraph: "1295 kr inkl certifikat." + '<br>' + "Svarstid samma dag om du tar testen innan kl 14:00.",
        offer: "Erbjudande",
        offerParagraph: "Antigentest (snabbtest)" + '<br>' + "Barn, ungdom, student: 195 kr" + "<br>" + "Vuxen (18+): 295 kr" + "<br>" + "Gäller ej som resecertifikat, endast friskhetsintyg",
        ourReceptions: "Våra mottagningar",
        ourReceptionsParagraph: "Kontakta oss på support@innovacc.se (7.00 – 22.00) | +46 709 13 18 13 | Vi har enbart drop-in.",
        openTrelleborg: '<b>' + "Öpettider:" + '</b>' + '<br>' + "Måndag, Fredag: 12:00 - 21:30" + '<br>' + "Onsdag, Torsdag: 09:30 - 21:30" + '<br>' + "Fredag: 06:30 - 21:30" + '<br>' + "Lördag: 08:00 - 21:30" + '<br>' + "Söndag: 11:00 - 21:30",
        openYstad: '<b>' + "Öppettider:" + '</b>' + '<br>' + "Måndag till Söndag: 10:00 - 21:00",
        openLund: '<b>' + "Öppettider:" + '</b>' + '<br>' + "Måndag till Fredag: 09:00 - 17:00" + '<br>' + "Lördag: 10:00 - 15:00" + '<br>' + "Söndag: 11:00 - 16:00",
        ourTests: "Våra tester",
        ourTestsParagraph: "Om du skall resa: Vilka regler som gäller för ditt resmål kan variera från dag till dag och vi uppmanar därför våra kunder att kontinuerligt kontrollera vilka regler som gäller för just din resa. Rätt information får du på inreselandets ambassad.",
        covidCert: "Covidbevis",
        covidCertParagraph1: "Vi är anslutna till E-hälsomyndighetens e-tjänst \" Covidbevis \". Detta innebär att negativa tester som vi utfärdar för Covid-19 kan vi (om du önskar) lagra som ett covidbevis på e-hälsomyndigheten.",
        covidCertParagraph2: "Du måste ha en digital brevlåda på kivra för att kunna mottaga ditt bevis. Covidbeviset kan ni sedan använda vid resor inom Europa",
        covidCertParagraph3: "Ovan gäller på våra samtliga mottagningar och vid antigentester och PCR-tester.",
        antigenHeader1: "Antikropptest",
        antigenParagraph1: "Ett antigentest är till för att påvisa förekomst av virus och är en metod för att påvisa en pågående infektion med COVID-19. Testet är ett snabbtest med svar på 15 minuter. Ett antigentest är ett utmärkt screeningprov.",
        antigenParagraph2: "Antigentestet vi använder är från Tyska NADAL och har en mycket hög specificitet (>99.9%). Detta innebär att sannolikheten för att få ett negativt svar om man inte har COVID-19 är minimalt. Ett positivt svar skall bekräftas med ett PCR, då falskt positiva svar kan förekomma på grund av korsreaktivitet med andra virus.",
        antigenParagraph3: "Testresultatet kan vara positivt eller negativt. Ingen nivå av virushalterna bestäms med detta prov.",
        antigenParagraph4: "Certifikatet är utfärdat på engelska och innehåller signatur och stämpel från legitimerad läkare. Det är försett med QR-kod och är mycket svårt att förfalska. Testresultat och läkarintyg sändes ut direkt.",
        antikroppHeader1: "Antikropptest",
        antikroppParagraph1: "Ett IgG-/IgM-antikroppstest kan påvisa om ni har en färsk eller haft en tidigare coronavirusinfektion. IgG – en så kallad minnesantikropp, utgör en del av vår immunitet. Har man IgG har man ett skydd som sannolikt varar denna säsong och kan vistas i riskgrupper enligt Folkhälsomyndigheten. IgM, akutantikroppar, indikerar en färsk infektion.",
        antikroppParagraph2: "Snabbtester tages med enkelt stick i fingret. Blodet sugs upp i en pipett och droppas i testkassetten tillsammans med reagens. Önskar man mäta nivåer av antikroppar i blodet bistår vi med det för venös provtagning. Vår provtagare kommer att förklara vad Ert svar innebär för just er. Vi använder antikroppstester från Healgen. Antikroppstesterna uppfyller Folkhälsomyndigheten prestandakrav för snabbtester. Snabbtester för antikroppar är screeningtester, och en koncentrationsbestämning av antikroppar rekommenderas alltid vid positivt provsvar.",
        pcrHeader1: "PCR-test (resetest)",
        pcrParagraph1: "Ett PCR-test påvisar förekomst av virus i slemhinnan och är det mest säkra sättet att bedöma om det finns en aktiv virusinfektion. Testet kan dock ej skilja på smittsamt och icke smittsamt virus i slemhinnan och kan således vara positivt från 2 dagar före symptomdebut upp till ca 3 veckor efter en utläkt infektion. Är testet positivt är reglerna sådana att man ej får resa.",
        pcrParagraph2: "Intyget är signerat av vår legitimerade läkare och försett med en QR-kod så att det kan verifieras online i hela världen. Intyget är mycket svårt att förfalska. Resultatet kan vara Negativt, Positivt eller Icke Analyserbart. Prevalensen av icke analyserbara svar hos oss är mindre än 0,4%. Om detta sker kör laboratoriet om analysen utan kostnad samma kväll. Om även omkörningen är icke analyserbar och det leder till att ett nytt prov behöver tagas är även det kostnadsfritt, men vi svarar ej för merkostnader som uppkommer i en sådan situation.",
        pcrParagraph3: "Certifikatet är utfärdat på engelska och innehåller signatur och stämpel från legitimerad läkare. Se till att ha minst 6h marginal från testsvar till avresa.",
        omOssHeader1: "Om oss",
        omOssParagraph1: "InnoVacc utför preventiv medicinsk provtagning för privatpersoner och företags anställda.",
        kvalPersonal: "Kvalificierad vårdpersonal",
        kvalPersonalParagraph: "Vi använder oss bara av kvalificierad vårdpersonal, där alla läkare är legitimerade av socialstyrelsen. Vi står även under Inspektionen för Vård och Omsorgs (IVO) tillsyn.",
        viFinns: "Vi finns för dig",
        viFinnsParagraph: "Vårat syfte är att bekräfta individers möjlighet att agera i termer av arbete och resor, och utfärdar därav legitimerade intyg som bevis för att Du är frisk.",
        ourLabsHeader: "Våra laboratorier och tester",
        ourLabsParagraph: "Vi använder oss enbart av tester och laboratier som följer Folkhälsomyndighetens krav för din trygghet.",
        mailContact: "mail: support@innovacc.se (7-22) | telefon: +46 709 13 18 13 | innovacc.se",
        formContact: "KONTAKTA OSS",
        formParagraph: "Vi svarar vanligtvis inom ett dygn. Kan även nås på +46 709 13 18 13",
        formName: "Ditt namn *",
        formMail: "Din mail *",
        formPhone: "Ditt telefonnummer *",
        formMsg: "Meddelande *",
        formSend: "Skicka meddelande"


    }
};



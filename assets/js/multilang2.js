const switchLanguage = (code) => {
  const languages = {
    th: {
      nav_programming: "โปรแกรมมิ่ง",
      nav_programming_nav: "โปรแกรมมิ่ง",
      nav_graphic: "กราฟฟิก",
      nav_graphic_nav: "กราฟฟิก",
      nav_activity: "กิจกรรม",
      nav_activity_nav: "กิจกรรม",

      experience_subtitle: "ขอบคุณที่รับชม",
      experience_title: "โปรแกรมมิ่ง",
      experience_1_title: "การฝึกงาน ทำหลังบ้านดูแลเซิฟเวอร์เกม",
      experience_1_subtitle: "ผมได้ลองฝึกงานในฐานะนักพัฒนาเกมส่วนหน้าและแบ็กเอนด์สําหรับเกมที่ชื่อว่า Fivem ซึ่งเป็นแพลตฟอร์มออนไลน์ที่ทํางานผ่านเกม GTA V",
      experience_2_title: "แอปพลิเคชั่นพูดคุย",
      experience_2_subtitle: "ผมได้สร้างแอปพลิเคชั่นสำหรับใช้พูดคุยติดต่อสื่อสาร ส่งเสริมความสัมพันธ์ ภายในโรงเรียน",
      experience_3_title: "แขนหุ่นยนต์",
      experience_3_subtitle: "เขียนฟังชั่นเพื่อให้แขนกลหุ่นยนต์หยิบจับของไปวางไว้ตรงจุดที่กำหนดไว้",
      experience_4_title: "ไซเบอร์ ซีคิวริตี้",
      experience_4_subtitle: "ค้นหาแหล่งที่มาของไฟล์ที่ถูกซ้อนอยู่โดยใช้โปรแกรม Wireshark ใน Kali Linux",
      experience_5_title: "เกมแบบสองมิติ",
      experience_5_subtitle: "สร้างเกมจำลองแนว MMORPG จากบล็อกโค้ด",
      experience_6_title: "แชทบอท",
      experience_6_subtitle: "เขียนแชทบอท สามารถตอบโต้ได้หลายเรื่อง",

      graphics_subtitle: "ขอบคุณที่รับชม",
      graphics_title: "กราฟฟิก",

      activity_subtitle: "ขอบคุณที่รับชม",
      activity_title: "กิจกรรม",
      activity_1_title: "ความเป็นผู้นำ",
      activity_1_subtitle: "ผมได้รับการแต่งตั้งให้เป็นหัวหน้าคณะ คล้ายกับประธานนักศึกษา ตําแหน่งนี้นํามาซึ่งความรับผิดชอบที่เพิ่มขึ้นและภาระงานที่หนักขึ้น",
      activity_2_title: "ค่าย International Award (ขั้นพื้นฐาน)",
      activity_2_subtitle: "กิจกรรมผจญภัย​ที่สอดแทรกความรู้และทักษะ​ต่างๆ เช่น การอนุรักษ์​ป่า ภาวะผู้นำ การผจญภัย​ ทักษะการดำรง​ชีพ​ในป่า การทำงานเป็นทีม เพื่อคัดเลือกนักเรียนที่ผ่านกิจกรรม​เข้าสู่ ระดับขั้น Bronze",
      activity_3_title: "นักกีฬารักบี้",
      activity_3_subtitle: "ผมเป็นนักรักบี้และเคยแข่งขันในรายการต่างๆ เช่น การแข่งขันรักบี้เยาวชนชิงแชมป์ประเทศไทย และการแข่งขันรักบี้นักศึกษา 7 คนระดับประเทศ",
      activity_4_title: "วงโยธวาทิต",
      activity_4_subtitle: "ผมเล่นแซกโซโฟนในวงโยธวาทิตของโรงเรียนและได้รับเกียรติให้แสดงในงานต่างๆ มากมาย รวมถึงงานรับรองพระบาทสมเด็จพระเจ้าอยู่หัว",

    },
    en: {
      nav_programming: "Programming",
      nav_programming_nav: "Programming",
      nav_graphic: "Graphics",
      nav_graphic_nav: "Graphics",
      nav_activity: "Activity",
      nav_activity_nav: "Activity",

      experience_subtitle: "Thank for Watching",
      experience_title: "Programming",
      experience_1_title: "Game Developer Internship",
      experience_1_subtitle: "I tried my hand at interning as a front-end and backend game developer for a game called Fivem, an online platform that works through the GTA V game.",
      experience_2_title: "Community Application",
      experience_2_subtitle: "I have created an application for communication and strengthening relationships within the school.",
      experience_3_title: "Robot Arm",
      experience_3_subtitle: "Write a function so that the robotic arm can grab the object and place it at the designated point.",
      experience_4_title: "Cyber Security",
      experience_4_subtitle: "Find the Source of a Hidden File Using Wireshark in Kali Linux.",
      experience_5_title: "2D Game",
      experience_5_subtitle: "Create MMORPG simulation game with Blockcode.",
      experience_6_title: "Ai Chatter",
      experience_6_subtitle: "Write a chatbot that can respond to many things.",

      graphics_subtitle: "Thank for Watching",
      graphics_title: "Graphics",

      activity_subtitle: "Thank for Watching",
      activity_title: "Activities",
      activity_1_title: "Leadership",
      activity_1_subtitle: "I have been appointed as the head of the faculty, similar to a student president. This position brings increased responsibilities and a heavier workload.",
      activity_2_title: "International Award Camp (Basic)",
      activity_2_subtitle: "Adventure activities that incorporate knowledge and skills such as forest conservation. leadership Adventure, Forest Survival Skills, Teamwork to select students who pass the activity to enter the Bronze level.",
      activity_3_title: "Rugby Player",
      activity_3_subtitle: "I am a rugby player and have competed in events such as the Thailand Youth Rugby Championship and the National Student Rugby 7s Rugby Tournament.",
      activity_4_title: "Marching Band",
      activity_4_subtitle: "I played the saxophone in the school marching band and had the honor of performing at numerous events, including the Royal Reception of His Majesty the King.",

    },
  };
  for (let lang of Object.keys(languages["th"])) {
    document.querySelector(`#${lang}`).innerText = languages[code][lang];
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('clanguage');

    languageSelector.addEventListener('change', function () {
        const selectedLanguage = this.value;
        window.history.pushState({ path: `?lang=${selectedLanguage}` }, '', `?lang=${selectedLanguage}`);
        switchLanguage(selectedLanguage); 
    });

    const initialLanguage = getLanguageFromURL();
    languageSelector.value = initialLanguage;
    switchLanguage(initialLanguage);
});

const getLanguageFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'en'; 
};

document.addEventListener('DOMContentLoaded', () => {
    const languageCode = getLanguageFromURL();
    switchLanguage(languageCode);
});
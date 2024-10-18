const switchLanguage = (code) => {
  const languages = {
    th: {
      nav_about: "เกี่ยวกับผม",
      nav_about_nav: "เกี่ยวกับผม",
      nav_experience: "ประสบการณ์และผลงาน",
      nav_experience_nav: "ประสบการณ์และผลงาน",
      nav_contact: "ช่องทางการติดต่อ",
      nav_contact_nav: "ช่องทางการติดต่อ",

      home_greeting: "สวัสดี ผมชื่อ",
      home_name: "มรรค สุวรรณปฏิกรณ์",
      home_work: "จากโรงเรียนวชิราวุธวิทยาลัย",
      home_scroll: "เลื่อนลง",

      about_title: "เกี่ยวกับผม",
      about_list1: "ความสามารถ",
      about_list2: "งานอดิเรกต่างๆ",
      about_list3: "สถานที่ศึกษา",
      about_detail: "ผมสนใจเกี่ยวกับคอมพิวเตอร์มาตั้งแต่เด็ก โดยเฉพาะในด้านกราฟิกและซอร์สโค้ด ผมพบว่าผมสามารถเรียนรู้หัวข้อเหล่านี้ได้เป็นเวลานานโดยไม่มีปัญหา ดังนั้น ผมจึงอยากศึกษาการเขียนโค้ดอย่างจริงจังและใช้ประโยชน์จากการเรียนรู้เรื่องนี้ให้ได้มากที่สุด",

      experience_title: "ประสบการณ์และผลงานต่างๆ",
      experience_1_title: "การฝึกงาน ทำหลังบ้านดูแลเซิฟเวอร์เกม",
      experience_1_subtitle: "ผมได้ลองฝึกงานในฐานะนักพัฒนาเกมส่วนหน้าและแบ็กเอนด์สําหรับเกมที่ชื่อว่า Fivem ซึ่งเป็นแพลตฟอร์มออนไลน์ที่ทํางานผ่านเกม GTA V",
      experience_2_title: "แอปพลิเคชั่นพูดคุย",
      experience_2_subtitle: "แอปพลิเคชั่นสำหรับใช้พูดคุยติดต่อสื่อสาร ส่งเสริมความสัมพันธ์ ภายในโรงเรียน",
      experience_3_title: "แขนหุ่นยนต์",
      experience_3_subtitle: "เขียนฟังชั่นเพื่อให้แขนกลหุ่นยนต์หยิบจับของไปวางไว้ตรงจุดที่กำหนดไว้",
      experience_4_title: "ไซเบอร์ ซีคิวริตี้",
      experience_4_subtitle: "ค้นหาแหล่งที่มาของไฟล์ที่ถูกซ้อนอยู่โดยใช้โปรแกรม Wireshark ใน Kali Linux",
      experience_5_title: "เกมแบบสองมิติ",
      experience_5_subtitle: "สร้างเกมจำลองแนว MMORPG จากบล็อกโค้ด",
      company_ex_btn: "ดูเพิ่มเติม >",

      contact_title: "ช่องทางการติดต่อ",
      contact_list1: "อีเมล",
      contact_list2: "เบอร์โทรศัพท์",
      contact_list3: "อินสตาแกรม",
      contact_list4: "เฟซบุ๊ก",
      contact_list5: "กิตฮับ",
      contact_1_btn: "อีเมลหาผม >",
      contact_2_btn: "โทรหาผม >",
      contact_3_btn: "ติดตามผม >",
      contact_4_btn: "เพิ่มเพื่อนผม >",
      contact_5_btn: "เพิ่มเพื่อนผม >",
    },
    en: {
      nav_about: "About me",
      nav_about_nav: "About me",
      nav_experience: "Experience &  Activities",
      nav_experience_nav: "Experience &  Activities",
      nav_contact: "Contact",
      nav_contact_nav: "Contact",

      home_greeting: "Hello, I'm",
      home_name: "Mach Suwanpatikorn",
      home_work: "From Vajiravudh College",
      home_scroll: "Scroll Down",

      about_title: "About Me",
      about_list1: "Skill",
      about_list2: "Hobbies",
      about_list3: "Education",
      about_detail: "I've been fascinated by computers since childhood, particularly in the areas of graphics and source code. I find that I can engage with these topics for extended periods without difficulty. As a result, I’m eager to study coding seriously and maximize the benefits from this pursuit.",
        
      experience_title: "Experience & Activities",
      experience_1_title: "Game Developer Internship",
      experience_1_subtitle: "I tried my hand at interning as a front-end and back-end game developer for a game called Fivem, an online platform that works through the GTA V game.",
      experience_2_title: "Community Application",
      experience_2_subtitle: "Application for communication and relationship building within schools",
      experience_3_title: "Robot Arm",
      experience_3_subtitle: "Write a function so that the robotic arm can grab the object and place it at the designated point.",
      experience_4_title: "Cyber Security",
      experience_4_subtitle: "Find the Source of a Hidden File Using Wireshark in Kali Linux.",
      experience_5_title: "2D Game",
      experience_5_subtitle: "Create MMORPG simulation game with Blockcode.",
      company_ex_btn: "View more >",

      contact_title: "Contact",
      contact_list1: "Email",
      contact_list2: "Phone",
      contact_list3: "Instagram",
      contact_list4: "Facebook",
      contact_list5: "Github",
      contact_1_btn: "Email Me >",
      contact_2_btn: "Call Me >",
      contact_3_btn: "Follow Me >",
      contact_4_btn: "Add Me >",
      contact_5_btn: "Add Me  >",
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
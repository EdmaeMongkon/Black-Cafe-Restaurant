/* ==========================================================================
   BLACK CAFE & RESTAURANT - INTERACTIVE SCRIPT WITH MULTI-LANGUAGE SUPPORT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Force scroll to top on page load/refresh
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    initCanvasAnimation();
    initMobileMenu();
    initScrollEffects();
    initMenuTabs();
    initTabScrollArrows();
    initBookingForm();
    initLanguageSwitcher();
    initPromoBanner();
});

/* ==========================================================================
   MULTI-LANGUAGE TRANSLATION SYSTEM
   ========================================================================== */
const i18n = {
    th: {
        "meta-title": "Black Cafe & Restaurant | คาเฟ่และร้านอาหารพรีเมียม บางบอน",
        "nav-home": "หน้าแรก",
        "nav-about": "เกี่ยวกับเรา",
        "nav-menu": "เมนูแนะนำ",
        "nav-services": "บริการจัดเลี้ยง",
        "nav-contact": "ติดต่อเรา",
        "btn-nav-book": "จองโต๊ะ / จัดบูธ",
        
        "hero-badge": "ยินดีต้อนรับทุกคนที่เข้ามาแวะชมเว็บไซต์เรา",
        "hero-title": "BLACK CAFE & RESTAURANT",
        "hero-subtitle": "“ความสุขง่ายๆ อาจเริ่มต้นจากข้าวหนึ่งจาน และบรรยากาศที่ทำให้คุณรู้สึกสบายใจ”",
        "btn-hero-menu": "<i class=\"fa-solid fa-utensils\"></i> ดูเมนูของเรา",
        "btn-hero-book": "<i class=\"fa-solid fa-calendar-check\"></i> สำรองบริการ / จัดเลี้ยง",
        
        "about-tag": "OUR STORY",
        "about-title": "เกี่ยวกับ BLACK CAFE",
        "about-h3": "มุมเล็กๆ แห่งความสบายใจย่านบางบอน",
        "about-p1": "ที่ <strong>Black Cafe & Restaurant</strong> เราเชื่อว่าอาหารที่ดีและกาแฟที่มีคุณภาพ สามารถเปลี่ยนวันธรรมดาให้เป็นวันพิเศษได้ เราตั้งใจคัดสรรวัตถุดิบชั้นเลิศเพื่อส่งมอบความอร่อยและความสุขผ่านทุกจานอาหารและเครื่องดื่มทุกแก้ว",
        "about-p2": "ไม่ว่าคุณจะเป็นคนรักกาแฟที่มองหาเครื่องดื่มแก้วโปรดเพื่อเริ่มเช้าวันใหม่ หรือกำลังมองหารสชาติอาหารอันอบอุ่นที่ทำให้รู้สึกผ่อนคลาย ในบรรยากาศโมเดิร์นลักชูรี่กระจกกรอบหรู เราพร้อมต้อนรับคุณเสมอ",
        "about-feat-title1": "Premium Coffee",
        "about-feat-desc1": "เมล็ดกาแฟเกรดพรีเมียม ผ่านการคัดสรรและคั่วบดอย่างพิถีพิถันเพื่อดึงรสชาติที่ดีที่สุด",
        "about-feat-title2": "Crafted Meals",
        "about-feat-desc2": "ปรุงสดใหม่ทุกจาน ผสานรสชาติดั้งเดิมและวัตถุดิบคุณภาพเยี่ยม",
        "about-lbl1": "Craft Coffee",
        "about-lbl2": "Signature Dishes",
        
        "menu-tag": "EXQUISITE SELECTIONS",
        "menu-title": "เมนูแนะนำของร้าน",
        
        // Menu Tabs
        "tab-coffee": "<i class=\"fa-solid fa-mug-saucer\"></i> COFFEE & TEA",
        "tab-smoothie": "<i class=\"fa-solid fa-blender\"></i> SMOOTHIE & MILK",
        "tab-appetizer": "<i class=\"fa-solid fa-bowl-rice\"></i> APPETIZER & SALAD",
        "tab-pizza": "<i class=\"fa-solid fa-pizza-slice\"></i> PASTA & PIZZA",
        "tab-maincourse": "<i class=\"fa-solid fa-utensils\"></i> MAIN COURSE",
        
        // Badges
        "menu-badge-rec": "Recommend",
        "menu-badge-set": "Set Menu",
        
        // Coffee Highlights
        "menu-c-n1": "แมคคิอาโต้ (Macchiato)",
        "menu-c-d1": "เอสเพรสโซ่เข้มข้น ผสานฟองนมนุ่มและซอสคาราเมลหอมหวานสูตรแนะนำ",
        "menu-c-n2": "คาเฟ่ลาเต้ (Latte)",
        "menu-c-d2": "กาแฟเอสเพรสโซ่หนึ่งช็อตรสชาตินุ่มละมุน ผสมกับนมสดสตรีมร้อน/เย็นเข้ากันลงตัว",
        "menu-c-n3": "อเมริกาโน่น้ำมะพร้าว",
        "menu-c-d3": "กาแฟเอสเพรสโซ่เข้มข้น ผสานความหวานสดชื่นจากน้ำมะพร้าวสดแท้จากธรรมชาติ",
        "menu-c-n4": "เอสเปรสโซ่ (Espresso)",
        "menu-c-d4": "กาแฟเอสเปรสโซ่เข้มข้นรสชาติดั้งเดิม หอมกรุ่นกลิ่นอโรมาเต็มพิกัด",
        "menu-c-n5": "ชาไทยนมสด",
        "menu-c-d5": "ใบชาไทยโบราณคัดพิเศษ ชงสดใหม่ผสมนมสดรสชาติหอมมันกลมกล่อม",
        "menu-c-n6": "อเมริกาโน่ส้ม (Orange Americano)",
        "menu-c-d6": "ช็อตกาแฟดำเข้มข้น ราดบนน้ำส้มคั้นรสหวานอมเปรี้ยว สดชื่นกระปรี้กระเปร่า",
        "menu-c-n7": "มัทฉะลาเต้ (Matcha Latte)",
        "menu-c-d7": "ชาเขียวมัทฉะแท้นำเข้า ชงนมสดรสชาติกลมกล่อมหอมละมุนสไตล์ญี่ปุ่น",
        "menu-c-n8": "มัทฉะน้ำมะพร้าว",
        "menu-c-d8": "ผงชาเขียวมัทฉะพรีเมียม สกัดเข้มข้นเทซ้อนบนน้ำมะพร้าวอ่อนน้ำหอมหวานสดชื่น",
        
        // Coffee Extras
        "extra-title-c": "เมนูชาและกาแฟเพิ่มเติม (Other Drinks)",
        "extra-c1": "อเมริกาโน่ (คั่วเข้ม / คั่วกลาง)",
        "extra-c2": "กาแฟนมมะพร้าว",
        "extra-c3": "คาปูชิโน่",
        "extra-c4": "มอคค่า",
        "extra-c5": "มัทฉะนมมะพร้าว",
        "extra-c6": "นมสดพรีเมียม",
        "extra-c7": "นมมะพร้าวสด",
        "extra-c8": "โกโก้เย็นเข้มข้น",
        "extra-c9": "ชาดำเย็น",
        "extra-c10": "มัทฉะส้ม",
        "extra-c11": "ชาเขียวมัทฉะออริจินัล",

        // Smoothie Highlights
        "menu-s-n1": "สตรอเบอร์รี่บิสกิตปั่น",
        "menu-s-d1": "สตรอเบอร์รี่นมสดปั่นละเอียด ท็อปปิ้งซอสแดงเข้มข้นและคุ้กกี้บิสกิตกรุบกรอบรสหวาน",
        "menu-s-n2": "มิกซ์เบอร์รี่ปั่น",
        "menu-s-d2": "รวมเบอร์รี่หลากชนิดปั่นจนเนื้อเนียน รสเปรี้ยวอมหวานชื่นใจ พร้อมคุณประโยชน์เต็มพิกัด",
        "menu-s-n3": "โกโก้ปั่นเข้มข้น",
        "menu-s-d3": "ผงโกโก้แท้สกัดเข้มข้นปั่นจนเป็นเนื้อเกล็ดหิมะ ราดด้วยท็อปปิ้งซอสช็อกโกแลตเยิ้มๆ",
        "menu-s-n4": "โอริโอมิลค์กี้ปั่น",
        "menu-s-d4": "นมสดปั่นผสมคุ้กกี้โอริโอ้ หวานมันกลมกล่อม เคี้ยวสนุกด้วยเศษคุ้กกี้กรอบและวิปครีม",
        
        // Smoothie Extras
        "extra-title-s": "เมนูปั่นเพิ่มเติม (Other Smoothies)",
        "extra-s1": "สตรอว์เบอร์รี่นมสดปั่น",
        "extra-s2": "มะพร้าวนมสดปั่น",
        "extra-s3": "ชาไทยปั่นนมสด",
        "extra-s4": "น้ำส้มปั่นสดชื่น",
        "extra-s5": "มัทฉะลาเต้ปั่น",

        // Appetizer & Salad Highlights
        "menu-a-n1": "ปีกไก่ทอดซอสซีเคร็ต",
        "menu-a-d1": "ปีกไก่บนทอดจนเหลืองทองกรอบนอกนุ่มใน คลุกเคล้าด้วยซอสเคลือบหวานเค็มสูตรลับเฉพาะ",
        "menu-a-n2": "เนื้อย่างจิ้มแจ่ว",
        "menu-a-d2": "เนื้อวัวคัดพิเศษหมักเครื่องเทศอย่างดี ย่างเตาถ่านหอมกรุ่น เสิร์ฟคู่ซอสแจ่วมะขามรสแซ่บ",
        "menu-a-n3": "ไก่ผัดเม็ดมะม่วงหิมพานต์",
        "menu-a-d3": "เนื้อไก่หั่นพอดีคำผัดซอสรสเข้มข้น ใส่พริกหวาน ต้นหอม และเม็ดมะม่วงหิมพานต์คั่วกรอบ",
        "menu-a-n4": "เซตปาร์ตี้ (Party Set)",
        "menu-a-d4": "ชุดของทอดรวมมิตร (เฟรนช์ฟรายส์ นักเก็ต ไก่ป๊อป) เสิร์ฟคู่กับซอสจิ้มสูตรพิเศษอร่อยจุใจ",
        "menu-a-n5": "เดอร์ตี้ฟราย (Dirty Fries)",
        "menu-a-d5": "เฟรนช์ฟรายส์ทอดร้อนๆ ราดซอสชีสเยิ้ม โรยเบคอนกรอบสับและผงปรุงรสเข้มข้นสะใจ",
        "menu-a-n6": "คารามารี่ปลาหมึกทอด",
        "menu-a-d6": "ปลาหมึกชุบแป้งทอดสไตล์อิตาเลียน กรอบนอกหนึบในเสิร์ฟร้อนๆ คู่ทาร์ทาร์ซอสและเลมอน",
        "menu-a-n7": "ซีซ่าสลัด (Caesar Salad)",
        "menu-a-d7": "ผักกาดคอสสดกรอบ คลุกเคล้าน้ำสลัดซีซาร์ โรยชีสพาเมซาน ขนมปังกรอบ และเบคอนอบ",
        "menu-a-n8": "แฮมสลัด",
        "menu-a-d8": "สลัดผักไฮโดรโปนิกส์สด ท็อปแฮมสไลด์รมควันเนื้อนุ่มชิ้นใหญ่ ทานคู่น้ำสลัดครีมข้น",
        "menu-a-n9": "ทูน่าสลัด",
        "menu-a-d9": "เนื้อปลาทูน่าในน้ำแร่อย่างดี ท็อปผักสลัดออร์แกนิกและมะเขือเทศหวานฉ่ำ",
        "menu-a-n10": "สลัดแซลมอนรมควัน",
        "menu-a-d10": "ผักสลัดไฮโดรโปนิกส์สดกรอบ เสิร์ฟพร้อมแผ่นแซลมอนรมควันเนื้อฉ่ำและน้ำสลัดเข้มข้น",
        
        // Appetizer & Salad Extras
        "extra-title-a": "เมนูยำรสแซ่บ (Spicy Salads)",
        "extra-a1": "ยำหมูยอรสแซ่บ",
        "extra-a2": "ยำไส้กรอก",
        "extra-a3": "ยำไข่ดาวทรงเครื่อง",

        // Pasta & Pizza Highlights
        "menu-p-n1": "พาสต้าครีมแฮมเห็ด",
        "menu-p-d1": "เส้นพาสต้าสปาเก็ตตี้เหนียวนุ่มผัดครีมซอสข้นรสหวานมันเค็ม ใส่แฮมและเห็ดแชมปิญอง",
        "menu-p-n2": "พาสต้าครีมทรัฟเฟิล",
        "menu-p-d2": "ครีมซอสเห็ดรสละมุน ผสานกับน้ำมันเห็ดทรัฟเฟิลเกรดพรีเมียม กลิ่นหอมฟุ้งหรูหรา",
        "menu-p-n3": "สปาเก็ตตี้ขี้เมาแฮม",
        "menu-p-d3": "สปาเก็ตตี้ผัดสมุนไพรสดและพริกแห้ง รสจัดจ้านแบบไทย ผสมแฮมชิ้นใหญ่เนื้อแน่น",
        "menu-p-n4": "พิซซ่าโฟร์ชีส (Four Cheese)",
        "menu-p-d4": "จัดเต็มชีสเกรดพรีเมียม 4 ชนิด (มอสซาเรลล่า, พาร์มิจิอาโน, บลูชีส, เชดดาร์ชีส)",
        "menu-p-n5": "พิซซ่าแซลมอนรมควัน",
        "menu-p-d5": "แซลมอนรมควันสไลด์บาง ท็อปบนแป้งพิซซ่าชีสและซอสมะเขือเทศเข้มข้น",
        "menu-p-n6": "พิซซ่าเปปเปอโรนี",
        "menu-p-d6": "ซาลามีรสเผ็ดอิตาเลียน (เปปเปอโรนี) วางเรียงบนชีสเยิ้ม ยอดนิยมตลอดกาล",
        "menu-p-n7": "พิซซ่ามาร์เกอริต้า",
        "menu-p-d7": "แป้งพิซซ่าบางกรอบท็อปปิ้งด้วยซอสมะเขือเทศเข้มข้น มอสซาเรลล่าชีส และโหระพาอิตาเลียน",
        "menu-p-n8": "พิซซ่าฮาวายเอี้ยน",
        "menu-p-d8": "พิซซ่าหน้าแฮมและสับปะรด หวานฉ่ำชีสเยิ้ม อบหอมจากเตาถูกใจเด็กและผู้ใหญ่",
        "menu-p-n9": "พิซซ่าเห็ดทรัฟเฟิล",
        "menu-p-d9": "ครีมซอสทรัฟเฟิลเห็ดหอมกระจายบนแป้งพิซซ่าโฮมเมด อบเตาร้อนส่งกลิ่นหอมชวนทาน",
        
        // Pasta & Pizza Extras
        "extra-title-p": "พาสต้าและพิซซ่าอื่นๆ (Other Pasta & Pizza)",
        "extra-p1": "สปาเก็ตตี้ซอสเนื้อสับ Bolognese",
        "extra-p2": "สปาเก็ตตี้ซอสมะเขือเทศหมู",
        "extra-p3": "พาสต้าโรเซ่",
        "extra-p4": "พิซซ่ามารินาร่า (ไม่มีชีส)",
        "extra-p5": "พิซซ่าซีฟู้ด (กุ้ง,หมึก,หอย)",
        "extra-p6": "พิซซ่าพาร์ม่าแฮม",
        "extra-toppings-title": "ท็อปปิ้งเพิ่มเติม (Extra Toppings):",
        "extra-toppings-values": "เบคอน +39.- | แฮม +39.- | ชีส +39.-",

        // Main Course Highlights
        "menu-m-n1": "ข้าวผัดโบราณ",
        "menu-m-d1": "ข้าวหอมมะลิผัดซีอิ๊วใส่ไข่ หมู และคะน้าสด ผัดไฟแรงหอมกลิ่นกระทะตามสูตรดั้งเดิม",
        "menu-m-n2": "ข้าวไข่เจียวหมูสับ",
        "menu-m-d2": "เมนูคุ้นเคยรสชาติอร่อยกลมกล่อม ไข่เจียวสับหมูสับแบบไทยฟูหนานุ่ม เสิร์ฟคู่ข้าวสวยร้อนๆ",
        "menu-m-n3": "ข้าวผัดไข่",
        "menu-m-d3": "ข้าวหอมมะลิผัดกับไข่สดและต้นหอมปรุงรสกลมกล่อม ผัดไฟแรงหอมกลิ่นกระทะคลาสสิกสะใจ",
        "menu-m-n4": "ข้าวหมูสวนสน",
        "menu-m-d4": "เนื้อหมูหมักสูตรเด็ดเฉพาะผัดคลุกเคล้าจนเนื้อนุ่มชุ่มฉ่ำ ราดบนข้าวสวยร้อนๆ เคียงผัก",
        "menu-m-n5": "ข้าวไข่ข้นซอสหมู",
        "menu-m-d5": "ไข่ข้นกึ่งสุกกึ่งดิบเนื้อนุ่มละมุน ราดด้วยซอสหมูสับปรุงรสสูตรกลมกล่อมออมหมู",
        "menu-m-n6": "กะเพราเนื้อโคขุน + ไข่เจียวหมูสับ",
        "menu-m-d6": "เนื้อโคขุนสับผัดกะเพรารสเผ็ดร้อนแซ่บ เสิร์ฟพร้อมข้าวสวยร้อนๆ และไข่เจียวหมูสับฟูหนานุ่ม",
        
        // Main Course Extras
        "extra-title-m": "อาหารจานหลักอื่นๆ (Other Mains & Combos)",
        "extra-m1": "ข้าวไข่เจียวธรรมดา",
        "extra-m2": "ข้าวไข่ข้นธรรมดา",
        "extra-m3": "ข้าวกะเพราเนื้อโคขุนสับ",
        "extra-m4": "ข้าวกะเพราหมูสับ",
        "extra-m5": "ข้าวกะเพราไก่สับ",
        "extra-m6": "เซ็ต A1: ข้าวผัดไข่ + โกโก้",
        "extra-m7": "เซ็ต A2: ข้าวไข่เจียวหมูสับ + ชาไทย",
        "extra-m8": "เซ็ต B1: ข้าวกะเพราหมู + อเมริกาโน่",
        "extra-m9": "เซ็ต B2: ข้าวกะเพราไก่ + อเมริกาโน่",
        "extra-m10": "เซ็ต C1: ข้าวกะเพราหมู + ไข่เจียว + เพียวมัทฉะ",
        "extra-toppings-title-m": "เครื่องเคียงเพิ่มเติม (Add-ons):",
        "extra-toppings-values-m": "ไข่ดาว / ไข่เจียว / ไข่ต้ม +10.-",

        // Catering Services
        "services-tag": "SERVICES",
        "services-title": "บริการจัดเลี้ยงและออกบูธ",
        "services-h1": "Mobile Coffee Booth",
        "services-p1": "ยกเคาน์เตอร์บาร์กาแฟสดระดับพรีเมียมพร้อมบาริสต้าไปเสิร์ฟถึงในงานแต่งงาน งานเลี้ยงบริษัท หรืออีเว้นท์ของคุณ ด้วยเมล็ดกาแฟและเมนูซิกเนเจอร์อันหลากหลาย",
        "services-h2": "Catering Service",
        "services-p2": "บริการอาหารจัดเลี้ยงแบบบุฟเฟ่ต์หรือเซ็ตเมนูฟิวชั่น เหมาะสำหรับงานปาร์ตี้ งานเลี้ยงส่วนตัว หรือการเปิดตัวสินค้า ปรุงสดใหม่ด้วยมาตรฐานระดับสูง",
        "services-h3": "Premium Food Box",
        "services-p3": "รับจัดทำข้าวกล่อง / อาหารกล่องพรีเมียม สไตล์เบนโตะหรืออาหารจานเดียวคุณภาพสูง เพื่อรองรับการจัดประชุม สัมมนา หรืองานเลี้ยงขนาดใหญ่",
        
        // Booking
        "book-h2": "สำรองที่นั่ง หรือ ติดต่อจองจัดเลี้ยง / ออกบูธ",
        "book-p": "ต้องการจัดงานเลี้ยงพิเศษหรือบริการกาแฟสดในงานอีเว้นท์ของคุณ? กรอกรายละเอียดเบื้องต้นเพื่อให้ทีมงานของเราติดต่อกลับเพื่อวางแผนและประเมินราคาโดยเร็วที่สุด",
        "book-loc": "ซอยกาญจนาภิเษก 3 บางบอน",
        "form-lbl-name": "ชื่อผู้ติดต่อ / หน่วยงาน <span class=\"required\">*</span>",
        "form-lbl-phone": "เบอร์โทรศัพท์ติดต่อ <span class=\"required\">*</span>",
        "form-lbl-email": "อีเมล",
        "form-lbl-type": "ประเภทบริการที่สนใจ <span class=\"required\">*</span>",
        "form-opt-placeholder": "เลือกบริการ...",
        "form-opt-table": "สำรองที่นั่งในร้าน (Book a Table)",
        "form-opt-booth": "จองบูธกาแฟสดนอกสถานที่ (Coffee Booth)",
        "form-opt-cater": "บริการอาหารจัดเลี้ยง (Catering)",
        "form-opt-box": "สั่งข้าวกล่องพรีเมียม (Food Box)",
        "form-opt-mix": "จัดบูธกาแฟพร้อมจัดเลี้ยง (Coffee & Catering)",
        "form-lbl-date": "วันที่จัดงาน / วันที่จอง <span class=\"required\">*</span>",
        "form-lbl-guests": "จำนวนผู้ร่วมงาน / จำนวนโต๊ะ <span class=\"required\">*</span>",
        "form-lbl-notes": "ข้อมูลเพิ่มเติม / รายละเอียดความต้องการพิเศษ",
        "btn-submit-booking": "<i class=\"fa-solid fa-paper-plane\"></i> ส่งข้อมูลจองบริการ",
        
        // Location
        "contact-tag": "FIND US",
        "contact-title": "ตำแหน่งร้านและการติดต่อ",
        "btn-open-maps": "<i class=\"fa-solid fa-map-location-dot\"></i> เปิดใน Google Maps",
        "info-h3": "ช่องทางการติดต่อ",
        "info-p": "แวะมาลิ้มรสความสุขกับเมนูที่ปรุงด้วยหัวใจในบรรยากาศผ่อนคลาย หรือติดต่อสอบถามรายละเอียดต่างๆ ได้ทุกวัน",
        "info-lbl-loc": "ที่ตั้งร้าน:",
        "info-val-loc": "เลขที่ 9 ซอยกาญจนาภิเษก 3 แขวงบางบอน เขตบางบอน กรุงเทพมหานคร 10150 (ในโครงการเดียวกับ Black Fitness)",
        "info-lbl-phone": "เบอร์โทรศัพท์:",
        "info-lbl-hours": "เวลาทำการ:",
        "info-val-hours": "เปิดให้บริการทุกวัน เวลา 08:00 น. - 20:00 น.",
        "social-h4": "ติดตามข่าวสาร & โปรโมชั่น",
        
        // Modal
        "modal-h2": "ส่งข้อมูลการจองสำเร็จ!",
        "modal-p": "ทางร้าน Black Cafe & Restaurant ได้รับข้อมูลของคุณแล้ว เจ้าหน้าที่จะดำเนินการตรวจสอบและติดต่อกลับทางเบอร์โทรศัพท์หรืออีเมลที่แจ้งไว้โดยเร็วที่สุด",
        "btn-close-modal": "ตกลง",
        
        // Banner Modal
        "banner-dont-show": "ไม่ต้องแสดงป๊อปอัปนี้อีกในวันนี้",
        "floating-promo-text": "โปรโมชัน / เมนูใหม่"
    },
    en: {
        "meta-title": "Black Cafe & Restaurant | Premium Cafe & Restaurant in Bang Bon",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-menu": "Signature Menu",
        "nav-services": "Catering Services",
        "nav-contact": "Contact Us",
        "btn-nav-book": "Book Table / Event",
        
        "hero-badge": "Welcome to everyone visiting our website",
        "hero-title": "BLACK CAFE & RESTAURANT",
        "hero-subtitle": "“Simple happiness may start from a plate of rice, and an atmosphere that makes you feel comfortable.”",
        "btn-hero-menu": "<i class=\"fa-solid fa-utensils\"></i> View Our Menu",
        "btn-hero-book": "<i class=\"fa-solid fa-calendar-check\"></i> Book Catering / Event",
        
        "about-tag": "OUR STORY",
        "about-title": "ABOUT BLACK CAFE",
        "about-h3": "A cozy corner of comfort in Bang Bon",
        "about-p1": "At <strong>Black Cafe & Restaurant</strong>, we believe that great food and high-quality coffee can turn any ordinary day into an extraordinary one. We are dedicated to selecting the finest ingredients to deliver happiness and taste in every single cup and plate.",
        "about-p2": "Whether you are a coffee enthusiast seeking your favorite morning espresso or looking for comforting dining flavors in a modern luxury glassmorphic vibe, we are always ready to welcome you.",
        "about-feat-title1": "Premium Coffee",
        "about-feat-desc1": "Select grade coffee beans, roasted and ground to deliver the ultimate flavor profile.",
        "about-feat-title2": "Crafted Meals",
        "about-feat-desc2": "Freshly cooked dishes, blending traditional roots with exceptional quality.",
        "about-lbl1": "Craft Coffee",
        "about-lbl2": "Signature Dishes",
        
        "menu-tag": "EXQUISITE SELECTIONS",
        "menu-title": "Recommended Dishes",
        
        // Menu Tabs
        "tab-coffee": "<i class=\"fa-solid fa-mug-saucer\"></i> COFFEE & TEA",
        "tab-smoothie": "<i class=\"fa-solid fa-blender\"></i> SMOOTHIE & MILK",
        "tab-appetizer": "<i class=\"fa-solid fa-bowl-rice\"></i> APPETIZER & SALAD",
        "tab-pizza": "<i class=\"fa-solid fa-pizza-slice\"></i> PASTA & PIZZA",
        "tab-maincourse": "<i class=\"fa-solid fa-utensils\"></i> MAIN COURSE",
        
        // Badges
        "menu-badge-rec": "Recommend",
        "menu-badge-set": "Set Menu",
        
        // Coffee Highlights
        "menu-c-n1": "Macchiato",
        "menu-c-d1": "Double espresso shot with creamy frothed milk and aromatic caramel syrup drizzle.",
        "menu-c-n2": "Cafe Latte",
        "menu-c-d2": "Smooth espresso combined with steamed milk and thin foam top. Balanced flavor.",
        "menu-c-n3": "Coconut Americano",
        "menu-c-d3": "Signature black espresso shot layered over sweet, refreshing fresh coconut water.",
        "menu-c-n4": "Espresso",
        "menu-c-d4": "Rich and bold signature double shot of espresso with full crema.",
        "menu-c-n5": "Thai Milk Tea",
        "menu-c-d5": "Traditional premium black tea leaves brewed fresh and whisked with sweet milk.",
        "menu-c-n6": "Orange Americano",
        "menu-c-d6": "Rich espresso shot layered over zesty fresh orange juice. Sparkling fresh.",
        "menu-c-n7": "Matcha Latte",
        "menu-c-d7": "Authentic Japanese imported green tea whisked with rich fresh milk.",
        "menu-c-n8": "Coconut Matcha",
        "menu-c-d8": "Premium Uji Matcha green tea poured over aromatic fresh coconut water.",
        
        // Coffee Extras
        "extra-title-c": "Other Coffee & Tea Selections",
        "extra-c1": "Americano (Dark / Medium Roast)",
        "extra-c2": "Coconut Milk Coffee",
        "extra-c3": "Cappuccino",
        "extra-c4": "Mocha",
        "extra-c5": "Coconut Milk Matcha",
        "extra-c6": "Premium Fresh Milk",
        "extra-c7": "Coconut Water",
        "extra-c8": "Iced Cocoa",
        "extra-c9": "Black Iced Tea",
        "extra-c10": "Orange Matcha",
        "extra-c11": "Uji Matcha Original",

        // Smoothie Highlights
        "menu-s-n1": "Strawberry Biscuit Smoothie",
        "menu-s-d1": "Sweet strawberry milk smoothie topped with red berry glaze and crunchy biscuit crumbles.",
        "menu-s-n2": "Mixed Berry Smoothie",
        "menu-s-d2": "A smooth blend of imported mixed berries, delivering a refreshing sweet and sour taste.",
        "menu-s-n3": "Double Cocoa Smoothie",
        "menu-s-d3": "Rich cocoa blend whipped into a snowy milkshake, layered with dark chocolate syrup.",
        "menu-s-n4": "Oreo Milky Smoothie",
        "menu-s-d4": "Premium fresh milk blended with chocolate cookies, topped with whipped cream and Oreo.",
        
        // Smoothie Extras
        "extra-title-s": "Other Smoothies",
        "extra-s1": "Strawberry Milkshake",
        "extra-s2": "Fresh Coconut Milkshake",
        "extra-s3": "Thai Tea Smoothie",
        "extra-s4": "Orange Smoothie",
        "extra-s5": "Uji Matcha Smoothie",

        // Appetizer & Salad Highlights
        "menu-a-n1": "Secret Sauce Chicken Wings",
        "menu-a-d1": "Crispy golden fried chicken wings tossed in our sweet and savory homemade glaze.",
        "menu-a-n2": "Grilled Beef with Jaew Sauce",
        "menu-a-d2": "Premium beef marinated in local spices, grilled charcoal-hot and served with tamarind dip.",
        "menu-a-n3": "Cashew Nut Stir-Fried Chicken",
        "menu-a-d3": "Wok-tossed chicken chunks in rich soy sauce with onions, peppers, and roasted cashews.",
        "menu-a-n4": "Party Set (Fries, Nuggets & Chicken)",
        "menu-a-d4": "Value fried combination of crispy French fries, nuggets, and popcorn chicken with dips.",
        "menu-a-n5": "Dirty Fries loaded",
        "menu-a-d5": "Hot crispy French fries loaded with warm cheese sauce, minced crispy bacon, and spices.",
        "menu-a-n6": "Crispy Calamari",
        "menu-a-d6": "Italian-style crispy fried squid rings, tender on the inside, served with tartar sauce.",
        "menu-a-n7": "Caesar Salad",
        "menu-a-d7": "Fresh romaine lettuce tossed with Caesar dressing, parmesan, croutons, and crispy bacon.",
        "menu-a-n8": "Ham Salad",
        "menu-a-d8": "Fresh organic garden salad greens topped with thick smoked ham slices and rich cream dressing.",
        "menu-a-n9": "Tuna Salad",
        "menu-a-d9": "Premium tuna in mineral water over organic hydro salad greens and sweet cherry tomatoes.",
        "menu-a-n10": "Smoked Salmon Salad",
        "menu-a-d10": "Fresh organic garden salad greens topped with smoked salmon slices and rich dressing.",
        
        // Appetizer & Salad Extras
        "extra-title-a": "Other Appetizers & Spicy Salads",
        "extra-a1": "Spicy Vietnamese Sausage Salad (Yum)",
        "extra-a2": "Spicy Sausage Salad (Yum)",
        "extra-a3": "Spicy Fried Egg Salad (Yum)",

        // Pasta & Pizza Highlights
        "menu-p-n1": "Creamy Ham & Mushroom Pasta",
        "menu-p-d1": "Al dente pasta tossed in rich fresh cream sauce with sliced ham and champignon mushrooms.",
        "menu-p-n2": "Truffle Cream Pasta",
        "menu-p-d2": "Al dente pasta tossed in rich cream sauce infused with premium black truffle oil and mushrooms.",
        "menu-p-n3": "Spicy Ham Spaghetti with Dried Chili",
        "menu-p-d3": "Thai style spicy stir-fried spaghetti with garlic, basil, dried chili, and smoked ham.",
        "menu-p-n4": "Four Cheese Pizza",
        "menu-p-d4": "Topped with premium cheese blend (Mozzarella, Parmigiano, Blue Cheese, Cheddar Cheese).",
        "menu-p-n5": "Smoked Salmon Pizza",
        "menu-p-d5": "Slices of premium smoked salmon, rocket greens, and melted cheese on tomato marinara sauce.",
        "menu-p-n6": "Pepperoni Pizza",
        "menu-p-d6": "Spicy Italian pepperoni slices spread over melted mozzarella cheese. Classic favorite.",
        "menu-p-n7": "Pizza Margherita",
        "menu-p-d7": "Classic thin pizza base topped with marinara tomato sauce, mozzarella cheese, and fresh basil.",
        "menu-p-n8": "Pizza Hawaiian",
        "menu-p-d8": "Perfect savory-sweet blend of sliced ham, sweet pineapple chunks, and rich melted cheese.",
        "menu-p-n9": "Truffle Mushroom Pizza",
        "menu-p-d9": "Aromatic black truffle cream and sliced mushrooms over house-baked thin crust pizza.",
        
        // Pasta & Pizza Extras
        "extra-title-p": "Other Pastas & Pizzas",
        "extra-p1": "Spaghetti Beef Bolognese",
        "extra-p2": "Spaghetti Pork Bolognese",
        "extra-p3": "Creamy Rosé Pasta",
        "extra-p4": "Pizza Margherita (Cheese & Tomato)",
        "extra-p5": "Pizza Seafood (Shrimp, Squid, Shells)",
        "extra-p6": "Pizza Parma Ham",
        "extra-toppings-title": "Extra Toppings:",
        "extra-toppings-values": "Bacon +39.- | Ham +39.- | Cheese +39.-",

        // Main Course Highlights
        "menu-m-n1": "Traditional Fried Rice",
        "menu-m-d1": "Jasmine rice wok-fried with sweet soy sauce, egg, pork, and fresh Chinese broccoli.",
        "menu-m-n2": "Minced Pork Omelet Rice",
        "menu-m-d2": "Comforting Thai-style fluffy omelet with minced pork served over hot jasmine rice.",
        "menu-m-n3": "Plain Egg Fried Rice",
        "menu-m-d3": "Jasmine rice wok-fried with fresh eggs and spring onion, seasoned to aromatic perfection.",
        "menu-m-n4": "Suan Son Pork Rice",
        "menu-m-d4": "Tender pork stir-fried in a rich sweet garlic soy glaze, served over hot jasmine rice.",
        "menu-m-n5": "Pork Gravy Scrambled Egg Rice",
        "menu-m-d5": "Silky smooth scrambled eggs over rice topped with savory minced pork gravy sauce.",
        "menu-m-n6": "Beef Basil Rice + Omelet",
        "menu-m-d6": "Spicy Thai holy basil stir-fried beef over jasmine rice, served with minced pork omelet.",
        
        // Main Course Extras
        "extra-title-m": "Other Mains & Combos",
        "extra-m1": "Plain Omelet with Rice",
        "extra-m2": "Plain Scrambled Egg with Rice",
        "extra-m3": "Minced Beef Basil Rice",
        "extra-m4": "Minced Pork Basil Rice",
        "extra-m5": "Minced Chicken Basil Rice",
        "extra-m6": "Set A1: Egg Fried Rice + Cocoa",
        "extra-m7": "Set A2: Omelet Rice + Thai Tea",
        "extra-m8": "Set B1: Pork Basil Rice + Americano",
        "extra-m9": "Set B2: Chicken Basil Rice + Americano",
        "extra-m10": "Set C1: Pork Basil Rice + Omelet + Pure Matcha",
        "extra-toppings-title-m": "Add-ons:",
        "extra-toppings-values-m": "Fried Egg / Omelet / Boiled Egg +10.-",

        // Catering Services
        "services-tag": "SERVICES",
        "services-title": "Catering & Event Booths",
        "services-h1": "Mobile Coffee Booth",
        "services-p1": "Bring our premium fresh coffee bar and skilled baristas to your wedding, corporate party, or private event with rich signature selections.",
        "services-h2": "Catering Service",
        "services-p2": "High-quality buffet or customized course catering services, perfect for private parties, company celebrations, and launches.",
        "services-h3": "Premium Food Box",
        "services-p3": "Premium packed lunch boxes / catering single meals, custom tailored for corporate seminars, events, or large group dining.",
        
        // Booking
        "book-h2": "Book a Table or Contact Catering / Booths",
        "book-p": "Planning a special event or need a fresh coffee booth? Provide your contact details and our team will get in touch with you shortly.",
        "book-loc": "Soi Kanchanaphisek 3, Bang Bon",
        "form-lbl-name": "Contact Name / Company <span class=\"required\">*</span>",
        "form-lbl-phone": "Contact Phone Number <span class=\"required\">*</span>",
        "form-lbl-email": "Email Address",
        "form-lbl-type": "Service Interest <span class=\"required\">*</span>",
        "form-opt-placeholder": "Select a service...",
        "form-opt-table": "Reserve a Table in shop",
        "form-opt-booth": "Book a Mobile Coffee Booth",
        "form-opt-cater": "Buffet Catering Service",
        "form-opt-box": "Order Premium Food Boxes",
        "form-opt-mix": "Mobile Coffee & Food Catering Combo",
        "form-lbl-date": "Event Date / Booking Date <span class=\"required\">*</span>",
        "form-lbl-guests": "Number of Guests / Quantity <span class=\"required\">*</span>",
        "form-lbl-notes": "Additional Info / Special Requests",
        "btn-submit-booking": "<i class=\"fa-solid fa-paper-plane\"></i> Submit Booking Request",
        
        // Location
        "contact-tag": "FIND US",
        "contact-title": "Location & Contacts",
        "btn-open-maps": "<i class=\"fa-solid fa-map-location-dot\"></i> Open in Google Maps",
        "info-h3": "Contact Details",
        "info-p": "Visit us to taste delicious coffee and food in a relaxing vibe, or reach out to ask any question.",
        "info-lbl-loc": "Address:",
        "info-val-loc": "9 Kanchanaphisek 3 Road, Bang Bon Sub-district, Bang Bon District, Bangkok 10150 (In same compound as Black Fitness)",
        "info-lbl-phone": "Phone Line:",
        "info-lbl-hours": "Open Hours:",
        "info-val-hours": "Open Daily from 08:00 AM - 08:00 PM",
        "social-h4": "Follow News & Promotions",
        
        // Modal
        "modal-h2": "Booking Sent Successfully!",
        "modal-p": "Black Cafe & Restaurant has received your information. Our coordinator will contact you back via phone or email as soon as possible.",
        "btn-close-modal": "Close",
        
        // Banner Modal
        "banner-dont-show": "Don't show this popup again today",
        "floating-promo-text": "Promotions / New Menu"
    }
};
let currentLang = localStorage.getItem("siteLang") || "th";

function initLanguageSwitcher() {
    const btnTh = document.getElementById("btn-lang-th");
    const btnEn = document.getElementById("btn-lang-en");

    if (!btnTh || !btnEn) return;

    // Set active class based on current language
    updateLangBtnState(currentLang);

    // Apply translations on load
    applyTranslations(currentLang);

    // Click listeners
    btnTh.addEventListener("click", () => {
        setLanguage("th");
    });

    btnEn.addEventListener("click", () => {
        setLanguage("en");
    });
}

function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem("siteLang", lang);
    updateLangBtnState(lang);
    applyTranslations(lang);
}

function updateLangBtnState(lang) {
    const btnTh = document.getElementById("btn-lang-th");
    const btnEn = document.getElementById("btn-lang-en");
    
    if (lang === "th") {
        btnTh.classList.add("active");
        btnEn.classList.remove("active");
    } else {
        btnEn.classList.add("active");
        btnTh.classList.remove("active");
    }
}

function applyTranslations(lang) {
    // Translate Title tag
    const metaTitle = i18n[lang]["meta-title"];
    if (metaTitle) {
        document.title = metaTitle;
    }

    // Translate all elements with data-trn-key attribute
    const translatableElements = document.querySelectorAll("[data-trn-key]");
    translatableElements.forEach(el => {
        const key = el.getAttribute("data-trn-key");
        const translationValue = i18n[lang][key];
        
        if (translationValue) {
            // Keep HTML elements (like FontAwesome icons or strong tags) parsed correctly
            el.innerHTML = translationValue;
        }
    });

    // Translate Form Input Placeholders
    const nameInput = document.getElementById("form-name");
    const phoneInput = document.getElementById("form-phone");
    const emailInput = document.getElementById("form-email");
    const guestsInput = document.getElementById("form-guests");
    const notesInput = document.getElementById("form-notes");

    if (lang === "th") {
        if (nameInput) nameInput.placeholder = "คุณรักดี มีสุข";
        if (phoneInput) phoneInput.placeholder = "08X-XXX-XXXX";
        if (emailInput) emailInput.placeholder = "example@domain.com";
        if (guestsInput) guestsInput.placeholder = "จำนวนคน/จำนวนชุด";
        if (notesInput) notesInput.placeholder = "เช่น รายละเอียดสถานที่จัดงาน, เมนูที่สนใจเป็นพิเศษ, หรือธีมงาน...";
    } else {
        if (nameInput) nameInput.placeholder = "Full Name";
        if (phoneInput) phoneInput.placeholder = "08X-XXX-XXXX";
        if (emailInput) emailInput.placeholder = "example@domain.com";
        if (guestsInput) guestsInput.placeholder = "No. of guests / quantity";
        if (notesInput) notesInput.placeholder = "e.g., Location details, custom request, event theme...";
    }
}

/* ==========================================================================
   FLOATING COFFEE BEANS CANVAS ANIMATION
   ========================================================================== */
function initCanvasAnimation() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Bean Settings
    let beans = [];
    const maxBeans = 28; // Elegant density, not cluttered
    const baseSpeeds = [0.2, 0.5]; // Slow elegant motion
    
    // Mouse Wind Force Settings
    const mouse = { x: null, y: null };
    const maxRadius = 150;

    // Handle Window Resize
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Track Mouse
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Coffee Bean Class
    class CoffeeBean {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.size = Math.random() * 22 + 10; // Bean sizes (10px to 32px)
            this.x = Math.random() * canvas.width;
            this.y = initial ? Math.random() * canvas.height : -this.size - 20;
            
            // Movement parameters
            this.speedY = Math.random() * (baseSpeeds[1] - baseSpeeds[0]) + baseSpeeds[0];
            this.speedX = (Math.random() - 0.5) * 0.2;
            this.swaySpeed = Math.random() * 0.01 + 0.005;
            this.swayOffset = Math.random() * Math.PI * 2;
            this.swayAmplitude = Math.random() * 1.5 + 0.5;

            // Rotation parameters
            this.angle = Math.random() * Math.PI * 2;
            this.spinSpeed = (Math.random() - 0.5) * 0.005;

            // Appearance parameters
            this.opacity = Math.random() * 0.25 + 0.08; // High transparency for subtle background
            
            // Randomly pick a color profile (Rich Espresso Brown or Luxury Gold Tint)
            this.colorProfile = Math.random() > 0.85 ? 'gold' : 'brown';
        }

        update() {
            // Swaying horizontal motion
            this.swayOffset += this.swaySpeed;
            let currentSpeedX = this.speedX + Math.sin(this.swayOffset) * this.swayAmplitude * 0.08;

            // Mouse interaction (gentle wind repulsion)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.hypot(dx, dy);

                if (distance < maxRadius) {
                    const force = (maxRadius - distance) / maxRadius; // 0 (far) to 1 (near)
                    // Push beans away from mouse
                    this.x += (dx / distance) * force * 1.5;
                    this.y += (dy / distance) * force * 1.5;
                }
            }

            // Normal downward drift
            this.y += this.speedY;
            this.x += currentSpeedX;
            this.angle += this.spinSpeed;

            // Boundary Check: If goes off-screen, reset to top
            if (this.y > canvas.height + this.size + 20 || this.x < -this.size - 20 || this.x > canvas.width + this.size + 20) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.globalAlpha = this.opacity;

            // Set drawing colors
            let mainColor, goldAccent;
            if (this.colorProfile === 'gold') {
                mainColor = 'rgba(212, 175, 55, 0.45)'; // Semi-trans Gold
                goldAccent = 'rgba(255, 235, 170, 0.95)'; // Bright gold highlights
            } else {
                mainColor = 'rgba(32, 22, 18, 0.7)'; // Deep coffee brown
                goldAccent = 'rgba(212, 175, 55, 0.6)'; // Gold seam highlight
            }

            // Draw Bean Main Body (using custom bezier paths for bean ellipse)
            ctx.beginPath();
            // Left half
            ctx.moveTo(0, -this.size);
            ctx.bezierCurveTo(-this.size * 0.75, -this.size * 0.6, -this.size * 0.75, this.size * 0.6, 0, this.size);
            // Right half
            ctx.bezierCurveTo(this.size * 0.75, this.size * 0.6, this.size * 0.75, -this.size * 0.6, 0, -this.size);
            ctx.closePath();
            
            // Fill with gradient for 3D sphere look
            const grad = ctx.createRadialGradient(-this.size * 0.15, -this.size * 0.15, 2, 0, 0, this.size);
            grad.addColorStop(0, mainColor);
            grad.addColorStop(1, 'rgba(8, 6, 5, 0.95)');
            ctx.fillStyle = grad;
            ctx.fill();

            // Subtle Gold Border Outline
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = this.colorProfile === 'gold' ? 'rgba(212,175,55,0.7)' : 'rgba(212, 175, 55, 0.2)';
            ctx.stroke();

            // Draw the Coffee Bean Seam (Central Groove)
            ctx.beginPath();
            // Start at top center
            ctx.moveTo(0, -this.size * 0.95);
            // S-curve down the center for realistic look
            ctx.bezierCurveTo(-this.size * 0.12, -this.size * 0.4, this.size * 0.12, this.size * 0.4, 0, this.size * 0.95);
            
            // Style the center crease
            ctx.strokeStyle = goldAccent;
            ctx.lineWidth = this.size * 0.08;
            ctx.lineCap = 'round';
            ctx.stroke();

            ctx.restore();
        }
    }

    // Initialize Beans array
    for (let i = 0; i < maxBeans; i++) {
        beans.push(new CoffeeBean());
    }

    // Main Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Render each bean
        beans.forEach(bean => {
            bean.update();
            bean.draw();
        });
        
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   MOBILE NAVIGATION MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!toggleBtn || !navMenu) return;

    // Toggle menu state
    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = toggleBtn.querySelector("i");
        if (navMenu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            toggleBtn.querySelector("i").className = "fa-solid fa-bars";
        });
    });
}

/* ==========================================================================
   SCROLL EFFECTS & NAVIGATION HIGHLIGHT
   ========================================================================== */
function initScrollEffects() {
    const navbar = document.getElementById("main-nav");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Sticky Nav effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Highlight Active Link on Scroll
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

/* ==========================================================================
   INTERACTIVE MENU TABS SWITCHER
   ========================================================================== */
function initMenuTabs() {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab");

            // Deactivate current tabs
            tabs.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // Activate chosen tab
            tab.classList.add("active");
            const activeContent = document.getElementById(`tab-content-${target}`);
            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });
}

/* ==========================================================================
   BOOKING & EVENT CATERING FORM SUBMISSION
   ========================================================================== */
function initBookingForm() {
    const bookingForm = document.getElementById("main-booking-form");
    const successModal = document.getElementById("success-modal");
    const closeModalBtn = document.getElementById("btn-close-modal");

    if (!bookingForm || !successModal || !closeModalBtn) return;

    // Handle form submission
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop standard form reload

        // Trigger visual button loading state
        const submitBtn = document.getElementById("btn-submit-booking");
        const originalHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;

        const loadingText = currentLang === "th" ? "กำลังส่งข้อมูล..." : "Sending Request...";
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${loadingText}`;

        // Mock network delay (1.5 seconds)
        setTimeout(() => {
            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHtml;

            // Open success modal
            successModal.classList.add("active");

            // Reset form input values
            bookingForm.reset();
        }, 1500);
    });

    // Close modal
    closeModalBtn.addEventListener("click", () => {
        successModal.classList.remove("active");
    });

    // Close modal on clicking outside card
    successModal.addEventListener("click", (e) => {
        if (e.target === successModal) {
            successModal.classList.remove("active");
        }
    });
}

function initTabScrollArrows() {
    const scrollContainer = document.getElementById("menu-tabs-scroll");
    const prevBtn = document.getElementById("btn-tab-prev");
    const nextBtn = document.getElementById("btn-tab-next");

    if (!scrollContainer || !prevBtn || !nextBtn) return;

    function updateArrows() {
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        // Only show arrows if there is overflow (can scroll)
        const hasOverflow = scrollWidth > clientWidth;

        if (hasOverflow) {
            // Show prevBtn if we are not at the beginning
            if (scrollLeft > 5) {
                prevBtn.classList.add("visible");
            } else {
                prevBtn.classList.remove("visible");
            }

            // Show nextBtn if we are not at the end
            if (scrollLeft + clientWidth < scrollWidth - 5) {
                nextBtn.classList.add("visible");
            } else {
                nextBtn.classList.remove("visible");
            }
        } else {
            prevBtn.classList.remove("visible");
            nextBtn.classList.remove("visible");
        }
    }

    // Scroll listeners
    scrollContainer.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    // Initial check
    setTimeout(updateArrows, 100);

    // Click listeners
    prevBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
    });
}

function initPromoBanner() {
    const bannerModal = document.getElementById("promo-banner-modal");
    const closeBannerBtn = document.getElementById("btn-close-banner");
    const bannerOverlay = document.getElementById("banner-modal-overlay");
    const chkDontShow = document.getElementById("chk-dont-show");
    const btnPromoBadge = document.getElementById("btn-promo-badge");
    const prevBtn = document.getElementById("btn-banner-prev");
    const nextBtn = document.getElementById("btn-banner-next");
    const dots = document.querySelectorAll(".banner-dot");
    const slides = document.querySelectorAll(".banner-slide");

    if (!bannerModal || !closeBannerBtn || !bannerOverlay || !chkDontShow || !btnPromoBadge) return;

    let currentSlide = 0;
    let autoPlayInterval = null;
    const intervalTime = 4000;

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        currentSlide = index;

        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentSlide].classList.add("active");

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function openBannerModal() {
        bannerModal.classList.add("active");
        document.body.style.overflow = "hidden";
        showSlide(0);
        startAutoPlay();
    }

    function closeBannerModal() {
        bannerModal.classList.remove("active");
        document.body.style.overflow = "";
        stopAutoPlay();

        if (chkDontShow.checked) {
            const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
            localStorage.setItem("promoBannerHiddenUntil", expiryTime);
        }
    }

    closeBannerBtn.addEventListener("click", closeBannerModal);
    bannerOverlay.addEventListener("click", closeBannerModal);
    btnPromoBadge.addEventListener("click", openBannerModal);

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            prevSlide();
            startAutoPlay();
        });
        nextBtn.addEventListener("click", () => {
            nextSlide();
            startAutoPlay();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-slide"));
            showSlide(index);
            startAutoPlay();
        });
    });

    const carouselContainer = document.querySelector(".banner-carousel");
    if (carouselContainer) {
        carouselContainer.addEventListener("mouseenter", stopAutoPlay);
        carouselContainer.addEventListener("mouseleave", startAutoPlay);
    }

    const hiddenUntil = localStorage.getItem("promoBannerHiddenUntil");
    const currentTime = new Date().getTime();

    if (!hiddenUntil || currentTime > parseInt(hiddenUntil)) {
        setTimeout(openBannerModal, 1200);
    }
}

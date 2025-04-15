import { Badge } from "../ui/badge";
import Me from "@/assets/men.jpg";

const About = () => {
  return (
    <div
      className="About-section flex items-center justify-center w-full py-24 md:py-16 px-2 container"
      id="about"
    >
      <div className="About flex flex-col items-center justify-center w-full">
        <Badge
          variant="default"
          className="rounded-xl bg-accent text-foreground py-1 px-4"
        >
          Men haqimda
        </Badge>
        <div className="flex items-center justify-between pt-12 w-full md:flex-col max-w-[1216px]">
          <div className="about-image flex items-start justify-start w-[584px] h-[694px]  md:hidden ">
            <div
              className="flex items-center justify-center w-[400px] h-[400px] border-[8px] border-background ml-10 z-10"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <img src={Me} alt="my=image" className="w-full h-full" />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border-[8px] border-background absolute bg-accent-foreground/25 mt-10"></div>
          </div>
          <div className="header-image flex items-end justify-center w-[300px] h-[270px] 2xl:hidden md:flex">
            <div
              className="flex items-center justify-center w-[272px] h-[272px] border-[8px] border-background z-10 mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={Me} alt="my=image" className="w-full" />
            </div>
            <div className="flex items-center justify-center w-[312px] h-[272px] border-[8px] border-background absolute bg-accent-foreground/25"></div>
          </div>
          <div className="text max-w-[584px] text-foreground/65 gap-4 flex flex-col mt-10">
            <h1 className="text-3xl font-semibold text-foreground pb-2">
              Men haqimda qiziqyapsizmi? Marhamat, mana bu yerda:
            </h1>
            <h3>
              Men – ishtiyoqli va o‘zini o‘zi rag‘batlantira oladigan
              dizaynerman, React.js, Node.js va Express.js asosida full-stack
              dasturlash bo‘yicha ixtisoslashganman. Raqamli mahsulotlarning
              texnik va vizual jihatlarini hayotga tatbiq etish meni
              ilhomlantiradi. Foydalanuvchi tajribasi, mukammal dizayn va aniq,
              o‘qilishi oson hamda yuqori samarali kod yozish men uchun
              muhimdir.
            </h3>
            <h3>
              Men 2024-yilda web dasturchilik safarimni boshlaganman va
              o‘shandan beri yangi chaqiriqlarga duch kelib, zamonaviy
              texnologiyalarni o‘rganib, rivoqlanib boryapman. Endilikda, web
              dasturchilikni o‘n uch yoshimda boshlaganimdan beri Next.js,
              TypeScript, Express.js, Tailwind CSS, JavaScript kabi zamonaviy
              texnologiyalar yordamida zamonaviy web ilovalar yaratib
              kelmoqdaman.
            </h3>
            <h3>
              Men juda ilg‘or fikrlaydigan insonman va mahsulot ustida
              g‘oyasidan tortib to to‘liq ishlab chiqilishigacha ishlashdan
              zavqlanaman.
            </h3>
            <h3>
              Men to‘liq dasturchilik rejimida bo‘lmaganimda, meni Instagram
              yoki Telegram’da aylanish, startaplarning rivojlanish yo‘lini
              kuzatish yoki bo‘sh vaqtimni o‘tkazayotgan holda topishingiz
              mumkin. Siz meni Instagram’da kuzatishingiz mumkin — u yerda men
              texnologiyaga oid foydali ma’lumotlar bilan o‘rtoqlashaman va
              ochiqchasiga loyihalarim ustida ishlayman. Yoki GitHub sahifam
              orqali ham meni kuzatishingiz mumkin.
            </h3>
            <h3>Va nihoyat, men haqimda qisqacha ma’lumotlar:</h3>
            <div className="flex items-center justify-between">
              <ul
                role="list"
                className="marker:text-foreground/65 list-disc pl-4"
              >
                <li>Jr. Web dasturchi</li>
                <li>Yarim stavkali frilanser</li>
              </ul>
              <ul role="list" className="marker:text-foreground/65 list-disc">
                <li>Ilmga chanqoq o‘rganuvchi</li>
                <li>Katta maqsadga intiluvchi kadr</li>
              </ul>
            </div>
            <h3>
              Oxirgi narsa, men jamoa bilan ishlashga tayyorman, shuning uchun
              bemalol murojaat qiling va salom ayting! Vada qilamanki,
              tishlamayman 😉
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import SimpleMap from '../utils/SimpleMap.js';
import MTable from "../utils/MTable";

function Features() {

  const content = [
    {
      title: "Как снизить процент висцерального жира",
      description: "Корифеи контроля калорий Precision Nutrition вновь спешат на помощь – теперь тем, кто страдает от чрезмерной округлости живота. Вот вам руководство по подтягиванию талии.",
      button: "Читать",
      href: "https://zozhnik.ru/kak-snizit-procent-visceralnogo-zhira-nauchno",
      image: "https://i.imgur.com/pCTZAB6.jpg",
      user: "Хэй Тир",
      userProfile: "https://i.imgur.com/yRFHDQF.png"
    },
    {
      title: "Как наладить режим (регулярных) тренировок",
      description: "Очередной текст от проекта NerdFitness о том, как перебороть тренировочное непостоянство. ",
      button: "Читать",
      href: "https://zozhnik.ru/kak-naladit-rezhim-regulyarnyx-trenirovok",
      image: "https://i.imgur.com/Cb4hc0w.jpg",
      user: "Хэй Тир",
      userProfile: "https://i.imgur.com/yRFHDQF.png"
    },
    {
      title: "Как меняется личность с годами",
      description:
        "Как меняется личность человека по мере старения – отрывок из книги нейробиолога “Счастливое старение”.",
      button: "Читать",
      href: "https://zozhnik.ru/kak_menyaetsya_lichnost_starenie",
      image: "https://i.imgur.com/tAfAwfT.jpg",
      user: "Максим Кудеров",
      userProfile: "https://i.imgur.com/yRFHDQF.png"
    }
  ];

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Все о здоровье</h1>
            <p className="text-xl text-gray-600">Здоровье заключается в освоении бесценных знаний, необходимых для ведения правильного образа жизни.</p>
          </div>

          {/* Slider */}
          <div className="mb-20">
            <Slider className="slider-wrapper" autoplay={9000} touchDisabled>
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <div className="inner">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4">{item.title}</h1>
                    <p className="text-xl font-medium mb-4">{item.description}</p>
                    <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href={item.href}>{item.button}</a>
                  </div>
                  <section>
                    <img src={item.userProfile} alt={item.user} />
                    <span>
                      Автор статьи <strong>{item.user}</strong>
                    </span>
                  </section>
                </div>
              ))}
            </Slider>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Комплексные исследования</h1>
            <p className="text-xl text-gray-600">Своевременно проведенный комплекс исследования может предостеречь от нежданного.</p>
            <div class="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
              <div class="w-full px-0 lg:px-4">
                <h2 class="px-12 text-base font-bold text-center md:text-2xl text-blue-700">
                  Choose your plan
                </h2>
                <p class="py-1 text-sm text-center text-blue-700 mb-10">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div class="flex flex-wrap items-center justify-center py-4 pt-0">
                  <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                    <label class="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
                      <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
                        <h3 class="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
                          Standard
                        </h3>
                        <p class="text-5xl font-bold text-center group-hover:text-white text-blue-500">
                          $25.<span class="text-3xl">95</span>
                        </p>
                        <p class="text-xs text-center uppercase group-hover:text-white text-blue-500">
                          monthly
                        </p>
                      </div>
                      <div
                        class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500"
                      >
                        <p class="text-xl text-white">
                          1 month
                        </p>
                        <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                          Get Started
                        </button>
                      </div>
                    </label>
                  </div>

                  <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                    <label class="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
                      <div class="w-full px-4 py-8 rounded-t-lg bg-blue-500">
                        <h3 class="mx-auto text-base font-semibold text-center underline text-white group-hover:text-white">
                          Premium
                        </h3>
                        <p class="text-5xl font-bold text-center text-white">
                          $21.<span class="text-3xl">95</span>
                        </p>
                        <p class="text-xs text-center uppercase text-white">
                          monthly
                        </p>
                      </div>
                      <div
                        class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-700"
                      >
                        <p class="text-xl text-white">
                          3 months
                        </p>
                        <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                          Save 15%
                        </button>
                      </div>
                    </label>
                  </div>

                  <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                    <label class="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
                      <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
                        <h3 class="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
                          Elite
                        </h3>
                        <p class="text-5xl font-bold text-center group-hover:text-white text-blue-500">
                          $19.<span class="text-3xl">45</span>
                        </p>
                        <p class="text-xs text-center uppercase group-hover:text-white text-blue-500">
                          monthly
                        </p>
                      </div>
                      <div
                        class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500"
                      >
                        <p class="text-xl text-white">
                          6 months
                        </p>
                        <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                          Save 25%
                        </button>
                      </div>
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Необходимые действия</h3>
                <p className="text-xl text-gray-600">Перед тем как прийдти на прием, убедитесь во всем что указано ниже.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Перечень проводимых анализов</div>
                    <div className="text-gray-600">Выберите необходимые для вас анализы с помощью поисковика таблицы.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Подготовка к сдаче анализов</div>
                    <div className="text-gray-600">Проследите, чтобы все пункты из списка были выполнены.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Расположение мед.центра на карте</div>
                    <div className="text-gray-600">Найдите нас по адресу <a className="text-blue-600 hover:underline" href="https://2gis.kz/almaty/inside/9430047375172881/firm/70000001046536980/76.883741%2C43.221654?m=76.883705%2C43.221604%2F16.97">ул. Жандосова 96 г. Алматы</a>
                      <a className="text-blue-600 hover:underline" href="tel:+7707-824-9504"> +7 (707) 824 9504 </a> <a className="text-blue-600 hover:underline" href="tel:+7727-236-0065">+7 (727) 236 0065</a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div style={{ padding: "10px" }}>
                    <MTable />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.png').default} width="530" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0" src={require('../images/features-element.png').default} width="530" height="45" alt="Element" style={{ top: '5%' }} /> {/*md:max-w-none absolute w-full left-0 transform animate-float */}
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <SimpleMap />
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;

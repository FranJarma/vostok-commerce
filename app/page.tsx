import Image from 'next/image'
import astronautImage from '/public/vostok-astronaut.jpg'
import marsCover from '/public/mars-cover.jpeg'
import { ShopLayout } from '../components/Layouts/index'

const DESCRIPTION = "Descubre Vostok: moda casual que desafía límites. Ropa para todas las edades. Rompe barreras con estilo y comodidad. ¡Sé audaz y diferente!";
const TITLE = "Vostok | Home";

export default function Home() {
  return (
    <>
    <ShopLayout title={TITLE} description={DESCRIPTION}>
      <main>
        <section id="new-collection" className="flex flex-row justify-between">
          <section className="w-full sm:w-1/2 flex flex-col items-start justify-start mt-5 max-sm:px-[3rem] md:px-[7rem]">
            <section className="self-stretch flex flex-col items-start justify-start gap-2">
              <section className="self-stretch relative leading-normal">
                <h1 className="self-stretch relative text-3xl sm:text-6xl text-white text-justify font-poppins">Supera tus límites, conoce <span className='text-red-700 uppercase'>Marte.</span></h1>
              </section>
              <section className="self-stretch relative text-base sm:text-lg leading-normal text-white text-justify font-poppins">
                <article>El planeta rojo ha sido objeto de numerosas teorías y mitos a lo largo de la historia. Desde la creencia en la existencia de canales construidos por una civilización marciana hasta la especulación sobre la posibilidad de vida actual en Marte, ha capturado la imaginación de muchas personas.</article>
                <button className="relative leading-normal bg-red-700 text-white p-3 rounded-md my-5 sm:p-5 inline-block max-sm:w-full">Explorar</button>
              </section>
            </section>
            <section></section>
          </section>
          <section className="w-full sm:w-1/2 flex flex-col items-start justify-start mt-5 max-sm:px-[3rem] md:px-[7rem]">
            <section className="self-stretch flex flex-col items-start justify-start gap-2 relative">
              <Image
                className="rounded-3xl"
                alt=""
                src={marsCover}
                width={800}
                height={500}
              />
              <h2>Nueva colección</h2>
            </section>
            <section></section>
          </section>
        </section>

        <section id="other-collections" className="flex flex-row justify-between">
          <section className="w-full sm:w-1/2 flex flex-col items-start justify-start mt-5 max-sm:px-[3rem] md:px-[7rem]">
            <section className="self-stretch flex flex-col items-start justify-start gap-2">
              <section className="self-stretch relative leading-normal">
                <h1 className="self-stretch relative text-3xl sm:text-6xl text-white text-justify font-poppins">Supera tus límites, conoce <span className='text-red-700 uppercase'>Marte.</span></h1>
              </section>
              <section className="self-stretch relative text-base sm:text-lg leading-normal text-white text-justify font-poppins">
                <article>El planeta rojo ha sido objeto de numerosas teorías y mitos a lo largo de la historia. Desde la creencia en la existencia de canales construidos por una civilización marciana hasta la especulación sobre la posibilidad de vida actual en Marte, ha capturado la imaginación de muchas personas.</article>
                <button className="relative leading-normal bg-red-700 text-white p-3 rounded-md my-5 sm:p-5 inline-block max-sm:w-full">Explorar</button>
              </section>
            </section>
            <section></section>
          </section>
          <section className="w-full sm:w-1/2 flex flex-col items-start justify-start mt-5 max-sm:px-[3rem] md:px-[7rem]">
            <section className="self-stretch flex flex-col items-start justify-start gap-2 relative">
              <Image
                className="rounded-3xl"
                alt=""
                src={marsCover}
                width={800}
                height={500}
              />
              <h2>Nueva colección</h2>
            </section>
            <section></section>
          </section>
        </section>

        
      </main>
    </ShopLayout>
      {/* <div className="top-[0rem] left-[0rem] w-[94.5rem] h-[370.13rem]">
        <div className="absolute top-[52.62rem] left-[67.81rem] bg-background-background3 [filter:blur(250px)] w-[22rem] h-[17.49rem]" />
        <div className="absolute top-[27.93rem] left-[34rem] bg-background-background2 [filter:blur(400px)] w-[39.44rem] h-[36.24rem]" />
      </div>
      <div className="absolute top-[167.88rem] left-[0rem] flex flex-col py-[5.75rem] px-[6.94rem] items-center justify-center gap-[3rem] font-h5">
        <div className="flex flex-row pt-[0rem] px-[0rem] pb-[3rem] items-center justify-start gap-[18.31rem] border-b-[1px] border-solid border-white-dissable">
          <div className="w-[17rem] flex flex-col items-start justify-start gap-[1.5rem]">
            <div className="w-[17rem] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[160%] text-white">
                Encuéntranos en nuestras redes sociales.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.75rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame1.svg"
              />
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame2.svg"
              />
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame3.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[5.88rem] text-[1.25rem] text-white-main-white font-poppins">
            <div className="flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="relative leading-[120%] text-white">Explore</div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-white-white-stich font-poppins">
                <div className="relative leading-[160%] text-white">Art Sign In</div>
                <div className="relative leading-[160%] text-white">Collectibles</div>
                <div className="relative leading-[160%] text-white">Domain Name</div>
                <div className="relative leading-[160%] text-white">Utility</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="relative leading-[120%] text-white">Statistic</div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-white-white-stich font-poppins">
                <div className="relative leading-[160%] text-white">Ranking</div>
                <div className="relative leading-[160%] text-white">Collectibles</div>
                <div className="relative leading-[160%] text-white">Activity</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="relative leading-[120%] text-white">Company</div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-white-white-stich font-poppins">
                <div className="relative leading-[160%] text-white">About Us</div>
                <div className="relative leading-[160%] text-white">Career</div>
                <div className="relative leading-[160%] text-white">Support</div>
                <div className="relative leading-[160%] text-white">Partners</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="relative leading-[120%] text-white">Resources</div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-white-white-stich font-poppins">
                <div className="relative leading-[160%] text-white">Help Center</div>
                <div className="relative leading-[160%] text-white">Platform Status</div>
                <div className="relative leading-[160%] text-white">Blog</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80.63rem] flex flex-row items-center justify-between text-center">
          <div className="relative leading-[160%] inline-block w-[15.13rem] shrink-0 text-white">
            © Copyright 2023 - Vostok
          </div>
          <div className="flex flex-row items-center justify-start gap-[1.75rem]">
            <div className="relative leading-[160%] text-white">Privacy Policy</div>
            <div className="relative leading-[160%] text-white">{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[146.06rem] left-[0rem] w-[94.5rem] flex flex-row py-[5.75rem] px-[6.94rem] box-border items-center justify-between text-[3rem]">
        <div className="absolute my-0 mx-[!important] top-[-0.56rem] left-[-5.5rem] bg-background-background2 [filter:blur(350px)] w-[32.06rem] h-[22.38rem] z-[0]" />
        <div className="absolute my-0 mx-[!important] top-[32.75rem] left-[9.44rem] bg-background-background3 [filter:blur(250px)] w-[21.56rem] h-[5.81rem] z-[1]" />
        <div className="w-[76.88rem] h-[9.25rem] flex flex-col items-start justify-start gap-[1.25rem] z-[2]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%]">
              <span className="text-white">{`Subscríbete para enterarte de nuestras `}</span>
              <span className="text-violet-600">novedades.</span>
            </div>
          </div>
          <div className="self-stretch relative text-[1rem] leading-[160%] font-h5 text-center text-white">
            Te mantendremos al tanto de todo el contenido nuevo que publiquemos,
            así como beneficios exclusivos.
          </div>
        </div>
      </div>
      <div id="contact" className="absolute top-[161.06rem] left-[30.56rem] w-[33rem] h-[3.75rem] text-white-dissable1 font-h5">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-background-background4 w-[32.25rem] h-[3.75rem] overflow-hidden flex flex-row py-[1rem] px-[1.5rem] box-border items-center justify-start">
          <div className="relative leading-[160%] text-white">Ingresa tu email</div>
        </div>
        <div className="absolute top-[0.25rem] left-[22rem] rounded-lg bg-darkviolet-100 h-[3.25rem] flex flex-row py-[0.75rem] px-[2.5rem] box-border items-center justify-center text-white-main-white">
          <b className="relative leading-[120%] text-white">Suscribirme</b>
        </div>
      </div>
      <div id="other-collections" className="absolute top-[99.06rem] left-[0rem] flex flex-col py-[5.75rem] px-[6.94rem] items-center justify-center gap-[4rem] text-[3rem] text-darkviolet-100">
        <div className="absolute my-0 mx-[!important] top-[37.5rem] left-[70.81rem] bg-background-background2 [filter:blur(350px)] w-[27.13rem] h-[19.06rem] z-[0]" />
        <div className="self-stretch flex flex-row items-end justify-between z-[1]">
          <div className="relative leading-[120%] flex items-center w-[64.38rem] shrink-0">
            <span className="[line-break:anywhere] w-full">
              <span className="text-white">Otras</span>
              <span className="text-darkred text-white">{` `}</span>
              <span className="text-violet-600">colecciones</span>
              <span>.</span>
            </span>
          </div>
          <div className="rounded-lg bg-darkviolet-100 h-[3.25rem] flex flex-row py-[0.75rem] px-[2.5rem] box-border items-center justify-center text-[1rem] text-white-main-white">
            <div className="relative leading-[120%]">Ver todas</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.88rem] z-[2] text-[1.75rem] text-background-background4">
          <div className="rounded-9xl bg-background-background4 box-border w-[25.63rem] flex flex-col p-[1.25rem] items-center justify-center gap-[1.5rem] text-white-main-white border-t-[1px] border-solid border-darkviolet-100">
            <div className="relative leading-[120%]"> MÁS SOLICITADA</div>
            <img
              className="relative rounded-[19px] w-[20.88rem] h-[21rem] object-cover"
              alt=""
              src="/rectangle-9669@2x.png"
            />
            <div className="w-[23.13rem] h-[5.88rem] flex flex-col items-center justify-center gap-[1rem] text-white-white-stich">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[120%]">Alien</div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between text-[0.88rem] text-white-main-white font-poppins">
                <div className="rounded-lg h-[3rem] flex flex-row py-[0.75rem] px-[2.5rem] box-border items-center justify-center">
                  <div className="relative leading-[120%]">Lorem ipsum</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-9xl bg-background-background4 box-border w-[25.63rem] flex flex-col p-[1.25rem] items-center justify-center gap-[1.5rem] border-t-[1px] border-solid border-darkviolet-100">
            <div className="relative leading-[120%]">asd</div>
            <img
              className="relative rounded-2xl w-[23.13rem] h-[21.25rem] object-cover"
              alt=""
              src="/rectangle-96691@2x.png"
            />
            <div className="w-[23.13rem] h-[5.88rem] flex flex-col items-center justify-center gap-[1rem] text-white-white-stich">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[120%]">Hyedra</div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between text-[0.88rem] text-white-main-white font-poppins">
                <div className="rounded-lg h-[3rem] flex flex-row py-[0.75rem] px-[2.5rem] box-border items-center justify-center">
                  <div className="relative leading-[120%]">Lorem ipsum</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-9xl bg-background-background4 box-border w-[25.63rem] flex flex-col p-[1.25rem] items-center justify-center gap-[1.5rem] border-t-[1px] border-solid border-darkviolet-100">
            <div className="relative leading-[120%]">asd</div>
            <img
              className="relative rounded-2xl w-[23.13rem] h-[21.25rem] object-cover"
              alt=""
              src="/rectangle-96692@2x.png"
            />
            <div className="w-[23.13rem] h-[5.88rem] flex flex-col items-center justify-center gap-[1rem] text-white-white-stich">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[120%]">Roboto</div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between text-[0.88rem] text-white-main-white font-poppins">
                <div className="rounded-lg h-[3rem] flex flex-row py-[0.75rem] px-[2.5rem] box-border items-center justify-center">
                  <div className="relative leading-[120%]">Lorem ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="who-are-we" className="absolute top-[52.63rem] left-[0rem] flex flex-row py-[5.75rem] px-[6.94rem] items-center justify-center gap-[7.75rem] text-[3rem]">
        <div className="absolute my-0 mx-[!important] top-[35.63rem] left-[66.94rem] bg-background-background2 [filter:blur(250px)] w-[21.63rem] h-[8rem] z-[0]" />
        <div className="w-[26.63rem] flex flex-col items-start justify-start z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
            <div className="self-stretch relative leading-[120%] text-white">
              Quienes somos
            </div>
            <div className="self-stretch relative text-[1rem] leading-[160%] text-justify font-poppins text-white">
              <b>Vostok</b>
              <span>{` es un emprendimiento que se destaca por su temática principal de "No conocer límites". Su misión es empoderar a las personas para que superen barreras y desafíen sus propios límites a través de la moda. La empresa se inspira en el espíritu audaz y aventurero, buscando transmitir esa pasión a través de sus diseños únicos y vanguardistas. `}</span>
            </div>
          </div>
        </div>
        <div className="relative w-[46.25rem] h-[34.94rem] z-[2]">
          <Image
            className="absolute top-[0rem] left-[20.63rem] rounded-3xl w-[25.63rem] h-[29.69rem] object-cover"
            alt=""
            src={astronautImage}
            width={200}
            height={200}
          />
          <Image
            className="absolute top-[9.94rem] left-[0rem] rounded-3xl w-[25.63rem] h-[25rem] object-cover"
            alt=""
            src={astronautImage}
            width={200}
            height={200}
          />
        </div>
        <div className="absolute my-0 mx-[!important] top-[38.44rem] left-[-8.75rem] bg-background-background4 [filter:blur(350px)] w-[18.19rem] h-[16.06rem] z-[3]" />
      </div> */}
  </>
  );
}

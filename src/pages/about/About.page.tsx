import { useState } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import ReactCardFlip from 'react-card-flip';
import VirtualCard from '@/components/cards/VirtualCard.component';
import { useMediaQuery } from 'react-responsive';
import DigitalCardDesktop from '@/components/cards/DigitalCardDesktop';

const About = () => {

    // const { isError, data } = useQuery({
    //     queryKey: ['consultants'],
    //     queryFn: async() => {
    //         return await axios.get(`${import.meta.env.VITE_API_REST_URL}/api/consultants`);
    //     }
    // });

    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)'});

    const consultants = [
        {
            name: "Henderson Prieto",
            position: "Asesor",
            image: "https://puntokoreano.com/images/asesores/henderson.jpg"
        },
        {
            name: "Marco Rodriguez",
            position: "Asesor",
            image: "https://puntokoreano.com/images/asesores/marco.jpg"
        },
        {
            name: "Camilo Prieto",
            position: "Asesor",
            image: "https://puntokoreano.com/images/asesores/camilo.jpg"
        }
    ]

    return (
        <div>
            <h1 className="text-2xl text-center font-bold py-8 mb-2 lg:text-4xl font-glegoo">¿Quienes somos?</h1>

            <ParallaxBanner className="aspect-[2/1]">
                <ParallaxBannerLayer expanded={false} speed={-20}>
                    <img src="https://puntokoreano.com/images/carrousel/TIVOLI.jpg" alt="" className="object-top h-full brightness-[.6]" loading="lazy" />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={-15}>
                    <div className="absolute -top-52 right-0 left-0 bottom-0 flex flex-col items-center justify-center px-10 max-w-[1320px] mx-auto">
                        <h1 className="text-4xl text-white font-medium font-glegoo">Objeto Social</h1>
                        <p className="text-xl text-white mt-10 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatum laboriosam temporibus amet earum qui optio voluptates. Optio, similique. Vel incidunt possimus quibusdam laboriosam similique iste, labore amet minus quia!
                        Magni labore similique asperiores? Obcaecati, natus neque dolorem ut tempora accusantium adipisci, minus odio harum nam aliquam repellendus. Modi nesciunt excepturi tempore facilis perspiciatis iusto, quisquam facere amet eligendi expedita!</p>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>


            <div className='mb-10 max-w-[1320px] mx-auto px-10'>
                <h2 data-aos="fade-up" className="text-xl text-center my-10 font-semibold lg:text-4xl">Nuestros asesores</h2>
                <div data-aos="fade-up" className="lg:flex lg:flex-wrap lg:justify-around">
                    {
                        consultants.map((asesor, idx) => {
                            const [ open, setOpen ] = useState(false);

                            return (
                                <ReactCardFlip isFlipped={open}>
                                    <div
                                    key={`${idx}-${asesor.name}`}
                                    className='relative w-80 border-4 border-[#5c4dce] p-1 rounded-2xl shadow-2xl mx-auto mb-10'
                                    >
                                        <img src={ asesor.image } alt={ asesor.name } className='brightness-[.6] rounded-2xl h-[551px] object-cover' />

                                        <button
                                        onClick={() => setOpen(true)}
                                        className='absolute top-4 right-4 bg-[#E2000E] text-white px-4 py-2 rounded-xl shadow-2xl hover:bg-[#001529] transition-all duration-300 uppercase'
                                        >
                                            Dale click
                                        </button>

                                        <section className='absolute bottom-4 right-4 text-[#ffffff] text-xl'>
                                            <h3>{ asesor.name }</h3>
                                            <p className='text-end'>{ asesor.position }</p>
                                        </section>
                                    </div>

                                    <div
                                    key={`${idx}-${asesor.name}`}
                                    onMouseLeave={() => setOpen(false)}
                                    onTouchMove={() => setOpen(false)}
                                    onTouchEnd={() => setOpen(false)}
                                    className='relative w-80 border-4 border-[#5c4dce] p-1 rounded-2xl shadow-2xl mx-auto mb-10'
                                    >
                                        {
                                            isDesktop ? <DigitalCardDesktop asesor={asesor} /> : <VirtualCard asesor={asesor} />
                                        }
                                    </div>
                                </ReactCardFlip>
                            )
                        })
                    }
                </div>
            </div>

            <div data-aos="fade-up" className='max-w-[1320px] mx-auto px-5 lg:px-10 mb-20'>
                <h2 data-aos="fade-up" className="text-xl text-center my-10 font-semibold lg:text-4xl">Donde nos ubicamos</h2>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.1331551163539!2d-74.07226717546645!3d4.655642602154403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a4dea43cd65%3A0x8c8013ea1b146459!2sPUNTO%20KOREANO%20S.A.S!5e0!3m2!1ses-419!2sco!4v1720207300180!5m2!1ses-419!2sco"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
};
export default About;
import { useState } from 'react';
import './styles.css';
import { useMediaQuery } from 'react-responsive';

const Services = () => {

    const isTable = useMediaQuery({  query: '(max-width: 1023px)' });

    const services = [
        {
            label: "Multiples medios de pago",
            icon: "https://puntokoreano.com/images/icons/billetera.png",
            images: [
                'https://th.bing.com/th/id/R.69e8f16431fc753dd0ee943c1812d5fc?rik=BYChZToMN19Y%2bQ&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.59ea334c261208fe3f1256838578aec4?rik=Ho1HlTCWk3euFQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f11%2fmastercard_logo_15.jpg&ehk=o1t%2bHB5r6J%2fLeaDKQMzyrwDj%2fa0lbQCQH1DfcAvKE0g%3d&risl=&pid=ImgRaw&r=0',
                'https://th.bing.com/th/id/R.0379e61d5f71dc454451d3fa6d1a7849?rik=uAALQW1ib2vZ4A&pid=ImgRaw&r=0',
                'https://static.vecteezy.com/system/resources/previews/022/100/701/non_2x/paypal-logo-transparent-free-png.png'
            ]
        },
        {
            label: "Despacho a nivel nacional",
            icon: "https://puntokoreano.com/images/icons/delivery.png",
            images: [
                'https://expoindustrial.com.co/wp-content/uploads/2011/04/servientrega.png',
                'https://lh3.googleusercontent.com/_4EVX3Sxi5p0jh9R2fjWOp6gJ1j2KyppA8qCIu1CpURIPveQuLzjCO-jRFNOngDKiI8',
                'https://th.bing.com/th/id/OIP.bomtCtAbJejMx0A-Ypt2WAAAAA?rs=1&pid=ImgDetMain',
                'https://inndustrial.com/storage/usuarios/images/large/15982867685f43ebb022ebf.png'
            ]
        },
        {
            label: "Servicio técnico especializado",
            icon: "https://puntokoreano.com/images/icons/connection.png",
            images: [
                'https://www.pngitem.com/pimgs/m/461-4618525_ig-small-instagram-logo-2019-hd-png-download.png',
                'https://th.bing.com/th/id/OIP.QHODby_bS81-x2of8vCIhgAAAA?rs=1&pid=ImgDetMain',
                'https://www.logolynx.com/images/logolynx/45/4583214ebb6a6a9d0ef79f4347c3baa6.jpeg'
            ]
        },
        {
            label: "Donde estamos ubicados",
            icon: "https://puntokoreano.com/images/icons/pin.png",
            images: [
                'https://th.bing.com/th/id/R.15ed711e63ff32bd7b505dad41f17de7?rik=AaAMGl1k%2bNGzFQ&pid=ImgRaw&r=0',
                'https://www.presse-citron.net/app/uploads/2020/06/waze-logo.jpg'
            ]
        },
    ]

    return (
        <div className="container-services">
            <div data-aos="fade-up" className="container-service">
                { services.map( (service, idx) => {
                    const [ isOpen, setIsOpen ] = useState<boolean>(false);

                    return (
                        <figure
                        key={`${idx}-service`}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`service ${(isOpen && !isTable) && 'bg-white rounded-2xl pb-6 absolute z-10 left-0 top-0'}`}
                        >
                            <img className='img' src={ service.icon } alt={ service.label } />
                            <figcaption>{ service.label }</figcaption>

                            {
                                (isOpen && !isTable) && (
                                    <div>
                                        { service.images.map (( image, idx ) => <img key={`${idx}-{brands}`} src={image} className='mb-2 w-28 mx-auto' />)}
                                    </div>
                                )
                            }
                        </figure>
                    )
                })}
            </div>
        </div>
    )
}
export default Services;
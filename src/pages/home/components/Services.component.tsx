import './styles.css';

const Services = () => {

    const services = [
        { label: "Multiples medios de pago", icon: "https://puntokoreano.com/images/icons/billetera.png" },
        { label: "Despacho a nivel nacional", icon: "https://puntokoreano.com/images/icons/delivery.png" },
        { label: "Servicio técnico especializado", icon: "https://puntokoreano.com/images/icons/connection.png" },
        { label: "Mejores precios del mercado", icon: "https://puntokoreano.com/images/icons/pin.png" },
    ]

    return (
        <div className="container-services"> 
            <div className="container-service">
                { services.map( (service, idx) => (
                    <figure key={idx} className="service">
                        <img src={ service.icon } alt={ service.label } />
                        <figcaption>{ service.label }</figcaption>
                    </figure> 
                ))}
            </div>
        </div>
    )
}
export default Services;                      
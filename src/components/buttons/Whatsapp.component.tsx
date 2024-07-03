import { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhatsAppButton = () => {

    const [ bottom, setBotom ] = useState<number>(2);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentheight = document.documentElement.scrollHeight;

            if( scrollPosition > documentheight - 20) {
                setBotom(7)
            } else {
                setBotom(2)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <FloatingWhatsApp
        phoneNumber="573228137408"
        accountName="John Doe"
        chatMessage="¡Hola! 👋 ¿Cómo podemos ayudarte?"
        placeholder="Escribe un mensaje ..."
        statusMessage="Normalmente, responde en menos de 1 hora"
        avatar="https://static.elfsight.com/apps/all-in-one-chat/avatars/general.jpeg"
        buttonStyle={{ bottom: `${bottom}rem` }}
        chatboxStyle={{ bottom: `${bottom + 4}rem`}}
        buttonClassName='transition-all duration-200'
        />
    )
}
export default WhatsAppButton;
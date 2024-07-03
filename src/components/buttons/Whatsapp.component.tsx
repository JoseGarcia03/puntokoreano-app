import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhatsAppButton = () => {

    return (
        <FloatingWhatsApp
        phoneNumber="573228137408"
        accountName="John Doe"
        chatMessage="¡Hola! 👋 ¿Cómo podemos ayudarte?"
        placeholder="Escribe un mensaje ..."
        statusMessage="Normalmente, responde en menos de 1 hora"
        avatar="https://static.elfsight.com/apps/all-in-one-chat/avatars/general.jpeg"
        />
    )
}
export default WhatsAppButton;
// Configuración de EmailJS
// INSTRUCCIONES PARA OBTENER TUS CREDENCIALES:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta gratuita
// 3. En el Dashboard:
//    - SERVICE_ID: Ve a "Email Services" y crea un servicio (Gmail, Outlook, etc.)
//    - TEMPLATE_ID: Ve a "Email Templates" y crea una plantilla con estas variables:
//      {{name}}, {{email}}, {{message}}, {{reply_to}}
//    - PUBLIC_KEY: Ve a "Account" > "General" y copia tu Public Key

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_2sauwmf',
  TEMPLATE_ID: 'template_sw49a0s',
  PUBLIC_KEY: '-JWnFCvQ7lV9GzZaR'
};

// EJEMPLO DE PLANTILLA DE EMAIL:
// Subject: Nuevo mensaje de {{name}} - Portafolio
// Reply to: {{reply_to}}
// Body:
// Has recibido un nuevo mensaje desde tu portafolio:
// 
// Nombre: {{name}}
// Email: {{email}}
// 
// Mensaje:
// {{message}}

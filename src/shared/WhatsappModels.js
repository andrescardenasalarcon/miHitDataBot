"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsappModels {
    MessageText(textResponse, number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "text",
            text: {
                preview_url: true,
                body: textResponse,
            },
        });
        return data;
    }
    MessageContactoText(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "contacts",
            "contacts": [
                {
                    "name": {
                        "formatted_name": "HIT DATA",
                        "first_name": "HIT DATA",
                    },
                    "org": {
                        "company": "3127399230",
                        "title": "HIT DATA"
                    },
                    "phones": [
                        {
                            "phone": "3127399230",
                            "wa_id": "573127399230",
                            "type": "WORK"
                        }
                    ],
                    "urls": [
                        {
                            "url": "https://www.hitdatasoluciones.com",
                            "type": "Nuestro Web Site"
                        }
                    ]
                }
            ]
        });
        return data;
    }
    //Buenas tardes, buenos dias, hola
    MessageImageHola(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                type: "button",
                header: {
                    type: "image",
                    image: {
                        link: "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/mente%20del%20consumidor_logo_hitadata.jpg"
                    },
                },
                body: {
                    text: "Bienvenido al siguiente nivel, somos Hit Data Agencia de Marketing y Publicidad. 😎" + number,
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "001",
                                title: "Contáctenos",
                            },
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "002",
                                title: "Nuestros Servicios",
                            },
                        },
                    ],
                },
            },
        });
        return data;
    }
    //Buenas noches, buenas tardes, Muchas gracias
    MessageImageDespedida(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "image",
            image: {
                link: "https://raw.githubusercontent.com/santiagoarias2000/whatappsHitdata/main/src/assets/emociones_hitdata(1).jpg",
                caption: 'Hasta Luego ' + `${number}` + ' desde HitData ✌️✌️ ',
            },
        });
        return data;
    }
    MessageList(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            to: `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                type: "list",
                header: {
                    type: "text",
                    text: "Hit Data",
                },
                body: {
                    text: "¿En cual de nuestros productos te encuentras interesado?",
                },
                footer: {
                    text: "Agencia de Marketing y Publicidad",
                },
                action: {
                    button: "Nuestros Servicios",
                    sections: [
                        {
                            title: "Nuestros Servicios",
                            rows: [
                                {
                                    id: "main-plan-1",
                                    title: "Gestión Redes sociales🤳",
                                    description: "Plan 1",
                                },
                                {
                                    id: "main-plan-2",
                                    title: "Desarrollo de sitio👨‍💻",
                                    description: "Plan 2",
                                },
                                {
                                    id: "main-plan-3",
                                    title: "Desarrollo de software 💻",
                                    description: "Plan 3",
                                },
                                {
                                    id: "main-plan-4",
                                    title: "Diseño gráfico 🖌️",
                                    description: "Plan 4",
                                },
                                {
                                    id: "main-plan-5",
                                    title: "Producción audiovisual 📷",
                                    description: "Plan 5",
                                },
                                {
                                    id: "main-plan-6",
                                    title: "Asesoría personalizada 🫱🏻‍🫲🏼",
                                    description: "Agendar Asesoría Plan 6",
                                },
                            ],
                        },
                        {
                            title: "Centro de Atención",
                            rows: [
                                {
                                    id: "main-agencia",
                                    title: "Contacto 📱",
                                    description: "Puedes visitar nuestra agencia.",
                                },
                                {
                                    id: "main-contacto",
                                    title: "Conócenos 💻",
                                    description: "Visita nuestra página web",
                                },
                                {
                                    id: "main-location",
                                    title: "HitData 📍",
                                    description: "Estamos ubicados en el Boulevard... ",
                                },
                            ],
                        },
                    ],
                },
            },
        });
        return data;
    }
    MessagePlan1(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                type: "button",
                header: {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
                    }
                },
                body: {
                    text: "Si tu negocio aún no está en el mercado digital y deseas dar el primer paso nosotros te ayudamos, creamos en internet una huella digital que te permitirá ingresar con fuerza a este nuevo mundo de oportunidades, de igual forma, si ya estás en internet y necesitas optimizarlo para obtener resultados, crearemos los contenidos necesarios y te asesaremos para cumplir tus objetivos comerciales.",
                },
                footer: {
                    "text": `Gestión de redes sociales`
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "001",
                                title: "Plan Hit Data",
                            }
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "002",
                                title: "Plan Básico ",
                            }
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "003",
                                title: "Agendar Asesoría",
                            }
                        },
                    ],
                }
            }
        });
        return data;
    }
    MessagePlan2(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                type: "button",
                header: {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
                    }
                },
                body: {
                    text: "Creamos sitios web que generan robustez y permiten tener la presencia de una empresa o negocio en internet de forma estructurada.",
                },
                footer: {
                    "text": `Desarrollo de sitio web`
                },
                action: {
                    buttons: [
                        {
                            type: "reply",
                            reply: {
                                id: "001",
                                title: "Sitio informativo",
                            }
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "002",
                                title: "Sitio con e-commerce",
                            }
                        },
                        {
                            type: "reply",
                            reply: {
                                id: "003",
                                title: "Agendar Asesoría",
                            }
                        },
                    ],
                }
            }
        });
        return data;
    }
    MessagePlan3(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true",
                    }
                },
                "body": {
                    "text": "Desarrollo de software."
                },
                "footer": {
                    "text": `Estos son nuestros planes ${number}`
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessagePlan4(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "footer": {
                    "text": `Diseño gráfico.`
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessagePlan5(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "footer": {
                    "text": `Producción audiovisual.`
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessagePlan6(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg?raw=true"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "footer": {
                    "text": `Estos son nuestros planes ${number}`
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessageSubPlan(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "image",
                    "image": {
                        "link": "https://github.com/santiagoarias2000/whatappsHitdata/blob/main/src/assets/PLAN_5_HIT%20DATA%20.jpg"
                    }
                },
                "body": {
                    "text": "Te gustaria ver otro plan?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si ✅ ",
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessageLocation(number) {
        const data = JSON.stringify({
            messaging_product: "whatsapp",
            to: `whatsapp:${number}`,
            type: "location",
            location: {
                latitude: "5.5441980877891694",
                longitude: "-73.35154394963322",
                name: "Hit data Agencia de marketing y publicidad 📍",
                address: "Centro Comercial Boulevard, Cl. 32 # 3-76, Tunja, Boyacá",
            },
        });
        return data;
    }
}
const whatsappModels = new WhatsappModels();
exports.default = whatsappModels;

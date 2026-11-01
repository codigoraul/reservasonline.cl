// Landings por rubro (SEO). Edita los textos aquí y vuelve a compilar.
// Solo se prometen funciones que el sistema realmente tiene: agenda, reservas online,
// servicios con duración, agenda por profesional, correo de confirmación y recordatorio,
// cambios y cancelaciones, bloqueos. No incluye ficha clínica, cobros ni videollamadas.

export type Rubro = {
  slug: string;
  nombre: string;
  corto: string;
  icon: string;
  img: string;
  alt: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  dolores: [string, string, string][]; // [icono, título, texto]
  agendaTitulo: string;
  agenda: string[];
  agendaNota: string;
  beneficios: string[];
  pasos: [string, string][];
  alcance: string;
  faqs: [string, string][];
  wa: string;
};

export const rubros: Rubro[] = [
  {
    slug: 'reservas-para-psicologos',
    nombre: 'Psicólogos',
    corto: 'psicólogos',
    icon: 'user',
    img: '/img/rubros/psicologos.jpg',
    alt: 'Persona conversando con su psicólogo durante una sesión en una consulta',
    title: 'Reservas online para psicólogos: agenda de sesiones | Reservas Online',
    description:
      'Sistema de reservas online para psicólogos y centros de psicología en Chile. Tus pacientes eligen su hora solos, sin mensajes ni llamadas. Desde $12.000 al mes.',
    h1: 'Reservas online para psicólogos',
    lead: 'Tus pacientes eligen día y hora desde el celular, a cualquier hora. Tú dejas de contestar mensajes para coordinar sesiones y te concentras en atender.',
    dolores: [
      ['bell', 'Mensajes fuera de horario', 'Las consultas por WhatsApp llegan de noche y en fin de semana. Con un enlace de reservas, el paciente agenda cuando le acomoda y tú no tienes que responder en el momento.'],
      ['refresh', 'Cambios de última hora', 'Quien necesita mover su sesión lo hace por su cuenta, y esa hora vuelve a quedar libre para otra persona.'],
      ['timer', 'Sesiones de distinta duración', 'La primera entrevista no dura lo mismo que un control. Cada tipo de sesión tiene su duración y la agenda no las cruza.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Primera entrevista: 60 min', 'Sesión individual adultos: 50 min', 'Sesión de seguimiento: 30 min', 'Terapia de pareja: 75 min'],
    agendaNota: 'Son ejemplos. Tú defines tus servicios, duraciones y horarios.',
    beneficios: [
      'Un enlace para poner en tu perfil de Instagram, en tu sitio o en tu firma de correo.',
      'Horarios por día y bloques de descanso entre sesiones.',
      'Días y vacaciones bloqueados cuando no atiendes.',
      'Confirmación por correo al reservar y aviso antes de la hora, para reducir las inasistencias.',
      'Agenda propia por profesional si trabajas con otros psicólogos en el mismo centro.',
    ],
    pasos: [
      ['Carga tus servicios', 'Indica tipos de sesión, duración y los días y horas en que atiendes.'],
      ['Comparte tu enlace', 'Pónlo donde te contactan hoy: Instagram, WhatsApp o tu sitio web.'],
      ['Recibe las reservas', 'Cada sesión agendada aparece en tu agenda y el paciente recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No guarda fichas, notas clínicas ni información de las sesiones: esa información la manejas tú por tu cuenta.',
    faqs: [
      ['¿El sistema guarda las notas o la ficha del paciente?', 'No. Solo gestiona la agenda: nombre, contacto y la hora reservada. Las notas clínicas no se registran aquí.'],
      ['¿Puedo ofrecer atención online y presencial?', 'Sí. Puedes crear servicios distintos para cada modalidad. El sistema agenda la hora; el enlace de la videollamada lo coordinas tú.'],
      ['¿Qué datos pide el formulario al paciente?', 'Nombre, correo, teléfono y, de forma opcional, un comentario. Te recomendamos no pedirles detalles clínicos en ese campo.'],
      ['¿Puedo dejar horas libres para urgencias o pacientes antiguos?', 'Sí. Bloqueas los horarios que no quieres ofrecer públicamente y el resto queda disponible para reservar.'],
      ['¿Sirve para un centro con varios psicólogos?', 'Sí. Cada profesional tiene su agenda, sus servicios y sus días libres, y el paciente elige con quién reservar.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para psicólogos.',
  },
  {
    slug: 'reservas-para-abogados',
    nombre: 'Abogados',
    corto: 'abogados',
    icon: 'briefcase',
    img: '/img/rubros/abogados.jpg',
    alt: 'Abogado explicando los términos de un acuerdo a sus clientes en una reunión',
    title: 'Reservas online para abogados y estudios jurídicos | Reservas Online',
    description:
      'Agenda de consultas online para abogados y estudios jurídicos en Chile. Tus clientes reservan su reunión solos y tú ordenas la agenda del estudio. Desde $12.000 al mes.',
    h1: 'Reservas online para abogados',
    lead: 'Que tus clientes reserven su consulta sin llamadas ni correos de ida y vuelta. Tú abres los horarios que quieres ofrecer y la agenda del estudio queda ordenada.',
    dolores: [
      ['clock', 'Reuniones que se cruzan', 'Una audiencia, un trámite y una consulta el mismo día. Bloqueas tus horas ocupadas y solo se ofrecen las horas realmente libres.'],
      ['users', 'Estudio con varios abogados', 'Cada abogado tiene su agenda, sus tipos de consulta y sus días fuera de oficina. El cliente elige con quién reunirse.'],
      ['calendarx', 'Días de audiencias y feriados', 'Bloqueas el día completo o solo una franja, sin tener que avisar uno por uno a quien quería agendar.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Primera consulta: 30 min', 'Revisión de documentos: 45 min', 'Reunión de seguimiento: 30 min', 'Asesoría a empresas: 60 min'],
    agendaNota: 'Son ejemplos. Tú defines tus servicios, duraciones y horarios.',
    beneficios: [
      'Un enlace de reservas para tu sitio web, tu firma de correo y tus perfiles profesionales.',
      'Consultas con duración definida, para que una reunión larga no pise a la siguiente.',
      'Bloqueo de días de audiencias, vacaciones y feriados.',
      'Confirmación por correo y aviso antes de la hora.',
      'Agenda individual por abogado en estudios con equipo.',
    ],
    pasos: [
      ['Define tus consultas', 'Crea cada tipo de reunión con su duración y asigna quién la atiende.'],
      ['Publica tu enlace', 'Ponlo en tu sitio, tu firma de correo y tus perfiles.'],
      ['Recibe las reuniones', 'Cada consulta reservada aparece en la agenda del abogado y el cliente recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No gestiona causas, documentos ni cobros: solo ordena quién se reúne contigo y cuándo.',
    faqs: [
      ['¿El sistema guarda información de las causas?', 'No. Solo registra los datos de contacto y la hora reservada. Las causas y los documentos los manejas en tus propios sistemas.'],
      ['¿Puedo cobrar la consulta al reservar?', 'No, el sistema no incluye pagos. La coordinación del cobro la haces tú como lo haces hoy.'],
      ['¿Puedo tener consultas de distinta duración?', 'Sí. Cada tipo de consulta tiene su duración y la agenda no deja que se crucen.'],
      ['¿Sirve para un estudio con varios abogados?', 'Sí. Cada abogado tiene su agenda y sus servicios, y el cliente elige con quién reservar.'],
      ['¿Cómo evito que me reserven en horas de audiencia?', 'Bloqueas esos horarios, o el día completo, y dejan de aparecer como disponibles.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para abogados.',
  },
  {
    slug: 'reservas-para-veterinarias',
    nombre: 'Veterinarias',
    corto: 'veterinarias',
    icon: 'building',
    img: '/img/rubros/veterinarias.jpg',
    alt: 'Veterinaria sonriendo junto a una niña y su perro durante una consulta',
    title: 'Reservas online para veterinarias y clínicas veterinarias | Reservas Online',
    description:
      'Agenda online para veterinarias en Chile: los dueños reservan consulta, vacunas o peluquería desde el celular. Menos llamadas y menos horas perdidas. Desde $12.000 al mes.',
    h1: 'Reservas online para veterinarias',
    lead: 'Los dueños de mascotas reservan consulta, vacunas o peluquería desde el celular. Tu recepción deja de contestar el teléfono para dar horas.',
    dolores: [
      ['phone', 'El teléfono nunca para', 'Cada llamada para pedir hora interrumpe la atención. Con un enlace de reservas, el dueño agenda solo y tu equipo se concentra en los pacientes.'],
      ['timer', 'Consultas, vacunas y peluquería', 'No duran lo mismo. Cada servicio tiene su duración y la agenda reserva el tiempo completo.'],
      ['bell', 'Dueños que olvidan la hora', 'El correo de confirmación y el aviso antes de la hora ayudan a que las horas no queden vacías.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Consulta general: 30 min', 'Vacunación: 15 min', 'Control de cachorros: 20 min', 'Peluquería canina: 90 min'],
    agendaNota: 'Son ejemplos. Tú defines tus servicios, duraciones y horarios.',
    beneficios: [
      'Un enlace para Instagram, WhatsApp y Google, donde los dueños te encuentran.',
      'Agenda por veterinario y por peluquero, cada uno con sus horarios.',
      'Servicios con duración distinta, sin cruces entre una vacuna y una consulta larga.',
      'Bloqueo de feriados, turnos y vacaciones.',
      'Confirmación y aviso por correo antes de la hora.',
    ],
    pasos: [
      ['Crea tus servicios', 'Consulta, vacunas, peluquería: cada uno con su duración y su profesional.'],
      ['Comparte tu enlace', 'Ponlo en Instagram, en tu ficha de Google y en tu WhatsApp.'],
      ['Recibe las reservas', 'Cada hora agendada aparece en la agenda de la clínica y el dueño recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No incluye ficha clínica de la mascota, historial de vacunas ni cobros.',
    faqs: [
      ['¿Guarda la ficha o el historial de mi paciente?', 'No. Solo registra la hora reservada y los datos de contacto del dueño. La ficha clínica la llevas en tu propio sistema.'],
      ['¿Puedo ofrecer peluquería y consultas en la misma agenda?', 'Sí. Cada servicio tiene su duración y se asigna al profesional que lo realiza.'],
      ['¿Sirve si tengo varios veterinarios?', 'Sí. Cada profesional tiene su agenda y el dueño puede elegir con quién reservar.'],
      ['¿Qué pasa con las urgencias?', 'Las urgencias no se agendan por este medio. Puedes dejar tu teléfono de urgencias a la vista y bloquear los horarios que reservas para ellas.'],
      ['¿El dueño necesita instalar una aplicación?', 'No. Reserva desde el navegador de su celular, sin crear una cuenta.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para veterinarias.',
  },
  {
    slug: 'reservas-para-clinicas-esteticas',
    nombre: 'Clínicas estéticas',
    corto: 'clínicas y centros de estética',
    icon: 'calendarx',
    img: '/img/rubros/estetica.jpg',
    alt: 'Cosmetóloga realizando un tratamiento facial a una clienta en un centro de estética',
    title: 'Reservas online para clínicas y centros de estética | Reservas Online',
    description:
      'Agenda online para clínicas estéticas y centros de belleza en Chile. Tus clientas reservan tratamientos solas, con la duración correcta de cada uno. Desde $12.000 al mes.',
    h1: 'Reservas online para clínicas estéticas',
    lead: 'Tus clientas eligen su tratamiento, su profesional y su hora desde el celular. Cada tratamiento reserva el tiempo que realmente necesita.',
    dolores: [
      ['timer', 'Tratamientos de distinta duración', 'Una limpieza facial no dura lo que una sesión de depilación láser. Cada tratamiento reserva su tiempo y evita que se atrasen unos con otros.'],
      ['users', 'Varias profesionales y cabinas', 'Cada profesional tiene su agenda y sus tratamientos. La clienta elige con quién quiere atenderse.'],
      ['bell', 'Clientas que no llegan', 'Correo de confirmación y aviso antes de la hora para que menos citas queden vacías.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Evaluación inicial: 30 min', 'Limpieza facial: 60 min', 'Depilación láser, zona pequeña: 20 min', 'Control de tratamiento: 20 min'],
    agendaNota: 'Son ejemplos. Tú defines tus tratamientos, duraciones y horarios.',
    beneficios: [
      'Un enlace de reservas para Instagram, WhatsApp y tu sitio web.',
      'Tratamientos con duración propia y asignados a quien los realiza.',
      'Agenda por profesional, con sus días libres y vacaciones.',
      'La clienta puede cambiar o anular su hora por su cuenta, y esa hora vuelve a quedar libre.',
      'Confirmación y aviso por correo antes de la hora.',
    ],
    pasos: [
      ['Carga tus tratamientos', 'Cada uno con su duración y la profesional que lo realiza.'],
      ['Comparte tu enlace', 'Ponlo en tu Instagram y en las historias donde hoy pides que te escriban.'],
      ['Recibe las reservas', 'Cada hora aparece en la agenda de la profesional y la clienta recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No incluye ficha clínica, consentimientos informados, fotos de antes y después ni cobros.',
    faqs: [
      ['¿El sistema guarda la ficha o el consentimiento de la clienta?', 'No. Solo registra la hora reservada y los datos de contacto. La ficha y los consentimientos los manejas en tus propios documentos.'],
      ['¿Puedo tener tratamientos de distinta duración?', 'Sí. Cada tratamiento tiene su duración y la agenda reserva el tiempo completo.'],
      ['¿Puedo tener varias profesionales con su propia agenda?', 'Sí. Cada una tiene sus horarios, sus tratamientos y sus días libres.'],
      ['¿Puedo cobrar un abono al reservar?', 'No, el sistema no incluye pagos. El abono lo coordinas tú como lo haces hoy.'],
      ['¿Qué pasa si la clienta necesita cambiar su hora?', 'Puede cambiarla o anularla por su cuenta, y esa hora vuelve a estar disponible.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para mi clínica o centro de estética.',
  },
  {
    slug: 'reservas-para-clinicas-dentales',
    nombre: 'Clínicas dentales',
    corto: 'clínicas dentales y dentistas',
    icon: 'building',
    img: '/img/rubros/dental.jpg',
    alt: 'Ortodoncista sonriendo junto a un paciente con brackets en una clínica dental',
    title: 'Reservas online para clínicas dentales y dentistas | Reservas Online',
    description:
      'Agenda online para clínicas dentales en Chile: tus pacientes reservan hora solos, con agenda por dentista y duración por tratamiento. Desde $12.000 al mes.',
    h1: 'Reservas online para clínicas dentales',
    lead: 'Tus pacientes reservan su hora con el dentista que prefieren, a cualquier hora del día. Tu recepción deja de coordinar horas por teléfono y mensajes.',
    dolores: [
      ['users', 'Varios dentistas y especialidades', 'Cada profesional tiene su agenda, sus tratamientos y sus días libres. El paciente elige con quién atenderse.'],
      ['timer', 'Tratamientos largos y controles cortos', 'Una limpieza, un control de ortodoncia y una extracción no duran lo mismo. Cada uno reserva su tiempo.'],
      ['refresh', 'Pacientes que cambian su hora', 'Cambian o anulan por su cuenta y la hora vuelve a quedar libre, sin que recepción tenga que intervenir.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Evaluación inicial: 30 min', 'Limpieza dental: 45 min', 'Control de ortodoncia: 20 min', 'Tratamiento de mayor duración: 60 min'],
    agendaNota: 'Son ejemplos. Tú defines tus tratamientos, duraciones y horarios.',
    beneficios: [
      'Un enlace de reservas para tu sitio web, Instagram, Google y WhatsApp.',
      'Agenda por dentista con sus horarios y días libres.',
      'Tratamientos con duración propia, sin cruces entre un control y un procedimiento largo.',
      'Bloqueo de feriados, vacaciones y días de capacitación.',
      'Confirmación y aviso por correo antes de la hora.',
    ],
    pasos: [
      ['Configura tus tratamientos', 'Cada uno con su duración y el dentista que lo realiza.'],
      ['Comparte tu enlace', 'Ponlo en tu sitio, tu ficha de Google y tus redes.'],
      ['Recibe las reservas', 'Cada hora aparece en la agenda del dentista y el paciente recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No incluye ficha clínica, odontograma, radiografías ni cobros.',
    faqs: [
      ['¿Guarda la ficha clínica o el odontograma del paciente?', 'No. Solo registra la hora reservada y los datos de contacto. La ficha clínica la llevas en tu propio sistema.'],
      ['¿Puedo agendar por dentista y por especialidad?', 'Sí. Cada profesional tiene sus propios tratamientos y horarios, y el paciente elige con quién reservar.'],
      ['¿Sirve para una clínica con varios dentistas?', 'Sí. El precio depende de cuántos profesionales tienen agenda propia, y parte en $12.000 al mes hasta 3 profesionales.'],
      ['¿Qué pasa con las urgencias dentales?', 'Las urgencias no se agendan por este medio. Puedes dejar tu teléfono de urgencias a la vista y bloquear horarios para atenderlas.'],
      ['¿Recibe un recordatorio el paciente?', 'Sí. Recibe la confirmación por correo al reservar y un aviso antes de la hora.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para mi clínica dental.',
  },

  {
    slug: 'reservas-para-nutricionistas',
    nombre: 'Nutricionistas',
    corto: 'nutricionistas',
    icon: 'user',
    img: '/img/rubros/nutricionistas.jpg',
    alt: 'Nutricionista mostrando un plan alimentario a una paciente durante una consulta',
    title: 'Reservas online para nutricionistas: agenda de consultas | Reservas Online',
    description:
      'Agenda online para nutricionistas en Chile: tus pacientes reservan consulta y controles solos, sin coordinar por WhatsApp. Desde $12.000 al mes.',
    h1: 'Reservas online para nutricionistas',
    lead: 'Tus pacientes reservan su primera consulta y sus controles desde el celular, cuando les acomoda. Tú dejas de coordinar horas por mensaje y ordenas tu semana.',
    dolores: [
      ['refresh', 'Controles que se repiten', 'Un paciente vuelve cada pocas semanas. Con un enlace de reservas agenda su siguiente control solo, sin escribirte cada vez.'],
      ['timer', 'Consulta inicial más larga que un control', 'La primera evaluación toma más tiempo que un seguimiento. Cada tipo de consulta tiene su duración y no se cruzan.'],
      ['bell', 'Inasistencias que cuestan una hora', 'El paciente recibe la confirmación al reservar y un aviso antes de la hora, y si no puede ir, cancela o cambia por su cuenta.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Primera consulta: 60 min', 'Control de seguimiento: 30 min', 'Control rápido: 20 min', 'Consulta online: 40 min'],
    agendaNota: 'Son ejemplos. Tú defines tus servicios, duraciones y horarios.',
    beneficios: [
      'Un enlace para tu Instagram, tu sitio web y tu ficha de Google.',
      'Atención presencial y online como servicios distintos.',
      'Horarios por día, con pausas entre consultas.',
      'Días y vacaciones bloqueados cuando no atiendes.',
      'Confirmación por correo al reservar y aviso antes de la hora.',
    ],
    pasos: [
      ['Carga tus consultas', 'Primera consulta, controles y la duración de cada una.'],
      ['Comparte tu enlace', 'Ponlo en tu perfil, en tu sitio o en tu firma de correo.'],
      ['Recibe las reservas', 'Cada hora aparece en tu agenda y el paciente recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No incluye pautas alimentarias, fichas de pacientes, mediciones ni cobros.',
    faqs: [
      ['¿Guarda la pauta o los datos de salud del paciente?', 'No. Solo registra nombre, contacto y la hora reservada. Las pautas y mediciones las llevas tú en tu propio sistema.'],
      ['¿Puedo ofrecer consultas online y presenciales?', 'Sí. Creas un servicio para cada modalidad. El sistema agenda la hora y tú coordinas el enlace de la videollamada.'],
      ['¿El paciente puede reservar su control de seguimiento solo?', 'Sí. Entra al enlace, elige un horario disponible y recibe su confirmación por correo.'],
      ['¿Sirve si trabajo en un centro con otros profesionales?', 'Sí. Cada profesional tiene su agenda, sus servicios y sus días libres.'],
      ['¿Puedo cobrar la consulta al reservar?', 'No. El sistema no procesa pagos. El cobro lo sigues haciendo como hoy, por transferencia o en la consulta.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para nutricionistas.',
  },
  {
    slug: 'reservas-para-kinesiologos',
    nombre: 'Kinesiólogos',
    corto: 'kinesiólogos',
    icon: 'users',
    img: '/img/rubros/kinesiologos.jpg',
    alt: 'Kinesióloga evaluando el cuello de una paciente durante una sesión',
    title: 'Reservas online para kinesiólogos y centros de kinesiología | Reservas Online',
    description:
      'Agenda online para kinesiólogos en Chile: tus pacientes reservan sus sesiones solos y tú organizas las horas por profesional. Desde $12.000 al mes.',
    h1: 'Reservas online para kinesiólogos',
    lead: 'Tus pacientes reservan sus sesiones de kinesiología sin llamar ni escribir. Tú ves la agenda completa del día y evitas las horas vacías por cambios de última hora.',
    dolores: [
      ['clock', 'Tratamientos con varias sesiones', 'Un paciente viene varias veces por semana. Cada sesión se reserva en su horario y queda en tu agenda sin coordinar cada una por mensaje.'],
      ['users', 'Varios kinesiólogos, una sola agenda', 'Cada profesional tiene sus horarios y sus servicios. El paciente elige con quién atenderse.'],
      ['refresh', 'Horas que se caen a última hora', 'Quien no puede asistir cambia o cancela por su cuenta y esa hora vuelve a quedar disponible.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Evaluación inicial: 60 min', 'Sesión de kinesiología: 45 min', 'Sesión de seguimiento: 30 min', 'Atención a domicilio: 60 min'],
    agendaNota: 'Son ejemplos. Tú defines tus servicios, duraciones y horarios.',
    beneficios: [
      'Un enlace de reservas para tu sitio, Instagram y WhatsApp.',
      'Agenda por kinesiólogo con sus horarios y días libres.',
      'Servicios con duración propia, sin cruces entre evaluaciones y sesiones.',
      'Bloqueo de feriados, vacaciones y días en que no atiendes.',
      'Confirmación por correo y aviso antes de la hora.',
    ],
    pasos: [
      ['Configura tus servicios', 'Evaluación, sesiones y la duración de cada una.'],
      ['Comparte tu enlace', 'Ponlo en tu sitio, tu ficha de Google y tus redes.'],
      ['Recibe las reservas', 'Cada sesión aparece en tu agenda y el paciente recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No incluye ficha clínica, planes de ejercicios, bonos ni cobros.',
    faqs: [
      ['¿Guarda la ficha o el plan de tratamiento del paciente?', 'No. Solo registra los datos de contacto y la hora reservada. La ficha clínica la llevas en tu propio sistema.'],
      ['¿Puedo agendar sesiones recurrentes?', 'Cada sesión se reserva como una hora independiente. El paciente puede agendar la siguiente cuando termina o tú le dejas el enlace.'],
      ['¿Sirve para un centro con varios kinesiólogos?', 'Sí. Cada profesional tiene su agenda y el paciente elige con quién reservar. Parte en $12.000 al mes hasta 3 profesionales.'],
      ['¿Puedo ofrecer atención a domicilio?', 'Sí. Creas un servicio de atención a domicilio con su duración. La dirección del paciente la coordinas con él.'],
      ['¿Maneja bonos o convenios con isapres?', 'No. El sistema solo gestiona la agenda. Los bonos y convenios los sigues gestionando como hoy.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para kinesiólogos.',
  },
  {
    slug: 'reservas-para-peluquerias',
    nombre: 'Peluquerías',
    corto: 'peluquerías y barberías',
    icon: 'clock',
    img: '/img/rubros/peluquerias.jpg',
    alt: 'Estilista peinando a un cliente en una peluquería',
    title: 'Reservas online para peluquerías y barberías | Reservas Online',
    description:
      'Agenda online para peluquerías y barberías en Chile: tus clientes reservan su hora con el estilista que prefieren, sin llamadas ni mensajes. Desde $12.000 al mes.',
    h1: 'Reservas online para peluquerías y barberías',
    lead: 'Tus clientes eligen servicio, estilista y hora desde el celular, a cualquier hora. Tú dejas de contestar mensajes mientras atiendes y llenas mejor la agenda.',
    dolores: [
      ['phone', 'El teléfono suena con las manos ocupadas', 'Mientras cortas o tiñes no puedes contestar. Con un enlace de reservas, el cliente agenda solo y tú sigues trabajando.'],
      ['timer', 'Servicios de duraciones muy distintas', 'Un corte, un color y un tratamiento no duran lo mismo. Cada servicio reserva su tiempo y no se cruzan.'],
      ['users', 'Cada cliente tiene su estilista', 'Cada profesional tiene su propia agenda y el cliente reserva con quien prefiere.'],
    ],
    agendaTitulo: 'Un ejemplo de cómo se ve tu agenda',
    agenda: ['Corte de pelo: 30 min', 'Corte y barba: 45 min', 'Color completo: 120 min', 'Peinado: 40 min'],
    agendaNota: 'Son ejemplos. Tú defines tus servicios, duraciones y horarios.',
    beneficios: [
      'Un enlace para poner en Instagram, en tu ficha de Google y en WhatsApp.',
      'Agenda por estilista con sus horarios y días libres.',
      'Servicios con duración propia, desde un corte rápido hasta un color largo.',
      'Bloqueo de feriados, vacaciones y días en que no atiendes.',
      'Confirmación por correo y aviso antes de la hora, para reducir las faltas.',
    ],
    pasos: [
      ['Carga tus servicios', 'Cortes, color, barba y la duración de cada uno.'],
      ['Comparte tu enlace', 'Ponlo en tu Instagram, en tu ficha de Google y en tu WhatsApp.'],
      ['Recibe las reservas', 'Cada hora aparece en la agenda del estilista y el cliente recibe su confirmación.'],
    ],
    alcance: 'Es un sistema de agenda y reservas. No incluye caja, ventas de productos, inventario ni cobros.',
    faqs: [
      ['¿Puedo tener varios estilistas en la misma agenda?', 'Sí. Cada profesional tiene sus horarios, sus servicios y sus días libres, y el cliente elige con quién reservar. Parte en $12.000 al mes hasta 3 profesionales.'],
      ['¿Sirve para barberías?', 'Sí. Se configura igual: servicios cortos como un corte o un perfilado de barba, cada uno con su duración.'],
      ['¿Puedo cobrar el servicio al reservar?', 'No. El sistema no procesa pagos. El cobro lo haces en el local, como hoy.'],
      ['¿Qué pasa si un cliente no llega?', 'Recibe la confirmación al reservar y un aviso antes de la hora. Si no puede asistir, puede cancelar o cambiar su hora y esa hora queda libre.'],
      ['¿Los clientes necesitan crear una cuenta?', 'No. Eligen servicio, día y hora, dejan su nombre y contacto, y reciben su confirmación por correo.'],
    ],
    wa: 'Hola, quiero información de Reservas Online para mi peluquería.',
  },
];

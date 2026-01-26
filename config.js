// config.js
const datos = [
    { fecha: '2026-01-12', texto: "Como un testimonio de cada día de esta increíble aventura, he reunido estas pequeñas sensaciones. Cada una guarda un pensamiento, un agradecimiento, un recuerdo o un deseo para nuestro futuro. No son solo postales, son páginas sueltas de nuestra historia, un recordatorio de que, incluso en lo cotidiano, hay magia cuando estás tú. Para ti, en quien mi mundo encuentra su razón de ser. Con todo mi amor, ahora y siempre." },
    { fecha: '2026-01-13', texto: "Un nuevo día, una nueva página. Las postales empiezan desde hoy porque no necesito esperar a una ocasión especial para tener un detalle y hacerte saber lo mucho que te quiero y lo feliz que soy contigo. Que este día te trate con la misma dulzura que tu tratas a mi corazón, frente al caos elige una sonrisa, que el trabajo no nuble tu brillo, que tengas un Hermoso Día." },
    //{ fecha: '2026-01-14', texto: "A veces, en medio del ruido que nos rodea, me detenego a pensar en lo increíblemente afortunado que soy por haberte conocido, que tu me hayas encontrado. No es un sentimiento del pasado, es algo que crece en mi cada vez que recuerdo tu sonrisa, tu mirada, tu calor y cariño de un abrazo o un pie encima de mi en la cama. Gracias por ser quien eres, gracias por ser tu, doy gracias por que se hayan cruzado nuestros caminos." },
    { fecha: '2026-01-14', texto: "En estos días a veces demasiado ruidosos y exigentes, quiero que mi amor sea tu zona de paz y silencio. El lugar donde puedas soltar las cargas, ser imperfecta, cansarte, relajarte y simplemente ser tu. No tienes que demostrar nada, mi amor no es un premio por lo que logras hacer, es tu red de seguridad cuando caigas, tu punto de apoyo cuando quieras levantarte y tu celebración cuando vueles. Que tengas un lindo día." },
    { fecha: '2026-01-15', texto: "A veces siento que las palabras se quedan cortas cuando intento decirte lo que provocas en mí. No es que no las encuentre, es que ninguna parece alcanzar la profundidad de lo que siento desde que llegaste a mi vida. Estás en mis pensamientos de una manera tan suave y tan constante que a veces me sorprendo sonriendo sin razón aparente, como si tu recuerdo se hubiera vuelto un reflejo natural. Mi día empieza y termina pensando en ti. ¡Eres lo mejor que me ha pasado!" },
    { fecha: '2026-01-16', texto: "Contigo descubrí que el amor verdadero no necesita gritar para sentirse inmenso. Se anuncia en pequeños detalles: en la calma que llega cuando escucho tu voz, en la forma en que tu risa ordena mis días, en ese brillo casi imperceptible que dejas en todo lo que tocas. Tú transformas lo cotidiano sin esfuerzo, como si tu sola presencia supiera acomodar mis horas, mis dudas y mis anhelos. Eres la princesa de mis sueños hecha realidad." },
    { fecha: '2026-01-17', texto: "Me maravilla cómo, sin pedirlo, te convertiste en el lugar donde mi corazón encuentra descanso. Tus gestos, tus palabras, tu forma de mirar el mundo… todo en ti me hace querer ser mejor, caminar con más esperanza y construir algo que valga la pena. Gracias por tu ternura, por tu paciencia, por la manera tan hermosa en que me acompañas." },
    { fecha: '2026-01-18', texto: "Sé que el amor se elige y quiero que sepas que te elijo cada día. Te elijo con mis certezas, con mis miedos, con mis ganas infinitas de crecer contigo. Lo nuestro me hace creer en los milagros cotidianos, en los encuentros que cambian destinos, en la suerte de coincidir con alguien como tú. Aquí estoy, contigo y para ti, con un corazón que late un poco más fuerte cada vez que te piensa." },
    { fecha: '2026-01-19', texto: "Hoy me descubrí pensando en ti sin siquiera darme cuenta. Fue como si tu nombre hubiera aparecido entre mis ideas con la misma naturalidad con la que aparece la luz al amanecer. Me di cuenta de que ya formas parte de mis días de un modo tan profundo que incluso en mis distracciones estás tú, suave, tranquila, guardando un espacio que nadie más tiene." },
    { fecha: '2026-01-20', texto: "A veces me pregunto cómo fue que tu presencia se volvió tan imprescindible. Y entonces recuerdo la primera vez que sentí esa calma que traes contigo, esa serenidad que no hace ruido, pero que llena todo de un modo casi sagrado. Fue ahí cuando supe que lo que estaba naciendo tenía algo especial, algo que no se encuentra a menudo y que, cuando pasa, no se debe soltar." },
    { fecha: '2026-01-21', texto: "Lo que más me conmueve de ti no es sólo tu ternura, sino la forma en que me miras como si vieras en mí algo que incluso yo olvido. Contigo he aprendido que amar también significa confiar en la luz que el otro ve en uno. Gracias por creer en mí, por sostenerme cuando no lo pido, por regalarme un cariño que no presiona, pero que abraza." },
    { fecha: '2026-01-22', texto: "Quiero que sepas que estoy aquí para ti, no sólo en los días fáciles, sino también en esos que pesan más de la cuenta. Para caminar contigo, para escucharte, para celebrar tus alegrías y también para ser refugio cuando haga falta. Eres la historia más bonita que el destino decidió escribir en mi vida." },
    { fecha: '2026-01-23', texto: "Hoy pensé en cuánto has cambiado mi manera de sentir el mundo. No fue de golpe ni con estruendo, sino de esa forma sutil y delicada que tienes para entrar en la vida de alguien sin desordenarlo, pero transformándolo todo. A veces me pregunto si tú sabes el impacto que tienes, si te das cuenta de cómo alumbras hasta mis días más apagados." },
    { fecha: '2026-01-24', texto: "Me encanta la serenidad que traes contigo. Es como si tu presencia fuera un recordatorio constante de que no estoy solo, de que hay un corazón que late al ritmo del mío, dispuesto a caminar conmigo a pesar de las dudas y los miedos. Tu ternura me ha enseñado que amar no es perderse, sino encontrarse en el otro con más claridad." },
    { fecha: '2026-01-25', texto: "Hay algo en tus gestos, en tu forma de escucharme, en cómo sostienes mis palabras como si fueran valiosas. Eso me desnuda el alma de una manera tan única que casi da vértigo. Pero también me da paz, una paz que hacía mucho no sentía y que hoy se ha vuelto indispensable." },
    { fecha: '2026-01-26', texto: "Gracias por mirarme con esa complicidad tan tuya, por estar, por quedarte, por hacer de mi vida un lugar más cálido. Quiero que sepas que también estoy aquí para ti, dispuesto a cuidarte con la misma dedicación. Eres mi lugar favorito, incluso cuando el mundo se vuelve difícil." },
    { fecha: '2026-01-27', texto: "Hoy no tengo texto para ti pprque seguro ya no lees esto pero por si acaso. Lindo despertar reina, que tengas un dia especial e increible comi tu 🩷" },
    { fecha: '2026-01-28', texto: "lorem ipsum17" },
    { fecha: '2026-01-29', texto: 'Quiero confesarte que este mes ha tenido días tan duros como hermosos, verte tan desconectada de mi me partía el alma, intentar día tras día llegar a ti que poco a poco ibas cediendo pero cuando me dabas un stop lloraba por dentro, me hacía pedazos, pero la constancia está danndo frutos, el proceso ha sido hermoso, estamos aprendiendo de nuestro pasado, viviendo el presente y construyendo el futuro, yo me siento super feliz, espero que tu tambien lo estés. Feliz 1er mes de reconexión de nuestra relación.' },
    { fecha: '2026-01-30', texto: 'A veces pienso en como seria estar con alguien "más fácil". Alguien sin nuestras heridas, sin nuestros complejos. Y la verdad es que probablemente sería más simple, menos peleas, menos trabajo, pero tambien seria menos profundo, menos real, menos transformador. Porque lo fácil no nos hace crecer, lo difícil si, y contigo he crecido de formas que nunca imaginé. Así que aunque sea trabajo duro, es el trabajo que elijo. Porque contigo me estoy convirtiendo en la mejor version de mi.' },
    { fecha: '2026-01-31', texto: "lorem ipsum4" },
    { fecha: '2026-02-01', texto: "Hay momentos en los que me detengo a contemplar lo que somos y entonces aparece en mí una gratitud inmensa, casi imposible de explicar. Es como si el universo se hubiera detenido un instante sólo para permitirnos coincidir en el tiempo perfecto. No dejo de maravillarme de cómo llegaste, sin prisa y sin ruido, pero con una claridad que iluminó todo" },
    { fecha: '2026-02-02', texto: "Lo que más admiro en ti es esa mezcla de fuerza y dulzura que te vuelve tan especial. Tienes una manera única de entender el mundo, de abrazar la vida y de entregarte a lo que amas. Y, sin darte cuenta, me has enseñado a mirar las cosas con más paciencia, con más ternura, con más esperanza. Creo que te extrañaría aunque nunca nos hubiéramos conocido." },
    { fecha: '2026-02-03', texto: "A veces te observo en silencio y me sorprende cómo puedes ser tantas cosas a la vez: mi paz en los días grises, mi risa en los días ligeros, mi impulso en los días difíciles. Contigo he aprendido que amar no es un acto grandioso, sino la suma de gestos pequeños que se vuelven eternos cuando nacen del corazón." },
    { fecha: '2026-02-04', texto: "Gracias por la forma en que me sostienes, por cómo confías en nosotros, por regalarme un cariño que se siente limpio, honesto y lleno de futuro. Cada paso a tu lado me confirma que quiero seguir caminando contigo, descubriendo nuevas razones para elegirnos una y otra vez." },
    { fecha: '2026-02-05', texto: "Quisiera poder explicarte lo que provocas en mí, pero es difícil describir lo que se siente cuando alguien llega para cambiarlo todo sin romper nada, sólo acomodando con suavidad lo que ya estaba. Tú haces eso: ordenas mis días, alivias mis miedos y llenas mis horas con una ternura que no sabía que necesitaba tanto." },
    { fecha: '2026-02-06', texto: "Hay algo en ti que me desarma, una luz suave que aparece incluso cuando no haces nada especial. Es tu manera de ser, tu forma de ocupar el espacio sin imponerte, tu presencia que transforma cualquier momento en un lugar seguro. Me gusta cómo llegas y todo se acomoda, como si tu alegría y tu calma supieran ordenar mis pensamientos más dispersos." },
    { fecha: '2026-02-07', texto: "Desde que estás en mi vida, he descubierto que la felicidad no siempre viene de momentos extraordinarios. A veces basta verte sonreír, escuchar tu voz, sentir tu mano buscar la mía. Es increíble cómo los detalles más simples se han vuelto mis favoritos, porque todos tienen un poco de ti." },
    { fecha: '2026-02-08', texto: "A tu lado aprendí que el amor también es paciencia, que no se trata de apresurarlo, sino de dejar que crezca con la suavidad con la que crecen las cosas que nacen de verdad. Me inspiras a ser mejor, a enfrentar mis días con más valentía y a creer en aquello que antes me parecía distante." },
    { fecha: '2026-02-09', texto: "Quiero que sepas que aquí estoy, dispuesto a cuidarte, a escucharte, a construir contigo algo que perdure más allá del tiempo. Lo nuestro no es sólo un sentimiento, es un camino que quiero recorrer contigo, paso a paso, sin miedo y con el corazón abierto. Gracias por existir en mi vida de esta manera tan hermosa." },
    { fecha: '2026-02-10', texto: "Hoy desperté con una sensación cálida, como si tu recuerdo hubiera estado conmigo desde antes de abrir los ojos. Hay algo en ti que se queda, que permanece, que acompaña. Y no sabes cuánto agradezco eso. A veces siento que tu presencia se ha vuelto como una luz tenue que nunca se apaga, incluso en mis días más agotadores." },
    { fecha: '2026-02-11', texto: "" },
    { fecha: '2026-02-12', texto: "Me encanta cómo me escuchas, cómo te ríes conmigo, cómo entiendes mis silencios. Me hace feliz la forma en que haces sencillo lo que antes parecía complicado. Y sobre todo, me conmueve cómo logras que cada día tenga un motivo nuevo para agradecerte. Eres mi alegría, mi refugio y mi mayor ilusión." },
    { fecha: '2026-02-13', texto: "Sé que no todo será perfecto, pero contigo aprendí que el amor verdadero no se trata de evitar las tormentas, sino de saber tomarse de la mano y atravesarlas juntos. Quiero estar para ti de la misma manera en que tú estás para mí: presente, sincero, paciente y lleno de cariño." },
    { fecha: '2026-02-14', texto: "lorem ipsum18" },
    { fecha: '2026-02-15', texto: "lorem ipsum19" },
    { fecha: '2026-02-16', texto: "lorem ipsum18" },
    { fecha: '2026-02-16', texto: "lorem ipsum19" },
    { fecha: '2026-02-18', texto: "lorem ipsum18" },
    { fecha: '2026-02-19', texto: "lorem ipsum19" },
    { fecha: '2026-02-20', texto: "lorem ipsum18" },
    { fecha: '2026-02-21', texto: "lorem ipsum19" },
    { fecha: '2026-02-22', texto: "lorem ipsum18" },
    { fecha: '2026-02-23', texto: "lorem ipsum19" },
    { fecha: '2026-02-24', texto: "lorem ipsum18" },
    { fecha: '2026-02-25', texto: "lorem ipsum19" },
    { fecha: '2026-02-26', texto: "lorem ipsum19" },
    { fecha: '2026-02-27', texto: "lorem ipsum18" },
    { fecha: '2026-02-28', texto: "lorem ipsum19" },
    { fecha: '2026-02-16', texto: "lorem ipsum20" }
];

const animations = [
    "https://lottie.host/169a0083-37cd-4b31-82c9-97c86ca00b70/SWBTaXTCtl.lottie",
    "https://lottie.host/bbaf282b-8de5-4918-999a-3b616dc5035a/b0kn7qLx41.lottie",
    "https://lottie.host/958a7904-c36c-4b3b-8cfa-e2aa2431c96d/pfQPa0qnBo.lottie",
    "https://lottie.host/ab3bc8e4-1194-4f89-848c-9c15ca0a814e/JAbk2IJDmI.lottie",
    "https://lottie.host/bd248aa2-d47e-4997-adb3-9e5941846699/cj75kDXNNN.lottie"
]

const fondos = [
        'src/naranja/fondo1.jpg', 'src/naranja/fondo2.jpg', 'src/naranja/fondo3.jpg', 'src/naranja/fondo4.jpg', 'src/naranja/fondo5.jpg',
        'src/naranja/fondo6.jpg', 'src/naranja/fondo7.jpg', 'src/naranja/fondo8.jpg', 'src/naranja/fondo9.jpg', 'src/naranja/fondo10.jpg',
        'src/naranja/fondo11.jpg', 'src/naranja/fondo12.jpg', 'src/naranja/fondo13.jpg', 'src/naranja/fondo14.jpg', 'src/naranja/fondo15.jpg',
        'src/naranja/fondo16.jpg'

    ];







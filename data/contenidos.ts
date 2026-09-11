export type Contenido = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  keywords: string[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const contenidos: Contenido[] = [
  {
    slug: "como-elegir-un-plan-de-isapre",
    title: "Cómo elegir un plan de Isapre según tu renta y necesidades",
    description:
      "Conoce los principales factores que debes revisar antes de elegir un plan de Isapre en Chile.",
    category: "Isapres",
    date: "2026-09-11",
    readingTime: "6 min de lectura",
    keywords: [
      "cómo elegir una Isapre",
      "plan de Isapre",
      "cotizar Isapre",
      "renta imponible",
      "mejor plan de salud",
    ],
    content: [
      {
        heading: "¿Qué debes considerar antes de elegir una Isapre?",
        paragraphs: [
          "Elegir una Isapre no consiste solamente en buscar el precio más bajo. También es importante revisar la cobertura, los prestadores médicos, los topes de atención y las necesidades de cada integrante del grupo familiar.",
          "La alternativa más conveniente depende de tu renta imponible, edad, número de beneficiarios y preferencias de atención médica.",
        ],
      },
      {
        heading: "Revisa tu renta imponible",
        paragraphs: [
          "La renta imponible es uno de los elementos principales para determinar el presupuesto disponible para salud. Antes de cotizar, conviene conocer cuánto corresponde al 7% obligatorio y si estás dispuesto a pagar una diferencia adicional.",
          "Con esta información puedes comparar planes que realmente se ajusten a tu capacidad de pago y evitar cotizaciones que estén fuera de tu presupuesto.",
        ],
      },
      {
        heading: "Compara cobertura y prestadores",
        paragraphs: [
          "Un plan puede parecer económico, pero no necesariamente será conveniente si no incluye los centros médicos o clínicas que utilizas habitualmente.",
          "Revisa especialmente la cobertura hospitalaria, ambulatoria, urgencias, maternidad y los prestadores preferentes.",
        ],
      },
      {
        heading: "Considera a tus beneficiarios",
        paragraphs: [
          "Si tienes cargas familiares, debes evaluar las necesidades médicas de cada persona. La mejor alternativa para una persona sola puede ser diferente a la más conveniente para una familia.",
          "También es importante revisar las edades, los antecedentes de atención y los centros médicos que cada integrante prefiere utilizar.",
        ],
      },
      {
        heading: "Solicita una comparación personalizada",
        paragraphs: [
          "Una cotización personalizada permite revisar distintas alternativas considerando tu situación particular.",
          "En Isapre Cotiza Inteligente podemos orientarte para comparar opciones de manera clara, gratuita y sin compromiso.",
        ],
      },
    ],
  },

  {
    slug: "que-es-la-renta-imponible-para-cotizar-isapre",
    title: "¿Qué es la renta imponible y por qué importa al cotizar una Isapre?",
    description:
      "Aprende qué significa la renta imponible, cómo se relaciona con el 7% de salud y qué información necesitas para cotizar.",
    category: "Cotización",
    date: "2026-09-11",
    readingTime: "5 min de lectura",
    keywords: [
      "renta imponible Isapre",
      "7% salud",
      "cotización obligatoria",
      "sueldo imponible",
      "cuánto puedo pagar de Isapre",
    ],
    content: [
      {
        heading: "¿Qué significa renta imponible?",
        paragraphs: [
          "La renta imponible es la remuneración que se utiliza como base para calcular determinadas cotizaciones previsionales y de salud.",
          "No siempre coincide con el sueldo líquido que recibes en tu cuenta bancaria, porque el sueldo líquido se obtiene después de aplicar descuentos legales y otros descuentos que puedan corresponder.",
        ],
      },
      {
        heading: "¿Cómo se relaciona con el 7% de salud?",
        paragraphs: [
          "La cotización legal de salud corresponde, en términos generales, al 7% de la remuneración imponible, considerando los límites y reglas establecidos por la normativa vigente.",
          "Cuando el valor del plan elegido supera el monto disponible por la cotización obligatoria, puede existir una diferencia adicional que debe ser evaluada antes de contratar.",
        ],
      },
      {
        heading: "¿Qué documento sirve para revisar la renta?",
        paragraphs: [
          "Para cotizar correctamente puedes utilizar una liquidación de sueldo reciente. En ella normalmente aparecen la remuneración imponible, los descuentos de salud y otros antecedentes importantes.",
          "Si tus ingresos son variables, conviene revisar más de una liquidación para obtener una visión más representativa de tu situación.",
        ],
      },
      {
        heading: "¿Por qué es importante entregar información correcta?",
        paragraphs: [
          "Una renta imponible incorrecta puede generar una comparación poco precisa. Por eso es recomendable informar los datos reales y actualizar la información cuando cambien tus ingresos.",
          "Con una base correcta es más fácil identificar qué alternativas se ajustan a tu presupuesto.",
        ],
      },
    ],
  },

  {
    slug: "isapre-o-fonasa-cual-conviene",
    title: "¿Isapre o Fonasa? Factores para tomar una mejor decisión",
    description:
      "Conoce las principales diferencias que debes analizar entre Isapre y Fonasa antes de elegir tu sistema de salud.",
    category: "Isapres y Fonasa",
    date: "2026-09-11",
    readingTime: "7 min de lectura",
    keywords: [
      "Isapre o Fonasa",
      "diferencias entre Isapre y Fonasa",
      "qué sistema de salud conviene",
      "comparar Isapre y Fonasa",
      "sistema de salud en Chile",
    ],
    content: [
      {
        heading: "¿Qué debes analizar antes de decidir?",
        paragraphs: [
          "La decisión entre Isapre y Fonasa depende de distintos factores personales y familiares. No existe una única alternativa que sea conveniente para todas las personas.",
          "Es recomendable considerar tus ingresos, la frecuencia con la que utilizas servicios médicos, tus prestadores preferidos y las necesidades de tus beneficiarios.",
        ],
      },
      {
        heading: "Acceso a prestadores y atención médica",
        paragraphs: [
          "Uno de los aspectos más importantes es revisar dónde puedes atenderte y bajo qué condiciones. Las alternativas disponibles pueden variar según el sistema, la modalidad de atención y las reglas de cada prestación.",
          "Si tienes una clínica, centro médico o especialista preferido, conviene verificar previamente las condiciones de atención.",
        ],
      },
      {
        heading: "Presupuesto mensual de salud",
        paragraphs: [
          "También debes analizar cuánto dinero puedes destinar mensualmente a salud. El precio de un plan no debe evaluarse de forma aislada, sino en relación con la cobertura que ofrece.",
          "Una alternativa que parece económica puede no ser adecuada si no responde a tus necesidades de atención.",
        ],
      },
      {
        heading: "Necesidades del grupo familiar",
        paragraphs: [
          "En una familia, cada integrante puede tener necesidades diferentes. La edad, los controles médicos, los tratamientos y la frecuencia de atención son elementos que deben considerarse.",
          "Antes de tomar una decisión, compara la alternativa pensando en el grupo familiar completo y no solamente en el titular.",
        ],
      },
      {
        heading: "Compara antes de decidir",
        paragraphs: [
          "La mejor decisión es aquella que se toma con información clara y considerando tanto el costo como la cobertura.",
          "Una asesoría personalizada puede ayudarte a ordenar los antecedentes y revisar qué alternativa se adapta mejor a tu situación.",
        ],
      },
    ],
  },

  {
    slug: "como-comparar-planes-de-isapre",
    title: "Cómo comparar planes de Isapre sin fijarte solamente en el precio",
    description:
      "Revisa los aspectos más importantes de un plan de salud antes de elegir una alternativa para ti o tu familia.",
    category: "Planes de salud",
    date: "2026-09-11",
    readingTime: "6 min de lectura",
    keywords: [
      "comparar planes de Isapre",
      "cobertura de Isapre",
      "plan de salud más conveniente",
      "topes de Isapre",
      "prestadores preferentes",
    ],
    content: [
      {
        heading: "El precio no es el único factor",
        paragraphs: [
          "Al comparar planes de Isapre, es importante evitar la decisión basada exclusivamente en el valor mensual. Dos planes con precios similares pueden tener diferencias importantes en cobertura y condiciones de atención.",
          "La comparación debe considerar tanto el costo como los servicios que realmente utilizarás.",
        ],
      },
      {
        heading: "Revisa la cobertura ambulatoria",
        paragraphs: [
          "La cobertura ambulatoria se relaciona con prestaciones como consultas médicas, exámenes y procedimientos que no requieren hospitalización.",
          "Si visitas médicos o realizas exámenes con frecuencia, este punto puede ser especialmente relevante para tu decisión.",
        ],
      },
      {
        heading: "Revisa la cobertura hospitalaria",
        paragraphs: [
          "La cobertura hospitalaria es otro elemento importante, especialmente para quienes desean contar con respaldo ante procedimientos o situaciones médicas de mayor complejidad.",
          "Conviene revisar los porcentajes, topes y condiciones que correspondan a los prestadores incluidos en el plan.",
        ],
      },
      {
        heading: "Analiza los topes y restricciones",
        paragraphs: [
          "Los topes de cobertura establecen límites para determinadas prestaciones. Por eso, no basta con observar solamente el porcentaje de bonificación.",
          "También es necesario comprender los límites, las condiciones y la forma en que se aplican a las atenciones que podrías utilizar.",
        ],
      },
      {
        heading: "Verifica los prestadores preferentes",
        paragraphs: [
          "Algunos planes ofrecen mejores condiciones cuando te atiendes en determinados centros médicos o clínicas.",
          "Antes de elegir, revisa si esos prestadores se encuentran cerca de tu domicilio, lugar de trabajo o zonas donde habitualmente realizas tus actividades.",
        ],
      },
    ],
  },

  {
    slug: "cuando-conviene-cambiarse-de-isapre",
    title: "¿Cuándo conviene evaluar un cambio de Isapre?",
    description:
      "Conoce algunas señales que indican que puede ser conveniente revisar tu plan actual y comparar nuevas alternativas.",
    category: "Cambio de Isapre",
    date: "2026-09-11",
    readingTime: "5 min de lectura",
    keywords: [
      "cambiarse de Isapre",
      "cuándo cambiar de Isapre",
      "revisar plan de salud",
      "mejorar cobertura de Isapre",
      "comparar mi Isapre",
    ],
    content: [
      {
        heading: "Tu plan ya no se ajusta a tus necesidades",
        paragraphs: [
          "Las necesidades de salud pueden cambiar con el tiempo. Un plan que era adecuado hace algunos años puede dejar de responder a tus prioridades actuales.",
          "Si cambiaste de ciudad, aumentó tu grupo familiar o modificaste tus centros médicos preferidos, puede ser útil revisar nuevas alternativas.",
        ],
      },
      {
        heading: "El costo mensual aumentó",
        paragraphs: [
          "Cuando el valor que pagas mensualmente cambia, es recomendable revisar qué cobertura estás recibiendo a cambio.",
          "No siempre será necesario cambiarse, pero comparar otras opciones puede ayudarte a saber si existen alternativas que se ajusten mejor a tu presupuesto.",
        ],
      },
      {
        heading: "No utilizas los prestadores incluidos",
        paragraphs: [
          "Un plan puede tener buenas condiciones en determinados centros médicos, pero no ser tan conveniente si habitualmente te atiendes en otros lugares.",
          "Revisar la red de prestadores te permite evaluar si el plan realmente responde a tus hábitos de atención.",
        ],
      },
      {
        heading: "Tu situación familiar cambió",
        paragraphs: [
          "El nacimiento de un hijo, la incorporación de nuevos beneficiarios o cambios en las necesidades médicas son razones para volver a analizar tu cobertura.",
          "Una revisión periódica permite evitar que mantengas un plan que ya no se adapta a tu realidad.",
        ],
      },
      {
        heading: "Solicita una revisión antes de tomar una decisión",
        paragraphs: [
          "Cambiarse de Isapre es una decisión que debe tomarse con información suficiente. Revisa las condiciones aplicables y compara las alternativas disponibles para tu situación.",
          "En Isapre Cotiza Inteligente podemos ayudarte a revisar tu plan actual y evaluar opciones de manera gratuita y sin compromiso.",
        ],
      },
    ],
  },

  {
    slug: "que-revisar-antes-de-contratar-un-plan-de-salud",
    title: "Qué revisar antes de contratar un plan de salud en Chile",
    description:
      "Te mostramos los principales antecedentes que debes revisar antes de contratar un plan de salud y evitar decisiones apresuradas.",
    category: "Consejos de salud",
    date: "2026-09-11",
    readingTime: "6 min de lectura",
    keywords: [
      "contratar plan de salud",
      "qué revisar en una Isapre",
      "consejos para elegir Isapre",
      "plan de salud Chile",
      "cotización de salud",
    ],
    content: [
      {
        heading: "Define tus prioridades de atención",
        paragraphs: [
          "Antes de revisar planes, identifica qué es más importante para ti: atención ambulatoria, hospitalización, urgencias, maternidad, especialistas o cobertura para tu grupo familiar.",
          "Tener claras tus prioridades ayuda a comparar alternativas de manera más ordenada.",
        ],
      },
      {
        heading: "Revisa el valor total del plan",
        paragraphs: [
          "El valor mensual debe analizarse considerando la cotización obligatoria y cualquier diferencia adicional que corresponda.",
          "Es importante confirmar que el monto final sea compatible con tu presupuesto mensual.",
        ],
      },
      {
        heading: "Comprende las condiciones de cobertura",
        paragraphs: [
          "Lee con atención los porcentajes de cobertura, los topes, las restricciones y las condiciones asociadas a los prestadores.",
          "Si existe algún punto que no comprendes, solicita una explicación antes de tomar una decisión.",
        ],
      },
      {
        heading: "Considera a todos los beneficiarios",
        paragraphs: [
          "Si el plan incluye a otras personas, revisa las necesidades médicas y preferencias de atención de cada integrante.",
          "La alternativa más conveniente debe evaluarse considerando al grupo familiar completo.",
        ],
      },
      {
        heading: "No tomes una decisión solamente por una promoción",
        paragraphs: [
          "Una promoción puede ser atractiva, pero no reemplaza la revisión de la cobertura y las condiciones generales del plan.",
          "Compara la información completa y solicita orientación si necesitas ayuda para entender las diferencias.",
        ],
      },
    ],
  },
];
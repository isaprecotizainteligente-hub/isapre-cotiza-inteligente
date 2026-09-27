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

  {
    slug: "que-isapre-cubre-clinica-alemana",
    title: "¿Qué Isapre cubre Clínica Alemana? Guía para elegir tu plan",
    description:
      "¿Buscas una Isapre con cobertura en Clínica Alemana? Conoce cómo funcionan los convenios, los prestadores preferentes y qué debes revisar antes de contratar un plan.",
    category: "Clínica Alemana",
    date: "2026-09-26",
    readingTime: "8 min de lectura",
    keywords: [
      "qué Isapre cubre Clínica Alemana",
      "Isapres con convenio Clínica Alemana",
      "plan Isapre Clínica Alemana",
      "cobertura Clínica Alemana",
      "Isapre Clínica Alemana Santiago",
      "plan de salud Clínica Alemana",
      "prestador preferente Clínica Alemana",
      "cobertura hospitalaria Clínica Alemana",
    ],
    content: [
      {
        heading: "¿Una Isapre cubre automáticamente Clínica Alemana?",
        paragraphs: [
          "No necesariamente. Que una Isapre tenga un convenio con Clínica Alemana no significa que todos sus planes tengan las mismas condiciones de cobertura en ese prestador.",
          "La cobertura que recibirás depende del plan de salud contratado, de la modalidad del plan y de las condiciones establecidas para los prestadores incluidos.",
        ],
      },
      {
        heading: "¿Qué significa que Clínica Alemana sea un prestador preferente?",
        paragraphs: [
          "En los planes con prestador preferente, la Isapre puede establecer condiciones de cobertura asociadas a determinados prestadores o redes de prestadores identificados en el plan.",
          "Por eso, si Clínica Alemana es uno de tus centros médicos de preferencia, no basta con preguntar si existe convenio: también debes revisar qué cobertura específica entrega tu plan cuando te atiendes allí.",
        ],
      },
      {
        heading: "Convenio y cobertura no son exactamente lo mismo",
        paragraphs: [
          "Clínica Alemana informa en su sitio institucional cuáles son las Isapres con convenio vigente y señala que, cuando una Isapre no está en convenio, el paciente igualmente puede atenderse pagando el valor de la atención y luego gestionar el reembolso directamente con su Isapre.",
          "Esto demuestra por qué es importante diferenciar entre tener acceso a un prestador y conocer las condiciones económicas reales de la atención según el plan contratado.",
        ],
      },
      {
        heading: "¿Qué debes revisar en un plan de Isapre para Clínica Alemana?",
        paragraphs: [
          "Si tu objetivo es atenderte habitualmente en Clínica Alemana, revisa especialmente la cobertura hospitalaria, la cobertura ambulatoria, los porcentajes de bonificación, los topes y las condiciones aplicables a los prestadores preferentes.",
          "También conviene revisar qué ocurre en urgencias, qué prestaciones tienen límites particulares y si existen condiciones distintas para determinadas atenciones o profesionales.",
        ],
      },
      {
        heading: "No mires solamente el porcentaje de cobertura",
        paragraphs: [
          "Un porcentaje de cobertura alto no siempre significa que el costo final será bajo. Los topes por prestación, los montos máximos y las condiciones específicas pueden modificar considerablemente el copago.",
          "Por eso, para comparar planes es recomendable analizar el conjunto de cobertura, topes, prestadores y precio mensual en lugar de fijarse en un solo indicador.",
        ],
      },
      {
        heading: "¿Y qué pasa con Isapre Esencial?",
        paragraphs: [
          "Actualmente Isapre Esencial ofrece alternativas específicamente vinculadas con Clínica Alemana. Entre ellas se encuentra el Plan Alemana Integral, orientado a la atención en Clínica Alemana de Santiago y con condiciones particulares de acceso y cobertura.",
          "Si Clínica Alemana es tu principal prestador de salud, puede ser relevante comparar este tipo de alternativas con otras opciones disponibles y revisar siempre las condiciones vigentes del plan antes de contratar.",
        ],
      },
      {
        heading: "¿Qué plan elegir si tienes una renta alta o buscas mayor cobertura?",
        paragraphs: [
          "Si tienes una renta imponible alta o estás dispuesto a destinar un presupuesto mayor a salud, conviene priorizar el análisis de cobertura real y no solamente el precio mensual.",
          "En estos casos es especialmente importante revisar los prestadores que utilizas habitualmente, la cobertura hospitalaria, los topes de alto costo y las condiciones para tu grupo familiar.",
        ],
      },
      {
        heading: "Clínica Alemana puede ser una prioridad dentro de tu decisión",
        paragraphs: [
          "Si ya sabes que quieres atenderte principalmente en Clínica Alemana, esa preferencia debe formar parte de la comparación desde el inicio.",
          "Una buena cotización debería considerar tu renta, edad, cargas, presupuesto y los prestadores que realmente quieres utilizar para que puedas comparar alternativas con información relevante para tu situación.",
        ],
      },
      {
        heading: "¿Quieres revisar alternativas con cobertura en Clínica Alemana?",
        paragraphs: [
          "En Isapre Cotiza Inteligente podemos ayudarte a comparar alternativas considerando tu situación y tus preferencias de atención.",
          "Puedes solicitar una cotización personalizada y revisar distintas opciones antes de tomar una decisión.",
        ],
      },
    ],
  },

  {
    slug: "planes-isapre-clinica-alemana",
    title:
      "Planes de Isapre con cobertura en Clínica Alemana: qué comparar antes de contratar",
    description:
      "Conoce qué debes comparar en un plan de Isapre con cobertura en Clínica Alemana: prestadores, cobertura hospitalaria y ambulatoria, topes, copagos y costo mensual.",
    category: "Clínica Alemana",
    date: "2026-09-27",
    readingTime: "8 min de lectura",
    keywords: [
      "planes de Isapre con cobertura en Clínica Alemana",
      "plan Isapre Clínica Alemana",
      "cobertura Clínica Alemana Isapre",
      "Isapre con cobertura en Clínica Alemana",
      "plan de salud Clínica Alemana",
      "cobertura hospitalaria Clínica Alemana",
      "cobertura ambulatoria Clínica Alemana",
      "prestador preferente Clínica Alemana",
      "copago Clínica Alemana Isapre",
    ],
    content: [
      {
        heading: "¿Qué significa tener un plan con cobertura en Clínica Alemana?",
        paragraphs: [
          "Tener cobertura en Clínica Alemana significa que el plan contempla condiciones de bonificación para atenciones realizadas en ese prestador, de acuerdo con las reglas y características del plan contratado.",
          "Por eso, antes de contratar, es importante revisar el documento del plan y comprobar qué prestaciones, porcentajes, topes y modalidades se aplican específicamente cuando utilizas Clínica Alemana.",
        ],
      },
      {
        heading: "No basta con que exista un convenio",
        paragraphs: [
          "Clínica Alemana mantiene convenios con distintas Isapres, pero la existencia de un convenio no significa que todos los planes de una misma Isapre tengan idénticas condiciones de cobertura.",
          "La propia Clínica Alemana señala que, si una Isapre no está en convenio, el paciente igualmente puede atenderse pagando el valor total de la atención y posteriormente gestionar el reembolso con su Isapre. Por eso conviene distinguir entre convenio, cobertura y condiciones del plan.",
        ],
      },
      {
        heading: "Revisa la cobertura hospitalaria",
        paragraphs: [
          "Si Clínica Alemana es un prestador importante para ti, la cobertura hospitalaria merece especial atención. Revisa los porcentajes, topes y condiciones aplicables a hospitalizaciones, procedimientos y otras prestaciones de mayor complejidad.",
          "No te quedes solamente con el porcentaje informado. Para conocer el costo real de una atención también es necesario considerar los topes y las condiciones específicas del plan.",
        ],
      },
      {
        heading: "Revisa la cobertura ambulatoria",
        paragraphs: [
          "La cobertura ambulatoria puede ser especialmente relevante si utilizas consultas médicas, especialistas, exámenes o procedimientos con frecuencia.",
          "Compara las condiciones del plan para este tipo de prestaciones y verifica si Clínica Alemana corresponde a uno de los prestadores considerados para obtener las condiciones informadas.",
        ],
      },
      {
        heading: "Comprende qué significa un prestador preferente",
        paragraphs: [
          "En los planes con prestador preferente, las condiciones de cobertura pueden estar asociadas a un determinado prestador o red de prestadores identificado en el plan.",
          "La Superintendencia de Salud establece que cuando un plan asocia beneficios a determinados prestadores, estos deben estar identificados en el plan y también deben contemplarse prestadores subsidiarios cuando corresponda.",
        ],
      },
      {
        heading: "Analiza los topes antes de comparar porcentajes",
        paragraphs: [
          "Un plan puede mostrar un porcentaje de bonificación elevado y, aun así, tener topes que limiten el monto efectivamente bonificado.",
          "Para comparar correctamente, revisa el porcentaje, el tope, la modalidad de atención y el valor que finalmente podrías pagar de tu bolsillo.",
        ],
      },
      {
        heading: "Compara el costo mensual con el uso que realmente tendrás",
        paragraphs: [
          "El precio mensual del plan es importante, pero debe analizarse junto con los centros médicos que utilizas, la frecuencia de tus atenciones y las necesidades de tu grupo familiar.",
          "Si estás dispuesto a destinar un presupuesto mayor a salud, puede ser especialmente importante comparar cobertura hospitalaria, especialistas, prestadores y límites para prestaciones de mayor costo.",
        ],
      },
      {
        heading: "¿Qué ocurre con Isapre Esencial?",
        paragraphs: [
          "Esencial mantiene actualmente una vinculación preferente con Clínica Alemana y ofrece alternativas como Alemana Integral. La información oficial de Esencial señala que Alemana Integral está orientado a atención en Clínica Alemana de Santiago y establece condiciones particulares para acceder a determinadas prestaciones.",
          "Antes de contratar, es recomendable revisar las condiciones vigentes del plan, ya que la cobertura depende de sus reglas específicas y de la situación de cada afiliado.",
        ],
      },
      {
        heading: "¿Cómo comparar dos planes que tienen Clínica Alemana?",
        paragraphs: [
          "Cuando dos alternativas consideran Clínica Alemana, compara primero las prestaciones que realmente utilizarás y después revisa porcentajes, topes, copagos y precio mensual.",
          "También conviene considerar el resto de tu red de atención, porque Clínica Alemana puede ser uno de varios prestadores que utilizas durante el año.",
        ],
      },
      {
        heading: "Checklist antes de contratar",
        paragraphs: [
          "Antes de firmar, verifica que Clínica Alemana figure como prestador o red relevante para las coberturas que necesitas, revisa la cobertura hospitalaria y ambulatoria, confirma los topes y comprende los copagos que podrían aplicarse.",
          "También revisa las condiciones de urgencia, las prestaciones que tengan requisitos especiales y las reglas aplicables a tu grupo familiar.",
        ],
      },
      {
        heading: "¿Quieres comparar planes con foco en Clínica Alemana?",
        paragraphs: [
          "En Isapre Cotiza Inteligente podemos ayudarte a ordenar tu información y comparar alternativas considerando tu renta, edad, cargas, presupuesto y preferencias de atención.",
          "Solicita una cotización personalizada y revisa las opciones disponibles antes de contratar.",
        ],
      },
    ],
  },
];
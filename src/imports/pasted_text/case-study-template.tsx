Actúa como diseñador(a) senior de UX/UI y front-end integrador. Vas a MODIFICAR ÚNICAMENTE las páginas de detalle (case study /work/*) de mi portafolio existente. NO toques Home, NO toques la página de listado general de Work, NO cambies el header global, NO cambies el footer global, y NO cambies estilos globales del sitio fuera de /work/*.

CONTEXTO (IMPORTANTE):
- Importa desde Figma el diseño existente de mi sitio (Figma Sites) incluyendo al menos:
  1) La página de detalle existente: /work/banca-digital (esta es la plantilla base).
  2) El header global y footer global (solo para asegurar consistencia, pero NO los modifiques).
- El objetivo es que TODAS las páginas de detalle de proyecto sigan la MISMA estructura y storytelling que mi página /work/banca-digital, pero agregando un índice lateral fijo (sticky) al estilo de la página “AKOOL case study” del portafolio de Xiaoyang Hu (navegación lateral con secciones numeradas y scrollspy).
- Cualquier cambio debe estar encapsulado únicamente en el template de case study o componentes usados solo por /work/*.

OBJETIVO PRINCIPAL:
1) Crear/actualizar un TEMPLATE reutilizable de “Case Study Page” basado en /work/banca-digital.
2) Agregar un Índice lateral fijo (sticky) con enlaces a secciones dentro de la misma página (“On this page” / tabla de contenido) SOLO para /work/*.
3) Generar 3 páginas nuevas de caso de estudio con ese template y con el contenido proporcionado abajo:
   - /work/scotia-tarjetas
   - /work/tealeaf-essity
   - /work/transferencias-scotiamovil

NAVEGACIÓN LATERAL FIJA (STICKY SIDE TOC):
- En desktop:
  - Layout en 2 columnas: izquierda un rail angosto para el índice; derecha el contenido.
  - El índice debe ser sticky (permanece visible al hacer scroll).
  - El índice muestra secciones numeradas (01, 02, 03...) y nombres de sección.
  - Implementa “scrollspy”: resalta la sección activa conforme el usuario hace scroll.
  - Incluye un link “Volver arriba”.
- En tablet:
  - Mantén el índice visible si hay espacio; si no, conviértelo en un módulo colapsable “En esta página”.
- En mobile:
  - No uses rail lateral. Usa un botón sticky “En esta página” que abre un menú con las secciones y permite saltar.
- Accesibilidad:
  - Estructura semántica de headings (H1, H2, H3).
  - Los links del índice deben apuntar a IDs de sección claros.
  - Mantén foco visible y estados hover/focus.

ESTRUCTURA (SECCIONES) DEL CASO DE ESTUDIO:
Usa esta estructura fija para los 3 nuevos proyectos (y aplícala también a /work/banca-digital sin cambiar su contenido, solo re-encapsulándolo si es necesario):
01 Resumen
02 Contexto y problema
03 Rol y alcance
04 Investigación y hallazgos
05 Estrategia
06 Decisiones clave y diseño
07 Impacto
08 Reflexión

REGLAS DE DISEÑO Y ESTILO (SOLO EN /work/*):
- Tipografía:
  - Usa “Arvo” para títulos y headings (H1/H2/H3) y números de sección.
  - Usa “Lato” para cuerpo de texto, labels, UI secundaria y componentes.
  - Define una escala tipográfica consistente (ejemplo):
    - H1 (Arvo) 56–72
    - H2 (Arvo) 32–40
    - H3 (Arvo) 22–28
    - Body (Lato) 16–18
    - Caption/Meta (Lato) 13–14
- Respeta el sistema visual existente del sitio:
  - Reutiliza colores, espaciado y componentes actuales de /work/banca-digital.
  - No introduzcas nuevos colores dominantes: si necesitas acento, usa el acento existente del sitio.
- Ritmo y legibilidad:
  - Mucho whitespace
  - Secciones claras y “escaneables”
  - Componentes repetibles: “Métrica”, “Bloque de decisión”, “Antes/Después”, “Trade-off”, “Outcome”.

COMPONENTES NUEVOS (CREAR SOLO PARA /work/*):
- CaseStudyLayout (wrapper 2 columnas con rail TOC y content)
- CaseStudyTOC (lista numerada + scrollspy + back to top)
- SectionHeader (número + título + descripción corta opcional)
- MetricPills o MetricCards (3–4 métricas en el Resumen)
- DecisionBlock (estructura: Problema → Cambio → Trade-off → Resultado)

CONTENIDO PARA LOS 3 CASOS (ESCRIBE COPY FINAL, NO PLACEHOLDERS):

CASO 1: “Scotia tarjetas”
- 01 Resumen:
  - Tipo de proyecto: Estrategia de producto + rediseño de flujos en app bancaria
  - Resultado clave: Se eliminó una app redundante, ahorro anual de 5M MXN, +2.6 pts NPS, +40K adopción de la app principal (clientes monoproducto).
- 02 Contexto y problema:
  - El banco tenía 2 apps que no se hablaban entre sí.
  - Costos duplicados por mantener 2 apps en producción.
  - Confusión en clientes sobre qué app usar.
  - Afectación a NPS por credenciales distintas: intentos cruzados bloqueaban usuarios y detonaban llamadas a contact center.
- 03 Rol y alcance:
  - Explica que lideraste la estrategia, priorización y rediseño de experiencias de tarjetas.
- 04 Investigación y hallazgos:
  - Revisión de encuestas + entrevistas con clientes.
  - Objetivo: entender necesidades/expectativas sobre uso de tarjetas.
- 05 Estrategia:
  - Consolidar experiencias críticas dentro de la app principal.
  - Enfocar en autoservicio, seguridad y control de tarjeta.
- 06 Decisiones clave y diseño (incluye subsecciones):
  - Activación de tarjeta
  - On/Off de tarjeta titular y adicionales
  - CVV dinámico
  - Consulta de NIP
  - Solicitud de tarjeta adicional
  - Gestión de adicional con límites de uso
  Para cada una: qué dolor resolvía + qué cambió + outcome esperado.
- 07 Impacto:
  - Ahorro 5M MXN anual
  - +2.6 pts NPS
  - +40K adopción de app principal (monoproducto)
- 08 Reflexión:
  - Qué aprendiste sobre consolidación de plataformas, reducción de fricción y costo operativo.

CASO 2: “Tealeaf con Essity”
- 01 Resumen:
  - Implementación + análisis inicial de Tealeaf (plataforma de analítica y session replay) en e-commerce de marca Saba.
  - Resultado clave: optimizaciones UX + corrección de error en pasarela de pago + campaña automatizada → +3% ventas anuales.
  - Escalamiento: implementación replicada en otros sitios (Regio y Tena) con resultados similares.
- 02 Contexto y problema:
  - Necesidad de visibilidad real de sesiones y caídas del funnel en e-commerce.
- 03 Rol y alcance:
  - Lideraste implementación, instrumentación y primeros análisis; consultoría a equipos de desarrollo.
- 04 Investigación y hallazgos:
  - Replicar y analizar sesiones reales (session replay).
  - Detectar fricciones UX y un bug en pago.
- 05 Estrategia:
  - Combinar optimización UX + corrección técnica + intervención de marketing automatizada basada en señales del funnel.
- 06 Decisiones clave y diseño:
  - Diagnóstico y corrección de pasarela de pago
  - Recomendaciones de usabilidad a desarrollo
  - Automatización MKT: reacción a caídas de funnel y recuperación “one-click” de carrito
- 07 Impacto:
  - +3% ventas anuales
  - Escalado a Regio y Tena con beneficios similares
- 08 Reflexión:
  - Qué cambió en la toma de decisiones cuando tuviste evidencia de sesiones reales.

CASO 3: “Rediseño Transferencias en ScotiaMóvil”
- 01 Resumen:
  - Rediseño end-to-end de experiencia de transferencias.
  - Resultado clave: de ~35 min a ~2 min el flujo; +32% transaccionalidad por transferencia; +2.7 pts NPS; >1M usuarios beneficiados.
- 02 Contexto y problema:
  - Problemas principales:
    1) Espera de 30 min al dar de alta destinatario nuevo
    2) Formulario complejo (muchos campos, sin identificador claro de institución, obligación de registrar como frecuente)
    3) Selección confusa de cuenta origen/destinatario (sin identificadores, interacción poco intuitiva, alta carga cognitiva)
- 03 Rol y alcance:
  - Lideraste investigación, definición de flujo y diseño alineado al Home recién rediseñado.
- 04 Investigación y hallazgos:
  - Empathy maps
  - Análisis de encuestas NPS
  - Entrevistas con heavy users
- 05 Estrategia:
  - Reducir espera y fricción
  - Alinear el patrón de transferencias al nuevo Home para consistencia y escalabilidad del patrón transaccional
- 06 Decisiones clave y diseño:
  - Alta de destinatario: reducir/ocultar fricción y tiempo de activación
  - Formulario: simplificar, clarificar institución destino, opción flexible sobre “frecuente”
  - Selector: mejorar identificadores visuales y patrón de selección
- 07 Impacto:
  - Tiempo total: ~35 min → ~2 min
  - >1M usuarios beneficiados
  - +32% transaccionalidad
  - +2.7 pts NPS
- 08 Reflexión:
  - Qué aprendiste sobre reducción de carga cognitiva y diseño de patrones reutilizables.

VALIDACIÓN FINAL (ANTES DE ENTREGAR):
- Verifica que solo cambiaste /work/*.
- Header/footer y el resto del sitio siguen idénticos.
- El índice lateral funciona con scrollspy, y en mobile existe alternativa usable.
- Arvo/Lato solo aplicado a /work/*.
- Todas las páginas de caso comparten el mismo template y componentes.

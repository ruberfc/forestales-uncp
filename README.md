# Portal Web Institucional - Facultad de Ciencias Forestales y del Ambiente (FCFA - UNCP)

Este proyecto es el sitio web oficial, moderno, responsivo y de alto impacto visual para la **Facultad de Ciencias Forestales y del Ambiente (FCFA)** de la **Universidad Nacional del Centro del Perú (UNCP)**. Está diseñado bajo los más altos estándares de usabilidad, con una arquitectura modular y una experiencia de usuario optimizada tanto en dispositivos móviles como en pantallas de escritorio de alta resolución.

---

## 🚀 Tecnologías Utilizadas

El portal está construido utilizando tecnologías modernas del ecosistema frontend:

- **React 19 & TypeScript**: Programación robusta basada en componentes funcionales y tipado estricto para un mantenimiento libre de errores.
- **Vite**: Entorno de desarrollo ultrarrápido y sistema de construcción optimizado para producción.
- **Tailwind CSS**: Framework de estilos de utilidad para un diseño visual elegante, coherente y adaptativo (responsive).
- **React Router DOM v7**: Manejo eficiente del enrutamiento de la SPA (Single Page Application) con navegación instantánea y sin recargas de página.
- **Motion (framer-motion)**: Animaciones fluidas, transiciones de rutas y efectos de micro-interacción refinados.
- **Lucide React**: Biblioteca de iconos vectoriales modernos y consistentes de alta definición.

---

## 📁 Estructura del Proyecto

El código está estructurado de manera modular y limpia para facilitar la escalabilidad del portal:

```bash
├── App.tsx                   # Enrutamiento principal y configuración general del portal
├── index.css                 # Importación de Tailwind CSS y personalización de fuentes (Inter, JetBrains Mono)
├── index.html                # Entrada HTML base del proyecto
├── index.tsx                 # Inicialización de React en el DOM
├── constants.ts              # Almacén de datos estáticos estructurados (Textos, menús, planes, autoridades, etc.)
├── types.ts                  # Declaración de interfaces y tipos de TypeScript globales
├── components/               # Componentes transversales reutilizables
│   ├── Header.tsx            # Barra de navegación interactiva y adaptativa con menús desplegables
│   ├── Footer.tsx            # Pie de página con enlaces institucionales, contacto y redes sociales
│   ├── InternalPageLayout.tsx# Layout base común para todas las páginas internas con banners dinámicos
│   └── WhatsAppButton.tsx    # Widget flotante de contacto directo para atención al usuario
├── pages/                    # Vistas y secciones principales de la aplicación
│   ├── Home.tsx              # Página de inicio interactiva con secciones de noticias, eventos y enlaces rápidos
│   ├── Facultad/             # Historia, Autoridades, Organigrama, Plana Docente, Resoluciones, Misión, Consejo, etc.
│   ├── Pregrado/             # Perfil de ingreso/egreso, mallas curriculares, sumillas y calendario académico
│   ├── Posgrado/             # Presentación, maestrías (Ecoturismo, Cuencas, Gestión Ambiental), doctorado y diplomados
│   ├── Dependencias/         # Laboratorios, Proyección Social, Grados y Títulos, Planificación y Estaciones
│   ├── Acreditacion/         # Proceso de acreditación, grupos de interés y manuales de calidad
│   ├── Biblioteca/           # Centro de información y recursos digitales
│   └── Publicaciones/        # Artículos científicos, libros publicados y catálogo de docentes Renacyt
└── src/assets/images/        # Banco de imágenes oficial optimizado (incluyendo registros reales de campo)
```

---

## 🌟 Características Destacadas

### 1. Gestión Integral de Estaciones Experimentales
Se han recreado fielmente, a partir de registros reales de campo, los espacios de investigación científica de la facultad, incluyendo:
- **Unidad de Producción "Casa Blanca" (Jauja)**: Extensión de 104 Ha para desarrollo académico, pecuario e investigación silvicultural activa a 20 años.
- **Estación Experimental Oxapampa (Pasco)**: Inventario silvicultural detallado en selva alta con 3.03 Ha de bosque y más de 3,000 individuos forestales registrados para aprovechamiento y crecimiento.
- **Estación Experimental El Mantaro (Junín)**: Centro integrado enfocado en sistemas silvopastoriles, protección de suelos y desarrollo agropecuario de altura.
- **Concesión de Conservación "Incatoshi Kametza" (Selva Central)**: Área oficial autorizada por SERFOR/MIDAGRI por 40 años para preservar la biodiversidad endémica y realizar monitoreo de ecosistemas frágiles de bosque de neblinas.

### 2. Visores de Documentación Integrados (PDF)
Componentes interactivos de previsualización que permiten a estudiantes e investigadores acceder de forma inmediata a los Planes de Manejo, Fichas Técnicas e Informes de Gestión directamente desde la web, con opciones para apertura en pantalla completa y descarga oficial directa.

### 3. Navegación Fluida y Adaptativa
Menús dinámicos con comportamiento hover e interactividad de toque para dispositivos móviles. Además, incluye la utilidad `ScrollToTop` para reubicar al usuario automáticamente en la parte superior de cada página interna al cambiar de sección, previniendo fricciones de scroll.

### 4. Animaciones de Micro-interacción
Efectos de transición refinados en la carga de vistas y animaciones al pasar el cursor (hover targets) en botones, tarjetas informativas y galerías fotográficas oficiales de campo, lo que eleva el aspecto estético global del portal.

---

## 🛠️ Comandos de Desarrollo

En la raíz del proyecto se pueden ejecutar las siguientes tareas utilizando npm:

### ⚙️ Instalación de Dependencias
Para descargar todas las bibliotecas configuradas en el proyecto, ejecute:
```bash
npm install
```

### 🖥️ Servidor de Desarrollo
Para arrancar el proyecto de manera local en modo de prueba rápida, utilice:
```bash
npm run dev
```

### 🏗️ Construcción para Producción
Para generar una compilación de producción optimizada y con minimización de código lista para su distribución o despliegue en un servidor web:
```bash
npm run build
```
Los archivos optimizados se generarán dentro de la carpeta `/dist/`.

### 🚨 Linter (Verificación de Tipos)
Para auditar el tipado de TypeScript del portal y asegurar que no existan inconsistencias de código:
```bash
npm run lint
```

---

## 🎨 Principios de Diseño
El diseño del portal se basa en **principios de alta fidelidad estética** recomendados para entornos institucionales:
- **Identidad Verde Esmeralda (`--color-uncp`)**: Alineado a los colores corporativos oficiales de la UNCP.
- **Contraste Limpio y Espacios Negativos**: Una estructura de visualización amplia con fondos suaves (off-white) que evitan la fatiga de lectura y mejoran la jerarquía visual de los contenidos.
- **Tipografía Emparejada**: Uso de fuentes sin serifa de alta legibilidad (*Inter*) para interfaces de usuario y texto corrido, combinadas con toques técnicos y de datos precisos en formato monoespaciado (*JetBrains Mono*).
- **Arquitectura de Información Honesta**: El portal evita el desorden visual y se enfoca en presentar documentos verídicos, organigramas oficiales, resoluciones, planes y guías que respaldan las capacidades de la facultad.

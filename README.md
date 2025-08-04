# Rapikom Embajador Landing Page

Un landing page moderno y responsivo para representantes de Rapikom embajadores de tiendas, inspirado en [Affirm](https://www.affirm.com/) y [Cashea](https://www.cashea.app/comercios) con animaciones sorprendentes y scrolls fluidos.

## 🚀 Características

- **Diseño Moderno**: Inspirado en las mejores prácticas de fintech
- **Animaciones Fluidas**: Usando Framer Motion para transiciones suaves
- **Responsivo**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags completos para mejor posicionamiento
- **Formulario Integrado**: Conectado a Supabase para captura de leads
- **Componentes Modulares**: Arquitectura limpia y mantenible

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Material-UI** - Componentes de formulario
- **Supabase** - Base de datos y autenticación
- **Lucide React** - Iconos modernos

## 📦 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/rapikom-embajador.git
cd rapikom-embajador
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Configura las variables de entorno**
```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus credenciales de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🗄️ Configuración de Supabase

1. **Crea una tabla en Supabase** llamada `aliados_comerciales`:

```sql
CREATE TABLE aliados_comerciales (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registro_mercantil TEXT NOT NULL,
  centro_comercial TEXT NOT NULL,
  productos TEXT NOT NULL,
  instagram TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

2. **Configura las políticas de seguridad** para permitir inserciones:

```sql
-- Permitir inserciones públicas
CREATE POLICY "Allow public inserts" ON aliados_comerciales
FOR INSERT WITH CHECK (true);
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: `#Fa4515` (Naranja Rapikom)
- **Secondary**: `#4E5864` (Gris corporativo)
- **White**: `#FFFFFF`

### Animaciones
Las animaciones personalizadas están en `tailwind.config.js`:
- `fade-in`: Aparecer gradualmente
- `slide-up`: Deslizar hacia arriba
- `slide-down`: Deslizar hacia abajo
- `scale-in`: Escalar desde el centro
- `float`: Efecto flotante

## 📁 Estructura del Proyecto

```
├── components/           # Componentes React
│   ├── AnimatedSection.tsx
│   ├── BenefitsSection.tsx
│   ├── FAQSection.tsx
│   ├── HeroSection.tsx
│   ├── PlansSection.tsx
│   ├── RegistrationSection.tsx
│   └── SignupForm.tsx
├── lib/                 # Utilidades y configuración
│   └── supabase.ts
├── pages/               # Páginas de Next.js
│   ├── _app.tsx
│   └── index.tsx
├── styles/              # Estilos globales
│   └── globals.css
├── tailwind.config.js   # Configuración de Tailwind
├── package.json         # Dependencias
└── README.md           # Este archivo
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard
3. ¡Listo! Se desplegará automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📱 Características del Landing

### Secciones Principales

1. **Hero Section**: 
   - Título impactante con gradientes
   - Estadísticas animadas
   - CTAs principales

2. **Benefits Section**:
   - 6 beneficios principales
   - Iconos animados
   - Efectos hover

3. **Plans Section**:
   - Planes 2 y 3 cuotas
   - Comparación de comisiones
   - Información importante

4. **FAQ Section**:
   - Acordeón interactivo
   - 6 preguntas frecuentes
   - Animaciones suaves

5. **Registration Section**:
   - Formulario de registro
   - Integración con Supabase
   - Validación en tiempo real

### Animaciones Incluidas

- **Scroll Animations**: Elementos aparecen al hacer scroll
- **Hover Effects**: Efectos al pasar el mouse
- **Gradient Animations**: Gradientes animados
- **Floating Elements**: Elementos flotantes
- **Staggered Animations**: Animaciones escalonadas

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting del código
```

## 📈 SEO y Performance

- **Meta tags completos** para redes sociales
- **Open Graph** para Facebook
- **Twitter Cards** para Twitter
- **Preconnect** para fuentes externas
- **Optimización de imágenes** automática
- **Lazy loading** de componentes

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un issue en el repositorio.

---

**Desarrollado con ❤️ para Rapikom** 
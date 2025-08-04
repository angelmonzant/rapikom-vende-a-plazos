# 🚀 Inicio Rápido - Rapikom Embajador

## Instalación en Windows

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto con:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

### 3. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
Ve a [http://localhost:3000](http://localhost:3000)

## 🗄️ Configuración de Supabase

### 1. Crear tabla
Ejecuta este SQL en tu dashboard de Supabase:

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

### 2. Configurar políticas
```sql
-- Permitir inserciones públicas
CREATE POLICY "Allow public inserts" ON aliados_comerciales
FOR INSERT WITH CHECK (true);
```

## 🎯 Características del Landing

✅ **Hero Section** con animaciones fluidas  
✅ **Benefits Section** con 6 beneficios principales  
✅ **Plans Section** con planes 2 y 3 cuotas  
✅ **FAQ Section** con acordeón interactivo  
✅ **Registration Section** con formulario integrado  
✅ **SEO optimizado** con meta tags completos  
✅ **Responsivo** para todos los dispositivos  
✅ **Animaciones modernas** con Framer Motion  

## 🎨 Personalización

### Colores principales:
- **Primary**: `#Fa4515` (Naranja Rapikom)
- **Secondary**: `#4E5864` (Gris corporativo)
- **White**: `#FFFFFF`

### Animaciones incluidas:
- Scroll animations
- Hover effects
- Gradient animations
- Floating elements
- Staggered animations

## 📱 Secciones del Landing

1. **Hero**: Título impactante + estadísticas + CTAs
2. **Benefits**: 6 beneficios con iconos animados
3. **Plans**: Planes 2 y 3 cuotas con comparación
4. **FAQ**: 6 preguntas frecuentes en acordeón
5. **Registration**: Formulario de registro con Supabase

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. ¡Listo!

### Netlify
1. Conecta tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

---

**¡Disfruta tu landing page moderno! 🎉** 
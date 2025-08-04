#!/bin/bash

echo "🚀 Configurando Rapikom Embajador Landing Page..."

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Crear archivo de entorno
echo "🔧 Configurando variables de entorno..."
if [ ! -f .env.local ]; then
    cat > .env.local << EOF
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
EOF
    echo "✅ Archivo .env.local creado"
    echo "⚠️  Recuerda configurar tus credenciales de Supabase en .env.local"
else
    echo "✅ Archivo .env.local ya existe"
fi

# Verificar que todo esté listo
echo "🔍 Verificando configuración..."
if [ -f package.json ] && [ -f tailwind.config.js ] && [ -f next.config.js ]; then
    echo "✅ Configuración completada exitosamente!"
    echo ""
    echo "🎉 ¡Todo listo! Para comenzar:"
    echo "1. Configura tus credenciales de Supabase en .env.local"
    echo "2. Ejecuta: npm run dev"
    echo "3. Abre http://localhost:3000 en tu navegador"
    echo ""
    echo "📚 Para más información, consulta el README.md"
else
    echo "❌ Error: Faltan archivos de configuración"
    exit 1
fi 
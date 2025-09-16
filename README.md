# Fundación Entrelíneas

Sitio web oficial de la Fundación Entrelíneas, desarrollado con Astro y Deno.

## 🚀 Tecnologías

- **Astro** - Framework web moderno
- **Deno** - Runtime de JavaScript/TypeScript
- **SCSS** - Preprocesador CSS
- **GitHub Pages** - Hosting estático

## 🛠️ Desarrollo

### Prerrequisitos

- [Deno](https://deno.land/) instalado

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/wtoloza-dev/fundacion-entre-lineas.git

# Navegar al directorio
cd fundacion-entre-lineas

# Instalar dependencias
deno task install

# Ejecutar en modo desarrollo
deno task dev
```

### Scripts disponibles

- `deno task dev` - Servidor de desarrollo
- `deno task build` - Build para producción
- `deno task preview` - Preview del build
- `deno task check` - Linting con Biome
- `deno task format` - Formateo de código

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, etc.)
│   └── organisms/      # Componentes complejos (Header, Footer, etc.)
├── layouts/
│   └── BaseLayout.astro # Layout principal
├── pages/
│   └── index.astro     # Página principal
└── styles/
    └── _variables.scss # Variables SCSS globales
```

## 🌐 Despliegue

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`.

**URL de producción**: https://wtoloza-dev.github.io/fundacion-entre-lineas

## 📝 Secciones

- **Quiénes somos** - Información sobre la fundación
- **Qué hacemos** - Servicios y actividades
- **Actividades** - Eventos y programas
- **Galería** - Imágenes y videos
- **Colaboradores** - Equipo y partners
- **Contacto** - Información de contacto

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
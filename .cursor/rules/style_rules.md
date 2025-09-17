# 🎨 Style Rules - Fundación Entrelineas

This document defines the coding standards and style guidelines for the project.

## 📋 Table of Contents

- [General Principles](#general-principles)
- [SCSS/CSS Guidelines](#scsscss-guidelines)
- [Component Structure](#component-structure)
- [Naming Conventions](#naming-conventions)
- [File Organization](#file-organization)
- [Code Examples](#code-examples)
- [Best Practices](#best-practices)

## 🎯 General Principles

### 1. **Consistency First**
- Follow established patterns throughout the codebase
- Use the same approach for similar problems
- Maintain visual and structural consistency

### 2. **Maintainability**
- Write code that's easy to understand and modify
- Use clear, descriptive names
- Keep components focused and single-purpose

### 3. **Performance**
- Optimize for loading speed and runtime performance
- Use efficient CSS selectors
- Minimize bundle size

## 🎨 SCSS/CSS Guidelines

### **File Structure**
```
src/styles/
├── _variables.scss        # Global variables
├── _mixins.scss          # Reusable mixins (future)
├── _functions.scss       # SCSS functions (future)
├── global.scss           # Global styles
└── components/           # Component-specific styles
```

### **Variable Usage**
```scss
// ✅ Good - Use variables consistently
.button {
  background-color: $color-primary;
  padding: $spacing-md;
  font-family: $font-family;
}

// ❌ Bad - Hardcoded values
.button {
  background-color: #fbd100;
  padding: 16px;
  font-family: 'Inter', sans-serif;
}
```

### **Nesting Rules**
```scss
// ✅ Good - Maximum 3 levels deep
.card {
  background: $color-bg;
  
  &__header {
    padding: $spacing-lg;
    
    &-title {
      font-size: $font-size-xl;
    }
  }
}

// ❌ Bad - Too deep nesting
.card {
  background: $color-bg;
  
  &__header {
    padding: $spacing-lg;
    
    &-title {
      font-size: $font-size-xl;
      
      &-text {
        color: $color-text;
        
        &-highlight {
          font-weight: bold;
        }
      }
    }
  }
}
```

### **Selector Specificity**
```scss
// ✅ Good - Low specificity
.hero-container {
  display: flex;
}

// ❌ Bad - High specificity
div.hero-container.container-fluid {
  display: flex;
}
```

## 🧩 Component Structure

### **Astro Component Template**
```astro
---
// 1. Imports
import ComponentName from '@components/path/ComponentName.astro';

// 2. Props interface
export interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

// 3. Props destructuring with defaults
const { title, variant = 'primary', className = '' } = Astro.props;
---

<!-- 4. HTML structure -->
<div class={`component-name component-name--${variant} ${className}`}>
  <h2 class="component-name__title">{title}</h2>
  <div class="component-name__content">
    <slot />
  </div>
</div>

<!-- 5. Styles -->
<style lang="scss">
  .component-name {
    // Base styles
    
    &--primary {
      // Variant styles
    }
    
    &--secondary {
      // Variant styles
    }
    
    &__title {
      // Element styles
    }
    
    &__content {
      // Element styles
    }
  }
</style>
```

### **Component Naming**
```scss
// ✅ Good - BEM methodology
.hero-container { }
.hero-container__title { }
.hero-container__title--large { }
.hero-container--dark { }

// ❌ Bad - Inconsistent naming
.heroContainer { }
.hero_title { }
.heroTitleLarge { }
```

## 📝 Naming Conventions

### **Files and Directories**
```
components/
├── atoms/           # Basic UI elements
│   ├── Button.astro
│   └── Input.astro
├── molecules/       # Simple combinations
│   ├── SearchBox.astro
│   └── Card.astro
└── organisms/       # Complex components
    ├── Header.astro
    └── Footer.astro
```

### **CSS Classes**
```scss
// BEM (Block Element Modifier)
.block { }                    // Block
.block__element { }           // Element
.block--modifier { }          // Modifier
.block__element--modifier { } // Element with modifier
```

### **SCSS Variables**
```scss
// Colors
$color-primary: #fbd100;
$color-secondary: #050308;
$color-accent: #151515;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;

// Typography
$font-family: 'Inter', system-ui, sans-serif;
$font-size-base: 1rem;
$font-weight-normal: 400;
```

## 📁 File Organization

### **Component Files**
```
src/components/
├── atoms/
│   ├── Button/
│   │   ├── Button.astro
│   │   ├── Button.module.scss
│   │   └── Button.stories.ts
│   └── Input/
│       ├── Input.astro
│       └── Input.module.scss
└── organisms/
    ├── Header/
    │   ├── Header.astro
    │   ├── Header.module.scss
    │   └── index.ts
    └── Footer/
        ├── Footer.astro
        └── Footer.module.scss
```

### **Style Files**
```
src/styles/
├── _variables.scss     # Global variables
├── _mixins.scss       # Reusable mixins
├── _functions.scss    # SCSS functions
├── _base.scss         # Base styles
├── _utilities.scss    # Utility classes
└── global.scss        # Main import file
```

## 💡 Code Examples

### **Responsive Design**
```scss
.hero-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: $spacing-xl;
  }
  
  @media (min-width: 1024px) {
    gap: $spacing-2xl;
  }
}
```

### **Component Variants**
```scss
.button {
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius;
  font-family: $font-family;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &--primary {
    background-color: $color-primary;
    color: $color-text;
    
    &:hover {
      background-color: darken($color-primary, 10%);
    }
  }
  
  &--secondary {
    background-color: transparent;
    color: $color-primary;
    border: 2px solid $color-primary;
    
    &:hover {
      background-color: $color-primary;
      color: $color-text;
    }
  }
  
  &--large {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-lg;
  }
}
```

### **Utility Classes**
```scss
// Spacing utilities
.mt-xs { margin-top: $spacing-xs; }
.mt-sm { margin-top: $spacing-sm; }
.mt-md { margin-top: $spacing-md; }

.mb-xs { margin-bottom: $spacing-xs; }
.mb-sm { margin-bottom: $spacing-sm; }
.mb-md { margin-bottom: $spacing-md; }

// Text utilities
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-primary { color: $color-primary; }
.text-secondary { color: $color-secondary; }
```

## ✅ Best Practices

### **DO's**
- ✅ Use semantic HTML elements
- ✅ Follow BEM methodology for CSS classes
- ✅ Use SCSS variables for consistent theming
- ✅ Write mobile-first responsive code
- ✅ Use meaningful class names
- ✅ Keep components focused and single-purpose
- ✅ Use CSS Grid and Flexbox for layouts
- ✅ Optimize images and assets

### **DON'Ts**
- ❌ Don't use inline styles
- ❌ Don't nest CSS more than 3 levels deep
- ❌ Don't use `!important` unless absolutely necessary
- ❌ Don't use generic class names like `.box` or `.content`
- ❌ Don't hardcode colors or spacing values
- ❌ Don't create overly specific selectors
- ❌ Don't mix different naming conventions

### **Performance Tips**
- Use `transform` and `opacity` for animations
- Minimize layout thrashing
- Use `will-change` sparingly
- Optimize critical rendering path
- Use CSS containment when appropriate

## 🔧 Tools and Setup

### **Required Tools**
- Astro with SCSS support
- VS Code with SCSS extensions
- Browser dev tools for debugging

### **VS Code Extensions**
- SCSS IntelliSense
- CSS Peek
- Auto Rename Tag
- Bracket Pair Colorizer

### **Linting and Formatting**
- Use Prettier for code formatting
- Use Stylelint for CSS/SCSS linting
- Configure ESLint for JavaScript/TypeScript

---

**Remember**: These rules are guidelines, not strict laws. Use your judgment and adapt when necessary for the project's needs.

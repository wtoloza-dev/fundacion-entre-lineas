# 🤖 Cursor AI Rules

This directory contains the configuration and rules for Cursor AI to maintain consistency and follow project standards.

## 📁 Directory Structure

```
.cursor/
├── README.md              # This file
└── rules/                 # Rules directory
    ├── rules              # Main Cursor AI rules
    └── style_rules.md     # Detailed style documentation
```

## 🎯 Purpose

The `.cursor` directory provides:

- **AI Guidelines**: Rules that Cursor AI follows when generating code
- **Style Standards**: Detailed documentation for SCSS/CSS conventions
- **Project Consistency**: Ensures all AI-generated code follows project patterns
- **Code Quality**: Maintains high standards for maintainability and readability

## 📋 Files Overview

### `rules/rules`
Main configuration file that Cursor AI reads to understand:
- Project technology stack (Astro, SCSS, TypeScript)
- Code style guidelines and naming conventions
- Component structure and organization
- Performance and quality standards

### `rules/style_rules.md`
Comprehensive style documentation including:
- SCSS/CSS best practices
- BEM methodology guidelines
- Component structure templates
- Code examples and anti-patterns
- Performance optimization tips

## 🚀 Usage

Cursor AI automatically reads these rules when:
- Generating new components
- Refactoring existing code
- Suggesting code improvements
- Maintaining project consistency

## 🔧 Maintenance

To update the rules:
1. Edit the appropriate file in the `rules/` directory
2. Ensure changes align with project standards
3. Test with Cursor AI to verify rule application
4. Update this README if adding new files

## 📚 Related Documentation

- **Project Styles**: `src/styles/README.md`
- **SCSS Variables**: `src/styles/_variables.scss`
- **Global Styles**: `src/styles/global.scss`

---

**Note**: These rules are automatically applied by Cursor AI to maintain code consistency across the project.

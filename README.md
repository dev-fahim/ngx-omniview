<div align="center">

# ngx-omniview

[![Angular](https://img.shields.io/badge/Angular-15--20-red.svg?logo=angular&logoColor=white)](https://angular.io)
[![NPM version](https://img.shields.io/npm/v/ngx-omniview.svg?logo=npm&logoColor=white)](https://www.npmjs.com/package/ngx-omniview)
[![License: MIT](https://img.shields.io/npm/l/ngx-omniview.svg?color=green&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Downloads](https://img.shields.io/npm/dt/ngx-omniview.svg?logo=npm&logoColor=white)](https://npmcharts.com/compare/ngx-omniview?minimal=true)
<br>
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white)](https://github.com/binapani-edu/ngx-omniview)
[![Website](https://img.shields.io/badge/Website-binapani.com-0078D4?logo=googlechrome&logoColor=white)](https://www.binapani.com)
[![YouTube](https://img.shields.io/badge/YouTube-Binapani%20Edu-FF0000?logo=youtube&logoColor=white)](https://www.youtube.com/@binapani_edu)

[![NPM](https://nodei.co/npm/ngx-omniview.svg)](https://www.npmjs.com/package/ngx-omniview)

**A universal content viewer for Angular**
Renders any raw string input as Plain Text, HTML, Markdown, LaTeX, MathJax, JSON, and more... all from a single component.

</div>

---

> [!NOTE]
> - This README is a **developer guide** for developers **contributing** to or **building** the `ngx-omniview` library.
> - For **end-user documentation** (installation, usage, API), see **[projects/ngx-omniview/README.md](projects/ngx-omniview/README.md)**.

---

> [!WARNING] 
> This project is currently in **active development**.
> While we strive for stability, you may encounter bugs or unexpected behavior.  
> 
> **🐛 Found an issue?** Please [report it](https://github.com/binapani-edu/ngx-omniview/issues) so we can improve!  
> **💡 Have a suggestion?** We'd love to hear your [feedback](https://github.com/binapani-edu/ngx-omniview/issues)!

---

## Usage

```typescript
<omniview [data]="content" [format]="'markdown'"></omniview>
```

## Setup

```bash
npm install
ng build ngx-omniview    # Build library
ng serve demo            # Run demo app
```

## Development

| Command | Purpose |
|---------|---------|
| `ng build ngx-omniview` | Build the library |
| `ng build ngx-omniview --watch` | Hot build on changes (to use during development) |
| `ng build ngx-omniview --configuration production` | Build the library for production (final check before publish) |
| `ng test ngx-omniview` | Run library tests |
| `ng serve demo` | Run demo app at `http://localhost:4200` |

**Workflow:** After changing library code, rebuild with `ng build ngx-omniview` before testing in demo app.

## Project Structure

```
ngx-omniview/
├── projects/
│   ├── ngx-omniview/          # Library source (published to npm)
│   │   └── src/lib/
│   │       ├── renderers/     # Format renderers (text, html, markdown, etc.)
│   │       └── ngx-omniview.component.ts
│   └── demo/                  # Demo app (not published)
└── dist/ngx-omniview/         # Built library (after ng build)
```

## Contributing

**Adding a new format renderer?** See [renderers/README.md](projects/ngx-omniview/src/lib/renderers/README.md)

### Quick Guide:
1. Create `[format].renderer.ts` in `projects/ngx-omniview/src/lib/renderers/`
2. Register in `renderer.registry.ts`
3. Test in demo app
4. Submit PR

## Publishing

```bash
ng build ngx-omniview
cd dist/ngx-omniview
npm publish
```

## Demo App

The demo application is hosted on GitHub Pages and automatically updates whenever changes are pushed to the `main` branch.

**Live Demo:** [View Demo](https://binapani-edu.github.io/ngx-omniview/)

The demo app showcases all the features and format renderers available in `ngx-omniview`.

## License

MIT

---

<div align="center">

• [Report Bug](https://github.com/binapani-edu/ngx-omniview/issues) • [Request Feature](https://github.com/binapani-edu/ngx-omniview/issues) • [View on NPM](https://www.npmjs.com/package/ngx-omniview) •

Made with ❤️ for Angular

</div>

# ⚡️ Quickstart

Open a terminal:
``` 
npm install @rgonfire/ui-on-fire
```
<br/>.

Add required font into index.html:
``` html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
``` 
<br/>
Import stylesheet in your root app entry:

``` jsx
// app.tsx, app.jsx
import "@trejocode/uikit/dist/trejocode-uikit.css";
```

Import it:
``` jsx
// view.tsx, view.jsx
import { Button } from "@trejocode/uikit";

export const View = () => {
  return (
    <Button variant="primary" size="default">
      Click me
    </Button>
  );
};
```


# 🌱 Third Party Dependencies

This is a list of dependencies that are user for this module:

- Storybook
- Tailwindscss
- Rollup
- Typescript
- classnames
- React Router DOM

## peerDependencies
- React js.
- React DOM como dependencias obligadas.

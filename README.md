# ⚡️ Quickstart

Open a terminal:
``` 
npm install @rgonfire/ui-on-fire
```
<br/>

Import stylesheet in your root app entry:
``` 
// app.tsx, app.jsx
import "@trejocode/uikit/dist/trejocode-uikit.css";
```
<br/>

Import it:
```
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

+ Storybook
+ Tailwindscss
+ Rollup
+ Typescript
+ classnames
+ React Router DOM

## peerDependencies
+ React js.
+ React DOM.

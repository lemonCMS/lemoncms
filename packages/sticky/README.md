# React Sticky component

A easy to use component to make somethin stick on the top of your screen

- React 16 compatible
- SSR compatible

## Demo & docs

### Installment

Install with npm

```bash
npm install @wicked_query/react-sticky --save
```

Or with yarn

```bash
yarn add @wicked_query/react-sticky
```

### How to use

```jsx harmony
import React from "react";
import Sticky from "@wicked_query/react-sticky";

export default function() {
  return (
    <Sticky>
      <div>Stick to top</div>
    </Sticky>
  );
}
```

[Play online](https://codesandbox.io/s/96v04jy3y)

### Know issues

- No margins. The wrapped tag may not have a margin.
- You can only wrap html tags, no React Components.
- Does not work on google chrome mobile, but why?

\------------------------\
_Happy coding_

# @entangle-labs/ngl-uikit

A modern React UI kit for Entangle Protocol applications.

## Installation

```bash
npm install @entangle-labs/ngl-uikit
```

or

```bash
yarn add @entangle-labs/ngl-uikit
```

## Requirements

This package has the following peer dependencies:

```json
{
  "@tanstack/react-table": "^8.20.6",
  "@tanstack/table-core": "^8.20.5",
  "next": "^12.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

Make sure these are installed in your project.

## Usage

```jsx
import { Button, TextInput, Tooltip } from '@entangle-labs/ngl-uikit';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <TextInput placeholder="Enter text..." />
      <Tooltip content="Helpful tip">Hover me</Tooltip>
    </div>
  );
}
```

## Components

### AnimationContainer
A wrapper component that provides animation capabilities to its children.

### Badge
A component for displaying status indicators or labels.

### BoxText
A text component with a boxed background.

### Button
A customizable button component with various styles and states.

### CheckboxDropdown
A dropdown component with checkbox selection capabilities.

### CornersFrame
A decorative frame component with corner accents.

### CubicText
A text component with 3D-like cubic styling.

### Expander
A collapsible/expandable container component.

### PopoverMenu
A menu component that appears in a popover.

### PopoverSelect
A select component with popover functionality.

### SearchInput
An input component optimized for search functionality.

### Table
A powerful table component built on top of @tanstack/react-table.

### Tabs
A tabbed interface component.

### TextInput
A customizable text input component.

### Title
A component for displaying titles with consistent styling.

### Tooltip
A component for displaying additional information on hover.

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request to the project.

## License

MIT © [Entangle Labs](https://github.com/Entangle-Protocol)

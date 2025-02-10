# ngl-uikit
**NGL UI Kit** is a versatile set of components and styles designed for a consistent, adaptive, and scalable design across Entangle products. Optimized for React and Next.js, it supports theming, animations, and accessibility.

# Installation

`npm install ngl-uikit`

# Components

**ToggleGroup**

A component for creating a group of toggles with a unified state.

![image](https://github.com/user-attachments/assets/8b74cab8-3b03-4850-8cc7-144e2817d91a)

Props:

- items: string[] - array of options to choose from
- value: string - currently selected value
- onChange: (value: string) => void - callback when value changes

**CornersFrame**

A decorative frame with corner elements for visual content styling.

![image](https://github.com/user-attachments/assets/6ea39857-d968-4aba-ae33-7f83f5995a5e)

Props:

- children: ReactNode - content inside the frame
- className?: string - additional CSS classes
- variant?: 'default' | 'active' - frame style variant

**Table**

A component for displaying tabular data with sorting and pagination support.

![image](https://github.com/user-attachments/assets/4e0b0d98-28ea-4110-a88d-7860e27fddd0)

Props:

- data: any[] - array of data for the table
- columns: ColumnDef[] - column configuration
- pagination?: boolean - enable pagination
- pageSize?: number - number of rows per page
- styleProps?: props to style row, cell or column

**Breadcrumbs**

A navigation component for displaying page hierarchy.

![image](https://github.com/user-attachments/assets/5312b758-cee9-476e-aad5-6edb5b72b775)

Props:

- items: BreadcrumbItem[] - array of navigation items
- label: string - item text
- href?: string - link (optional for the last item)

**AnimationContainer**

A container for adding appearance animation to any content (corners and lines inside + positioning)

![image](https://github.com/user-attachments/assets/b285b461-d34d-4e66-89a9-fa44f3cfe524)

Props:

- children: ReactNode - content to be animated
- className?: string - additional CSS classes
- delay?: number - animation delay in milliseconds

# Contributing

We welcome contributions to the library! Please review our contribution guidelines before creating a merge request.


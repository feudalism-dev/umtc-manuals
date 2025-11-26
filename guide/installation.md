# Installation

## Prim Naming

The system identifies which prims to change using a special tag in the **Description** field (or Name field, if configured).

### Format
`t;<name>`

### Examples
-   `t;seat`
-   `t;back`
-   `t;cushion`

### Advanced: Selective Faces
You can specify which faces to include or skip using the tilde `~`.

-   `t;seat~0,1` -> Only affects faces 0 and 1.
-   `t;cushion~` -> Skips this prim entirely (useful for duplicates).

## Script Setup

1.  **Main Script**: Place in the root prim. Always required.
2.  **Data Dump Script**: Place in root prim for SETUP ONLY. Remove before selling.
3.  **LSD Loader Script**: Place in root prim. Required to load notecards. Can be removed after loading (for no-mod products) or kept (for mod products).

### Distribution Options

**Option A: Minimal (No-Mod)**
-   Include: Main Script
-   Remove: Data Dump, LSD Loader, Notecards
-   *Best for content protection.*

**Option B: Customizable (Mod)**
-   Include: Main Script, LSD Loader, Notecards
-   Remove: Data Dump
-   *Best for allowing users to add their own textures.*

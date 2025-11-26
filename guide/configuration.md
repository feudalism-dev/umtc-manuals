# Configuration

## Notecard System

Texture sets are defined in notecards. The name of the notecard determines the menu structure.

### Naming Format
`PBR:<ObjectName>:<MenuPath>:<TextureSetName>`

-   **PBR**: Literal prefix.
-   **ObjectName**: Unique ID for the object (e.g., `Sofa`).
-   **MenuPath**: Optional. Use `*` to denote a menu level (e.g., `Colors*`).
-   **TextureSetName**: The button label (e.g., `Red Velvet`).

### Examples
-   `PBR:Sofa:Red` -> Button "Red"
-   `PBR:Sofa:Colors*:Blue` -> Menu "Colors" -> Button "Blue"

## Data Dump Configuration

When using the Data Dump script, click the object to access the Admin menu:

-   **Set Mode**: Choose PBR Only, PBR+BC, etc.
-   **Security**: Set access to All, Group, or Owner.
-   **WorksVia**: Choose Touch, AVsitter, Both, or HUD.
-   **Auto-Diffuse**: Automatically copy PBR Base Color to Legacy Diffuse.

## Memory Management

Monitor memory usage via the `Security*` -> `Memory*` menu.

-   **Safe**: < 10 KB used
-   **Warning**: < 5000 bytes free script memory

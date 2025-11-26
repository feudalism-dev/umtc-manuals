# LinksetData Structure

The system uses LinksetData (LSD) as a persistent, low-memory database.

## Key Naming Conventions

| Key Pattern | Purpose | Example |
| :--- | :--- | :--- |
| `PBR:<Object>:<Name>` | Texture Set Data | `PBR:Sofa:Red` |
| `objectName` | Object Identifier | `Sofa` |
| `currentTextureSet` | State Tracking | `PBR:Sofa:Red` |
| `PBR Menus` | Menu Hierarchy | `Colors*,Fabrics*` |
| `PBR Menu Items` | Menu Content | `Red,Blue,Green` |

## Storage Format

### Texture Set Data
**Key**: `PBR:<ObjectName>:<TexturePath>`
**Value**: CSV string (one line per face)

```csv
t;seat|0|abc...|0
t;back|0|def...|0
```

### Menu Structure
**Key**: `PBR Menus`
**Value**: CSV list of menu paths.
`Colors*,Fabrics*,Patterns*`

## Memory Specifications

-   **Total Capacity**: 64 KB (65,536 bytes)
-   **Max Value Length**: 4 KB per key

### Usage Estimates

| Mode | Bytes per Face |
| :--- | :--- |
| **PBR Only** | ~50 bytes |
| **PBR+BC** | ~150 bytes |
| **PBR ALL** | ~300 bytes |
| **NonPBR Only** | ~200 bytes |
| **PBR+Non-PBR** | ~500 bytes |

*Estimates vary based on UUID length and precision.*

# Data Dump Formats

The UMTC system uses specific CSV formats for storing material data in LinksetData. These formats vary based on the PBR mode selected.

## Visual Breakdown

### PBR Only Mode
Used when the object only has PBR materials.

| Index | Field | Description | Example |
| :--- | :--- | :--- | :--- |
| 0 | Link Name | Name of the prim | `cushion` |
| 1 | Face | Face number | `0` |
| 2 | Material ID | UUID of the material | `5748decc-f629-461c-9a36-a35a221fe21f` |
| 3 | Alpha Mode | 0=None, 1=Blend, 2=Mask, 3=Emissive | `1` |

**Format String:**
`LinkName|Face|MaterialID|AlphaMode`

---

### PBR + Base Color (PBR+BC)
Used when you want to override the Base Color of a PBR material.

| Index | Field | Description | Example |
| :--- | :--- | :--- | :--- |
| 0 | Link Name | Name of the prim | `chair_leg` |
| 1 | Face | Face number | `1` |
| 2 | Material ID | UUID of the material | `...` |
| 3 | BC Texture | Base Color Texture UUID | `...` |
| 4 | BC Repeats | Vector <u,v,0> | `<1,1,0>` |
| 5 | BC Offsets | Vector <u,v,0> | `<0,0,0>` |
| 6 | BC Rot | Rotation in radians | `0.0` |
| 7 | BC Tint | Vector <r,g,b> | `<1,1,1>` |
| 8 | Alpha | Transparency (0.0-1.0) | `1.0` |
| 9 | Alpha Mode | Mode integer | `1` |
| 10 | Cutoff | Mask cutoff (0.0-1.0) | `0.5` |
| 11 | Double Sided | 0=False, 1=True | `0` |

**Format String:**
`LinkName|Face|MaterialID|BCTexture|BCRepeats|BCOffsets|BCRot|BCTint|Alpha|AlphaMode|Cutoff|DoubleSided`

---

### Non-PBR Only
Legacy Blinn-Phong textures.

| Index | Field | Description |
| :--- | :--- | :--- |
| 0 | Link Name | Name of the prim |
| 1 | Face | Face number |
| 2 | Diffuse ID | Texture UUID |
| 3 | Repeats | `<u,v,0>` |
| 4 | Offsets | `<u,v,0>` |
| 5 | Rotation | Float (radians) |
| 6 | Color | `<r,g,b>` |
| 7 | Alpha | Float |
| 8 | Alpha Mode | Integer |
| 9 | Cutoff | Integer |
| 10 | Normal ID | Texture UUID |
| 11 | N. Repeats | `<u,v,0>` |
| 12 | N. Offsets | `<u,v,0>` |
| 13 | N. Rotation | Float |
| 14 | Specular ID | Texture UUID |
| 15 | S. Repeats | `<u,v,0>` |
| 16 | S. Offsets | `<u,v,0>` |
| 17 | S. Rotation | Float |
| 18 | S. Color | `<r,g,b>` |
| 19 | Glossiness | Integer |
| 20 | Environment | Integer |

**Format String:**
`LinkName|Face|DiffuseID|Repeats|Offsets|Rot|Color|Alpha|AlphaMode|Cutoff|NormalID|NRepeats|NOffsets|NRot|SpecularID|SRepeats|SOffsets|SRot|SColor|Glossiness|Environment`

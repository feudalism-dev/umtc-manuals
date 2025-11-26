# Getting Started

## System Overview

The UMTC system works by separating the setup phase from the runtime experience.

### How It Works

1.  **Setup Phase**: You label your prims, apply textures, and use the **Data Dump Script** to extract the material data into notecards.
2.  **Loading Phase**: The **LSD Loader Script** reads these notecards and stores the data in the object's LinksetData (LSD).
3.  **Runtime**: The **Main Script** reads from LSD to apply textures instantly when users interact with the object.

### Planning Your Setup

Before you begin, decide on your material mode and menu structure.

#### 1. Choose Your Material Mode

| Mode | Best For | Description |
| :--- | :--- | :--- |
| **PBR Only** | New Builds | Efficient. Stores Material UUID + Alpha Mode. |
| **PBR+BC** | Custom Tints | Stores Material UUID + Base Color (Texture, Tint, Repeats, etc.). |
| **PBR ALL** | Full Control | Stores all PBR channels (Emissive, Metallic, Roughness, Normal). |
| **PBR+Non-PBR** | Hybrid | Stores both PBR and Legacy data. Maximum compatibility but uses more memory. |
| **NonPBR Only** | Legacy | Traditional Blinn-Phong textures only. |

#### 2. Plan Your Menus

The system builds menus automatically based on your notecard names.

-   **Simple List**: `PBR:Sofa:Red`, `PBR:Sofa:Blue`
-   **Sub-Menus**: `PBR:Sofa:Fabric*:Cotton`, `PBR:Sofa:Fabric*:Leather`
-   **Nested**: `PBR:Sofa:Fabric*:Cotton*:White`

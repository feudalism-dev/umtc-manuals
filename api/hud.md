# HUD & Prop Integration

The UMTC system includes built-in support for HUDs and prop synchronization, requiring no custom coding.

## HUD System

The system uses a split strategy for HUDs to support both production (wearable) and development (rezzed) use cases.

### 1. Production HUD (Wearable)
**Script:** `UMTC HUD Button Script`
- **Usage:** For HUDs distributed to customers.
- **Communication:** Uses `llRegionSayTo(Owner)`.
- **Behavior:** Only affects the wearer's attachments. Does not affect rezzed objects or other users.

### 2. Development HUD (Rezzed/Testing)
**Script:** `UMTC HUD Maker Script`
- **Usage:** For testing or "HUD Maker" objects.
- **Communication:** Uses `llSay` (20m range).
- **Behavior:** Affects both worn and rezzed objects within chat range.

### 3. HUD Listener
**Script:** `UMTC HUD Listener Script`
- **Usage:** Place inside the target object (furniture, clothing).
- **Security:** Verifies that the HUD owner matches the object owner.

## Prop Synchronization

Synchronize textures between a main object (e.g., a bed) and rezzed props (e.g., pillows, blankets).

### Setup

1.  **Main Object**: Add `UMTC Object Prop Script`.
2.  **Prop**: Add `UMTC Rezzed Prop Script` and `UMTC Main Script`.

### How it Works
1.  When the prop is rezzed, it sends a request to the main object.
2.  The main object replies with its current texture set name.
3.  The prop applies the same texture set immediately.

No configuration is required other than ensuring both objects are owned by the same person (or have matching security settings).

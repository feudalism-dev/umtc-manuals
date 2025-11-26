# Link Message API

The UMTC system uses a simple link message API for integration. This allows other scripts in the linkset to control textures and query the current state.

## Message Protocol

All communication uses `llMessageLinked`. No chat channels are required for local API usage.

| Message # | Direction | Purpose | Data Format |
| :--- | :--- | :--- | :--- |
| **12150615** | → Main Script | Apply texture set | Texture set name (string) |
| **12150616** | → Main Script | Request current texture | Empty string |
| **12150617** | ← Main Script | Current texture response | Texture set name (string) |

## Applying Textures

To apply a texture set, send a link message with the full name of the texture set (as defined in your notecards).

```lsl
// Apply "Red Velvet" texture set for object "Sofa"
llMessageLinked(LINK_SET, 12150615, "PBR:Sofa:Red Velvet", NULL_KEY);
```

### Parameters
- **Link**: `LINK_SET` (recommended)
- **Num**: `12150615`
- **String**: Full texture set name (e.g., `PBR:Sofa:Red Velvet`)
- **Key**: `NULL_KEY` (ignored)

## Querying Current Texture

To find out which texture set is currently applied, send a request message. The Main Script will reply with a link message.

**Request:**
```lsl
llMessageLinked(LINK_SET, 12150616, "", NULL_KEY);
```

**Response Handler:**
```lsl
link_message(integer sender, integer num, string msg, key id)
{
    if (num == 12150617)
    {
        llOwnerSay("Current texture set is: " + msg);
    }
}
```

## Examples

### Cycle Through Textures
```lsl
list textures = ["PBR:Sofa:Red", "PBR:Sofa:Blue", "PBR:Sofa:Green"];
integer index = 0;

default
{
    touch_start(integer num)
    {
        string tex = llList2String(textures, index);
        llMessageLinked(LINK_SET, 12150615, tex, NULL_KEY);
        
        index++;
        if (index >= llGetListLength(textures)) index = 0;
    }
}
```

### Random Texture on Rez
```lsl
default
{
    on_rez(integer start)
    {
        llSleep(1.0); // Wait for Main Script to initialize
        llMessageLinked(LINK_SET, 12150615, "PBR:Sofa:Random", NULL_KEY);
    }
}
```

# Troubleshooting

## Common Issues

### "Texture set not found"
-   **Cause**: The notecard name doesn't match the requested texture set.
-   **Fix**: Check for typos. Ensure `ObjectName` matches.

### Menu doesn't open
-   **Cause**: Script not running or Security settings restrict access.
-   **Fix**: Reset scripts. Check Security settings (Owner/Group).

### HUD not working
-   **Cause**: Wrong channel or Owner mismatch.
-   **Fix**: Ensure HUD Listener is in the object. For HUD Button (Production), ensure you are wearing it. For HUD Maker (Dev), ensure you are within 20m.

### Out of Memory
-   **Cause**: Too many texture sets or complex mode (PBR+Non-PBR).
-   **Fix**: Use `t;name~faces` to reduce data. Switch to a lighter mode (PBR Only). Remove unused texture sets.

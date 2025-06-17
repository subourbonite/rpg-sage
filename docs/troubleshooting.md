# Troubleshooting Guide

This guide helps resolve common issues with RPG Sage and provides solutions for the most frequently encountered problems.

## Bot Not Responding

### Check Basic Connectivity

**Verify Bot is Online**
- Look for the green dot next to RPG Sage in the member list
- If offline, the bot may be experiencing downtime

**Test Basic Commands**
```
sage! help
sage! ping
```
These should work in any channel where the bot has permissions.

### Permission Issues

**Required Discord Permissions**
The bot needs these permissions to function:
- Send Messages
- Embed Links
- Attach Files
- Add Reactions
- View Channel History

**Check Channel Permissions**
1. Right-click the channel → Edit Channel
2. Go to Permissions tab
3. Look for RPG Sage in the roles/members list
4. Ensure required permissions are granted (green checkmarks)

**Role Hierarchy**
- RPG Sage's role must be above roles it needs to manage
- Drag the bot's role higher in Server Settings → Roles

### Command Prefix Issues

**Check Current Prefix**
```
@RPG Sage prefix get
```
Use the bot mention instead of the prefix if you're unsure.

**Reset Prefix**
```
@RPG Sage prefix unset
```
This removes custom prefixes and returns to default.

## Command Errors

### Permission Denied Messages

**"Sorry, you aren't allowed to access this command"**
- You lack the required admin level for this command
- Check your admin status: `sage! admin list`
- Contact a server admin to grant appropriate permissions

**"You cannot manage your settings here"**
- Some commands require specific channel types
- Try the command in a different channel
- Check channel configuration: `sage! channel details`

### Invalid Arguments

**"Invalid Input" or "Invalid CommandType"**
- Check command syntax and spelling
- Use `sage! command help` for specific command guidance
- Ensure all required parameters are provided

**Example: Dice Rolling Issues**
```
# Incorrect
sage! roll d20+5invalid

# Correct
sage! roll 1d20+5
```

### Command Not Found

**"Command not recognized"**
- Verify command spelling
- Some commands may be disabled in current channel
- Check available commands: `sage! help`

## Character Management Issues

### Character Import Problems

**"Sorry, something went wrong with the import"**
1. **File Format Issues**
   - Ensure PDF is fillable and properly completed
   - Check JSON file validity (use a JSON validator online)
   - Verify file size is under Discord's limit (8MB)

2. **Character Builder Compatibility**
   - Pathbuilder 2E: Use "Export JSON" feature
   - Ensure character is complete in source application
   - Try re-exporting from character builder

3. **PDF Import Issues**
   - Fill all required fields in the PDF
   - Use official or well-known character sheet formats
   - Some custom PDFs may not be supported

**Troubleshooting Import Steps**
1. Try importing a simple character first
2. Check that all required fields are filled
3. Ensure character follows game system rules
4. Verify the export format is supported

### Character Not Found

**"Sorry, we cannot find [Character Name]"**
- Check character name spelling and capitalization
- Use quotes for names with spaces: `name="Character Name"`
- Verify character exists: `sage! character list`
- Ensure you're in the correct game context

### Character Display Issues

**Missing Character Information**
- Some import data may be incomplete
- Manually update character notes as needed
- Re-import if source data was updated

## Game Management Problems

### Game Creation Failures

**"Unable to create game"**
1. **Permission Issues**
   - Verify you have ServerAdmin or GameAdmin permissions
   - Check if you're in an appropriate channel

2. **Channel Conflicts**
   - Channels may already be assigned to another game
   - Use `sage! channel list` to check assignments
   - Remove channels from other games first

3. **Naming Issues**
   - Game names must be unique on the server
   - Avoid special characters in game names
   - Use quotes for multi-word names

### Game Not Found

**"No Game found for this channel"**
- Check if current channel is assigned to a game
- Use `sage! game list` to see available games
- Ensure you're in a game-configured channel

### Permission Fixes

**"RPG Sage is missing permissions for X channel(s)"**
```
sage! game fixperms
```
This command attempts to automatically fix bot permissions for game channels.

**Manual Permission Fix**
1. Go to channel settings
2. Add RPG Sage to the channel permissions
3. Grant necessary permissions (Send Messages, Embed Links, etc.)

## Dice Rolling Issues

### Dice Not Working

**"Invalid dice expression"**
- Check dice syntax: `1d20+5` not `d20+5`
- Use standard operators: `+`, `-`, `*`, `/`
- Avoid spaces in dice expressions

**Secret Dice Problems**
```
# These should work
sage! roll secret 1d20+5
sage! roll 1d20+5 secret
```

**Macro Dice Issues**
- Verify macro exists: `sage! macro list`
- Check macro syntax and scope
- Ensure you have permission to use the macro

### Dice Display Problems

**Results Not Showing**
- Check if channel allows dice rolling
- Verify bot has Embed Links permission
- Try different dice post types in settings

## Search System Issues

### Archives of Nethys Problems

**"No results found"**
- Check spelling of search terms
- Try broader search terms
- Use alternative names for items

**Search Syntax Issues**
```
# Correct syntax examples
sage! search fireball
sage! search "magic missile"
sage! search spell:fireball
sage! search equipment rarity:common
```

### Filter Problems

**Invalid Filter Types**
- Use correct filter syntax: `type:spell`
- Valid types: spell, equipment, creature, feat, etc.
- Check for typos in filter names

## Map and Token Issues

### Map Not Loading

**"Unable to create map"**
- Check image URL is valid and accessible
- Ensure image format is supported (PNG, JPG, GIF)
- Verify bot has Attach Files permission

### Token Management Problems

**Tokens Not Appearing**
- Refresh map display: `sage! map show`
- Check token URLs are valid
- Verify token names don't contain special characters

**Movement Issues**
- Use correct coordinate format: `sage! move A5`
- Ensure you have permission to move tokens
- Check if token belongs to your character

## Administrative Issues

### Admin Commands Not Working

**"Sorry, you aren't allowed to admin users of that tier"**
- You can only manage admins of lower tiers
- SageAdmin can manage all tiers
- ServerAdmin can manage GameAdmin
- Contact a higher-tier admin for assistance

### Server Configuration Problems

**Settings Not Saving**
- Verify you have appropriate admin permissions
- Check for Discord API issues (try again later)
- Ensure bot has necessary server permissions

## Performance Issues

### Slow Response Times

**Bot Responding Slowly**
- Discord API may be experiencing issues
- Large servers may have slower response times
- Complex commands (weather generation, large imports) take longer

**Memory or Processing Issues**
- Large character imports may timeout
- Break large operations into smaller chunks
- Try commands during off-peak hours

### Message Limits

**"Message too long" errors**
- Character sheets may exceed Discord's message limit
- Use character sections: `sage! character show sections="Stats,Skills"`
- Export large data to files instead

## Data and Import Issues

### File Upload Problems

**File Too Large**
- Discord has an 8MB file limit
- Compress or reduce file size
- Split large exports into multiple files

**Unsupported File Format**
- Use supported formats: JSON, PDF
- Check file isn't corrupted
- Try exporting in different format

### Export Issues

**Export Not Working**
- Verify you have characters to export
- Check bot has Attach Files permission
- Try exporting individual characters

## Getting Additional Help

### Using Help Commands

**General Help**
```
sage! help
```

**Command-Specific Help**
```
sage! command help
sage! dice help
sage! character help
```

**Wiki References**
Most error messages include wiki page references for detailed guidance.

### Diagnostic Commands

**Check Bot Status**
```
sage! ping
sage! server details
sage! channel details
```

**Verify Permissions**
```
sage! admin list
sage! game details
sage! user settings
```

### Error Reporting

When reporting bugs or issues:
1. Include the exact command that failed
2. Copy any error messages completely
3. Note your permission level (admin type)
4. Describe expected vs. actual behavior
5. Include server and channel context

### Community Resources

**Documentation**
- Check the full documentation for detailed guides
- Review command examples and syntax
- Look for similar issues in troubleshooting

**Discord Support**
- Ask questions in bot support channels
- Share successful configurations with others
- Report bugs through appropriate channels

## Prevention Tips

### Regular Maintenance

1. **Check Permissions Regularly**
   - Verify bot permissions after Discord updates
   - Test admin commands periodically
   - Monitor for permission errors

2. **Keep Configuration Updated**
   - Document custom settings
   - Review admin assignments
   - Clean up unused games and channels

3. **User Education**
   - Train users on proper command syntax
   - Share common troubleshooting steps
   - Provide command examples and guides

### Best Practices

1. **Start Simple**
   - Test basic functionality before advanced features
   - Configure one game at a time
   - Verify each step before proceeding

2. **Regular Backups**
   - Export character data regularly
   - Document server configurations
   - Save macro definitions

3. **Monitor Usage**
   - Watch for error patterns
   - Address permission issues quickly
   - Keep track of frequently used features

This troubleshooting guide covers the most common issues with RPG Sage. For problems not covered here, use the bot's help system and consult the detailed documentation for specific features.

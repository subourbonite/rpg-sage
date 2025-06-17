# Admin Commands

RPG Sage provides comprehensive admin commands for managing servers, games, channels, and permissions. The bot uses a three-tier permission system to control access to various administrative functions.

## Permission System

### Admin Role Hierarchy

RPG Sage uses three admin role types with different levels of access:

1. **SageAdmin** - Full access to all Sage features
   - Can manage all server settings and games
   - Can create and manage other admins
   - Can access bot-level configurations

2. **ServerAdmin** - Server-level administration
   - Can manage server settings and channels
   - Can create and manage games
   - Can manage GameAdmin users

3. **GameAdmin** - Game-level administration
   - Can manage specific games and their channels
   - Limited to game-related commands

### Permission Requirements

Most admin commands check permissions before execution:
- Server owners automatically have SageAdmin privileges
- Users with "Manage Server" Discord permission can become SageAdmin
- Admin roles can be assigned to Discord roles or individual users

## Server Administration

### Admin Management

**List Admins**
```
sage! admin list [filter="username"]
```
- Lists all server admins with their roles
- Optional filter by username
- Shows Discord user information and admin types

**Add Admin**
```
sage! admin add @UserMention type="RoleType"
```
- Adds a user as an admin
- Role types: `SageAdmin`, `ServerAdmin`, `GameAdmin`
- Requires appropriate permissions for the target role type

**Update Admin Role**
```
sage! admin update @UserMention type="NewRoleType"
```
- Changes an existing admin's role type
- Can promote or demote users based on permissions

**Remove Admin**
```
sage! admin remove @UserMention
```
- Removes admin status from a user
- Must have permission to manage that admin level

### Role Management

**List Server Roles**
```
sage! server role list
```
- Shows Discord roles assigned to admin functions
- Displays role names and their admin types

**Set Server Role**
```
sage! server role set role=@RoleMention type="RoleType"
```
- Assigns a Discord role to an admin function
- Automatically grants admin privileges to role members

**Remove Server Role**
```
sage! server role remove type="RoleType"
```
- Removes Discord role assignment from admin function

### Server Configuration

**Server Details**
```
sage! server details [server="ServerId"]
```
- Shows comprehensive server information
- Displays default settings, channels, and admin roles
- Super users can view other servers

**Update Server Settings**
```
sage! server update [options]
```
- Updates server-wide default settings
- Includes dice preferences, color schemes, emoji sets
- Affects default behavior for new games

**Command Prefix Management**
```
sage! prefix set prefix="new!"
sage! prefix get
sage! prefix sync
sage! prefix unset
```
- Manages custom command prefixes for the server
- Sync matches the bot's global prefix
- Unset removes custom prefix

## Channel Administration

### Channel Management

**Channel Details**
```
sage! channel details [channel=#channel]
```
- Shows channel configuration and permissions
- Displays game association and channel type
- Shows dialog and dice settings

**List Channels**
```
sage! channel list [server|game]
```
- Lists configured channels for server or game
- Shows channel names and IDs
- Filters by scope (server-wide or game-specific)

**Configure Channel**
```
sage! channel set type="ChannelType" [options]
```
- Sets channel type and permissions
- Channel types: `InCharacter`, `OutOfCharacter`, `GameMaster`, `Dice`, `Miscellaneous`, `None`
- Configures dialog and command permissions

### Channel Types

- **InCharacter** - For roleplay and character actions
- **OutOfCharacter** - General discussion about the game
- **GameMaster** - Private GM channels with enhanced permissions
- **Dice** - Dedicated dice rolling channels
- **Miscellaneous** - General purpose with basic permissions
- **None** - Removes special channel configuration

## Game Administration

### Game Management Commands

**Create Game**
```
sage! game create name="Game Name" [options]
```
- Creates a new game with specified settings
- Automatically provisions channels if provided
- Sets up default game configuration

**Update Game**
```
sage! game update [options]
```
- Updates existing game settings
- Can add/remove channels and users
- Modifies game-specific configurations

**Game Details**
```
sage! game details
```
- Shows comprehensive game information
- Lists channels, players, and settings
- Displays game-specific configurations

### Game Roles

**List Game Roles**
```
sage! game role list
```
- Shows Discord roles assigned to game functions
- Displays GameMaster and Player role assignments

**Set Game Role**
```
sage! game role set role=@RoleMention type="RoleType"
```
- Assigns Discord roles to game functions
- Role types: `GameMaster`, `Player`

**Remove Game Role**
```
sage! game role remove type="RoleType"
```
- Removes Discord role from game function

### Game Utilities

**Fix Permissions**
```
sage! game fixperms
```
- Automatically fixes bot permissions for game channels
- Ensures proper access for Sage functionality
- Prompts before making changes

**Block Bots**
```
sage! game blockbots
```
- Blocks common bots (Tupperbox, Rollem) from game channels
- Prevents interference with Sage's functionality
- Requires confirmation before blocking

## User Management

### User Settings

**Update User Preferences**
```
sage! user update [options]
```
- Updates personal user settings
- Controls dialog behavior and post types
- Manages organized play IDs

Available user options:
- `dialogPostType` - How dialog appears (embed/post)
- `sagePostType` - Bot response format
- `dmOnDelete` - DM when messages are deleted
- `dmOnEdit` - DM when messages are edited
- `orgPlayId` - Organized play identifier

## Macro Administration

### Macro Management

**List Macros**
```
sage! macro list [user|server|game] [filter="name"]
```
- Lists macros by scope and optional filter
- Shows macro names, creators, and usage counts
- Supports pagination for large lists

**Create/Update Macro**
```
sage! macro set name="MacroName" dice="1d20+5" [description="text"]
```
- Creates or updates a macro
- Supports dice expressions and text macros
- Can be scoped to user, server, or game

**Delete Macro**
```
sage! macro delete name="MacroName"
```
- Removes a macro from the specified scope
- Requires appropriate permissions

### Macro Scopes

- **User** - Personal macros, only usable by creator
- **Server** - Server-wide macros, usable by all members
- **Game** - Game-specific macros, usable in game channels

## Color and Emoji Management

### Color Administration

**Set Colors**
```
sage! color set type="ColorType" color="#hexcode"
```
- Sets custom colors for various bot elements
- Color types: dice, dialog, success, failure, etc.
- Supports hex color codes

**List Colors**
```
sage! color list
```
- Shows all configured custom colors
- Displays color codes and visual previews

**Unset Colors**
```
sage! color unset type="ColorType"
```
- Removes custom color, reverting to default

### Emoji Management

**Set Emoji**
```
sage! emoji set type="EmojiType" emoji=":custom_emoji:"
```
- Sets custom emoji for bot reactions
- Supports custom server emoji and Unicode

**List Emoji**
```
sage! emoji list
```
- Shows all configured custom emoji
- Displays emoji types and current assignments

## Bot Management

### Bot Administration

**Bot Details**
```
sage! bot details
```
- Shows bot information and statistics
- Available only to super users
- Displays system information and status

**Shutdown Bot**
```
shutdown
```
- Emergency shutdown command
- Requires super admin privileges
- Logs the user who initiated shutdown

## Permission Testing

### Channel Permissions

RPG Sage automatically checks permissions before executing commands:

- **testChannelAdmin()** - Verifies channel management permissions
- **testServerAdmin()** - Confirms server administration access
- **testGameAdmin()** - Validates game management permissions
- **canAdminServer** - Boolean check for server admin capability
- **canAdminGame** - Boolean check for game admin capability

### Access Control

Commands automatically deny access with appropriate error messages:
- Permission denied reactions (🚫)
- Helpful error messages explaining requirements
- Suggestions for proper command usage

## Best Practices

### Admin Setup

1. **Assign Roles**: Use Discord roles for admin functions rather than individual users
2. **Scope Appropriately**: Give minimum necessary permissions for each role
3. **Document Changes**: Keep track of admin assignments and role changes
4. **Regular Audits**: Periodically review admin assignments

### Channel Organization

1. **Clear Naming**: Use descriptive channel names
2. **Proper Types**: Assign appropriate channel types for functionality
3. **Game Isolation**: Keep game channels separate from server channels
4. **Permission Reviews**: Regularly check channel permissions

### Security Considerations

1. **Limited SageAdmin**: Minimize number of SageAdmin users
2. **Role Verification**: Ensure Discord roles have appropriate permissions
3. **Regular Cleanup**: Remove inactive admins and unused roles
4. **Change Logging**: Monitor admin command usage

## Troubleshooting

### Common Issues

**Permission Denied**
- Verify user has appropriate admin role
- Check Discord role assignments
- Confirm channel-specific permissions

**Commands Not Working**
- Ensure bot has necessary Discord permissions
- Verify channel is properly configured
- Check for role hierarchy conflicts

**Missing Features**
- Confirm command is available in current context
- Verify game/server setup is complete
- Check for required permissions

### Getting Help

Use the help system for detailed command information:
```
sage! command help
```

For specific command examples and usage details, the bot provides context-sensitive help and error messages.

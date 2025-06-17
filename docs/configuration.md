# Configuration Guide

This guide covers how to set up and configure RPG Sage for your Discord server, including initial setup, permissions, and customization options.

## Initial Setup

### Adding RPG Sage to Your Server

1. **Invite the Bot**
   - Use the official invite link provided by the bot developer
   - Select your Discord server from the dropdown
   - Grant the necessary permissions when prompted

2. **Required Permissions**
   RPG Sage needs these Discord permissions to function properly:
   - **Send Messages**: Basic bot communication
   - **Embed Links**: Rich message formatting
   - **Attach Files**: Character sheets and exports
   - **Add Reactions**: Command feedback and dice results
   - **Manage Messages**: Message cleanup and organization
   - **Manage Channels**: Permission fixes and channel setup
   - **Manage Webhooks**: Enhanced message posting
   - **View Channel History**: Context for commands
   - **Use External Emojis**: Custom dice and reaction emojis

3. **Initial Bot Test**
   ```
   sage! help
   ```
   This confirms the bot is working and shows available commands.

## Basic Configuration

### Setting Up Admin Roles

1. **Automatic Admin Detection**
   - Server owners automatically have SageAdmin privileges
   - Users with "Manage Server" permission can become SageAdmin

2. **Manual Admin Assignment**
   ```
   sage! admin add @UserMention type="SageAdmin"
   sage! admin add @UserMention type="ServerAdmin"
   sage! admin add @UserMention type="GameAdmin"
   ```

3. **Role-Based Administration**
   ```
   sage! server role set role=@AdminRole type="SageAdmin"
   ```
   Automatically grants admin privileges to role members.

### Command Prefix Configuration

**Set Custom Prefix**
```
sage! prefix set prefix="!"
```
Changes the bot's command prefix for your server.

**View Current Prefix**
```
sage! prefix get
```
Shows the current command prefix setting.

**Reset to Default**
```
sage! prefix unset
```
Removes custom prefix, reverting to bot default.

## Server Customization

### Color Scheme Configuration

**Set Custom Colors**
```
sage! color set type="dice" color="#ff6600"
sage! color set type="success" color="#00ff00"
sage! color set type="failure" color="#ff0000"
```

**Available Color Types**
- `dice` - Dice roll results
- `dialog` - Character dialog
- `success` - Success messages and reactions
- `failure` - Failure messages and reactions
- `warning` - Warning messages
- `info` - Informational messages

**View Current Colors**
```
sage! color list
```

**Reset Colors**
```
sage! color unset type="dice"
```

### Custom Emoji Configuration

**Set Custom Emoji**
```
sage! emoji set type="success" emoji="✅"
sage! emoji set type="failure" emoji="❌"
sage! emoji set type="dice" emoji=":d20:"
```

**Available Emoji Types**
- `success` - Success reactions
- `failure` - Failure reactions
- `dice` - Dice-related reactions
- `warning` - Warning indicators
- `info` - Information indicators

**View Current Emoji**
```
sage! emoji list
```

**Reset Emoji**
```
sage! emoji unset type="success"
```

## Channel Configuration

### Channel Types and Purposes

**In-Character Channels**
```
sage! channel set type="InCharacter"
```
- Enables character dialog and roleplay
- Supports auto-dialog features
- Enhanced character interaction tools

**Out-of-Character Channels**
```
sage! channel set type="OutOfCharacter"
```
- General game discussion
- Planning and coordination
- Non-roleplay communication

**Game Master Channels**
```
sage! channel set type="GameMaster"
```
- Private GM channels
- Enhanced admin permissions
- NPC and secret information

**Dice Channels**
```
sage! channel set type="Dice"
```
- Dedicated dice rolling
- Combat and skill checks
- Statistical tracking

**Miscellaneous Channels**
```
sage! channel set type="Miscellaneous"
```
- General purpose channels
- Basic bot functionality
- Limited special features

### Channel Permission Settings

**Dialog Permissions**
```
sage! channel set allowDialog=true
```
Enables character dialog features in the channel.

**Command Permissions**
```
sage! channel set allowCommands=true
```
Allows general bot commands in the channel.

**Dice Permissions**
```
sage! channel set allowDice=true
```
Enables dice rolling in the channel.

### Channel Management

**View Channel Details**
```
sage! channel details [#channel]
```
Shows current channel configuration and permissions.

**List Configured Channels**
```
sage! channel list server
sage! channel list game
```
Lists channels configured at server or game level.

## Game Configuration

### Creating Games

**Basic Game Creation**
```
sage! game create name="Campaign Name"
```

**Advanced Game Creation**
```
sage! game create name="Campaign Name"
    channels=#ic-channel,#ooc-channel,#gm-channel
    users=@Player1,@Player2,@GM
    system="PF2E"
```

### Game Settings

**Game Details**
```
sage! game details
```
Shows comprehensive game information including channels, players, and settings.

**Update Game**
```
sage! game update name="New Campaign Name"
    channels=#new-channel
    users=@NewPlayer
```

### Game Roles

**Set Game Roles**
```
sage! game role set role=@GameMaster type="GameMaster"
sage! game role set role=@Players type="Player"
```

**List Game Roles**
```
sage! game role list
```

## User Settings

### Personal Preferences

**Dialog Settings**
```
sage! user update dialogPostType="embed"
sage! user update sagePostType="post"
```

**Notification Settings**
```
sage! user update dmOnDelete=true
sage! user update dmOnEdit=true
```

**Organized Play Integration**
```
sage! user update orgPlayId="123456"
```

### Available User Options

- **dialogPostType**: `embed`, `post`, or `unset`
- **sagePostType**: `embed`, `post`, or `unset`
- **dmOnDelete**: Receive DMs when your messages are deleted
- **dmOnEdit**: Receive DMs when your messages are edited
- **orgPlayId**: Your organized play ID number
- **moveDirectionOutputType**: How movement commands display

## Advanced Configuration

### Server Defaults

**Set Server-Wide Defaults**
```
sage! server update
    dicePostType="embed"
    diceSecretMethod="DM"
    diceCritMethodPF2e="Double"
```

**Available Server Options**
- **dicePostType**: How dice results appear
- **diceSecretMethod**: How secret dice are handled
- **diceCritMethod**: Critical hit calculation method
- **dialogPostType**: Default dialog appearance
- **sagePostType**: Default bot response format

### Macro Configuration

**Server Macros**
```
sage! macro set name="Initiative" dice="1d20+{ini}" scope="server"
```

**Game Macros**
```
sage! macro set name="Perception" dice="1d20+{per}" scope="game"
```

**User Macros**
```
sage! macro set name="Attack" dice="1d20+{atk}" scope="user"
```

## Permission Management

### Permission Hierarchy

1. **SageAdmin**
   - Full bot configuration access
   - Can manage all server settings
   - Can create and manage other admins

2. **ServerAdmin**
   - Server configuration access
   - Can manage games and channels
   - Can manage GameAdmin users

3. **GameAdmin**
   - Game-specific configuration
   - Character and session management
   - Limited to assigned games

### Testing Permissions

**Check Channel Permissions**
```
sage! channel details
```
Shows your permission level for the current channel.

**Test Admin Access**
Try admin commands to verify your permission level.

## Troubleshooting Configuration

### Common Issues

**Bot Not Responding**
- Check bot permissions in channel settings
- Verify bot has "Send Messages" permission
- Ensure bot role is above configured roles

**Commands Not Working**
- Verify command prefix with `sage! prefix get`
- Check channel type and permissions
- Confirm you have necessary admin level

**Permission Errors**
- Review admin role assignments
- Check Discord role hierarchy
- Verify bot has "Manage Channels" permission

### Configuration Validation

**Test Basic Functionality**
```
sage! help
sage! roll 1d20
sage! ping
```

**Test Admin Functions**
```
sage! admin list
sage! channel list
sage! server details
```

**Test Game Features**
```
sage! game details
sage! character list
sage! macro list
```

## Migration and Backup

### Exporting Configuration

**Export Character Data**
```
sage! character export
```

**Export Macro Data**
```
sage! macro list
```

### Server Migration

When moving to a new server:
1. Export all character and macro data
2. Document custom settings (colors, emoji, prefixes)
3. Record admin role assignments
4. Save game configurations
5. Rebuild configuration on new server

## Best Practices

### Security

1. **Limit SageAdmin Roles**
   - Only assign to trusted server administrators
   - Use ServerAdmin for most administrative tasks

2. **Role Hierarchy**
   - Ensure bot role is positioned correctly
   - Test permission inheritance

3. **Channel Security**
   - Use appropriate channel types
   - Set up GM channels for sensitive information

### Organization

1. **Consistent Naming**
   - Use clear channel names
   - Organize games logically

2. **Documentation**
   - Document custom settings
   - Train users on bot features

3. **Regular Maintenance**
   - Review admin assignments periodically
   - Clean up unused channels and games
   - Update configurations as needed

This configuration guide provides the foundation for setting up RPG Sage effectively in your Discord server. Start with basic setup and gradually add advanced features as your community grows and your needs evolve.

# Encounter and Party Tracking

RPG Sage includes encounter and party tracking systems for managing combat encounters and organizing player groups. These features help GMs organize combat scenarios and track party compositions.

> **Note**: The encounter and party tracking features may be temporarily disabled in the current version. Check with your server admin or the bot status for availability.

## Party Management

Parties allow you to group characters together for easy tracking and management.

### Party Commands

**List Parties**
```
sage! party list
```
- Shows all parties in the current game
- Displays party members and associated users
- Only available within a game

**Create Party**
```
sage! party create name="Party Name"
```
- Creates a new party with the specified name
- Requires GameAdmin permissions
- Can include initial characters:
  - `pc="Character Name"` - Add a player character
  - `npc="NPC Name"` - Add an NPC
  - `npc="NPC Name" count="2"` - Add multiple copies
  - `npc="NPC Name" as="Nickname"` - Add with nickname

**Add Characters to Party**
```
sage! party add name="Party Name" pc="Character Name"
sage! party add name="Party Name" npc="NPC Name" count="3"
```
- Adds characters to an existing party
- Supports both PCs and NPCs with nicknames

**Remove Characters from Party**
```
sage! party remove name="Party Name" pc="Character Name"
sage! party remove name="Party Name" npc="NPC Name"
```
- Removes characters from a party
- Use character name or nickname for NPCs

**Delete Party**
```
sage! party delete name="Party Name"
```
- Completely removes a party
- Unpins any party status posts

**Party Status**
```
sage! party status name="Party Name"
sage! party status pin name="Party Name"
sage! party status unpin name="Party Name"
```
- Shows party composition and member details
- `pin` - Pins the status message to track changes
- `unpin` - Removes pinned status messages

### Party Features

- **Automatic User Tracking**: Shows which Discord users control each character
- **Flexible Character Types**: Supports PCs, NPCs, companions, and minions
- **Status Pinning**: Pin party status for real-time updates
- **Loot Tracking**: Basic party loot management (if enabled)

## Encounter Management

Encounters help track combat scenarios with initiative order and character states.

### Encounter Commands

**List Encounters**
```
sage! encounter list
```
- Shows all encounters in the current game
- Displays encounter participants
- Only available to GameAdmins

**Create Encounter**
```
sage! encounter create name="Boss Fight"
```
- Creates a new encounter
- Can include initial participants:
  - `pc="Character Name"` - Add player character
  - `npc="Enemy Name"` - Add NPC enemy
  - `party="Party Name"` - Add entire party
  - Characters can have nicknames with `as="Nickname"`

**Add to Encounter**
```
sage! encounter add name="Boss Fight" pc="Character Name"
sage! encounter add name="Boss Fight" party="Adventure Party"
```
- Adds characters or parties to existing encounter
- Supports the same character syntax as creation

**Remove from Encounter**
```
sage! encounter remove name="Boss Fight" pc="Character Name"
sage! encounter remove name="Boss Fight" npc="Enemy"
```
- Removes participants from encounter
- Use character name or assigned nickname

**Delete Encounter**
```
sage! encounter delete name="Boss Fight"
```
- Completely removes an encounter
- Unpins any status posts

### Initiative Tracking

**Encounter Status**
```
sage! encounter status name="Boss Fight"
sage! encounter status pin name="Boss Fight"
sage! encounter status unpin name="Boss Fight"
```
- Shows initiative order and current status
- `pin` - Creates persistent status display with controls
- `unpin` - Removes pinned status displays

**Starting/Stopping Combat**
- Use the ▶️ **Start** button on pinned encounter status
- Use the ⏹️ **Stop** button to end initiative tracking
- Starting combat activates initiative order
- Stopping preserves character states but deactivates tracking

### Initiative Features

- **Automatic Sorting**: Characters sorted by initiative value
- **Round Tracking**: Displays current round number
- **Character States**: Track HP, conditions, and actions
- **Template Customization**: Configurable display templates
- **Real-time Updates**: Pinned displays update automatically

### Initiative Display

The encounter status shows:
- **Header**: Encounter name and round number
- **Character Lines**: Initiative, activity icons, name, HP/max HP, conditions
- **Actions**: Summary of character actions taken

Example display:
```
## Boss Fight - Round 3
25 ⚡ Rogue 45/45: *no conditions*
- Sneak attack with shortsword
20 🛡️ Fighter 38/52: Shaken
- Full attack with longsword
15 ❓ Goblin Chief 12/30: Wounded
- *no actions*
```

### Character State Management

For each encounter participant:
- **Initiative Value**: Numerical initiative order
- **Activity Status**: Visual indicators for actions taken
- **Hit Points**: Current/maximum health tracking
- **Conditions**: Status effects and modifiers
- **Actions**: Summary of actions taken this round

## Administrative Notes

### Permission Requirements

- **Party Commands**: Require GameAdmin permissions
- **Encounter Commands**: Require GameAdmin permissions
- **Status Viewing**: Available to players with characters in the encounter
- **Control Buttons**: Only usable by the user who created the status

### Integration with Characters

- Works with any character management system (PC, NPC, Companion)
- Automatically links to character sheets when available
- Supports character nicknames for multiple instances
- Integrates with macro systems for quick actions

### Best Practices

1. **Use Descriptive Names**: Clear encounter and party names help organization
2. **Pin Status Posts**: Keep important status displays pinned for easy access
3. **Update Regularly**: Keep character states current during encounters
4. **Clean Up**: Delete completed encounters to avoid clutter
5. **Organize Parties**: Use parties to group characters logically

## Troubleshooting

**Commands Not Working**
- Verify you're in a game channel (parties/encounters require games)
- Check your GameAdmin permissions
- Ensure the encounter/party tracking features are enabled

**Missing Characters**
- Characters must exist in the game before adding to parties/encounters
- Use exact character names or assigned nicknames
- Check character spelling and case sensitivity

**Status Not Updating**
- Pinned status may need manual refresh
- Check bot permissions for message editing
- Verify encounter is still active

**Initiative Issues**
- Set initiative values using character sheet macros
- Manual initiative can be set through admin commands
- Characters without initiative show as "?" in display

## Related Documentation

- [Character Management](./character-management.md) - Managing PCs and NPCs
- [Game Management](./game-management.md) - Setting up games and permissions
- [Admin Commands](./admin-commands.md) - Administrative permissions and roles
- [Macros](./macros.md) - Setting up quick actions for encounters

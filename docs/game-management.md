# Game Management

RPG Sage provides comprehensive game management tools for organizing campaigns, managing players and GMs, configuring channels, and administering game settings.

## Table of Contents
- [Creating Games](#creating-games)
- [Game Configuration](#game-configuration)
- [User Management](#user-management)
- [Channel Management](#channel-management)
- [Game Settings](#game-settings)
- [Game Administration](#game-administration)
- [Game Lifecycle](#game-lifecycle)
- [Permissions and Roles](#permissions-and-roles)

## Creating Games

### Basic Game Creation
```
sage!game create name="Lost Mines" system=PF2E
/sage-game create name:"Lost Mines" system:"PF2E"
```

### Create with Full Configuration
```
sage!game create name="Curse of Strahd" system=DND5E ic-channel=#roleplay ooc-channel=#general gm-channel=#gm-secrets players=@Player1,@Player2 gms=@GM1
```

### Supported Game Systems
- `PF1E` - Pathfinder 1st Edition
- `PF2E` - Pathfinder 2nd Edition
- `SF1E` - Starfinder 1st Edition
- `SF2E` - Starfinder 2nd Edition
- `DND5E` - D&D 5th Edition
- `E20` - Essence20 System

### Game Creation Process
1. **Validation** - Checks for unique name and available channels
2. **Channel Setup** - Configures designated game channels
3. **User Assignment** - Adds GMs and players to the game
4. **Permission Configuration** - Sets up channel permissions
5. **Bot Management** - Optionally blocks conflicting bots

## Game Configuration

### Basic Game Options
```
sage!game update name="New Campaign Name"
sage!game update system=SF2E
sage!game update gmCharName="Storyteller"
```

### Dialog and Posting Options
```
sage!game update dialogPost=Embed        # Character posts as embeds
sage!game update dialogPost=Post         # Character posts as messages
```

### Dice Configuration
```
sage!game update diceCrit=RollTwice      # Roll twice for crits
sage!game update diceCrit=TimesTwo       # Double dice result
sage!game update diceCrit=AddMax         # Add max die value
sage!game update diceOutput=XXL          # Extra large dice output
sage!game update dicePost=SingleEmbed    # Single embed for dice
sage!game update diceSecret=Hide         # Hide secret rolls
sage!game update diceSecret=GameMasterChannel  # Send to GM channel
```

### Advanced Options
```
sage!game update diceSort=None           # No dice sorting
sage!game update diceSort=Ascending      # Sort dice ascending
sage!game update diceSort=Descending     # Sort dice descending
```

## User Management

### Adding Users
```
# Add Game Masters
sage!game update gms=@NewGM,@AnotherGM

# Add Players
sage!game update players=@Player1,@Player2,@Player3

# Mixed user types
sage!game update gms=@GM players=@Player1,@Player2
```

### Removing Users
```
sage!game update remove=@FormerPlayer,@FormerGM
```

### User Roles and Permissions
- **Game Masters**: Full game administration, NPC management, secret channel access
- **Players**: Character management, standard game participation
- **Observers**: Read-only access (if configured)

### Role-Based Features
- GMs can create and manage NPCs
- GMs have access to GM-only channels
- GMs can manage game settings and user permissions
- Players can create and manage their own PCs
- Role-based dice roll visibility controls

## Channel Management

### Channel Types
- **In Character (IC)**: Roleplay and character interactions
- **Out of Character (OOC)**: General discussion and planning
- **Game Master (GM)**: Private GM communication and secret information
- **Dice**: Dedicated dice rolling channel
- **Miscellaneous**: Additional utility channels

### Setting Up Channels
```
# Configure channel types
sage!game update ic-channel=#roleplay
sage!game update ooc-channel=#general
sage!game update gm-channel=#gm-secrets
sage!game update misc-channel=#maps

# Multiple channels of same type
sage!game update ic-channel=#tavern,#dungeon,#wilderness
```

### Removing Channels
```
sage!game update remove=#old-channel,#unused-channel
```

### Channel Permissions
RPG Sage automatically configures channel permissions:
- **IC Channels**: All game participants can read/write
- **OOC Channels**: All game participants can read/write
- **GM Channels**: Only GMs can read/write
- **Dice Channels**: Configured based on dice settings
- **Bot Management**: Blocks conflicting bots if requested

## Game Settings

### Game System Features
Each game system provides specific features:

#### Pathfinder 2E (PF2E)
- Degrees of success on skill checks
- Conditions and effects tracking
- Action economy support
- Spell slot management
- Character sheet integration

#### D&D 5E (DND5E)
- Advantage/disadvantage mechanics
- Spell slot tracking
- Death saves
- Inspiration system
- Character sheet compatibility

#### Starfinder (SF1E/SF2E)
- Stamina and Hit Points
- Technology integration
- Starship combat support
- Equipment management

### Dice Configuration Options

#### Critical Hit Methods
- `Unknown` - No special critical handling
- `RollTwice` - Roll damage dice twice
- `TimesTwo` - Double the dice result
- `AddMax` - Add maximum die value to roll

#### Output Types
- `S` - Small output format
- `M` - Medium output format
- `L` - Large output format
- `XL` - Extra large output format
- `XXL` - Maximum detail output

#### Secret Roll Handling
- `Ignore` - Process secret rolls normally
- `Hide` - Hide secret roll results
- `GameMasterChannel` - Send to GM channel
- `GameMasterDirect` - Send to GM via DM

### Character and Dialog Settings
```
sage!game update gmCharName="The Narrator"     # Set GM character name
sage!game update dialogPost=Embed              # Use embeds for character dialog
```

## Game Administration

### Viewing Game Details
```
sage!game details                    # Full game information
sage!game details id=123456789       # Details for specific game
```

Game details include:
- Basic game information (name, system, creation date)
- Channel configuration and permissions
- User lists (GMs and players) with character counts
- Game settings and options
- Character statistics
- Orphaned resources detection

### Maintenance Operations

#### Pruning Orphaned Resources
```
sage!game prune                      # Remove users who left server
                                      # Remove deleted channels
```

#### Permission Management
```
sage!game fix-perms                  # Fix channel permissions
sage!game block-bots                 # Block conflicting bots
```

#### Game Updates
```
# Update multiple settings at once
sage!game update name="New Name" system=PF1E gms=@NewGM remove=@OldGM
```

### Role Management
```
# Set Discord roles for game functions
sage!game role set role=@GMRole type=GameMaster
sage!game role set role=@PlayerRole type=Player

# List current role assignments
sage!game role list

# Remove role assignments
sage!game role remove role=@OldRole
```

## Game Lifecycle

### Active vs Archived Games
- **Active Games**: Full functionality, character management, dice rolling
- **Archived Games**: Read-only, preserved data, no new activity

### Archiving Games
```
sage!game archive                    # Archive current game
sage!game archive id=123456789       # Archive specific game
```

### Archive Benefits
- Preserves all game data and character information
- Frees up channels for new games
- Maintains historical record
- Allows data export and backup

### Game Data Management
- Character sheets and progression
- Dice roll history
- Game session logs
- Maps and tokens
- Campaign notes and resources

## Permissions and Roles

### Permission Hierarchy
1. **Server Administrators**: Full access to all games and settings
2. **Game Administrators**: Can create/manage games and users
3. **Game Masters**: Full access to their games, character management
4. **Players**: Character management, standard game participation

### Channel Access Control
- Automatic permission setup during game creation
- Role-based channel visibility
- GM-only secret channels
- Configurable dice roll visibility

### User Management Permissions
- GMs can add/remove players from their games
- Server admins can manage all games
- Players can only manage their own characters
- Permission inheritance for companions and minions

### Security Features
- Channel isolation between games
- Role-based command access
- Audit trail for major changes
- Orphaned resource cleanup

## Advanced Features

### Multi-Game Support
- Multiple active games per server
- Isolated game environments
- Independent channel configurations
- Separate character rosters

### Integration Features
- Character sheet imports (Pathbuilder, PDF)
- External tool integration
- Map and token management
- Weather and calendar systems

### Automation
- Automatic permission management
- Bot conflict resolution
- Resource cleanup and maintenance
- User onboarding workflows

### Customization Options
- Game-specific command prefixes
- Custom dice output formats
- Flexible channel configurations
- Role-based feature access

---

*For character management within games, see [Character Management](character-management.md). For dice rolling configuration, see [Dice Rolling Guide](dice-rolling.md).*

# Character Management

RPG Sage provides comprehensive character management capabilities, supporting multiple game systems and character types with import/export functionality.

## Table of Contents
- [Character Types](#character-types)
- [Creating Characters](#creating-characters)
- [Importing Characters](#importing-characters)
- [Character Statistics](#character-statistics)
- [Character Images and Appearance](#character-images-and-appearance)
- [Managing Character Data](#managing-character-data)
- [Character Display and Output](#character-display-and-output)
- [Character Relationships](#character-relationships)
- [Auto-Posting](#auto-posting)
- [Export and Backup](#export-and-backup)

## Character Types

RPG Sage supports several character types:

### Player Characters (PCs)
- Primary characters controlled by players
- Can have companions and minions
- Support all game system features

### Non-Player Characters (NPCs)
- Characters controlled by Game Masters
- Can have companions and minions
- Only exist within games
- GM-only visibility for stats in non-GM channels

### Companions
- Secondary characters associated with PCs or NPCs
- Animal companions, familiars, cohorts, etc.
- Inherit some properties from parent character

### Minions
- Temporary or summoned characters
- Associated with parent characters
- Often used for combat encounters

### GM Character
- Special character representing the Game Master
- Used for GM posts and announcements
- One per game

## Creating Characters

### Basic Character Creation
```
sage!pc create "Seelah" Human Paladin
sage!npc create "Guard Captain"
sage!companion create charName="Seelah" "Horse"
```

### Create with Additional Properties
```
sage!pc create name="Lem" alias="@lem" color="#4A90E2" avatar="https://example.com/lem.png"
```

### Supported Properties
- `name` - Character name (required)
- `alias` - Short alias for quick reference
- `color` - Embed color (hex format)
- `avatar` - Avatar image URL
- `token` - Token image URL
- `user` - Associated Discord user

### Character Creation Examples
```
# Basic PC
sage!pc create "Ezren the Wise"

# NPC with properties
sage!npc create name="Tavern Keeper" alias="@barkeep" color="#8B4513"

# Companion for existing character
sage!companion create charName="Ezren" "Familiar"

# Character with user assignment
sage!pc create name="Valeros" user="@PlayerName"
```

## Importing Characters

### Pathbuilder 2E Import
```
/import pathbuilder-2e id:12345
sage!pc import id="12345"
```

### Starfinder 2E PDF Import
```
/import starfinder-2e pdf:"message_link_or_url"
```

### Essence 20 PDF Import
```
/import essence20-pdf pdf:"character_sheet.pdf"
```

### Wanderer's Guide Import
RPG Sage supports importing from Wanderer's Guide JSON exports, automatically converting to Pathbuilder format.

### Bulk Import via TSV
Import multiple characters using tab-separated values:
```
sage!pc import
type	name	alias	avatar	user
pc	Seelah	@seelah	http://example.com/seelah.png	@Player1
npc	Guard	@guard	http://example.com/guard.png
companion	Horse	@horse		@Player1
```

### Import Options
- `attach` - Attach character as markdown file
- `pin` - Pin character sheet in channel
- Automatic game integration
- Stat preservation and updates

## Character Statistics

### Setting Basic Stats
```
sage!pc update "Seelah" level=5 hp=45 maxhp=52
sage!pc update "Seelah" ac=18 str=16 dex=12 con=14
```

### Game System Stats
For supported systems (PF2E, DND5E, etc.):
- Ability scores (str, dex, con, int, wis, cha)
- Skills and proficiencies
- Saving throws
- Armor class
- Hit points
- Level progression

### Conditions (PF2E/PF1E)
```
sage!pc update "Seelah" conditions="prone, frightened 1"
sage!pc update "Seelah" frightened=2
sage!pc update "Seelah" stunned+  # Add condition
sage!pc update "Seelah" prone-    # Remove condition
```

### Custom Stats
```
sage!pc update "Seelah" "Spell Slots"="3/2/1" notes="Important reminder"
```

### Stat Modifiers
```
sage!pc update "Seelah" hp+5     # Add 5 to current hp
sage!pc update "Seelah" hp-3     # Subtract 3 from current hp
sage!pc update "Seelah" level+   # Increment level by 1
sage!pc update "Seelah" ac-      # Decrement ac by 1
```

## Character Images and Appearance

### Setting Images
```
# Avatar (small profile image)
sage!pc update "Seelah" avatar="https://example.com/seelah-portrait.png"

# Token (larger character image)
sage!pc update "Seelah" token="https://example.com/seelah-token.png"

# Upload via attachment
sage!pc update "Seelah" [attach avatar image]
sage!pc update "Seelah" [attach token image]
```

### Color Themes
```
sage!pc update "Seelah" color="#FFD700"  # Gold color
sage!pc update "Seelah" color="blue"     # Named color
```

### Display Names and Aliases
```
sage!pc update "Seelah" alias="@paladin"
sage!pc update oldName="Seelah" newName="Seelah Brightshield"
```

## Managing Character Data

### Viewing Characters
```
sage!pc details "Seelah"         # Full character sheet
sage!pc stats "Seelah"           # Stats only
sage!npc list                    # List all NPCs
sage!pc list                     # List all PCs
```

### Character Sections
View specific sections of character data:
- All (complete character sheet)
- Combat (attacks, AC, saves)
- Stats (ability scores, skills)
- Equipment (items, money)
- Spells (known/prepared spells)
- Feats (character abilities)

### Updating Character Information
```
# Basic updates
sage!pc update "Seelah" name="Sir Seelah"

# Multiple stats at once
sage!pc update "Seelah" hp=40 ac=19 level=6

# Batch updates via form interface
# Use interactive character forms for complex updates
```

### Notes and Custom Fields
```
sage!pc update "Seelah" "Background Notes"="Noble from Lastwall"
sage!pc update "Seelah" "Quest Items"="Holy Symbol, Royal Decree"
```

## Character Display and Output

### Character Sheets
Characters display with rich formatting including:
- Character portrait/token
- Basic information (name, class, level)
- Game system specific stats
- Equipment and abilities
- Conditions and modifiers

### Viewing Options
```
sage!pc details "Seelah" section=combat    # Combat stats only
sage!pc details "Seelah" section=spells    # Spells only
sage!pc details "Seelah" section=all       # Full sheet
```

### Auto-Formatted Output
- Pathfinder characters show formatted stat blocks
- D&D characters display system-appropriate layouts
- Custom stats appear in organized sections
- Conditions highlighted for supported systems

## Character Relationships

### Companions and Minions
```
# Create companion for PC
sage!companion create charName="Seelah" "Warhorse"

# Create minion for NPC
sage!minion create charName="Evil Wizard" "Skeleton"

# List companions
sage!companion list charName="Seelah"

# Manage companion stats
sage!companion update charName="Seelah" "Warhorse" hp=25
```

### Character Ownership
- PCs owned by specific users
- NPCs owned by GMs
- Companions inherit parent ownership
- User permissions control access

### Character Transfers
```
sage!pc update "Seelah" newUser="@NewPlayer"  # Transfer ownership
sage!pc update "Seelah" user="unset"          # Remove user assignment
```

## Auto-Posting

Configure automatic character posting to specific channels:

### Setting Up Auto-Post
```
sage!pc auto on "Seelah" channel=#roleplay embed
sage!npc auto on "Guard" channel=#gm-channel post
```

### Auto-Post Options
- `embed` - Post as embedded character sheet
- `post` - Post as regular message with character formatting
- Channel-specific routing
- Role-based visibility

### Managing Auto-Post
```
sage!pc auto off "Seelah"                    # Disable auto-posting
sage!pc auto dialog "Seelah"                 # Interactive management
```

## Export and Backup

### Individual Character Export
```
sage!pc export "Seelah"        # Export single character
sage!npc export "Guard"        # Export NPC
```

### Bulk Export
```
sage!pc export                 # Export all PCs
sage!npc export                # Export all NPCs
```

### Export Formats
- TSV (Tab-Separated Values) for bulk operations
- Includes all character data and statistics
- Compatible with import functionality
- Preserves relationships and ownership

### Backup and Migration
- Export characters before major changes
- Transfer characters between servers
- Preserve character data during game transitions
- Maintain character history and development

## Advanced Features

### Character Forms
Interactive forms for complex character management:
- Name and alias editing
- Image upload and management
- Stat modification interfaces
- Bulk property updates

### Integration with Game Systems
- Pathbuilder 2E full integration
- Automatic stat calculations
- Proficiency and skill tracking
- Spell slot management
- Condition effect processing

### Character Validation
- Name length and character restrictions
- Discord webhook compatibility
- Duplicate name prevention
- Permission verification

### Search and Filtering
- Find characters by name, alias, or user
- Filter by character type
- Search within games or across users
- Quick character lookup for commands

---

*For more information on specific game system features, see the respective system documentation. For character automation and macros, see [Macros Guide](macros.md).*

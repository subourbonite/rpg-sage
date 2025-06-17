# Character Import and Export

RPG Sage provides comprehensive character import capabilities from various sources, allowing users to bring their characters into the bot from popular character builders and PDFs. The bot also supports exporting character data for backup or transfer purposes.

## Import Sources

### Pathbuilder 2E

RPG Sage has native support for importing characters from Pathbuilder 2E, the popular Pathfinder 2E character builder.

**Import by ID**
```
sage! import pathbuilder id=123456
```
- Uses Pathbuilder's "Export JSON" feature
- Requires the numeric ID from the export URL
- Automatically downloads character data from Pathbuilder servers

**Import by File Upload**
```
sage! import
```
- Attach a JSON file exported from Pathbuilder
- Supports both individual character exports and batch imports
- Handles Pathbuilder's native JSON format

**Supported Pathbuilder Features**
- Complete character statistics and abilities
- Feats, equipment, and spells
- Animal companions and familiars
- Custom proficiencies and lore skills
- Money and equipment containers
- Weapon and armor configurations

### Wanderer's Guide

Characters from Wanderer's Guide (another PF2E character builder) can be imported through format conversion.

**Import Process**
```
sage! import
```
- Upload Wanderer's Guide JSON export
- Automatically converts to Pathbuilder-compatible format
- Preserves character data and statistics

**Converted Features**
- Basic character information (name, ancestry, class, level)
- Ability scores and modifiers
- Skills and lore proficiencies
- Equipment and inventory
- Spell lists and casters
- Feat selections

### PDF Character Sheets

RPG Sage can parse character data from fillable PDF character sheets for multiple game systems.

#### Pathfinder 2E PDFs

**Supported PDF Sources**
- Official Paizo character sheets
- Demiplane character sheets
- Playtest character sheets
- Community-created fillable PDFs

**Import Method**
```
sage! import
```
- Upload the filled PDF file
- Bot automatically detects PDF format and extracts data
- Converts to internal character format

**Extracted Data**
- Character basics (name, class, level, ancestry)
- Ability scores and derived statistics
- Skills and proficiencies
- Equipment and weapons
- Spell lists (if applicable)
- Feats and special abilities

#### Starfinder 2E PDFs

**PDF Support**
- Starfinder 2E playtest character sheets
- Commercial and community sheets
- Equipment grades and weapon configurations

#### Essence 20 System PDFs

RPG Sage supports character import from Essence 20 system PDFs for multiple franchises:

**Supported Games**
- G.I. Joe Roleplaying Game
- Power Rangers Roleplaying Game
- Transformers Roleplaying Game

**Import Features**
- Character attributes and skills
- Franchise-specific features (alt modes, gear, powers)
- Equipment and weapons
- Special abilities and perks

## Import Process

### File Upload Method

1. **Start Import Command**
   ```
   sage! import
   ```

2. **Attach File**
   - Drag and drop or attach your character file
   - Supported formats: JSON, PDF
   - Multiple files can be uploaded simultaneously

3. **Automatic Detection**
   - Bot analyzes file format and source
   - Determines appropriate parser
   - Provides feedback on detected format

4. **Character Creation**
   - Parsed data creates a new character
   - Character is added to your personal collection
   - Can be imported into games or used for reference

### Direct URL Method

For Pathbuilder 2E characters:

1. **Get Export ID**
   - In Pathbuilder, use "Export JSON"
   - Copy the numeric ID from the export URL

2. **Import by ID**
   ```
   sage! import pathbuilder id=YOUR_ID_HERE
   ```

3. **Automatic Download**
   - Bot fetches data directly from Pathbuilder
   - Creates character with latest data

### Batch Import

Multiple characters can be imported simultaneously:

1. **Multiple Files**
   - Attach several character files to one import command
   - Each file is processed individually
   - Results reported for each character

2. **Export Validation**
   - Each character is validated during import
   - Errors reported for individual characters
   - Successful imports proceed normally

## Character Export

### Export Character Data

**Export Single Character**
```
sage! character export name="Character Name" [fileName="custom.tsv"]
```
- Exports character data to TSV (Tab-Separated Values) format
- Includes all character statistics and notes
- Optional custom filename

**Export All Characters**
```
sage! character export
```
- Exports all characters you own
- Includes PCs, NPCs, and companions
- Comprehensive data export

### Export Format

**TSV Structure**
- Tab-separated values for easy import into spreadsheets
- Headers include: type, name, charname, alias, avatar, color, token, user
- Character statistics as additional columns
- Notes and custom fields included

**Exported Data**
- Character type (PC, NPC, Companion, Minion)
- Basic information (name, alias, colors, tokens)
- Associated Discord user
- All character statistics and notes
- Companion relationships

### Export Scope

**Personal Characters**
- Characters in your user collection
- Available outside of games
- Portable across servers

**Game Characters**
- Characters specific to a game
- NPCs and player characters
- Game Master characters (if permitted)

## Data Validation

### Import Validation

**Format Checking**
- Verifies file format compatibility
- Validates required character data fields
- Reports missing or invalid information

**Data Integrity**
- Ensures ability scores are within valid ranges
- Validates feat and equipment selections
- Checks spell list compatibility

**Error Reporting**
- Detailed error messages for failed imports
- Suggestions for fixing common issues
- Partial import results when possible

### Character Compatibility

**Cross-System Support**
- Characters maintain source system information
- Automatic format conversion where possible
- Preserves original data structure

**Version Compatibility**
- Handles different versions of character builders
- Maintains backward compatibility
- Updates deprecated data formats

## Advanced Features

### Custom Field Support

**Character Notes**
- Imports custom notes and annotations
- Preserves markdown formatting
- Maintains character history

**Equipment Details**
- Custom equipment descriptions
- Modification tracking
- Container organization

### Companion Import

**Animal Companions**
- Imports companion statistics
- Maintains companion-character relationships
- Supports companion equipment

**Familiars**
- Familiar abilities and choices
- Evolution tracking
- Special familiar features

### Spell Support

**Spellcaster Import**
- Multiple tradition support
- Prepared vs. spontaneous casting
- Focus spells and cantrips
- Spell slot tracking

**Spell Lists**
- Known spells by level
- Prepared spell combinations
- Custom spell notes

## Troubleshooting

### Common Import Issues

**File Format Problems**
- Ensure PDF is fillable and properly completed
- Check JSON file validity
- Verify character builder export settings

**Missing Data**
- Some PDF fields may not be recognized
- Manual verification recommended after import
- Contact support for new PDF formats

**Character Builder Updates**
- New versions may change export formats
- Bot updates address compatibility issues
- Manual conversion may be required temporarily

### Error Resolution

**Partial Imports**
- Some data may import successfully
- Review character after import
- Manually add missing information

**Validation Failures**
- Check source character for errors
- Ensure all required fields are filled
- Verify character follows system rules

### Getting Help

**Import Support**
- Use help commands for detailed syntax
- Check documentation for supported formats
- Report new character builders or PDFs

**Community Resources**
- Share successful import configurations
- Contribute new PDF parsing rules
- Help test new import features

## Best Practices

### Before Import

1. **Verify Source Data**
   - Ensure character is complete
   - Check for any errors in source
   - Save backup copies

2. **Format Preparation**
   - Use latest export formats
   - Ensure PDFs are properly filled
   - Validate JSON structure

### After Import

1. **Data Verification**
   - Review imported character carefully
   - Check all statistics and abilities
   - Verify equipment and spells

2. **Manual Cleanup**
   - Add any missing information
   - Correct formatting issues
   - Update character notes

### Organization

1. **Naming Conventions**
   - Use clear, descriptive character names
   - Include system/campaign information
   - Avoid special characters in names

2. **Character Management**
   - Organize by campaign or system
   - Keep backups of original files
   - Regular export for data safety

The import/export system makes it easy to bring your existing characters into RPG Sage and share character data across platforms and campaigns.

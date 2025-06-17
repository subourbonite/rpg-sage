# Map Tools

RPG Sage provides comprehensive map management and token placement tools for visual combat and exploration. These tools allow GMs and players to create, manage, and interact with battle maps during gameplay.

## Overview

The map system supports:
- **Interactive Battle Maps**: Visual representation of combat encounters
- **Token Management**: Player and NPC tokens with positioning
- **Layered System**: Terrain, tokens, and auras on separate layers
- **Movement Controls**: Click-to-move and command-based movement
- **Real-time Updates**: Live map updates for all participants

## Map Creation

### Import Map from Text
```
sage!map import
```
Paste formatted map data containing:
- Map background image URL
- Grid dimensions and colors
- Token positions and images
- Terrain elements
- Aura effects

### Map Format Specification
```
[map]
name=Battle Arena
url=https://example.com/battlemap.jpg
grid=20,15,#ffffff
spawn=10,8
user=@GameMaster

[token]
name=Fighter
url=https://example.com/fighter-token.png
pos=5,7
size=1,1
user=@Player1

[terrain]
name=Stone Wall
url=https://example.com/wall.png
pos=12,3
size=2,1
user=@GameMaster

[aura]
name=Light Spell
url=https://example.com/light-aura.png
pos=5,7
size=3,3
opacity=0.5
anchor=Fighter
user=@Player1
```

## Map Layers

### Layer Types
1. **Terrain Layer** (Bottom)
   - Environmental features
   - Walls, doors, obstacles
   - Non-interactive scenery

2. **Aura Layer** (Middle)
   - Spell effects
   - Area of effect indicators
   - Environmental effects

3. **Token Layer** (Top)
   - Player characters
   - NPCs and monsters
   - Interactive objects

### Layer Management
- Each user has an active layer
- Cycle through layers using control buttons
- Only owners/GMs can modify certain layers

## Token Management

### Adding Tokens
Tokens represent characters and creatures on the map:

```
# Via map import format
[token]
name=Wizard
url=https://example.com/wizard.png
pos=8,12
size=1,1
user=@Player2
```

### Token Properties
- **Name**: Character or creature identifier
- **Position**: Grid coordinates (column, row)
- **Size**: Token dimensions (width, height in grid squares)
- **Image**: URL to token artwork
- **Owner**: Player who controls the token
- **Character Link**: Connection to character sheet

### Character Linking
Tokens can be automatically linked to character sheets:
- Auto-creates tokens for player characters
- Links existing tokens by character name
- Enables character-specific commands

## Movement System

### Interactive Movement
Use the map control buttons:
- **Arrow Buttons**: Move active token in 8 directions
- **Click Interface**: Responsive movement controls
- **Batch Movement**: Move multiple tokens simultaneously

### Command-Based Movement
```
# Move active token
sage!move up 2 right 3

# Move specific token
sage!move token=Fighter down 1

# Move by character name
sage!move name=Wizard left 2 up 1

# Move multiple tokens
sage!move tokens=Fighter,Wizard north 3

# Complex movement path
sage!move TokenName=Fighter up 2 left 1 down 1
```

### Movement Directions
- **Cardinal**: north, south, east, west (n, s, e, w)
- **Diagonal**: northeast, northwest, southeast, southwest (ne, nw, se, sw)
- **Aliases**: up/north, down/south, left/west, right/east
- **Distance**: Number of grid squares to move

## Active Selection

### Setting Active Items
```
# Set active token
sage!active token=Rogue

# Set active terrain
sage!active terrain="Stone Bridge"

# Set active aura
sage!active aura="Fireball Area"

# Set by character name
sage!active name=Wizard
```

### Active Item Cycling
- **Token Button**: Cycle through your tokens
- **Terrain Button**: Cycle through terrain (GM only)
- **Aura Button**: Cycle through auras

## Map Controls

### Control Interface
Each map displays interactive buttons:

**Movement Controls**:
- ↖️ ⬆️ ↗️ (Up-Left, Up, Up-Right)
- ⬅️ ⚙️ ➡️ (Left, Config, Right)
- ↙️ ⬇️ ↘️ (Down-Left, Down, Down-Right)

**Layer Controls**:
- **🗻 Terrain**: Switch to terrain layer
- **🔮 Aura**: Switch to aura layer
- **👤 Token**: Switch to token layer

**Management Controls**:
- **⬆️ Raise**: Move item up in layer order / increase opacity
- **⬇️ Lower**: Move item down in layer order / decrease opacity
- **🗑️ Delete**: Remove selected item (GM only)

### Permissions
- **Map Owner**: Full control over all elements
- **Game Master**: Can modify all elements in their games
- **Players**: Can only modify their own tokens and auras

## Position System

### Grid Coordinates
- **Origin**: Top-left corner (1,1)
- **Format**: [column, row] or [x, y]
- **Size**: [width, height] in grid squares

### Examples
```
pos=5,7    # Column 5, Row 7
size=2,1   # 2 squares wide, 1 square tall
grid=20,15 # 20 columns, 15 rows
```

## Aura System

### Aura Types
1. **Standalone Auras**: Independent effects on the map
2. **Anchored Auras**: Attached to tokens or terrain

### Aura Properties
- **Opacity**: Transparency level (0.0 to 1.0)
- **Anchor**: Token or terrain to follow
- **Position**: Relative to anchor or absolute
- **Visual**: Image overlay for effects

### Aura Management
```
# Create anchored aura
[aura]
name=Sacred Weapon
anchor=Paladin
opacity=0.3
size=1,1
```

## Advanced Features

### Image Properties
- **Scale**: Resize images (e.g., scale=1.5 for 150%)
- **Clip**: Crop portions of background images
- **Opacity**: Transparency for overlays

### Multi-Token Movement
```
# Move multiple tokens together
sage!move tokens=Fighter,Rogue,Wizard northeast 2

# Different paths for different tokens
sage!move Fighter=north 3 Wizard=south 2
```

### Token Layering
- **Raise/Lower**: Change draw order within layer
- **Top/Bottom**: Move to front/back of layer
- **Shuffle**: Automatic layering during movement

## Map Persistence

### Saving Maps
- Maps automatically save on changes
- Persistent across Discord sessions
- Linked to specific Discord messages

### Map Lifecycle
1. **Import**: Create map from formatted text
2. **Active Use**: Players interact with live map
3. **Persistence**: Map state maintained between sessions
4. **Cleanup**: Maps removed when message is deleted

## Usage Examples

### Basic Combat Setup
```
1. GM imports map with terrain
2. Players are automatically given tokens
3. GM sets initial positions
4. Combat begins with interactive movement
```

### Spell Effect Tracking
```
1. Wizard casts Fireball
2. Aura placed showing area of effect
3. Tokens moved to show positioning
4. Effect aura removed when spell ends
```

### Exploration Mode
```
1. Large exploration map loaded
2. Party tokens grouped together
3. Terrain reveals as party explores
4. Dynamic lighting with aura effects
```

## Best Practices

### For Game Masters
- Pre-load maps with terrain before sessions
- Use consistent token sizing (1x1 for Medium creatures)
- Group similar terrain elements together
- Test map layouts before gameplay

### For Players
- Keep token names matching character names
- Coordinate movement during combat
- Communicate position intentions clearly
- Respect GM's terrain and map modifications

### Performance Tips
- Use reasonably sized images (< 2MB recommended)
- Limit simultaneous token movements
- Keep aura effects simple and clear
- Regular map saves during long sessions

## Troubleshooting

### Common Issues
- **Tokens not appearing**: Check image URLs and permissions
- **Movement not working**: Verify active token selection
- **Permission denied**: Ensure proper user ownership
- **Map not updating**: Try refreshing or re-importing

### Error Resolution
```
# Reset active selection
sage!active token=YourTokenName

# Re-import problematic maps
sage!map import
[paste corrected map data]

# Check permissions
- Map owner can modify everything
- Players can only modify their own items
```

The map tools provide a comprehensive visual aid for tabletop gaming, enabling immersive combat encounters and exploration scenarios with real-time collaborative interaction.

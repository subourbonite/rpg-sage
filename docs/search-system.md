# Search System

The search system provides powerful content search capabilities, allowing you to find spells, feats, equipment, creatures, and other game materials from supported sources.

## Overview

RPG Sage integrates with Archives of Nethys to provide comprehensive search functionality for multiple game systems. The search engine returns detailed information about game content with direct links to official sources.

## Supported Game Systems

### Pathfinder 2nd Edition (PF2E)
- **Source**: Archives of Nethys (2e.aonprd.com)
- **Advanced Search**: Full Elasticsearch integration
- **Content**: Spells, feats, equipment, creatures, rules, and more

### Pathfinder 1st Edition (PF1E)
- **Source**: Archives of Nethys (aonprd.com)
- **Search Type**: Direct web scraping
- **Content**: Complete PF1E rule set

### Starfinder 1st Edition (SF1E)
- **Source**: Archives of Nethys (aonsrd.com)
- **Search Type**: Direct web scraping
- **Content**: Complete SF1E rule set

## Basic Search Commands

### Simple Search
```
sage!search <query>
/sage-search query:<query>
```

### Name-Only Search
```
sage!searchname <query>
/sage-searchname query:<query>
```

## Search Syntax

### Basic Queries
```
sage!search magic missile
sage!search longsword
sage!search fireball
```

### Type Filtering
Use `+type` to include specific content types or `-type` to exclude them:

```
sage!search fire +spell
sage!search weapon +martial -exotic
sage!search magic -item
```

### Rarity Filtering
Filter by rarity using `+rarity` or `-rarity`:

```
sage!search sword +uncommon
sage!search spells -rare -legendary
sage!search items +common +uncommon
```

### Advanced Combinations
```
sage!search fire +spell +evocation -rare
sage!search healing +divine +spell +cantrip
sage!search armor +heavy +metal -magical
```

## Content Types

### Spells
- **Cantrips**: 0-level spells
- **Spells 1-10**: By spell level
- **Focus Spells**: Class-specific focus spells
- **Rituals**: Ritual magic

### Equipment
- **Weapons**: All weapon categories
- **Armor**: Light, medium, heavy armor
- **Shields**: Various shield types
- **Gear**: Adventuring equipment
- **Alchemical Items**: Potions, bombs, etc.
- **Magic Items**: Enchanted equipment

### Character Options
- **Feats**: All feat types
- **Class Features**: Abilities by class
- **Archetypes**: Multiclass and unique archetypes
- **Backgrounds**: Character backgrounds
- **Heritages**: Ancestry options

### Creatures
- **Monsters**: Bestiary creatures
- **NPCs**: Non-player characters
- **Familiars**: Animal companions
- **Hazards**: Environmental dangers

### Rules Content
- **Traits**: Game mechanics traits
- **Conditions**: Status effects
- **Actions**: Available actions
- **Rules**: Game rules and mechanics

## Search Results

### Result Format
Search results include:
- **Name**: Item/spell/creature name
- **Type**: Content category
- **Level**: Where applicable
- **Rarity**: Common, uncommon, rare, unique
- **Source**: Book abbreviation
- **Link**: Direct link to Archives of Nethys

### Interactive Menus
For multiple results, use reaction buttons to:
- Navigate through results
- View detailed information
- Access related content
- Visit source pages

### Example Result
```
Magic Missile - Spell 1
[aon] Magic Missile - Spell 1 (link)
```

## Advanced Features

### Search Operators

#### Must Include (+)
```
sage!search +fire +spell
```
Results must contain both "fire" AND "spell"

#### Must Exclude (-)
```
sage!search sword -magical
```
Results must contain "sword" but NOT "magical"

#### Alternative (|)
```
sage!search healing|cure
```
Results contain either "healing" OR "cure"

### Type-Specific Searches

#### Spells by Tradition
```
sage!search +arcane +spell
sage!search +divine +healing
```

#### Equipment by Category
```
sage!search +weapon +martial
sage!search +armor +light
```

#### Creatures by Type
```
sage!search +dragon +creature
sage!search +undead +monster
```

### Rarity Categories
- **Common**: Standard content
- **Uncommon**: Requires GM permission
- **Rare**: Special circumstances
- **Unique**: Single instance items

## Integration Features

### Direct Links
All search results include direct links to Archives of Nethys for:
- Full stat blocks
- Complete descriptions
- Official artwork
- Source attribution

### Search Fallbacks
If no results found:
- Provides direct search link to Archives of Nethys
- Suggests alternative search terms
- Shows "did you mean" suggestions

### Cross-Referencing
Search results can reference:
- Related spells or abilities
- Required components
- Prerequisite feats
- Source materials

## Best Practices

### Effective Searching
1. **Start broad**: Begin with general terms
2. **Use filters**: Add type filters to narrow results
3. **Try alternatives**: Use different terms if no results
4. **Check spelling**: Verify correct spelling of game terms

### Common Patterns
```
# Finding spells by school
sage!search +evocation +spell

# Finding equipment by material
sage!search +steel +weapon

# Finding feats by type
sage!search +combat +feat

# Finding creatures by CR
sage!search +creature +level 5
```

### Search Tips
- Use official game terminology
- Include relevant traits or keywords
- Filter by content type for focused results
- Try singular and plural forms

## Troubleshooting

### No Results Found
- Check spelling and terminology
- Try broader search terms
- Remove restrictive filters
- Use alternative keywords

### Too Many Results
- Add type filters (+spell, +weapon, etc.)
- Include rarity filters
- Use more specific terms
- Combine multiple keywords

### Search Unavailable
- Verify game system support
- Check bot permissions
- Try again later if service issues
- Use direct Archives of Nethys link

## Related Commands

### Spell-Specific Searches
- `sage!spells <tradition> <level>` - List spells by tradition and level
- `sage!spells focus <class>` - Focus spells by class
- `sage!spells <trait>` - Spells with specific trait

### Equipment Browsing
- Browse by category using search filters
- Compare similar items
- Find alternatives with different rarities

### Quick Lookups
Use search for rapid access to:
- Spell descriptions during gameplay
- Equipment stats for shopping
- Creature information for encounters
- Rule clarifications during sessions

The search system provides comprehensive access to game content, making it an essential tool for players and GMs to quickly find accurate, official information during gameplay.

# Getting Started with RPG Sage

This guide will help you get started with RPG Sage, a comprehensive Discord bot for tabletop RPG gaming.

## Table of Contents
- [Adding RPG Sage to Your Server](#adding-rpg-sage-to-your-server)
- [Basic Setup](#basic-setup)
- [First Steps](#first-steps)
- [Essential Commands](#essential-commands)
- [Common Usage Patterns](#common-usage-patterns)
- [Next Steps](#next-steps)

## Adding RPG Sage to Your Server

*Note: This section assumes RPG Sage is already deployed and available for invitation.*

1. Invite RPG Sage to your Discord server using the appropriate invitation link
2. Ensure the bot has the necessary permissions:
   - Send Messages
   - Use Slash Commands
   - Embed Links
   - Attach Files
   - Read Message History
   - Add Reactions

## Basic Setup

### Setting Up a Game

Before using most features, you'll need to create a game:

```
sage!game create MyGame PF2E
```

This creates a game called "MyGame" using the Pathfinder 2E system. Supported systems include:
- `PF1E` - Pathfinder 1st Edition
- `PF2E` - Pathfinder 2nd Edition
- `SF1E` - Starfinder 1st Edition
- `SF2E` - Starfinder 2nd Edition
- `DND5E` - D&D 5th Edition
- `E20` - d20 Modern/E20 System

### Configuring Channels

Set up specific channels for different purposes:

```
sage!game channel dice #dice-rolls
sage!game channel gm #gm-channel
```

## First Steps

### 1. Roll Some Dice

Try your first dice roll:
```
sage!roll 1d20+5
```

Or use the shorthand:
```
[1d20+5]
```

### 2. Create a Character

```
sage!char create "Seelah" Human Paladin
```

### 3. Set Up a Basic Macro

```
sage!macro create attack "1d20+8" "Longsword attack"
```

Then use it:
```
sage!macro attack
```

## Essential Commands

### Dice Rolling
- `sage!roll [dice expression]` - Roll dice
- `[dice expression]` - Shorthand dice rolling
- `sage!macro [name]` - Use a saved macro

### Character Management
- `sage!char create [name] [ancestry] [class]` - Create character
- `sage!char stats` - View character stats
- `sage!char set [stat] [value]` - Set character stat

### Game Management
- `sage!game create [name] [system]` - Create a game
- `sage!game join` - Join the current game
- `sage!game info` - View game information

### Search
- `sage!search [query]` - Search game content
- `sage!search spell [name]` - Search for spells
- `sage!search feat [name]` - Search for feats

## Common Usage Patterns

### Combat Scenario
```
# Set up initiative
sage!init start

# Roll attack
[1d20+8 attack; 1d8+4 damage]

# Apply conditions
sage!char condition add frightened 1

# End turn
sage!init next
```

### Skill Checks
```
# Basic skill check
[1d20+7 Perception]

# PF2E degrees of success
[1d20+7 vs 15 Perception]

# With fortune/misfortune
[2d20kh1+7 Perception] // advantage
[2d20kl1+7 Perception] // disadvantage
```

### Character Progression
```
# Level up
sage!char set level 3

# Update stats
sage!char set hp 28
sage!char set ac 18

# Add new abilities
sage!macro create "Fire Bolt" "1d20+5 attack; 1d10 fire damage" "Cantrip attack"
```

## Next Steps

Once you're comfortable with the basics:

1. **Explore Advanced Dice Rolling** - Learn about exploding dice, complex modifiers, and game-specific mechanics in [Dice Rolling Guide](dice-rolling.md)

2. **Master Macros** - Create powerful, reusable dice expressions with arguments and conditions in [Macros Guide](macros.md)

3. **Character Management** - Import characters from Pathbuilder, Hero Lab, or other sources in [Character Management](character-management.md)

4. **Game Administration** - Set up comprehensive games with maps, weather, and calendars in [Game Management](game-management.md)

5. **Search System** - Learn to quickly find spells, feats, equipment, and other game content in [Search System](search-system.md)

## Quick Reference

### Command Prefixes
- `sage!` - Standard command prefix
- `[...]` - Dice rolling shorthand
- `/` - Slash commands (where available)

### Basic Dice Syntax
- `1d20` - Roll one 20-sided die
- `3d6` - Roll three 6-sided dice
- `1d20+5` - Roll with modifier
- `2d6kh1` - Roll 2d6, keep highest
- `1d20!` - Exploding die

### Game Systems
- Use the appropriate system when creating games
- Each system has specific features and dice mechanics
- Some features are only available in certain systems

### Getting Help
- Use `sage!help` for command lists
- Check specific command help with `sage!help [command]`
- Review this documentation for detailed guides
- Ask in your server's designated help channel

---

*This is part of the RPG Sage documentation. For more detailed information on specific features, see the other guides in this documentation.*

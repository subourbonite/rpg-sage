# Macro System

RPG Sage's macro system allows you to create, store, and execute complex dice expressions and commands with customizable parameters. Macros can be organized by categories and support both indexed and named arguments for maximum flexibility.

## Table of Contents

- [Overview](#overview)
- [Macro Types and Ownership](#macro-types-and-ownership)
- [Creating Macros](#creating-macros)
- [Macro Arguments](#macro-arguments)
- [Managing Macros](#managing-macros)
- [Rolling Macros](#rolling-macros)
- [Advanced Features](#advanced-features)
- [Examples](#examples)

## Overview

Macros are reusable templates that can contain:
- **Dice expressions**: Complex dice rolls with modifiers
- **Arguments**: Placeholders for dynamic values
- **Descriptions**: Labels and contextual information
- **Categories**: Organizational groupings

### Key Features

- **Dynamic Arguments**: Use indexed (`{0}`, `{1}`) and named (`{attack}`, `{damage}`) parameters
- **Default Values**: Set fallback values for optional arguments
- **Nested Macros**: Reference other macros within macro definitions
- **Rich Formatting**: Include descriptions and contextual information
- **Multi-tier Organization**: User, character, server, and game-level macros

## Macro Types and Ownership

### Ownership Levels

#### User Macros
- **Scope**: Personal to individual user
- **Access**: Available across all servers
- **Command**: `sage! macro set name="MyAttack" dice="[1d20+5]"`

#### Character Macros
- **Scope**: Specific to a character
- **Access**: Available when that character is active
- **Command**: `sage! macro set type=char charName="Aragorn" name="Longsword" dice="[1d20+8][1d8+4]"`

#### Server Macros
- **Scope**: Available to all users on the server
- **Access**: Server-wide availability
- **Command**: `sage! macro set type=server name="Initiative" dice="[1d20+{dex}]"`

#### Game Macros
- **Scope**: Specific to a game/campaign
- **Access**: Available to game participants
- **Command**: `sage! macro set type=game name="Knowledge" dice="[1d20+{mod} dc{dc}]"`

### Categories

Macros can be organized into categories for better organization:
- **Default**: Uncategorized macros
- **Combat**: Attack rolls, damage, initiative
- **Skills**: Skill checks and tests
- **Spells**: Spell attacks and effects
- **Custom**: User-defined categories

## Creating Macros

### Basic Syntax
```
sage! macro set name="MacroName" dice="[dice_expression]"
```

### With Category
```
sage! macro set name="Attack" category="Combat" dice="[1d20+{attack}][2d6+{damage}]"
```

### With Description Dialog
```
sage! macro set name="Fireball" dialog="true" dice="[8d6 {dc} fire damage]"
```

## Macro Arguments

### Indexed Arguments

Use numbered placeholders that are filled positionally:

```
sage! macro set name="BasicAttack" dice="[1d20+{0} ac{1}][1d8+{2}]"
```

**Usage**: `BasicAttack 5 15 3` becomes `[1d20+5 ac15][1d8+3]`

### Named Arguments

Use descriptive names for clarity:

```
sage! macro set name="Spell" dice="[1d20+{spell} dc{dc}][{dice}d{die}+{bonus}]"
```

**Usage**: `Spell spell=8 dc=15 dice=3 die=6 bonus=4`

### Default Values

Provide fallback values for optional parameters:

```
dice="[1d20+{attack:0} ac{ac:10}][1d8+{damage:0}]"
```

If `attack` isn't provided, it defaults to 0.

### Remaining Arguments

Use `{*}` to capture all unused arguments:

```
dice="[1d20+{attack}][{*}]"
```

**Usage**: `MacroName attack=5 1d8+3 "extra damage"`
**Result**: `[1d20+5][1d8+3 "extra damage"]`

### Complex Argument Patterns

#### Mixed Arguments
```
dice="[1d20+{0}+{prof:2} ac{ac}][{1}d{die:6}+{2:0} {*}]"
```

#### Conditional Arguments
```
dice="[1d20+{attack} {advantage:}{ac:}][{damage:1d8}+{bonus:0}]"
```

## Managing Macros

### Listing Macros

View available macros with an interactive interface:
```
sage! macro list
```

Navigate through:
- **Macro types**: User, Character, Server, Game
- **Categories**: Combat, Skills, Spells, etc.
- **Pages**: When you have many macros

### Viewing Macro Details
```
sage! macro details name="AttackMacro"
```

Shows:
- Macro content
- Required/optional arguments
- Usage examples
- Roll/Edit buttons

### Editing Macros
```
sage! macro set name="ExistingMacro" dice="[updated dice expression]"
```

Or use the interactive edit button in macro details.

### Deleting Macros

#### Single Macro
```
sage! macro delete name="MacroName"
```

Or use the delete button in the interactive interface.

#### All Macros
Use the "Delete All" button in the macro list interface (requires confirmation).

### Copying Macros

Copy macros between different ownership levels:
```
sage! macro copy name="SourceMacro" type=server
```

## Rolling Macros

### Simple Roll
```
MacroName
```

### With Arguments
```
MacroName arg1 arg2 key=value
```

### With Prefixes

#### Advantage/Disadvantage
```
+MacroName   # Roll with advantage/fortune
-MacroName   # Roll with disadvantage/misfortune
```

#### Multiple Rolls
```
3#MacroName  # Roll the macro 3 times
```

#### Keep/Drop Dice
```
2kh1#MacroName  # Roll 2 times, keep highest 1
```

### Interactive Rolling

Use the macro list interface to:
1. Select a macro
2. Click "Roll" for immediate execution
3. Click "Prompt Roll" to enter arguments via modal

## Advanced Features

### Nested Macros

Reference other macros within macro definitions:

```
sage! macro set name="BasicAttack" dice="[1d20+{attack}]"
sage! macro set name="FullAttack" dice="[BasicAttack attack={0}][BasicAttack attack={1}]"
```

### Argument Processing

Arguments are processed in order:
1. **Indexed arguments**: `{0}`, `{1}`, `{2}`, etc.
2. **Named arguments**: `{name}`, `{attack}`, `{damage}`, etc.
3. **Default values**: Used when arguments aren't provided
4. **Remaining args**: `{*}` captures unused arguments

### Dialog Prompts

Set `dialog="true"` to prompt for arguments:
```
sage! macro set name="CustomSpell" dialog="true" dice="[{dice}d{die} {type} damage]"
```

When rolled, presents a modal dialog for entering values.

### Argument Validation

The system automatically:
- Validates required arguments
- Applies default values
- Handles missing parameters gracefully
- Provides helpful error messages

## Examples

### Basic Combat Macro
```
sage! macro set name="Longsword" category="Combat"
dice="[1d20+{attack:0} ac{ac:10} 'attack'][1d8+{damage:0} 'damage']"
```

**Usage**: `Longsword attack=8 damage=4 ac=16`

### Spell Attack with Damage
```
sage! macro set name="Fireball" category="Spells"
dice="[1d20+{spell:0} dc{dc:15} 'spell attack'][8d6 'fire damage']"
```

**Usage**: `Fireball spell=5 dc=16`

### Skill Check with Difficulty
```
sage! macro set name="Stealth" category="Skills"
dice="[1d20+{stealth:0} dc{dc:15} 'Stealth Check']"
```

**Usage**: `Stealth stealth=7 dc=12`

### Complex Attack Routine
```
sage! macro set name="FullAttack" category="Combat"
dice="[1d20+{main:0} ac{ac:10} 'main hand'][1d8+{mainDmg:0} 'main damage'][1d20+{off:0} ac{ac:10} 'off hand'][1d6+{offDmg:0} 'off damage']"
```

**Usage**: `FullAttack main=10 mainDmg=6 off=5 offDmg=3 ac=18`

### Pathfinder 2E Attack with Traits
```
sage! macro set name="Longsword+1" category="Weapons"
dice="[1d20+{attack} ac{ac} 'attack'][1d8+{damage} striking magical 'damage']"
```

**Usage**: `Longsword+1 attack=12 damage=5 ac=19`

### Flexible Damage Macro
```
sage! macro set name="Damage" category="Utility"
dice="[{dice:1}d{die:6}+{bonus:0} {type:damage}]"
```

**Usage**:
- `Damage` → `[1d6+0 damage]`
- `Damage dice=3 die=8 bonus=4 type=fire` → `[3d8+4 fire]`

### Initiative with Modifiers
```
sage! macro set name="Initiative" category="Combat"
dice="[1d20+{dex:0}+{misc:0} 'Initiative']"
```

**Usage**: `Initiative dex=3 misc=2`

### Saving Throw
```
sage! macro set name="Save" category="Saves"
dice="[1d20+{save:0} dc{dc:10} '{type:Will} Save']"
```

**Usage**: `Save save=5 dc=16 type=Fortitude`

## Tips and Best Practices

1. **Use Descriptive Names**: Make macro names clear and memorable
2. **Organize with Categories**: Group related macros together
3. **Provide Default Values**: Make macros easier to use with sensible defaults
4. **Include Descriptions**: Use quoted text to label dice rolls
5. **Test Thoroughly**: Verify macros work with different argument combinations
6. **Start Simple**: Begin with basic macros and add complexity gradually
7. **Use Interactive Interface**: Leverage the visual macro management for complex operations
8. **Document Complex Macros**: Use clear argument names and provide usage examples

The macro system is designed to grow with your needs, from simple dice shortcuts to complex combat routines and spell systems. Experiment with different argument patterns to find what works best for your game!

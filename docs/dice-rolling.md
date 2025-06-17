# Dice Rolling System

RPG Sage features one of the most sophisticated dice rolling systems for Discord bots, supporting multiple game systems with specialized mechanics and extensive customization options.

## Table of Contents

- [Basic Dice Syntax](#basic-dice-syntax)
- [Game System Support](#game-system-support)
- [Dice Modifiers](#dice-modifiers)
- [Special Keywords](#special-keywords)
- [Attack & Damage Rolls](#attack--damage-rolls)
- [Critical Hit Mechanics](#critical-hit-mechanics)
- [Output Formats](#output-formats)
- [Advanced Features](#advanced-features)
- [Examples](#examples)

## Basic Dice Syntax

### Standard Notation
```
[dice_expression]
```

Basic dice expressions follow standard tabletop notation:
- `[1d20]` - Roll one 20-sided die
- `[2d6]` - Roll two 6-sided dice
- `[1d20+5]` - Roll 1d20 and add 5
- `[3d8-2]` - Roll 3d8 and subtract 2
- `[1d20*2]` - Roll 1d20 and multiply by 2
- `[1d20/2]` - Roll 1d20 and divide by 2

### Multiple Dice Groups
```
[1d20+5][2d6+3]
```
Roll multiple separate dice groups in a single command.

### Fixed Values
```
[1,2,3d6]
```
Use predetermined values for some dice (useful for testing or demonstrations).

## Game System Support

RPG Sage automatically detects and applies game-specific rules based on server configuration:

### Pathfinder 2nd Edition (PF2E)
- **Fortune/Misfortune**: `[+2d20]` becomes advantage, `[-2d20]` becomes disadvantage
- **Critical Success**: Natural 20 or beat DC by 10+
- **Critical Failure**: Natural 1 or fail DC by 10+
- **Striking Runes**: Automatic damage dice multiplication
- **Fatal/Deadly**: Special weapon traits for critical hits

### D&D 5th Edition (DND5E)
- **Advantage/Disadvantage**: `[+2d20]` and `[-2d20]`
- **Critical Hits**: Natural 20 automatically hits and doubles damage dice
- **Fumbles**: Natural 1 automatic miss

### Pathfinder 1st Edition (PF1E)
- **Critical Confirmation**: Requires second roll to confirm critical hits
- **Threat Ranges**: Weapons with expanded critical ranges (e.g., 19-20)

### Starfinder 1st/2nd Edition (SF1E/SF2E)
- **Similar to Pathfinder** with sci-fi specific mechanics

### d20 System (D20)
- **Generic d20 mechanics** for other d20-based games

### Essence20 (E20)
- **Skill Die System**: Dynamic die sizes based on skill level
- **Edge/Snag**: Advantage/disadvantage equivalents
- **Die Shifting**: `[d6up2]` or `[d6dn1]` to shift die sizes

## Dice Modifiers

### Drop/Keep Mechanics
- `[4d6kh3]` - Keep highest 3 of 4d6
- `[4d6kl3]` - Keep lowest 3 of 4d6
- `[4d6dh1]` - Drop highest 1 of 4d6
- `[4d6dl1]` - Drop lowest 1 of 4d6

### Exploding Dice
- `[1d6x]` - Explode on maximum (6)
- `[1d6x5]` - Explode on 5 or higher
- `[1d6x>=5]` - Explode on 5 or higher (explicit)
- `[1d6x<3]` - Explode on less than 3

### Sorting Options
- `[4d6 nosort]` - Keep dice in rolled order
- `[4d6 sort]` - Force sorting by value

### Success Counting
- `[10d10 cs>=7]` - Count successes (7+)
- `[10d10 cf<=1]` - Count failures (1 or less)

## Special Keywords

### Test Values (Difficulty Classes)
- `[1d20+5 dc15]` - Roll against Difficulty Class 15
- `[1d20+3 vs 12]` - Roll against target number 12
- `[1d20+2 target 18]` - Alternative syntax for target numbers

### Hidden Values
- `[1d20+5 dc??]` - Hide the DC from players
- `[1d20+3 vs ??]` - Hide target number

### Descriptions
- `[1d20+5 "Attack Roll"]` - Add description to roll
- `[2d6+3 "Damage"]` - Label damage rolls

### Game-Specific Keywords

#### Pathfinder 2E
- `[1d20 fortune]` - Roll with fortune (advantage)
- `[1d20 misfortune]` - Roll with misfortune (disadvantage)
- `[1d8 striking]` - Weapon with striking rune
- `[1d8 fatal d10]` - Weapon with fatal d10 trait
- `[1d8 deadly d6]` - Weapon with deadly d6 trait

#### D&D 5E
- `[1d20 advantage]` - Roll with advantage
- `[1d20 disadvantage]` - Roll with disadvantage
- `[ac16]` - Target Armor Class 16

#### Essence20
- `[d6 edge]` - Roll with edge (advantage)
- `[d6 snag]` - Roll with snag (disadvantage)
- `[d4up2]` - Shift die up 2 steps (d4 → d8)
- `[d8dn1]` - Shift die down 1 step (d8 → d6)

## Attack & Damage Rolls

### Combined Attack/Damage
```
[1d20+8 ac16][2d6+4 "damage"]
```
Roll attack against AC 16, then damage if hit.

### Weapon Traits (PF2E)
```
[1d20+10 ac18][1d8+4 striking fatal d10 "longsword"]
```
Attack with striking longsword that has fatal d10 trait.

### Multiple Attacks
```
[1d20+10 ac18][1d20+5 ac18][1d20+0 ac18]
```
Full attack routine with iterative penalties.

## Critical Hit Mechanics

### Critical Hit Methods
Different game systems handle critical hits differently:

#### Times Two (Default)
- Multiply all damage by 2

#### Roll Twice
- Roll damage dice twice and add together
- Modifiers are also doubled

#### Add Maximum
- Add maximum possible damage to normal roll

### Automatic Critical Features
- **PF2E**: Beating AC by 10+ is automatic critical
- **Fatal Weapons**: Change die size on critical (d8 fatal d10 becomes d10)
- **Deadly Weapons**: Add extra dice on critical
- **Striking Runes**: Multiply base weapon dice

## Output Formats

Control how detailed the roll output appears:

### Size Options
- `XXL` - Maximum detail with all rolls shown
- `XL` - Full detail with dice and modifiers
- `L` - Large format with results
- `M` - Medium format (default)
- `S` - Small format, minimal details
- `XS` - Extra small, just totals
- `XXS` - Minimal, total only

### Examples
```
[1d20+5] (XXL format)
🎲 **26** ← [20]+5 "Attack Roll"

[1d20+5] (XS format)
🎲 **26**
```

## Advanced Features

### Secret Rolls
```
[1d20+5 secret]
```
Hide the roll details from players (GM only).

### Fixed Rolls
```
[20,19,18d20]
```
Use predetermined values for testing scenarios.

### Math Operations
```
[1d20+5] + [2d6]
```
Combine multiple dice expressions with math.

### Conditional Rolling
The bot automatically handles:
- Stopping damage rolls on missed attacks
- Critical hit damage calculations
- Advantage/disadvantage resolution
- Success/failure evaluation

## Examples

### Basic Rolls
```
[1d20]           # Simple d20
[3d6]            # Three six-sided dice
[1d8+3]          # d8 plus 3
[2d4-1]          # 2d4 minus 1
```

### Modified Rolls
```
[4d6kh3]         # Character generation (keep highest 3)
[1d20 advantage] # D&D 5E advantage
[2d6x]           # Exploding d6s
[5d10 cs>=7]     # Count successes (7+)
```

### Game-Specific Rolls
```
# Pathfinder 2E
[1d20+10 ac18][1d8+4 striking "longsword"]

# D&D 5E
[1d20+5 advantage][1d8+3 "shortsword"]

# Essence20
[d6 edge "Athletics check"]
```

### Complex Combat
```
# Full attack routine with multiple weapons
[1d20+12 ac19][1d8+6 striking "main hand"]
[1d20+7 ac19][1d6+3 "off hand"]
```

### Skill Challenges
```
[1d20+8 dc15 "Stealth"]
[1d20+12 dc20 "Acrobatics"]
[1d20+5 dc?? "Perception"]
```

## Tips and Best Practices

1. **Use Descriptions**: Always label your rolls for clarity
2. **Combine Related Rolls**: Group attack and damage together
3. **Leverage Game Rules**: Let the bot handle critical hits automatically
4. **Use Appropriate Format**: Choose output size based on channel usage
5. **Secret Rolls**: Use for GM rolls that shouldn't be seen by players
6. **Test Complex Rolls**: Use fixed values to verify complicated expressions

The dice system is designed to handle the complexity of modern tabletop RPGs while remaining intuitive for basic use. Experiment with different combinations to find what works best for your game!

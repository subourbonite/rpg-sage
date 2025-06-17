# Weather and Calendar System

RPG Sage includes a comprehensive weather generation system designed for tabletop RPGs, particularly Pathfinder 2E. The system generates realistic weather patterns based on climate, elevation, season, and other environmental factors, and integrates with custom calendar systems for different game worlds.

## Weather Generation

### Basic Weather Commands

**Generate Random Weather**
```
sage! weather [climate="Temperate"] [elevation="Lowland"] [season="Spring"]
```
- Generates weather for a single day
- Uses realistic weather tables and patterns
- Shows temperature (Fahrenheit and Celsius), precipitation, wind, and cloud cover

**Weather Export**
```
sage! weather export="day|week|month|year" [delimiter=",|\t"] [climate="Temperate"] [elevation="Lowland"] [season="Spring"]
```
- Exports weather data to CSV or TSV format
- Includes hourly breakdowns and detailed meteorological data
- Perfect for campaign planning and long-term weather tracking

### Climate Types

RPG Sage supports three major climate types based on real-world geography:

#### Cold Climate
- Found in polar regions (>60° latitude)
- Temperature ranges: 20°F winter, 30°F spring/fall, 40°F summer
- Reduced precipitation frequency due to dry air
- Examples: Arctic tundra, polar regions

#### Temperate Climate
- Located between polar and tropical regions (30-60° latitude)
- Temperature ranges: 30°F winter, 60°F spring/fall, 80°F summer
- Standard precipitation patterns
- Examples: Most of Europe, northern United States

#### Tropical Climate
- Near equatorial regions (±30° latitude)
- Temperature ranges: 50°F winter, 75°F spring/fall, 95°F summer
- Increased precipitation frequency and intensity
- Examples: Central America, Southeast Asia, Central Africa

### Elevation Effects

**Sea Level**
- +10°F temperature modification
- Standard precipitation patterns
- Coastal weather influences

**Lowland** (Default)
- Base temperature and precipitation
- Most common setting for campaigns
- Balanced weather patterns

**Highland**
- -10°F temperature modification
- Reduced precipitation frequency
- Mountain and hill environments

### Seasonal Variations

The weather system supports both temperate and tropical seasonal patterns:

#### Temperate Seasons
- **Winter**: Cold temperatures, reduced precipitation
- **Spring**: Moderate temperatures, intermittent precipitation
- **Summer**: Warm temperatures, common precipitation
- **Fall**: Moderate temperatures, intermittent precipitation

#### Tropical Seasons
- **Wet Season**: Increased precipitation, higher humidity
- **Dry Season**: Reduced precipitation, clearer skies

### Weather Components

#### Temperature
- **High/Low Daily Range**: Realistic temperature swings
- **Hourly Variation**: Temperature changes throughout the day
- **Temperature Modifiers**: Climate, elevation, and weather conditions affect temperature

#### Precipitation
Generated from detailed precipitation tables:

**Intensity Levels**
- **Light**: Light rain, light snow, light fog
- **Medium**: Medium rain, medium snow, medium fog
- **Heavy**: Heavy rain, heavy snow, heavy fog
- **Torrential**: Thunderstorms, blizzards, extreme weather

**Precipitation Types**
- Rain (various intensities)
- Snow (light to heavy)
- Fog (light to heavy)
- Sleet (temperature-dependent)
- Thunderstorms
- Special conditions (blizzards)

#### Wind
- **Light Wind**: Minimal effects
- **Moderate Wind**: Noticeable but manageable
- **Strong Wind**: Affects movement and activities
- **Severe Wind**: Dangerous conditions
- **Windstorm**: Extreme wind conditions

#### Cloud Cover
- **Clear**: No cloud cover
- **Partly Cloudy**: Light cloud cover
- **Cloudy**: Medium cloud cover
- **Overcast**: Complete cloud cover

### Advanced Weather Features

#### Multi-Day Weather Patterns
- **Temperature Continuity**: Realistic day-to-day temperature changes
- **Weather Front Simulation**: Weather systems that last multiple days
- **Seasonal Transitions**: Gradual changes between seasons

#### Precipitation Tracking
- **Start Time**: Hour when precipitation begins
- **Duration**: How long precipitation lasts
- **Intensity Variation**: Changes in precipitation intensity
- **Carryover Effects**: Precipitation continuing from previous days

#### Special Weather Events
- **Blizzards**: Heavy snow + severe winds (20% chance)
- **Thunderstorms**: Include special wind patterns
- **Extended Systems**: Weather patterns lasting multiple days

## Calendar Systems

RPG Sage includes calendar support for different game worlds with unique day and month names.

### Pathfinder 2E Calendar (Golarion)

**Months** (Golarion Calendar)
- Abadius, Calistril, Pharast, Gozran
- Desnus, Sarenith, Erastus, Arodus
- Rova, Lamashan, Neth, Kuthona

**Days of the Week**
- Sunday, Moonday, Toilday, Wealday
- Oathday, Fireday, Starday

**Calendar Features**
- 12 months, 28-31 days per month
- 7-day weeks
- Leap year support
- Season tracking

### Starfinder Calendar

**Months** (Same as Pathfinder)
- Uses Golarion month names
- Adapted for space-age setting

**Days of the Week**
- Firstday, Seconday, Thirday, Fourthday
- Fifthday, Sixthday, Seventhday

### Date Calculation

**Year Offsets**
- Pathfinder 2E: +2700 years from Earth calendar
- Starfinder: -1700 years from Earth calendar (far future)

**Season Determination**
- Automatic season calculation based on month
- Hemisphere support (Northern/Southern)
- Tropical vs. temperate season systems

## Weather Export Format

### Data Fields

**Daily Data**
- Elevation, Climate, Desert flag
- Month, Date, Day, Year
- High/Low temperatures
- Cloud cover, precipitation intensity
- Precipitation start hour and duration
- Wind type and description

**Hourly Data**
- Hour (0-23)
- Temperature (Fahrenheit and Celsius)
- Cloud cover status
- Precipitation type
- Wind strength and speed
- Descriptive text

### Export Options

**Time Periods**
- **Day**: Single day with hourly breakdown
- **Week**: 7 days of weather data
- **Month**: Full month (28-31 days)
- **Year**: Complete year (365-366 days)

**File Formats**
- **CSV**: Comma-separated values
- **TSV**: Tab-separated values (default)
- **Custom**: Pipe-delimited or other separators

## Usage Examples

### Campaign Weather Planning

**Generate Monthly Weather**
```
sage! weather export="month" climate="Temperate" season="Winter"
```
Creates a month of winter weather data for campaign planning.

**Tropical Adventure Weather**
```
sage! weather climate="Tropical" elevation="SeaLevel" season="Wet"
```
Generates hot, humid weather with frequent precipitation.

**Mountain Expedition Weather**
```
sage! weather climate="Cold" elevation="Highland" season="Winter"
```
Creates harsh mountain winter conditions.

### Daily Session Weather

**Quick Weather Check**
```
sage! weather
```
Uses current real-world season with temperate, lowland defaults.

**Custom Conditions**
```
sage! weather climate="Tropical" elevation="Highland"
```
High-altitude tropical conditions (cooler but still humid).

## Weather Integration

### Game Master Tools

**Weather Tracking**
- Export year-long weather for consistent campaign weather
- Plan weather-dependent encounters and events
- Create realistic seasonal progression

**Environmental Storytelling**
- Weather affects NPC behavior and activities
- Seasonal festivals and cultural events
- Travel and exploration challenges

### Player Interaction

**Environmental Challenges**
- Cold weather survival checks
- Reduced visibility in fog or storms
- Travel delays due to severe weather
- Equipment considerations for weather

**Atmospheric Enhancement**
- Weather adds immersion to roleplay
- Seasonal mood and tone changes
- Realistic consequences for outdoor activities

## Advanced Features

### Desert Mode

Set `desert=true` in the weather generator to simulate arid climates:
- Drastically reduced precipitation
- Greater temperature swings
- Clear skies most of the time
- Rare but intense weather events

### Weather Persistence

Weather systems can span multiple days:
- Temperature trends continue gradually
- Precipitation systems move through regions
- Wind patterns maintain consistency
- Realistic weather front behavior

### Customization Options

**Climate Modification**
- Adjust base temperatures for unique regions
- Modify precipitation patterns
- Create custom seasonal patterns

**Special Conditions**
- Magical weather effects
- Planar influences on weather
- Supernatural climate zones

## Technical Details

### Weather Tables

The system uses extensive lookup tables based on:
- Pathfinder 2E weather rules
- Real-world meteorological patterns
- Climate science principles
- Game-appropriate randomization

### Temperature Calculation

**Base Temperature**
```
BaseTemp[Climate][Season] + ElevationMod + VariationRoll
```

**Daily Temperature Swings**
- High temperature calculated first
- Low temperature = High - (2d6+3)°F
- Hourly temperatures interpolated between high/low

### Precipitation Logic

**Frequency Determination**
1. Base frequency by climate and season
2. Elevation adjustments
3. Random precipitation test
4. Intensity and duration calculation

**Type Selection**
- Temperature determines frozen vs. unfrozen
- Intensity affects precipitation type options
- Special weather events modify results

The weather and calendar system provides realistic, game-appropriate environmental conditions that enhance storytelling and create immersive campaign experiences.

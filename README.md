# drop-down-min

A lightweight, vanilla JavaScript dropdown component with zero dependencies.

## Installation

```bash
npm install drop-down-min
```

## Usage

1. Import the DropDown class:

```javascript
import DropDown from 'drop-down-min';
```

2. Create the HTML structure:

- Any element with a button and a div container (for drop-down items) as direct children will work.

```html
<ul class="dropdown">
    <button>Show</button>
    <div>
        <!-- Your dropdown content goes here -->
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </div>
</ul>
```

3. Initialize the dropdown:

```javascript
// Basic usage
const dropdown = new DropDown('.dropdown');

// Custom button text
const customDropdown = new DropDown('.dropdown', 'Open', 'Close');
```

## Constructor Options

The DropDown constructor accepts three parameters:

- `selector` (required): CSS selector for the dropdown container
- `inactiveTxt` (optional): Text to show when dropdown is closed (default: "Show")
- `activeTxt` (optional): Text to show when dropdown is open (default: "Hide")

## Important Notes

- This package provides functionality only. No CSS styles are included.
- You'll need to add your own styling to match your design requirements.
- The component requires a specific HTML structure (see Usage section above).


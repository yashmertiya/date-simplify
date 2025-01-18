# Date Format Helper

`date-simplify` is a simple and flexible npm package that allows users to format date strings or timestamps into various patterns. The package supports a wide range of formats and ensures that the date and time are always preserved without adjusting for time zones.

---

## Features

- Format dates and timestamps into multiple customizable patterns.
- Preserve original time and date without adjusting for time zones.
- Works with date strings, timestamps, or the current system time.
- User-friendly and highly customizable.

---

## Installation

Install the package using npm:

```bash
npm install date-simplify
```

---

## Usage

### Importing the Package

```javascript
const DateFormatHelper = require('date-simplify');
```

### Creating a Formatter

You can create a new instance of the `DateFormatHelper` class by providing:
- A valid date string (e.g., `"2025-01-18T10:15:30Z"`)
- A timestamp (e.g., `1737189721075`)
- Nothing (defaults to the current system time)

```javascript
const formatter = new DateFormatHelper("2025-01-18T10:15:30Z");
const timestampFormatter = new DateFormatHelper(1737189721075);
const currentDateFormatter = new DateFormatHelper();
```

---

### Formatting a Date

Call the `format` method with your desired pattern:

```javascript
console.log(formatter.format("dd-mm-yy")); // 18-01-25
console.log(formatter.format("yyyy-mm-dd")); // 2025-01-18
```

### Formatting the Current Date

Use the static method `formatNow` to format the current system time:

```javascript
console.log(DateFormatHelper.formatNow("yyyy-mm-dd hh:mm:ss"));
// Example output: 2025-01-18 10:15:30
```

---

## Supported Date and Time Patterns

Here are the supported placeholders you can use in your patterns:

### Date Patterns
| Placeholder | Description          | Example Output       |
|-------------|----------------------|----------------------|
| `dd`        | Day of the month     | `01` to `31`         |
| `mm`        | Month (numeric)      | `01` to `12`         |
| `yyyy`      | Year (4 digits)      | `2025`               |
| `yy`        | Year (2 digits)      | `25`                 |
| `day`       | Day name             | `Saturday`           |
| `month`     | Month name           | `January`            |

### Time Patterns
| Placeholder   | Description          | Example Output       |
|---------------|----------------------|----------------------|
| `hours`       | Hours (24-hour)      | `00` to `23`         |
| `minutes`     | Minutes              | `00` to `59`         |
| `seconds`     | Seconds              | `00` to `59`         |

### Examples
| Pattern                | Example Output       |
|------------------------|----------------------|
| `dd-mm-yy`             | `18-01-25`          |
| `dd-mm-yyyy`           | `18-01-2025`        |
| `mm-dd-yy`             | `01-18-25`          |
| `mm-dd-yyyy`           | `01-18-2025`        |
| `yyyy-mm-dd`           | `2025-01-18`        |
| `yy-mm-dd`             | `25-01-18`          |
| `day month yyyy`       | `Saturday January 2025` |
| `yyyy month day`       | `2025 January Saturday` |
| `dd mm yyyy hours:minutes:seconds` | `18 01 2025 10:15:30` |

---

## Error Handling

If you provide an invalid date string or timestamp, the package will throw an error:

```javascript
try {
    const invalidFormatter = new DateFormatHelper("invalid-date");
    console.log(invalidFormatter.format("dd mm yy"));
} catch (error) {
    console.error("Error:", error.message);
    // Output: Error: Invalid date input. Please provide a valid timestamp or date string.
}
```

---

## Examples

### Formatting a Timestamp

```javascript
const timestampFormatter = new DateFormatHelper(1737189721075);
console.log(timestampFormatter.format("dd-mm-yyyy hours:minutes:seconds"));
// Example output: 18-01-2025 10:15:30
```

### Formatting the Current Date

```javascript
console.log(DateFormatHelper.formatNow("yyyy-mm-dd"));
// Example output: 2025-01-18
```

### Leap Year Test

```javascript
const leapYearFormatter = new DateFormatHelper("2024-02-29T12:00:00Z");
console.log(leapYearFormatter.format("dd mm yyyy hours:minutes:seconds"));
// Output: 29 02 2024 12:00:00
```

---

## License

This package is licensed under the [MIT License](LICENSE). Feel free to use it in your projects.

---

## Contribution

Contributions are welcome! Please submit issues and pull requests to improve the functionality or add new features.

---

## Support

If you encounter any issues or have suggestions, feel free to reach out or open an issue on the GitHub repository.


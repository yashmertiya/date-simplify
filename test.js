const DateFormatHelper = require('./index');

try {
    console.log("===== Test Cases =====");

    // Test with specific date
    const formatter = new DateFormatHelper("2025-01-18T10:15:30Z");

    console.log(formatter.format("dd-mm-yy")); // 18-01-25
    console.log(formatter.format("day-month-yy")); // Saturday-January-25
    console.log(formatter.format("dd-mm-yyyy")); // 18-01-2025
    console.log(formatter.format("mm-dd-yy")); // 01-18-25
    console.log(formatter.format("mm-dd-yyyy")); // 01-18-2025
    console.log(formatter.format("yyyy-mm-dd")); // 2025-01-18
    console.log(formatter.format("yy-mm-dd hours:minutes")); // 25-01-18 10:15

    // Test without time zone adjustment
    const leapYearFormatter = new DateFormatHelper("2024-02-29T12:00:00Z");
    console.log("\nLeap Year:");
    console.log(leapYearFormatter.format("dd mm yyyy hours:minutes:seconds")); // 29 02 2024 12:00:00 (UTC preserved)

    // Current date
    console.log("\nCurrent Date:");
    console.log(DateFormatHelper.formatNow("dd-mm-yy")); // Current date in dd-mm-yy
    console.log(DateFormatHelper.formatNow("dd-mm-yyyy")); // Current date in dd-mm-yyyy
    console.log(DateFormatHelper.formatNow("mm-dd-yy")); // Current date in mm-dd-yy
    console.log(DateFormatHelper.formatNow("mm-dd-yyyy")); // Current date in mm-dd-yyyy
    console.log(DateFormatHelper.formatNow("yyyy-mm-dd hours:minutes:seconds")); // Current date-time in yyyy-mm-dd hours:minutes:seconds
    console.log(DateFormatHelper.formatNow("day month yyyy hours:minutes")); // Current date with day name, month, and year

    // Invalid date test
    try {
        const invalidFormatter = new DateFormatHelper("invalid-date");
        console.log(invalidFormatter.format("dd mm yy"));
    } catch (error) {
        console.error("Error:", error.message);
    }

    // Test with current timestamp
    console.log("\nCurrent Timestamp:");
    const timestampFormatter = new DateFormatHelper(new Date().getTime());
    const timestamp = new DateFormatHelper(1737189721075);
    console.log("timestampFormatter>>", timestampFormatter);
    console.log(timestampFormatter.format("dd-mm-yy")); // Current date in dd-mm-yy
    console.log(timestampFormatter.format("dd-mm-yyyy hours:minutes:seconds")); // Current date-time
    console.log(timestampFormatter.format("day month yyyy")); // Current date with day name and month
    console.log(timestamp.format("mm/dd/yyyy hours:minutes")); // Current date in mm/dd/yyyy hours:minutes format

} catch (err) {
    console.error("Unexpected Error:", err.message);
}

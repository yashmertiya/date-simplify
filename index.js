class DateFormatHelper {
    constructor(dateInput) {
        if (!dateInput) {
            this.date = new Date(); // Use the current date if no input is provided
        } else if (typeof dateInput === 'string' || typeof dateInput === 'number') {
            this.date = new Date(dateInput);
        } else {
            throw new Error("Invalid date input. Please provide a valid timestamp or date string.");
        }

        if (isNaN(this.date.getTime())) {
            throw new Error("Invalid date input. Please provide a valid timestamp or date string.");
        }
    }

    format(pattern) {
        const day = this.date.getUTCDate().toString().padStart(2, '0');
        const month = (this.date.getUTCMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const year = this.date.getUTCFullYear();
        const shortYear = year.toString().slice(-2);
        const hours = this.date.getUTCHours().toString().padStart(2, '0');
        const minutes = this.date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = this.date.getUTCSeconds().toString().padStart(2, '0');

        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return pattern
            .replace(/yyyy/g, year)
            .replace(/yy/g, shortYear)
            .replace(/dd/g, day)
            .replace(/mm/g, month) // Month
            .replace(/hours/g, hours) // Explicit hours
            .replace(/minutes/g, minutes) // Explicit minutes
            .replace(/seconds/g, seconds) // Explicit seconds
            .replace(/day/g, dayNames[this.date.getUTCDay()])
            .replace(/month/g, monthNames[this.date.getUTCMonth()]);
    }

    static now() {
        return new Date();
    }

    static formatNow(pattern) {
        return new DateFormatHelper(Date.now()).format(pattern);
    }
}

module.exports = DateFormatHelper;

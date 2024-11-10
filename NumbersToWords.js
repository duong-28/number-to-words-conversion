const NumbersToWords = {
    units: ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    teens: ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    tens: ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    thousands: ["", "thousand"],

    convert: function(number) {
        if (number < 0 || number > 9999) {
            return "Number out of range";
        }

        // Handle zero
        if (number === 0) {
            return "Zero";
        }

        let words = "";

        // Handle thousands
        let thousandPlace = Math.floor(number / 1000);
        if (thousandPlace > 0) {
            words += this.units[thousandPlace] + " thousand ";
            number %= 1000;
        }

        // Handle hundreds
        let hundreds = Math.floor(number / 100);
        if (hundreds > 0) {
            words += this.units[hundreds] + " hundred ";
            number %= 100;
        }

        // Handle tens and units
        if (number >= 10 && number < 20) {
            words += this.teens[number - 10];
        } else {
            let tensPlace = Math.floor(number / 10);
            let unitsPlace = number % 10;
            if (tensPlace > 0) {
                words += this.tens[tensPlace] + " ";
            }
            if (unitsPlace > 0) {
                words += this.units[unitsPlace];
            }
        }

        return words.trim();
    }
};

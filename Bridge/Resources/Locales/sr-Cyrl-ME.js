﻿Bridge.merge(new System.Globalization.CultureInfo("sr-Cyrl-ME", true), {
    englishName: "Serbian (Cyrillic, Montenegro)",
    nativeName: "српски (Црна Гора)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-бесконачност",
        positiveInfinitySymbol: "+бесконачност",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["нед","пон","уто","сри","чет","пет","суб"],
        abbreviatedMonthGenitiveNames: ["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""],
        abbreviatedMonthNames: ["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["недеља","понедјељак","уторак","сриједа","четвртак","петак","субота"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d. MMMM yyyy. H:mm:ss",
        longDatePattern: "d. MMMM yyyy.",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],
        monthNames: ["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy.",
        shortestDayNames: ["не","по","ут","ср","че","пе","су"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy.",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

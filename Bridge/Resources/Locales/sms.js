﻿Bridge.merge(new System.Globalization.CultureInfo("sms", true), {
    englishName: "Sami (Skolt)",
    nativeName: "sää´mǩiõll",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["pâ","vu","mâ","se","ne","pi","su"],
        abbreviatedMonthGenitiveNames: ["ođđee´jjmannu","tä´lvvmannu","pâ´zzlâšttam-mannu","njuhččmannu","vue´ssmannu","ǩie´ssmannu","suei´nnmannu","på´rǧǧmannu","čõhččmannu","kålggmannu","skamm-mannu","rosttovmannu",""],
        abbreviatedMonthNames: ["ođđee´jjmään","tä´lvvmään","pâ´zzlâšttam-mään","njuhččmään","vue´ssmään","ǩie´ssmään","suei´nnmään","på´rǧǧmään","čõhččmään","kålggmään","skamm-mään","rosttovmään",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["pâ´sspei´vv","vuõssargg","mââibargg","seärad","neljdpei´vv","piâtnâc","sue´vet"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "MMMM d'. p. 'yyyy H:mm:ss",
        longDatePattern: "MMMM d'. p. 'yyyy",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "MMMM d'. p. '",
        monthGenitiveNames: ["ođđee´jjmannu","tä´lvvmannu","pâ´zzlâšttam-mannu","njuhččmannu","vue´ssmannu","ǩie´ssmannu","suei´nnmannu","på´rǧǧmannu","čõhččmannu","kålggmannu","skamm-mannu","rosttovmannu",""],
        monthNames: ["ođđee´jjmään","tä´lvvmään","pâ´zzlâšttam-mään","njuhččmään","vue´ssmään","ǩie´ssmään","suei´nnmään","på´rǧǧmään","čõhččmään","kålggmään","skamm-mään","rosttovmään",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d.M.yyyy",
        shortestDayNames: ["pâ","v","m","s","n","pi","s"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

﻿Bridge.merge(new System.Globalization.CultureInfo("ar-JO", true), {
    englishName: "Arabic (Jordan)",
    nativeName: "العربية (الأردن)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "ليس برقم",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-لا نهاية",
        positiveInfinitySymbol: "+لا نهاية",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 3,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "د.ا.‏",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 3,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 3,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 3,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 3
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
        abbreviatedMonthGenitiveNames: ["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],
        abbreviatedMonthNames: ["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],
        amDesignator: "ص",
        dateSeparator: "/",
        dayNames: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dd MMMM, yyyy hh:mm:ss tt",
        longDatePattern: "dd MMMM, yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],
        monthNames: ["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],
        pmDesignator: "م",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ح","ن","ث","ر","خ","ج","س"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

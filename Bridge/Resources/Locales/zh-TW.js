﻿Bridge.merge(new System.Globalization.CultureInfo("zh-TW", true), {
    englishName: "Chinese (Traditional, Taiwan)",
    nativeName: "中文(台灣)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "不是一個數字",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "負無窮大",
        positiveInfinitySymbol: "正無窮大",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "NT$",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["週日","週一","週二","週三","週四","週五","週六"],
        abbreviatedMonthGenitiveNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
        abbreviatedMonthNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
        amDesignator: "上午",
        dateSeparator: "/",
        dayNames: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy'年'M'月'd'日' tt hh:mm:ss",
        longDatePattern: "yyyy'年'M'月'd'日'",
        longTimePattern: "tt hh:mm:ss",
        monthDayPattern: "M'月'd'日'",
        monthGenitiveNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
        monthNames: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
        pmDesignator: "下午",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy/M/d",
        shortestDayNames: ["日","一","二","三","四","五","六"],
        shortTimePattern: "tt hh:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy'年'M'月'",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

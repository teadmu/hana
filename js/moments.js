const moment = require("moment");
const a = moment().format("LLLL"); // Tuesday, August 30, 2022 4:45 PM    ⇐⇒ .format('llll')
console.log("🚀 ~ a:", a);
moment().format("MMM MMMM Do D DD"); // Aug August 1st 1 01
moment.locale("ko"); // format ⇒ 2022년 8월 30일 화요일 오후 4:45
const b = moment().format("MMM MMMM Do D DD"); // 8월 8월 1일 1 01
console.log("🚀 ~ b:", b);
const d0 = new Date(0);
const m = moment("2022-12-04");
const fnow = m.fromNow();
console.log("🚀 ~ fnow:", fnow);
//return ;
//moment(d0).tz("America/Los_Angeles").format("LLL"); // 1969년 12월 31일 오후 4:00
const x = moment().format("YYYY-MM-DD HH:mm:ss"); //
console.log("🚀 ~ x:", x);
moment().format("YYYY-MM-DD HH:mm:ss (dd)"); //
moment().format("YYYY-MM-DD HH:mm:ss (dddd)"); //
moment().format("YY-M-D"); //
moment().format("h:mm a"); //       cf.'a h시 mm분'

moment().startOf("years"); // cf. endOf()
moment().add(3, "days"); // cf. subtract()
const d = moment().diff(moment("1973-10-05"), "M"); // 586
console.log("🚀 ~ d:", d);
moment(new Date(0)).fromNow(); // 53년 전

const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(moment().format("MMMM Do ,YYYY h:mm:ss "));

console.log(day1);
console.log(moment().format("      M월 YYYY"));
console.log("일 월 화 수 목 금 토 일");
const str = "1";
console.log(str.padStart(day1 * 4, " ") + "  1");

console.log();
const c = moment().add(1, "days").calendar();
const arr = [7][7];

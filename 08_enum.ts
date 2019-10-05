enum DaysOfTheWeek {
  SUN = 100,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT
}

let day: DaysOfTheWeek;

day = DaysOfTheWeek.FRI;

if (day === DaysOfTheWeek.FRI) {
  console.log("Time to get some rest!");
}

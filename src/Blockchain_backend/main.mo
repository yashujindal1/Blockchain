actor {
  type TimeData = {
    day : Nat32;
    month : Nat32;
    year : Nat32;
  };

  type TimeDataInput = {
    date : Nat32;
    month : Nat32;
    year : Nat32;
  };

  public func ageCalculate(currentData : TimeDataInput, birthData : TimeDataInput) : async TimeData {
    var years = currentData.year - birthData.year;
    var months : Nat32 = 0;
    var days : Nat32 = 0;

    if (currentData.month >= birthData.month) {
      months := currentData.month - birthData.month;
    } else {
      months := birthData.month - currentData.month;
      years -= 1;
      months := 12 - months;
    };

    if (currentData.date >= birthData.date) {
      days := currentData.date - birthData.date;
    } else {
      days := birthData.date - currentData.date;
      days := days + (30 - currentData.date);
      months -= 1;
    };

    var data = {
      day = days;
      month = months;
      year = years;
    };
    return data;
  };
};
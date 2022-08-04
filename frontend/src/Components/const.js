export const getCalorie = (sex, age, weight) => {
  if (sex === "男性" && age >= 50) {
    const cal = Math.floor(21.5 * weight);
    return cal;
  } else if (sex === "女性" && age >= 50) {
    const cal = Math.floor(20.7 * weight);
    return cal;
  } else if (sex === "男性" && age >= 30 && age <= 49) {
    const cal = Math.floor(22.3 * weight);
    return cal;
  } else if (sex === "女性" && age >= 30 && age <= 49) {
    const cal = Math.floor(21.7 * weight);
    return cal;
  } else if (sex === "男性" && age >= 18 && age <= 29) {
    const cal = Math.floor(24.0 * weight);
    return cal;
  } else if (sex === "女性" && age >= 18 && age <= 29) {
    const cal = Math.floor(22.1 * weight);
    return cal;
  } else if (sex === "男性" && age >= 15 && age <= 17) {
    const cal = Math.floor(27.0 * weight);
    return cal;
  } else if (sex === "女性" && age >= 15 && age <= 17) {
    const cal = Math.floor(25.3 * weight);
    return cal;
  } else if (sex === "男性" && age >= 12 && age <= 14) {
    const cal = Math.floor(31.0 * weight);
    return cal;
  } else if (sex === "女性" && age >= 12 && age <= 14) {
    const cal = Math.floor(29.6 * weight);
    return cal;
  } else if (sex === "男性" && age >= 10 && age <= 11) {
    const cal = Math.floor(37.4 * weight);
    return cal;
  } else if (sex === "女性" && age >= 10 && age <= 11) {
    const cal = Math.floor(34.8 * weight);
    return cal;
  } else if (sex === "男性" && age >= 8 && age <= 9) {
    const cal = Math.floor(40.8 * weight);
    return cal;
  } else if (sex === "女性" && age >= 8 && age <= 9) {
    const cal = Math.floor(38.3 * weight);
    return cal;
  } else if (sex === "男性" && age >= 6 && age <= 7) {
    const cal = Math.floor(44.3 * weight);
    return cal;
  } else if (sex === "女性" && age >= 6 && age <= 7) {
    const cal = Math.floor(41.9 * weight);
    return cal;
  } else if (sex === "男性" && age >= 3 && age <= 5) {
    const cal = Math.floor(54.8 * weight);
    return cal;
  } else if (sex === "女性" && age >= 3 && age <= 5) {
    const cal = Math.floor(52.2 * weight);
    return cal;
  } else if (sex === "男性" && age >= 1 && age <= 2) {
    const cal = Math.floor(61.0 * weight);
    return cal;
  } else if (sex === "女性" && age >= 1 && age <= 2) {
    const cal = Math.floor(59.7 * weight);
    return cal;
  }
};

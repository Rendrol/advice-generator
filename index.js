$(window).on("load", function () {
  $.get("https://api.adviceslip.com/advice", function (data) {
    const advice = JSON.parse(data).slip.advice;
    const adviceId = JSON.parse(data).slip.id;
    console.log(adviceId);
  });
});

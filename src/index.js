import axios from "axios";

document.getElementById("verify-btn").addEventListener("click", function () {
  var phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);

  var config = {
    method: "get",
    url:
      "https://api.p.2chat.io/open/whatsapp/check-number/+5491126948581/+54" +
      phoneNumber,
    headers: {
      "X-User-API-Key": "UAKc82d972c-8fb1-4b2e-8927-c0a595365b33"
    }
  };

  axios(config)
    .then(function (response) {
      var resultElement = document.getElementById("result");
      resultElement.textContent = JSON.stringify(response.data);
    })
    .catch(function (error) {
      var resultElement = document.getElementById("result");
      console.log(error);
      resultElement.textContent = error;
    });
});

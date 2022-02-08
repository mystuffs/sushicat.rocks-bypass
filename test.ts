import updatePatCount from ".";

(async () => {
    console.log(await updatePatCount("wory48", 2));
    // Response string cames with the response data which you can grab from browser, see network payloads.
    // The cookie which is being used isn't Google recaptcha cookie, it's the cookie which is been used to identify the user access. You can grab yet new cookie after manually submiting the request and see "pat" object request header for the cookie.
})();

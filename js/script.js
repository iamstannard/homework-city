/*global document, $, console*/

(function () {
    'use strict';

    // wait for document to be ready
    $(document).ready(function () {

        var cityInputField = $('#city-type'),
            pageBG = $('body'),
            currentBGClass;

        // remove current class and replace with new class
        function switchBGClasses(newBGClass) {
            pageBG.removeClass(currentBGClass);
            pageBG.addClass(newBGClass);
            currentBGClass = newBGClass;
        }

        function updateBGImage(e) {

            e.preventDefault();

            // get input city name
            // trim any spaces at begining/end
            // convert to lowercase
            var city = cityInputField.val(),
                cityTrim = $.trim(city),
                cityLower = cityTrim.toLowerCase();

            // test (lowercase) input city name against list of (lowercase) city name variations
            switch (cityLower) {
            case 'new york':
            case 'new york city':
            case 'nyc':
            case 'ny':
                switchBGClasses('nyc');
                break;
            case 'san francisco':
            case 'sf':
            case 'bay area':
                switchBGClasses('sf');
                break;
            case 'los angeles':
            case 'la':
            case 'lax':
                switchBGClasses('la');
                break;
            case 'austin':
            case 'atx':
                switchBGClasses('austin');
                break;
            case 'sydney':
            case 'syd':
                switchBGClasses('sydney');
                break;
            default:
                //do nothing
            }

            // clear input field to reset placeholder text
            cityInputField.val('');

        }

        // listen for button click
        $('#submit-btn').click(updateBGImage);

    });

}());
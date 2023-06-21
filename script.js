//your JS code here. If required.
function updateTimer() {
            var timerElement = document.getElementById("timer");
            var currentDate = new Date();

            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1; // Month starts from 0
            var year = currentDate.getFullYear();

            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();

            var time = hours + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
            var date = addLeadingZero(day) + "/" + addLeadingZero(month) + "/" + year;

            timerElement.textContent = "Current Time: " + time + " | Date: " + date;
        }

        // Function to add a leading zero for numbers less than 10
        function addLeadingZero(number) {
            return number < 10 ? "0" + number : number;
        }

        // Update the timer initially
        updateTimer();

        // Update the timer every second (1000 milliseconds)
        setInterval(updateTimer, 1000);




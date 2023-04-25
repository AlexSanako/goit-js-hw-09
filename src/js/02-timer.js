import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      startButton.addEventListener('click', () => {
        clearInterval(intervalId);
        const countdownDate = selectedDate.getTime();
        intervalId = setInterval(() => {
          const now = new Date().getTime();
          const distance = countdownDate - now;
          if (distance < 0) {
            clearInterval(intervalId);
            daysValue.textContent = '00';
            hoursValue.textContent = '00';
            minutesValue.textContent = '00';
            secondsValue.textContent = '00';
            return;
          }
          const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, '0');
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
            .toString()
            .padStart(2, '0');
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          )
            .toString()
            .padStart(2, '0');
          const seconds = Math.floor((distance % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, '0');
          daysValue.textContent = days;
          hoursValue.textContent = hours;
          minutesValue.textContent = minutes;
          secondsValue.textContent = seconds;
        }, 1000);
      });
    }
  },
};

flatpickr(datetimePicker, options);

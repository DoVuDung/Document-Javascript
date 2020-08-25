const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 8;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 8;
        case 'friday':
            return 8;
        case 'saturday':
            return 8;
        case 'sunday':
            return 8;
        default:
            return 'Error';

    }
};
const getActualSleepHours = () => {
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thusday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());
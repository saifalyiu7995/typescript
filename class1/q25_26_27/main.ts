//################################### Question 25, 26 and 27 ###################################

let alien_color = 'Red';

checkAlienColor(alien_color, 1);

checkAlienColor(alien_color, 2);
alien_color = 'Green';
checkAlienColor(alien_color, 2);
alien_color = 'Yellow';
checkAlienColor(alien_color, 2);

function checkAlienColor(input, version) {
    if (version === 1) {
        if (alien_color == 'Green') {
            console.log('User earned 5 points');
        }
    } else if (version === 2) {
        if (alien_color == 'Green') {
            console.log('User earned 5 points');
        } else if (alien_color == 'Red') {
            console.log('User earned 15 points');
        } else {
            console.log('User earned 10 points');
        }
    }

}

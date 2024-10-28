
const themeName = document.getElementById('theme');

function changeTheme() {

    const radioButtons = document.querySelectorAll('input[name = "choice"]');
    var selectedValue = '';

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break;
        }
    }
    if (selectedValue == "October") {
        themeName.className = 'october';
    }
    else if (selectedValue == "November") {
        themeName.className = 'november';
    }
    else {
        themeName.className = 'none';
    }
};
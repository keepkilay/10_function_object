
window.onload = function()
{
    generatePage();
};


function innerPersonToPage(initPerson){
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.dateBirthday;
    document.getElementById('patronyMic').innerText = initPerson.patronyMic;
    document.getElementById('workPerson').innerText = initPerson.work;
};

function clearPage() {
    const initPerson = personGenerator.getPerson(true);
    innerPersonToPage(initPerson);
};

function generatePage() {
    const initPerson = personGenerator.getPerson();
    innerPersonToPage(initPerson);
};




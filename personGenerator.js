const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{ 
        "count": 10,
        "list": {     
            "id_1": "Виктория",
            "id_2": "Ксения",
            "id_3": "Анастасия",
            "id_4": "Алина",
            "id_5": "Екатерина",
            "id_6": "Злата",
            "id_7": "Мишель",
            "id_8": "Олеся",
            "id_9": "Валентина",
            "id_10": "Юлия"
        }
    }`,
    workWomen: `{ 
        "count": 5,
        "list": {     
            "id_1": "Косметолог",
            "id_2": "Секретарь",
            "id_3": "Инструктор по йоге",
            "id_4": "Горничная",
            "id_5": "Стюардесса"
        }
    }`,
    workMan: `{ 
        "count": 5,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Механик",
            "id_3": "Инженер",
            "id_4": "Дворник",
            "id_5": "Пилот"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {

        if (this.person.gender == 'Женщина') {
            var name = this.randomValue(this.firstNameFemaleJson);
        } else {
            var name = this.randomValue(this.firstNameMaleJson);
        }
        return name;

    },

    randomPatronyMic: function () {
        if (this.person.gender == 'Женщина') {
            var pName = this.randomValue(this.firstNameMaleJson);
            if(pName.endsWith('ий')){
                return pName.replace('ий','иевна');
            };
            if(pName.endsWith('а')){
                return pName.replace('а','ична');
            };
            if(pName.endsWith('ей')){
                return pName.replace('ей','еевна');
            };
            if(pName.endsWith('р')){
                return pName.replace('р','ровна');
            };
            if(pName.endsWith('л')){
                return pName.replace('л','ловна');
            };
            if(pName.endsWith('м')){
                return pName.replace('м','мовна');
            };
            if(pName.endsWith('н')){
                return pName.replace('н','новна');
            };
        } else {
            var pName = this.randomValue(this.firstNameMaleJson);
            if(pName.endsWith('ей')){
                return pName.replace('ей','еевич');
            };
            if(pName.endsWith('ий')){
                return pName.replace('ий','иевич');
            };
            if(pName.endsWith('а')){
                return pName.replace('а','ович');
            };
            if(pName.endsWith('л')){
                return pName.replace('л','лович');
            };
            if(pName.endsWith('м')){
                return pName.replace('м','мович');
            };
            if(pName.endsWith('р')){
                return pName.replace('р','рович');
            };
            if(pName.endsWith('н')){
                return pName.replace('н','нович');
            };
        } 
        return pName; 
    },

    randomSurname: function () {

        var surname = this.randomValue(this.surnameJson);
        if (this.person.gender == 'Женщина') {
            surname = surname + 'а';
        }
        return surname;


    },

    randomGender: function () {
    
        if (Math.random() < 0.5) {
            var gender = this.GENDER_MALE;
        } else {
            var gender = this.GENDER_FEMALE;
        }

        if (gender === this.GENDER_FEMALE) {
            return 'Женщина';
        } else {
            return 'Мужчина';
        }
        
    },
    
    generateRandomDate: function (date1, date2) {

        function randomValueBetween(min, max) {
            return Math.random() * (max - min) + min;
        }
        var date1 = date1 || '01-01-1970';
        var date2 = date2 || new Date().toLocaleDateString();
        date1 = new Date(date1).getTime();
        date2 = new Date(date2).getTime();

        if (date1 > date2) {
            return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
        } else {
            return new Date(randomValueBetween(date1, date2)).toLocaleDateString();
        }
    },

    randomWorkPerson: function () {        
        if (this.person.gender == 'Женщина') {
            var workAll = this.randomValue(this.workWomen);
        } else {
            var workAll = this.randomValue(this.workMan);
        }
        return workAll;
       
    },


    getPerson: function (clear = false) {
        this.person = {}; // person - новый пусток ОБЬЕКТ 

        if (clear == true) {
            this.person.gender = '';
            this.person.firstName = '';// к ОБЬЕКТУ "person" вкладывается свойство "firstname"
            this.person.surName = '';
            this.person.patronyMic = '';
            this.person.dateBirthday = '';
            this.person.work = '';
        } else {
            this.person.gender = this.randomGender();
            this.person.firstName = this.randomFirstName();// к ОБЬЕКТУ "person" вкладывается свойство "firstname"
            this.person.surName = this.randomSurname();
            this.person.patronyMic = this.randomPatronyMic();
            this.person.dateBirthday = this.generateRandomDate('01/01/1970', '01/01/2000');
            this.person.work = this.randomWorkPerson();
        };


        console.log(this.person);
        return this.person;

    }
};



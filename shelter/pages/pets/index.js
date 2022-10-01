const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.jpg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];
let card = document.querySelectorAll('.card');
const cardsCont = document.querySelector('.cards-cont');
const allPagesPetsFunc = () => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
        pets.sort(() => Math.random() - 0.5);
        for (let j = 0; j < pets.length; j++) {
            arr.push(pets[j]);
        }
    }
    return arr;
}
const allPagesPets = allPagesPetsFunc();

function main(num, num2) {
	cardsCont.innerHTML = '';
    const lala = () => {
        for (let i = num; i <= num2; i++) {
            cardsCont.innerHTML += `
            <div class="card">
                <img src="${allPagesPets[i].img}" alt="" class="img-card">
                <div class="name">${allPagesPets[i].name}</div>                    
                <button class="learn-more nans">Learn more</button>
            </div>
            `;
        }
    };
    lala();
    card = document.querySelectorAll('.card');
    card.forEach((el) => el.addEventListener('click', openModal));
}

main(0, 7);

const nextBtn = document.querySelector('.next-ar');
const prevBtn = document.querySelector('.prev-ar');
const nextAllBtn = document.querySelector('.next-all-ar');
const prevAllBtn = document.querySelector('.prev-all-ar');
const navigNum = document.querySelector('.navig-num');

nextBtn.addEventListener('click', () => {
    if (+navigNum.textContent !== 5) {
		main(+navigNum.textContent * 8, +navigNum.textContent * 8 + 7);
		navigNum.innerHTML = `${+navigNum.textContent + 1}`;
		prevBtn.removeAttribute('disabled');
		prevAllBtn.removeAttribute('disabled');
	} else {
		main(+navigNum.textContent * 8, +navigNum.textContent * 8 + 7);
		navigNum.innerHTML = `${+navigNum.textContent + 1}`;
		nextBtn.setAttribute('disabled', '');
		nextAllBtn.setAttribute('disabled', '');
	}
    card = document.querySelectorAll('.card');
});

prevBtn.addEventListener('click', () => {
	if (+navigNum.textContent !== 2) {
		main(+navigNum.textContent * 8 - 16, +navigNum.textContent * 8 - 9);
		navigNum.innerHTML = `${+navigNum.textContent - 1}`;
		nextBtn.removeAttribute('disabled');
		nextAllBtn.removeAttribute('disabled');
	} else {
		main(+navigNum.textContent * 8 - 16, +navigNum.textContent * 8 - 9);
		navigNum.innerHTML = `${+navigNum.textContent - 1}`;
		prevBtn.setAttribute('disabled', '');
		prevAllBtn.setAttribute('disabled', '');
	}
    card = document.querySelectorAll('.card');
});

nextAllBtn.addEventListener('click', () => {
	main(40, 47);
	navigNum.innerHTML = '6';
	nextBtn.setAttribute('disabled', '');
	nextAllBtn.setAttribute('disabled', '');
	prevBtn.removeAttribute('disabled');
	prevAllBtn.removeAttribute('disabled');
});

prevAllBtn.addEventListener('click', () => {
	main(0, 7);
	navigNum.innerHTML = '1';
	prevBtn.setAttribute('disabled', '');
	prevAllBtn.setAttribute('disabled', '');
	nextBtn.removeAttribute('disabled');
	nextAllBtn.removeAttribute('disabled');
});


const adMemuBtn = document.querySelector('.menu');
const overflow = document.querySelector('.overflow');
const html = document.querySelector('html');
const menu = document.querySelector('ul');
const menuLi = document.querySelectorAll('li');
const header = document.querySelector('.header-container');
let num = 0;

function adMenuOpen() {
    if (num % 2 == 0) {
        menu.style.right = '0';
        overflow.style.right = '0';
        header.style.position = 'fixed';
        html.classList.add('html');
        num++;
        adMemuBtn.style.transform = 'rotate(90deg)';
    } else {
        menu.style.right = '-320px';
        overflow.style.right = '-100%';
        html.classList.remove('html');
        adMemuBtn.style.transform = 'rotate(0deg)';
        num++;
    }
}
function adMenuClose() {
    menu.style.right = '-320px';
    overflow.style.right = '-100%';
    html.classList.remove('html');
    adMemuBtn.style.transform = 'rotate(0deg)';
    num++;
}
adMemuBtn.addEventListener('click', adMenuOpen);
menuLi.forEach((el) => el.addEventListener('click', adMenuClose));
overflow.addEventListener('click', adMenuClose);


// modalWindow
const modalWindow = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-button');
const petName = document.querySelector('.pet-name');
const petImage = document.querySelector('.image');
const petAge = document.querySelector('.span-li-age');
const petInocul = document.querySelector('.span-li-ino');
const petDis = document.querySelector('.span-li-dis');
const petParas = document.querySelector('.span-li-par');
const petBreed = document.querySelector('.breed');
const petDescription = document.querySelector('.description');

function openModal() {
    const thisCard = this.children[1].textContent;
    for (let i = 0; i < pets.length; i++) {
        if (thisCard === pets[i].name) {
            modalWindow.style.display = 'block';
            petName.innerHTML = `${pets[i].name}`;
            petImage.src = `${pets[i].img}`;
            petBreed.innerHTML = `${pets[i].breed}`;
            petDescription.innerHTML = `${pets[i].description}`;
            petAge.innerHTML = `${pets[i].age}`;
            petParas.innerHTML = `${pets[i].parasites}`;
            petDis.innerHTML = `${pets[i].diseases}`;
            petInocul.innerHTML = `${pets[i].inoculations}`;
        }
    }
    overflow.style.right = '0';
    html.classList.add('html');
}
card.forEach((el) => el.addEventListener('click', openModal));

function closeModal() {
    modalWindow.style.display = 'none';
    overflow.style.right = '-100%';
    html.classList.remove('html');
}
overflow.addEventListener('click', closeModal);
modalBtn.addEventListener('click', closeModal);
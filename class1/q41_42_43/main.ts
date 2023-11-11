let magicianList: string[] = ['Nabeel', 'Ammar', 'Osama', 'Saif', 'Rehan'];
let magicianListCopy: string[] = [];

function show_magicians(magicians: string[]) {

    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

show_magicians(magicianList);

function make_great() {
    magicianListCopy = magicianList.map((e) => `The Great ${e}`);
}

make_great();
show_magicians(magicianList);
show_magicians(magicianListCopy);
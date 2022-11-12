/*
    Kata Task
    How many deaf rats are there?

    Legend
    P = The Pied Piper
    O~ = Rat going left
    ~O = Rat going right

    Example
    ex1 ~O~O~O~O P has 0 deaf rats
    ex2 P O~ O~ ~O O~ has 1 deaf rat
    ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

const countDeafRats = town => {
    let count = 0;
    const [ratsL, ratsR] = town.split("P").reduce((acc, cur) => {
        const res = acc.concat(cur.match(/O+~|~O+/gm));
        return res;
    }, []);

    ratsL.concat(ratsR).forEach((rat, idx) => {
        const piperLeft = idx > ratsL.length - 1;
        const from = piperLeft ? rat[0] === "~" : rat[rat.length - 1] === "~";
        count++;
    });

    return count;
};

console.log(countDeafRats("~O~O~O~O P"));

/*
	Each element in the periodic table has a symbol associated with it. 
	For instance, the symbol for the element Yttrium is Y. 
	A fun thing to do is see if we can form words using symbols of elements strung together. 
	The symbol for Einsteinium is Es, so the symbols for Yttrium and Einsteinium together form:

	Y + Es = YEs

	Yes! Ignoring capitalization, we can think of any string of letters formed by 
	the concatenation of one or more element symbols as an elemental word -- per the above,yes is 
	an elemental word. There is only one combination of element symbols that can form yes, but in general, there 
	may be more than one combination of element symbols that can form a given elemental word. Let's call each 
	different combination of element symbols that can form a given elemental word word an elemental form of word.

	Your task is to implement the function elementalForms(word), which takes one parameter (the string word), 
	and returns an array (which we'll call forms). If word can be formed by combining element symbols from 
	the periodic table, then forms should contain one or more sub-arrays, each consisting of strings of the 
	form 'elementName (elementSymbol)', for each unique combination of elements that can form word.

	Example
	The word 'snack' can be formed by concatenating the symbols of 3 different combinations of elements:

	----------------------------------------------------
	|       1        |       2        |       3        |
	|---------------------------------------------------
	| Sulfur    (S)  | Sulfur    (S)  | Tin       (Sn) |
	| Nitrogen  (N)  | Sodium    (Na) | Actinium  (Ac) |
	| Actinium  (Ac) | Carbon    (C)  | Potassium (K)  |
	| Potassium (K)  | Potassium (K)  |                |
	----------------------------------------------------
	So elementalForms('snack') should return the following array:

	[
	['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
	['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
	['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
	]
	Guidelines
	Symbols can have length 1, 2 or 3 (this kata uses pre-2016 temporary symbols for elements 113, 115, 117 and 118).
	Capitalization does not matter:
	elementalForms('beach') => [ ['Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)'] ]
	elementalForms('BEACH') => [ ['Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)'] ]

	The order of the returned sub-arrays does not matter, but the order of the 
	strings within each sub-array does matter -- they should be in the order that "spells out" word.
	If word is not an elemental word (that is, no combination of one or more element symbols can form word), return an empty array.
	You do not need to check the type of word. It will always be a (possibly empty) string.
	Finally, the helper object ELEMENTS has been provided, which is a map 
	from each element symbol to its corresponding full name (e.g. ELEMENTS['Na'] === 'Sodium').
*/

const elements = {
    Uut: "Ununtrium",
    Uup: "ununpentium",
    Uup: "ununseptium",
    Uus: "ununoctium",
    H: "Hydrogenium",
    He: "Helium",
    Li: "Lithium",
    Be: "Beryllium",
    B: "Borum",
    C: "Carboneum",
    N: "Nitrogenium",
    O: "Oxygenium",
    F: "Fluorum",
    Ne: "Neon",
    Na: "Natrium",
    Mg: "Magnesium",
    Al: "Aluminium",
    Si: "Silicium",
    P: "Phosphorus",
    S: "Sulfur",
    Cl: "Chlorum",
    Ar: "Argon",
    K: "Kalium",
    Ca: "Calcium",
    Sc: "Scandium",
    Ti: "Titanium",
    V: "Vanadium",
    Cr: "Chromium",
    Mn: "Manganum",
    Fe: "Ferrum",
    Co: "Cobaltum",
    Ni: "Niccolum",
    Cu: "Cuprum",
    Zn: "Zincum",
    Ga: "Gallium",
    Ge: "Germanium",
    As: "Arsenicum",
    Se: "Selenium",
    Br: "Bromum",
    Kr: "Krypton",
    Rb: "Rubidium",
    Sr: "Strontium",
    Y: "Yttrium",
    Zr: "Zirconium",
    Nb: "Niobium",
    Mo: "Molybdaenum",
    Tc: "Technetium",
    Ru: "Ruthenium",
    Rh: "Rhodium",
    Pd: "Palladium",
    Ag: "Argentum",
    Cd: "Cadmium",
    In: "Indium",
    Sn: "Stannum",
    Sb: "Stibium",
    Te: "Tellurium",
    I: "Iodium",
    Xe: "Xenon",
    Cs: "Caesium",
    Ba: "Barium",
    La: "Lanthanum",
    Ce: "Cerium",
    Pr: "Praseodymium",
    Nd: "Neodymium",
    Pm: "Promethium",
    Sm: "Samarium",
    Eu: "Europium",
    Gd: "Gadolinium",
    Tb: "Terbium",
    Dy: "Dysprosium",
    Ho: "Holmium",
    Er: "Erbium",
    Tm: "Thulium",
    Yb: "Ytterbium",
    Lu: "Lutetium",
    Hf: "Hafnium",
    Ta: "Tantalum",
    W: "Wolframium",
    Re: "Rhenium",
    Os: "Osmium",
    Ir: "Iridium",
    Pt: "Platinum",
    Au: "Aurum",
    Hg: "Hydrargyrum",
    Tl: "Thallium",
    Pb: "Plumbum",
    Bi: "Bismuthum",
    Po: "Polonium",
    At: "Astatum",
    Rn: "Radon",
    Fr: "Francium",
    Ra: "Radium",
    Ac: "Actinium",
    Th: "Thorium",
    Pa: "Protactinium",
    U: "Uranium",
    Np: "Neptunium",
    Pu: "Plutonium",
    Am: "Americium",
    Cm: "Curium",
    Bk: "Berkelium",
    Cf: "Californium",
    Es: "Einsteinium",
    Fm: "Fermium",
    Md: "Mendelevium",
    No: "Nobelium",
    Lr: "Lawrencium",
    Rf: "Rutherfordium",
    Db: "Dubnium",
    Sg: "Seaborgium",
    Bh: "Bohrium",
    Hs: "Hassium",
    Mt: "Meitnerium",
    Ds: "Darmstadtium",
    Rg: "Roentgenium",
    Cn: "Copernicium",
    Fl: "Flerovium",
    Lv: "Livermorium",
    Uue: "Ununennium",
    Ubn: "Unbinilium",
    Ubu: "Unbiunium",
    Ubb: "Unbibium",
    Ubt: "Unbitrium",
    Ubq: "Unbiquadium",
    Ubp: "Unbipentium",
    Ubh: "Unbihexium",
    Ubs: "Unbiseptiu",
};

const elementalForms = word => {
    const result = [];

    for (let char in elements) {
        console.log(char, elements[char]);
        for (let i = 0; i < word.length; i++) {}
    }

    // for (let i = 0; i < word.length; i++) {
    //     const chunk = [];
    //     for (let j = 0; j <= i; j++) {
    // 		if()
    // 	}
    // }
};

elementalForms("Hermes");

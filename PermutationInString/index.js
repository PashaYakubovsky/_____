var checkInclusion = function (s1, s2) {
    const prePattern =  s1.split("").join(",") + "" + s1.split("").join(",");
    const pattern = new RegExp(`[${prePattern}]`, "g");

    if (pattern.test(s2)) {
        return true;
    }

    return false;
};

checkInclusion("ab", "ab");

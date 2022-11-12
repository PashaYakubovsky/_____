const lengthOfLongestSubstring = s => {
    const uniq = s.match(/(.)(?!.*\1).*(.)(?<!\2.+)(?!.*\2)/gi);

    return uniq;
};

lengthOfLongestSubstring("abcabcbb");

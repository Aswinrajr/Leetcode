function minWindow(s, t) {
    if (!s || !t) return "";

    const tCount = {}, windowCount = {};
    for (let char of t) tCount[char] = (tCount[char] || 0) + 1;

    let left = 0, minLen = Infinity, result = "";
    let have = 0, need = Object.keys(tCount).length;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowCount[char] = (windowCount[char] || 0) + 1;

        if (tCount[char] && windowCount[char] === tCount[char]) {
            have++;
        }

        while (have === need) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                result = s.slice(left, right + 1);
            }

            windowCount[s[left]]--;
            if (tCount[s[left]] && windowCount[s[left]] < tCount[s[left]]) {
                have--;
            }
            left++;
        }
    }

    return result;
}
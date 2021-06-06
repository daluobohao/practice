/* 计算子字符串的个数 **/
export const countSubstrings = (str:string, subString:string) => {
    let count = 0,
        i = 0;
    while(true) {
        const r = str.indexOf(subString, i);
        if(r !== -1) {
            [count, i] = [count + 1, r + 1];
        } else {
            return count
        }
    }
}


// levenshteinDistance()
// demo
// console.log(countSubstrings('tiktok tok tok tik tok tik', 'tik'));




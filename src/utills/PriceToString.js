function PricetoString(number, query) {
    if (number === 0) {
        return query === 'not:d' ? '0' : '0đ';
    }
    let result = '';
    let n,
        temp = '';
    while (number >= 1) {
        n = number % 1000;
        if (number / 1000 >= 1) {
            temp = String(n).padStart(3, '0');
            temp = '.' + temp;
        } else {
            temp = n;
        }
        result = temp + result;
        number = Math.floor(number / 1000);
    }
    return query === 'not:d' ? result : (result += 'đ');
}
export default PricetoString;

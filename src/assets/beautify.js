
/* eslint-disable eol-last */
export default (number) => {
    if (number) {
        number =
            number.toString();
        if (number.length > 10) {
            return `${number[0]} (${number.substring(1, 4)}) ${
                number.substring(4, 7)}-${number.substring(7, 11)}`;
        } if (number.length > 7) {
            return `(${number.substring(0, 3)}) ${
                number.substring(3, 6)}-${number.substring(6, 10)}`;
        }
        return `${number.substring(0, 3)}-${number.substring(3, 7)}`;
    }
    return 0;
};

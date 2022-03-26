const optionRule = '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})';
const convertString = (str) => {
    const strArr = str.split(' AND ')
    const output = strArr.map(item => {
        let temp = item.split(' OR ')
        if (temp.length < 2) {
            let and =
                Number(temp[0].replace(/[{()}]/g, ''))
            return {
                'and': and
            }
        } else {
            let secondTemp = temp.map(i => Number(i.replace(/[{()}]/g, '')))
            return {
                'or': secondTemp
            }
        }
    });
    return output
}
console.log(convertString(optionRule))
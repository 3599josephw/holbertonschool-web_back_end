export default funciton appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
	idx += appendString;
    }

    return array;
}

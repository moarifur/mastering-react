import _ from "lodash";

/*
    Target: Paginate the data
    TODO-1: Formula to calculate the starting index of the items
    TODO-2: Steps -
        (1) slice(): slice an array starting from index number
            https://www.tutorialspoint.com/lodash/lodash_slice.htm
        (2) take(): number of items to take from an array
            https://www.tutorialspoint.com/lodash/lodash_take.htm
        (3) _(): Convert into a lodash wrapper object, in order to
            call slice() and take() method using a chain
        (4) value(): Convert that lodash wrapper object to a
            regular array
     Documentation: https://lodash.com/docs/
*/

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize // TODO-1
    return _(items).slice(startIndex).take(pageSize).value()
}
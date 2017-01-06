/**
 * Created by callie on 7/25/15.
 */
function where(collection,source) {
    var name = collection.last;
    return name;
}


console.log(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));

function arraySort (items) {
    const arrayA = [];
    const arrayB = [];

    items.forEach((item) => 
        { if (item.status === false) {
            arrayA.push(item);
        }else{
            arrayB.push(item);
        } }
    );

    return { arrayA, arrayB };
}

export default arraySort;
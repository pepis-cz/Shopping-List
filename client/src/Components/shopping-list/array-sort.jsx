function arraySort (list) {
    const arrayA = [];
    const arrayB = [];

    list.forEach((item) => 
        { if (item.status === false) {
            arrayA.push(item);
        }else{
            arrayB.push(item);
        } }
    );

    return { arrayA, arrayB };
}

export default arraySort;
export const getCost = (productHasInCart, priceArr, salePercent) => {
    if (productHasInCart) {
        let ObjectCost = priceArr.find((priceItem) => {
            const key = Object.keys(priceItem)[0];
            return key === productHasInCart.option;
        });
        if (!ObjectCost) {
            ObjectCost = priceArr[0];
        }
        const key = Object.keys(ObjectCost)[0];

        if (salePercent !== -1) {
            return (ObjectCost[key] * (100 - salePercent)) / 100;
        } else {
            return ObjectCost[key];
        }
    }
};

// useEffect(() => {
//     if (isMounted.current) {
//         dispatch(updateCart(_id, 'add', count));
//     } else {
//         isMounted.current = true;
//     }
//     if (product) {
//         let ObjectCost = price.find((priceItem) => {
//             const key = Object.keys(priceItem)[0];
//             return key === product.option;
//         });

//         const key = Object.keys(ObjectCost)[0];
//         setCost(() => {
//             if (salePercent !== -1) {
//                 return (ObjectCost[key] * (100 - salePercent)) / 100;
//             } else {
//                 return ObjectCost[key];
//             }
//         });
//     }
//     // eslint-disable-next-line
// }, [debounced]);

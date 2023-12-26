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

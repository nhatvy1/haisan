export const formatPrice = (val: any) =>
    new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'VND',
    }).format(val);
